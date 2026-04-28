(function () {
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

  function initAnalytics() {
    loadScript("https://www.googletagmanager.com/gtag/js?id=G-TXJ7J2404S");
    loadScript("https://t.contentsquare.net/uxa/5fd4c5efcd298.js");

    window.gtag("js", new Date());
    window.gtag("config", "G-TXJ7J2404S");
    window.gtag("config", "AW-18088168150");
  }

  function scheduleInit() {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(initAnalytics, { timeout: 2500 });
      return;
    }

    window.setTimeout(initAnalytics, 1500);
  }

  if (document.readyState === "complete") {
    scheduleInit();
  } else {
    window.addEventListener("load", scheduleInit, { once: true });
  }
})();
