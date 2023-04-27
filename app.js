"use strict";

window.addEventListener("load", start);

function start() {
  console.log("hello Java");
  feature2();
  test1();
}

function feature2() {
  console.log("Feature2");
}

function test1() {
  console.log("hey");
}

function feature3() {
  console.log("Feature3");
}

function feature4() {
  feature3();
  console.log("Feature4");
}
