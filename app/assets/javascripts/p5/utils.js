"use strict";

function nav(filename) {
  console.log("Navigating to filename: ", filename);

  var s = document.createElement("script");
  var content = document.getElementById("content");

  s.type = "text/javascript";
  s.src = filename;
  s.innerHTML = null;

  content.innerHTML = "";
  content.appendChild(s);
}