function passAttributes() {
  let widget = document.getElementById("estafsarWidget");
  let provider;
  let channel;

  fetch("./assets/data.json")
    .then((response) => response.json())
    .then((data) => {
      provider = data.provider;
      channel = data.channel;
      widget.provider = provider;
      widget.channel = channel;
      console.log(data);
    });
}

window.onload = function () {
  passAttributes();
};
