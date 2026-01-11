// ==UserScript==
// @name             Reddit++
// @name:ru          Reddit++
// @description      A lot of enhancements for new design of reddit.com like unwrapped feed buttons, bigger fonts, view images without redirect, filtering content by keywords and many more...
// @description:ru   Множество улучшений для нового интерфейса reddit.com, таких как развернутые кнопки лент, увеличенный шрифт, увеличение изображений без редиректа, фильтрация контента по ключевым словам и много другое...
// @namespace        RedditPlusPlus
// @version          1.2.3
// @author           lnm95
// @icon             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAQRklEQVR4nN2bCZAc1XnHf6+75569L0lI6DJCAmIQESBBEnFIwhyKwmHsshMnBRhSwQZifCSOKxw+iEPABldMUmCb4KtiCDKXicRhCZAAQSQkJJCwVtrVXtpzdmfnnu5+qdczOzuzO7M7e2BC/lVTuz3b773v+7/vescKpgi5fooNBB9HcgNwMbAE0Eq8B2nABurnw6KPQUUlhIbg6P4hQv0/wc0PEByhhNTi+alqA8bUm0yCrQguYS02m5Bcg2ReWe0sRY0LTloOl16PPHM9VDZAfwe89Isq8dwjX6C3x4ebuxB0zpa4s0dAgGqi3MwGrgcWTKmtADsG6flNcPkNuDZ+YXSSq+qhaRHS5TXEQ9+6AezTgFuB3Vl7mRGKm+NU4KYGwTeJ0grcOWXltQwBvzPh5wMeftGSpDs0iJQyR4L0V2KfeSGyqV6Q5jxsdiB4CDHFsUoMn4MadLJPDuehIfkyKY4g+QZQOeXRdehI6dzWVsXGnhP48hGNn728m6PNR5DWyORKTCFIBWqwfX71iEO75Foku4BbcvKvn6IO03YBm2Xs5FEE50yrvVCCQldS5+bOWvaKOv44GGb1Qh91G9ZQdfIKYrbElUiS9nqIKkE7WvGEex3S8oLgHOD7CP4ajUuwaGGDgK1ywuHzMXUXEPwNgv9BTkN5kf1oEEbnxwMVbLcbuKrO5JtN/dwY7OFq2UJgqIeuJLTZHjpjEN+zC9eWR9DC0cyUjc0CkuVYHEBws/O8ofzkVvDmWPMowJ1CYwf3AF+astI2GdO1GDFh9iXg8rY5nN/o4V+qO2gUJiQgVemn/9xPMnzmxViVDRih49TsfIyat55Gt6Uy/lwfJcb7J7by9YmUEULkvV4OAecKH0F+DlxR9O8y7yPy7Epmlc/FagNcbmzNxbNhnU+1VfPTZXE2eeMYZgrSKUiZzvtWdQArWI0R6UMbTmb6dOVJPfEkbybCZ9kp45MRMHkMyCj/G+D8ksqbI7MrQJMZQUX2+7QAL1DbCE0LYeFyrIaF+PvSXLDrGEsvWI4RMKHrCLT/Do63QH8Pen8UXZm8K6u4IjEpQMhMHCjmCqO4wpH5XHFpKRJyZBToMs4ChGAD/1Vy5hNZxZuqkQtOAa8f0d0CrYdhWH3vRa66BM68AJafA/UngMuL1A1StiScMKnxuTEUaaYJ6QT0dcDBN2DPdsSup6E7BRU4laGcuwSiw4i2d6F7KEOEf0KX2Mx5XM3tsqBeKN8FLhZ3I/m7ol3HgOpKWPcZ5NqroaYRNB0SUdizDXraYcUqWLEaaprAX5gl8wceJ38sDIM9cOBVeG83NC2AleeDL5gharAb8dtfwYu/hMGIKsImwn1slbdNnYAN4hYnxRRDCvBWwhXXIa+4BRoXFr6kSIgOQV15VXBJKHkGuiBQBd4xWnYfRTxxP/z6R5CMZIJjKQhuYov8YfkEXCIWYXMA6RhYIZQxhYGNn0TeeM945fMw4SxPKG+Z7RQJ/3YbbNmcsYLSMSGCziqek4cYQ0DxOsDiuaLKk/X5gIG95nLsMpQfyYDlZmaRlzyYpJ1sWoy1eiPSq0+2Kghi8aiTysdgPAEZ019esisb7Npq0v5qh4ucMKrMzFfCtokPhRk4dIhweztmMjEpCU7iSCUZ7uwkdPAQiaGw00+xdiI7F2ZFLbIqWI6Jnc2r42uYQgIuFmpx8bXJpJS2RTptkhzJgLaNrdwnL4YMtLbxznfv4sh1Gzl682fofWU7ZsosSYKjfNqk9+VtHL3pUxz9/Cb23/sdBtrac+84liEltm07WwcqCaWTKbBkeSYm+AcuFzWlCYCvAHMn7EQHbSBM4vgxwilJTGYEl7bMreAi0SR9W57B/9SPWWE287F5En33VpIqPRYx65HnRPNB7McfZOHh11i+WKeydRf9r7zIcH8oY1VKeSkxLctZH4QTFqmuFrRwpFwfqyZZaAU5AuQGZ2n5V5N2oYOwLTw7niC69zW6bEhIkRUu80q0sx1z306akiEqmiRBsx3/20+jtR/KFY35GPlO62omePhlqmstgr4Q9R17sN7aTux4d0bGrJXFpcZxCfG9O3DvfBJMu/xVjeBm+WdUjyMA4ezeVJTViRcCB16jcvN9iD2vk7Sk44/KFRTslImbKEGV+v0S2lrwDrbikokJXdWNScCTyBQ+4S58/YO44v1ImZlex9WU2ZsW2ls7qdh8H/79b4CnTOUzqCTKF8cTYHNT2V2oitc2aXjlCeY99T30vg5SQiMtbdK2xD1nLr6VZ2EuqEd63OD3Y/zhRRgLThrZ/yj60RcsxTj7IqgIIF0urAX1+FaejWfunIzp25K00ND725n71L3U73gSzTKns6j//EjUUMWk2khYC/ztlLpQsSAORjKKtew0UotOBdPCtixclQH0+nmYbjcuXzXi5LMQm26Fk1Y51fVIxhh1B6G+RtTMgXlLsawkdtWJxM+6FM+6P8c9b54TdE0JaUPHtfclgs89it43mNmGmUqRkUEVS9h25xFaMtxJPlt2os6HxwnDyK6jpNO2s4sjpYUel7jmL4HP3U4qFkVXawS3QSKRJB6JkE6lMJW7ZLOGYRi4XW58wQCeZefA4lXY8SiegB8pNMxEEsuysDRdcYzR1YpMJUdXh9OBxiZgm5GdgLXT6sQFeqwH14GXSa67DsvrxZa2s27XbInhcmMEK4nGE9x793d48/XXnZkcSWUyGzV1w0DXBYams+qcc/jq1/4eT7ASy7IxzRS2aWVyvrSxYiEqD2xDj3ZPvjcwESRXKqs35CUsxWTZNFmEtIX74B70Xc8wvPoqPJqGx0qg64bjDpbLjcdtEBse5pVtvyWZSIDbB5qGUK7gbJjYkErg9rhZceoK3G6DVCrtKK9SniIg5faSMgXB15/GdWA3pKypBr+xOFFlPv2OJVwEXDPtblRAjMfQBzoYPPF0YlXznGgtkwlMKbFsC03XaWxqIhwe4v3mZuxEHKSW3SWywEzi8vq48qqruO6GG6mtrycej5NMp0klU8SEm6h0oTfvpeFX38Lb9j5Cl7Oxp71bEfCXzh7vDAhQM+np7oDEMJG6E4lWzSVlK72SpNNpkqk0CxcvYeGixbh9AdISjGAF3qoqauobWLRkKZuuzCj/8ZVn0jcwQFzFi5TtKB+XBq7mPTQ++32q39qSUV6fsfJqApqF3OAsfD4xw46yuz/QvfYajq+7lvj8P0AIDYGFZtvomqC2tppELMq+vXt55713icbj+D0+Tj11OStPPwNfoILQ4KDj+xY6ttCcvB9o3cecFx6i8ZXHM4Fv9o5zHlcEvIlk1ax0l84QET3pdHrW30DojE9guoOOidu26bzichn4vT48Hje6pjnukkymiSfipNKZd9TGitDd6MkwNe88T9PzDxM8tCcT9GbxMM+UvCtS6+hxCRpmrVeV3Uwdq7KW2ClrGF51GfFla0hWNWIZXqTQnUwhle+rNCgEQjdAEwjLQk8ncA/34Du4g6pdTxE4uAs9MogwrNnw+UIIjisLSCIn3E8pD0vWwvzsKlq5xN4XkeF2rMp6rMZ5pBecgqk+DYuxKuqQhgep6wiVAdIxtEgIV08LxrH9GO3vYXR3YoR7Eenk6Cbrn9w4Kkq4H95+fKZSJ4RcP+1MOoozroZ/fqzgq95D79Jw46mZ2KACls+LDNQj/dVIvx+8rsweorQgnoZYDC02hIj2QjyRIdHFaLC760VYfWGu/1QqRfJH91Cx+RszEn12PKqyruBxcHCQ5sFhGjxk/FZFsngCMdSOsNpHzw5Gqs+RAxM9W126i6yZ6+cUPLa2HsObSJS5eisNI7uv4J1hPwXo6+t3Pjnb0rIjjIwixxxs55NRhj0ODAzQ199HfTQ6U1FT6oR3cKa95EPV7Cr3KxMtQOHqJ6O0NuYUqUxnVOW0GsO2ZnY9wJQMaSkIzaiXDxUzC1+GoFVz6+yfbRXUtrOmzXbOGj+GGL/JO8VO6NOcM/VZhBJMLW/9/uK76rMBXdfwer24vb6Z9SbZp2rVfbMpnJr5QCDAnDlNs9ltATweDzXVNQSra6bQqghs3jQQbC/Lla79IQRKJJ2GwiOwioogbrcL+6b/KO0Ke1+Fl/999FkVUpddX3r8usbcr4qAhoZ6PGsugLk/Ld3mZ3dAqLn0393scZKPXO9ccDqx5IvX3A3XFz8jLQaVCSaLA11dx2n64mq0cGvmi5+0wAmlT5ryIbMbKrpeekmYTCYZ+s1jND74F6VeeV88z8kZCQVPTDhi0/yyBBuBUjz//G0s+vv7aT3WSuSE00f/Uqby+WOUgpqAY8fa6ExYpTtQlp+rBG2eRDh37yZFKBTCNM3cDLtcLsck1U+R3fBUOTqRSDi1wNgjd7XTc7z7OB0dnSxLJsYNF4lEnLbOIUs2oKr+3W53bsaVgk4pnMzsFeaPYat7B+Ewbe3t6AP9pdWRzo2XLAEvsJ0NtCFL3LvrbicWizmsDg4N5ghQSldVVjn+WFVV5QioTDMajdLd3UNocJSsEagiRpE4NDSEL3RsdIyOVtql4ZCjFFNKKYJVNqmvq6eurhafz+d8r5QfGAg51aAaS405Mob6PRaLO9Xi4lB3qdlvEVvzLEBk3Orh7EXH8Xj+YVK6B/9AP3o8njmwVLPjdhOorMJ38mnoF27MECslw8MROjo7mfvSYwhNQ9ONnIBS2jSZJoHhPnyhg6PEPPiPGHOXUTscxkqnMwToOl6/n8raejyXfxp8PqcfRVBvXy/xt3ZQ0/oumqaj6VrubFlViAsskwXHdhcnwOZfR34dXQyleQAXtxW98BhqpvqXXxo9TxoLtUzNEqCgTFiZ4UW7HizVYhxcux5lzkQvnLculwmUFamZr205wClTGMOBYBjBf4485iKJ2MYgkgem1ltxKL+07Rlf4y0JZR1OpplOtWnziNhK28hjYQ8e7lOr2ZkIN2LqE2WB2YAThCdIgyXQhebcdcyhkIBnZAjJtz9QyT9cfJctsi1fgvE29EeOFbzx/1D5g2yV94/9cjwB6k6d7pwVRKYziqoB0mb6A40BKrWappU7WisDMQSXFnuteBRRt6nEJFdlikAFp97ePifPq5OdDwJqu03l/+HhYWzLLHeEryM5Wj4BCupeneR7ZXUf7neKk8OHm2k+coTOzi5kJDy76sci9PT0Ov2rgkyR7ErGJm+nLk/D/aWu0E98U1TtOKzn8ZJXZfOQXn4ZPUtXEQuHYXiAE1pewz/4fpnaTQ5ZvYTwyj9lQPeSjEao7D3KvMPPTtxOsJmtXDVWsandFs9cln4bpnmC/OFhGxGKXpae/KJkPir46kdQ+c2O8kEmDUQTE3CxuB3JHbMp2e8B9zk3xNXMl/GvM6UPRj56ykeczJV3KbocFK1X5QY+WsoLdqHxOfHfHJpq03Eu8BFTXi3gvsK5rJmO8gqFWWAdtyLKzP0fLsIIfoCLe8WzMzvYKYwBGp+ehbPiDxJqIfMwAR4Qv56dI71CAgTd/wcJOOZs2qp9yxfYLmZ6HjYGYwm4Bcki51/ef79Ql4gHEY4570fS4hzYpNkmtjF6X362AfwvvG5Pojz6v/sAAAAASUVORK5CYII=
// @source           https://github.com/lnm95/redditPlusPlus
// @license          MIT
// @match            *://*.reddit.com/*
// @grant            unsafeWindow
// @grant            GM_getValue
// @grant            GM_setValue
// @grant            GM_deleteValue
// @run-at           document-start
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/app.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `faceplate-banner {
  max-width: 1000px !important;
}
.pp_hidden {
  display: none !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/biggerFonts.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:is(.text-14-scalable):not(.pp_defaultText .text-14-scalable) {
  font-size: var(--pp-biggerFonts-Content) !important;
  line-height: 1.4rem !important;
}
faceplate-hovercard .text-12 {
  font-size: 0.9rem !important;
}
shreddit-composer > div[role='textbox'] {
  font-size: var(--pp-biggerFonts-Content) !important;
  line-height: 1.4rem !important;
}
:is(.text-12):not(.pp_defaultText .text-12) {
  font-size: var(--pp-biggerFonts-Other) !important;
}
shreddit-comment-action-row {
  margin-bottom: 15px !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/bookmark.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_bookmark_hiddenButton {
  width: 32px;
  height: 32px;
  position: absolute;
  opacity: 0 !important;
  overflow: hidden;
}
.pp_bookmark_hiddenButton > div {
  padding: 0px !important;
}
.pp_bookmark_post {
  margin-right: 5px !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/collapseAwards.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_awardButton {
  max-width: 100px;
  opacity: 1;
  transition: all 0.5s !important;
}
.pp_awardButton_hidden {
  display: none;
}
.pp_awardButton_collapsed {
  max-width: 0px !important;
  opacity: 0 !important;
  visibility: hidden !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/comments/comments.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_muted_avatar {
  opacity: 0.5;
}
.pp_muted_content {
  color: var(--pp-color-muted-conent);
  transition: color 0.2s;
}
.pp_muted_content:hover {
  color: var(--pp-color-muted-conent-hover);
}
:root {
  --pp-color-muted-conent: #a5a5a5;
  --pp-color-muted-conent-hover: #636363;
}
:root.theme-dark {
  --pp-color-muted-conent: #595959 !important;
  --pp-color-muted-conent-hover: #adadad !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/comments/hideShare.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `shreddit-comment-share-button {
  display: none !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/comments/sortButtons.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_sortDropdown_hidden {
  display: none;
}
.pp_sortButton {
  color: var(--color-neutral-content-weak);
  font: var(--font-button-sm);
  text-wrap: nowrap;
  border-radius: 32px;
  height: 32px;
  padding-left: 10px;
  padding-right: 14px;
  gap: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 5px;
}
.pp_sortButton > span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp_sortButton:hover {
  background-color: var(--color-button-plain-background-hover) !important;
}
.pp_sortButton_active {
  color: var(--color-neutral-content-strong) !important;
  background-color: var(--color-secondary-background-selected);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/comments/userTags.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_tagsPanel {
  display: flex;
  justify-content: space-around;
  width: auto;
  border-bottom: solid 1px var(--color-neutral-border-weak);
  padding: 4px;
  gap: 8px;
  margin-bottom: 4px;
}
.pp_tagButton {
  cursor: pointer;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  height: 45px;
  padding: 4px 20px;
  margin: 0px 0px;
  color: var(--color-neutral-border-weak);
  border-radius: 5px;
}
.pp_tagButton svg {
  width: 20px;
  transition: transform 0.15s;
}
.pp_tagButton:hover svg {
  transform: scale(1.2, 1.2);
  transition: transform 0.3s;
}
.pp_tagButton:hover {
  background-color: var(--color-neutral-background-hover);
}
.pp_tagButtonActive:hover {
  opacity: 0.8;
}
.pp_tagHint_offset {
  left: 50%;
  position: absolute;
}
.pp_tagHintContainer {
  display: flex;
  justify-content: center;
}
.pp_tagHint {
  display: flex;
  align-items: center;
  position: absolute;
  top: -35px;
  height: 25px;
  padding: 0px 12px;
  color: var(--color-neutral-background-weak);
  font: var(--font-small);
  background-color: var(--color-neutral-content-strong);
  border-radius: 5px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/customFeed/customFeed.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_customFeed_masthead_ico {
  width: 50px !important;
  height: 50px !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/feed/feedButtons.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_feedPanel {
  width: 100%;
}
.pp_feedPanel > div {
  justify-content: flex-end;
}
.pp_feedPanel_buttons {
  display: flex;
  gap: 4px;
  width: 100%;
  height: 40px;
}
.pp_feedPanel_settings_container {
  display: flex;
  align-items: center;
}
.pp_feedPanel_settings {
  color: var(--color-neutral-content-weak);
  border-radius: 18px;
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0px 8px;
  position: relative;
  cursor: pointer;
}
.pp_feedPanel_settings:hover {
  background-color: var(--button-color-background-hover);
}
.pp_feedPanel_settings:active {
  background-color: var(--button-color-background-activated);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/feed/feedSettings/feedSettingsWindow.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_feedSettings_overrideSub {
  z-index: 20;
  position: relative;
}
.pp_feedSettings_overrideSub::before {
  border-radius: 16px;
  border: 2px solid #ffc800;
  position: absolute;
  content: '';
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -8px;
  z-index: 15;
  pointer-events: none;
}
.pp_feedSettings_overrideTittle {
  color: #e1b30d !important;
}
.pp_ui_disabled {
  opacity: 0.5;
  filter: grayscale(1);
  pointer-events: none;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/filters/filters.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_hidden_comment > [slot='commentAvatar'] {
  display: none;
}
.pp_hidden_comment > [slot='commentMeta'] {
  display: none;
}
.pp_hidden_comment > [slot='comment'] {
  display: none;
}
.pp_hidden_comment > [slot='actionRow'] {
  display: none;
}
.pp_hidden_button {
  position: relative;
  left: -32px;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  width: fit-content;
  gap: 8px;
  background-color: var(--color-neutral-background);
}
.pp_blured_content {
  filter: opacity(50%) saturate(50%) blur(6px);
  max-height: 40px !important;
  user-select: none;
  cursor: pointer;
  overflow-y: hidden;
}
.pp_blured_content_area {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
}
.pp_blured_content:hover {
  filter: opacity(75%) saturate(75%) blur(4px);
}
.pp_blured_content_animator {
  max-height: 9999px;
  transition: max-height 1s ease-in, filter 0.2s ease;
}
.pp_blured_button_container {
  display: flex;
  justify-content: center;
  max-height: 0px;
}
.pp_blured_button {
  border-radius: 8px;
  z-index: 1;
  pointer-events: none;
  position: relative;
  top: 6px;
  height: 100%;
  max-width: 75%;
  box-shadow: 0px 0px 0px 2px #ffffff61;
}
.pp_blured_button_content {
  display: flex;
  align-items: center;
  padding: 0px 16px;
  gap: 6px;
  color: #ffffff;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
}
.pp_blured_button_content > svg {
  min-width: 16px;
}
.pp_blured_button_content > span {
  display: block;
  overflow: hidden;
  padding: 6px;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  font-weight: 500;
  text-overflow: ellipsis;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/filters/filtersWindow.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_filter_list {
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 20px 40px;
  gap: 0.5rem;
  list-style: none;
}
.pp_filter_element {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  border: solid 2px;
  border-radius: 15px;
  box-shadow: var(--filterShadowColor) 0px 2px 4px 0px;
}
:root {
  --filterShadowColor: #d9d9d9;
}
:root.theme-dark {
  --filterShadowColor: #5d5d5d !important;
}
.pp_filter_dragged {
  opacity: 0.25;
}
.pp_filter_element > div {
  width: 100%;
  padding: 0px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.pp_filter_element_dragAnchor {
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 48px;
  height: 40px;
  color: #8a8f91;
}
.pp_window_elementsContainer > .pp_filter_element:hover {
  background-color: var(--color-neutral-background-hover);
}
.pp_filter_element_colorPicker {
  cursor: pointer;
  width: 36px;
  height: 40px;
  margin: 2px;
}
.pp_filter_element_colorPicker > input {
  height: 100%;
}
.pp_filter_element_toggles {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.pp_filter_element_toggles > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.pp_filter_element_toggles > div > span {
  text-wrap-mode: nowrap;
}
.pp_filter_addButton {
  height: 3rem;
  border-radius: 15px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/filters/hiddenContent.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_hiddenContent_button {
  position: fixed;
  width: fit-content;
  height: 50px;
  bottom: -100px;
  border-radius: 12px;
  border: solid 2px var(--color-button-secondary-background);
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0px 16px;
  cursor: pointer;
  user-select: none;
  transition: bottom 0.4s ease, background 0.15s ease;
}
.pp_hiddenContent_button:hover {
  background: var(--color-button-secondary-background);
  border-color: transparent;
}
.pp_hiddenContent_button:active {
  background: var(--button-color-background-activated);
  border-color: transparent;
}
.pp_hiddenContent_button > svg {
  min-width: 16px;
}
.pp_hiddenContent_button > span {
  font-weight: 500;
  text-wrap-mode: nowrap;
}
.pp_hiddenContent_button_visible {
  visibility: visible;
  bottom: 20px;
}
:root {
  --pp-backgroundButton: #848d9233;
  --pp-backgroundButtonActive: #e5ebee6e;
}
:root.theme-dark {
  --pp-backgroundButton: #3f484d33 !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/header.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#reddit-logo {
  text-decoration: none;
}
#user-drawer-content {
  max-height: 90vh;
  overflow: auto;
}
.pp_logo {
  width: max-content;
  color: var(--shreddit-color-wordmark);
  font-size: 22px;
  font-weight: 1000;
  letter-spacing: -2px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/notifications.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `click-card > div[slot='content'] {
  width: 410px !important;
  max-width: 410px !important;
}
click-card > div[slot='content'] > div {
  max-height: 550px !important;
}
notification-item > a {
  width: 100% !important;
}
div[data-testid='notification-item'] > .flex {
  padding: 0rem 0rem 0.5rem 0.5rem !important;
  width: 100%;
}
div[data-testid='notification-item'] > div > div > button {
  display: none !important;
}
div[data-testid='body'] {
  font-size: 1rem !important;
  line-height: 1.1rem !important;
  padding-top: 0.5rem;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/posts/posts.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_post_shareButton :is(span):not(.flex) {
  visibility: hidden !important;
  max-width: 0px;
}
.pp_post_shareButton .text-16 {
  margin-right: 0px !important;
}
.pp_post_tittle {
  text-decoration: none !important;
}
.pp_post_noWrap {
  line-clamp: 999;
  -webkit-line-clamp: 999;
}
.pp_post_unwrapContainer {
  position: relative;
  height: 0px;
  bottom: 0px;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
}
.pp_post_unwrapButton {
  position: relative;
  background-color: var(--color-button-secondary-background);
  width: 46px;
  height: 46px;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: var(--color-button-secondary-text);
  margin-right: 15px;
  pointer-events: fill !important;
  z-index: 10;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/posts/postsBackplates.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `article > shreddit-post {
  background-color: #00000000 !important;
  padding-top: 10px !important;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
}
article > shreddit-post::before {
  border-radius: 15px !important;
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  background: linear-gradient(var(--color-neutral-background-hover), var(--color-neutral-background));
  transition: opacity 0.2s;
}
article > shreddit-post:hover::before {
  opacity: 1;
}
shreddit-post[gold-count]:not(shreddit-post[gold-count='']) {
  background-image: linear-gradient(rgba(255, 214, 53, 0.2), rgba(255, 214, 53, 0)) !important;
}
shreddit-post[gold-count]:not(shreddit-post[gold-count=''])::before {
  background: linear-gradient(#fbed2966, var(--color-neutral-background)) !important;
}
.stickied::after {
  border-radius: 15px !important;
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  z-index: -2;
  background: linear-gradient(var(--stickiedColor), var(--color-neutral-background)) !important;
}
.stickied::before {
  background: linear-gradient(var(--stickiedHoverColor), var(--color-neutral-background)) !important;
}
:root {
  --stickiedColor: #0e8a001c;
  --stickiedHoverColor: #18900b3d;
}
:root.theme-dark {
  --stickiedColor: #0e8a001c !important;
  --stickiedHoverColor: #18900b3d !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/profileMenu/profileMenu.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/profileMenu/profileMenuWindow.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_profileMenuElement_tittleContainer {
  width: 100%;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/redirect.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_redirectContainer {
  position: fixed;
  bottom: 70px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 100;
}
.pp_redirectBox {
  background: #000000bf;
  width: 600px;
  height: 70px;
  border-radius: 20px;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/scrollToTop.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_scrollToTop {
  position: fixed;
  width: 100px;
  height: 100%;
  bottom: 0px;
  background: linear-gradient(0deg, var(--scrollLineColor) 1%, var(--scrollLineTransparentColor) 30%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
  cursor: pointer;
  color: var(--scrollLineTransparentColor);
  opacity: 1;
  transition: padding-bottom 0.2s ease-in, color 0.2s ease-in, opacity 0.5s ease;
  clip-path: inset(0 0 0 8px);
}
.pp_scrollToTop svg {
  padding-left: 8px;
}
.pp_scrollToTop_inverted {
  transform: scale(1, -1);
}
.pp_scrollToTop:hover {
  padding-bottom: 50px !important;
  color: var(--scrollButtonColor);
  transition: padding-bottom 0.2s ease-out, color 0.2s ease-out, opacity 0.5s ease;
}
.pp_scrollToTop::before {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  background: linear-gradient(0deg, var(--scrollLineColor) 5%, var(--scrollLineTransparentColor) 50%);
  transition: opacity 0.2s ease-in;
}
.pp_scrollToTop:hover::before {
  opacity: 1;
  transition: opacity 0.2s ease-out;
}
:root {
  --scrollLineColor: #e5ebee6e;
  --scrollLineTransparentColor: #e5ebee00;
  --scrollButtonColor: #c9d1d4c2;
}
:root.theme-dark {
  --scrollLineColor: #3f484d33 !important;
  --scrollLineTransparentColor: #30343600 !important;
  --scrollButtonColor: #969a9c !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/settings/settingsWindow.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_settings_subtittle {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  min-height: 20px;
  color: #7c7c7c;
  text-transform: uppercase;
  border-bottom: 1px solid #edeff1;
  margin-top: 1rem;
  padding: 0rem 3rem;
}
.pp_settings_property_oneLine {
  height: 2.25rem !important;
}
.pp_settings_propertyHeader {
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  justify-content: center;
}
.pp_settings_propertyHeader_tittle {
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 4px;
}
.pp_no_decoration {
  text-decoration: none;
}
.pp_no_decoration:visited {
  text-decoration: none;
}
.pp_no_decoration:hover {
  text-decoration: none;
}
.pp_no_decoration:active {
  text-decoration: none;
}
.pp_settings_propertyHeader_badge {
  font-size: 12px;
  margin: 0px 0px 0px 8px;
  padding: 0px 4px;
  border: 1px solid;
  border-radius: 4px;
}
.pp_settings_propertyHeader_description {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #7c7c7c;
}
.pp_settings_propertyButtonContainer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/sidebar/sidebar.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `flex-left-nav-container #pp-settings {
  position: absolute;
  top: 60px;
  z-index: calc(var(--flex-nav-z-index) + 1);
  inset-inline-end: -16px;
}
.pp_sidebar_loadingSection {
  max-height: 0px !important;
  visibility: hidden !important;
}
.pp_sidebar_loadingSection > details {
  max-height: 0px !important;
}
.pp_sidebar_collapsedSection {
  max-height: 43px !important;
  overflow-y: hidden !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/sidebar/sidebarSettingsWindow.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_sidebarSettings_sectionTittle {
  width: 100%;
  display: flex;
  align-items: center;
}
.pp_sidebarSettings_section {
  padding: 0rem 3rem;
  gap: 8px;
  align-items: center;
}
.pp_sidebarSettings_section > span {
  text-wrap-mode: nowrap;
  margin-left: 3rem;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/subs/flairBar.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_flair {
  border-radius: 20px;
}
.pp_flairBar {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.pp_flairBar_highlights {
  padding-bottom: 10px;
}
.pp_flairBar_list {
  margin-top: 5px !important;
  flex-wrap: nowrap !important;
  position: relative;
}
.pp_flairBar_listSmoothed {
  transition: left 0.1s ease-out;
}
.pp_flairBar_bordersContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.pp_flairBar_preBorder {
  width: 20px;
}
.pp_flairBar_border {
  z-index: 1;
  position: absolute;
  height: 40px;
  width: 20px;
  margin-top: 5px;
  background: linear-gradient(var(--flair-border-orientation), var(--color-neutral-background), 60%, var(--color-neutral-background-transparent));
}
.pp_flairBar_border_left {
  --flair-border-orientation: 90deg;
}
.pp_flairBar_border_right {
  --flair-border-orientation: 270deg;
}
:root {
  --color-neutral-background-transparent: #fff0;
}
:root.theme-dark {
  --color-neutral-background-transparent: #0b141600 !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/subs/flairWindow.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_flairWindow_flair {
  padding: 0rem 3rem;
  gap: 8px;
  align-items: center;
}
.pp_flairWindow_flair > span {
  text-wrap-mode: nowrap;
  margin-left: 3rem;
}
.pp_flairWindow_flairContainer {
  width: 100%;
  display: flex;
  align-items: center;
}
.pp_flairWindow_columnTittle {
  margin: 20px 57px 10px 40px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/subs/subs.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.masthead > section > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.masthead > section > div > div:last-child {
  align-self: flex-end;
}
.pp_mastheadSection {
  top: -3rem;
}
.pp_mastheadSection > div {
  gap: 1rem;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/wideMode.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (min-width: 1392px) {
  .pp_pageContainer {
    margin-right: 300px;
    --flex-nav-width: 272px !important;
  }
  .pp_mainFeed {
    width: var(--pp-content-width) !important;
    position: relative;
    left: var(--pp-content-offset);
  }
  .pp_mainFeed > div > main {
    max-width: var(--pp-content-width) !important;
  }
  .pp_rightSidebar {
    grid-column-start: 3;
    order: 10;
  }
  #right-sidebar-container {
    position: fixed;
    right: 0px;
    margin: 15px 10px 0px 0px;
  }
  .pp_rightSidebar_contextLookup {
    grid-column-start: 3;
    order: 10;
    position: fixed;
    right: 0px;
    margin: 15px 10px 0px 0px;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/utils/UI/input.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_ui_input_container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.pp_ui_input_button {
  border-color: var(--color-neutral-border-weak);
  color: var(--color-secondary-weak);
  font-weight: 400;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  color: var(--color-secondary-plain);
}
.pp_ui_input_button:hover {
  background: var(--color-input-secondary-hover) !important;
}
.pp_ui_input_button:focus {
  border-color: var(--color-neutral-content-weak) !important;
}
.pp_ui_input_panel {
  width: 100%;
  margin: 0px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
}
.pp_ui_input_icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp_ui_input_span {
  width: 100%;
}
.pp_ui_input {
  width: 100%;
  background: 0 0;
  border: none;
  outline: 0;
  text-overflow: ellipsis;
  color: var(--color-neutral-content-strong);
  font: inherit;
  padding: 0px;
  margin: 0px;
}
.pp_ui_input_clearContainer {
  position: relative;
  width: 0px;
}
.pp_ui_input_clearButton {
  position: relative;
  right: 40px;
  top: 4px;
  border-radius: 32px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/utils/UI/options.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_ui_options {
  width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.pp_ui_options_container {
  position: relative;
  display: flex;
  justify-content: center;
}
.pp_ui_options_container > span {
  width: max-content;
  text-align: center;
}
.pp_ui_options_dots {
  position: absolute;
  top: 10px;
  font-size: 20px;
  pointer-events: none;
}
.pp_ui_options_arrow {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
}
.pp_ui_options_inversed {
  transform: scale(-1, 1);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/utils/UI/toggle.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_ui_toggle {
  float: right;
  position: relative;
}
.pp_ui_toggle_active {
  justify-content: flex-end !important;
  background-color: #0079d3 !important;
}
.pp_ui_toggle_button {
  position: relative;
  cursor: pointer;
  user-select: none;
  overflow: visible;
  display: flex;
  justify-content: start;
  background: transparent;
  background-color: var(--checkBox-background);
  padding: initial;
  height: 24px;
  width: 37.5px;
  border-radius: 100px;
  border: 2px solid transparent;
  transition: background-color 0.2s linear;
}
.pp_ui_toggle_knob {
  height: 19.5px;
  width: 19.5px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s linear;
  border-radius: 57%;
}
:root {
  --checkBox-background: #1a1a1b1a;
}
:root.theme-dark {
  --checkBox-background: #81818152 !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/utils/changesObserver.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_changesBannerContainer {
  position: absolute;
  top: 0px;
  width: 900px;
  overflow-y: hidden;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
}
.pp_changesBanner {
  display: flex;
  justify-content: center;
  margin: 2rem 15%;
  padding: 1rem;
  border-radius: 15px;
  background-color: #ffd40017;
  border: solid 1px #ffd400;
  color: #d7b300;
  font-weight: 500;
}
.pp_changesBanner_active {
  opacity: 1 !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/utils/imageViewer.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_imageViewable {
  cursor: pointer;
}
.pp_imageViewer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 10;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: #000000b3;
}
.pp_imageViewer_closeButton {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50px;
  z-index: 11;
  right: 50px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: #ffffff9c;
  background-color: #00000069;
  border-radius: 30px;
}
.pp_imageViewer_closeButton:hover {
  color: #ffffffc7;
}
.pp_imageViewer_imageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90%;
}
.pp_imageViewer_imageContainer:not(.pp_imageViewer_drag) {
  transition: transform 0.5s;
}
.pp_imageViewer_image {
  cursor: grab;
  object-fit: scale-down;
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0px 0px 20px 3px #14141485;
}
.pp_imageViewer_image:active {
  cursor: grabbing;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/utils/window.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pp_window_container {
  cursor: pointer;
  position: fixed;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000b3;
}
.pp_window {
  cursor: auto;
  display: flex;
  flex-direction: column;
  width: 900px;
  height: fit-content;
  min-height: 200px;
  max-height: 75%;
  border-radius: 15px;
  background-color: var(--color-neutral-background);
  box-shadow: 0px 0px 50px 0px #00000070;
}
.pp_window_tittleContainer {
  height: 48px;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.pp_window_tittle {
  margin-left: 1rem;
}
.pp_window_closeButton {
  margin: 1rem;
}
.pp_window_content {
  display: flex;
  flex-direction: column;
  overflow-y: overlay;
}
.pp_window_footer {
  height: 2rem;
  min-height: 2rem;
}
.pp_window_elementsContainer {
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 20px 40px;
  gap: 0.5rem;
}
.pp_window_element {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 3rem;
}
.pp_window_elementsContainer > .pp_window_element:hover {
  background-color: var(--color-neutral-background-hover);
  border-radius: 15px;
}
.pp_window_controlArea {
  width: 200px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp_window_scrollContent {
  overflow-y: scroll;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./resources/bookmarkSaved.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M15.372 1H4.628A1.629 1.629 0 0 0 3 2.628v16.256a1.113 1.113 0 0 0 1.709.941L10 16.479l5.282 3.34A1.12 1.12 0 0 0 17 18.873V2.628A1.63 1.63 0 0 0 15.372 1Z\" style=\"fill:currentColor;stroke:none;stroke-width:0px\"></path></svg>"

/***/ }),

/***/ "./resources/bookmarkUnsaved.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M4.114 20A1.117 1.117 0 0 1 3 18.884V2.628A1.629 1.629 0 0 1 4.628 1h10.744A1.63 1.63 0 0 1 17 2.628v16.245a1.12 1.12 0 0 1-1.718.946L10 16.479l-5.291 3.346a1.11 1.11 0 0 1-.595.175Zm.514-17.75a.378.378 0 0 0-.378.378v16.009L10 15l5.75 3.636V2.628a.378.378 0 0 0-.378-.378H4.628Z\" style=\"fill:currentColor;stroke:none;stroke-width:0px\"></path></svg>"

/***/ }),

/***/ "./resources/comments/bannedUser.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M2,7.15,7.08,1.84A2.66,2.66,0,0,1,10,2.3a2.72,2.72,0,0,1,.7,2.91L5.37,10.66s-1,1.11-2.74-.73C1,8.24,2,7.15,2,7.15Z\" style=\"fill: none;stroke: #8a3685;stroke-width: 1.5px\"></path><path d=\"M7.33,8.85l6,6.16a1,1,0,0,0,1.28-.07,1.16,1.16,0,0,0,.15-1.28L8.9,7.37\" style=\"fill: #8a3685; stroke:none\"></path></svg>"

/***/ }),

/***/ "./resources/comments/newUser.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-2 -2 20 20\"><path d=\"M1.46,1.5S3.49,4.89,7,5.07c1.49.07,3.35.25,4.06.79,1.41,1.09,2.3,2.08,1.74,4.37a4.91,4.91,0,0,1-4.36,3.49C5.08,14,2.89,10.29,2.33,9.35.41,6.12,1.46,1.5,1.46,1.5Z\" style=\"fill:#69b508;stroke:none;stroke-width:0px\"></path><path d=\"M12.5,11.5a3.39,3.39,0,0,1,2,2,3.16,3.16,0,0,1,0,2\" style=\"fill:none;stroke:#69b508;stroke-width:2px\"></path></svg>"

/***/ }),

/***/ "./resources/comments/shareButton.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M14.111 12.5a3.701 3.701 0 0 1-1.09 2.41c-.479.47-.928.922-1.378 1.373-.45.45-.894.9-1.368 1.366a3.852 3.852 0 0 1-2.698 1.099 3.852 3.852 0 0 1-2.698-1.099 3.738 3.738 0 0 1-1.116-2.659c0-.997.402-1.953 1.116-2.658.479-.472.928-.923 1.378-1.375.45-.45.893-.9 1.368-1.365A3.936 3.936 0 0 1 9.638 8.59a3.968 3.968 0 0 1 2.24.258c.27-.269.546-.54.812-.806l.131-.13a5.086 5.086 0 0 0-3.182-.624A5.052 5.052 0 0 0 6.732 8.71c-.48.471-.929.922-1.377 1.373-.449.451-.894.9-1.37 1.366A4.982 4.982 0 0 0 2.5 14.992c0 1.328.534 2.602 1.486 3.543A5.13 5.13 0 0 0 7.58 20a5.13 5.13 0 0 0 3.595-1.465c.478-.471.927-.923 1.377-1.374.451-.451.894-.9 1.368-1.366a4.993 4.993 0 0 0 1.263-2.071c.243-.781.288-1.61.132-2.412L14.11 12.5Z\" style=\"fill:currentColor;stroke:none;stroke-width:1px\"></path><path d=\"M16.017 1.467A5.123 5.123 0 0 0 12.422 0a5.123 5.123 0 0 0-3.595 1.467c-.478.471-.926.923-1.377 1.374-.45.451-.894.9-1.367 1.366a4.966 4.966 0 0 0-1.106 1.624 4.907 4.907 0 0 0-.291 2.86l1.2-1.19a3.699 3.699 0 0 1 1.092-2.41c.478-.472.928-.923 1.377-1.374.45-.45.894-.9 1.368-1.366a3.844 3.844 0 0 1 2.698-1.101c1.012 0 1.982.396 2.698 1.101a3.736 3.736 0 0 1 1.116 2.66c0 .996-.401 1.953-1.116 2.658-.478.471-.927.922-1.377 1.373-.45.451-.893.9-1.368 1.367a3.933 3.933 0 0 1-2.014 1.003 3.966 3.966 0 0 1-2.24-.26c-.273.274-.551.549-.818.818l-.123.12a5.087 5.087 0 0 0 3.183.624 5.053 5.053 0 0 0 2.906-1.423c.477-.472.926-.923 1.376-1.375.45-.452.894-.9 1.368-1.365A4.977 4.977 0 0 0 17.5 5.008a4.977 4.977 0 0 0-1.488-3.543l.005.002Z\" style=\"fill:currentColor;stroke:none;stroke-width:1px\"></path></svg>"

/***/ }),

/***/ "./resources/comments/sortButtons/controversial.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><polygon points=\"6.34 13.21 3.33 9.37 2.46 10.07 5.35 13.73 6.34 13.21\" style=\"fill:currentColor;stroke:none;stroke-miterlimit:10\"></polygon><polygon points=\"4.11 13.02 3.11 11.75 0.76 13.47 1.7 14.55 4.11 13.02\" style=\"fill:currentColor;stroke:none;stroke-miterlimit:10\"></polygon><path d=\"M5.67,9.62l-.8.66,1,1.32s.54-.31,1.31-.8A12,12,0,0,1,5.67,9.62Z\" style=\"fill:currentColor;stroke:none;stroke-miterlimit:10\"></path><path d=\"M10.93,3.83A19.94,19.94,0,0,1,8.52,7.08c.57.52,1.29,1.08,1.8,1.46a11.2,11.2,0,0,0,1-1C14.21,4.3,14.7,2.11,14.7,2.11Z\" style=\"fill:currentColor;stroke:none;stroke-miterlimit:10\"></path><polygon points=\"9.23 13.59 12.52 9.01 13.53 9.81 10.36 14.19 9.23 13.59\" style=\"fill:currentColor;stroke:none;stroke-miterlimit:10\"></polygon><polygon points=\"11.61 12.82 12.66 11.36 15.26 13.26 14.28 14.52 11.61 12.82\" style=\"fill:currentColor;stroke:none;stroke-miterlimit:10\"></polygon><path d=\"M11.09,9.83A43.49,43.49,0,0,1,7.38,6.71,20.23,20.23,0,0,1,4.52,2.83,37,37,0,0,0,.73,1.33S.79,3.41,4.11,7.09A23.67,23.67,0,0,0,9.88,11.4C10.28,10.87,10.69,10.34,11.09,9.83Z\" style=\"fill:currentColor\"></path><path d=\"M11.09,9.83A43.49,43.49,0,0,1,7.38,6.71,20.23,20.23,0,0,1,4.52,2.83,37,37,0,0,0,.73,1.33S.79,3.41,4.11,7.09A23.67,23.67,0,0,0,9.88,11.4C10.28,10.87,10.69,10.34,11.09,9.83Z\" style=\"fill:none;stroke:none;stroke-miterlimit:10\"></path></svg>"

/***/ }),

/***/ "./resources/comments/sortButtons/old.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><circle cx=\"5.28\" cy=\"8.67\" r=\"1\" style=\"fill: currentColor\"></circle><circle cx=\"9.28\" cy=\"8.67\" r=\"1\" style=\"fill: currentColor\"></circle><circle cx=\"12.26\" cy=\"2.08\" r=\"1.32\" style=\"fill: currentColor\"></circle><path d=\"M7.55,5.08c.09-2.83,3-3.59,4-3\" style=\"fill: none;stroke: currentColor;stroke-miterlimit: 10\"></path><path d=\"M4.92,11.7s3,1,5,0\" style=\"fill: blue;stroke: currentColor;stroke-miterlimit: 10\"></path><path d=\"M7.72,5c3.31,0,6,2,6,4.5S11,14,7.72,14s-6-2-6-4.5S4.41,5,7.72,5m0-.5c-3.59,0-6.5,2.24-6.5,5s2.91,5,6.5,5,6.5-2.24,6.5-5-2.91-5-6.5-5Z\" style=\"fill: currentColor\"></path><path d=\"M10.85,5.5A1.56,1.56,0,0,1,13,5.31a1.34,1.34,0,0,1,.24,1.89\" style=\"fill: none;stroke: currentColor;stroke-miterlimit: 10;stroke-width: 0.5px\"></path><path d=\"M2.18,7a1.55,1.55,0,0,1,.53-2,1.33,1.33,0,0,1,1.86.4\" style=\"fill: none;stroke: currentColor;stroke-miterlimit: 10;stroke-width: 0.5px\"></path></svg>"

/***/ }),

/***/ "./resources/comments/sortButtons/qa.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><circle cx=\"10.77\" cy=\"4.4\" r=\"3\" style=\"fill: currentColor\"></circle><path d=\"M3.54,13.87l0,0a1.07,1.07,0,0,1-.46-1.35L6.4,7.44a1.05,1.05,0,0,1,1.48,0l.58.43c.54.41.74,1,.43,1.42L5,13.93A1.08,1.08,0,0,1,3.54,13.87Z\" style=\"fill: currentColor\"></path></svg>"

/***/ }),

/***/ "./resources/comments/userTags/blockedButton.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"m9.78126,18.09375c-4.41989,0 -8,-3.58011 -8,-8c0,-4.41989 3.58011,-8 8,-8c4.41989,0 8,3.58011 8,8c0,4.41989 -3.58011,8 -8,8z\" style=\"fill:none;stroke:currentColor;stroke-width:2px\"></path><path d=\"m4.43767,4.59392l10.81217,10.93716\" style=\"fill:none;stroke:currentColor;stroke-width:2px\"></path></svg>"

/***/ }),

/***/ "./resources/comments/userTags/blockedIcon.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-4 -4 20 20\"><path d=\"M3.11,3l7.94,8\" style=\"fill:none;stroke:currentColor;stroke-width:1.5px\"></path><path d=\"M7,12.88A5.88,5.88,0,1,1,12.91,7,5.88,5.88,0,0,1,7,12.88Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.5px\"></path></svg>"

/***/ }),

/***/ "./resources/comments/userTags/followedButton.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"m1.56177,7.99265l5.62517,-1.11153l2.68713,-4.92101l3.02542,4.77603l5.28687,1.25651l-4.60571,3.96991l1.43072,5.79091l-5.28229,-2.56852l-4.99233,2.56852l1.09243,-6.03254l-4.26742,-3.72827l0,-0.00001z\" style=\"fill:none;stroke:currentColor;stroke-width:2px\"></path></svg>"

/***/ }),

/***/ "./resources/comments/userTags/followedIcon.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-4 -4 20 20\"><path d=\"m0.43678,5.49532l4.46205,-0.8817l2.13151,-3.90349l2.39985,3.78849l4.1937,0.9967l-3.65339,3.14905l1.13489,4.59352l-4.19007,-2.03743l-3.96007,2.03743l0.86655,-4.78519l-3.38505,-2.95738l0,-0.00001l0.00001,0z\" style=\"fill:none;stroke:currentColor;stroke-width:1.5px\"></path></svg>"

/***/ }),

/***/ "./resources/comments/userTags/likedButton.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"m7.28935,15.93702c-4.80908,-3.55432 -6.52852,-5.80272 -6.54246,-8.55516c-0.0127,-2.50919 2.10985,-4.93093 4.30951,-4.91697c1.09841,0.00698 3.45457,0.93051 4.2889,1.6811c0.42039,0.37819 0.6195,0.3409 1.55543,-0.29133c2.54723,-1.72064 5.03461,-1.75676 6.64556,-0.09648c2.57463,2.65349 2.10589,5.82222 -1.34747,9.10906c-1.836,1.74747 -5.84543,4.84759 -6.26946,4.84759c-0.12903,0 -1.31703,-0.80001 -2.64001,-1.7778l0,0l0,-0.00001z\" style=\"fill:none;stroke:currentColor;stroke-width:2px\"></path></svg>"

/***/ }),

/***/ "./resources/comments/userTags/likedIcon.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-4 -4 20 20\"><path d=\"m5.10986,11.44595c-3.39081,-2.55084 -4.60316,-4.16445 -4.61299,-6.1398c-0.00896,-1.80077 1.48763,-3.53879 3.03857,-3.52877c0.77447,0.00501 2.43577,0.6678 3.02404,1.20648c0.29641,0.27142 0.4368,0.24465 1.09671,-0.20908c1.79601,-1.23486 3.54983,-1.26078 4.68568,-0.06924c1.81534,1.90433 1.48483,4.17844 -0.95008,6.53732c-1.29454,1.25411 -4.12153,3.47898 -4.4205,3.47898c-0.09098,0 -0.92862,-0.57415 -1.86143,-1.27588l0,0l0,-0.00001z\" style=\"fill:none;stroke:currentColor;stroke-width:1.5px\"></path></svg>"

/***/ }),

/***/ "./resources/comments/userTags/warningButton.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"m1.24313,16.49297l8.78125,-13.75l8.78125,13.75l-17.5625,0z\" style=\"fill:none;stroke:currentColor;stroke-width:2px\"></path><path d=\"m9.875,7.5l0,4.5\" style=\"fill:none;stroke:currentColor;stroke-width:2px\"></path><path d=\"m9.875,14.09375l0,1\" style=\"fill:none;stroke:currentColor;stroke-width:2px\"></path></svg>"

/***/ }),

/***/ "./resources/comments/userTags/warningIcon.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-4 -4 20 20\"><path d=\"m6.91754,10.29973l0,0.7153\" style=\"fill:none;stroke:currentColor;stroke-width:1.5px\"></path><path d=\"m6.91754,5.38201l0,4.06927\" style=\"fill:none;stroke:currentColor;stroke-width:1.5px\"></path><path d=\"m0.74313,12.0159l6.28126,-9.83543l6.28126,9.83543l-12.56252,0z\" style=\"fill:none;stroke:currentColor;stroke-width:1.5px\"></path></svg>"

/***/ }),

/***/ "./resources/contentFilter.svg":
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3 4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H19.4C19.9601 3 20.2401 3 20.454 3.10899C20.6422 3.20487 20.7951 3.35785 20.891 3.54601C21 3.75992 21 4.03995 21 4.6V6.33726C21 6.58185 21 6.70414 20.9724 6.81923C20.9479 6.92127 20.9075 7.01881 20.8526 7.10828C20.7908 7.2092 20.7043 7.29568 20.5314 7.46863L14.4686 13.5314C14.2957 13.7043 14.2092 13.7908 14.1474 13.8917C14.0925 13.9812 14.0521 14.0787 14.0276 14.1808C14 14.2959 14 14.4182 14 14.6627V17L10 21V14.6627C10 14.4182 10 14.2959 9.97237 14.1808C9.94787 14.0787 9.90747 13.9812 9.85264 13.8917C9.7908 13.7908 9.70432 13.7043 9.53137 13.5314L3.46863 7.46863C3.29568 7.29568 3.2092 7.2092 3.14736 7.10828C3.09253 7.01881 3.05213 6.92127 3.02763 6.81923C3 6.70414 3 6.58185 3 6.33726V4.6Z\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"

/***/ }),

/***/ "./resources/deleteButton.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><path d=\"M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z\"></path></svg>"

/***/ }),

/***/ "./resources/dragAnchor.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 13\"><rect y=\"5.5\" width=\"14\" height=\"2\" rx=\"1\"></rect><rect width=\"14\" height=\"2\" rx=\"1\"></rect><rect y=\"11\" width=\"14\" height=\"2\" rx=\"1\"></rect></svg>"

/***/ }),

/***/ "./resources/feedButtons/feedButtonBest.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M8.82,1.51l1.43,3.4a.86.86,0,0,0,.66.47l3.62.28A.91.91,0,0,1,15,7.22L12.3,9.62a.84.84,0,0,0-.25.76l.81,3.55a.92.92,0,0,1-1.33,1L8.41,13a.91.91,0,0,0-.82,0L4.47,14.89a.92.92,0,0,1-1.33-1L4,10.38a.84.84,0,0,0-.25-.76L1,7.22a.91.91,0,0,1,.5-1.56l3.62-.28a.86.86,0,0,0,.66-.47l1.43-3.4A.91.91,0,0,1,8.82,1.51Z\" style=\"fill:currentColor; stroke:none\"></path></svg>"

/***/ }),

/***/ "./resources/feedButtons/feedButtonHot.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M8.49,2.93c.7,1.56,3,2.81,3.69,3.52a5.14,5.14,0,0,1,1.36,5.45c-1.09,3.37-4.49,3.38-6.21,3.38s-4.18-.28-5-3,.8-4.41,1-5,1.06,2.52,2,3.12c1.19.79,2.85,0,2.85-1.18S6.72,7.65,6.44,5.37a10.62,10.62,0,0,1,1-4.9S7.83,1.46,8.49,2.93Z\" style=\"stroke:currentColor;fill:currentColor;stroke-width:0.5px\"></path></svg>"

/***/ }),

/***/ "./resources/feedButtons/feedButtonNew.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M8,15.5A7.5,7.5,0,1,1,15.5,8,7.5,7.5,0,0,1,8,15.5Zm0-14A6.5,6.5,0,1,0,14.5,8,6.51,6.51,0,0,0,8,1.5Z\" style=\"fill:currentColor;stroke:currentColor;stroke-width:0.5px\"></path><path d=\"M8,2V8l4-2\" style=\"fill:none;stroke:currentColor;stroke-width:1.5px\"></path></svg>"

/***/ }),

/***/ "./resources/feedButtons/feedButtonRising.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M1.1,14.67c1.4-2.8,3.62-6.84,3.62-6.84L9,12.18l4.13-9.94\" style=\"fill:none;stroke:currentColor;stroke-width:2px\"></path><path d=\"M8.5,4.5l4.68-2.45S14,5.31,14.5,7.5\" style=\"fill:none;stroke:currentColor;stroke-width:2px\"></path></svg>"

/***/ }),

/***/ "./resources/feedButtons/feedButtonTop.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M14.51,6.56,9.13,1.17a1.61,1.61,0,0,0-2.26,0L1.49,6.56a1,1,0,0,0,.72,1.73H5.52V14A1.28,1.28,0,0,0,6.8,15.3H9.23A1.29,1.29,0,0,0,10.52,14V8.29h3.27A1,1,0,0,0,14.51,6.56Z\" style=\"fill:none;stroke:currentColor;stroke-width:1.5px\"></path></svg>"

/***/ }),

/***/ "./resources/hiddenIco.svg":
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Edit / Hide\"><path id=\"Vector\" d=\"M3.99989 4L19.9999 20M16.4999 16.7559C15.1473 17.4845 13.6185 17.9999 11.9999 17.9999C8.46924 17.9999 5.36624 15.5478 3.5868 13.7788C3.1171 13.3119 2.88229 13.0784 2.7328 12.6201C2.62619 12.2933 2.62616 11.7066 2.7328 11.3797C2.88233 10.9215 3.11763 10.6875 3.58827 10.2197C4.48515 9.32821 5.71801 8.26359 7.17219 7.42676M19.4999 14.6335C19.8329 14.3405 20.138 14.0523 20.4117 13.7803L20.4146 13.7772C20.8832 13.3114 21.1182 13.0779 21.2674 12.6206C21.374 12.2938 21.3738 11.7068 21.2672 11.38C21.1178 10.9219 20.8827 10.6877 20.4133 10.2211C18.6338 8.45208 15.5305 6 11.9999 6C11.6624 6 11.3288 6.02241 10.9999 6.06448M13.3228 13.5C12.9702 13.8112 12.5071 14 11.9999 14C10.8953 14 9.99989 13.1046 9.99989 12C9.99989 11.4605 10.2135 10.9711 10.5608 10.6113\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g></svg>"

/***/ }),

/***/ "./resources/imageCloseButton.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 40\"><path d=\"m33.16001,9.52439l-2.37671,-2.37671l-10.691,10.691l-10.691,-10.691l-2.37671,2.37671l10.691,10.691l-10.691,10.691l2.37671,2.37671l10.691,-10.691l10.691,10.691l2.37671,-2.37671l-10.691,-10.691l10.691,-10.691z\" style=\"fill:currentColor;stroke:none;stroke-width:0px\"></path></svg>"

/***/ }),

/***/ "./resources/inputClear.svg":
/***/ ((module) => {

module.exports = "<svg fill=\"currentColor\" icon-name=\"clear-outline\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.75A8.75 8.75 0 1 1 18.75 10 8.76 8.76 0 0 1 10 18.75Zm3.567-11.433L10.884 10l2.683 2.683-.884.884L10 10.884l-2.683 2.683-.884-.884L9.116 10 6.433 7.317l.884-.884L10 9.116l2.683-2.683.884.884Z\" style=\"fill:currentColor;stroke:none;stroke-width:0px\"></path></svg>"

/***/ }),

/***/ "./resources/postUnwrapButton.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\"><path d=\"M12.5,18.75A2.36,2.36,0,0,1,10.83,18L2.47,9.53,3.53,8.47,11.9,17a.79.79,0,0,0,1.2,0l8.37-8.5,1.06,1.06L14.17,18A2.36,2.36,0,0,1,12.5,18.75Z\" style=\"fill:currentColor;stroke:none;stroke-miterlimit:10;stroke-width:0px\"></path></svg>"

/***/ }),

/***/ "./resources/scrollButton.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 40\"><path d=\"M27.58,27.12,21,20.53a1.42,1.42,0,0,0-2,0l-6.58,6.59a1.41,1.41,0,0,0,1,2.41H26.58A1.41,1.41,0,0,0,27.58,27.12Z\" style=\"fill:currentColor\"></path><rect x=\"5\" y=\"11.75\" width=\"30\" height=\"2.5\" style=\"fill:currentColor\"></rect></svg>"

/***/ }),

/***/ "./resources/settingsArrow.svg":
/***/ ((module) => {

module.exports = "<svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m7.942 15.442-.884-.884L11.616 10 7.058 5.442l.884-.884 5 5a.624.624 0 0 1 0 .884l-5 5Z\" style=\"fill:currentColor;stroke:none;stroke-width:0px\"></path></svg>"

/***/ }),

/***/ "./resources/settingsButton.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M15.07,2.25a.33.33,0,0,1,.33.33V6.72h1.25a2.11,2.11,0,0,1,0,4.21H15.4v4.14a.33.33,0,0,1-.33.33H10.93v1.25a2.11,2.11,0,0,1-4.21,0V15.4H2.58a.33.33,0,0,1-.33-.33v-3A3.51,3.51,0,0,0,4.49,8.82,3.48,3.48,0,0,0,2.25,5.57v-3a.33.33,0,0,1,.33-.33H5.34a3.49,3.49,0,0,0,7,0h2.76m0-1.25H10.75A2.24,2.24,0,1,1,6.9,1H2.58A1.58,1.58,0,0,0,1,2.58v4a2.24,2.24,0,1,1,0,4.47v4a1.58,1.58,0,0,0,1.58,1.58H5.47a3.36,3.36,0,0,0,6.71,0h2.89a1.58,1.58,0,0,0,1.58-1.58V12.18a3.36,3.36,0,0,0,0-6.71V2.58A1.58,1.58,0,0,0,15.07,1Z\"></path></svg>"

/***/ }),

/***/ "./resources/settingsGear.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\"><path d=\"M 24 4 C 22.423103 4 20.902664 4.1994284 19.451172 4.5371094 A 1.50015 1.50015 0 0 0 18.300781 5.8359375 L 17.982422 8.7382812 C 17.878304 9.6893592 17.328913 10.530853 16.5 11.009766 C 15.672739 11.487724 14.66862 11.540667 13.792969 11.15625 L 13.791016 11.15625 L 11.125 9.9824219 A 1.50015 1.50015 0 0 0 9.4257812 10.330078 C 7.3532865 12.539588 5.7626807 15.215064 4.859375 18.201172 A 1.50015 1.50015 0 0 0 5.4082031 19.845703 L 7.7734375 21.580078 C 8.5457929 22.147918 9 23.042801 9 24 C 9 24.95771 8.5458041 25.853342 7.7734375 26.419922 L 5.4082031 28.152344 A 1.50015 1.50015 0 0 0 4.859375 29.796875 C 5.7625845 32.782665 7.3519262 35.460112 9.4257812 37.669922 A 1.50015 1.50015 0 0 0 11.125 38.015625 L 13.791016 36.841797 C 14.667094 36.456509 15.672169 36.511947 16.5 36.990234 C 17.328913 37.469147 17.878304 38.310641 17.982422 39.261719 L 18.300781 42.164062 A 1.50015 1.50015 0 0 0 19.449219 43.460938 C 20.901371 43.799844 22.423103 44 24 44 C 25.576897 44 27.097336 43.800572 28.548828 43.462891 A 1.50015 1.50015 0 0 0 29.699219 42.164062 L 30.017578 39.261719 C 30.121696 38.310641 30.671087 37.469147 31.5 36.990234 C 32.327261 36.512276 33.33138 36.45738 34.207031 36.841797 L 36.875 38.015625 A 1.50015 1.50015 0 0 0 38.574219 37.669922 C 40.646713 35.460412 42.237319 32.782983 43.140625 29.796875 A 1.50015 1.50015 0 0 0 42.591797 28.152344 L 40.226562 26.419922 C 39.454197 25.853342 39 24.95771 39 24 C 39 23.04229 39.454197 22.146658 40.226562 21.580078 L 42.591797 19.847656 A 1.50015 1.50015 0 0 0 43.140625 18.203125 C 42.237319 15.217017 40.646713 12.539588 38.574219 10.330078 A 1.50015 1.50015 0 0 0 36.875 9.984375 L 34.207031 11.158203 C 33.33138 11.54262 32.327261 11.487724 31.5 11.009766 C 30.671087 10.530853 30.121696 9.6893592 30.017578 8.7382812 L 29.699219 5.8359375 A 1.50015 1.50015 0 0 0 28.550781 4.5390625 C 27.098629 4.2001555 25.576897 4 24 4 z M 24 7 C 24.974302 7 25.90992 7.1748796 26.847656 7.3398438 L 27.035156 9.0644531 C 27.243038 10.963375 28.346913 12.652335 30 13.607422 C 31.654169 14.563134 33.668094 14.673009 35.416016 13.904297 L 37.001953 13.207031 C 38.219788 14.669402 39.183985 16.321182 39.857422 18.130859 L 38.451172 19.162109 C 36.911538 20.291529 36 22.08971 36 24 C 36 25.91029 36.911538 27.708471 38.451172 28.837891 L 39.857422 29.869141 C 39.183985 31.678818 38.219788 33.330598 37.001953 34.792969 L 35.416016 34.095703 C 33.668094 33.326991 31.654169 33.436866 30 34.392578 C 28.346913 35.347665 27.243038 37.036625 27.035156 38.935547 L 26.847656 40.660156 C 25.910002 40.82466 24.973817 41 24 41 C 23.025698 41 22.09008 40.82512 21.152344 40.660156 L 20.964844 38.935547 C 20.756962 37.036625 19.653087 35.347665 18 34.392578 C 16.345831 33.436866 14.331906 33.326991 12.583984 34.095703 L 10.998047 34.792969 C 9.7799772 33.330806 8.8159425 31.678964 8.1425781 29.869141 L 9.5488281 28.837891 C 11.088462 27.708471 12 25.91029 12 24 C 12 22.08971 11.087719 20.290363 9.5488281 19.160156 L 8.1425781 18.128906 C 8.8163325 16.318532 9.7814501 14.667839 11 13.205078 L 12.583984 13.902344 C 14.331906 14.671056 16.345831 14.563134 18 13.607422 C 19.653087 12.652335 20.756962 10.963375 20.964844 9.0644531 L 21.152344 7.3398438 C 22.089998 7.1753403 23.026183 7 24 7 z M 24 16 C 19.599487 16 16 19.59949 16 24 C 16 28.40051 19.599487 32 24 32 C 28.400513 32 32 28.40051 32 24 C 32 19.59949 28.400513 16 24 16 z M 24 19 C 26.779194 19 29 21.220808 29 24 C 29 26.779192 26.779194 29 24 29 C 21.220806 29 19 26.779192 19 24 C 19 21.220808 21.220806 19 24 19 z\"></path></svg>"

/***/ }),

/***/ "./resources/showIco.svg":
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.cls-1{fill:#231f20;}</style></defs><g id=\"show\"><path class=\"cls-1\" d=\"M4,17a1,1,0,0,1-.87-1.5C3.31,15.2,7.52,8,16,8s12.69,7.2,12.87,7.5a1,1,0,1,1-1.74,1C27.1,16.43,23.3,10,16,10S4.91,16.43,4.87,16.5A1,1,0,0,1,4,17Z\"></path><path class=\"cls-1\" d=\"M16,24C7.52,24,3.31,16.8,3.13,16.5a1,1,0,0,1,1.74-1C4.9,15.57,8.7,22,16,22s11.09-6.43,11.13-6.5a1,1,0,0,1,1.74,1C28.69,16.8,24.48,24,16,24Z\"></path><path class=\"cls-1\" d=\"M16,18a2,2,0,1,1,2-2A2,2,0,0,1,16,18Zm0-2h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Z\"></path></g></svg>"

/***/ }),

/***/ "./resources/sidebarSubsManager.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M360-200v-80h480v80zm0-240v-80h480v80zm0-240v-80h480v80zM200-160q-33 0-56.5-23.5T120-240t23.5-56.5T200-320t56.5 23.5T280-240t-23.5 56.5T200-160m0-240q-33 0-56.5-23.5T120-480t23.5-56.5T200-560t56.5 23.5T280-480t-23.5 56.5T200-400m0-240q-33 0-56.5-23.5T120-720t23.5-56.5T200-800t56.5 23.5T280-720t-23.5 56.5T200-640\"></path></svg>"

/***/ }),

/***/ "./resources/subFilter.svg":
/***/ ((module) => {

module.exports = "<svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.5 18.616 14.985 14.1a8.528 8.528 0 1 0-.884.884l4.515 4.515.884-.884ZM1.301 8.553a7.253 7.253 0 1 1 7.252 7.253 7.261 7.261 0 0 1-7.252-7.253Z\" style=\"stroke:none;stroke-width:0px\"></path></svg>"

/***/ }),

/***/ "./resources/windowCloseButton.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M14,2h0a.75.75,0,0,0-1.06,0L8.15,6.78a.2.2,0,0,1-.3,0L3.06,2A.75.75,0,0,0,2,2H2A.75.75,0,0,0,2,3.06L6.78,7.85a.2.2,0,0,1,0,.3L2,12.94A.75.75,0,0,0,2,14H2a.75.75,0,0,0,1.06,0L7.85,9.22a.2.2,0,0,1,.3,0L12.94,14A.75.75,0,0,0,14,14h0a.75.75,0,0,0,0-1.06L9.22,8.15a.2.2,0,0,1,0-.3L14,3.06A.75.75,0,0,0,14,2Z\" style=\"fill:currentColor;stroke:none;stroke-miterlimit:10;stroke-width:0px\"></path></svg>"

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/modules/bookmarkMode.ts
var BookmarkMode;
(function (BookmarkMode) {
    BookmarkMode["Disabled"] = "Disabled";
    BookmarkMode["WhenUpvoted"] = "When upvoted";
    BookmarkMode["Always"] = "Always";
})(BookmarkMode || (BookmarkMode = {}));

;// CONCATENATED MODULE: ./src/modules/collapseAwardsMode.ts
var AwardsMode;
(function (AwardsMode) {
    AwardsMode["Default"] = "Default behaviour";
    AwardsMode["WhenUpvoted"] = "Show when upvoted";
    AwardsMode["RemoveCompletely"] = "Remove completely";
})(AwardsMode || (AwardsMode = {}));

;// CONCATENATED MODULE: ./src/defines.ts
var ContentType;
(function (ContentType) {
    ContentType[ContentType["Comment"] = 0] = "Comment";
    ContentType[ContentType["Post"] = 1] = "Post";
})(ContentType || (ContentType = {}));
const MAX_LOAD_LAG = 2000;
const MIN_LOAD_LAG = 15;
const HOUR_SECONDS = 60 * 60;
const DAY_SECONDS = HOUR_SECONDS * 24;
function secondsToTime(seconds) {
    return seconds * 1000;
}

;// CONCATENATED MODULE: ./src/utils/database.ts


class DatabaseConfig {
}
class DatabaseFactory {
}
DatabaseFactory.Null = function (id) {
    return null;
};
DatabaseFactory.EmptyObject = function (id) {
    return {};
};
class Database {
    constructor(name, config = new DatabaseConfig()) {
        this.databaseKey = name + `_DATABASE`;
        this.refreshKey = name + `_REFRESHED`;
        this.cleanupKey = name + `_CLEANUP`;
        this.isCleanupable = config?.isCleanupable ?? false;
        this.validator = config?.validator ?? null;
        this.loader = config?.loader ?? null;
        this.factory = config?.factory ?? DatabaseFactory.EmptyObject;
        this.refresh();
        if (this.isCleanupable && GM_getValue(this.cleanupKey, 0) < Date.now()) {
            const items = Object.entries(this.data).length;
            const timestampLimit = Date.now() - secondsToTime(DAY_SECONDS * (1000 / items));
            this.data = Object.fromEntries(Object.entries(this.data).filter(([key, value]) => value.timestamp > timestampLimit));
            this.refreshed = Date.now();
            GM_setValue(this.databaseKey, this.data);
            GM_setValue(this.refreshKey, this.refreshed);
            GM_setValue(this.cleanupKey, Date.now() + 1000 * HOUR_SECONDS);
        }
    }
    refresh() {
        const lastRefreshed = GM_getValue(this.refreshKey, 0);
        if (this.data == undefined || this.refreshed < lastRefreshed) {
            this.refreshed = lastRefreshed;
            this.data = GM_getValue(this.databaseKey, {});
            
        }
    }
    get(id) {
        this.refresh();
        const raw = this.data[id];
        return (raw == undefined ? this.factory(id) : raw);
    }
    forEach(iterator) {
        this.refresh();
        Object.keys(this.data).forEach(key => {
            iterator(key, this.data[key]);
        });
    }
    async getWithLoader(id, onLoaded = null) {
        this.refresh();
        const raw = this.data[id];
        let data = (raw == undefined ? this.factory(id) : raw);
        let isLoaded = false;
        if (this.validator(data)) {
            data = await this.loader(id);
            this.set(id, data);
            isLoaded = true;
        }
        if (onLoaded != null) {
            onLoaded(isLoaded);
        }
        return data;
    }
    set(id, value) {
        this.refresh();
        if (this.isCleanupable) {
            value.timestamp = Date.now();
        }
        this.data[id] = value;
        this.refreshed = Date.now();
        GM_setValue(this.databaseKey, this.data);
        GM_setValue(this.refreshKey, this.refreshed);
    }
    wipe() {
        GM_deleteValue(this.databaseKey);
        GM_deleteValue(this.refreshKey);
        GM_deleteValue(this.cleanupKey);
    }
}

;// CONCATENATED MODULE: ./src/utils/tools.ts

const DYNAMIC_ELEMENT_FREQUENCY = 10;
async function dynamicElement(elementRequest, maxLifetime = 0) {
    return new Promise(resolve => {
        let element = elementRequest();
        if (element != null) {
            return resolve(element);
        }
        
        let time = maxLifetime / DYNAMIC_ELEMENT_FREQUENCY;
        const intervalId = setInterval(() => {
            element = elementRequest();
            let forced = false;
            if (maxLifetime > 0) {
                time--;
                if (time < 0)
                    forced = true;
            }
            if (element != null || forced) {
                
                clearInterval(intervalId);
                return resolve(element);
            }
        }, DYNAMIC_ELEMENT_FREQUENCY);
    });
}
const observeForInstances = new Map();
function observeFor(name, root, action, includeChilds = true) {
    if (name && observeForInstances.has(name)) {
        observeForInstances.get(name).disconnect();
        observeForInstances.delete(name);
        
    }
    const result = action(root);
    if (result != undefined && result == true) {
        return;
    }
    
    let observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (observer && node instanceof HTMLElement) {
                    const result = action(node);
                    if (result != undefined && result == true) {
                        observer.disconnect();
                        observer = null;
                        
                    }
                }
            }
        }
    });
    observer.observe(root, { childList: true, subtree: includeChilds });
    if (name) {
        observeForInstances.set(name, observer);
    }
}
function checkIsRendered(node, key = `pp-rendered`) {
    if (node == null || node.getAttribute(key) != null) {
        return true;
    }
    else {
        node.setAttribute(key, ``);
        return false;
    }
}
function getCookie(key) {
    return document.cookie
        .split(`; `)
        .find(row => row.startsWith(key))
        ?.split(`=`)[1];
}
function isLowerVersion(a, b) {
    if (a == b)
        return false;
    const a_array = a.split(`.`);
    const b_array = b.split(`.`);
    for (const i of [0, 1, 2]) {
        const a_i = parseInt(a_array[i]);
        const b_i = parseInt(b_array[i]);
        if (a_i != b_i)
            return a_i < b_i;
    }
    return false;
}
function animate(action, seconds, step = 10) {
    let ticks = (seconds * 1000) / step;
    let timer = setInterval(() => {
        action();
        ticks--;
        if (ticks < 0) {
            clearInterval(timer);
        }
    }, step);
}
function PascalCase(input) {
    if (!input) {
        return input;
    }
    return input.charAt(0).toUpperCase() + input.slice(1);
}

;// CONCATENATED MODULE: ./src/modules/customCSS.ts
class CustomCSS {
    constructor() {
        this.rootStylesheet = new CSSStyleSheet();
        this.styleSheets = [this.rootStylesheet];
        this.styleKeys = new Set();
        this.sources = [];
        this.registry(document);
    }
    registry(source) {
        this.sources.push(source);
        for (const styleSheet of this.styleSheets) {
            source.adoptedStyleSheets.push(styleSheet);
        }
    }
    addStyle(style, key = null) {
        if (key != null) {
            if (this.styleKeys.has(key))
                return;
            this.styleKeys.add(key);
        }
        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(style);
        this.styleSheets.push(styleSheet);
        for (const source of this.sources) {
            source.adoptedStyleSheets.push(styleSheet);
        }
    }
    addRule(rule) {
        this.rootStylesheet.insertRule(rule, 0);
    }
    addVar(name, lightValue, darkValue = null) {
        this.addRule(`:root.theme-light { ${name}: ${lightValue} !important;}`);
        this.addRule(`:root { ${name}: ${darkValue ?? lightValue};}`);
    }
}
const css = new CustomCSS();

// EXTERNAL MODULE: ./src/modules/customFeed/customFeed.less
var customFeed = __webpack_require__("./src/modules/customFeed/customFeed.less");
;// CONCATENATED MODULE: ./src/modules/customFeed/customFeed.ts



css.addStyle(customFeed/* default */.A);
let realCustomFeedTittle = null;
function getCurrentCustomFeed() {
    const raw = window.location.href.split(`/m/`);
    return raw.length > 1 ? raw[1].split(`/`)[0] : null;
}
async function renderCustomFeed(main) {
    const header = await dynamicElement(() => main.querySelector(`custom-feed-header`));
    const icoContainer = await dynamicElement(() => header.shadowRoot?.querySelector(`img`)?.parentElement);
    css.registry(header.shadowRoot);
    icoContainer.classList.add(`pp_customFeed_masthead_ico`);
    realCustomFeedTittle = header.shadowRoot?.querySelector(`.text-18`)?.textContent;
}

;// CONCATENATED MODULE: ./src/utils/svg.ts
const NONE_COLOR = 'none';
const CURRENT_COLOR = 'currentColor';
class SVGViewBox {
}
const builderContainer = document.createElement('div');
function buildSvg(graphic, w, h, config) {
    const { viewBox, strokeColor, fillColor } = { viewBox: null, strokeColor: CURRENT_COLOR, fillColor: CURRENT_COLOR, ...config };
    builderContainer.innerHTML = graphic;
    const svg = builderContainer.firstChild;
    svg.setAttribute(`width`, `${w}px`);
    svg.setAttribute(`height`, `${h}px`);
    if (viewBox != null) {
        svg.setAttribute(`viewBox`, `0 0 ${viewBox.w} ${viewBox.h}`);
    }
    svg.setAttribute(`fill`, fillColor);
    svg.setAttribute(`stroke`, strokeColor);
    return svg;
}
function appendSvg(target, graphic, w, h, config = {}) {
    const svg = buildSvg(graphic, w, h, config);
    target.append(svg);
    return svg;
}
function prependSvg(target, graphic, w, h, config = {}) {
    const svg = buildSvg(graphic, w, h, config);
    target.prepend(svg);
    return svg;
}

;// CONCATENATED MODULE: ./src/utils/element.ts
function appendElement(target, name, classes = null) {
    const el = buildElement(name, classes);
    target.append(el);
    return el;
}
function prependElement(target, name, classes = null) {
    const el = buildElement(name, classes);
    target.prepend(el);
    return el;
}
function buildElement(name, classes = null) {
    const el = document.createElement(name);
    if (classes != null) {
        if (typeof classes === `string` && classes) {
            el.classList.add(classes);
        }
        else {
            for (const c of classes) {
                el.classList.add(c);
            }
        }
    }
    return el;
}

// EXTERNAL MODULE: ./resources/imageCloseButton.svg
var imageCloseButton = __webpack_require__("./resources/imageCloseButton.svg");
var imageCloseButton_default = /*#__PURE__*/__webpack_require__.n(imageCloseButton);
// EXTERNAL MODULE: ./src/utils/imageViewer.less
var imageViewer = __webpack_require__("./src/utils/imageViewer.less");
;// CONCATENATED MODULE: ./src/utils/imageViewer.ts





css.addStyle(imageViewer/* default */.A);
class Mouse {
}
class Drag {
}
class ImageViewer {
    constructor() {
        this.openned = false;
        this.viewer = null;
        this.container = null;
        this.image = null;
        this.mouse = { x: 0, y: 0 };
        this.drag = {
            enabled: false,
            start: { x: 0, y: 0 },
            current: { x: 0, y: 0 },
            scale: 1
        };
        this.scrollImage = this.scrollImage.bind(this);
        this.startDrag = this.startDrag.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.endDrag = this.endDrag.bind(this);
    }
    open(src) {
        if (this.openned)
            return;
        this.openned = true;
        if (this.viewer == null) {
            this.build();
        }
        this.image.src = src;
        window.addEventListener('wheel', this.scrollImage, { passive: false });
        this.image.addEventListener('mousedown', this.startDrag);
        document.addEventListener('mousemove', this.mouseMove);
        this.image.addEventListener('mouseup', this.endDrag);
        this.image.addEventListener('mouseleave', this.endDrag);
        this.drag.current = { x: 0, y: 0 };
        this.drag.scale = 1;
        this.updateTransform();
        document.body.appendChild(this.viewer);
    }
    close() {
        this.viewer.remove();
        this.drag.enabled = false;
        this.container.classList.toggle(`pp_imageViewer_drag`, false);
        window.removeEventListener('wheel', this.scrollImage);
        this.image.removeEventListener('mousedown', this.startDrag);
        document.removeEventListener('mousemove', this.mouseMove);
        this.image.removeEventListener('mouseup', this.endDrag);
        this.image.removeEventListener('mouseleave', this.endDrag);
        this.openned = false;
    }
    build() {
        this.viewer = document.createElement(`div`);
        this.viewer.classList.add(`pp_imageViewer`);
        this.viewer.dataset.open = String(false);
        const closeButton = appendElement(this.viewer, `div`, `pp_imageViewer_closeButton`);
        const closeSvg = buildSvg((imageCloseButton_default()), 40, 40);
        closeButton.appendChild(closeSvg);
        this.container = appendElement(this.viewer, `div`, `pp_imageViewer_imageContainer`);
        this.image = appendElement(this.container, `img`, `pp_imageViewer_image`);
        this.image.alt = `Comment image`;
        this.image.ondragstart = function () {
            return false;
        };
        this.viewer.addEventListener('click', e => {
            if (e.target != this.image) {
                this.close();
            }
        });
        closeButton.addEventListener('click', () => {
            this.close();
        });
    }
    updateTransform() {
        this.container.style.transform = `translate(${this.drag.current.x}px, ${this.drag.current.y}px) scale(${this.drag.scale}, ${this.drag.scale})`;
    }
    startDrag(event) {
        this.drag.start.x = event.screenX - this.drag.current.x;
        this.drag.start.y = event.screenY - this.drag.current.y;
        this.drag.enabled = true;
        this.container.classList.toggle(`pp_imageViewer_drag`, true);
    }
    mouseMove(event) {
        this.mouse.x = event.clientX;
        this.mouse.y = event.clientY;
        if (this.drag.enabled) {
            this.drag.current.x = event.screenX - this.drag.start.x;
            this.drag.current.y = event.screenY - this.drag.start.y;
            this.updateTransform();
        }
    }
    endDrag() {
        this.fit(1);
        this.drag.enabled = false;
        this.container.classList.toggle(`pp_imageViewer_drag`, false);
    }
    scrollImage(e) {
        const m = Math.max(1.0, 1.0 + Math.log2(this.drag.scale * this.drag.scale));
        const prevScale = this.drag.scale;
        this.drag.scale = Math.max(0.5, this.drag.scale + (-e.deltaY / 1000) * m);
        const rect = this.image.getBoundingClientRect();
        const hh = rect.height / 2;
        const hw = rect.width / 2;
        const dy = rect.y + hh;
        const dx = rect.x + hw;
        const os = this.drag.scale / prevScale - 1;
        this.drag.current.y -= Math.min(Math.max(this.mouse.y - dy, -hh), hh) * os;
        this.drag.current.x -= Math.min(Math.max(this.mouse.x - dx, -hw), hw) * os;
        if (e.deltaY > 0) {
            this.drag.current.y /= 1.1;
            this.drag.current.x /= 1.1;
        }
        this.fit(0.33);
        e.preventDefault();
    }
    fit(force) {
        const offset = 0;
        const rect = this.image.getBoundingClientRect();
        const left = offset - rect.left;
        const right = rect.right - window.innerWidth + offset;
        if (left > 0 && right < 0) {
            this.drag.current.x += (rect.width > window.innerWidth ? -right : left) * force;
        }
        else if (left < 0 && right > 0) {
            this.drag.current.x += (rect.width > window.innerWidth ? left : -right) * force;
        }
        const top = offset - rect.top;
        const bottom = rect.bottom - window.innerHeight + offset;
        if (top > 0 && bottom < 0) {
            this.drag.current.y += (rect.height > window.innerHeight ? -bottom : top) * force;
        }
        else if (top < 0 && bottom > 0) {
            this.drag.current.y += (rect.height > window.innerHeight ? top : -bottom) * force;
        }
        this.updateTransform();
    }
}
const imageViewer_imageViewer = new ImageViewer();

;// CONCATENATED MODULE: ./src/modules/redirectMode.ts
var RedirectMode;
(function (RedirectMode) {
    RedirectMode["Disabled"] = "Disabled";
    RedirectMode["Suggestion"] = "Suggestion";
    RedirectMode["Forced"] = "Forced";
})(RedirectMode || (RedirectMode = {}));

;// CONCATENATED MODULE: ./src/modules/users/usernameMode.ts
var UsernameMode;
(function (UsernameMode) {
    UsernameMode["ProfileName"] = "Profile name";
    UsernameMode["Nickname"] = "Nickname";
    UsernameMode["Both"] = "Both";
})(UsernameMode || (UsernameMode = {}));

;// CONCATENATED MODULE: ./src/modules/settings/settings.ts





class SettingBoolProperty {
    constructor(name, defailtValue = true) {
        this.name = name;
        this.defailtValue = defailtValue;
    }
    isEnabled() {
        const rawValue = settingsDatabase.get(this.name);
        const isDefault = rawValue instanceof Object;
        return isDefault ? this.defailtValue : rawValue;
    }
    isDisabled() {
        return !this.isEnabled();
    }
    switch(overridedValue = null) {
        settingsDatabase.set(this.name, overridedValue == null ? this.isDisabled() : overridedValue);
    }
    getChild(postfix, defaultValue = true) {
        return new SettingBoolProperty(this.name + postfix, defaultValue);
    }
}
class SettingDropdownProperty {
    constructor(name, values, defaultIndex = 0) {
        this.name = name;
        this.values = values;
        this.defaultIndex = defaultIndex;
    }
    get() {
        const rawValue = settingsDatabase.get(this.name);
        const isDefault = rawValue instanceof Object;
        return isDefault ? this.values[this.defaultIndex] : rawValue;
    }
    getIndex() {
        return this.values.indexOf(this.get());
    }
    isDefault() {
        return this.get() == this.values[this.defaultIndex];
    }
    set(index) {
        settingsDatabase.set(this.name, this.values[index]);
    }
}
class SettingStringProperty {
    constructor(name, defaultValue, filter = null) {
        this.name = name;
        this.defaultValue = defaultValue;
        this.filter = filter != null ? filter : (input) => input;
    }
    get() {
        const rawValue = settingsDatabase.get(this.name);
        const isDefault = rawValue instanceof Object;
        return isDefault ? this.defaultValue : rawValue;
    }
    isDefault() {
        return this.get() == this.defaultValue;
    }
    set(value) {
        settingsDatabase.set(this.name, value);
    }
}
function defaultFilter(defaultValue) {
    return (input) => {
        const parsed = parseInt(input).toString();
        return parsed != `NaN` ? parsed : defaultValue.toString();
    };
}
function defaultPositiveFilter(defaultValue) {
    return (input) => {
        const parsed = Math.abs(parseInt(input)).toString();
        return parsed != `NaN` ? parsed : defaultValue.toString();
    };
}
class SettingsManager {
    constructor() {
        this.revision = this.getRevision();
        this.isDirted = false;
        this.API_APP = new SettingStringProperty(`apiApp`, ``);
        this.API_WARNINGS = new SettingBoolProperty(`apiWarnings`);
        this.WIDE_MODE = new SettingBoolProperty(`wideMode`);
        this.CONTENT_WIDTH = new SettingStringProperty(`contentWidth`, `700`, defaultPositiveFilter(700));
        this.CONTENT_OFFSET = new SettingStringProperty(`contentOffset`, `0`, defaultFilter(0));
        this.BIGGER_FONTS = new SettingBoolProperty(`biggerFonts`);
        this.BIGGER_FONTS_CONTENT_SIZE = new SettingStringProperty(`biggerFontsContentSize`, `16`, defaultPositiveFilter(16));
        this.BIGGER_FONTS_OTHER_SIZE = new SettingStringProperty(`biggerFontsOtherSize`, `12`, defaultPositiveFilter(12));
        this.SCROLL_TO_TOP = new SettingBoolProperty(`scrollToTop`);
        this.IMAGE_VIEWER = new SettingBoolProperty(`imageViewer`);
        this.COLLAPSE_AWARDS = new SettingDropdownProperty(`collapseAwards`, Object.values(AwardsMode), 1);
        this.REDIRECT_MODE = new SettingDropdownProperty(`redirectMode`, Object.values(RedirectMode), 1);
        this.NOTIFY_POPUP = new SettingBoolProperty(`notifyPopup`);
        this.SHOW_FILTERED_CONTENT = new SettingBoolProperty(`showFilteredContent`);
        this.FILTERED_CONTENT_MAX_COUNT = new SettingStringProperty(`filteredContentMaxCount`, `20`, defaultPositiveFilter(20));
        this.SUB_FILTER = new SettingBoolProperty(`sidebarSubFilter`);
        this.SIDEBAR_GAMES = new SettingBoolProperty(`sidebarGames`);
        this.SIDEBAR_CUSTOMS = new SettingBoolProperty(`sidebarCustoms`);
        this.SIDEBAR_RECENT = new SettingBoolProperty(`sidebarRecent`);
        this.SIDEBAR_SUBS = new SettingBoolProperty(`sidebarSubs`);
        this.SIDEBAR_RESOURCES = new SettingBoolProperty(`sidebarResources`);
        this.SIDEBAR_NAV_BUTTON = new SettingBoolProperty(`sidebarNavigation`);
        this.FEED_BUTTONS = new SettingBoolProperty(`feedButtons`);
        this.FLAIR_BAR = new SettingBoolProperty(`flairbar`);
        this.FLAIR_SHOW_ALWAYS = new SettingBoolProperty(`flairShowAlways`, false);
        this.COLLAPSE_HIGHLIGHTS = new SettingBoolProperty(`collapseHighlights`, false);
        this.BACKPLATES = new SettingBoolProperty(`backplates`);
        this.SELECTABLE_POSTS = new SettingBoolProperty(`selectablePosts`);
        this.UNWRAP_POST = new SettingBoolProperty(`unwrapPost`);
        this.SHOW_POST_AUTHOR = new SettingBoolProperty(`showPostAuthor`);
        this.SAVED_BOOKMARK_POSTS = new SettingDropdownProperty(`savedBookmarkPosts`, Object.values(BookmarkMode), 1);
        this.COMMENTS_SORT_BUTTONS = new SettingBoolProperty(`commentSortButtons`);
        this.COMMENTS_REMEMBER_SORT = new SettingBoolProperty(`commentRememberSort`);
        this.UNWRAP_MORE_REPLIES = new SettingBoolProperty(`unwrapMoreReplies`, false);
        this.USER_INFO = new SettingBoolProperty(`userInfo`, false);
        this.USERNAME_MODE = new SettingDropdownProperty(`usernameMode`, Object.values(UsernameMode), 0);
        this.USERNAME_MAX_SIMBOLS = new SettingStringProperty(`usernameMaxSimbols`, `50`, defaultPositiveFilter(50));
        this.USER_TAGS = new SettingBoolProperty(`userTags`);
        this.HIDE_SHARE = new SettingBoolProperty(`hideShare`);
        this.GHOSTED_COMMENTS = new SettingBoolProperty(`ghostedComments`);
        this.COLLAPSE_AUTOMODERATOR = new SettingBoolProperty(`collapseAutomoderator`);
        this.SAVED_BOOKMARK_COMMENTS = new SettingDropdownProperty(`savedBookmarkComments`, Object.values(BookmarkMode), 1);
        this.HIDE_RELATED_POSTS = new SettingBoolProperty(`hideRelatedPosts`, false);
        window.addEventListener('storage', event => {
            if (this.isDirt() && !this.isDirted) {
                this.isDirted = true;
                document.addEventListener('visibilitychange', () => {
                    window.location.reload();
                }, { once: true });
            }
        });
    }
    getRevision() {
        return parseInt(localStorage.getItem(`pp_settings_s_revision`) ?? `0`);
    }
    nextRevision() {
        this.revision++;
        localStorage.setItem(`pp_settings_s_revision`, String(this.revision));
    }
    isDirt() {
        const currentRevision = this.getRevision();
        return currentRevision != this.revision;
    }
}
const settingsDatabase = new Database(`SETTINGS`);
const settings = new SettingsManager();

;// CONCATENATED MODULE: ./src/modules/toaster.ts

async function notify(message, config) {
    const { seconds, color } = { seconds: 3, color: null, ...config };
    let toaster = await dynamicElement(() => document.body?.querySelector(`alert-controller`)?.shadowRoot?.querySelector(`toaster-lite`));
    let toast = document.createElement(`faceplate-toast`);
    toast.classList.add(`theme-rpl`);
    if (color != null) {
        toast.style.backgroundColor = color;
    }
    toast.textContent = message;
    toaster.appendChild(toast);
    setTimeout(() => {
        toast.setAttribute(`_fading`, ``);
    }, seconds * 1000);
}
function pp_log(message) {
    
    console.log(`Reddit++: ${message}`);
}

;// CONCATENATED MODULE: ./src/utils/redditAPI.ts


const tooManyRequestStatus = 429;
let tooManyRequestTimeout = null;
async function requestAPI(api) {
    try {
        if (tooManyRequestTimeout != null) {
            if (Date.now() > tooManyRequestTimeout) {
                tooManyRequestTimeout = null;
            }
            else {
                return { status: tooManyRequestStatus, result: null };
            }
        }
        const headers = new Headers({
            Accept: 'text/vnd.reddit.partial+html, text/html;q=0.9',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        const url = new URL(`https://www.reddit.com${api}`);
        const appName = settings.API_APP.get();
        if (appName != null && appName.length > 0) {
            url.search = new URLSearchParams({ app: appName }).toString();
        }
        const response = await fetch(url, { credentials: 'include', method: `get`, headers: headers });
        if (!response.ok) {
            pp_log(`${api} request failed with code ${response.status} : ${response.statusText}`);
            if (response.status == tooManyRequestStatus) {
                const resetSeconds = parseInt(response.headers.get(`x-ratelimit-reset`));
                tooManyRequestTimeout = Date.now() + resetSeconds * 1000 + 500;
                if (settings.API_WARNINGS.isEnabled()) {
                    notify(`API request hit a limit. Disable "API requests" features or set correct App name or wait ${resetSeconds} seconds`, { seconds: 15 });
                }
            }
            return { status: response.status, result: null };
        }
        const json = await response.json();
        return { status: response.status, result: json };
    }
    catch (e) {
        pp_log(`${api} request failed with error: ${e}`);
        return { status: `error`, result: null };
    }
}

// EXTERNAL MODULE: ./src/modules/bookmark.less
var bookmark = __webpack_require__("./src/modules/bookmark.less");
// EXTERNAL MODULE: ./resources/bookmarkSaved.svg
var bookmarkSaved = __webpack_require__("./resources/bookmarkSaved.svg");
var bookmarkSaved_default = /*#__PURE__*/__webpack_require__.n(bookmarkSaved);
// EXTERNAL MODULE: ./resources/bookmarkUnsaved.svg
var bookmarkUnsaved = __webpack_require__("./resources/bookmarkUnsaved.svg");
var bookmarkUnsaved_default = /*#__PURE__*/__webpack_require__.n(bookmarkUnsaved);
;// CONCATENATED MODULE: ./src/modules/bookmark.ts








css.addStyle(bookmark/* default */.A);
function renderCommentBookmark(comment, forced = false) {
    const mode = settings.SAVED_BOOKMARK_COMMENTS.get();
    if (mode == BookmarkMode.Disabled)
        return;
    const contextMenuButton = comment.querySelector(`shreddit-overflow-menu`)?.shadowRoot?.querySelector(`rpl-dropdown`);
    const saveButton = contextMenuButton.querySelector(`.save-comment-menu-button`);
    const saveButtonContent = saveButton.querySelector(`.text-body-2`);
    saveButton.addEventListener(`click`, () => {
        renderCommentBookmark(comment, true);
    });
    let isSaved = saveButtonContent.textContent == `Remove from saved`;
    if (forced) {
        isSaved = true;
    }
    if (isSaved || forced || mode == BookmarkMode.Always) {
        const downVoteButton = comment.querySelector(`shreddit-comment-action-row`)?.shadowRoot?.querySelector(`button[downvote]`);
        css.registry(comment.querySelector(`shreddit-comment-action-row`)?.shadowRoot);
        const bookmarkButton = downVoteButton.cloneNode(true);
        downVoteButton.after(bookmarkButton);
        let bookmarkSvg = bookmarkButton.querySelector(`svg`);
        bookmarkSvg = replaceBookmarkIcon(bookmarkSvg, isSaved);
        bookmarkButton.addEventListener(`click`, () => {
            isSaved = !isSaved;
            bookmarkSvg = replaceBookmarkIcon(bookmarkSvg, isSaved);
        });
        bookmarkButton.append(saveButton);
        saveButton.classList.add(`pp_bookmark_hiddenButton`);
    }
}
async function renderBookmarkPost(post, forced = false, forcedValue = undefined) {
    const mode = settings.SAVED_BOOKMARK_POSTS.get();
    if (mode == BookmarkMode.Disabled)
        return;
    const contextMenu = await dynamicElement(() => post.querySelector(`shreddit-post-overflow-menu`)?.shadowRoot?.querySelector(`rpl-dropdown`)?.querySelector(`faceplate-menu`), 3000);
    if (contextMenu == undefined) {
        return;
    }
    let isSaved = true;
    let saveButton = null;
    contextMenu.querySelectorAll(`li`).forEach(element => {
        const buttonSpan = element.querySelector(`.text-body-2`);
        if (buttonSpan.textContent == `Save`) {
            isSaved = false;
        }
        if (buttonSpan.textContent == `Save` || buttonSpan.textContent == `Remove from saved`) {
            saveButton = element;
        }
    });
    if (saveButton == null) {
        const upVoteButton = post.shadowRoot?.querySelector(`button[upvote]`);
        const bookmarkButton = post.shadowRoot?.querySelector(`button[bookmark]`);
        bookmarkButton.className = upVoteButton.className;
        bookmarkButton.classList.add(`pp_bookmark_post`);
        return;
    }
    saveButton.addEventListener(`click`, () => {
        renderBookmarkPost(post, true, true);
    });
    const upVoteButton = post.shadowRoot?.querySelector(`button[upvote]`);
    upVoteButton.addEventListener(`click`, () => {
        renderBookmarkPost(post, true);
    });
    if (forcedValue != undefined) {
        isSaved = forcedValue;
    }
    if (isSaved || forced || mode == BookmarkMode.Always) {
        const downVoteButton = post.shadowRoot?.querySelector(`button[downvote]`);
        const bookmarkButton = downVoteButton.cloneNode(true);
        bookmarkButton.classList.add(`pp_bookmark_post`);
        bookmarkButton.removeAttribute(`disabled`);
        bookmarkButton.removeAttribute(`downvote`);
        bookmarkButton.setAttribute(`bookmark`, ``);
        downVoteButton.after(bookmarkButton);
        let bookmarkSvg = bookmarkButton.querySelector(`svg`);
        bookmarkSvg = replaceBookmarkIcon(bookmarkSvg, isSaved);
        bookmarkButton.addEventListener(`click`, () => {
            isSaved = !isSaved;
            bookmarkSvg = replaceBookmarkIcon(bookmarkSvg, isSaved);
        });
        bookmarkButton.append(saveButton);
        saveButton.classList.add(`pp_bookmark_hiddenButton`);
    }
}
function replaceBookmarkIcon(originSvg, isSaved) {
    const newSvg = buildSvg(isSaved ? (bookmarkSaved_default()) : (bookmarkUnsaved_default()), 20, 20);
    newSvg.setAttribute(`width`, `16px`);
    newSvg.setAttribute(`height`, `16px`);
    originSvg.replaceWith(newSvg);
    return newSvg;
}

// EXTERNAL MODULE: ./src/modules/collapseAwards.less
var collapseAwards = __webpack_require__("./src/modules/collapseAwards.less");
;// CONCATENATED MODULE: ./src/modules/collapseAwards.ts






css.addStyle(collapseAwards/* default */.A);
async function renderCollapseAward(target, contentType) {
    const mode = settings.COLLAPSE_AWARDS.get();
    if (mode == AwardsMode.Default)
        return;
    css.addStyle(collapseAwards/* default */.A, `collapseAwards`);
    const awardButton = contentType == ContentType.Comment ? target.querySelector(`award-button`) : target.shadowRoot.querySelector(`award-button`);
    if (awardButton == null)
        return;
    if (mode == AwardsMode.RemoveCompletely) {
        awardButton.remove();
        return;
    }
    if (awardButton.getAttribute(`count`) == `0`) {
        if (contentType == ContentType.Post) {
            css.registry(target.shadowRoot);
        }
        const targetContainer = contentType == ContentType.Comment ? target.querySelector(`shreddit-comment-action-row`)?.shadowRoot : target?.shadowRoot;
        const upVoteButton = await dynamicElement(() => targetContainer?.querySelector(`button[upvote]`), MAX_LOAD_LAG);
        if (upVoteButton == null)
            return;
        awardButton.classList.toggle(`pp_awardButton_hidden`, isCollapsed(upVoteButton));
        awardButton.classList.toggle(`pp_awardButton_collapsed`, isCollapsed(upVoteButton));
        setTimeout(() => {
            awardButton.classList.add(`pp_awardButton`);
        }, 500);
        upVoteButton.addEventListener(`click`, () => {
            awardButton.classList.toggle(`pp_awardButton_hidden`, isCollapsed(upVoteButton));
            setTimeout(() => {
                awardButton.classList.toggle(`pp_awardButton_collapsed`, isCollapsed(upVoteButton));
            }, 10);
        });
    }
}
function isCollapsed(upVoteButton) {
    return upVoteButton.getAttribute(`aria-pressed`) != `true`;
}

// EXTERNAL MODULE: ./src/modules/subs/flairBar.less
var flairBar = __webpack_require__("./src/modules/subs/flairBar.less");
;// CONCATENATED MODULE: ./src/modules/subs/flairBar.ts








css.addStyle(flairBar/* default */.A);
async function renderFlairBar(main) {
    if (settings.FLAIR_BAR.isDisabled())
        return;
    let feedContent = await dynamicElement(() => main?.querySelector(`shreddit-title`)?.parentElement, MAX_LOAD_LAG);
    if (feedContent == null)
        return;
    const subHighlights = main?.querySelector(`community-highlight-carousel`);
    if (subHighlights != null) {
        feedContent = subHighlights;
    }
    const prevFlairMenu = feedContent.parentElement?.querySelector(`.pp_flairBar`)?.parentElement;
    if (prevFlairMenu != null) {
        prevFlairMenu.remove();
    }
    const sub = getCurrentSub();
    const subData = await subs_subs.getWithLoader(sub);
    const flairsData = flairs.get(sub);
    if (subData.flairs == undefined || subData.flairs.length == 0)
        return;
    const flairMenuContainer = document.createElement(`div`);
    feedContent.before(flairMenuContainer);
    const flairMenu = appendElement(flairMenuContainer, `div`, `pp_flairBar`);
    if (subHighlights != null) {
        flairMenu.classList.add(`pp_flairBar_highlights`);
    }
    const ul = appendElement(flairMenu, `ul`, [`p-0`, `m-0`, `list-none`, `gap-xs`, `flex`, `flex-row`, `pp_flairBar_list`]);
    let flairsRendered = 0;
    for (const flair of subData.flairs) {
        if (flairsData.hidden != undefined && flairsData.hidden.includes(flair.text))
            continue;
        const li = appendElement(ul, `li`, `max-w-full`);
        renderFlair(li, sub, flair);
        flairsRendered++;
    }
    if (flairsRendered == 0) {
        flairMenuContainer.remove();
        return;
    }
    const borderContainer = document.createElement(`div`);
    borderContainer.classList.add(`pp_flairBar_bordersContainer`);
    flairMenuContainer.prepend(borderContainer);
    const borderLeftC = appendElement(borderContainer, `div`, `pp_flairBar_preBorder`);
    const borderLeft = appendElement(borderLeftC, `div`, [`pp_flairBar_border`, `pp_flairBar_border_left`]);
    borderLeft.textContent = ` `;
    const borderRightC = appendElement(borderContainer, `div`, `pp_flairBar_preBorder`);
    const borderRight = appendElement(borderRightC, `div`, [`pp_flairBar_border`, `pp_flairBar_border_right`]);
    borderRight.textContent = ` `;
    const hr = document.createElement(`hr`);
    hr.classList.add(`border-0`, `border-b-sm`, `border-solid`, `border-b-neutral-border-weak`);
    flairMenuContainer.prepend(hr);
    const mymx = document.createElement(`div`);
    mymx.classList.add(`my-xs`, `mx-2xs0`);
    flairMenuContainer.prepend(mymx);
    ul.style.left = `25px`;
    const ulRect = ul.getBoundingClientRect();
    const menuRect = flairMenu.getBoundingClientRect();
    flairMenu.addEventListener(`mousemove`, e => {
        onMoveOverFlairs(e, ul, flairMenu);
    });
    if (ulRect.width > menuRect.width * 1.72) {
        ul.classList.add(`pp_flairBar_listSmoothed`);
    }
}
function onMoveOverFlairs(e, ul, flairMenu) {
    const ulRect = ul.getBoundingClientRect();
    const menuRect = flairMenu.getBoundingClientRect();
    if (ulRect.width < menuRect.width) {
        ul.style.left = `25px`;
        return;
    }
    let scale = (e.clientX - (menuRect.x + 25)) / (menuRect.right - 25 - (menuRect.x + 25));
    scale = Math.max(0, Math.min(scale, 1));
    ul.style.left = `${Math.round(25 - (ulRect.width - menuRect.width + 50) * scale)}px`;
}

// EXTERNAL MODULE: ./src/modules/subs/subs.less
var subs = __webpack_require__("./src/modules/subs/subs.less");
// EXTERNAL MODULE: ./resources/settingsArrow.svg
var settingsArrow = __webpack_require__("./resources/settingsArrow.svg");
var settingsArrow_default = /*#__PURE__*/__webpack_require__.n(settingsArrow);
// EXTERNAL MODULE: ./src/utils/UI/options.less
var options = __webpack_require__("./src/utils/UI/options.less");
;// CONCATENATED MODULE: ./src/utils/UI/options.ts





css.addStyle(options/* default */.A);
function renderUIOptions(container, index, values, onChange) {
    let currentIndex = index;
    const options = appendElement(container, `div`, `pp_ui_options`);
    const leftButton = appendElement(options, `div`, [`pp_ui_options_arrow`, `pp_ui_options_inversed`, `button`, `button-plain`, `button-medium`, `px-[var(--rem8)]`]);
    const leftButtonSvg = buildSvg((settingsArrow_default()), 20, 20);
    leftButton.append(leftButtonSvg);
    const contentContainer = appendElement(options, `div`, `pp_ui_options_container`);
    const content = appendElement(contentContainer, `span`, [`text-secondary`, `font-normal`]);
    let largerValue = values[0];
    let largerLetters = largerValue.length;
    for (const val of values) {
        if (val.length > largerLetters) {
            largerValue = val;
            largerLetters = val.length;
        }
    }
    content.textContent = largerValue;
    const rect = content.getBoundingClientRect();
    content.style.minWidth = `${rect.width}px`;
    content.textContent = values[index];
    const dots = appendElement(contentContainer, `span`, [`pp_ui_options_dots`, `text-secondary`, `font-normal`]);
    dots.textContent = getDots();
    const rightButton = appendElement(options, `div`, [`pp_ui_options_arrow`, `button`, `button-plain`, `button-medium`, `px-[var(--rem8)]`]);
    const rightButtonSvg = buildSvg((settingsArrow_default()), 20, 20);
    rightButton.append(rightButtonSvg);
    leftButton.addEventListener(`click`, e => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = values.length - 1;
        }
        change();
    });
    rightButton.addEventListener(`click`, e => {
        currentIndex++;
        if (currentIndex >= values.length) {
            currentIndex = 0;
        }
        change();
    });
    function change() {
        content.textContent = values[currentIndex];
        dots.textContent = getDots();
        onChange(currentIndex);
    }
    function getDots() {
        let i = 0;
        let result = ``;
        while (i < values.length) {
            result += i == currentIndex ? `•` : `◦`;
            i++;
        }
        return result;
    }
    return options;
}

// EXTERNAL MODULE: ./src/utils/UI/toggle.less
var toggle = __webpack_require__("./src/utils/UI/toggle.less");
;// CONCATENATED MODULE: ./src/utils/UI/toggle.ts



css.addStyle(toggle/* default */.A);
function renderUIToggle(container, value, onClick) {
    const toggle = appendElement(container, `div`, `pp_ui_toggle`);
    const toggleButton = appendElement(toggle, `button`, `pp_ui_toggle_button`);
    toggleButton.classList.toggle(`pp_ui_toggle_active`, value);
    appendElement(toggleButton, `div`, `pp_ui_toggle_knob`);
    let state = value;
    toggleButton.addEventListener(`click`, () => {
        state = !state;
        toggleButton.classList.toggle(`pp_ui_toggle_active`, state);
        onClick(state);
    });
    return toggle;
}

// EXTERNAL MODULE: ./src/utils/window.less
var utils_window = __webpack_require__("./src/utils/window.less");
// EXTERNAL MODULE: ./resources/windowCloseButton.svg
var windowCloseButton = __webpack_require__("./resources/windowCloseButton.svg");
var windowCloseButton_default = /*#__PURE__*/__webpack_require__.n(windowCloseButton);
;// CONCATENATED MODULE: ./src/utils/window.ts





css.addStyle(utils_window/* default */.A);
let currentWindows = [];
function closeAllWindows() {
    while (currentWindows.length > 0) {
        currentWindows[currentWindows.length - 1].close();
    }
}
class Window {
    constructor(tittle, render, onClose = null) {
        this.tittleContent = tittle;
        this.render = render;
        this.onClose = onClose;
        this.container = null;
        this.content = null;
        this.closeButton = null;
    }
    build() {
        this.container = document.createElement(`div`);
        this.container.classList.add(`pp_window_container`);
        let isContainerDown = false;
        this.container.addEventListener('mousedown', e => {
            isContainerDown = e.target == this.container;
        });
        this.container.addEventListener('click', e => {
            if (isContainerDown && e.target == this.container) {
                this.close();
            }
        });
        const win = appendElement(this.container, `div`, `pp_window`);
        const tittleContainer = appendElement(win, `div`, `pp_window_tittleContainer`);
        const tittleDiv = appendElement(tittleContainer, `div`, [`pp_window_tittle`, `flex`, `flex-row`]);
        this.tittle = appendElement(tittleDiv, `span`, [`text-24`, `font-semibold`]);
        this.tittle.textContent = this.tittleContent;
        this.closeButton = appendElement(tittleContainer, `div`, [`pp_window_closeButton`, `flex`, `items-center`]);
        this.closeButton = appendElement(this.closeButton, `button`, [`button`, `icon`, `inline-flex`, `items-center`, `justify-center`, `button-small`, `button-secondary`, `px-[var(--rem6)]`]);
        this.closeButton.setAttribute(`tittle`, `Close ${this.tittleContent}`);
        this.closeButton.addEventListener('click', e => {
            this.close();
        });
        this.closeButton = appendElement(this.closeButton, `span`, [`flex`, `items-center`, `justify-center`]);
        this.closeButton = appendElement(this.closeButton, `span`, [`flex`]);
        const svg = buildSvg((windowCloseButton_default()), 16, 16, { strokeColor: NONE_COLOR });
        this.closeButton.append(svg);
        appendElement(win, `hr`, `border-b-neutral-border-weak`);
        this.content = appendElement(win, `div`, `pp_window_content`);
        appendElement(win, `div`, `pp_window_footer`).textContent = ` `;
    }
    open(context = null) {
        if (this.container == null) {
            this.build();
        }
        for (const w of currentWindows) {
            w.container.remove();
        }
        currentWindows.push(this);
        document.body.appendChild(this.container);
        document.body.parentElement.style.overflow = 'hidden';
        this.render(this, context);
    }
    close() {
        this.container.remove();
        currentWindows.splice(currentWindows.findIndex(w => w == this), 1);
        if (currentWindows.length <= 0) {
            document.body.parentElement.style.overflow = 'visible';
        }
        while (this.content.firstChild) {
            this.content.removeChild(this.content.lastChild);
        }
        if (currentWindows.length > 0) {
            const previous = currentWindows[currentWindows.length - 1];
            document.body.appendChild(previous.container);
        }
        if (this.onClose != null) {
            this.onClose();
        }
    }
}

// EXTERNAL MODULE: ./src/modules/subs/flairWindow.less
var flairWindow = __webpack_require__("./src/modules/subs/flairWindow.less");
;// CONCATENATED MODULE: ./src/modules/subs/flairWindow.ts









css.addStyle(flairWindow/* default */.A);
const flairsWindow = new Window('Flairs settings', renderFlairsWindow, closeFlairsWindow);
class FlairWindowContext {
}
const visabilityOptions = [`Show`, `Blur`, `Hide`];
function renderFlairsWindow(win, context) {
    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);
    const elements = appendElement(scroll, `div`, `pp_window_elementsContainer`);
    const subData = subs_subs.get(context.sub);
    for (const flair of subData.flairs) {
        const panel = appendElement(elements, `div`, [`pp_window_element`, `pp_flairWindow_flair`]);
        const flairContainer = appendElement(panel, `div`, `pp_flairWindow_flairContainer`);
        renderFlair(flairContainer, context.sub, flair);
        const onBarSpan = appendElement(panel, `span`);
        onBarSpan.textContent = `Flairs bar:`;
        renderUIToggle(panel, !getFlairData(context.sub, flair.text, FLAIR_HIDDEN), state => {
            setFlairData(context.sub, flair.text, FLAIR_HIDDEN, !state);
        });
        const feedSpan = appendElement(panel, `span`);
        feedSpan.textContent = `Feed:`;
        const isBlured = getFlairData(context.sub, flair.text, FLAIR_BLURED);
        const isBanned = getFlairData(context.sub, flair.text, FLAIR_BANNED);
        const visability = isBanned ? 2 : isBlured ? 1 : 0;
        renderUIOptions(panel, visability, visabilityOptions, index => {
            setFlairData(context.sub, flair.text, FLAIR_BLURED, false);
            setFlairData(context.sub, flair.text, FLAIR_BANNED, false);
            if (index == 1) {
                setFlairData(context.sub, flair.text, FLAIR_BLURED, true);
            }
            if (index == 2) {
                setFlairData(context.sub, flair.text, FLAIR_BANNED, true);
            }
        });
    }
}
function closeFlairsWindow() {
    const main = document.body.querySelector(`#main-content`);
    renderFlairBar(main);
}

;// CONCATENATED MODULE: ./src/modules/subs/subs.ts









css.addStyle(subs/* default */.A);
const FLAIR_HIDDEN = `hidden`;
const FLAIR_BLURED = `blured`;
const FLAIR_BANNED = `banned`;
class SubFlairsData {
}
class SubData {
}
const flairs = new Database(`FLAIRS`);
const subs_subs = new Database(`SUBS`, { isCleanupable: true, validator: subDataValidator, loader: subDataLoader });
function subDataValidator(subData) {
    return subData.flairs == undefined;
}
async function subDataLoader(sub) {
    let subData = { flairs: [] };
    const { status, result } = await requestAPI(`/r/${sub}/api/link_flair_v2.json`);
    if (result != null && result.message == null) {
        for (const loadedFlair of result) {
            const flair = { text: loadedFlair.text, color: loadedFlair.text_color, background: loadedFlair.background_color, richtext: loadedFlair.richtext };
            subData.flairs.push(flair);
        }
        return subData;
    }
    return subData;
}
function getCurrentSub() {
    const raw = window.location.href.split(`reddit.com/r/`);
    return raw.length > 1 ? raw[1].split(`/`)[0] : null;
}
async function renderSub(main) {
    const checkIsFeed = await dynamicElement(() => main.querySelector(`shreddit-feed-error-banner`), MAX_LOAD_LAG);
    if (checkIsFeed == null)
        return;
    renderMasthead(main);
    renderFlairBar(main);
    renderHighlights(main);
}
async function renderMasthead(main) {
    const masthead = await dynamicElement(() => main.parentElement.parentElement.querySelector(`.masthead`));
    if (checkIsRendered(masthead))
        return;
    masthead.querySelector(`section`).classList.add(`pp_mastheadSection`);
    document.body.addEventListener(`click`, renderContextMenu);
}
async function renderHighlights(main) {
    if (settings.COLLAPSE_HIGHLIGHTS.isDisabled())
        return;
    const highlightButton = await dynamicElement(() => main?.querySelector(`community-highlight-carousel`)?.shadowRoot?.querySelector(`button`), MAX_LOAD_LAG * 5);
    if (highlightButton != null) {
        highlightButton.click();
    }
}
function renderContextMenu(e) {
    const targetElement = e.target;
    if (targetElement.matches(`shreddit-subreddit-header-buttons`) != true)
        return;
    if (checkIsRendered(targetElement))
        return;
    const controlMenu = targetElement.shadowRoot.querySelector(`shreddit-subreddit-overflow-control`).shadowRoot.querySelector(`faceplate-menu`);
    const originButton = controlMenu.querySelector(`li`);
    const menuFlairsButton = originButton.cloneNode(true);
    menuFlairsButton.querySelector(`.text-body-2`).textContent = `Flairs settings`;
    controlMenu.prepend(menuFlairsButton);
    const sub = getCurrentSub();
    menuFlairsButton.addEventListener(`click`, () => {
        flairsWindow.open({ sub: sub });
    });
    const link = document.createElement(`a`);
    link.href = `https://www.reddit.com/` + targetElement.getAttribute(`prefixed-name`) + `/about/`;
    link.classList.add(`no-underline`);
    controlMenu.prepend(link);
    const menuAboutButton = originButton.cloneNode(true);
    menuAboutButton.querySelector(`.text-body-2`).textContent = `About`;
    link.prepend(menuAboutButton);
}

;// CONCATENATED MODULE: ./src/modules/subs/flair.ts


class FlairData {
}
class RichElement {
}
function getFlairData(sub, flair, category) {
    const flairsData = flairs.get(sub);
    return flairsData[category]?.includes(flair) ?? false;
}
function setFlairData(sub, flair, category, value) {
    const flairData = flairs.get(sub);
    let categoryArray = flairData[category];
    if (categoryArray == undefined || categoryArray == null) {
        categoryArray = [];
    }
    if (value) {
        categoryArray.push(flair);
    }
    else {
        categoryArray = categoryArray.filter(f => f != flair);
    }
    flairData[category] = categoryArray;
    flairs.set(sub, flairData);
}
function renderFlair(conatiner, sub, flair, minified = false) {
    const a = appendElement(conatiner, `a`, `no-decoration`);
    a.href = `/r/` + sub + `/?f=flair_name%3A%22` + flair.text + `%22`;
    const span = appendElement(a, `span`, [
        `bg-tone-4`,
        `inline-block`,
        `truncate`,
        `max-w-full`,
        `text-12`,
        `font-normal`,
        `box-border`,
        `px-[6px]`,
        `pp_flair`,
        `leading-4`,
        `max-w-full`,
        `py-xs`,
        `!px-sm`,
        `leading-4`,
        `h-xl`,
        `inline-flex`
    ]);
    if (minified) {
        span.className = `bg-tone-4 inline-block truncate max-w-full text-12 font-normal align-text-bottom box-border px-[6px] rounded-[20px] leading-4  relative top-[-0.25rem] xs:top-[-2px] my-2xs xs:mb-sm py-0 `;
    }
    span.classList.add(flair.color == `light` ? `text-global-white` : `text-global-black`);
    span.style.backgroundColor = flair.background;
    for (const richElement of flair.richtext) {
        if (richElement.e == `text`) {
            const content = document.createTextNode(richElement.t);
            span.appendChild(content);
        }
        if (richElement.e == `emoji`) {
            const fimg = document.createElement(`faceplate-img`);
            fimg.classList.add(`flair-image`);
            fimg.setAttribute(`loading`, `lazy`);
            fimg.setAttribute(`width`, `16`);
            fimg.setAttribute(`height`, `16`);
            fimg.setAttribute(`src`, richElement.u);
            fimg.setAttribute(`alt`, richElement.a);
            span.appendChild(fimg);
        }
    }
    if (flair.richtext.length == 0) {
        const content = document.createTextNode(flair.text);
        span.appendChild(content);
    }
}

;// CONCATENATED MODULE: ./src/modules/users/users.ts



class UserData {
}
const users = new Database(`USERS`, { isCleanupable: true, validator: userDataValidator, loader: userDataLoader });
function userDataValidator(userData) {
    return userData.accountId == undefined;
}
async function userDataLoader(userId) {
    let userData = {};
    if (userId == `[deleted]`) {
        userData.banned = true;
        return userData;
    }
    const { status, result } = await requestAPI(`/user/${userId}/about.json`);
    if (status != 404 && result == null) {
        
        return userData;
    }
    if (status == 404 || result.data?.is_suspended == true || result.data?.is_blocked == true) {
        userData.banned = true;
        return userData;
    }
    userData.rating = (result.data?.link_karma ?? 0) + (result.data?.comment_karma ?? 0) / 2;
    if (result.data?.subreddit?.title) {
        userData.nick = result.data.subreddit.title;
    }
    userData.created = result.data?.created ?? 0;
    userData.accountId = result.kind + `_` + result.data?.id;
    return userData;
}

// EXTERNAL MODULE: ./resources/comments/newUser.svg
var newUser = __webpack_require__("./resources/comments/newUser.svg");
var newUser_default = /*#__PURE__*/__webpack_require__.n(newUser);
// EXTERNAL MODULE: ./resources/comments/bannedUser.svg
var bannedUser = __webpack_require__("./resources/comments/bannedUser.svg");
var bannedUser_default = /*#__PURE__*/__webpack_require__.n(bannedUser);
;// CONCATENATED MODULE: ./src/modules/users/userInfo.ts










const NEWUSER_SECONDS_SHIFT = DAY_SECONDS * 64;
let loadQueueLock = false;
async function renderUserInfo(userId, nickName, tagsAnchor, infoAnchor, contentType) {
    const usernameMode = settings.USERNAME_MODE.get();
    if (settings.USER_INFO.isDisabled() && usernameMode == UsernameMode.ProfileName)
        return;
    
    await dynamicElement(() => (loadQueueLock ? null : true));
    loadQueueLock = true;
    const userData = await users.getWithLoader(userId, isLoaded => {
        if (isLoaded) {
            setTimeout(() => {
                loadQueueLock = false;
            }, 16 + Math.random() * 32);
        }
        else {
            loadQueueLock = false;
        }
    });
    
    if (usernameMode != UsernameMode.ProfileName && userData.nick != undefined && userData.nick) {
        const maxSymbols = parseInt(settings.USERNAME_MAX_SIMBOLS.get());
        nickName.textContent = maxSymbols <= 0 || userData.nick.length < maxSymbols ? userData.nick : userData.nick.slice(0, maxSymbols - 2) + `...`;
        if (usernameMode == UsernameMode.Both) {
            if (userId == nickName.textContent) {
                nickName.textContent = `u/${nickName.textContent}`;
            }
            else if (contentType == ContentType.Comment) {
                const commentHeader = nickName.parentElement?.parentElement?.parentElement?.parentElement?.parentElement;
                const flair = commentHeader.querySelector(`author-flair-event-handler`);
                let profileContainer = null;
                if (flair != null) {
                    profileContainer = flair.parentElement;
                }
                else {
                    profileContainer = appendElement(commentHeader, `div`, [`flex`, `flex-none`, `flex-row`, `items-center`, `flex-nowrap`, `gap-2xs`, `pt-[2px]`]);
                }
                const profileName = prependElement(profileContainer, `div`, [`font-bold`, `text-neutral-content-strong`, `text-12`]);
                profileName.textContent = `u/${userId}`;
                profileName.style.color = `#696969`;
            }
            else {
                const profileName = prependElement(nickName.parentElement, `div`);
                profileName.textContent = `| u/${userId}`;
                nickName.after(profileName);
            }
        }
    }
    if (settings.USER_INFO.isEnabled()) {
        const rating = document.createElement(`div`);
        rating.classList.add(`text-neutral-content-weak`, `text-12`);
        if (userData.rating != undefined) {
            rating.textContent = userData.rating < 10000 ? `${Math.round(userData.rating / 100) / 10}K` : `${Math.round(userData.rating / 1000)}K`;
            infoAnchor.after(rating);
            const point = document.createElement(`span`);
            if (contentType == ContentType.Comment) {
                point.classList.add(`inline-block`, `my-0`, `mx-2xs`, `text-12`, `text-neutral-content-weak`);
            }
            else {
                point.classList.add(`inline-block`, `my-0`, `created-separator`, `text-neutral-content-weak`);
            }
            point.textContent = `•`;
            rating.after(point);
        }
        if (userData.created != undefined && userData.created > Date.now() / 1000 - NEWUSER_SECONDS_SHIFT) {
            const newSvg = buildSvg((newUser_default()), 20, 20);
            newSvg.setAttribute(`viewBox`, `-2 -2 20 20`);
            tagsAnchor.before(newSvg);
        }
        if (userData.banned != undefined && userData.banned) {
            const newSvg = buildSvg((bannedUser_default()), 20, 20);
            newSvg.setAttribute(`viewBox`, `-2 -2 20 20`);
            tagsAnchor.before(newSvg);
        }
    }
}

// EXTERNAL MODULE: ./src/modules/posts/posts.less
var posts = __webpack_require__("./src/modules/posts/posts.less");
// EXTERNAL MODULE: ./src/modules/posts/postsBackplates.less
var postsBackplates = __webpack_require__("./src/modules/posts/postsBackplates.less");
// EXTERNAL MODULE: ./resources/postUnwrapButton.svg
var postUnwrapButton = __webpack_require__("./resources/postUnwrapButton.svg");
var postUnwrapButton_default = /*#__PURE__*/__webpack_require__.n(postUnwrapButton);
;// CONCATENATED MODULE: ./src/modules/settings/prefs.ts

class PrefsKey {
}
PrefsKey.COMMENTS_CURRENT_SORT = `COMMENTS_CURRENT_SORT`;
PrefsKey.SUB_FILTER = `SUB_FILTER`;
PrefsKey.CONTENT_FILTERS = `CONTENT_FILTERS`;
PrefsKey.PROFILE_MENU_ELEMENTS = `PROFILE_MENU_ELEMENTS`;
const prefs = new Database(`PREFS`);

// EXTERNAL MODULE: ./src/modules/filters/filters.less
var filters = __webpack_require__("./src/modules/filters/filters.less");
// EXTERNAL MODULE: ./resources/hiddenIco.svg
var hiddenIco = __webpack_require__("./resources/hiddenIco.svg");
var hiddenIco_default = /*#__PURE__*/__webpack_require__.n(hiddenIco);
// EXTERNAL MODULE: ./src/modules/filters/hiddenContent.less
var hiddenContent = __webpack_require__("./src/modules/filters/hiddenContent.less");
;// CONCATENATED MODULE: ./src/modules/filters/hiddenContentWindow.ts



const hiddenContentWindow = new Window('Hidden content', renderFiltersWindow, onCloseWindow);
function renderFiltersWindow(win, context) {
    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);
    const elements = appendElement(scroll, `div`, `pp_window_elementsContainer`);
    elements.style.margin = `20px 100px`;
    for (const content of hiddenContent_hiddenContent) {
        elements.prepend(content);
    }
}
function onCloseWindow() {
    for (const content of hiddenContent_hiddenContent) {
        content.remove();
    }
}

;// CONCATENATED MODULE: ./src/modules/filters/hiddenContent.ts








css.addStyle(hiddenContent/* default */.A);
const hiddenContent_hiddenContent = new Array();
let totalHiddentContent = 0;
let renderedHiddentContent = 0;
let renderTimer = null;
let hiddenContentButton = null;
let hiddenContentSpan = null;
let contentBlock = null;
let sidebarBlock = null;
function registerHiddenContent(content) {
    hiddenContent_hiddenContent.push(content);
    totalHiddentContent++;
    if (hiddenContent_hiddenContent.length > parseInt(settings.FILTERED_CONTENT_MAX_COUNT.get())) {
        hiddenContent_hiddenContent.splice(0, 1);
    }
    updateHiddenContentButton();
}
function clearHiddenContentButton() {
    if (hiddenContentButton != null) {
        hiddenContentButton.remove();
        hiddenContent_hiddenContent.length = 0;
        totalHiddentContent = 0;
        renderedHiddentContent = 0;
    }
}
async function renderHiddenContentButton() {
    contentBlock = (await dynamicElement(() => document.body.querySelector(`.main-container`)));
    sidebarBlock = (await dynamicElement(() => document.body.querySelector(`#right-sidebar-contents`)));
    const main = contentBlock.parentElement;
    if (hiddenContentButton == null) {
        hiddenContentButton = buildElement(`div`, [`pp_hiddenContent_button`, `text-neutral-content-weak`]);
        const icon = appendSvg(hiddenContentButton, (hiddenIco_default()), 16, 16, { strokeColor: CURRENT_COLOR, fillColor: NONE_COLOR });
        hiddenContentSpan = appendElement(hiddenContentButton, `span`);
        window.addEventListener('resize', event => {
            checkScreenWidth();
        });
        hiddenContentButton.addEventListener(`click`, event => {
            hiddenContentWindow.open();
        });
    }
    else {
        hiddenContentButton.classList.toggle(`pp_hiddenContent_button_visible`, false);
    }
    main.parentElement.append(hiddenContentButton);
    setTimeout(() => {
        hiddenContentButton.classList.add(`pp_hiddenContent_button_visible`);
    }, 250);
}
function calculateRenderTime() {
    const maxRenderTime = 250;
    const delta = totalHiddentContent - renderedHiddentContent;
    return delta > 0 ? maxRenderTime / delta : maxRenderTime;
}
async function updateHiddenContentButton() {
    if (hiddenContentButton == null || hiddenContentButton.parentElement == null) {
        await renderHiddenContentButton();
    }
    if (totalHiddentContent == 1) {
        hiddenContentSpan.textContent = `1 post`;
        renderedHiddentContent = 1;
    }
    else if (renderedHiddentContent < totalHiddentContent && renderTimer == null) {
        renderTimer = setTimeout(() => {
            renderedHiddentContent++;
            hiddenContentSpan.textContent = `${renderedHiddentContent} posts`;
            renderTimer = null;
            updateHiddenContentButton();
        }, calculateRenderTime());
    }
    checkScreenWidth();
}
function checkScreenWidth() {
    const isWide = settings.WIDE_MODE.isEnabled();
    const width = hiddenContentButton.getBoundingClientRect().width + 10;
    const left = isWide ? contentBlock.getBoundingClientRect().right : sidebarBlock.getBoundingClientRect().right;
    const right = isWide ? sidebarBlock.getBoundingClientRect().left : window.innerWidth - 16;
    const charOffset = totalHiddentContent.toString().length * 3;
    hiddenContentButton.style.left = `${(left + right) / 2 - (50 + charOffset)}px`;
    hiddenContentButton.classList.toggle(`pp_hiddenContent_button_visible`, right - left > width);
}

;// CONCATENATED MODULE: ./src/modules/filters/filters.ts













css.addStyle(filters/* default */.A);
var FilterAction;
(function (FilterAction) {
    FilterAction[FilterAction["Hide"] = 0] = "Hide";
    FilterAction[FilterAction["Blur"] = 1] = "Blur";
    FilterAction[FilterAction["Hightlight"] = 2] = "Hightlight";
})(FilterAction || (FilterAction = {}));
const filterActions = Object.values(FilterAction).slice(0, Object.values(FilterAction).length / 2);
class FilterData {
}
class Filter {
}
class FiltrationState {
    constructor() {
        this.hide = false;
        this.blur = null;
    }
}
let postsFilters = null;
let commentsFilters = null;
function buildFilters(dataFilter) {
    let datas = prefs.get(PrefsKey.CONTENT_FILTERS);
    if (!Array.isArray(datas)) {
        datas = [];
    }
    const filters = [];
    for (const data of datas) {
        if (dataFilter(data) == true) {
            filters.push({ regExp: new RegExp(data.expression, data.action == FilterAction.Hightlight ? `gi` : `i`), data: data });
        }
    }
    return filters;
}
async function filterPost(post) {
    const isFeed = !window.location.href.includes(`/comments/`);
    if (postsFilters == null) {
        postsFilters = buildFilters(data => data.posts == true);
    }
    const state = new FiltrationState();
    state.isPost = true;
    applyFilters(post.querySelector(`a[slot="title"]`), postsFilters, state);
    post
        .querySelector(`a[slot="text-body"]`)
        ?.querySelectorAll(`p`)
        ?.forEach(p => {
        applyFilters(p, postsFilters, state);
    });
    if (isFeed && state.hide) {
        hidePost();
        return;
    }
    if (isFeed) {
        const flairLock = await dynamicElement(() => (post.hasAttribute(`pp_flair`) ? post : null));
        const flairText = post.getAttribute(`pp_flair`);
        const sub = getSub(post);
        const flairData = flairs.get(sub);
        if (flairText.length > 0) {
            if (flairData.banned?.includes(flairText) ?? false) {
                state.hide = true;
            }
            if (flairData.blured?.includes(flairText) ?? false) {
                const subData = subs_subs.get(sub);
                const flairData = subData.flairs.find(f => f.text == flairText);
                if (state.blur == null) {
                    state.blur = { text: flairText, color: flairData.background };
                }
            }
        }
    }
    if (isFeed && state.hide) {
        hidePost();
    }
    else if (isFeed && state.blur != null) {
        blurContent(post, state);
    }
    async function hidePost() {
        const next = await dynamicElement(() => post.parentElement.nextElementSibling, MAX_LOAD_LAG);
        post.remove();
        next?.remove();
        if (settings.SHOW_FILTERED_CONTENT.isEnabled()) {
            registerHiddenContent(post);
        }
    }
}
function applyFilters(element, filters, state) {
    const content = element?.textContent;
    if (content == null || content.length == 0)
        return;
    for (const filter of filters) {
        if (filter.data.action == FilterAction.Blur && state.blur != null)
            continue;
        if (filter.data.action == FilterAction.Hide && state.hide)
            continue;
        const matches = filter.regExp.exec(content);
        if (matches != null && matches.length > 0) {
            switch (filter.data.action) {
                case FilterAction.Hide:
                    state.hide = true;
                    break;
                case FilterAction.Blur:
                    state.blur = { text: matchesToText(matches), color: filter.data.color };
                    break;
            }
            highlightContent(matches, filter.data, element);
        }
    }
}
function filterComment(comment, commentBody) {
    if (commentsFilters == null) {
        commentsFilters = buildFilters(data => data.comments == true);
    }
    const state = new FiltrationState();
    commentBody.querySelectorAll(`p`).forEach(p => {
        applyFilters(p, commentsFilters, state);
    });
    if (state.hide) {
        hideComment();
    }
    else if (state.blur != null) {
        blurContent(commentBody, state);
    }
    function hideComment() {
        comment.classList.add(`pp_hidden_comment`);
        const showButtonContainer = appendElement(comment, `div`);
        const showButton = appendElement(showButtonContainer, `div`, [`pp_hidden_button`, `button`, `button-plain-weak`, `button-small`]);
        const icon = buildSvg((hiddenIco_default()), 16, 16, { strokeColor: CURRENT_COLOR, fillColor: NONE_COLOR });
        showButton.append(icon);
        const text = appendElement(showButton, `span`);
        text.textContent = `Show a hidden comment`;
        showButton.addEventListener(`click`, () => {
            comment.classList.toggle(`pp_hidden_comment`, false);
            showButtonContainer.remove();
        }, { once: true });
        comment.prepend(showButtonContainer);
    }
}
function matchesToText(input) {
    if (input.length > 1) {
        input.sort((a, b) => a.length - b.length);
    }
    let text = input[0].trim();
    if (text.length > 50) {
        return `${text.slice(0, 48).trimEnd()}...`;
    }
    return text;
}
function blurContent(body, state) {
    body.classList.add(`pp_blured_content_animator`);
    body.classList.add(`pp_blured_content`);
    const clickArea = prependElement(body, `div`, `pp_blured_content_area`);
    const showButtonContainer = prependElement(body.parentElement, `div`, `pp_blured_button_container`);
    const showButton = appendElement(showButtonContainer, `div`, `pp_blured_button`);
    showButton.style.backgroundColor = state.blur.color + `55`;
    if (state.isPost) {
        showButton.style.top = `20px`;
    }
    const showButtonContent = appendElement(showButton, `div`, `pp_blured_button_content`);
    const icon = appendSvg(showButtonContent, (hiddenIco_default()), 16, 16, { strokeColor: CURRENT_COLOR, fillColor: NONE_COLOR });
    const showContent = appendElement(showButtonContent, `span`);
    showContent.textContent = state.blur.text;
    clickArea.addEventListener(`click`, () => {
        body.classList.toggle(`pp_blured_content`, false);
        showButtonContainer.remove();
        clickArea.remove();
    }, { once: true });
}
function highlightContent(matches, data, p) {
    let inner = p.innerHTML;
    const uniqueMathces = new Set(matches);
    for (const match of uniqueMathces) {
        const split = inner.split(match);
        if (split.length > 1) {
            inner = split[0];
            let i = 1;
            while (i < split.length) {
                inner += `<span style="border-radius: 6px; background-color: ${data.color}88;">${match}</span>`;
                inner += split[i];
                i++;
            }
        }
    }
    p.innerHTML = inner;
}

;// CONCATENATED MODULE: ./src/modules/posts/posts.ts



















class PostData {
}
const posts_posts = new Database(`POSTS`, { isCleanupable: true, validator: postDataValidator, loader: postDataLoader });
function postDataValidator(subData) {
    return subData.flair == undefined;
}
async function postDataLoader(post) {
    let postData = { flair: null };
    const postId = post.split(`:`);
    const { status, result } = await requestAPI(`/r/${postId[0]}/comments/${postId[1]}.json`);
    if (result != null && result.message == null) {
        for (const item of result) {
            for (const child of item.data.children) {
                if (child.kind == `t3`) {
                    postData.flair = {
                        text: child.data.link_flair_text,
                        color: child.data.link_flair_text_color,
                        background: child.data.link_flair_background_color,
                        richtext: child.data.link_flair_richtext
                    };
                    return postData;
                }
            }
        }
    }
    return postData;
}
css.addStyle(posts/* default */.A);
if (settings.BACKPLATES.isEnabled()) {
    css.addStyle(postsBackplates/* default */.A);
}
async function renderPost(post) {
    if (checkIsRendered(post))
        return;
    renderPostFlair(post);
    filterPost(post);
    applyShadowRoot(post);
    renderHeader(post);
    renderContent(post);
    renderShareButtonPost(post);
    renderBookmarkPost(post);
    const award = await dynamicElement(() => post.shadowRoot?.querySelector(`award-button`), MAX_LOAD_LAG);
    if (award != null) {
        renderCollapseAward(post, ContentType.Post);
    }
    if (settings.SELECTABLE_POSTS.isEnabled()) {
        post.querySelector(`a[slot="full-post-link"]`)?.remove();
        const tittle = await dynamicElement(() => post.querySelector(`a[slot="title"]`), MAX_LOAD_LAG);
        tittle?.classList?.add(`pp_post_tittle`);
    }
    
}
function getSub(post) {
    return post.getAttribute(`subreddit-prefixed-name`).replace(`r/`, ``);
}
async function renderPostFlair(post) {
    const sub = getSub(post);
    const postFlairContainer = await dynamicElement(() => post.querySelector(`shreddit-post-flair`), MAX_LOAD_LAG);
    const postFlair = (await dynamicElement(() => postFlairContainer?.querySelector(`a`), MIN_LOAD_LAG));
    let flairText = ``;
    if (postFlair == null) {
        if (settings.FLAIR_SHOW_ALWAYS.isEnabled()) {
            const permalink = post.getAttribute(`permalink`)?.split(`/`);
            if (permalink == null || permalink.length < 5) {
                pp_log(`Unable to parse post permalink: ${post.getAttribute(`permalink`)}`);
                return;
            }
            const postId = permalink[2] + `:` + permalink[4];
            const postData = await posts_posts.getWithLoader(postId);
            if (postData.flair != null && postData.flair.text != null) {
                renderFlair(postFlairContainer, sub, postData.flair, true);
            }
            flairText = postData.flair.text;
        }
    }
    else {
        const split = postFlair.href?.split(`%22`);
        flairText = split != null && split.length > 1 ? decodeURIComponent(split[1]) : ``;
    }
    post.setAttribute(`pp_flair`, flairText);
}
async function applyShadowRoot(post) {
    const shadowRootLock = await dynamicElement(() => post.shadowRoot);
    css.registry(post.shadowRoot);
}
async function renderShareButtonPost(post) {
    const shareButton = await dynamicElement(() => post.shadowRoot?.querySelector(`shreddit-post-share-button`)?.shadowRoot?.querySelector(`button`));
    css.registry(shareButton.parentNode.parentNode);
    shareButton.classList.add(`pp_post_shareButton`);
}
async function renderHeader(post) {
    const author = post.getAttribute(`author`);
    const viewContext = post.getAttribute(`view-context`);
    if (viewContext == `AggregateFeed` || viewContext == `CustomFeed`) {
        if (settings.SHOW_POST_AUTHOR.isDisabled())
            return;
        const anchor = await dynamicElement(() => post.querySelector(`span[slot="credit-bar"]`)?.querySelector(`.created-separator`), MAX_LOAD_LAG);
        const userNameLink = document.createElement(`a`);
        userNameLink.classList.add(`flex`, `items-center`, `text-neutral-content`, `visited:text-neutral-content-weak`, `a`, `cursor-pointer`, `no-visited`, `no-underline`, `hover:no-underline`);
        userNameLink.setAttribute(`href`, `/user/${author}/`);
        anchor.before(userNameLink);
        const userName = appendElement(userNameLink, `div`, [`text-neutral-content-weak`, `text-12`]);
        userName.textContent = author;
        const point = document.createElement(`span`);
        point.classList.add(`inline-block`, `my-0`, `created-separator`, `text-neutral-content-weak`);
        point.textContent = `•`;
        userNameLink.before(point);
        renderUserInfo(author, userName, anchor, anchor, ContentType.Post);
    }
    else {
        const creditBar = await dynamicElement(() => post.querySelector(`[slot="credit-bar"]`), MAX_LOAD_LAG);
        const userName = await dynamicElement(() => creditBar.querySelector(`span[slot="authorName"]`)?.querySelector(`a`)?.querySelector(`.whitespace-nowrap`), MAX_LOAD_LAG);
        const anchor = creditBar.querySelector(`.created-separator`);
        if (anchor == null)
            return;
        renderUserInfo(author, userName, anchor, anchor, ContentType.Post);
    }
}
async function renderContent(post) {
    if (window.location.href.includes(`/comments/`)) {
        registerImages(post, false);
        return;
    }
    const postContent = await dynamicElement(() => post.querySelector(`.feed-card-text-preview`), MAX_LOAD_LAG);
    if (postContent == null)
        return;
    if (settings.SELECTABLE_POSTS.isEnabled()) {
        postContent.parentElement.parentElement.removeAttribute(`href`);
    }
    postContent.classList.remove(`feed-card-text-preview`);
    const postAnchor = post.querySelector(`a[slot="text-body"]`);
    if (postAnchor != null) {
        postAnchor.classList.toggle(`pointer-events-none`, false);
    }
    for (const content of postContent.childNodes) {
        if (content instanceof Element && content.matches(`object`)) {
            const previewHref = content.querySelector(`a`)?.href;
            if (previewHref != null) {
                const image = document.createElement(`faceplate-img`);
                image.setAttribute(`src`, previewHref);
                image.setAttribute(`loading`, `eager`);
                image.setAttribute(`sizes`, `(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw`);
                image.className = `block w-fit my-0 mx-auto max-w-[100%]`;
                content.replaceWith(image);
            }
        }
    }
    registerImages(post, true);
    renderUnwrapPostButton(post, postContent);
}
async function registerImages(post, isFeed) {
    if (settings.IMAGE_VIEWER.isDisabled())
        return;
    if (isFeed) {
        const anyImage = await dynamicElement(() => post.querySelector(`faceplate-img`), MAX_LOAD_LAG);
        if (anyImage != null) {
            post.querySelectorAll(`faceplate-img`).forEach(imageContainer => {
                const href = imageContainer.getAttribute(`src`);
                let image = imageContainer.shadowRoot?.querySelector(`img`);
                if (image != null) {
                    image.classList.add(`pp_imageViewable`);
                }
                imageContainer.addEventListener(`click`, () => {
                    imageViewer_imageViewer.open(href);
                });
            });
        }
    }
    else {
        post.querySelectorAll(`figure[class="rte-media"]`).forEach(imageContainer => {
            const imageAnchor = imageContainer.querySelector(`a`);
            const href = imageAnchor.getAttribute(`href`);
            imageAnchor.removeAttribute(`href`);
            let image = imageContainer.querySelector(`img`);
            if (image == null) {
                image = imageContainer.querySelector(`shreddit-player-2`);
            }
            image.classList.add(`pp_imageViewable`);
            imageAnchor.addEventListener(`click`, () => {
                imageViewer_imageViewer.open(href);
            });
        });
    }
}
async function renderUnwrapPostButton(post, postContent) {
    const postShadowRoot = await dynamicElement(() => post.shadowRoot, MAX_LOAD_LAG);
    const renderedHeight = postContent.getBoundingClientRect().height;
    postContent.classList.add(`pp_post_noWrap`);
    const actualHeight = postContent.getBoundingClientRect().height;
    postContent.classList.remove(`pp_post_noWrap`);
    if (actualHeight > renderedHeight + 5) {
        const unwrapContainer = appendElement(post, `div`, `pp_post_unwrapContainer`);
        post.shadowRoot.append(unwrapContainer);
        const unwrapButton = appendElement(unwrapContainer, `div`, `pp_post_unwrapButton`);
        const unwrapIcon = buildSvg((postUnwrapButton_default()), 25, 25);
        unwrapButton.append(unwrapIcon);
        unwrapButton.addEventListener(`click`, () => {
            postContent.classList.add(`pp_post_noWrap`);
            unwrapContainer.remove();
        }, { once: true });
    }
}

;// CONCATENATED MODULE: ./src/modules/feed/feedLocation.ts
var FeedLocation;
(function (FeedLocation) {
    FeedLocation[FeedLocation["Sub"] = 0] = "Sub";
    FeedLocation[FeedLocation["Home"] = 1] = "Home";
    FeedLocation[FeedLocation["Popular"] = 2] = "Popular";
    FeedLocation[FeedLocation["All"] = 3] = "All";
    FeedLocation[FeedLocation["Custom"] = 4] = "Custom";
})(FeedLocation || (FeedLocation = {}));
const customRegex = new RegExp(`www.reddit.com/user/.*/m/`);
function getFeedLocation() {
    if (window.location.href.includes(`?feed=home`) || window.location.href == `https://www.reddit.com/`)
        return FeedLocation.Home;
    if (window.location.href.includes(`reddit.com/r/popular/`))
        return FeedLocation.Popular;
    if (window.location.href.includes(`reddit.com/r/all/`))
        return FeedLocation.All;
    if (customRegex.test(window.location.href))
        return FeedLocation.Custom;
    return FeedLocation.Sub;
}
function isOverridableLocation(location) {
    return location == FeedLocation.Sub || location == FeedLocation.Custom;
}

;// CONCATENATED MODULE: ./src/modules/feed/feedSort.ts

var FeedSort;
(function (FeedSort) {
    FeedSort["Best"] = "Best";
    FeedSort["Hot"] = "Hot";
    FeedSort["New"] = "New";
    FeedSort["Top"] = "Top";
    FeedSort["Rising"] = "Rising";
})(FeedSort || (FeedSort = {}));
function getFeedSorts(location) {
    switch (location) {
        case FeedLocation.All:
        case FeedLocation.Custom:
            return Object.values(FeedSort).filter(sort => sort != FeedSort.Best);
        default:
            return Object.values(FeedSort);
    }
}

// EXTERNAL MODULE: ./src/modules/feed/feedButtons.less
var feedButtons = __webpack_require__("./src/modules/feed/feedButtons.less");
// EXTERNAL MODULE: ./resources/feedButtons/feedButtonBest.svg
var feedButtonBest = __webpack_require__("./resources/feedButtons/feedButtonBest.svg");
var feedButtonBest_default = /*#__PURE__*/__webpack_require__.n(feedButtonBest);
// EXTERNAL MODULE: ./resources/settingsGear.svg
var settingsGear = __webpack_require__("./resources/settingsGear.svg");
var settingsGear_default = /*#__PURE__*/__webpack_require__.n(settingsGear);
// EXTERNAL MODULE: ./resources/feedButtons/feedButtonHot.svg
var feedButtonHot = __webpack_require__("./resources/feedButtons/feedButtonHot.svg");
var feedButtonHot_default = /*#__PURE__*/__webpack_require__.n(feedButtonHot);
// EXTERNAL MODULE: ./resources/feedButtons/feedButtonNew.svg
var feedButtonNew = __webpack_require__("./resources/feedButtons/feedButtonNew.svg");
var feedButtonNew_default = /*#__PURE__*/__webpack_require__.n(feedButtonNew);
// EXTERNAL MODULE: ./resources/feedButtons/feedButtonRising.svg
var feedButtonRising = __webpack_require__("./resources/feedButtons/feedButtonRising.svg");
var feedButtonRising_default = /*#__PURE__*/__webpack_require__.n(feedButtonRising);
// EXTERNAL MODULE: ./resources/feedButtons/feedButtonTop.svg
var feedButtonTop = __webpack_require__("./resources/feedButtons/feedButtonTop.svg");
var feedButtonTop_default = /*#__PURE__*/__webpack_require__.n(feedButtonTop);
// EXTERNAL MODULE: ./src/utils/changesObserver.less
var changesObserver = __webpack_require__("./src/utils/changesObserver.less");
;// CONCATENATED MODULE: ./src/utils/changesObserver.ts



css.addStyle(changesObserver/* default */.A);
class ChangesObserver {
    constructor() {
        this.changes = 0;
        this.bannerContainer = null;
    }
    CreateSource(defaultValue) {
        return new PlainChangesSource(this, defaultValue);
    }
    Reset() {
        this.changes = 0;
    }
    HasChanges() {
        return this.changes != 0;
    }
    OnChange(value) {
        this.changes += value;
        if (this.bannerContainer != null) {
            this.bannerContainer.classList.toggle(`pp_changesBanner_active`, this.HasChanges());
        }
    }
    RenderBanner(container) {
        if (this.bannerContainer == null) {
            this.bannerContainer = appendElement(container, `div`, `pp_changesBannerContainer`);
            const banner = appendElement(this.bannerContainer, `div`, `pp_changesBanner`);
            banner.textContent = `Page will be reloaded to apply new settings`;
        }
        else {
            container.append(this.bannerContainer);
            this.bannerContainer.classList.toggle(`pp_changesBanner_active`, false);
        }
    }
}
class ChangesSource {
    constructor(observer) {
        this.observer = observer;
    }
}
class PlainChangesSource extends ChangesSource {
    constructor(observer, defaultValue) {
        super(observer);
        this.isChanged = false;
        this.defaultValue = defaultValue;
    }
    Capture(value) {
        if (this.defaultValue != value && !this.isChanged) {
            this.isChanged = true;
            this.observer.OnChange(1);
        }
        if (this.defaultValue == value && this.isChanged) {
            this.isChanged = false;
            this.observer.OnChange(-1);
        }
    }
}

;// CONCATENATED MODULE: ./src/modules/feed/feedRedirect.ts




const redirectConfigs = new Map([
    [FeedLocation.Sub, { tittle: `Subreddits`, descriptionLabel: `Subreddits`, isOverridable: true, isOptional: true }],
    [FeedLocation.Home, { tittle: `Home`, descriptionLabel: `Home`, isOverridable: false, isOptional: false }],
    [FeedLocation.Popular, { tittle: `Popular`, descriptionLabel: `r/Popular`, isOverridable: false, isOptional: false }],
    [FeedLocation.All, { tittle: `All`, descriptionLabel: `r/All`, isOverridable: false, isOptional: false }],
    [FeedLocation.Custom, { tittle: `Custom feeds`, descriptionLabel: `Custom`, isOverridable: true, isOptional: false }]
]);
function isRedirectable() {
    if (window.location.href == `https://www.reddit.com/`)
        return true;
    if (window.location.href.includes(`/?f=flair_name`))
        return false;
    if (window.location.href.includes(`?feed=home`)) {
        return window.location.href.includes(`reddit.com/?feed=home`);
    }
    const subSplit = window.location.href.split(`/r/`);
    if (subSplit.length == 2) {
        return subSplit[1].split(`/`).length <= 2;
    }
    const customSplit = window.location.href.split(`/m/`);
    if (customSplit.length == 2) {
        return customSplit[1].split(`/`).length <= 2;
    }
    return false;
}
function initializeFeedRedirect() {
    checkFeedRedirect();
    const observeUrlChange = () => {
        let oldHref = document.location.href;
        const body = document.querySelector('body');
        const observer = new MutationObserver(mutations => {
            if (oldHref !== document.location.href) {
                oldHref = document.location.href;
                checkFeedRedirect();
            }
        });
        observer.observe(body, { childList: true, subtree: true });
    };
    window.onload = observeUrlChange;
}
function checkFeedRedirect() {
    if (!isRedirectable())
        return;
    const location = getFeedLocation();
    const data = defaultFeedData.get(FeedLocation[location]);
    const defaultSort = defaultSorts.get(location);
    if (location == FeedLocation.Sub) {
        const sub = getCurrentSub();
        const latest = subsLatestSort.get(sub);
        const subData = subsFeedData.get(sub);
        if (subData != null) {
            if (subData.defaultSort == latest || !subData.redirect)
                return;
            document.location.replace(`${document.location.href}${subData.defaultSort.toString().toLowerCase()}/`);
            return;
        }
        if (!data.redirect)
            return;
        if (latest != null && data.defaultSort != latest) {
            document.location.replace(`${document.location.href}${subData.defaultSort.toString().toLowerCase()}/`);
            return;
        }
    }
    if (location == FeedLocation.Custom) {
        const custom = getCurrentCustomFeed();
        const customData = customFeedData.get(custom);
        if (customData != null) {
            if (customData.defaultSort == defaultSort || !customData.redirect)
                return;
            document.location.replace(`${document.location.href}${customData.defaultSort.toString().toLowerCase()}/`);
            return;
        }
    }
    if (data.defaultSort == defaultSort)
        return;
    document.location.replace(`https://www.reddit.com${generateFeedHref(location, data.defaultSort)}`);
}

// EXTERNAL MODULE: ./src/modules/feed/feedSettings/feedSettingsWindow.less
var feedSettingsWindow = __webpack_require__("./src/modules/feed/feedSettings/feedSettingsWindow.less");
;// CONCATENATED MODULE: ./src/modules/feed/feedSettings/feedSettingsWindow.ts













css.addStyle(feedSettingsWindow/* default */.A);
const feedSettingsWindow_feedSettingsWindow = new Window('Feed sort settings', renderFeedSettingsWindow, feedSettingsWindow_onCloseWindow);
const changes = new ChangesObserver();
const sortChanges = new Map();
function renderFeedSettingsWindow(win, context) {
    changes.Reset();
    changes.RenderBanner(win.content);
    const location = context.location;
    const redirectConfig = redirectConfigs.get(location);
    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);
    const commonArea = appendElement(scroll, `div`, `pp_window_elementsContainer`);
    let defaultData = defaultFeedData.get(FeedLocation[location]);
    let overrideDatabase = null;
    let overrideKey = null;
    let overrideData = null;
    let isOverrided = false;
    let overrideArea = null;
    function getOverrideTittle() {
        if (location == FeedLocation.Custom) {
            return `${realCustomFeedTittle ?? overrideKey} custom feed`;
        }
        else {
            return `r/${overrideKey}`;
        }
    }
    if (redirectConfig.isOverridable) {
        const isSub = location == FeedLocation.Sub;
        overrideDatabase = isSub ? subsFeedData : customFeedData;
        overrideKey = isSub ? getCurrentSub() : getCurrentCustomFeed();
        overrideData = overrideDatabase.get(overrideKey);
        const propertyArea = appendElement(commonArea, `div`, `pp_window_element`);
        const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
        const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
        tittle.textContent = `Override ${getOverrideTittle()}`;
        const description = appendElement(header, `div`, `pp_settings_propertyHeader_description`);
        description.textContent = `Apply settings to this ${isSub ? `subreddit` : `custom feed`} only`;
        const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);
        isOverrided = overrideData != null;
        renderUIToggle(controlArea, isOverrided, (state) => {
            if (state) {
                overrideData = {
                    redirect: defaultData.redirect,
                    defaultSort: defaultData.defaultSort,
                    hiddenSort: [...defaultData.hiddenSort]
                };
                overrideDatabase.set(overrideKey, overrideData);
            }
            else {
                overrideDatabase.set(overrideKey, null);
            }
            isOverrided = state;
            overrideArea.classList.toggle(`pp_feedSettings_overrideSub`, isOverrided);
            renderWindowTittle();
            renderOverrideArea();
        });
    }
    renderWindowTittle();
    function renderWindowTittle() {
        win.tittle.innerHTML = isOverrided ? `Feed sort: <span class="pp_feedSettings_overrideTittle">${getOverrideTittle()}</span>` : `Feed sort: ${redirectConfig.tittle}`;
    }
    const sorts = getFeedSorts(location);
    renderOverrideArea();
    function renderOverrideArea() {
        if (overrideArea != null) {
            overrideArea.remove();
            overrideArea = null;
        }
        overrideArea = appendElement(scroll, `div`, `pp_window_elementsContainer`);
        overrideArea.classList.toggle(`pp_feedSettings_overrideSub`, isOverrided);
        const currentData = isOverrided ? overrideData : defaultData;
        function saveCurrentData() {
            if (isOverrided) {
                overrideDatabase.set(overrideKey, currentData);
            }
            else {
                defaultFeedData.set(FeedLocation[location], currentData);
            }
        }
        let defaultSortToogle = null;
        if (redirectConfig.isOptional) {
            const propertyArea = appendElement(overrideArea, `div`, `pp_window_element`);
            const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
            const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
            tittle.textContent = `Redirect`;
            const description = appendElement(header, `div`, `pp_settings_propertyHeader_description`);
            description.innerHTML = `By default Reddit loads the latest used sort for subs. That option forces redirect to the <b>Default sort</b>`;
            const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
            const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);
            renderUIToggle(controlArea, currentData.redirect, (state) => {
                currentData.redirect = state;
                saveCurrentData();
                defaultSortToogle.classList.toggle(`pp_ui_disabled`, !currentData.redirect);
            });
        }
        {
            const propertyArea = appendElement(overrideArea, `div`, `pp_window_element`);
            const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
            const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
            tittle.textContent = `Default sort`;
            const description = appendElement(header, `div`, `pp_settings_propertyHeader_description`);
            description.innerHTML = `By default Reddit uses <b>${defaultSorts.get(location)}</b> sort for <b>${redirectConfig.descriptionLabel}</b> feed`;
            const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
            const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);
            defaultSortToogle = renderUIOptions(controlArea, sorts.indexOf(currentData.defaultSort), sorts, (index) => {
                currentData.defaultSort = sorts[index];
                saveCurrentData();
            }).parentElement.parentElement.parentElement;
            defaultSortToogle.classList.toggle(`pp_ui_disabled`, !currentData.redirect);
        }
        const subtittleSections = appendElement(overrideArea, `h3`, `pp_settings_subtittle`);
        subtittleSections.textContent = `Visible buttons`;
        sorts.forEach(sort => {
            const propertyArea = appendElement(overrideArea, `div`, `pp_window_element`);
            const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
            const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
            tittle.textContent = sort;
            propertyArea.classList.add(`pp_settings_property_oneLine`);
            const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
            const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);
            const defaultValue = !currentData.hiddenSort.includes(sort);
            let changesSource = null;
            if (sortChanges.has(sort)) {
                changesSource = sortChanges.get(sort);
                changesSource.Capture(defaultValue);
            }
            else {
                changesSource = changes.CreateSource(defaultValue);
                sortChanges.set(sort, changesSource);
            }
            renderUIToggle(controlArea, defaultValue, (state) => {
                if (state) {
                    currentData.hiddenSort = currentData.hiddenSort.filter(hiddenSort => hiddenSort != sort);
                }
                else {
                    currentData.hiddenSort.push(sort);
                }
                changesSource.Capture(state);
                saveCurrentData();
            });
        });
    }
}
function feedSettingsWindow_onCloseWindow() {
    if (changes.HasChanges()) {
        window.location.reload();
    }
}

;// CONCATENATED MODULE: ./src/modules/feed/feedButtons.ts



















css.addStyle(feedButtons/* default */.A);
const sortIcons = {
    Best: (feedButtonBest_default()),
    Hot: (feedButtonHot_default()),
    New: (feedButtonNew_default()),
    Top: (feedButtonTop_default()),
    Rising: (feedButtonRising_default())
};
async function renderFeedButtons(main) {
    if (settings.FEED_BUTTONS.isDisabled() || window.location.href.includes(`/about/`))
        return;
    if (checkIsRendered(main))
        return;
    const feedPanel = await dynamicElement(() => main.querySelector(`shreddit-async-loader[bundlename="shreddit_sort_dropdown"]`), MAX_LOAD_LAG);
    const sortDropdown = await dynamicElement(() => feedPanel?.querySelector(`shreddit-sort-dropdown`), MAX_LOAD_LAG);
    if (sortDropdown == null || sortDropdown.getAttribute(`trigger-id`) == `comment-sort-button`)
        return;
    feedPanel.classList.add(`pp_feedPanel`);
    const feedPanelContent = sortDropdown.parentElement.parentElement;
    const location = getFeedLocation();
    if (location == FeedLocation.Custom && feedPanel.previousElementSibling.className == `s:invisible`) {
        feedPanel.previousElementSibling.remove();
    }
    const currentSortText = sortDropdown.querySelector(`div[slot="selected-item"]`)?.textContent;
    const currentSort = FeedSort[currentSortText];
    sortDropdown.remove();
    let data = defaultFeedData.get(FeedLocation[location]);
    if (location == FeedLocation.Sub) {
        const sub = getCurrentSub();
        const subData = subsFeedData.get(sub);
        if (subData) {
            data = subData;
        }
        subsLatestSort.set(sub, currentSort);
    }
    if (location == FeedLocation.Custom) {
        const custom = getCurrentCustomFeed();
        const customData = customFeedData.get(custom);
        if (customData != null) {
            data = customData;
        }
    }
    const sorts = getFeedSorts(location);
    if (feedPanel.parentElement.className != `flex justify-between flex-wrap mb-xs mt-xs`) {
        feedPanel.parentElement.style.marginBottom = `1rem`;
    }
    const buttonsContainer = prependElement(feedPanelContent, `div`, `pp_feedPanel_buttons`);
    for (const sort of sorts) {
        if (data.hiddenSort.includes(sort) && sort != currentSort)
            continue;
        const button = appendElement(buttonsContainer, `a`, [
            `inline-flex`,
            `flex-col`,
            `text-secondary-plain-weak`,
            `font-semibold`,
            `rounded-full`,
            `hover:no-underline`,
            `hover:text-secondary-plain`,
            `hover:bg-secondary-background-hover`,
            `hover:text-secondary-content`,
            `active:bg-secondary-background`,
            `ps-[var(--rem16)]`,
            `pe-[var(--rem16)]`
        ]);
        button.href = generateFeedHref(location, sort);
        const isCurrent = sort == currentSort;
        button.classList.toggle(`bg-secondary-background-selected`, isCurrent);
        button.classList.toggle(`!text-neutral-content-strong`, isCurrent);
        const spanContainer = appendElement(button, `span`, [`inline-flex`, `flex-row`, `items-center`, `gap-xs`, `py-[var(--rem10)]`, `leading-5`, `font-14`]);
        let graphic = sortIcons[sort];
        if (graphic != null) {
            let svg = buildSvg(graphic, 16, 16);
            spanContainer.append(svg);
        }
        const spanText = appendElement(spanContainer, `span`);
        spanText.textContent = sort;
    }
    const settingsButtonContainer = appendElement(feedPanelContent, `div`, `pp_feedPanel_settings_container`);
    const settingsButton = appendElement(settingsButtonContainer, `div`, `pp_feedPanel_settings`);
    appendSvg(settingsButton, (settingsGear_default()), 18, 18);
    settingsButton.addEventListener(`click`, event => {
        feedSettingsWindow_feedSettingsWindow.open({ location: location });
    });
}

;// CONCATENATED MODULE: ./src/modules/feed/feed.ts










class FeedData {
}
const defaultSorts = new Map([
    [FeedLocation.Home, FeedSort.Best],
    [FeedLocation.Popular, FeedSort.Best],
    [FeedLocation.All, FeedSort.Hot],
    [FeedLocation.Sub, FeedSort.Best],
    [FeedLocation.Custom, FeedSort.Hot]
]);
const defaultFeedData = new Database(`DEFAULT_FEED_DATA`, {
    factory: function (id) {
        const location = FeedLocation[id];
        const config = redirectConfigs.get(location);
        return { redirect: !config.isOptional, defaultSort: defaultSorts.get(location), hiddenSort: [] };
    }
});
const customFeedData = new Database(`CUSTOM_FEED_DATA`, { factory: DatabaseFactory.Null });
const subsFeedData = new Database(`SUBS_FEED_DATA`, { factory: DatabaseFactory.Null });
const subsLatestSort = new Database(`SUBS_LATEST_SORT`, { factory: DatabaseFactory.Null });
let postObserver = null;
async function renderFeed(container) {
    const main = await dynamicElement(() => container.querySelector(`#subgrid-container`));
    main.querySelectorAll(`shreddit-post`).forEach(post => {
        renderPost(post);
    });
    const initialPostsObserver = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node instanceof HTMLElement && node.matches(`shreddit-post`)) {
                    renderPost(node);
                }
            }
        }
    });
    initialPostsObserver.observe(main, { childList: true, subtree: true });
    setTimeout(() => {
        initialPostsObserver.disconnect();
    }, MAX_LOAD_LAG);
    initializePostObserver(main);
    const location = getFeedLocation();
    switch (location) {
        case FeedLocation.Sub:
            renderSub(main);
            break;
        case FeedLocation.Custom:
            renderCustomFeed(main);
            break;
    }
    renderFeedButtons(main);
}
function initializePostObserver(target) {
    if (postObserver != null) {
        postObserver.disconnect();
    }
    postObserver = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node instanceof HTMLElement) {
                    if (node.matches(`faceplate-batch`)) {
                        node.querySelectorAll(`shreddit-post`).forEach(post => {
                            renderPost(post);
                        });
                    }
                    if (node.matches(`article`)) {
                        renderPost(node.querySelector(`shreddit-post`));
                    }
                }
            }
        }
    });
    postObserver.observe(target, { childList: true, subtree: true });
}
function generateFeedHref(location, sort) {
    const lowerCaseSort = sort.toString().toLowerCase();
    switch (location) {
        case FeedLocation.Sub:
            return `/r/${getCurrentSub()}/${lowerCaseSort}/`;
        case FeedLocation.Home:
            return `/${lowerCaseSort}/?feed=home`;
        case FeedLocation.Popular:
            return `/r/popular/${lowerCaseSort}/`;
        case FeedLocation.All:
            return `/r/all/${lowerCaseSort}/`;
        case FeedLocation.Custom:
            let split = window.location.href.split(`//www.reddit.com`);
            return split.length >= 2 ? `${split[1]}${lowerCaseSort}/` : `/404/`;
        default:
            return `/404/`;
    }
}

