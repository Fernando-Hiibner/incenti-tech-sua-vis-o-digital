(function () {
  var pathname = window.location.pathname;
  if (pathname !== "/" && pathname !== "/index.html") {
    return;
  }

  var preferred = "en";
  var languages =
    Array.isArray(navigator.languages) && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language || ""];

  for (var i = 0; i < languages.length; i += 1) {
    if (String(languages[i]).trim().toLowerCase() === "pt-br") {
      preferred = "pt-br";
      break;
    }
  }

  window.location.replace(preferred === "pt-br" ? "/pt-br/" : "/en/");
})();
