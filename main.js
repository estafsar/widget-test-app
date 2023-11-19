function passAttributes() {
  let widget = document.getElementById("estafsarWidget");
  let company;
  let channel;

  fetch("./assets/data.json")
    .then((response) => response.json())
    .then((data) => {
      company = data.company;
      channel = data.channel;

      widget.company = company;
      widget.channel = channel;
    });
}

window.onload = function () {
  passAttributes();
};
