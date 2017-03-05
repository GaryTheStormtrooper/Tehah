'use strict';

var m1 = 111132.92;
var m2 = -559.82;
var m3 = 1.175;
var m4 = -0.0023;
var p1 = 111412.84;
var p2 = -93.5;
var p3 = 0.118;
var degrad2 = 0.03490658503;
var degrad4 = 0.06981317007;
var degrad6 = 0.10471975512;
var degrad1 = 0.01745329251;
var degrad3 = 0.05235987755;
var degrad5 = 0.08726646259;

// Returns latitude in degrees of an equivalent distance in "meters"
// at a particular "latitude".
function AtLatitude(meters, latitude) {
    var a1 = m2 * Math.cos(latitude * degrad2);
    var a2 = m3 * Math.cos(latitude * degrad4);
    var a3 = m4 * Math.cos(latitude * degrad6);
    return Math.abs(meters / (m1 + a1 + a2 + a3));
}

// Returns longitude in degrees of an equivalent distance in "meters"
// at a particular "latitude".
function AtLongitude(meters, latitude) {
    var a1 = p1 * Math.cos(latitude * degrad1);
    var a2 = p2 * Math.cos(latitude * degrad3);
    var a3 = p3 * Math.cos(latitude * degrad5);
    return Math.abs(meters / (a1 + a2 + a3));
}

module.exports = {AtLatitude, AtLongitude};