;// CONCATENATED MODULE: ./src/_compatibility/migrations.ts



const DATABASE_VERSION = `DATABASE_VERSION`;
class Migration {
    constructor(version, action, previous = null) {
        this.version = version;
        this.action = action;
        this.previous = previous;
    }
    check() {
        const currentVersion = GM_getValue(DATABASE_VERSION, null);
        
        if (currentVersion == null) {
            GM_setValue(DATABASE_VERSION, this.version);
            return;
        }
        if (isLowerVersion(currentVersion, this.version)) {
            this.previous?.check();
            this.action();
            GM_setValue(DATABASE_VERSION, this.version);
            notify(`Reddit++ was upgraded to ${this.version}`);
        }
    }
}

;// CONCATENATED MODULE: ./src/_compatibility/migration_1_0_0.ts

const migration_1_0_0 = new Migration(`1.0.0`, () => {
    const settingsDatabase = GM_getValue(`SETTINGS_DATABASE`, null);
    if (settingsDatabase == null)
        return;
    const bookmarks = settingsDatabase[`savedBookmark`];
    if (bookmarks != undefined) {
        settingsDatabase[`savedBookmarkPosts`] = bookmarks;
        settingsDatabase[`savedBookmarkComments`] = bookmarks;
        delete settingsDatabase[`savedBookmark`];
    }
    const hideUnsaved = settingsDatabase[`savedBookmarkHideUnsaved`];
    if (hideUnsaved != undefined) {
        settingsDatabase[`savedBookmarkPostsShowAlways`] = !hideUnsaved;
        settingsDatabase[`savedBookmarkCommentsShowAlways`] = !hideUnsaved;
        delete settingsDatabase[`savedBookmarkHideUnsaved`];
    }
    GM_setValue(`SETTINGS_DATABASE`, settingsDatabase);
});

