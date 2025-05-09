(function () {
  var iframe = document.createElement("iframe");
  iframe.src = "https://quickassist-bot.netlify.app"; // hosted chatbot app
  iframe.style.position = "fixed";
  iframe.style.bottom = "10px";
  iframe.style.right = "10px";
  iframe.style.width = "390px";
  iframe.style.height = "670px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  iframe.style.backgroundColor = "transparent";
  iframe.allow = "microphone; camera";
  document.body.appendChild(iframe);
})();
