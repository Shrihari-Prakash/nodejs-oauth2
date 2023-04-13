$(function () {
  useTitle("Reset Password")
  let form = document.getElementById("reset-password-form");
  form.addEventListener("submit", resetPassword, true);
  STORE.autoFocusElement = $("#code");
});

function resetPassword(event) {
  event.preventDefault();
  const code = document.getElementById("code").value;
  const password = document.getElementById("password").value;
  const submit = document.getElementById("submit");
  submit.disabled = true;
  $.post("/user/reset-password", {
    code,
    password,
  })
    .done(function () {
      window.location = `/login${window.location.search}`;
    })
    .fail(function () {
      const buttonText = submit.value;
      onSubmitError({ errorText: "Invalid Code", buttonText });
    })
    .always(function () {
      submit.disabled = false;
    });
}