;// CONCATENATED MODULE: ./src/_compatibility/migration_1_2_0.ts









const migration_1_2_0 = new Migration(`1.2.0`, () => {
    const settingsDatabase = GM_getValue(`SETTINGS_DATABASE`, null);
    if (settingsDatabase != null) {
        if (settingsDatabase.savedBookmarkPosts != undefined && typeof settingsDatabase.savedBookmarkPosts !== `string`) {
            settingsDatabase.savedBookmarkPosts = (settingsDatabase.savedBookmarkPostsShowAlways == true ? BookmarkMode.Always : settingsDatabase.savedBookmarkPosts == true ? BookmarkMode.WhenUpvoted : BookmarkMode.Disabled).toString();
        }
        delete settingsDatabase.savedBookmarkPostsShowAlways;
        if (settingsDatabase.savedBookmarkComments != undefined && typeof settingsDatabase.savedBookmarkComments !== `string`) {
            settingsDatabase.savedBookmarkComments = (settingsDatabase.savedBookmarkCommentsShowAlways == true ? BookmarkMode.Always : settingsDatabase.savedBookmarkComments == true ? BookmarkMode.WhenUpvoted : BookmarkMode.Disabled).toString();
        }
        delete settingsDatabase.savedBookmarkCommentsShowAlways;
        if (settingsDatabase.redirectSuggestion != undefined || settingsDatabase.redirectForced != undefined) {
            settingsDatabase.redirectMode =
                settingsDatabase.redirectForced == true ? RedirectMode.Forced : settingsDatabase.redirectSuggestion == true ? RedirectMode.Suggestion : RedirectMode.Disabled;
        }
        delete settingsDatabase.redirectSuggestion;
        delete settingsDatabase.redirectForced;
        if (settingsDatabase.collapseAwards != undefined && typeof settingsDatabase.collapseAwards !== `string`) {
            settingsDatabase.collapseAwards = (settingsDatabase.collapseAwardsCompletely == true ? AwardsMode.RemoveCompletely : settingsDatabase.collapseAwards == true ? AwardsMode.WhenUpvoted : AwardsMode.Default).toString();
        }
        delete settingsDatabase.collapseAwardsCompletely;
        if (settingsDatabase.showNames != undefined && typeof settingsDatabase.showNames !== `string`) {
            settingsDatabase.usernameMode = settingsDatabase.showNames == true ? UsernameMode.Nickname : UsernameMode.ProfileName;
            delete settingsDatabase.showNames;
        }
        GM_setValue(`SETTINGS_DATABASE`, settingsDatabase);
        GM_setValue(`SETTINGS_REFRESHED`, Date.now());
    }
    const subSettings = new Database(`SUBS_SETTINGS`);
    subSettings.forEach((key, value) => {
        if (value.defaultFeed != undefined && value.defaultFeed in FeedSort) {
            const currentFeedData = subsFeedData.get(key);
            if (currentFeedData == null) {
                subsFeedData.set(key, {
                    redirect: true,
                    defaultSort: value.defaultFeed,
                    hiddenSort: []
                });
            }
        }
    });
    subSettings.wipe();
}, migration_1_0_0);

