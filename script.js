window.addEventListener('load', () => {
  var red = document.querySelector('#r');
  var green = document.querySelector('#g');
  var blue = document.querySelector('#b');

  r.addEventListener('change', rSelect);
  g.addEventListener('change', gSelect);
  b.addEventListener('change', bSelect);
});

var rSelect = (event) => {
  document.querySelector('#rtext').value = event.target.value;
  rgbResult();
};

var gSelect = (event) => {
  document.querySelector('#gtext').value = event.target.value;
  rgbResult();
};

var bSelect = (event) => {
  document.querySelector('#btext').value = event.target.value;
  rgbResult();
};

var rgbResult = () => {
  var r = document.querySelector('#rtext').value;
  var g = document.querySelector('#gtext').value;
  var b = document.querySelector('#btext').value;
  document.querySelector(
    '#resultado'
  ).style.backgroundColor = `rgb(${r},${g},${b})`;
};
