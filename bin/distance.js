'use strict';

function Distance(d) {
    var R = 6371e3; // metres
    var φ1 = d.lat1.toRadians();
    var φ2 = d.lat2.toRadians();
    var Δφ = (d.lat2-d.lat1).toRadians();
    var Δλ = (d.lon2-d.lon1).toRadians();
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

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

function AtLatitude(meters, latitude) {
    var a1 = m2 * Math.cos(latitude * degrad2);
    var a2 = m3 * Math.cos(latitude * degrad4);
    var a3 = m4 * Math.cos(latitude * degrad6);
    return meters / (m1 + a1 + a2 + a3);
}

function AtLongitude(meters, latitude) {
    var a1 = p1 * Math.cos(latitude * degrad1);
    var a2 = p2 * Math.cos(latitude * degrad3);
    var a3 = p3 * Math.cos(latitude * degrad5);
    return meters / (a1 + a2 + a3);
}

module.exports = {Distance, AtLatitude, AtLongitude};