;// CONCATENATED MODULE: ./src/_compatibility/latestMigration.ts

const latestMigration = migration_1_2_0;

// EXTERNAL MODULE: ./src/modules/wideMode.less
var wideMode = __webpack_require__("./src/modules/wideMode.less");
;// CONCATENATED MODULE: ./src/modules/rightSidebar.ts
function renderRightSidebar(rightSidebar) {
    rightSidebar.className = `right-sidebar min-w-0 w-[316px] max-w-[316px] hidden s:block styled-scrollbars xs:sticky xs:top-[56px] xs:max-h-[calc(100vh-var(--shreddit-header-height)-1px)] xs:overflow-y-auto xs:overflow-x-hidden pp_rightSidebar pp_defaultText`;
}

;// CONCATENATED MODULE: ./src/modules/wideMode.ts





function safePixels(value) {
    return `${parseInt(value)}px`;
}
function renderWideMode(pageContainer, rightSidebar) {
    if (settings.WIDE_MODE.isDisabled())
        return;
    css.addStyle(wideMode/* default */.A, `wideMode`);
    css.addVar(`--pp-content-width`, safePixels(settings.CONTENT_WIDTH.get()));
    css.addVar(`--pp-content-offset`, safePixels(settings.CONTENT_OFFSET.get()));
    if (rightSidebar.parentNode == pageContainer) {
        return;
    }
    renderRightSidebar(rightSidebar);
    const originContainer = rightSidebar.parentElement;
    let isWideMode = !(window.innerWidth >= 1392);
    const mainContainer = pageContainer.querySelector(`.main-container`);
    mainContainer.className = `main-container gap-lg w-full`;
    observeFor(`WIDEMODE_PAGE`, pageContainer, renderContextPopup, false);
    observeFor(`WIDEMODE_CONTEXT`, originContainer, renderContextPopup, false);
    function renderContextPopup(element) {
        if (element.classList.contains(`rounded-[16px]`)) {
            element.classList.add(`pp_rightSidebar_contextLookup`);
            if (window.innerWidth < 1392 && element.parentNode != rightSidebar.parentNode) {
                rightSidebar.after(element);
            }
        }
        return false;
    }
    refreshAppRender();
    window.addEventListener('resize', event => {
        refreshAppRender();
    });
    function refreshAppRender() {
        if (window.innerWidth >= 1392 && !isWideMode) {
            pageContainer.prepend(rightSidebar);
            isWideMode = true;
        }
        if (window.innerWidth < 1392 && isWideMode) {
            originContainer.append(rightSidebar);
            isWideMode = false;
        }
    }
}

