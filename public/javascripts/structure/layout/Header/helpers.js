'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goTo = goTo;

function goTo(href) {
  window.location.href = 'http://www.localhost:3000' + href;
}