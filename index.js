let index = 0;
document.body.onmouseover = function () {
  let colors = ["red", "green", "black", "purple", "blue"];
  document.getElementsByTagName("body")[0].style.background = colors[index++];
  if (index > colors.length - 1) index = 0;
};