// EXTERNAL MODULE: ./src/modules/app.less
var modules_app = __webpack_require__("./src/modules/app.less");
// EXTERNAL MODULE: ./src/modules/sidebar/sidebar.less
var sidebar = __webpack_require__("./src/modules/sidebar/sidebar.less");
;// CONCATENATED MODULE: ./src/modules/sidebar/sidebarNavigation.ts


var SidebarNavigation;
(function (SidebarNavigation) {
    SidebarNavigation["Home"] = "home";
    SidebarNavigation["Popular"] = "popular";
    SidebarNavigation["Guides"] = "guides";
    SidebarNavigation["Explore"] = "explore";
    SidebarNavigation["All"] = "all";
})(SidebarNavigation || (SidebarNavigation = {}));
let navigations = new Map([
    [SidebarNavigation.Home, `Home`],
    [SidebarNavigation.Popular, `Popular`],
    [SidebarNavigation.Guides, `Answers`],
    [SidebarNavigation.Explore, `Explore`],
    [SidebarNavigation.All, `All`]
]);
async function RenderSidebarNavigations(sidebar) {
    if (sidebar == null) {
        sidebar = document.body.querySelector(`#left-sidebar-container`);
    }
    const section = await dynamicElement(() => sidebar.querySelector(`left-nav-top-section`));
    Object.values(SidebarNavigation).forEach(name => {
        const setting = settings.SIDEBAR_NAV_BUTTON.getChild(PascalCase(name), true);
        section.toggleAttribute(name, setting.isEnabled());
    });
}

