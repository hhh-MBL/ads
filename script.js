(adsbygoogle = window.adsbygoogle || []).push({});

function refreshAd() {
  var container = document.getElementById("ad-container");
  container.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-XXXXXXXXXXXXXX" data-ad-slot="XXXXXXXXXX" data-ad-format="auto" data-full-width-responsive="true"></ins>';
  (adsbygoogle = window.adsbygoogle || []).push({});
}

setInterval(refreshAd, 5000);
