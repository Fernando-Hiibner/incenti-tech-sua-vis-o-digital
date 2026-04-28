(function () {
  var googleTagLoaded = false;
  var contentsquareLoaded = false;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer.push(arguments);
    };

  function loadScript(src) {
    var script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }

  function initGoogleTag() {
    if (googleTagLoaded) {
      return;
    }

    googleTagLoaded = true;
    loadScript("https://www.googletagmanager.com/gtag/js?id=G-TXJ7J2404S");

    window.gtag("js", new Date());
    window.gtag("config", "G-TXJ7J2404S");
    window.gtag("config", "AW-18088168150");
  }

  function initContentsquare() {
    if (contentsquareLoaded) {
      return;
    }

    contentsquareLoaded = true;
    loadScript("https://t.contentsquare.net/uxa/5fd4c5efcd298.js");
  }

  function scheduleInit() {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(initGoogleTag, { timeout: 7000 });
      window.requestIdleCallback(initContentsquare, { timeout: 15000 });
      return;
    }

    window.setTimeout(initGoogleTag, 5000);
    window.setTimeout(initContentsquare, 12000);
  }

  function scheduleAfterInteraction() {
    window.setTimeout(initGoogleTag, 1200);
    window.setTimeout(initContentsquare, 6000);
  }

  window.addEventListener("pointerdown", scheduleAfterInteraction, {
    once: true,
    passive: true,
  });
  window.addEventListener("keydown", scheduleAfterInteraction, { once: true });

  if (document.readyState === "complete") {
    scheduleInit();
  } else {
    window.addEventListener("load", scheduleInit, { once: true });
  }
})();