;// CONCATENATED MODULE: ./src/modules/sidebar/sidebarSectionRenderer.ts

class SidebarSectionElements {
}
class SidebarSectionRenderer {
    async Render(container, autocollapse, setting) {
        if (checkIsRendered(container))
            return;
        container.classList.add(`pp_sidebar_loadingSection`);
        const section = await this.GetSectionElements(container);
        container.classList.remove(`pp_sidebar_loadingSection`);
        if (setting.isEnabled()) {
            if (autocollapse) {
                const settingCollapsed = setting.getChild(`Collapsed`, false);
                const details = section.container.querySelector(`details`);
                if (settingCollapsed.isEnabled()) {
                    section.container.toggleAttribute(`open`, false);
                    details.classList.add(`pp_sidebar_collapsedSection`);
                }
                section.button.addEventListener(`click`, (e) => {
                    const button = e.currentTarget;
                    setTimeout(() => {
                        const isCollapsed = button.getAttribute(`aria-expanded`) === 'false';
                        settingCollapsed.switch(isCollapsed);
                    }, 10);
                    details.classList.toggle(`pp_sidebar_collapsedSection`, false);
                });
            }
        }
        else {
            section.container.remove();
            section.bottomLine?.remove();
        }
    }
    FindBottomLine(container) {
        let bottomLine = container.nextElementSibling;
        while (bottomLine != null && !bottomLine.matches(`hr`)) {
            bottomLine = bottomLine.nextElementSibling;
        }
        return bottomLine;
    }
}

;// CONCATENATED MODULE: ./src/modules/sidebar/sections/custom.ts


class CustomRenderer extends SidebarSectionRenderer {
    FindContainer(sidebar, element) {
        let container = null;
        sidebar.querySelectorAll(`faceplate-expandable-section-helper`).forEach(helper => {
            const summary = helper.querySelector(`summary[aria-controls="multireddits_section"]`);
            if (summary != null) {
                container = helper;
            }
        });
        return container;
    }
    async GetSectionElements(container) {
        await dynamicElement(() => container.getAttribute(`open`));
        return {
            container: container,
            button: container.querySelector(`summary[aria-controls="multireddits_section"]`),
            bottomLine: this.FindBottomLine(container)
        };
    }
}

;// CONCATENATED MODULE: ./src/modules/sidebar/sections/games.ts


class GamesRenderer extends SidebarSectionRenderer {
    FindContainer(sidebar, element) {
        return sidebar.querySelector(`faceplate-tracker[noun="games_drawer"]`);
    }
    async GetSectionElements(container) {
        await dynamicElement(() => container.querySelector(`games-section-badge-wrapper`));
        return {
            container: container,
            button: container.querySelector(`summary[aria-controls="games_section"]`),
            bottomLine: this.FindBottomLine(container)
        };
    }
}

;// CONCATENATED MODULE: ./src/modules/sidebar/sections/recent.ts



class RecentRenderer extends SidebarSectionRenderer {
    FindContainer(sidebar, element) {
        let container = sidebar.querySelector(`reddit-recent-pages`);
        if (container == null && element.matches(`reddit-recent-pages`)) {
            container = element;
        }
        return container;
    }
    async GetSectionElements(container) {
        const helper = await dynamicElement(() => {
            const _helper = container.shadowRoot?.querySelector(`faceplate-expandable-section-helper`);
            return _helper?.getAttribute(`open`) != null ? _helper : null;
        });
        const button = await dynamicElement(() => helper?.querySelector(`summary`));
        css.registry(container.shadowRoot);
        helper.classList.add(`pp_defaultText`);
        return {
            container: helper,
            button: button,
            bottomLine: container.querySelector(`hr`)
        };
    }
}

;// CONCATENATED MODULE: ./src/modules/sidebar/sections/resources.ts

class ResourcesRenderer extends SidebarSectionRenderer {
    FindContainer(sidebar, element) {
        return sidebar.querySelector(`summary[aria-controls="RESOURCES"]`);
    }
    async GetSectionElements(container) {
        return {
            container: container.parentElement.parentElement,
            button: container,
            bottomLine: null
        };
    }
}

// EXTERNAL MODULE: ./resources/subFilter.svg
var subFilter = __webpack_require__("./resources/subFilter.svg");
var subFilter_default = /*#__PURE__*/__webpack_require__.n(subFilter);
// EXTERNAL MODULE: ./resources/sidebarSubsManager.svg
var sidebarSubsManager = __webpack_require__("./resources/sidebarSubsManager.svg");
var sidebarSubsManager_default = /*#__PURE__*/__webpack_require__.n(sidebarSubsManager);
// EXTERNAL MODULE: ./resources/inputClear.svg
var inputClear = __webpack_require__("./resources/inputClear.svg");
var inputClear_default = /*#__PURE__*/__webpack_require__.n(inputClear);
// EXTERNAL MODULE: ./src/utils/UI/input.less
var input = __webpack_require__("./src/utils/UI/input.less");
;// CONCATENATED MODULE: ./src/utils/UI/input.ts





css.addStyle(input/* default */.A);
function renderUIInput(container, placeholder, value, onChange, params) {
    const { icon, iconConfig, cleanButton, alignCenter, filter } = {
        icon: null,
        iconConfig: { strokeColor: CURRENT_COLOR, fillColor: NONE_COLOR },
        cleanButton: false,
        alignCenter: false,
        filter: (input) => input,
        ...params
    };
    const inputContainer = appendElement(container, `div`, `pp_ui_input_container`);
    const inputButton = appendElement(inputContainer, `div`, [`pp_ui_input_button`, `button`, `button-bordered`]);
    inputButton.setAttribute(`tabindex`, `0`);
    const inputShadowRoot = inputButton.attachShadow({ mode: 'open' });
    css.registry(inputShadowRoot);
    const inputPanel = appendElement(inputButton, `span`, [`pp_ui_input_panel`, `flex`, `items-center`, `justify-center`]);
    inputShadowRoot.appendChild(inputPanel);
    if (icon != null) {
        const inputIconSpan = appendElement(inputPanel, `span`, `pp_ui_input_icon`);
        appendSvg(inputIconSpan, icon, 16, 16, iconConfig);
    }
    const inputSpan = appendElement(inputPanel, `span`, `pp_ui_input_span`);
    if (cleanButton == true) {
        inputSpan.style.marginRight = `22px`;
    }
    const input = appendElement(inputSpan, `input`, `pp_ui_input`);
    input.type = `text`;
    input.placeholder = placeholder;
    if (alignCenter == true) {
        input.style.textAlign = `center`;
    }
    if (value != null && value.length > 0) {
        input.value = value;
    }
    let clearButton = null;
    if (cleanButton == true) {
        const clearContainer = appendElement(inputContainer, `div`, `pp_ui_input_clearContainer`);
        clearButton = appendElement(clearContainer, `button`, [`pp_ui_input_clearButton`, `button-plain`]);
        clearButton.classList.toggle(`pp_hidden`, (input.value?.length ?? 0) == 0);
        const clearIcon = buildSvg((inputClear_default()), 16, 16);
        clearButton.append(clearIcon);
        clearButton.addEventListener(`click`, () => {
            input.value = filter(``);
            onChange(input.value);
            clearButton.classList.toggle(`pp_hidden`, true);
        });
    }
    input.addEventListener(`input`, () => {
        const value = filter(input.value.trim());
        onChange(value);
        if (cleanButton == true) {
            clearButton.classList.toggle(`pp_hidden`, value.length == 0);
        }
    });
    input.addEventListener(`focusout`, () => {
        const value = filter(input.value.trim());
        if (value != input.value) {
            input.value = value;
        }
        if (cleanButton == true) {
            clearButton.classList.toggle(`pp_hidden`, value.length == 0);
        }
    });
    return inputContainer;
}

;// CONCATENATED MODULE: ./src/modules/sidebar/subFilter.ts







let filter = null;
async function renderSubFilter(container) {
    if (checkIsRendered(container, `pp-sub-filter`))
        return;
    if (settings.SUB_FILTER.isDisabled())
        return;
    const manageSubsLink = (await dynamicElement(() => container.querySelector(`.left-nav-manage-communities-link`)));
    if (filter != null) {
        filter.clear();
    }
    else {
        filter = new Map();
    }
    const subsContainer = await dynamicElement(() => container.querySelector(`left-nav-communities-controller`)?.shadowRoot?.querySelector(`.items-container`));
    subsContainer.querySelectorAll(`left-nav-community-item`).forEach(sub => {
        filter.set(sub.getAttribute(`prefixedname`).replace(`r/`, ``).toLowerCase(), sub);
    });
    let initValue = prefs.get(PrefsKey.SUB_FILTER);
    if (initValue == null || initValue instanceof Object) {
        initValue = ``;
    }
    const input = renderUIInput(container, `Filter`, initValue, value => {
        onChangeFilter(value);
    }, {
        icon: (subFilter_default()),
        iconConfig: { strokeColor: NONE_COLOR, fillColor: CURRENT_COLOR },
        cleanButton: true,
        filter: (input) => input.trim()
    });
    manageSubsLink.style.width = `65px`;
    manageSubsLink.style.paddingRight = `10px`;
    const createSubText = await dynamicElement(() => manageSubsLink.querySelector(`.text-body-2`));
    createSubText.remove();
    manageSubsLink.replaceWith(input);
    input.prepend(manageSubsLink);
    const manageSubsLinkIco = manageSubsLink.querySelector(`svg`);
    const manageSubsLinkIcoContainer = manageSubsLink.querySelector(`svg`).parentElement;
    manageSubsLinkIco.remove();
    appendSvg(manageSubsLinkIcoContainer, (sidebarSubsManager_default()), 20, 20);
    const inputButton = input.querySelector(`.pp_ui_input_button`);
    inputButton.addEventListener(`focus`, () => {
        manageSubsLink.style.display = `none`;
    });
    inputButton.addEventListener(`focusout`, () => {
        manageSubsLink.style.display = `block`;
    });
    onChangeFilter(initValue);
}
function onChangeFilter(value) {
    prefs.set(PrefsKey.SUB_FILTER, value);
    filter.forEach((item, sub) => {
        if (sub.includes(value.toLowerCase())) {
            item.style.removeProperty(`display`);
        }
        else {
            item.style.display = `none`;
        }
    });
}

;// CONCATENATED MODULE: ./src/modules/sidebar/sections/subs.ts



class SubsRenderer extends SidebarSectionRenderer {
    FindContainer(sidebar, element) {
        let container = null;
        sidebar.querySelectorAll(`faceplate-expandable-section-helper`).forEach(helper => {
            const summary = helper.querySelector(`summary[aria-controls="communities_section"]`);
            if (summary != null) {
                container = helper;
            }
        });
        return container;
    }
    async GetSectionElements(container) {
        await dynamicElement(() => container.getAttribute(`open`));
        renderSubFilter(container);
        return {
            container: container,
            button: container.querySelector(`summary[aria-controls="communities_section"]`),
            bottomLine: this.FindBottomLine(container)
        };
    }
}

;// CONCATENATED MODULE: ./src/modules/sidebar/sidebarSection.ts






var SidebarSection;
(function (SidebarSection) {
    SidebarSection["Games"] = "Games";
    SidebarSection["Custom"] = "Custom";
    SidebarSection["Recent"] = "Recent";
    SidebarSection["Subs"] = "Subs";
    SidebarSection["Resources"] = "Resources";
})(SidebarSection || (SidebarSection = {}));
const sections = new Map([
    [SidebarSection.Games, { tittle: `Games on reddit`, autocollapse: false, setting: settings.SIDEBAR_GAMES, renderer: new GamesRenderer() }],
    [SidebarSection.Custom, { tittle: `Custom feeds`, autocollapse: true, setting: settings.SIDEBAR_CUSTOMS, renderer: new CustomRenderer() }],
    [SidebarSection.Recent, { tittle: `Recent`, autocollapse: true, setting: settings.SIDEBAR_RECENT, renderer: new RecentRenderer() }],
    [SidebarSection.Subs, { tittle: `Communities`, autocollapse: true, setting: settings.SIDEBAR_SUBS, renderer: new SubsRenderer() }],
    [SidebarSection.Resources, { tittle: `Resources`, autocollapse: true, setting: settings.SIDEBAR_RESOURCES, renderer: new ResourcesRenderer() }]
]);

// EXTERNAL MODULE: ./src/modules/sidebar/sidebarSettingsWindow.less
var sidebarSettingsWindow = __webpack_require__("./src/modules/sidebar/sidebarSettingsWindow.less");
;// CONCATENATED MODULE: ./src/modules/sidebar/sidebarSettingsWindow.ts










css.addStyle(sidebarSettingsWindow/* default */.A);
const sidebarSettingsWindow_sidebarSettingsWindow = new Window('Sidebar settings', renderSettingsWindow, closeSettingsWindow);
const sidebarSettingsWindow_changes = new ChangesObserver();
function renderSettingsWindow(win, context) {
    sidebarSettingsWindow_changes.Reset();
    sidebarSettingsWindow_changes.RenderBanner(win.content);
    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);
    const elements = appendElement(scroll, `div`, `pp_window_elementsContainer`);
    {
        const propertyArea = appendElement(elements, `div`, `pp_window_element`);
        const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
        const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
        tittle.textContent = `Communities filter`;
        propertyArea.classList.add(`pp_settings_property_oneLine`);
        const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);
        const changesSource = sidebarSettingsWindow_changes.CreateSource(settings.SUB_FILTER.isEnabled());
        renderUIToggle(controlArea, settings.SUB_FILTER.isEnabled(), (state) => {
            settings.SUB_FILTER.switch(state);
            changesSource.Capture(settings.SUB_FILTER.isEnabled());
        });
    }
    const subtittleSections = appendElement(elements, `h3`, `pp_settings_subtittle`);
    subtittleSections.textContent = `Sections`;
    sections.forEach((config, section) => {
        const propertyArea = appendElement(elements, `div`, `pp_window_element`);
        const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
        const tittle = appendElement(header, `div`, [`text-12`, `text-secondary-weak`, `tracking-widest`]);
        tittle.textContent = config.tittle.toUpperCase();
        propertyArea.classList.add(`pp_settings_property_oneLine`);
        const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);
        const changesSource = sidebarSettingsWindow_changes.CreateSource(config.setting.isEnabled());
        renderUIToggle(controlArea, config.setting.isEnabled(), (state) => {
            config.setting.switch(state);
            changesSource.Capture(config.setting.isEnabled());
        });
    });
    const subtittleNavigations = appendElement(elements, `h3`, `pp_settings_subtittle`);
    subtittleNavigations.textContent = `Navigation buttons`;
    navigations.forEach((tittleText, navigaton) => {
        const propertyArea = appendElement(elements, `div`, `pp_window_element`);
        const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
        const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
        tittle.textContent = tittleText;
        propertyArea.classList.add(`pp_settings_property_oneLine`);
        const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);
        const navSetting = settings.SIDEBAR_NAV_BUTTON.getChild(PascalCase(navigaton), true);
        const changesSource = sidebarSettingsWindow_changes.CreateSource(navSetting.isEnabled());
        renderUIToggle(controlArea, navSetting.isEnabled(), (state) => {
            navSetting.switch(state);
            changesSource.Capture(navSetting.isEnabled());
        });
    });
}
function closeSettingsWindow() {
    if (sidebarSettingsWindow_changes.HasChanges()) {
        settings.nextRevision();
        window.location.reload();
    }
}

;// CONCATENATED MODULE: ./src/modules/sidebar/sidebar.ts









css.addStyle(sidebar/* default */.A);
async function renderSidebar(sidebar) {
    sidebar.classList.add(`pp_defaultText`);
    RenderSidebarNavigations(sidebar);
    RenderSettingsButton(sidebar);
    const renderedSections = new Map(sections);
    observeFor(`SIDEBAR`, sidebar, (element) => {
        renderedSections.forEach((config, section, map) => {
            const sectionContainer = config.renderer.FindContainer(sidebar, element);
            if (sectionContainer != null) {
                config.renderer.Render(sectionContainer, config.autocollapse, config.setting);
                map.delete(section);
            }
        });
        if (renderedSections.size == 0) {
            return true;
        }
    });
}
async function RenderSettingsButton(sidebar) {
    const flexSidebar = await dynamicElement(() => sidebar.querySelector(`#flex-left-nav-container`));
    const settingsButtonContainer = prependElement(flexSidebar, `div`);
    settingsButtonContainer.setAttribute(`id`, `pp-settings`);
    const settingsButtonTooltip = appendElement(settingsButtonContainer, `rpl-tooltip`);
    settingsButtonTooltip.setAttribute(`placement`, `right`);
    settingsButtonTooltip.setAttribute(`content`, `Reddit++ sidebar settings`);
    settingsButtonTooltip.setAttribute(`appearance`, `inverted`);
    settingsButtonTooltip.style.cssText = `--show-delay: 750ms; --hide-delay: 50ms`;
    const settingsButton = appendElement(settingsButtonTooltip, `button`);
    settingsButton.className = `bg-neutral-background shadow-xs
button-small px-[var(--rem6)]
button-bordered
icon
items-center justify-center
button inline-flex `;
    settingsButton.addEventListener(`click`, () => sidebarSettingsWindow_sidebarSettingsWindow.open());
    const settingsButtonSpan = appendElement(settingsButton, `span`, [`flex`, `items-center`, `justify-center`]);
    const settingsButtonSpanSpan = appendElement(settingsButtonSpan, `span`, `flex`);
    const settingsButtonSvg = appendSvg(settingsButtonSpanSpan, (settingsGear_default()), 16, 16);
}

// EXTERNAL MODULE: ./src/modules/biggerFonts.less
var biggerFonts = __webpack_require__("./src/modules/biggerFonts.less");
;// CONCATENATED MODULE: ./src/modules/biggerFonts.ts



if (settings.BIGGER_FONTS.isEnabled()) {
    css.addStyle(biggerFonts/* default */.A);
}
function renderBiggerFonts() {
    if (settings.BIGGER_FONTS.isEnabled()) {
        css.addVar(`--pp-biggerFonts-Content`, `${settings.BIGGER_FONTS_CONTENT_SIZE.get()}px`);
        css.addVar(`--pp-biggerFonts-Other`, `${settings.BIGGER_FONTS_OTHER_SIZE.get()}px`);
    }
}

// EXTERNAL MODULE: ./src/modules/comments/hideShare.less
var hideShare = __webpack_require__("./src/modules/comments/hideShare.less");
// EXTERNAL MODULE: ./src/modules/comments/comments.less
var comments = __webpack_require__("./src/modules/comments/comments.less");
;// CONCATENATED MODULE: ./src/modules/users/userOperations.ts



class UserOperation {
    getInput(state, accountId) { }
    run(state, userId) {
        let userData = users.get(userId);
        const body = {
            csrf_token: getCookie(`csrf_token`),
            operation: this.key,
            variables: {
                input: this.getInput(state, userData.accountId)
            }
        };
        fetch(`https://www.reddit.com/svc/shreddit/graphql`, {
            method: `post`,
            headers: new Headers({
                Accept: `application/json`,
                'Content-Type': `application/json`
            }),
            body: JSON.stringify(body)
        })
            .then(r => r.json())
            .then(result => {
            if (result != null && result.errors?.message) {
                notify(result.errors.message);
            }
        });
    }
}
class FollowOperation extends UserOperation {
    constructor() {
        super(...arguments);
        this.key = `UpdateProfileFollowState`;
        this.enable = `FOLLOWED`;
        this.disable = `NONE`;
    }
    getInput(state, accountId) {
        return {
            accountId: accountId,
            state: state ? this.enable : this.disable
        };
    }
}
class BlockOperation extends UserOperation {
    constructor() {
        super(...arguments);
        this.key = `UpdateRedditorBlockState`;
        this.enable = `BLOCKED`;
        this.disable = `NONE`;
    }
    getInput(state, accountId) {
        return {
            redditorId: accountId,
            blockState: state ? this.enable : this.disable
        };
    }
}
const FOLLOW_OPERATION = new FollowOperation();
const BLOCK_OPERATION = new BlockOperation();

// EXTERNAL MODULE: ./resources/comments/userTags/followedIcon.svg
var followedIcon = __webpack_require__("./resources/comments/userTags/followedIcon.svg");
var followedIcon_default = /*#__PURE__*/__webpack_require__.n(followedIcon);
// EXTERNAL MODULE: ./resources/comments/userTags/likedIcon.svg
var likedIcon = __webpack_require__("./resources/comments/userTags/likedIcon.svg");
var likedIcon_default = /*#__PURE__*/__webpack_require__.n(likedIcon);
// EXTERNAL MODULE: ./resources/comments/userTags/warningIcon.svg
var warningIcon = __webpack_require__("./resources/comments/userTags/warningIcon.svg");
var warningIcon_default = /*#__PURE__*/__webpack_require__.n(warningIcon);
// EXTERNAL MODULE: ./resources/comments/userTags/blockedIcon.svg
var blockedIcon = __webpack_require__("./resources/comments/userTags/blockedIcon.svg");
var blockedIcon_default = /*#__PURE__*/__webpack_require__.n(blockedIcon);
// EXTERNAL MODULE: ./resources/comments/userTags/followedButton.svg
var followedButton = __webpack_require__("./resources/comments/userTags/followedButton.svg");
var followedButton_default = /*#__PURE__*/__webpack_require__.n(followedButton);
// EXTERNAL MODULE: ./resources/comments/userTags/likedButton.svg
var likedButton = __webpack_require__("./resources/comments/userTags/likedButton.svg");
var likedButton_default = /*#__PURE__*/__webpack_require__.n(likedButton);
// EXTERNAL MODULE: ./resources/comments/userTags/warningButton.svg
var warningButton = __webpack_require__("./resources/comments/userTags/warningButton.svg");
var warningButton_default = /*#__PURE__*/__webpack_require__.n(warningButton);
// EXTERNAL MODULE: ./resources/comments/userTags/blockedButton.svg
var blockedButton = __webpack_require__("./resources/comments/userTags/blockedButton.svg");
var blockedButton_default = /*#__PURE__*/__webpack_require__.n(blockedButton);
// EXTERNAL MODULE: ./src/modules/comments/userTags.less
var userTags = __webpack_require__("./src/modules/comments/userTags.less");
;// CONCATENATED MODULE: ./src/modules/comments/userTags.ts















class UserTag {
}
UserTag.FOLLOWED = `Followed`;
UserTag.LIKED = `Liked`;
UserTag.WARNING = `Warning`;
UserTag.BLOCKED = `Blocked`;
class UserTagConfig {
}
const USERTAG_CONFIGS = new Map([
    [UserTag.FOLLOWED, { priority: 100, addHint: `Follow`, removeHint: `Unfollow`, color: `#0b7ed3`, icon: (followedIcon_default()), button: (followedButton_default()) }],
    [UserTag.LIKED, { priority: 2, addHint: `Tag as liked`, removeHint: `Remove liked tag`, color: `#C95A54`, icon: (likedIcon_default()), button: (likedButton_default()) }],
    [UserTag.WARNING, { priority: 1, addHint: `Tag as warned`, removeHint: `Remove warned tag`, color: `#D4A343`, icon: (warningIcon_default()), button: (warningButton_default()) }],
    [UserTag.BLOCKED, { priority: 0, addHint: `Block`, removeHint: `Unblock`, color: `#663988`, icon: (blockedIcon_default()), button: (blockedButton_default()) }]
]);
class UserTagsData {
}
const tags = new Database(`TAGS`);
async function renderUserTags(comment) {
    if (settings.USER_TAGS.isDisabled())
        return;
    css.addStyle(userTags/* default */.A, `userTags`);
    const userId = comment.getAttribute(`author`);
    if (userId == null)
        return;
    const tagsData = tags.get(userId);
    const tagsContainer = await dynamicElement(() => comment.querySelector(`div[pp-anchor="tags"]`), MAX_LOAD_LAG);
    if (tagsContainer == null) {
        return;
    }
    tagsContainer.parentNode.querySelectorAll(`svg[userTag="true"]`).forEach(tag => {
        tag.remove();
    });
    if (tagsData.tags != undefined) {
        for (const tag of tagsData.tags) {
            renderNextTag(tag);
        }
    }
    function renderNextTag(tag) {
        const config = USERTAG_CONFIGS.get(tag);
        const tagSvg = buildSvg(config.icon, 20, 20);
        tagSvg.setAttribute(`userTag`, `true`);
        tagSvg.setAttribute(`viewBox`, `-4 -4 20 20`);
        tagSvg.style.color = config.color;
        tagsContainer.after(tagSvg);
    }
}

;// CONCATENATED MODULE: ./src/modules/comments/userTagsPanel.ts







