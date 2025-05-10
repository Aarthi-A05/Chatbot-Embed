(function () {
  const settings = window.chatbotSettings || {};
  const queryParams = new URLSearchParams({
    api_id: settings.api_id || "",
    user_id: settings.user_id || "",
    name: settings.name || "",
    email: settings.email || "",
    created_at: settings.created_at || "",
  }).toString();
  console.log("🚀 chatbotSettings:", window.chatbotSettings);
  const iframe = document.createElement("iframe");
  iframe.src = `https://quickassist-bot.netlify.app?${queryParams}`; // add params
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
