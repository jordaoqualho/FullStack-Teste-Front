function tempAlert(msg, duration) {
  var el = document.createElement("div");
  el.setAttribute(
    "style",
    "position:fixed;top:0px;left: 50%;padding: 15px 20px;  font-weight: 300;border-radius: 5px;margin-top: 80px;transform: translate(-50%); background-color: #7ed321;font-size: 20px;  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.8);color:#fff;z-index:1000;"
  );
  el.innerHTML = msg;
  setTimeout(function () {
    el.parentNode.removeChild(el);
  }, duration);
  document.body.appendChild(el);
}

export default tempAlert;