class UserTagButtonContext {
}
const BLOCK_COOLDOWN_SECONDS = DAY_SECONDS + 42;
const INACTIVE_COLOR = `#adadad`;
function renderUserTagsPanel(contextMenu, userId) {
    if (settings.USER_TAGS.isDisabled())
        return;
    const tagHintOffset = document.createElement(`div`);
    tagHintOffset.classList.add(`pp_tagHint_offset`);
    contextMenu.prepend(tagHintOffset);
    const tagHintContainer = document.createElement(`div`);
    tagHintContainer.classList.add(`pp_tagHintContainer`);
    tagHintOffset.prepend(tagHintContainer);
    const tagHint = appendElement(tagHintContainer, `div`, `pp_tagHint`);
    tagHint.style.display = `none`;
    const tagsPanel = document.createElement(`div`);
    tagsPanel.classList.add(`pp_tagsPanel`);
    tagHintOffset.after(tagsPanel);
    USERTAG_CONFIGS.forEach((config, userTag) => {
        renderTagButton(config, userTag);
    });
    function renderTagButton(config, userTag) {
        const tagButton = appendElement(tagsPanel, `span`, `pp_tagButton`);
        tagButton.setAttribute(`userTag`, userTag);
        const subscribeIcon = buildSvg(config.button, 20, 20);
        tagButton.appendChild(subscribeIcon);
        const context = { userTag: userTag, userId: userId, button: tagButton, hint: tagHint };
        tagButton.addEventListener(`click`, () => {
            userTagButtonClick(context);
        });
        tagButton.addEventListener(`mouseenter`, () => {
            userTagButtonEnter(context);
        });
        tagButton.addEventListener(`mouseleave`, () => {
            userTagButtonOut(context);
        });
    }
    refreshUserTagsPanel(tagsPanel, userId);
}
function refreshUserTagsPanel(tagsPanel, userId) {
    const tagsData = tags.get(userId);
    const tagsList = tagsData?.tags ?? [];
    tagsPanel.querySelectorAll(`.pp_tagButton`).forEach((button) => {
        const tag = button.getAttribute(`userTag`);
        const config = USERTAG_CONFIGS.get(tag);
        button.removeAttribute(`has-cooldown`);
        button.removeAttribute(`has-blocked`);
        if (tagsList.includes(tag)) {
            button.classList.toggle(`pp_tagButtonActive`, true);
            button.style.backgroundColor = config.color;
            button.style.color = `white`;
        }
        else {
            button.classList.toggle(`pp_tagButtonActive`, false);
            button.style.color = config.color;
            button.style.removeProperty(`background-color`);
            if (tag == UserTag.BLOCKED && tagsData.blockCooldown != undefined && Date.now() / 1000 < tagsData.blockCooldown) {
                button.setAttribute(`has-cooldown`, ``);
                button.style.color = INACTIVE_COLOR;
            }
            if (tag == UserTag.FOLLOWED && tagsList.includes(UserTag.BLOCKED)) {
                button.setAttribute(`has-blocked`, ``);
                button.style.color = INACTIVE_COLOR;
            }
        }
    });
}
function userTagButtonClick(context) {
    if (context.button.getAttribute(`has-cooldown`) != null || context.button.getAttribute(`has-blocked`) != null) {
        notify(`Unable to do this`);
        return;
    }
    let tagsData = tags.get(context.userId);
    if (tagsData.tags == undefined) {
        tagsData.tags = [];
    }
    let isAdded = false;
    if (tagsData.tags.includes(context.userTag)) {
        tagsData.tags = tagsData.tags.filter(t => t != context.userTag);
    }
    else {
        tagsData.tags.push(context.userTag);
        isAdded = true;
        if (context.userTag == UserTag.BLOCKED) {
            tagsData.tags = tagsData.tags.filter(t => t != UserTag.FOLLOWED);
        }
    }
    if (tagsData.tags.length > 1) {
        tagsData.tags.sort((firstItem, secondItem) => USERTAG_CONFIGS.get(firstItem).priority - USERTAG_CONFIGS.get(secondItem).priority);
    }
    tags.set(context.userId, tagsData);
    document.body.querySelectorAll(`shreddit-comment[author="${context.userId}"]`).forEach(comment => {
        renderUserTags(comment);
        if (isAdded && context.userTag == UserTag.BLOCKED) {
            comment.setAttribute(`collapsed`, ``);
        }
    });
    if (context.userTag == UserTag.FOLLOWED) {
        FOLLOW_OPERATION.run(isAdded, context.userId);
    }
    if (context.userTag == UserTag.BLOCKED) {
        if (!isAdded) {
            tagsData.blockCooldown = Date.now() / 1000 + BLOCK_COOLDOWN_SECONDS;
            tags.set(context.userId, tagsData);
        }
        BLOCK_OPERATION.run(isAdded, context.userId);
    }
    refreshUserTagsPanel(context.button.parentElement, context.userId);
}
function userTagButtonEnter(context) {
    context.hint.style.display = null;
    context.hint.dataset.target = context.userTag;
    const tagsData = tags.get(context.userId);
    const config = USERTAG_CONFIGS.get(context.userTag);
    const isActivated = (tagsData?.tags ?? []).includes(context.userTag);
    context.hint.innerText = isActivated ? config.removeHint : config.addHint;
    if (context.button.getAttribute(`has-cooldown`) != null) {
        const cooldownHours = Math.round((tagsData.blockCooldown - Date.now() / 1000) / HOUR_SECONDS);
        context.hint.innerText = `Unable to block for ${cooldownHours}h after unblocking`;
    }
    if (context.button.getAttribute(`has-blocked`) != null) {
        context.hint.innerText = `Unable to follow on blocked user`;
    }
}
function userTagButtonOut(context) {
    if (context.hint.dataset?.target == context.userTag) {
        context.hint.style.display = `none`;
    }
}

// EXTERNAL MODULE: ./resources/comments/shareButton.svg
var shareButton = __webpack_require__("./resources/comments/shareButton.svg");
var shareButton_default = /*#__PURE__*/__webpack_require__.n(shareButton);
;// CONCATENATED MODULE: ./src/modules/comments/contextMenu.ts






function contextMenu_renderContextMenu(comment) {
    let contextMenuButton = comment.querySelector(`shreddit-overflow-menu`).shadowRoot;
    css.registry(contextMenuButton);
    const contextMenu = contextMenuButton.querySelector(`faceplate-menu`);
    const originButton = contextMenu.querySelector(`faceplate-tracker[noun="report"]`);
    if (settings.HIDE_SHARE.isEnabled()) {
        let linkButton = originButton.cloneNode(true);
        linkButton.querySelector(`span .text-14`).textContent = `Copy link`;
        originButton.before(linkButton);
        const originIcon = linkButton.querySelector(`svg`);
        const shareIcon = buildSvg((shareButton_default()), 20, 20);
        originIcon.replaceWith(shareIcon);
        const permalink = comment.getAttribute(`permalink`);
        linkButton.addEventListener(`click`, () => {
            navigator.clipboard.writeText(`https://www.reddit.com${permalink}`);
            notify(`Link copied`);
        });
    }
    renderUserTagsPanel(contextMenu, comment.getAttribute(`author`));
}

// EXTERNAL MODULE: ./src/modules/comments/sortButtons.less
var sortButtons = __webpack_require__("./src/modules/comments/sortButtons.less");
// EXTERNAL MODULE: ./resources/comments/sortButtons/controversial.svg
var controversial = __webpack_require__("./resources/comments/sortButtons/controversial.svg");
var controversial_default = /*#__PURE__*/__webpack_require__.n(controversial);
// EXTERNAL MODULE: ./resources/comments/sortButtons/old.svg
var old = __webpack_require__("./resources/comments/sortButtons/old.svg");
var old_default = /*#__PURE__*/__webpack_require__.n(old);
// EXTERNAL MODULE: ./resources/comments/sortButtons/qa.svg
var qa = __webpack_require__("./resources/comments/sortButtons/qa.svg");
var qa_default = /*#__PURE__*/__webpack_require__.n(qa);
;// CONCATENATED MODULE: ./src/modules/comments/sortButtons.ts















class CommentSort {
}
CommentSort.BEST = `Best`;
CommentSort.TOP = `Top`;
CommentSort.NEW = `New`;
CommentSort.CONTROVERSIAL = `Controversial`;
CommentSort.OLD = `Old`;
CommentSort.QA = `QA`;
class CommentSortConfig {
}
const SORT_SEPARATOR = `sort=`;
function isCurrentSort(href, sort) {
    if (sort === 'confidence' && !href.includes('?')) {
        return true;
    }
    return href.includes(`${SORT_SEPARATOR}${sort}`);
}
const COMMENTS_SORT_CONFIGS = new Map([
    [
        CommentSort.BEST,
        {
            icon: (feedButtonBest_default()),
            href: `confidence`,
            isCurrent: href => isCurrentSort(href, 'confidence')
        }
    ],
    [
        CommentSort.TOP,
        {
            icon: (feedButtonTop_default()),
            href: `top`,
            isCurrent: href => isCurrentSort(href, 'top')
        }
    ],
    [
        CommentSort.NEW,
        {
            icon: (feedButtonNew_default()),
            href: `new`,
            isCurrent: href => isCurrentSort(href, 'new')
        }
    ],
    [
        CommentSort.CONTROVERSIAL,
        {
            icon: (controversial_default()),
            href: `controversial`,
            isCurrent: href => isCurrentSort(href, 'controversial')
        }
    ],
    [
        CommentSort.OLD,
        {
            icon: (old_default()),
            href: `old`,
            isCurrent: href => isCurrentSort(href, 'old')
        }
    ],
    [
        CommentSort.QA,
        {
            icon: (qa_default()),
            href: `qa`,
            isCurrent: href => isCurrentSort(href, 'qa'),
            overrideName: `Q&A`
        }
    ]
]);
let sortButtonsRendered = false;
function getCurrentSort() {
    let currentSort = prefs.get(PrefsKey.COMMENTS_CURRENT_SORT);
    if (currentSort instanceof Object) {
        currentSort = CommentSort.BEST;
    }
    return currentSort;
}
function checkSortCommentsRedirect() {
    if (settings.COMMENTS_REMEMBER_SORT.isEnabled() && window.location.href.includes(`/comments/`)) {
        const config = COMMENTS_SORT_CONFIGS.get(getCurrentSort());
        if (config.isCurrent(window.location.href)) {
            return false;
        }
        let postHref = window.location.href;
        const hasQueryThatIsNotSort = postHref.includes('?') && !postHref.includes(SORT_SEPARATOR);
        if (postHref.includes(SORT_SEPARATOR)) {
            const separatorIndex = postHref.indexOf(SORT_SEPARATOR);
            const newString = postHref.slice(0, separatorIndex - 1);
            postHref = newString;
        }
        window.location.replace(postHref + (hasQueryThatIsNotSort ? '&' : '?') + SORT_SEPARATOR + config.href);
        return true;
    }
    return false;
}
async function renderCommentsSortButtons(container) {
    if (settings.COMMENTS_SORT_BUTTONS.isDisabled())
        return;
    css.addStyle(sortButtons/* default */.A, `sortButtons`);
    sortButtonsRendered = false;
    const sortContainer = await dynamicElement(() => container.querySelector(`comment-body-header`)?.querySelector(`.pdp-comments-tree-sort-container`), MAX_LOAD_LAG);
    if (sortContainer == null)
        return;
    if (checkIsRendered(sortContainer)) {
        return;
    }
    renderSearchComments(container);
    sortContainer.querySelector(`shreddit-sort-dropdown`).classList.add(`pp_sortDropdown_hidden`);
    let currentSort = undefined;
    if (settings.COMMENTS_REMEMBER_SORT.isEnabled()) {
        currentSort = getCurrentSort();
    }
    else {
        COMMENTS_SORT_CONFIGS.forEach((config, sort) => {
            if (config.isCurrent(window.location.href)) {
                currentSort = sort;
            }
        });
    }
    COMMENTS_SORT_CONFIGS.forEach((config, sort) => {
        renderButton(sort, config);
    });
    function renderButton(sort, config) {
        const button = appendElement(sortContainer, `div`, `pp_sortButton`);
        button.classList.toggle(`pp_sortButton_active`, sort == currentSort);
        button.setAttribute(`commentSort`, sort);
        button.addEventListener(`click`, () => {
            switchSort(sort);
        });
        const iconSpan = appendElement(button, `span`);
        const iconSvg = buildSvg(config.icon, 16, 16);
        iconSpan.append(iconSvg);
        const labelSpan = appendElement(button, `span`);
        labelSpan.textContent = config.overrideName != undefined ? config.overrideName : sort;
    }
    sortButtonsRendered = true;
}
async function renderSearchComments(container) {
    const searchSpan = await dynamicElement(() => container.querySelector(`comment-body-header`)?.querySelector(`pdp-comment-search-input`)?.shadowRoot?.querySelector(`.pr-xs`), MAX_LOAD_LAG);
    if (searchSpan == null)
        return;
    searchSpan.textContent = `Search`;
}
let isCommentsSortLocked = false;
function OnCommentsTreeLoaded() {
    isCommentsSortLocked = false;
    if (!sortButtonsRendered) {
        renderCommentsSortButtons(document.body);
    }
}
async function switchSort(sort) {
    if (isCommentsSortLocked) {
        notify(`Unable to switch sort while loading comments`);
        return;
    }
    const sortContainer = await dynamicElement(() => document.body.querySelector(`comment-body-header`)?.querySelector(`.pdp-comments-tree-sort-container`), MAX_LOAD_LAG);
    const config = COMMENTS_SORT_CONFIGS.get(sort);
    const newButton = sortContainer.querySelector(`data[value="${config.href.toUpperCase()}"]`);
    newButton.click();
    prefs.set(PrefsKey.COMMENTS_CURRENT_SORT, sort);
    isCommentsSortLocked = true;
    const awaitRefreshId = setInterval(() => {
        if (config.isCurrent(window.location.href)) {
            clearInterval(awaitRefreshId);
            COMMENTS_SORT_CONFIGS.forEach((refreshConfig, refreshSort) => {
                const button = sortContainer.querySelector(`div[commentSort="${refreshSort}"]`);
                button.classList.toggle(`pp_sortButton_active`, refreshSort == sort);
            });
        }
    }, 20);
}

;// CONCATENATED MODULE: ./src/modules/comments/moreReplies.ts




function renderMoreReplies(comment) {
    if (settings.UNWRAP_MORE_REPLIES.isDisabled())
        return;
    if (comment.getAttribute(`collapsed`) != null)
        return;
    for (const moreReplies of comment.childNodes) {
        if (moreReplies instanceof HTMLElement) {
            if (moreReplies.matches(`faceplate-partial`) && moreReplies.getAttribute(`src`)?.includes(`/more-comments/`) && !checkIsRendered(moreReplies)) {
                
                moreReplies.click();
                let refreshTicks = 0;
                const refreshAwaiter = setInterval(() => {
                    refreshTicks++;
                    if (moreReplies.parentNode == null) {
                        clearInterval(refreshAwaiter);
                        setTimeout(() => {
                            renderMoreReplies(comment);
                        }, 50);
                        return;
                    }
                    if (refreshTicks > 60) {
                        clearInterval(refreshAwaiter);
                        pp_log(`Unable load more replies`);
                        
                    }
                }, 100);
            }
            if (moreReplies.matches(`a`) && moreReplies.getAttribute(`slot`) == `more-comments-permalink`) {
                moreReplies.querySelector(`.text-secondary-weak`).textContent = `More replies in single thread`;
            }
        }
    }
}

;// CONCATENATED MODULE: ./src/modules/comments/comments.ts
















let rootIntersector = null;
let commentsIntersector = null;
let commentsMutations = null;
async function renderComments(container) {
    css.addStyle(comments/* default */.A, `comments`);
    if (settings.HIDE_SHARE.isEnabled()) {
        css.addStyle(hideShare/* default */.A, `hideShare`);
    }
    if (rootIntersector != null) {
        rootIntersector.disconnect();
        
    }
    else {
        rootIntersector = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    renderComment(entry.target.parentElement);
                    registryAllComments(entry.target.parentElement);
                    
                    rootIntersector.unobserve(entry.target);
                }
            }
        }, { threshold: 0.05 });
    }
    if (commentsIntersector != null) {
        commentsIntersector.disconnect();
        
    }
    else {
        commentsIntersector = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    renderComment(entry.target.parentElement);
                    
                    commentsIntersector.unobserve(entry.target);
                }
            }
        }, { threshold: 0.05 });
    }
    if (commentsMutations != null) {
        commentsMutations.disconnect();
    }
    else {
        commentsMutations = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node instanceof HTMLElement) {
                        const commentTree = node.parentElement?.querySelector(`shreddit-comment-tree`);
                        if (commentTree != null) {
                            registryAllRoots(commentTree);
                            OnCommentsTreeLoaded();
                        }
                        if (node.matches(`shreddit-comment`)) {
                            if (node.getAttribute(`depth`) == `0`) {
                                registryRoot(node);
                            }
                            else {
                                registryComment(node);
                                registryAllComments(node);
                            }
                        }
                        if (settings.HIDE_RELATED_POSTS.isEnabled() && node.matches(`h2`) && node.textContent.includes(`Related posts`)) {
                            const relatedHeader = node;
                            const relatedPosts = relatedHeader.nextSibling;
                            relatedHeader.remove();
                            relatedPosts.remove();
                        }
                    }
                }
            }
        });
    }
    commentsMutations.observe(container, { childList: true, subtree: true });
    renderCommentsSortButtons(container);
}
function registryAllRoots(container) {
    container.querySelectorAll(`shreddit-comment[depth="0"]`).forEach(comment => {
        registryRoot(comment);
    });
}
function registryRoot(comment) {
    if (checkIsRendered(comment))
        return;
    rootIntersector.observe(comment.querySelector(`div[slot="commentMeta"]`));
    
}
function registryAllComments(container) {
    container.querySelectorAll(`shreddit-comment`).forEach(comment => {
        registryComment(comment);
    });
}
function registryComment(comment) {
    if (checkIsRendered(comment))
        return;
    commentsIntersector.observe(comment.querySelector(`div[slot="commentMeta"]`));
    
}
async function renderComment(comment) {
    const commentBody = comment.querySelector(`div[slot="comment"]`);
    
    filterComment(comment, commentBody);
    if (settings.COLLAPSE_AUTOMODERATOR.isEnabled()) {
        const author = comment.getAttribute(`author`);
        if (author != null && author == `AutoModerator`) {
            comment.setAttribute(`collapsed`, ``);
            return;
        }
        const isMod = comment.querySelector(`div[slot="commentMeta"]`)?.querySelector(`shreddit-comment-author-modifier-icon[distinguished-as="MODERATOR"]`) != null;
        const isPinned = comment.querySelector(`shreddit-comment-badges`)?.shadowRoot?.querySelector(`svg[icon-name="pin-fill"]`) != null;
        if (isMod && isPinned) {
            comment.setAttribute(`collapsed`, ``);
            return;
        }
    }
    setTimeout(() => {
        renderMoreReplies(comment);
    }, 150);
    const nickname = comment.querySelector(`div[slot="commentMeta"]`).querySelector(`faceplate-tracker[noun="comment_author"]`)?.parentElement?.parentElement;
    if (nickname == null)
        return;
    const tagsAnchor = document.createElement(`div`);
    tagsAnchor.setAttribute(`pp-anchor`, `tags`);
    const OPTag = nickname.parentElement.querySelector(`.ml-2xs`);
    if (OPTag != null) {
        OPTag.after(tagsAnchor);
    }
    else {
        nickname.after(tagsAnchor);
    }
    const time = await dynamicElement(() => nickname.parentElement.querySelector(`time`)?.parentElement, MAX_LOAD_LAG);
    const infoAnchor = document.createElement(`div`);
    infoAnchor.setAttribute(`pp-anchor`, `info`);
    time?.before(infoAnchor);
    if (settings.GHOSTED_COMMENTS.isEnabled() && parseInt(comment.getAttribute(`score`)) < 0) {
        comment.querySelector(`div[slot="commentAvatar"]`).classList.add(`pp_muted_avatar`);
        comment.querySelector(`faceplate-tracker[noun="comment_author"]`).querySelector(`a`).style.color = `#a5a5a5`;
        commentBody.classList.add(`pp_muted_content`);
    }
    const imageContainer = commentBody.querySelector(`figure[class="rte-media"]`);
    if (imageContainer != null && settings.IMAGE_VIEWER.isEnabled()) {
        const imageAnchor = imageContainer.querySelector(`a`);
        const href = imageAnchor.getAttribute(`href`);
        imageAnchor.removeAttribute(`href`);
        let image = imageContainer.querySelector(`img`);
        if (image == null) {
            image = imageContainer.querySelector(`shreddit-player-2`);
        }
        image.classList.add(`pp_imageViewable`);
        imageAnchor.addEventListener(`click`, () => {
            imageViewer_imageViewer.open(href);
        });
    }
    renderCollapseAward(comment, ContentType.Comment);
    renderUserTags(comment);
    const userId = comment.getAttribute(`author`);
    const userName = comment.querySelector(`faceplate-tracker[noun="comment_author"]`).querySelector(`a`);
    renderUserInfo(userId, userName, tagsAnchor, infoAnchor, ContentType.Comment);
    const contextMenuButton = await dynamicElement(() => comment.querySelector(`shreddit-overflow-menu`)?.shadowRoot?.querySelector(`rpl-dropdown`));
    renderCommentBookmark(comment);
    contextMenuButton.addEventListener(`click`, () => {
        contextMenu_renderContextMenu(comment);
    }, { once: true });
}

;// CONCATENATED MODULE: ./src/modules/users/userPage.ts



async function renderUserPage(container) {
    const feed = await dynamicElement(() => container.querySelector(`#subgrid-container`)?.querySelector(`shreddit-feed`));
    feed.querySelectorAll(`shreddit-post`).forEach(post => {
        renderPost(post);
    });
    initializePostObserver(feed);
}

;// CONCATENATED MODULE: ./src/modules/app.ts












async function renderApp() {
    css.addStyle(modules_app/* default */.A, `app`);
    const app = await dynamicElement(() => document.body.querySelector(`shreddit-app`)?.querySelector(`.grid-container`));
    if (checkIsRendered(app))
        return;
    clearHiddenContentButton();
    closeAllWindows();
    if (window.location.href.includes(`/user/`) && !window.location.href.includes(`/m/`)) {
        renderUserPage(document.body);
    }
    else {
        renderFeed(document.body);
    }
    renderComments(document.body);
    const leftSidebar = await dynamicElement(() => document.body.querySelector(`#left-sidebar-container`), 3000);
    renderSidebar(leftSidebar);
    const pageContainer = leftSidebar.parentElement;
    pageContainer.classList.add(`pp_pageContainer`);
    const mainFeed = pageContainer.querySelector(`.subgrid-container`);
    mainFeed.classList.add(`pp_mainFeed`);
    const rightSidebar = await dynamicElement(() => document.body.querySelector(`#right-sidebar-container`));
    renderRightSidebar(rightSidebar);
    renderWideMode(pageContainer, rightSidebar);
    renderBiggerFonts();
}

// EXTERNAL MODULE: ./src/modules/header.less
var header = __webpack_require__("./src/modules/header.less");
// EXTERNAL MODULE: ./src/modules/notifications.less
var notifications = __webpack_require__("./src/modules/notifications.less");
;// CONCATENATED MODULE: ./src/modules/notifications.ts




if (settings.NOTIFY_POPUP.isEnabled()) {
    css.addStyle(notifications/* default */.A);
}
function renderNotifications(container) {
    container.querySelectorAll(`div[data-testid="notification-item"]`).forEach(item => {
        const tittle = item.querySelector(`div[data-testid="title"]`);
        const author = item.querySelector(`.text-secondary-plain`);
        if (author.textContent.includes(`replied`)) {
            author.textContent = author.textContent.split(`replied`)[0];
            const subTittle = document.createElement(`div`);
            tittle.after(subTittle);
            const subTittleContent = appendElement(subTittle, `span`, [`text-secondary-weak`, `font-normal`]);
            let sub = item.parentElement.getAttribute(`href`);
            sub = sub.replace(`https://reddit.com/r/`, ``);
            sub = sub.split(`/`)[0];
            subTittleContent.textContent = `replied in r/${sub}`;
        }
        const time = item.querySelector(`faceplate-number`);
        if (time != null) {
            const spanAgo = document.createElement(`span`);
            spanAgo.textContent = ` ago`;
            time.after(spanAgo);
        }
    });
}

// EXTERNAL MODULE: ./resources/settingsButton.svg
var settingsButton = __webpack_require__("./resources/settingsButton.svg");
var settingsButton_default = /*#__PURE__*/__webpack_require__.n(settingsButton);
// EXTERNAL MODULE: ./resources/dragAnchor.svg
var dragAnchor = __webpack_require__("./resources/dragAnchor.svg");
var dragAnchor_default = /*#__PURE__*/__webpack_require__.n(dragAnchor);
// EXTERNAL MODULE: ./resources/deleteButton.svg
var resources_deleteButton = __webpack_require__("./resources/deleteButton.svg");
var deleteButton_default = /*#__PURE__*/__webpack_require__.n(resources_deleteButton);
// EXTERNAL MODULE: ./resources/contentFilter.svg
var contentFilter = __webpack_require__("./resources/contentFilter.svg");
var contentFilter_default = /*#__PURE__*/__webpack_require__.n(contentFilter);
// EXTERNAL MODULE: ./src/modules/filters/filtersWindow.less
var filtersWindow = __webpack_require__("./src/modules/filters/filtersWindow.less");
;// CONCATENATED MODULE: ./src/modules/filters/filtersWindow.ts













const filtersWindow_filtersWindow = new Window('Content filters', filtersWindow_renderFiltersWindow, onClose);
css.addStyle(filtersWindow/* default */.A);
function filtersWindow_renderFiltersWindow(win, context) {
    win.container.style.zIndex = `11`;
    cleanupBlankFilters();
    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);
    const elements = appendElement(scroll, `ul`, `pp_filter_list`);
    let filters = prefs.get(PrefsKey.CONTENT_FILTERS);
    if (!Array.isArray(filters)) {
        filters = [];
    }
    for (const filter of filters) {
        addFilter(filter);
    }
    addAddButton();
    let draggedFilter = null;
    elements.addEventListener(`dragstart`, e => {
        const target = e.target;
        if (target.matches(`li`)) {
            draggedFilter = target;
            draggedFilter.classList.toggle(`pp_filter_dragged`, true);
            e.dataTransfer.effectAllowed = `move`;
        }
    });
    elements.addEventListener(`dragenter`, e => {
        const targetFilter = getFilterRoot(e.target);
        if (targetFilter != null && targetFilter != draggedFilter) {
            e.preventDefault();
        }
    });
    elements.addEventListener(`dragend`, e => {
        draggedFilter.classList.toggle(`pp_filter_dragged`, false);
        draggedFilter = null;
    });
    elements.addEventListener(`dragover`, e => {
        const targetFilter = getFilterRoot(e.target);
        if (targetFilter != null && targetFilter != draggedFilter) {
            e.preventDefault();
        }
    });
    elements.addEventListener(`drop`, e => {
        e.preventDefault();
        const targetFilter = getFilterRoot(e.target);
        if (targetFilter == null)
            return;
        const fromIndex = parseInt(draggedFilter.getAttribute(`index`));
        const toIndex = parseInt(targetFilter.getAttribute(`index`));
        const movedFilter = filters[fromIndex];
        filters.splice(fromIndex, 1);
        filters.splice(toIndex, 0, movedFilter);
        save();
        if (fromIndex > toIndex) {
            targetFilter.before(draggedFilter);
        }
        else {
            targetFilter.after(draggedFilter);
        }
        let currentFilter = elements.firstElementChild;
        let currentIndex = 0;
        while (currentFilter.hasAttribute(`filter`)) {
            currentFilter.setAttribute(`index`, currentIndex.toString());
            currentIndex++;
            currentFilter = currentFilter.nextElementSibling;
        }
    });
    function getFilterRoot(element) {
        let current = element;
        while (!current.hasAttribute(`filter`) && current.parentElement != null) {
            current = current.parentElement;
        }
        return current.hasAttribute(`filter`) ? current : null;
    }
    function addFilter(filter, addButton = null) {
        const filterArea = appendElement(elements, `li`, `pp_filter_element`);
        filterArea.style.borderColor = borderColor(filter.color);
        filterArea.toggleAttribute(`filter`, true);
        filterArea.setAttribute(`index`, filters.findIndex(f => f == filter).toString());
        if (addButton != null) {
            addButton.before(filterArea);
        }
        const filterPanel = appendElement(filterArea, `div`);
        const dragButton = appendElement(filterPanel, `div`, `pp_filter_element_dragAnchor`);
        const dragButtonSvg = buildSvg((dragAnchor_default()), 16, 16, { strokeColor: NONE_COLOR, fillColor: CURRENT_COLOR });
        dragButton.append(dragButtonSvg);
        dragButton.addEventListener(`mousedown`, () => {
            filterArea.setAttribute(`draggable`, `true`);
        });
        dragButton.addEventListener(`mouseenter`, () => {
            filterArea.setAttribute(`draggable`, `true`);
        });
        dragButton.addEventListener(`mouseleave`, () => {
            filterArea.setAttribute(`draggable`, `false`);
        });
        const inputContainer = renderUIInput(filterPanel, `Regular expression`, filter.expression, value => {
            filter.expression = value;
            save();
        }, { icon: (contentFilter_default()) });
        const colorPickerContainer = appendElement(filterPanel, `div`, `pp_filter_element_colorPicker`);
        const colorPicker = appendElement(colorPickerContainer, `input`);
        colorPicker.setAttribute(`type`, `color`);
        colorPicker.setAttribute(`value`, filter.color);
        colorPicker.addEventListener(`input`, onColorChange);
        colorPicker.addEventListener(`change`, onColorChange);
        function onColorChange(event) {
            filter.color = event.target.value;
            filterArea.style.borderColor = borderColor(filter.color);
            save();
        }
        function borderColor(input) {
            return filter.posts || filter.comments ? input : `${input}4f`;
        }
        const togglesContainer = appendElement(filterPanel, `div`, `pp_filter_element_toggles`);
        const postsContainer = appendElement(togglesContainer, `div`);
        const postsTittle = appendElement(postsContainer, `span`, [`text-secondary`, `font-normal`]);
        postsTittle.textContent = `Posts:`;
        renderUIToggle(postsContainer, filter.posts, state => {
            filter.posts = state;
            filterArea.style.borderColor = borderColor(filter.color);
            save();
        });
        const commentsContainer = appendElement(togglesContainer, `div`);
        const commentsTittle = appendElement(commentsContainer, `span`, [`text-secondary`, `font-normal`]);
        commentsTittle.textContent = `Comments:`;
        renderUIToggle(commentsContainer, filter.comments, state => {
            filter.comments = state;
            filterArea.style.borderColor = borderColor(filter.color);
            save();
        });
        const actionOptions = renderUIOptions(filterPanel, filter.action, filterActions, index => {
            filter.action = index;
            let color = null;
            switch (filter.action) {
                case FilterAction.Hide:
                    color = `#6A51D9`;
                    break;
                case FilterAction.Blur:
                    color = `#5BB3D9`;
                    break;
                case FilterAction.Hightlight:
                    color = `#74CB39`;
                    break;
            }
            if (color != null && (filter.color == `#6A51D9` || filter.color == `#5BB3D9` || filter.color == `#74CB39`)) {
                filter.color = color;
                filterArea.style.borderColor = borderColor(color);
                colorPicker.setAttribute(`value`, color);
            }
            save();
        });
        const inputButton = inputContainer.querySelector(`.pp_ui_input_button`);
        inputButton.addEventListener(`focus`, () => {
            colorPickerContainer.classList.toggle(`pp_hidden`, true);
            togglesContainer.classList.toggle(`pp_hidden`, true);
            actionOptions.classList.toggle(`pp_hidden`, true);
        });
        inputButton.addEventListener(`focusout`, () => {
            colorPickerContainer.classList.toggle(`pp_hidden`, false);
            togglesContainer.classList.toggle(`pp_hidden`, false);
            actionOptions.classList.toggle(`pp_hidden`, false);
        });
        const deleteSpan = appendElement(filterPanel, `span`);
        const deleteButton = appendElement(deleteSpan, `div`, [`pp_ui_options_arrow`, `button`, `button-plain`, `button-medium`, `px-[var(--rem8)]`]);
        const deleteButtonSvg = buildSvg((deleteButton_default()), 24, 24, { strokeColor: NONE_COLOR, fillColor: CURRENT_COLOR });
        deleteButton.append(deleteButtonSvg);
        deleteButton.addEventListener(`click`, () => {
            filters.splice(filters.findIndex(f => f == filter), 1);
            save();
            filterArea.remove();
        });
    }
    function addAddButton() {
        const buttonArea = appendElement(elements, `div`, [`pp_filter_addButton`, `button`, `button-primary`, `inline-flex`, `items-center`, `justify-center`]);
        const buttonSpan = appendElement(buttonArea, `span`, [`flex`, `items-center`, `justify-center`]);
        const buttonText = appendElement(buttonSpan, `span`, [`flex`, `items-center`, `gap-xs`]);
        buttonText.textContent = `Add a filter`;
        buttonArea.addEventListener(`click`, () => {
            const newFilter = new FilterData();
            newFilter.expression = ``;
            newFilter.color = `#6A51D9`;
            newFilter.posts = true;
            newFilter.comments = true;
            newFilter.action = FilterAction.Hide;
            filters.push(newFilter);
            addFilter(newFilter, buttonArea);
            save();
            scroll.scrollBy(0, 200);
        });
    }
    function save() {
        prefs.set(PrefsKey.CONTENT_FILTERS, filters);
    }
}
function onClose() {
    cleanupBlankFilters();
}
function cleanupBlankFilters() {
    let filters = prefs.get(PrefsKey.CONTENT_FILTERS);
    if (!Array.isArray(filters)) {
        filters = [];
    }
    filters = filters.filter(f => f != null && f.expression != null && f.expression.length > 0);
    prefs.set(PrefsKey.CONTENT_FILTERS, filters);
}

// EXTERNAL MODULE: ./src/modules/settings/settingsWindow.less
var settingsWindow = __webpack_require__("./src/modules/settings/settingsWindow.less");
// EXTERNAL MODULE: ./resources/showIco.svg
var showIco = __webpack_require__("./resources/showIco.svg");
var showIco_default = /*#__PURE__*/__webpack_require__.n(showIco);
// EXTERNAL MODULE: ./src/modules/profileMenu/profileMenuWindow.less
var profileMenuWindow = __webpack_require__("./src/modules/profileMenu/profileMenuWindow.less");
;// CONCATENATED MODULE: ./src/modules/profileMenu/profileMenuWindow.ts











