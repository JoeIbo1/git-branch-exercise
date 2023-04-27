"use strict";

window.addEventListener("load", start);

function start() {
  console.log("hello Java");
  feature2();
  test1();
  test2();
  test3();
  feature4();
}

function feature2() {
  console.log("Feature2");
}

function test1() {
  console.log("hey");
  console.log("nr1");
}

function feature3() {
  console.log("Feature3");
}

function feature4() {
  feature3();
  console.log("Feature4");
}

function test2() {
  console.log("anden test");
}
function test3() {
  console.log("tredje test");
}
