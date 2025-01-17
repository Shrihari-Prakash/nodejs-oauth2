export function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
}

export function isEmail(str) {
  const regexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  return regexExp.test(str);
}

export function useTitle(appName, string) {
  $(".app-name-titlebar").text(`${appName} - ${string}`);
}

export function getTheme() {
  const urlString = window.location;
  const url = new URL(urlString);
  const theme = url.searchParams.get("theme") || "dark";
  return theme;
}

export function useFont(fontFace, fontUrl, onDone) {
  let appFontFace = fontFace;
  let appFontURL = fontUrl;
  if (!appFontFace && !appFontURL) {
    appFontFace = "Inter";
    appFontURL =
      "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap";
  }
  console.log(`Switching to "${appFontFace}" as default font.`);
  console.log(`Loading font from ${appFontURL}.`);
  const link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", appFontURL);
  if (!("onload" in link)) {
    onDone();
  } else {
    console.log("Link onload is supported. Spinner will be hidden after font loads.");
    link.onload = onDone;
    link.onerror = onDone;
  }
  document.head.appendChild(link);
  document.querySelector("body").style.fontFamily = appFontFace;
}

export function useFavicon(uri) {
  const favicon = uri;
  if (!favicon) return;
  var link = document.querySelector("link[rel*='icon']") || document.createElement("link");
  link.type = "image/png";
  link.rel = "shortcut icon";
  link.href = favicon;
  document.getElementsByTagName("head")[0].appendChild(link);
}

export function setStyleProperty(name, value) {
  document.documentElement.style.setProperty(name, value);
}

export function changeToLightVariable(variable) {
  setStyleProperty(variable, `var(${variable}__light)`);
}

export function getPlaceholder(text, configuration) {
  if (configuration["form.input.can-display-placeholder"]) {
    return text;
  } else {
    return "";
  }
}

export function prepareAuthorizationParams(configuration) {
  const urlString = window.location;
  const url = new URL(urlString);
  const redirect = url.searchParams.get("redirect") || url.searchParams.get("redirect_uri") || configuration["oauth.redirect-uri"];
  const state = url.searchParams.get("state") || uuidv4();
  let scope = url.searchParams.get("scope") || "delegated:all";
  // Remove any duplicate scopes.
  scope = Array.from(new Set(scope.split(","))).join(",");
  const codeChallenge = url.searchParams.get("codeChallenge") || url.searchParams.get("code_challenge");
  const codeChallengeMethod = url.searchParams.get("codeChallengeMethod") || url.searchParams.get("code_challenge_method");
  const clientId = url.searchParams.get("clientId") || url.searchParams.get("client_id") || configuration["oauth.client-id"];
  const params = {
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirect,
    scope: scope,
    state: state,
  };
  if (codeChallenge && codeChallengeMethod) {
    params.code_challenge = codeChallenge;
    params.code_challenge_method = codeChallengeMethod;
  }
  return params;
}

export async function afterLogin(configuration) {
  let authParams = prepareAuthorizationParams(configuration);
  const clientInfo = await $.get(`/client/${authParams.client_id}`);
  console.log("Client role", clientInfo.data.role);
  if (clientInfo.data.client.role === "internal_client") {
    authParams = new URLSearchParams(authParams);
    window.location = `/oauth/authorize?${authParams.toString()}`;
  } else {
    window.location = `/consent${window.location.search}`;
  }
}

export const errorTextTimeout = 6000;

export const humanReadableToSnakeCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/\s+/g, "_")
    .toLowerCase();
}