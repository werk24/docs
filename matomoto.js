var _paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
_paq.push(["setCookieDomain", "*.werk24.biz"]);
_paq.push(["setDoNotTrack", true]);
_paq.push(["disableCookies"]);
_paq.push(["trackPageView"]);

const mamotoLog = (function () {
  var u = "https://werk24.matomo.cloud/";
  _paq.push(["setTrackerUrl", u + "matomo.php"]);
  _paq.push(["setSiteId", "1"]);
  var d = document,
    g = d.createElement("script"),
    s = d.getElementsByTagName("script")[0];
  g.type = "text/javascript";
  g.async = true;
  g.defer = true;
  g.src = "//cdn.matomo.cloud/werk24.matomo.cloud/matomo.js";

  s.parentNode.insertBefore(g, s);
})();
