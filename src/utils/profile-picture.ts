import { UserInterface } from "../model/mongo/user";
import { profilePicturePath } from "../service/api/user/profile-picture.patch";
import { Configuration } from "../singleton/configuration";
import { S3 } from "../singleton/s3";

export const attachProfilePicture = async (input: UserInterface | UserInterface[]) => {
  if (!Configuration.get("privilege.can-use-profile-picture-apis")) {
    return input;
  }
  const expiry = Configuration.get("user.profile-picture.signed-url.expiry");
  if (Array.isArray(input)) {
    const users = input;
    for (let i = 0; i < users.length; i++) {
      if (users[i].profilePicturePath) {
        const fileName = `${profilePicturePath}/${users[i]._id}.png`;
        users[i].profilePictureUrl = (await S3.getSignedUrl("GET", fileName, {}, expiry)) as string;
      } else {
        (users[i] as any).profilePictureUrl = null;
      }
    }
    return users;
  } else {
    const user = input;
    if (user.profilePicturePath) {
      const fileName = `${profilePicturePath}/${user._id}.png`;
      user.profilePictureUrl = (await S3.getSignedUrl("GET", fileName, {}, expiry)) as string;
    } else {
      (user as any).profilePictureUrl = null;
    }
    return user;
  }
};