css.addStyle(profileMenuWindow/* default */.A);
const profileMenuWindow_profileMenuWindow = new Window('Profile menu elements', renderProfileMenuWindow, profileMenuWindow_onClose);
const DRAG_TAG = `profileMenuElement`;
function renderProfileMenuWindow(win, context) {
    win.container.style.zIndex = `11`;
    cleanupElements();
    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);
    const elements = appendElement(scroll, `ul`, `pp_filter_list`);
    let menuElements = prefs.get(PrefsKey.PROFILE_MENU_ELEMENTS);
    if (!Array.isArray(menuElements)) {
        menuElements = generateDefaultLayout();
    }
    for (const element of menuElements) {
        addElement(element);
    }
    addSeparatorButton();
    let draggedMenuElement = null;
    elements.addEventListener(`dragstart`, e => {
        const target = e.target;
        if (target.matches(`li`)) {
            draggedMenuElement = target;
            draggedMenuElement.classList.toggle(`pp_filter_dragged`, true);
            e.dataTransfer.effectAllowed = `move`;
        }
    });
    elements.addEventListener(`dragenter`, e => {
        const targetMenuElement = getMenuElementRoot(e.target);
        if (targetMenuElement != null && targetMenuElement != draggedMenuElement) {
            e.preventDefault();
        }
    });
    elements.addEventListener(`dragend`, e => {
        draggedMenuElement.classList.toggle(`pp_filter_dragged`, false);
        draggedMenuElement = null;
    });
    elements.addEventListener(`dragover`, e => {
        const targetFilter = getMenuElementRoot(e.target);
        if (targetFilter != null && targetFilter != draggedMenuElement) {
            e.preventDefault();
        }
    });
    elements.addEventListener(`drop`, e => {
        e.preventDefault();
        const targetMenuElement = getMenuElementRoot(e.target);
        if (targetMenuElement == null)
            return;
        const fromIndex = parseInt(draggedMenuElement.getAttribute(`index`));
        const toIndex = parseInt(targetMenuElement.getAttribute(`index`));
        const movedFilter = menuElements[fromIndex];
        menuElements.splice(fromIndex, 1);
        menuElements.splice(toIndex, 0, movedFilter);
        save();
        if (fromIndex > toIndex) {
            targetMenuElement.before(draggedMenuElement);
        }
        else {
            targetMenuElement.after(draggedMenuElement);
        }
        let currentMenuElement = elements.firstElementChild;
        let currentIndex = 0;
        while (currentMenuElement.hasAttribute(DRAG_TAG)) {
            currentMenuElement.setAttribute(`index`, currentIndex.toString());
            currentIndex++;
            currentMenuElement = currentMenuElement.nextElementSibling;
        }
    });
    function getMenuElementRoot(element) {
        let current = element;
        while (!current.hasAttribute(DRAG_TAG) && current.parentElement != null) {
            current = current.parentElement;
        }
        return current.hasAttribute(DRAG_TAG) ? current : null;
    }
    function addElement(elementData, addButton = null) {
        const elementArea = appendElement(elements, `li`, `pp_filter_element`);
        elementArea.style.borderColor = borderColor();
        elementArea.toggleAttribute(DRAG_TAG, true);
        elementArea.setAttribute(`index`, menuElements.findIndex(f => f == elementData).toString());
        if (addButton != null) {
            addButton.before(elementArea);
        }
        const elementPanel = appendElement(elementArea, `div`);
        const dragButton = appendElement(elementPanel, `div`, `pp_filter_element_dragAnchor`);
        const dragButtonSvg = buildSvg((dragAnchor_default()), 16, 16, { strokeColor: NONE_COLOR, fillColor: CURRENT_COLOR });
        dragButton.append(dragButtonSvg);
        dragButton.addEventListener(`mousedown`, () => {
            elementArea.setAttribute(`draggable`, `true`);
        });
        dragButton.addEventListener(`mouseenter`, () => {
            elementArea.setAttribute(`draggable`, `true`);
        });
        dragButton.addEventListener(`mouseleave`, () => {
            elementArea.setAttribute(`draggable`, `false`);
        });
        const tittleContainer = appendElement(elementPanel, `div`, `pp_profileMenuElement_tittleContainer`);
        if (elementData.element == ProfileMenuElement.Separator) {
            appendElement(tittleContainer, `hr`);
        }
        else {
            const elementTittle = appendElement(tittleContainer, `span`);
            elementTittle.textContent = profileMenuElementConfigs.get(elementData.element).tittle;
        }
        function borderColor() {
            return elementData.hidden ? `#bdbdbd` : `#00adff`;
        }
        const isDeletable = elementData.element == ProfileMenuElement.Separator;
        const isOptional = isDeletable || profileMenuElementConfigs.get(elementData.element).isOptional;
        if (isOptional) {
            const deleteSpan = appendElement(elementPanel, `span`);
            const deleteButton = appendElement(deleteSpan, `div`, [`pp_ui_options_arrow`, `button`, `button-plain`, `button-medium`, `px-[var(--rem8)]`]);
            let deleteButtonIcon = null;
            if (isDeletable) {
                deleteButtonIcon = appendSvg(deleteButton, (deleteButton_default()), 24, 24, { strokeColor: NONE_COLOR, fillColor: CURRENT_COLOR });
            }
            else {
                deleteButtonIcon = appendSvg(deleteButton, elementData.hidden ? (hiddenIco_default()) : (showIco_default()), 18, 18, { strokeColor: CURRENT_COLOR, fillColor: NONE_COLOR });
            }
            deleteButton.addEventListener(`click`, () => {
                if (isDeletable) {
                    menuElements.splice(menuElements.findIndex(f => f == elementData), 1);
                    elementArea.remove();
                }
                else {
                    elementData.hidden = !elementData.hidden;
                    elementArea.style.borderColor = borderColor();
                    deleteButtonIcon.remove();
                    deleteButtonIcon = appendSvg(deleteButton, elementData.hidden ? (hiddenIco_default()) : (showIco_default()), 18, 18, { strokeColor: CURRENT_COLOR, fillColor: NONE_COLOR });
                }
                save();
            });
        }
    }
    function addSeparatorButton() {
        const buttonArea = appendElement(elements, `div`, [`pp_filter_addButton`, `button`, `button-primary`, `inline-flex`, `items-center`, `justify-center`]);
        const buttonSpan = appendElement(buttonArea, `span`, [`flex`, `items-center`, `justify-center`]);
        const buttonText = appendElement(buttonSpan, `span`, [`flex`, `items-center`, `gap-xs`]);
        buttonText.textContent = `Add a separator`;
        buttonArea.addEventListener(`click`, () => {
            const newFilter = {};
            newFilter.element = ProfileMenuElement.Separator;
            newFilter.hidden = false;
            menuElements.push(newFilter);
            addElement(newFilter, buttonArea);
            save();
            scroll.scrollBy(0, 200);
        });
    }
    function save() {
        prefs.set(PrefsKey.PROFILE_MENU_ELEMENTS, menuElements);
    }
}
function profileMenuWindow_onClose() {
    cleanupElements();
    renderProfileMenu();
}
function cleanupElements() {
    let menuElements = prefs.get(PrefsKey.PROFILE_MENU_ELEMENTS);
    if (!Array.isArray(menuElements)) {
        menuElements = generateDefaultLayout();
    }
    let lastIndex = menuElements.length - 1;
    while (lastIndex >= 0 && menuElements[lastIndex].element == ProfileMenuElement.Separator) {
        menuElements.splice(lastIndex, 1);
        lastIndex--;
    }
    while (menuElements[0].element == ProfileMenuElement.Separator) {
        menuElements.splice(0, 1);
    }
    let index = 0;
    while (index < menuElements.length - 1) {
        while (menuElements[index].element == ProfileMenuElement.Separator && menuElements[index + 1].element == ProfileMenuElement.Separator) {
            menuElements.splice(index + 1, 1);
        }
        index++;
    }
    prefs.set(PrefsKey.PROFILE_MENU_ELEMENTS, menuElements);
}

;// CONCATENATED MODULE: ./src/modules/settings/settingsWindow.ts













css.addStyle(settingsWindow/* default */.A);
const settingsWindow_settingsWindow = new Window('Reddit++ Settings', settingsWindow_renderSettingsWindow, settingsWindow_closeSettingsWindow);
class SettingBadge {
}
SettingBadge.APIRequests = { text: `API requests`, color: `var(--shreddit-color-wordmark)`, link: `https://github.com/lnm95/redditPlusPlus/blob/main/redditAPI.md` };
SettingBadge.New = { text: `New`, color: `#2C96C4`, link: `https://greasyfork.org/en/scripts/490046-reddit/versions` };
let settingsWindow_changes = new ChangesObserver();
function settingsWindow_renderSettingsWindow(win, context) {
    document.body.click();
    settingsWindow_changes.Reset();
    settingsWindow_changes.RenderBanner(win.content);
    const scroll = appendElement(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);
    const elements = appendElement(scroll, `div`, `pp_window_elementsContainer`);
    addSettingString(`App name`, `Without authorization API requests will be limited by 100 per 10 minutes`, `Unauthorized`, settings.API_APP, [SettingBadge.APIRequests]);
    addSettingToggle(`Show the requests limit warnings`, null, settings.API_WARNINGS, [SettingBadge.APIRequests]);
    addSubtittle(`Common`);
    addSettingToggle(`Wide mode`, `Make focus on the content by replacing the right sidebar to screen border`, settings.WIDE_MODE);
    addSettingString(`Content width`, `Width of the feed and comments in pixels`, settings.CONTENT_WIDTH.defaultValue, settings.CONTENT_WIDTH);
    addSettingString(`Content offset`, `Offset of the feed and comments in pixels`, settings.CONTENT_OFFSET.defaultValue, settings.CONTENT_OFFSET);
    addSettingToggle(`Custom fonts`, `Adjust font sizes for better readability`, settings.BIGGER_FONTS);
    addSettingString(`Content font size`, `Comment and post text. Default (reddit): 14px`, settings.BIGGER_FONTS_CONTENT_SIZE.defaultValue, settings.BIGGER_FONTS_CONTENT_SIZE);
    addSettingString(`UI element font size`, `Headings, ratings, and buttons next to content. Default (reddit): 12px`, settings.BIGGER_FONTS_OTHER_SIZE.defaultValue, settings.BIGGER_FONTS_OTHER_SIZE);
    addGotoButton(`Profile menu`, `Hide and replace profile menu elements`, profileMenuWindow_profileMenuWindow, [SettingBadge.New]);
    addSettingToggle(`Scroll to top button`, null, settings.SCROLL_TO_TOP);
    addSettingToggle(`Image viewer`, `Open (zoom) images instead default redirect behaviour`, settings.IMAGE_VIEWER);
    addSettingOptions(`Redirect`, `Special behaviour when you visit old.reddit pages`, settings.REDIRECT_MODE);
    addSettingOptions(`Awards`, `Collapse the award's button for none upvoted posts and comments or remove completely`, settings.COLLAPSE_AWARDS);
    addSubtittle(`Content`);
    addGotoButton(`Filters`, `Hide posts and comments by regular expressions`, filtersWindow_filtersWindow);
    addSettingToggle(`Hidden posts history`, `Allows to show latest hidden posts`, settings.SHOW_FILTERED_CONTENT);
    addSettingString(`Hidden posts history limit`, `Max count of posts in history window`, settings.FILTERED_CONTENT_MAX_COUNT.defaultValue, settings.FILTERED_CONTENT_MAX_COUNT);
    addSubtittle(`Users`);
    addSettingToggle(`User info`, `Show user's karma and "new user" mark`, settings.USER_INFO, [SettingBadge.APIRequests]);
    addSettingOptions(`Nickname mode`, `Allows showing a nickname instead of the profile name`, settings.USERNAME_MODE, [SettingBadge.APIRequests, SettingBadge.New]);
    addSettingString(`Nickname max symbols`, `Make nicknames with too many symbols shorter`, settings.USERNAME_MAX_SIMBOLS.defaultValue, settings.USERNAME_MAX_SIMBOLS);
    addSettingToggle(`User tags`, `Enable custom tags (sets via comment's context menu)`, settings.USER_TAGS);
    addSubtittle(`Feed`);
    addSettingToggle(`Feed buttons`, `Unwrap feed sorting buttons`, settings.FEED_BUTTONS);
    addSettingToggle(`Flairs bar`, `Display available flairs to faster navigation. Specific flairs may be hidden via subreddit's flairs settings`, settings.FLAIR_BAR);
    addSettingToggle(`Show flairs always`, `Show flairs for posts in specific feeds (Home, Popular and All) and filter posts by flairs.`, settings.FLAIR_SHOW_ALWAYS, [SettingBadge.APIRequests]);
    addSettingToggle(`Collapse community highlights`, null, settings.COLLAPSE_HIGHLIGHTS);
    addSettingToggle(`Selectable text`, `Make a text selectable when posts viewed in feed`, settings.SELECTABLE_POSTS);
    addSettingToggle(`Unwrap button`, `Show the unwrap button for long-text posts in feed`, settings.UNWRAP_POST);
    addSettingToggle(`Soft background`, `Make the background of posts with soft gradient color`, settings.BACKPLATES);
    addSettingToggle(`Show post's author`, `Relates to Home, Popular and All feeds`, settings.SHOW_POST_AUTHOR);
    addSettingOptions(`Save-post bookmarks`, `Show the save bookmark next to the vote buttons`, settings.SAVED_BOOKMARK_POSTS);
    addSubtittle(`Comments`);
    addSettingToggle(`Sort buttons`, `Unwrap the comment's sort buttons`, settings.COMMENTS_SORT_BUTTONS);
    addSettingToggle(`Remember sort`, `Remember latest used comment's sort`, settings.COMMENTS_REMEMBER_SORT);
    addSettingToggle(`Unwrap "more replies"`, `Automatically unwrap more replies when it becomes visible`, settings.UNWRAP_MORE_REPLIES);
    addSettingToggle(`Hide share button`, `Replace the share button to comment's context menu`, settings.HIDE_SHARE);
    addSettingToggle(`Ghosted comments`, `Make comments ghosted when comment's rating below zero`, settings.GHOSTED_COMMENTS);
    addSettingToggle(`Collapse unwanted`, `Automatic collapse all automoderator and mod's pinned comments`, settings.COLLAPSE_AUTOMODERATOR);
    addSettingOptions(`Save-comment bookmarks`, `Show the save bookmark next to the vote buttons`, settings.SAVED_BOOKMARK_COMMENTS);
    addSettingToggle(`Hide related posts`, null, settings.HIDE_RELATED_POSTS);
    function addSubtittle(text) {
        const subtittle = appendElement(elements, `h3`, `pp_settings_subtittle`);
        subtittle.textContent = text;
    }
    function renderBaseProperty(tittleText, descriptionText, badges = []) {
        const propertyArea = appendElement(elements, `div`, `pp_window_element`);
        const header = appendElement(propertyArea, `div`, `pp_settings_propertyHeader`);
        const tittle = appendElement(header, `div`, `pp_settings_propertyHeader_tittle`);
        tittle.textContent = tittleText;
        if (descriptionText != null) {
            const description = appendElement(header, `div`, `pp_settings_propertyHeader_description`);
            description.textContent = descriptionText;
        }
        else {
            propertyArea.classList.add(`pp_settings_property_oneLine`);
        }
        for (const badge of badges) {
            const badgeLink = appendElement(tittle, `a`, `pp_no_decoration`);
            if (badge.link != null && badge.link.length > 0) {
                badgeLink.setAttribute(`href`, badge.link);
            }
            const badgeContent = appendElement(badgeLink, `div`, [`pp_settings_propertyHeader_badge`, `pp_no_decoration`]);
            badgeContent.textContent = badge.text;
            badgeContent.style.color = badge.color;
            badgeContent.style.borderColor = badge.color;
        }
        const buttonContainer = appendElement(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
        return buttonContainer;
    }
    function addGotoButton(tittleText, descriptionText, window, badges = []) {
        const buttonContainer = renderBaseProperty(tittleText, descriptionText, badges);
        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);
        const gotoButton = appendElement(controlArea, `div`, [`pp_ui_options_arrow`, `button`, `button-plain`, `button-medium`, `px-[var(--rem8)]`]);
        const gotoButtonSvg = buildSvg((settingsArrow_default()), 20, 20);
        gotoButton.append(gotoButtonSvg);
        buttonContainer.parentElement.style.cursor = `pointer`;
        buttonContainer.parentElement.addEventListener(`click`, () => {
            window.open();
        });
    }
    function addSettingToggle(tittleText, descriptionText, setting, badges = []) {
        const buttonContainer = renderBaseProperty(tittleText, descriptionText, badges);
        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);
        const changesSource = settingsWindow_changes.CreateSource(setting.isEnabled());
        renderUIToggle(controlArea, setting.isEnabled(), (state) => {
            setting.switch(state);
            changesSource.Capture(setting.isEnabled());
        });
    }
    function addSettingOptions(tittleText, descriptionText, setting, badges = []) {
        const buttonContainer = renderBaseProperty(tittleText, descriptionText, badges);
        const controlArea = appendElement(buttonContainer, `div`, `pp_window_controlArea`);
        const changesSource = settingsWindow_changes.CreateSource(setting.getIndex());
        renderUIOptions(controlArea, setting.getIndex(), setting.values, index => {
            setting.set(index);
            changesSource.Capture(setting.getIndex());
        });
    }
    function addSettingString(tittleText, descriptionText, placeholderText, setting, badges = []) {
        const inputContainer = renderBaseProperty(tittleText, descriptionText, badges);
        const inputArea = appendElement(inputContainer, `div`, `pp_window_controlArea`);
        const changesSource = settingsWindow_changes.CreateSource(setting.get());
        renderUIInput(inputArea, placeholderText, setting.get(), value => {
            setting.set(value);
            changesSource.Capture(setting.get());
        }, { alignCenter: true, filter: setting.filter });
    }
}
function settingsWindow_closeSettingsWindow() {
    if (settingsWindow_changes.HasChanges()) {
        settings.nextRevision();
        window.location.reload();
    }
}

// EXTERNAL MODULE: ./src/modules/profileMenu/profileMenu.less
var profileMenu = __webpack_require__("./src/modules/profileMenu/profileMenu.less");
;// CONCATENATED MODULE: ./src/modules/profileMenu/profileMenu.ts








css.addStyle(profileMenu/* default */.A);
var ProfileMenuElement;
(function (ProfileMenuElement) {
    ProfileMenuElement[ProfileMenuElement["Separator"] = 0] = "Separator";
    ProfileMenuElement[ProfileMenuElement["VeiwProfile"] = 1] = "VeiwProfile";
    ProfileMenuElement[ProfileMenuElement["EditAvatar"] = 2] = "EditAvatar";
    ProfileMenuElement[ProfileMenuElement["Drafts"] = 3] = "Drafts";
    ProfileMenuElement[ProfileMenuElement["Achievements"] = 4] = "Achievements";
    ProfileMenuElement[ProfileMenuElement["Earn"] = 5] = "Earn";
    ProfileMenuElement[ProfileMenuElement["Premium"] = 6] = "Premium";
    ProfileMenuElement[ProfileMenuElement["DarkMode"] = 7] = "DarkMode";
    ProfileMenuElement[ProfileMenuElement["LogOut"] = 8] = "LogOut";
    ProfileMenuElement[ProfileMenuElement["Advertise"] = 9] = "Advertise";
    ProfileMenuElement[ProfileMenuElement["RedditPro"] = 10] = "RedditPro";
    ProfileMenuElement[ProfileMenuElement["Settings"] = 11] = "Settings";
    ProfileMenuElement[ProfileMenuElement["PlusPlus"] = 12] = "PlusPlus";
})(ProfileMenuElement || (ProfileMenuElement = {}));
const profileMenuElementConfigs = new Map([
    [
        ProfileMenuElement.VeiwProfile,
        {
            tittle: `View Profile`,
            isOptional: false,
            find: element => {
                return element.querySelector(`faceplate-tracker[noun="profile"]`);
            }
        }
    ],
    [
        ProfileMenuElement.EditAvatar,
        {
            tittle: `Edit Avatar`,
            isOptional: true,
            find: element => {
                return element.querySelector(`faceplate-tracker[noun="edit_avatar"]`);
            }
        }
    ],
    [
        ProfileMenuElement.Drafts,
        {
            tittle: `Drafts`,
            isOptional: true,
            find: element => {
                return element.querySelector(`#drafts-list-item`);
            }
        }
    ],
    [
        ProfileMenuElement.Achievements,
        {
            tittle: `Achievements`,
            isOptional: true,
            find: element => {
                return element.querySelector(`faceplate-tracker[source="achievements"]`);
            }
        }
    ],
    [
        ProfileMenuElement.Earn,
        {
            tittle: `Earn`,
            isOptional: true,
            find: element => {
                return element.querySelector(`faceplate-tracker[source="earn"]`);
            }
        }
    ],
    [
        ProfileMenuElement.Premium,
        {
            tittle: `Premium`,
            isOptional: true,
            find: element => {
                return element.querySelector(`faceplate-tracker[noun="premium_menu"]`);
            }
        }
    ],
    [
        ProfileMenuElement.DarkMode,
        {
            tittle: `Dark Mode`,
            isOptional: true,
            find: element => {
                return element.querySelector(`shreddit-darkmode-setter`);
            }
        }
    ],
    [
        ProfileMenuElement.LogOut,
        {
            tittle: `Log Out`,
            isOptional: false,
            find: element => {
                return element.querySelector(`user-drawer-logout`);
            }
        }
    ],
    [
        ProfileMenuElement.Advertise,
        {
            tittle: `Advertise on Reddit`,
            isOptional: true,
            find: element => {
                return element.querySelector(`faceplate-tracker[noun="advertise"]`);
            }
        }
    ],
    [
        ProfileMenuElement.RedditPro,
        {
            tittle: `Try Reddit Pro`,
            isOptional: true,
            find: element => {
                return element.querySelector(`faceplate-tracker[noun="try_reddit_pro"]`);
            }
        }
    ],
    [
        ProfileMenuElement.Settings,
        {
            tittle: `Settings`,
            isOptional: false,
            find: element => {
                return element.querySelector(`faceplate-tracker[noun="settings"]`);
            }
        }
    ],
    [
        ProfileMenuElement.PlusPlus,
        {
            tittle: `Reddit++`,
            isOptional: false,
            find: element => {
                return element.querySelector(`faceplate-tracker[noun="pp-settings"]`);
            }
        }
    ]
]);
const defaultLayout = Array(ProfileMenuElement.VeiwProfile, ProfileMenuElement.EditAvatar, ProfileMenuElement.Drafts, ProfileMenuElement.Achievements, ProfileMenuElement.Earn, ProfileMenuElement.Premium, ProfileMenuElement.DarkMode, ProfileMenuElement.LogOut, ProfileMenuElement.Separator, ProfileMenuElement.Advertise, ProfileMenuElement.RedditPro, ProfileMenuElement.Separator, ProfileMenuElement.Settings, ProfileMenuElement.PlusPlus);
function generateDefaultLayout() {
    const elements = new Array();
    for (const element of defaultLayout) {
        elements.push({ element: element, hidden: false });
    }
    return elements;
}
let originElements = null;
let undefinedElements = null;
function renderProfileMenu() {
    let profileMenu = document.getElementById(`user-drawer-content`);
    profileMenu.classList.toggle(`pp_defaultText`, true);
    if (originElements == null) {
        renderPlusPlusButton(profileMenu);
        const searchingElements = Object.values(ProfileMenuElement);
        originElements = new Map();
        undefinedElements = new Array();
        profileMenu.querySelectorAll(`ul`).forEach(ul => {
            for (const element of [...searchingElements]) {
                const find = profileMenuElementConfigs.get(element)?.find;
                const foundElement = find != null ? find(ul) : null;
                if (foundElement) {
                    originElements.set(element, foundElement);
                    foundElement.remove();
                    searchingElements.splice(searchingElements.indexOf(element), 1);
                }
            }
            for (const child of ul.children) {
                undefinedElements.push(child);
            }
            ul.remove();
        });
        profileMenu.querySelectorAll(`hr`).forEach(hr => hr.remove());
    }
    else {
        profileMenu.querySelectorAll(`ul`).forEach(ul => ul.remove());
        profileMenu.querySelectorAll(`hr`).forEach(hr => hr.remove());
    }
    let elementsData = prefs.get(PrefsKey.PROFILE_MENU_ELEMENTS);
    if (!Array.isArray(elementsData)) {
        elementsData = generateDefaultLayout();
    }
    if (undefinedElements.length > 0) {
        pp_log(`Detected ${undefinedElements.length} undefined elements in the Profile menu`);
        const undefinedUl = addUl();
        for (const undefinedElement of undefinedElements) {
            undefinedUl.append(undefinedElement);
        }
        addHr();
    }
    let currentSection = addUl();
    for (const data of elementsData) {
        if (data.hidden)
            continue;
        if (data.element == ProfileMenuElement.Separator) {
            addHr();
            currentSection = addUl();
        }
        else {
            const origin = originElements.get(data.element);
            if (origin) {
                currentSection.append(origin);
            }
        }
    }
    function addUl() {
        return appendElement(profileMenu, `ul`, [`w-100`, `p-0`, `m-0`, `list-none`, `my-xs`]);
    }
    function addHr() {
        appendElement(profileMenu, `hr`, [`h-px`, `w-100`, `bg-neutral-border-weak`, `border-0`]);
    }
}
function renderPlusPlusButton(profileMenu) {
    let originSettingsButton = profileMenu.querySelector(`faceplate-tracker[noun="settings"]`);
    if (originSettingsButton == null) {
        originSettingsButton = profileMenu.querySelector(`faceplate-tracker[noun="login"]`);
    }
    let ppSettingsButton = originSettingsButton.cloneNode(true);
    ppSettingsButton.setAttribute(`noun`, `pp-settings`);
    originSettingsButton.parentNode.appendChild(ppSettingsButton);
    ppSettingsButton.querySelector(`a`).removeAttribute(`href`);
    const originSvg = ppSettingsButton.querySelector(`svg`);
    const svg = buildSvg((settingsButton_default()), 20, 20, { strokeColor: NONE_COLOR });
    originSvg.replaceWith(svg);
    let text = ppSettingsButton.querySelector(`.text-body-2`);
    text.textContent = `Reddit++`;
    ppSettingsButton.addEventListener(`click`, () => {
        settingsWindow_settingsWindow.open();
    });
}

;// CONCATENATED MODULE: ./src/modules/header.ts








css.addStyle(header/* default */.A);
let notificationsInitialized = false;
async function header_renderHeader(container) {
    const nav = await dynamicElement(() => container.querySelector(`reddit-header-large`)?.querySelector(`nav`));
    if (checkIsRendered(nav))
        return;
    const userPanel = await dynamicElement(() => nav.querySelector(`span[data-part="inbox"]`)?.parentElement?.parentElement);
    userPanel.classList.add(`pp_userPanel`);
    userPanel.addEventListener(`click`, () => {
        renderProfileMenu();
    }, { once: true });
    if (settings.NOTIFY_POPUP.isEnabled() && !notificationsInitialized) {
        notificationsInitialized = true;
        observeFor(`HEADER`, document.body, (element) => {
            if (element.getAttribute(`data-id`) == `notification-container-element` && !checkIsRendered(element)) {
                renderNotifications(element);
            }
        });
    }
    const logo = container.querySelector(`#reddit-logo`);
    const logoPP = appendElement(logo, `div`, `pp_logo`);
    logoPP.textContent = `++`;
    
}

// EXTERNAL MODULE: ./src/modules/redirect.less
var modules_redirect = __webpack_require__("./src/modules/redirect.less");
;// CONCATENATED MODULE: ./src/modules/redirect.ts






function checkRedirect() {
    const mode = settings.REDIRECT_MODE.get();
    const isOld = window.location.href.includes(`old.reddit.com`);
    let redirect = null;
    if (isOld) {
        redirect = window.location.href.replace(`old.reddit.com`, `reddit.com`);
    }
    if (mode == RedirectMode.Forced && redirect != null) {
        window.location.assign(redirect);
    }
    if (mode == RedirectMode.Suggestion && redirect != null) {
        renderSuggestion(redirect);
    }
    const commentsSortRedirect = checkSortCommentsRedirect();
    return redirect != null || commentsSortRedirect;
}
function renderSuggestion(redirect) {
    css.addStyle(modules_redirect/* default */.A);
    let secondsToRedirect = 19;
    const container = appendElement(document.body, `div`, `pp_redirectContainer`);
    const box = appendElement(container, `div`, `pp_redirectBox`);
    box.textContent = `Click here to redirect on compatible page (${secondsToRedirect})`;
    box.addEventListener(`click`, () => {
        window.location.assign(redirect);
    });
    const suggestionId = setInterval(() => {
        secondsToRedirect--;
        box.textContent = `Click here to redirect on compatible page (${secondsToRedirect})`;
        if (secondsToRedirect <= 0) {
            clearInterval(suggestionId);
            container.remove();
        }
    }, 750);
}

// EXTERNAL MODULE: ./src/modules/scrollToTop.less
var scrollToTop = __webpack_require__("./src/modules/scrollToTop.less");
// EXTERNAL MODULE: ./resources/scrollButton.svg
var scrollButton = __webpack_require__("./resources/scrollButton.svg");
var scrollButton_default = /*#__PURE__*/__webpack_require__.n(scrollButton);
;// CONCATENATED MODULE: ./src/modules/scrollToTop.ts







const START_Y = 1000;
let scrollToTop_scrollToTop = null;
let scrollToTop_scrollButton = null;
let prevScrollHeight = 0;
let isBottom = false;
let scrollToTop_contentBlock = null;
let scrollToTop_sidebarBlock = null;
const sidebarObserver = new MutationObserver(() => {
    animate(() => {
        scrollToTop_checkScreenWidth();
    }, 0.5);
});
async function renderScrollToTop() {
    if (settings.SCROLL_TO_TOP.isDisabled())
        return;
    css.addStyle(scrollToTop/* default */.A, `scrollToTop`);
    scrollToTop_contentBlock = (await dynamicElement(() => document.body.querySelector(`.main-container`)));
    const main = scrollToTop_contentBlock.parentElement;
    const sidebar = await dynamicElement(() => document.body.querySelector(`#left-sidebar-container`));
    if (scrollToTop_scrollToTop == null) {
        window.addEventListener('resize', () => {
            scrollToTop_checkScreenWidth();
        });
        let prevIsBottom = false;
        window.addEventListener(`scroll`, () => {
            isBottom = window.scrollY > START_Y;
            if (isBottom != prevIsBottom) {
                prevIsBottom = isBottom;
                scrollToTop_checkScreenWidth();
            }
        });
    }
    else {
        scrollToTop_scrollToTop.remove();
        sidebarObserver.disconnect();
        prevScrollHeight = 0;
        isBottom = false;
    }
    sidebarObserver.observe(sidebar, { childList: false, subtree: false, attributes: true });
    scrollToTop_sidebarBlock = sidebar.querySelector(`#flex-left-nav-contents`);
    const sidebarButton = sidebar.querySelector(`#flex-nav-buttons`);
    if (sidebarButton != null) {
        sidebarButton.addEventListener(`click`, event => {
            animate(() => {
                scrollToTop_checkScreenWidth();
            }, 0.5);
        });
    }
    scrollToTop_scrollToTop = appendElement(main.parentElement, `div`, `pp_scrollToTop`);
    scrollToTop_scrollButton = buildSvg((scrollButton_default()), 40, 40);
    scrollToTop_scrollToTop.append(scrollToTop_scrollButton);
    scrollToTop_scrollToTop.addEventListener(`click`, () => {
        if (isBottom) {
            prevScrollHeight = window.scrollY;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            isBottom = false;
        }
        else if (prevScrollHeight > 0) {
            window.scrollTo({ top: prevScrollHeight, behavior: 'smooth' });
            prevScrollHeight = 0;
            isBottom = true;
        }
        scrollToTop_checkScreenWidth();
    });
    scrollToTop_checkScreenWidth();
}
let shouldShow = true;
function scrollToTop_checkScreenWidth() {
    const left = scrollToTop_sidebarBlock?.getBoundingClientRect()?.right ?? 0;
    const right = scrollToTop_contentBlock.getBoundingClientRect().left;
    const availableSpace = right - left;
    const minButtonSpace = 60;
    const optimalWidth = 100;
    const minGap = 80;
    let buttonWidth = optimalWidth;
    let leftPosition = (left + right) / 2 - buttonWidth / 2;
    if (availableSpace >= minGap + 40) {
        buttonWidth = Math.min(optimalWidth, availableSpace - 20);
        leftPosition = (left + right) / 2 - buttonWidth / 2;
    }
    else if (availableSpace >= minButtonSpace) {
        buttonWidth = Math.max(minButtonSpace, availableSpace - 10);
        leftPosition = (left + right) / 2 - buttonWidth / 2;
    }
    else {
        if (availableSpace >= 40 && availableSpace < minButtonSpace) {
            buttonWidth = Math.max(40, availableSpace - 5);
            leftPosition = left + (availableSpace - buttonWidth) / 2;
        }
        else {
            buttonWidth = 60;
            leftPosition = left - 30;
            scrollToTop_scrollToTop.style.opacity = '0.7';
        }
    }
    scrollToTop_scrollToTop.style.width = `${buttonWidth}px`;
    scrollToTop_scrollToTop.style.left = `${leftPosition}px`;
    if (availableSpace >= 40) {
        scrollToTop_scrollToTop.style.opacity = '';
    }
    const isPageScrollable = document.documentElement.scrollHeight > window.innerHeight;
    shouldShow = isPageScrollable && (isBottom || prevScrollHeight > 0) && availableSpace >= 30;
    const inverted = !isBottom && prevScrollHeight > 0;
    scrollToTop_scrollToTop.classList.toggle(`pp_hidden`, !shouldShow);
    scrollToTop_scrollButton.classList.toggle(`pp_scrollToTop_inverted`, inverted);
}

;// CONCATENATED MODULE: ./src/core.ts











startRedditPlusPlus();
async function startRedditPlusPlus() {
    const documentBody = await dynamicElement(() => (document.head != null && document.body != null ? document.body : null));
    let pp_meta = document.head.querySelector(`meta[name="reddit-plus-plus"]`);
    if (pp_meta != null) {
        notify(`Reddit++ ran more than once. Check out the userscript manager to disable dublicates.`, { seconds: 10 });
        return;
    }
    pp_meta = document.createElement(`meta`);
    pp_meta.setAttribute(`name`, `reddit-plus-plus`);
    pp_meta.setAttribute(`version`, "1.2.3");
    document.head.append(pp_meta);
    latestMigration.check();
    if (checkRedirect()) {
        return;
    }
    initializeFeedRedirect();
    const pp_app = await dynamicElement(() => documentBody.querySelector(`shreddit-app`), MAX_LOAD_LAG);
    if (pp_app == null || pp_app.getAttribute(`devicetype`) != `desktop`) {
        pp_log(`Reddit++ was stopped for a non compatible page`);
        return;
    }
    header_renderHeader(documentBody);
    renderApp();
    renderScrollToTop();
    observeFor(`CORE`, documentBody, element => {
        if (element.matches(`reddit-header-large`) == true) {
            header_renderHeader(element.parentElement);
        }
        const isSubPage = element.matches(`shreddit-app`) == true;
        const isMainPage = element.classList.contains(`grid-container`) && element.parentElement.matches(`shreddit-app`) == true;
        if (isSubPage || isMainPage) {
            renderApp();
            renderScrollToTop();
            checkSortCommentsRedirect();
        }
    });
}

})();

/******/ })()
;