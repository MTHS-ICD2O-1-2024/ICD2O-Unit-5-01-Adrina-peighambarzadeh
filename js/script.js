// Copyright (c) 2025 Adrina peighambarzadeh All rights reserved
//
// Created by: Adrina peighambarzadeh

// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"
/**
* This function calculates the area of a triangle.
*/
function calculateConvert() {
  // input

  const dgreeInFahrenheit = parseFloat(
    document.getElementById("dgree-in-fahrenheit").value
  )

  // process
  const ConvertedToCelsius =
    (dgreeInFahrenheit - 32) * (5 / 9)

  // output
  document.getElementById("answer").innerHTML =
    "your dgree in celsius is: " + ConvertedToCelsius.toFixed(3) + "°C"
}
