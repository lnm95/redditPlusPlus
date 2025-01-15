// ==UserScript==
// @name             Reddit++
// @name:ru          Reddit++
// @description      A lot of enhancements for new design of reddit.com like unwrapped feed buttons, bigger fonts, view images without redirect and many more...
// @description:ru   Множество улучшений для нового интерфейса reddit.com, таких как развернутые кнопки лент, увеличенный шрифт, увеличение изображений без редиректа и много другое...
// @namespace        RedditPlusPlus
// @version          1.0.18
// @author           lnm95
// @icon             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAQRklEQVR4nN2bCZAc1XnHf6+75569L0lI6DJCAmIQESBBEnFIwhyKwmHsshMnBRhSwQZifCSOKxw+iEPABldMUmCb4KtiCDKXicRhCZAAQSQkJJCwVtrVXtpzdmfnnu5+qdczOzuzO7M7e2BC/lVTuz3b773v+7/vescKpgi5fooNBB9HcgNwMbAE0Eq8B2nABurnw6KPQUUlhIbg6P4hQv0/wc0PEByhhNTi+alqA8bUm0yCrQguYS02m5Bcg2ReWe0sRY0LTloOl16PPHM9VDZAfwe89Isq8dwjX6C3x4ebuxB0zpa4s0dAgGqi3MwGrgcWTKmtADsG6flNcPkNuDZ+YXSSq+qhaRHS5TXEQ9+6AezTgFuB3Vl7mRGKm+NU4KYGwTeJ0grcOWXltQwBvzPh5wMeftGSpDs0iJQyR4L0V2KfeSGyqV6Q5jxsdiB4CDHFsUoMn4MadLJPDuehIfkyKY4g+QZQOeXRdehI6dzWVsXGnhP48hGNn728m6PNR5DWyORKTCFIBWqwfX71iEO75Foku4BbcvKvn6IO03YBm2Xs5FEE50yrvVCCQldS5+bOWvaKOv44GGb1Qh91G9ZQdfIKYrbElUiS9nqIKkE7WvGEex3S8oLgHOD7CP4ajUuwaGGDgK1ywuHzMXUXEPwNgv9BTkN5kf1oEEbnxwMVbLcbuKrO5JtN/dwY7OFq2UJgqIeuJLTZHjpjEN+zC9eWR9DC0cyUjc0CkuVYHEBws/O8ofzkVvDmWPMowJ1CYwf3AF+astI2GdO1GDFh9iXg8rY5nN/o4V+qO2gUJiQgVemn/9xPMnzmxViVDRih49TsfIyat55Gt6Uy/lwfJcb7J7by9YmUEULkvV4OAecKH0F+DlxR9O8y7yPy7Epmlc/FagNcbmzNxbNhnU+1VfPTZXE2eeMYZgrSKUiZzvtWdQArWI0R6UMbTmb6dOVJPfEkbybCZ9kp45MRMHkMyCj/G+D8ksqbI7MrQJMZQUX2+7QAL1DbCE0LYeFyrIaF+PvSXLDrGEsvWI4RMKHrCLT/Do63QH8Pen8UXZm8K6u4IjEpQMhMHCjmCqO4wpH5XHFpKRJyZBToMs4ChGAD/1Vy5hNZxZuqkQtOAa8f0d0CrYdhWH3vRa66BM68AJafA/UngMuL1A1StiScMKnxuTEUaaYJ6QT0dcDBN2DPdsSup6E7BRU4laGcuwSiw4i2d6F7KEOEf0KX2Mx5XM3tsqBeKN8FLhZ3I/m7ol3HgOpKWPcZ5NqroaYRNB0SUdizDXraYcUqWLEaaprAX5gl8wceJ38sDIM9cOBVeG83NC2AleeDL5gharAb8dtfwYu/hMGIKsImwn1slbdNnYAN4hYnxRRDCvBWwhXXIa+4BRoXFr6kSIgOQV15VXBJKHkGuiBQBd4xWnYfRTxxP/z6R5CMZIJjKQhuYov8YfkEXCIWYXMA6RhYIZQxhYGNn0TeeM945fMw4SxPKG+Z7RQJ/3YbbNmcsYLSMSGCziqek4cYQ0DxOsDiuaLKk/X5gIG95nLsMpQfyYDlZmaRlzyYpJ1sWoy1eiPSq0+2Kghi8aiTysdgPAEZ019esisb7Npq0v5qh4ucMKrMzFfCtokPhRk4dIhweztmMjEpCU7iSCUZ7uwkdPAQiaGw00+xdiI7F2ZFLbIqWI6Jnc2r42uYQgIuFmpx8bXJpJS2RTptkhzJgLaNrdwnL4YMtLbxznfv4sh1Gzl682fofWU7ZsosSYKjfNqk9+VtHL3pUxz9/Cb23/sdBtrac+84liEltm07WwcqCaWTKbBkeSYm+AcuFzWlCYCvAHMn7EQHbSBM4vgxwilJTGYEl7bMreAi0SR9W57B/9SPWWE287F5En33VpIqPRYx65HnRPNB7McfZOHh11i+WKeydRf9r7zIcH8oY1VKeSkxLctZH4QTFqmuFrRwpFwfqyZZaAU5AuQGZ2n5V5N2oYOwLTw7niC69zW6bEhIkRUu80q0sx1z306akiEqmiRBsx3/20+jtR/KFY35GPlO62omePhlqmstgr4Q9R17sN7aTux4d0bGrJXFpcZxCfG9O3DvfBJMu/xVjeBm+WdUjyMA4ezeVJTViRcCB16jcvN9iD2vk7Sk44/KFRTslImbKEGV+v0S2lrwDrbikokJXdWNScCTyBQ+4S58/YO44v1ImZlex9WU2ZsW2ls7qdh8H/79b4CnTOUzqCTKF8cTYHNT2V2oitc2aXjlCeY99T30vg5SQiMtbdK2xD1nLr6VZ2EuqEd63OD3Y/zhRRgLThrZ/yj60RcsxTj7IqgIIF0urAX1+FaejWfunIzp25K00ND725n71L3U73gSzTKns6j//EjUUMWk2khYC/ztlLpQsSAORjKKtew0UotOBdPCtixclQH0+nmYbjcuXzXi5LMQm26Fk1Y51fVIxhh1B6G+RtTMgXlLsawkdtWJxM+6FM+6P8c9b54TdE0JaUPHtfclgs89it43mNmGmUqRkUEVS9h25xFaMtxJPlt2os6HxwnDyK6jpNO2s4sjpYUel7jmL4HP3U4qFkVXawS3QSKRJB6JkE6lMJW7ZLOGYRi4XW58wQCeZefA4lXY8SiegB8pNMxEEsuysDRdcYzR1YpMJUdXh9OBxiZgm5GdgLXT6sQFeqwH14GXSa67DsvrxZa2s27XbInhcmMEK4nGE9x793d48/XXnZkcSWUyGzV1w0DXBYams+qcc/jq1/4eT7ASy7IxzRS2aWVyvrSxYiEqD2xDj3ZPvjcwESRXKqs35CUsxWTZNFmEtIX74B70Xc8wvPoqPJqGx0qg64bjDpbLjcdtEBse5pVtvyWZSIDbB5qGUK7gbJjYkErg9rhZceoK3G6DVCrtKK9SniIg5faSMgXB15/GdWA3pKypBr+xOFFlPv2OJVwEXDPtblRAjMfQBzoYPPF0YlXznGgtkwlMKbFsC03XaWxqIhwe4v3mZuxEHKSW3SWywEzi8vq48qqruO6GG6mtrycej5NMp0klU8SEm6h0oTfvpeFX38Lb9j5Cl7Oxp71bEfCXzh7vDAhQM+np7oDEMJG6E4lWzSVlK72SpNNpkqk0CxcvYeGixbh9AdISjGAF3qoqauobWLRkKZuuzCj/8ZVn0jcwQFzFi5TtKB+XBq7mPTQ++32q39qSUV6fsfJqApqF3OAsfD4xw46yuz/QvfYajq+7lvj8P0AIDYGFZtvomqC2tppELMq+vXt55713icbj+D0+Tj11OStPPwNfoILQ4KDj+xY6ttCcvB9o3cecFx6i8ZXHM4Fv9o5zHlcEvIlk1ax0l84QET3pdHrW30DojE9guoOOidu26bzichn4vT48Hje6pjnukkymiSfipNKZd9TGitDd6MkwNe88T9PzDxM8tCcT9GbxMM+UvCtS6+hxCRpmrVeV3Uwdq7KW2ClrGF51GfFla0hWNWIZXqTQnUwhle+rNCgEQjdAEwjLQk8ncA/34Du4g6pdTxE4uAs9MogwrNnw+UIIjisLSCIn3E8pD0vWwvzsKlq5xN4XkeF2rMp6rMZ5pBecgqk+DYuxKuqQhgep6wiVAdIxtEgIV08LxrH9GO3vYXR3YoR7Eenk6Cbrn9w4Kkq4H95+fKZSJ4RcP+1MOoozroZ/fqzgq95D79Jw46mZ2KACls+LDNQj/dVIvx+8rsweorQgnoZYDC02hIj2QjyRIdHFaLC760VYfWGu/1QqRfJH91Cx+RszEn12PKqyruBxcHCQ5sFhGjxk/FZFsngCMdSOsNpHzw5Gqs+RAxM9W126i6yZ6+cUPLa2HsObSJS5eisNI7uv4J1hPwXo6+t3Pjnb0rIjjIwixxxs55NRhj0ODAzQ199HfTQ6U1FT6oR3cKa95EPV7Cr3KxMtQOHqJ6O0NuYUqUxnVOW0GsO2ZnY9wJQMaSkIzaiXDxUzC1+GoFVz6+yfbRXUtrOmzXbOGj+GGL/JO8VO6NOcM/VZhBJMLW/9/uK76rMBXdfwer24vb6Z9SbZp2rVfbMpnJr5QCDAnDlNs9ltATweDzXVNQSra6bQqghs3jQQbC/Lla79IQRKJJ2GwiOwioogbrcL+6b/KO0Ke1+Fl/999FkVUpddX3r8usbcr4qAhoZ6PGsugLk/Ld3mZ3dAqLn0393scZKPXO9ccDqx5IvX3A3XFz8jLQaVCSaLA11dx2n64mq0cGvmi5+0wAmlT5ryIbMbKrpeekmYTCYZ+s1jND74F6VeeV88z8kZCQVPTDhi0/yyBBuBUjz//G0s+vv7aT3WSuSE00f/Uqby+WOUgpqAY8fa6ExYpTtQlp+rBG2eRDh37yZFKBTCNM3cDLtcLsck1U+R3fBUOTqRSDi1wNgjd7XTc7z7OB0dnSxLJsYNF4lEnLbOIUs2oKr+3W53bsaVgk4pnMzsFeaPYat7B+Ewbe3t6AP9pdWRzo2XLAEvsJ0NtCFL3LvrbicWizmsDg4N5ghQSldVVjn+WFVV5QioTDMajdLd3UNocJSsEagiRpE4NDSEL3RsdIyOVtql4ZCjFFNKKYJVNqmvq6eurhafz+d8r5QfGAg51aAaS405Mob6PRaLO9Xi4lB3qdlvEVvzLEBk3Orh7EXH8Xj+YVK6B/9AP3o8njmwVLPjdhOorMJ38mnoF27MECslw8MROjo7mfvSYwhNQ9ONnIBS2jSZJoHhPnyhg6PEPPiPGHOXUTscxkqnMwToOl6/n8raejyXfxp8PqcfRVBvXy/xt3ZQ0/oumqaj6VrubFlViAsskwXHdhcnwOZfR34dXQyleQAXtxW98BhqpvqXXxo9TxoLtUzNEqCgTFiZ4UW7HizVYhxcux5lzkQvnLculwmUFamZr205wClTGMOBYBjBf4485iKJ2MYgkgem1ltxKL+07Rlf4y0JZR1OpplOtWnziNhK28hjYQ8e7lOr2ZkIN2LqE2WB2YAThCdIgyXQhebcdcyhkIBnZAjJtz9QyT9cfJctsi1fgvE29EeOFbzx/1D5g2yV94/9cjwB6k6d7pwVRKYziqoB0mb6A40BKrWappU7WisDMQSXFnuteBRRt6nEJFdlikAFp97ePifPq5OdDwJqu03l/+HhYWzLLHeEryM5Wj4BCupeneR7ZXUf7neKk8OHm2k+coTOzi5kJDy76sci9PT0Ov2rgkyR7ErGJm+nLk/D/aWu0E98U1TtOKzn8ZJXZfOQXn4ZPUtXEQuHYXiAE1pewz/4fpnaTQ5ZvYTwyj9lQPeSjEao7D3KvMPPTtxOsJmtXDVWsandFs9cln4bpnmC/OFhGxGKXpae/KJkPir46kdQ+c2O8kEmDUQTE3CxuB3JHbMp2e8B9zk3xNXMl/GvM6UPRj56ykeczJV3KbocFK1X5QY+WsoLdqHxOfHfHJpq03Eu8BFTXi3gvsK5rJmO8gqFWWAdtyLKzP0fLsIIfoCLe8WzMzvYKYwBGp+ehbPiDxJqIfMwAR4Qv56dI71CAgTd/wcJOOZs2qp9yxfYLmZ6HjYGYwm4Bcki51/ef79Ql4gHEY4570fS4hzYpNkmtjF6X362AfwvvG5Pojz6v/sAAAAASUVORK5CYII=
// @source           https://github.com/lnm95/redditPlusPlus
// @license          MIT
// @match            *://*.reddit.com/*
// @grant            unsafeWindow
// @grant            GM_getValue
// @grant            GM_setValue
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
  display: none;
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
___CSS_LOADER_EXPORT___.push([module.id, `:is(.text-14):not(.pp_defaultText .text-14) {
  font-size: 1rem !important;
  line-height: 1.4rem !important;
}
faceplate-hovercard .text-12 {
  font-size: 0.9rem !important;
}
shreddit-composer > div[role='textbox'] {
  font-size: 1rem !important;
  line-height: 1.4rem !important;
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
:root.theme-light {
  --pp-color-muted-conent: #a5a5a5 !important;
  --pp-color-muted-conent-hover: #636363 !important;
}
:root {
  --pp-color-muted-conent: #595959;
  --pp-color-muted-conent-hover: #adadad;
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
  position: fixed;
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
  flex-direction: row;
}
.pp_feedPanel_space {
  width: 100%;
}
.pp_defaultFeed_mark {
  color: var(--color-neutral-content-weak);
  border-radius: 18px;
  display: flex;
  align-items: center;
  margin: 0px 5px 9px 5px;
  padding: 0px 8px;
  position: relative;
  cursor: pointer;
}
.pp_defaultFeed_mark:hover {
  background-color: var(--button-color-background-hover);
}
.pp_defaultFeed_mark:active {
  background-color: var(--button-color-background-activated);
}
.pp_defaultFeed_mark_hint {
  display: none;
  position: absolute;
  top: -32px;
  left: 16px;
}
.pp_defaultFeed_mark:hover > .pp_defaultFeed_mark_hint {
  display: block !important;
}
.pp_defaultFeed_mark_hint > span {
  color: #c7c7c7;
  background-color: rgba(0, 0, 0, 0.712);
  text-wrap-mode: nowrap;
  border-radius: 18px;
  padding: 4px 8px;
  position: relative;
  left: -50%;
}
.pp_feedButtonsContainer {
  justify-content: space-between;
  height: 40px !important;
}
.pp_feedButton {
  gap: 0.25rem !important;
}
.pp_feedContainer {
  gap: 0.25rem;
  height: 40px;
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
:root.theme-light {
  --stickiedColor: #0e8a001c !important;
  --stickiedHoverColor: #18900b3d !important;
}
:root {
  --stickiedColor: #0e8a001c;
  --stickiedHoverColor: #18900b3d;
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
  background: linear-gradient(0deg, var(--scrollLineColor) 0%, var(--scrollLineTransparentColor) 20%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
  cursor: pointer;
  color: var(--scrollLineTransparentColor);
  transition: all 0.2s ease-in;
}
.pp_scrollToTop_inverted {
  transform: scale(1, -1);
}
.pp_scrollToTop_hidden {
  visibility: hidden;
}
.pp_scrollToTop_hidden::before {
  visibility: hidden;
}
.pp_scrollToTop:hover {
  padding-bottom: 50px !important;
  color: var(--scrollButtonColor);
  transition: all 0.2s ease-out;
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
:root.theme-light {
  --scrollLineColor: #e5ebee6e !important;
  --scrollLineTransparentColor: #e5ebee00 !important;
  --scrollButtonColor: #c9d1d4c2 !important;
}
:root {
  --scrollLineColor: #2a323633;
  --scrollLineTransparentColor: #2a323600;
  --scrollButtonColor: #0e1113;
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
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 4px;
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
.pp_settings_changesBannerContainer {
  position: absolute;
  top: 0px;
  width: 900px;
  overflow-y: hidden;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
}
.pp_settings_changesBanner {
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
.pp_settings_changesBanner_active {
  opacity: 1 !important;
}
.pp_settings_arrowArea {
  width: 200px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.pp_settings_arrow {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp_settings_arrowLeft {
  transform: scale(-1, 1);
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
___CSS_LOADER_EXPORT___.push([module.id, `.pp_sidebar_loadingSection {
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

/***/ "./src/modules/sidebar/subFilter.less":
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
___CSS_LOADER_EXPORT___.push([module.id, `.pp_subFilter_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
}
.pp_subFilter {
  border-color: var(--color-neutral-border-weak);
  color: var(--color-secondary-weak);
  font-weight: 400;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  color: var(--color-secondary-plain);
}
.pp_subFilter:hover {
  background: var(--color-input-secondary-hover) !important;
}
.pp_subFilter:focus {
  border-color: var(--color-neutral-content-weak) !important;
}
.pp_subFilter_span {
  width: 100%;
  margin: 0px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
}
.pp_subFilter_span > span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp_subFilter_input {
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
.pp_pp_subFilter_clearContainer {
  position: relative;
  width: 0px;
}
.pp_subFilter_clear {
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
___CSS_LOADER_EXPORT___.push([module.id, `.pp_flairBar {
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
:root.theme-light {
  --color-neutral-background-transparent: #fff0 !important;
}
:root {
  --color-neutral-background-transparent: #0b141600;
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
___CSS_LOADER_EXPORT___.push([module.id, `.pp_flairWindow_flairContainer {
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 3rem;
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
  }
  .pp_mainFeed {
    width: var(--pp-content-width) !important;
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

/***/ "./src/utils/checkbox.less":
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
___CSS_LOADER_EXPORT___.push([module.id, `.pp_checkBox_container {
  float: right;
  position: relative;
}
.pp_checkBox_buttonActive {
  justify-content: flex-end !important;
  background-color: #0079d3 !important;
}
.pp_checkBox_button {
  position: relative;
  cursor: pointer;
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
.pp_checkBox_knob {
  height: 19.5px;
  width: 19.5px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s linear;
  border-radius: 57%;
}
.pp_checkBox_panelArea {
  width: 200px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
:root.theme-light {
  --checkBox-background: #1a1a1b1a !important;
}
:root {
  --checkBox-background: #81818152;
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

/***/ "./resources/feedButtons/feedButtonBest.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M8.82,1.51l1.43,3.4a.86.86,0,0,0,.66.47l3.62.28A.91.91,0,0,1,15,7.22L12.3,9.62a.84.84,0,0,0-.25.76l.81,3.55a.92.92,0,0,1-1.33,1L8.41,13a.91.91,0,0,0-.82,0L4.47,14.89a.92.92,0,0,1-1.33-1L4,10.38a.84.84,0,0,0-.25-.76L1,7.22a.91.91,0,0,1,.5-1.56l3.62-.28a.86.86,0,0,0,.66-.47l1.43-3.4A.91.91,0,0,1,8.82,1.51Z\" style=\"fill:currentColor; stroke:none\"></path></svg>"

/***/ }),

/***/ "./resources/feedButtons/feedButtonBest_empty.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M8.82,1.51l1.43,3.4a.86.86,0,0,0,.66.47l3.62.28A.91.91,0,0,1,15,7.22L12.3,9.62a.84.84,0,0,0-.25.76l.81,3.55a.92.92,0,0,1-1.33,1L8.41,13a.91.91,0,0,0-.82,0L4.47,14.89a.92.92,0,0,1-1.33-1L4,10.38a.84.84,0,0,0-.25-.76L1,7.22a.91.91,0,0,1,.5-1.56l3.62-.28a.86.86,0,0,0,.66-.47l1.43-3.4A.91.91,0,0,1,8.82,1.51Z\" style=\"fill:none; stroke:currentColor\"></path></svg>"

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

/***/ "./resources/imageCloseButton.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 40\"><path d=\"m33.16001,9.52439l-2.37671,-2.37671l-10.691,10.691l-10.691,-10.691l-2.37671,2.37671l10.691,10.691l-10.691,10.691l2.37671,2.37671l10.691,-10.691l10.691,10.691l2.37671,-2.37671l-10.691,-10.691l10.691,-10.691z\" style=\"fill:currentColor;stroke:none;stroke-width:0px\"></path></svg>"

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

/***/ "./resources/subFilter.svg":
/***/ ((module) => {

module.exports = "<svg fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.5 18.616 14.985 14.1a8.528 8.528 0 1 0-.884.884l4.515 4.515.884-.884ZM1.301 8.553a7.253 7.253 0 1 1 7.252 7.253 7.261 7.261 0 0 1-7.252-7.253Z\" style=\"stroke:none;stroke-width:0px\"></path></svg>"

/***/ }),

/***/ "./resources/subFilterClear.svg":
/***/ ((module) => {

module.exports = "<svg fill=\"currentColor\" icon-name=\"clear-outline\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.75A8.75 8.75 0 1 1 18.75 10 8.76 8.76 0 0 1 10 18.75Zm3.567-11.433L10.884 10l2.683 2.683-.884.884L10 10.884l-2.683 2.683-.884-.884L9.116 10 6.433 7.317l.884-.884L10 9.116l2.683-2.683.884.884Z\" style=\"fill:currentColor;stroke:none;stroke-width:0px\"></path></svg>"

/***/ }),

/***/ "./resources/windowCloseButton.svg":
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M14,2h0a.75.75,0,0,0-1.06,0L8.15,6.78a.2.2,0,0,1-.3,0L3.06,2A.75.75,0,0,0,2,2H2A.75.75,0,0,0,2,3.06L6.78,7.85a.2.2,0,0,1,0,.3L2,12.94A.75.75,0,0,0,2,14H2a.75.75,0,0,0,1.06,0L7.85,9.22a.2.2,0,0,1,.3,0L12.94,14A.75.75,0,0,0,14,14h0a.75.75,0,0,0,0-1.06L9.22,8.15a.2.2,0,0,1,0-.3L14,3.06A.75.75,0,0,0,14,2Z\"></path></svg>"

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
function observeFor(root, action, includeChilds = true) {
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
}
function checkIsRendered(node, key = `pp-rendered`) {
    if (node.getAttribute(key) != null) {
        return true;
    }
    else {
        node.setAttribute(key, ``);
        return false;
    }
}
function appendNew(prev, name, classes = null) {
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
    prev.append(el);
    return el;
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

;// CONCATENATED MODULE: ./src/modules/toaster.ts

class NotifyConfig {
}
const DEFAULT_NOTIFY_TIME = 3000;
async function notify(message, config = {}) {
    let toaster = await dynamicElement(() => document.body?.querySelector(`alert-controller`)?.shadowRoot?.querySelector(`toaster-lite`));
    let toast = document.createElement(`faceplate-toast`);
    toast.classList.add(`theme-rpl`);
    if (config.color != undefined) {
        toast.style.backgroundColor = config.color;
    }
    toast.textContent = message;
    toaster.appendChild(toast);
    setTimeout(() => {
        toast.setAttribute(`_fading`, ``);
    }, config?.time ?? DEFAULT_NOTIFY_TIME);
}
function pp_log(message) {
    
    console.log(`Reddit++: ${message}`);
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
        if (currentVersion == null || isLowerVersion(currentVersion, this.version)) {
            this.previous?.check();
            this.action();
            GM_setValue(DATABASE_VERSION, this.version);
            notify(`Reddit++ was upgraded to ${this.version}`);
        }
    }
}

;// CONCATENATED MODULE: ./src/_compatibility/migration_1_0_0.ts

// from 0.2.x
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

// EXTERNAL MODULE: ./src/modules/wideMode.less
var wideMode = __webpack_require__("./src/modules/wideMode.less");
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

;// CONCATENATED MODULE: ./src/defines.ts
class ModuleTaget {
}
const IS_COMMENT = { isComment: true };
const IS_POST = { isComment: false };
const MAX_LOAD_LAG = 2000;
const HOUR_SECONDS = 60 * 60;
const DAY_SECONDS = HOUR_SECONDS * 24;

;// CONCATENATED MODULE: ./src/utils/database.ts

class DatabaseConfig {
}
class Database {
    constructor(name, config = new DatabaseConfig()) {
        this.databaseKey = name + `_DATABASE`;
        this.refreshKey = name + `_REFRESHED`;
        this.cleanupKey = name + `_CLEANUP`;
        this.isCleanupable = config?.isCleanupable ?? false;
        this.validator = config?.validator ?? null;
        this.loader = config?.loader ?? null;
        this.refresh();
        // cleanup database
        if (this.isCleanupable && GM_getValue(this.cleanupKey, 0) < Date.now()) {
            const timestampLimit = Date.now() - 1000 * 2 * DAY_SECONDS;
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
        return (raw == undefined ? {} : raw);
    }
    async getWithLoader(id, onLoaded = null) {
        this.refresh();
        const raw = this.data[id];
        let data = (raw == undefined ? {} : raw);
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
}

;// CONCATENATED MODULE: ./src/modules/feed/feedLocation.ts
var FeedLocation;
(function (FeedLocation) {
    FeedLocation[FeedLocation["Sub"] = 0] = "Sub";
    FeedLocation[FeedLocation["Home"] = 1] = "Home";
    FeedLocation[FeedLocation["Popular"] = 2] = "Popular";
    FeedLocation[FeedLocation["All"] = 3] = "All";
})(FeedLocation || (FeedLocation = {}));
function GetFeedLocation() {
    if (window.location.href.includes(`?feed=home`) || window.location.href == `https://www.reddit.com/`)
        return FeedLocation.Home;
    if (window.location.href.includes(`reddit.com/r/popular/`))
        return FeedLocation.Popular;
    if (window.location.href.includes(`reddit.com/r/all/`))
        return FeedLocation.All;
    return FeedLocation.Sub;
}

;// CONCATENATED MODULE: ./src/modules/feed/feedType.ts

function GetFeeds(location) {
    const defaultFeeds = [`Hot`, `New`, `Top`, `Rising`];
    if (location == FeedLocation.Home || location == FeedLocation.Popular) {
        return [`Best`].concat(defaultFeeds);
    }
    else {
        return defaultFeeds;
    }
}

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
    isDefault() {
        return this.get() == this.values[this.defaultIndex];
    }
    switch(shift) {
        let index = this.values.indexOf(this.get()) + shift;
        if (index < 0) {
            index = this.values.length - 1;
        }
        if (index >= this.values.length) {
            index = 0;
        }
        settingsDatabase.set(this.name, this.values[index]);
    }
}
class SettingsManager {
    constructor() {
        this.revision = this.getRevision();
        this.WIDE_MODE = new SettingBoolProperty(`wideMode`);
        this.CONTENT_WIDTH = new SettingDropdownProperty(`contentWidth`, [`650px`, `700px`, `750px`, `800px`, `900px`, `1000px`], 1);
        this.BIGGER_FONTS = new SettingBoolProperty(`biggerFonts`);
        this.NOTIFY_POPUP = new SettingBoolProperty(`notifyPopup`);
        this.REDIRECT_SUGGESTION = new SettingBoolProperty(`redirectSuggestion`);
        this.REDIRECT_FORCED = new SettingBoolProperty(`redirectForced`, false);
        // left sidebar
        this.SUB_FILTER = new SettingBoolProperty(`sidebarSubFilter`);
        this.SIDEBAR_CUSTOMS = new SettingBoolProperty(`sidebarCustoms`);
        this.SIDEBAR_RECENT = new SettingBoolProperty(`sidebarRecent`);
        this.SIDEBAR_SUBS = new SettingBoolProperty(`sidebarSubs`);
        this.SIDEBAR_RESOURCES = new SettingBoolProperty(`sidebarResources`);
        // common
        this.SCROLL_TO_TOP = new SettingBoolProperty(`scrollToTop`);
        this.COLLAPSE_AWARDS = new SettingBoolProperty(`collapseAwards`);
        this.COLLAPSE_AWARDS_COMPLETELY = new SettingBoolProperty(`collapseAwardsCompletely`, false);
        // feed sorts
        this.DEFAULT_FEED_HOME = new SettingDropdownProperty(`defaultFeedHome`, GetFeeds(FeedLocation.Home), 0);
        this.DEFAULT_FEED_POPULAR = new SettingDropdownProperty(`defaultFeedPopular`, GetFeeds(FeedLocation.Popular), 1);
        this.DEFAULT_FEED_ALL = new SettingDropdownProperty(`defaultFeedAll`, GetFeeds(FeedLocation.All), 0);
        this.DEFAULT_FEED_SUB = new SettingDropdownProperty(`defaultFeedSub`, GetFeeds(FeedLocation.Sub), 0);
        // feed
        this.FEED_BUTTONS = new SettingBoolProperty(`feedButtons`);
        this.FLAIR_BAR = new SettingBoolProperty(`flairbar`);
        this.COLLAPSE_HIGHLIGHTS = new SettingBoolProperty(`collapseHighlights`, false);
        this.BACKPLATES = new SettingBoolProperty(`backplates`);
        this.SELECTABLE_POSTS = new SettingBoolProperty(`selectablePosts`);
        this.UNWRAP_POST = new SettingBoolProperty(`unwrapPost`);
        this.SHOW_POST_AUTHOR = new SettingBoolProperty(`showPostAuthor`);
        this.SAVED_BOOKMARK_POSTS = new SettingBoolProperty(`savedBookmarkPosts`);
        this.SAVED_BOOKMARK_POSTS_SHOW_ALWAYAS = new SettingBoolProperty(`savedBookmarkPostsShowAlways`, false);
        // comments
        this.COMMENTS_SORT_BUTTONS = new SettingBoolProperty(`commentSortButtons`);
        this.COMMENTS_REMEMBER_SORT = new SettingBoolProperty(`commentRememberSort`);
        this.UNWRAP_MORE_REPLIES = new SettingBoolProperty(`unwrapMoreReplies`, false);
        this.USER_INFO = new SettingBoolProperty(`userInfo`);
        this.USER_TAGS = new SettingBoolProperty(`userTags`);
        this.SHOW_NAMES = new SettingBoolProperty(`showNames`);
        this.HIDE_SHARE = new SettingBoolProperty(`hideShare`);
        this.GHOSTED_COMMENTS = new SettingBoolProperty(`ghostedComments`);
        this.COLLAPSE_AUTOMODERATOR = new SettingBoolProperty(`collapseAutomoderator`);
        this.SAVED_BOOKMARK_COMMENTS = new SettingBoolProperty(`savedBookmarkComments`);
        this.SAVED_BOOKMARK_COMMENTS_SHOW_ALWAYAS = new SettingBoolProperty(`savedBookmarkCommentsShowAlways`, false);
        // Reload all pages with dirted settings
        window.addEventListener('storage', event => {
            if (this.isDirt()) {
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

;// CONCATENATED MODULE: ./src/modules/wideMode.ts




function renderWideMode(pageContainer, rightSidebar) {
    if (settings.WIDE_MODE.isDisabled())
        return;
    css.addStyle(wideMode/* default */.A, `wideMode`);
    css.addVar(`--pp-content-width`, settings.CONTENT_WIDTH.get());
    // prevent additional render when rightbar already moved
    if (rightSidebar.parentNode == pageContainer) {
        return;
    }
    const originContainer = rightSidebar.parentElement;
    let isWideMode = !(window.innerWidth >= 1392);
    // fix for context lookup
    observeFor(pageContainer, renderContextPopup, false);
    observeFor(originContainer, renderContextPopup, false);
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
// EXTERNAL MODULE: ./src/modules/sidebar/subFilter.less
var subFilter = __webpack_require__("./src/modules/sidebar/subFilter.less");
;// CONCATENATED MODULE: ./src/utils/svg.ts
const NONE_COLOR = 'none';
const CURRENT_COLOR = 'currentColor';
class SVGViewBox {
}
class SVGConfig {
    constructor() {
        this.strokeColor = CURRENT_COLOR;
        this.fillColor = NONE_COLOR;
    }
}
function buildSvg(graphic, w, h, config = {}) {
    const handle = document.createElement('div');
    handle.innerHTML = graphic;
    const svg = handle.firstChild;
    svg.setAttribute(`width`, `${w}px`);
    svg.setAttribute(`height`, `${h}px`);
    if (config.viewBox != undefined) {
        svg.setAttribute(`viewBox`, `0 0 ${config.viewBox.w} ${config.viewBox.h}`);
    }
    svg.setAttribute(`fill`, config?.fillColor ?? CURRENT_COLOR);
    svg.setAttribute(`stroke`, config?.strokeColor ?? CURRENT_COLOR);
    return svg;
}

;// CONCATENATED MODULE: ./src/modules/settings/prefs.ts

class PrefsKey {
}
PrefsKey.COMMENTS_CURRENT_SORT = `COMMENTS_CURRENT_SORT`;
PrefsKey.SUB_FILTER = `SUB_FILTER`;
const prefs = new Database(`PREFS`);

// EXTERNAL MODULE: ./resources/subFilter.svg
var resources_subFilter = __webpack_require__("./resources/subFilter.svg");
var subFilter_default = /*#__PURE__*/__webpack_require__.n(resources_subFilter);
// EXTERNAL MODULE: ./resources/subFilterClear.svg
var subFilterClear = __webpack_require__("./resources/subFilterClear.svg");
var subFilterClear_default = /*#__PURE__*/__webpack_require__.n(subFilterClear);
;// CONCATENATED MODULE: ./src/modules/sidebar/subFilter.ts







css.addStyle(subFilter/* default */.A);
let filter;
async function renderSubFilter(container) {
    if (checkIsRendered(container, `pp-sub-filter`))
        return;
    const filterContainer = appendNew(container, `div`, `pp_subFilter_container`);
    const createSubButton = (await dynamicElement(() => container.querySelector(`.left-nav-create-community-button`)));
    createSubButton.style.width = `65px`;
    const createSubText = await dynamicElement(() => createSubButton.querySelector(`.text-14`));
    createSubText.remove();
    createSubButton.replaceWith(filterContainer);
    filterContainer.append(createSubButton);
    const filterButton = appendNew(filterContainer, `div`, [`pp_subFilter`, `button`, `button-bordered`]);
    filterButton.setAttribute(`tabindex`, `0`);
    const sr = filterButton.attachShadow({ mode: 'open' });
    css.registry(sr);
    const span = appendNew(filterButton, `span`, [`flex`, `items-center`, `justify-center`, `pp_subFilter_span`]);
    sr.appendChild(span);
    const iconSpan = appendNew(span, `span`, [`flex`, `items-center`, `justify-center`]);
    const icon = buildSvg((subFilter_default()), 16, 16);
    iconSpan.append(icon);
    const inputContainer = appendNew(span, `div`, [`label-container`, `without-label`]);
    const inputSpan = appendNew(inputContainer, `span`, [`input-container`, `activated`]);
    const input = appendNew(inputSpan, `input`, `pp_subFilter_input`);
    input.type = `text`;
    input.placeholder = `Filter`;
    const clearContainer = appendNew(filterContainer, `div`, `pp_pp_subFilter_clearContainer`);
    const clearButton = appendNew(clearContainer, `button`, [`pp_subFilter_clear`, `button-plain`, `pp_hidden`]);
    const clearIcon = buildSvg((subFilterClear_default()), 16, 16);
    clearButton.append(clearIcon);
    filterButton.addEventListener(`focus`, () => {
        createSubButton.style.display = `none`;
    });
    filterButton.addEventListener(`focusout`, () => {
        createSubButton.style.display = `block`;
    });
    input.addEventListener(`input`, () => {
        const pattern = input.value.trim().toLowerCase();
        onChangeFilter(pattern);
        clearButton.classList.toggle(`pp_hidden`, pattern.length == 0);
    });
    clearButton.addEventListener(`click`, () => {
        input.value = ``;
        onChangeFilter(``);
        clearButton.classList.toggle(`pp_hidden`, true);
    });
    // init filter database
    if (filter != null) {
        filter.clear();
    }
    filter = new Map();
    const itemContainer = container.querySelector(`left-nav-communities-controller`).shadowRoot;
    itemContainer.querySelectorAll(`left-nav-community-item`).forEach(item => {
        filter.set(item.getAttribute(`prefixedname`).replace(`r/`, ``).toLowerCase(), item);
    });
    // init value
    const initPattern = prefs.get(PrefsKey.SUB_FILTER);
    if (!(initPattern instanceof Object)) {
        input.value = initPattern;
        onChangeFilter(initPattern);
        clearButton.classList.toggle(`pp_hidden`, initPattern.length == 0);
    }
}
function onChangeFilter(pattern) {
    prefs.set(PrefsKey.SUB_FILTER, pattern);
    filter.forEach((item, sub) => {
        if (sub.includes(pattern)) {
            item.style.removeProperty(`display`);
        }
        else {
            item.style.display = `none`;
        }
    });
}

;// CONCATENATED MODULE: ./src/modules/sidebar/sidebar.ts






css.addStyle(sidebar/* default */.A);
let resourcesInitialized = false;
function renderSidebar(sidebar) {
    sidebar.classList.add(`pp_defaultText`);
    observeFor(sidebar, (element) => {
        const customFeedsSection = element.matches(`faceplate-expandable-section-helper`) ? element : sidebar.querySelector(`faceplate-expandable-section-helper`);
        if (customFeedsSection == null)
            return;
        const customFeedsButton = sidebar.querySelector(`summary[aria-controls="multireddits_section"]`);
        if (customFeedsButton != null) {
            renderSidebarSection(customFeedsSection, settings.SIDEBAR_CUSTOMS, async () => {
                const openState = await dynamicElement(() => customFeedsSection.getAttribute(`open`));
                if (openState) {
                }
                return {
                    container: customFeedsSection,
                    button: customFeedsButton,
                    hr: customFeedsSection.nextElementSibling
                };
            });
            return true;
        }
    });
    observeFor(sidebar, (element) => {
        const subsSection = element.matches(`faceplate-expandable-section-helper`) ? element : sidebar.querySelector(`faceplate-expandable-section-helper`);
        if (subsSection == null)
            return;
        const customFeedsButton = sidebar.querySelector(`summary[aria-controls="communities_section"]`);
        if (customFeedsButton != null) {
            renderSubFilter(subsSection);
            renderSidebarSection(subsSection, settings.SIDEBAR_SUBS, async () => {
                const openState = await dynamicElement(() => subsSection.getAttribute(`open`));
                if (openState) {
                }
                let hrElement = subsSection.nextElementSibling;
                while (hrElement != null && !hrElement.matches(`hr`)) {
                    hrElement = hrElement.nextElementSibling;
                }
                return {
                    container: subsSection,
                    button: customFeedsButton,
                    hr: hrElement
                };
            });
            return true;
        }
    });
    observeFor(sidebar, (element) => {
        let recentSection = sidebar.querySelector(`reddit-recent-pages`);
        if (recentSection == null && element.matches(`reddit-recent-pages`)) {
            recentSection = element;
        }
        if (recentSection != null) {
            renderSidebarSection(recentSection, settings.SIDEBAR_RECENT, async () => {
                const helper = await dynamicElement(() => {
                    const _helper = recentSection.shadowRoot?.querySelector(`faceplate-expandable-section-helper`);
                    return _helper?.getAttribute(`open`) != null ? _helper : null;
                });
                const button = await dynamicElement(() => helper?.querySelector(`summary`));
                css.registry(recentSection.shadowRoot);
                helper.classList.add(`pp_defaultText`);
                return {
                    container: helper,
                    button: button,
                    hr: recentSection.querySelector(`hr`)
                };
            });
            return true;
        }
    });
    if (!resourcesInitialized) {
        resourcesInitialized = true;
        observeFor(sidebar, (element) => {
            const resources = sidebar.querySelector(`summary[aria-controls="RESOURCES"]`);
            if (resources != null) {
                const resourcesContainer = resources.parentElement.parentElement;
                const resourceSection = {
                    container: resourcesContainer,
                    button: resources,
                    hr: null
                };
                renderSidebarSection(resourcesContainer, settings.SIDEBAR_RESOURCES, () => resourceSection);
                return true;
            }
        });
    }
}
class SidebarSection {
}
async function renderSidebarSection(preloadContainer, setting, sectionLoader) {
    if (checkIsRendered(preloadContainer))
        return;
    preloadContainer.classList.add(`pp_sidebar_loadingSection`);
    const section = await sectionLoader();
    preloadContainer.classList.remove(`pp_sidebar_loadingSection`);
    if (setting.isEnabled()) {
        const settingCollapsed = setting.getChild(`Collapsed`, false);
        const details = section.container.querySelector(`details`);
        if (settingCollapsed.isEnabled()) {
            section.container.toggleAttribute(`open`, false);
            details.classList.add(`pp_sidebar_collapsedSection`);
        }
        section.button.addEventListener(`click`, (e) => {
            const button = e.currentTarget;
            // hack because event may be called before aria-expanded was changed
            setTimeout(() => {
                const isCollapsed = button.getAttribute(`aria-expanded`) === 'false';
                settingCollapsed.switch(isCollapsed);
            }, 10);
            details.classList.toggle(`pp_sidebar_collapsedSection`, false);
        });
    }
    else {
        section.container.remove();
        section.hr?.remove();
    }
}

// EXTERNAL MODULE: ./src/modules/biggerFonts.less
var biggerFonts = __webpack_require__("./src/modules/biggerFonts.less");
;// CONCATENATED MODULE: ./src/modules/biggerFonts.ts



if (settings.BIGGER_FONTS.isEnabled()) {
    css.addStyle(biggerFonts/* default */.A);
}
function renderBiggerFonts() { }

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
    if (settings.SAVED_BOOKMARK_COMMENTS.isDisabled())
        return;
    const contextMenuButton = comment.querySelector(`shreddit-overflow-menu`)?.shadowRoot?.querySelector(`faceplate-dropdown-menu`);
    const saveButton = contextMenuButton.querySelector(`.save-comment-menu-button`);
    const saveButtonContent = saveButton.querySelector(`.text-14`);
    saveButton.addEventListener(`click`, () => {
        renderCommentBookmark(comment, true);
    });
    let isSaved = saveButtonContent.textContent == `Remove from saved`;
    if (forced) {
        isSaved = true;
    }
    if (isSaved || forced || settings.SAVED_BOOKMARK_COMMENTS_SHOW_ALWAYAS.isEnabled()) {
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
    if (settings.SAVED_BOOKMARK_POSTS.isDisabled())
        return;
    const contextMenu = await dynamicElement(() => post.querySelector(`shreddit-post-overflow-menu`)?.shadowRoot?.querySelector(`faceplate-dropdown-menu`)?.querySelector(`faceplate-menu`), 3000);
    if (contextMenu == undefined) {
        return;
    }
    let isSaved = true;
    let saveButton = null;
    contextMenu.querySelectorAll(`li`).forEach(element => {
        const buttonSpan = element.querySelector(`.text-14`);
        if (buttonSpan.textContent == `Save`) {
            isSaved = false;
        }
        if (buttonSpan.textContent == `Save` || buttonSpan.textContent == `Remove from saved`) {
            saveButton = element;
        }
    });
    // just refresh bookmark button
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
    if (isSaved || forced || settings.SAVED_BOOKMARK_POSTS_SHOW_ALWAYAS.isEnabled()) {
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
async function renderCollapseAward(target, targetType) {
    if (settings.COLLAPSE_AWARDS.isDisabled())
        return;
    css.addStyle(collapseAwards/* default */.A, `collapseAwards`);
    const awardButton = targetType.isComment ? target.querySelector(`award-button`) : target.shadowRoot.querySelector(`award-button`);
    if (awardButton == null)
        return;
    if (settings.COLLAPSE_AWARDS_COMPLETELY.isEnabled()) {
        awardButton.remove();
        return;
    }
    if (awardButton.getAttribute(`count`) == `0`) {
        if (!targetType.isComment) {
            css.registry(target.shadowRoot);
        }
        const targetContainer = targetType.isComment ? target.querySelector(`shreddit-comment-action-row`)?.shadowRoot : target?.shadowRoot;
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

;// CONCATENATED MODULE: ./src/modules/subs/flair.ts

class FlairData {
}
class RichElement {
}
function renderFlair(conatiner, sub, flair) {
    const a = appendNew(conatiner, `a`, `no-decoration`);
    a.href = `/r/` + sub + `/?f=flair_name%3A%22` + flair.text + `%22`;
    const span = appendNew(a, `span`, [
        `bg-tone-4`,
        `inline-block`,
        `truncate`,
        `max-w-full`,
        `text-12`,
        `font-normal`,
        `box-border`,
        `px-[6px]`,
        `rounded-[20px]`,
        `leading-4`,
        `max-w-full`,
        `py-xs`,
        `!px-sm`,
        `leading-4`,
        `h-xl`,
        `inline-flex`
    ]);
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

// EXTERNAL MODULE: ./src/modules/subs/flairBar.less
var flairBar = __webpack_require__("./src/modules/subs/flairBar.less");
;// CONCATENATED MODULE: ./src/modules/subs/flairBar.ts







css.addStyle(flairBar/* default */.A);
async function renderFlairBar(main) {
    if (settings.FLAIR_BAR.isDisabled())
        return;
    let feedContent = await dynamicElement(() => main?.querySelector(`shreddit-title`)?.parentElement, MAX_LOAD_LAG);
    // skip render for non feed page
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
    // load data
    const subData = await subs_subs.getWithLoader(sub);
    const flairsData = flairs.get(sub);
    // skip render when sub haven't flairs
    if (subData.flairs == undefined || subData.flairs.length == 0)
        return;
    const flairMenuContainer = document.createElement(`div`);
    feedContent.before(flairMenuContainer);
    const flairMenu = appendNew(flairMenuContainer, `div`, `pp_flairBar`);
    if (subHighlights != null) {
        flairMenu.classList.add(`pp_flairBar_highlights`);
    }
    const ul = appendNew(flairMenu, `ul`, [`p-0`, `m-0`, `list-none`, `gap-xs`, `flex`, `flex-row`, `pp_flairBar_list`]);
    let flairsRendered = 0;
    for (const flair of subData.flairs) {
        if (flairsData.hidden != undefined && flairsData.hidden.includes(flair.text))
            continue;
        const li = appendNew(ul, `li`, `max-w-full`);
        renderFlair(li, sub, flair);
        flairsRendered++;
    }
    // prevent render empty menu
    if (flairsRendered == 0) {
        flairMenuContainer.remove();
        return;
    }
    // borders
    const borderContainer = document.createElement(`div`);
    borderContainer.classList.add(`pp_flairBar_bordersContainer`);
    flairMenuContainer.prepend(borderContainer);
    const borderLeftC = appendNew(borderContainer, `div`, `pp_flairBar_preBorder`);
    const borderLeft = appendNew(borderLeftC, `div`, [`pp_flairBar_border`, `pp_flairBar_border_left`]);
    borderLeft.textContent = ` `;
    const borderRightC = appendNew(borderContainer, `div`, `pp_flairBar_preBorder`);
    const borderRight = appendNew(borderRightC, `div`, [`pp_flairBar_border`, `pp_flairBar_border_right`]);
    borderRight.textContent = ` `;
    const hr = document.createElement(`hr`);
    hr.classList.add(`border-0`, `border-b-sm`, `border-solid`, `border-b-neutral-border-weak`);
    flairMenuContainer.prepend(hr);
    const mymx = document.createElement(`div`);
    mymx.classList.add(`my-xs`, `mx-2xs0`);
    flairMenuContainer.prepend(mymx);
    // navigation
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
// EXTERNAL MODULE: ./src/utils/window.less
var utils_window = __webpack_require__("./src/utils/window.less");
// EXTERNAL MODULE: ./src/utils/checkbox.less
var utils_checkbox = __webpack_require__("./src/utils/checkbox.less");
// EXTERNAL MODULE: ./resources/windowCloseButton.svg
var windowCloseButton = __webpack_require__("./resources/windowCloseButton.svg");
var windowCloseButton_default = /*#__PURE__*/__webpack_require__.n(windowCloseButton);
;// CONCATENATED MODULE: ./src/utils/window.ts






css.addStyle(utils_window/* default */.A);
css.addStyle(utils_checkbox/* default */.A);
class Window {
    constructor(tittle, render, onClose = null) {
        this.tittle = tittle;
        this.render = render;
        this.onClose = onClose;
        this.container = null;
        this.content = null;
        this.closeButton = null;
    }
    build() {
        this.container = document.createElement(`div`);
        this.container.classList.add(`pp_window_container`);
        this.container.addEventListener('click', e => {
            if (e.target == this.container) {
                this.close();
            }
        });
        const win = appendNew(this.container, `div`, `pp_window`);
        const tittleContainer = appendNew(win, `div`, `pp_window_tittleContainer`);
        let tittle = appendNew(tittleContainer, `div`, [`pp_window_tittle`, `flex`, `flex-row`]);
        tittle = appendNew(tittle, `span`, [`text-24`, `font-semibold`]);
        tittle.textContent = this.tittle;
        this.closeButton = appendNew(tittleContainer, `div`, [`pp_window_closeButton`, `flex`, `items-center`]);
        this.closeButton = appendNew(this.closeButton, `button`, [`button`, `icon`, `inline-flex`, `items-center`, `justify-center`, `button-small`, `button-secondary`, `px-[var(--rem6)]`]);
        this.closeButton.setAttribute(`tittle`, `Close ${this.tittle}`);
        this.closeButton.addEventListener('click', e => {
            this.close();
        });
        this.closeButton = appendNew(this.closeButton, `span`, [`flex`, `items-center`, `justify-center`]);
        this.closeButton = appendNew(this.closeButton, `span`, [`flex`]);
        const svg = buildSvg((windowCloseButton_default()), 16, 16, { strokeColor: NONE_COLOR });
        this.closeButton.append(svg);
        appendNew(win, `hr`, `border-b-neutral-border-weak`);
        this.content = appendNew(win, `div`, `pp_window_content`);
        appendNew(win, `div`, `pp_window_footer`).textContent = ` `;
    }
    open(context = null) {
        if (this.container == null) {
            this.build();
        }
        while (this.content.firstChild) {
            this.content.removeChild(this.content.lastChild);
        }
        this.render(this, context);
        document.body.appendChild(this.container);
        document.body.style.overflow = 'hidden';
    }
    close() {
        this.container.remove();
        document.body.style.overflow = 'visible';
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
function renderFlairsWindow(win, context) {
    const titlePanel = appendNew(win.content, `div`, [`pp_window_element`, `pp_flairWindow_columnTittle`]);
    const tittleBarArea = appendNew(titlePanel, `div`, `pp_checkBox_panelArea`);
    const tittleBar = appendNew(tittleBarArea, `div`, [`text-14`, `font-semibold`, `mb-xs`]);
    tittleBar.textContent = `Flairs bar:`;
    const tittleFeedArea = appendNew(titlePanel, `div`, `pp_checkBox_panelArea`);
    const tittleFeed = appendNew(tittleFeedArea, `div`, [`text-14`, `font-semibold`, `mb-xs`]);
    tittleFeed.textContent = `Feed:`;
    const scroll = appendNew(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);
    const elements = appendNew(scroll, `div`, `pp_window_elementsContainer`);
    const subData = subs_subs.get(context.sub);
    for (const flair of subData.flairs) {
        const panel = appendNew(elements, `div`, `pp_window_element`);
        const flairContainer = appendNew(panel, `div`, `pp_flairWindow_flairContainer`);
        const flairsDataInit = flairs.get(context.sub);
        addFlairToggle(FLAIR_HIDDEN);
        addFlairToggle(FLAIR_BANNED);
        function addFlairToggle(category) {
            const checkboxArea = appendNew(panel, `div`, `pp_checkBox_panelArea`);
            const checkBoxContainer = appendNew(checkboxArea, `div`, `pp_checkBox_container`);
            const checkBoxBack = appendNew(checkBoxContainer, `button`, `pp_checkBox_button`);
            const initState = !(flairsDataInit[category]?.includes(flair.text) ?? false);
            checkBoxBack.classList.toggle(`pp_checkBox_buttonActive`, initState);
            const knob = appendNew(checkBoxBack, `div`, `pp_checkBox_knob`);
            checkBoxBack.addEventListener(`click`, e => {
                const flairData = flairs.get(context.sub);
                let state = flairData[category]?.includes(flair.text) ?? false;
                checkBoxBack.classList.toggle(`pp_checkBox_buttonActive`, state);
                if (state) {
                    flairData[category] = flairData[category].filter(f => f != flair.text);
                }
                else {
                    const categoryFlairs = flairData[category] ?? [];
                    categoryFlairs.push(flair.text);
                    flairData[category] = categoryFlairs;
                }
                flairs.set(context.sub, flairData);
            });
        }
        // flair
        renderFlair(flairContainer, context.sub, flair);
    }
}
function closeFlairsWindow() {
    const main = document.body.querySelector(`#main-content`);
    renderFlairBar(main);
}

;// CONCATENATED MODULE: ./src/modules/subs/subs.ts









css.addStyle(subs/* default */.A);
const FLAIR_HIDDEN = `hidden`;
const FLAIR_BANNED = `banned`;
class SubSettings {
}
class SubFlairsData {
}
class SubData {
}
const subSettings = new Database(`SUBS_SETTINGS`);
const flairs = new Database(`FLAIRS`);
const subs_subs = new Database(`SUBS`, { isCleanupable: true, validator: subDataValidator, loader: subDataLoader });
function subDataValidator(subData) {
    return subData.flairs == undefined;
}
async function subDataLoader(sub) {
    let subData = {};
    const response = await fetch(`https://www.reddit.com/r/${sub}/api/link_flair_v2.json?raw_json=1`, { cache: `no-cache`, method: `get` });
    const json = await response.json();
    const loadedFlairs = [];
    if (json != null && json.message == null) {
        for (const loadedFlair of json) {
            const flair = { text: loadedFlair.text, color: loadedFlair.text_color, background: loadedFlair.background_color, richtext: loadedFlair.richtext };
            loadedFlairs.push(flair);
        }
        subData.flairs = loadedFlairs;
        return subData;
    }
    else {
        subData.flairs = loadedFlairs;
        pp_log(`Unable to load r/${sub} flairs data`);
        return subData;
    }
}
function getCurrentSub() {
    const raw = window.location.href.split(`reddit.com/r/`);
    return raw.length > 1 ? raw[1].split(`/`)[0] : null;
}
async function renderSub(main) {
    // skip page without feed
    const checkIsFeed = main.querySelector(`shreddit-feed-error-banner`);
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
    const highlightButton = await dynamicElement(() => main?.querySelector(`community-highlight-carousel`)?.shadowRoot?.querySelector(`button`), MAX_LOAD_LAG);
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
    // flairs settings
    const menuFlairsButton = originButton.cloneNode(true);
    menuFlairsButton.querySelector(`.text-14`).textContent = `Flairs settings`;
    controlMenu.prepend(menuFlairsButton);
    const sub = getCurrentSub();
    menuFlairsButton.addEventListener(`click`, () => {
        flairsWindow.open({ sub: sub });
    });
    // about
    const link = document.createElement(`a`);
    link.href = `https://www.reddit.com/` + targetElement.getAttribute(`prefixed-name`) + `/about/`;
    link.classList.add(`no-underline`);
    controlMenu.prepend(link);
    const menuAboutButton = originButton.cloneNode(true);
    menuAboutButton.querySelector(`.text-14`).textContent = `About`;
    link.prepend(menuAboutButton);
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
    try {
        const response = await fetch(`https://oauth.reddit.com/user/${userId}/about.json`, { cache: `no-cache`, method: `get` });
        if (!response.ok) {
            pp_log(`Failed to load user (${userId}) data with code ${response.status} : ${response.statusText}`);
            
            return userData;
        }
        const json = await response.json();
        if (json.data?.is_suspended == true || json.data?.is_blocked == true) {
            userData.banned = true;
            return userData;
        }
        userData.rating = (json.data?.link_karma ?? 0) + (json.data?.comment_karma ?? 0) / 2;
        if (json.data?.subreddit?.title) {
            userData.nick = json.data.subreddit.title;
        }
        userData.created = json.data?.created ?? 0;
        userData.accountId = json.kind + `_` + json.data?.id;
        return userData;
    }
    catch (e) {
        pp_log(`Failed to load user (${userId}) data with error ${e}`);
        
        return userData;
    }
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
async function renderUserInfo(userId, nickName, tagsAnchor, infoAnchor, target) {
    if (settings.USER_INFO.isDisabled())
        return;
    
    await dynamicElement(() => (loadQueueLock ? null : true));
    loadQueueLock = true;
    const userData = await users.getWithLoader(userId, isLoaded => {
        if (isLoaded) {
            setTimeout(() => {
                loadQueueLock = false;
            }, 150 + Math.random() * 100);
        }
        else {
            loadQueueLock = false;
        }
    });
    
    if (settings.SHOW_NAMES.isEnabled() && userData.nick != undefined && userData.nick) {
        nickName.textContent = userData.nick;
    }
    const rating = document.createElement(`div`);
    rating.classList.add(`text-neutral-content-weak`, `text-12`);
    if (userData.rating != undefined) {
        rating.textContent = userData.rating < 10000 ? `${Math.round(userData.rating / 100) / 10}K` : `${Math.round(userData.rating / 1000)}K`;
        infoAnchor.after(rating);
        const point = document.createElement(`span`);
        if (target.isComment) {
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

// EXTERNAL MODULE: ./src/modules/posts/posts.less
var posts = __webpack_require__("./src/modules/posts/posts.less");
// EXTERNAL MODULE: ./src/modules/posts/postsBackplates.less
var postsBackplates = __webpack_require__("./src/modules/posts/postsBackplates.less");
// EXTERNAL MODULE: ./resources/postUnwrapButton.svg
var postUnwrapButton = __webpack_require__("./resources/postUnwrapButton.svg");
var postUnwrapButton_default = /*#__PURE__*/__webpack_require__.n(postUnwrapButton);
;// CONCATENATED MODULE: ./src/modules/posts/posts.ts













css.addStyle(posts/* default */.A);
if (settings.BACKPLATES.isEnabled()) {
    css.addStyle(postsBackplates/* default */.A);
}
async function renderPost(post) {
    if (checkIsRendered(post))
        return;
    checkVisability(post);
    applyShadowRoot(post);
    renderHeader(post);
    renderContent(post);
    renderShareButtonPost(post);
    renderBookmarkPost(post);
    const award = await dynamicElement(() => post.shadowRoot?.querySelector(`award-button`), MAX_LOAD_LAG);
    if (award != null) {
        renderCollapseAward(post, IS_POST);
    }
    if (settings.SELECTABLE_POSTS.isEnabled()) {
        post.querySelector(`a[slot="full-post-link"]`)?.remove();
        const tittle = await dynamicElement(() => post.querySelector(`a[slot="title"]`), MAX_LOAD_LAG);
        tittle?.classList?.add(`pp_post_tittle`);
    }
    
}
async function checkVisability(post) {
    if (window.location.href.includes(`/comments/`)) {
        return;
    }
    const sub = post.getAttribute(`subreddit-prefixed-name`).replace(`r/`, ``);
    const flairData = flairs.get(sub);
    const postFlair = await dynamicElement(() => post.querySelector(`shreddit-post-flair`)?.querySelector(`a`), MAX_LOAD_LAG);
    if (postFlair != null) {
        const postFlairText = decodeURIComponent(postFlair.href.split(`%22`)[1]);
        if (flairData.banned != undefined && flairData.banned.includes(postFlairText)) {
            const next = await dynamicElement(() => post.parentElement.nextElementSibling, MAX_LOAD_LAG);
            post.remove();
            next?.remove();
        }
    }
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
    if (post.getAttribute(`view-context`) == `AggregateFeed`) {
        if (settings.SHOW_POST_AUTHOR.isDisabled())
            return;
        const anchor = await dynamicElement(() => post.querySelector(`span[slot="credit-bar"]`)?.querySelector(`.created-separator`), MAX_LOAD_LAG);
        const userNameLink = document.createElement(`a`);
        userNameLink.classList.add(`flex`, `items-center`, `text-neutral-content`, `visited:text-neutral-content-weak`, `a`, `cursor-pointer`, `no-visited`, `no-underline`, `hover:no-underline`);
        userNameLink.setAttribute(`href`, `/user/${author}/`);
        anchor.before(userNameLink);
        const userName = appendNew(userNameLink, `div`, [`text-neutral-content-weak`, `text-12`]);
        userName.textContent = author;
        const point = document.createElement(`span`);
        point.classList.add(`inline-block`, `my-0`, `created-separator`, `text-neutral-content-weak`);
        point.textContent = `•`;
        userNameLink.before(point);
        // userInfo
        renderUserInfo(author, userName, anchor, anchor, IS_POST);
    }
    else {
        // userInfo
        const creditBar = await dynamicElement(() => post.querySelector(`span[slot="credit-bar"]`), MAX_LOAD_LAG);
        const userName = await dynamicElement(() => creditBar.querySelector(`span[slot="authorName"]`)?.querySelector(`a`)?.querySelector(`.whitespace-nowrap`), MAX_LOAD_LAG);
        const anchor = await dynamicElement(() => creditBar.querySelector(`.created-separator`), MAX_LOAD_LAG);
        renderUserInfo(author, userName, anchor, anchor, IS_POST);
    }
}
async function renderContent(post) {
    const postContent = await dynamicElement(() => post.querySelector(`.feed-card-text-preview`), MAX_LOAD_LAG);
    if (postContent == null)
        return;
    if (settings.SELECTABLE_POSTS.isEnabled()) {
        postContent.parentElement.parentElement.removeAttribute(`href`);
    }
    // fix bad formated text
    postContent.classList.remove(`feed-card-text-preview`);
    // forced load preview images
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
    renderUnwrapPostButton(post, postContent);
}
async function renderUnwrapPostButton(post, postContent) {
    // hack to await when post loaded properly
    const postShadowRoot = await dynamicElement(() => post.shadowRoot, MAX_LOAD_LAG);
    const renderedHeight = postContent.getBoundingClientRect().height;
    postContent.classList.add(`pp_post_noWrap`);
    const actualHeight = postContent.getBoundingClientRect().height;
    postContent.classList.remove(`pp_post_noWrap`);
    if (actualHeight > renderedHeight + 5) {
        const unwrapContainer = appendNew(post, `div`, `pp_post_unwrapContainer`);
        post.shadowRoot.append(unwrapContainer);
        const unwrapButton = appendNew(unwrapContainer, `div`, `pp_post_unwrapButton`);
        const unwrapIcon = buildSvg((postUnwrapButton_default()), 25, 25);
        unwrapButton.append(unwrapIcon);
        unwrapButton.addEventListener(`click`, () => {
            postContent.classList.add(`pp_post_noWrap`);
            unwrapContainer.remove();
        }, { once: true });
    }
}

// EXTERNAL MODULE: ./src/modules/feed/feedButtons.less
var feedButtons = __webpack_require__("./src/modules/feed/feedButtons.less");
// EXTERNAL MODULE: ./resources/feedButtons/feedButtonBest_empty.svg
var feedButtonBest_empty = __webpack_require__("./resources/feedButtons/feedButtonBest_empty.svg");
var feedButtonBest_empty_default = /*#__PURE__*/__webpack_require__.n(feedButtonBest_empty);
// EXTERNAL MODULE: ./resources/feedButtons/feedButtonBest.svg
var feedButtonBest = __webpack_require__("./resources/feedButtons/feedButtonBest.svg");
var feedButtonBest_default = /*#__PURE__*/__webpack_require__.n(feedButtonBest);
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
;// CONCATENATED MODULE: ./src/modules/feed/feedRedirect.ts



function GetDefaultFeedProperty(location) {
    switch (location) {
        case FeedLocation.Home:
            return settings.DEFAULT_FEED_HOME;
        case FeedLocation.Popular:
            return settings.DEFAULT_FEED_POPULAR;
        case FeedLocation.All:
            return settings.DEFAULT_FEED_ALL;
        default:
            return settings.DEFAULT_FEED_SUB;
    }
}
function IsUnsetedFeed() {
    if (window.location.href == `https://www.reddit.com/`)
        return true;
    if (window.location.href.includes(`/?f=flair_name`))
        return false;
    if (window.location.href.includes(`?feed=home`)) {
        return window.location.href.includes(`reddit.com/?feed=home`);
    }
    else {
        return window.location.href.split(`/r/`)[1].split(`/`).length < 3;
    }
}
function CheckFeedRedirect(location, sort) {
    if (location == FeedLocation.Sub) {
        const currentSubSettings = subSettings.get(getCurrentSub());
        if (currentSubSettings.defaultFeed != undefined) {
            return currentSubSettings.defaultFeed == sort;
        }
    }
    const defaultFeedProperty = GetDefaultFeedProperty(location);
    return (!defaultFeedProperty.isDefault() && defaultFeedProperty.get() == sort);
}

;// CONCATENATED MODULE: ./src/modules/feed/feedButtons.ts















css.addStyle(feedButtons/* default */.A);
const BUTTONS_SVG = {
    Best: (feedButtonBest_default()),
    Hot: (feedButtonHot_default()),
    New: (feedButtonNew_default()),
    Top: (feedButtonTop_default()),
    Rising: (feedButtonRising_default())
};
const BUTTON_CLASSES = [
    `inline-flex`,
    `flex-col`,
    `text-neutral-content-weak`,
    `font-semibold`,
    `rounded-full`,
    `hover:no-underline`,
    `hover:bg-secondary-background-hover`,
    `hover:text-secondary-content`,
    `active:bg-secondary-background`,
    `pl-[var(--rem16)]`,
    `pr-[var(--rem16)]`
];
async function renderFeedButtons(main, feedDropdown) {
    if (settings.FEED_BUTTONS.isDisabled())
        return;
    if (checkIsRendered(main))
        return;
    // get current feed
    const currentFeed = feedDropdown?.querySelector(`div[slot="selected-item"]`)?.textContent;
    feedDropdown?.remove();
    const location = GetFeedLocation();
    // get container
    let buttonsContainer = null;
    let hrefGenerator = null;
    if (location != FeedLocation.Sub) {
        const originContainer = await dynamicElement(() => main.querySelector(`shreddit-layout-event-setter`)?.parentElement);
        originContainer.classList.add(`pp_feedButtonsContainer`);
        buttonsContainer = document.createElement(`div`);
        buttonsContainer.classList.add(`flex`, `mx-md`, `shrink-0`, `pp_feedContainer`);
        originContainer.prepend(buttonsContainer);
        if (location == FeedLocation.Home) {
            hrefGenerator = feed => {
                return `/${feed.toLowerCase()}/?feed=home`;
            };
        }
        else {
            hrefGenerator = feed => {
                return `/r/${(location == FeedLocation.Popular) ? `popular` : `all`}/${feed.toLowerCase()}/`;
            };
        }
    }
    else {
        const aboutContainer = await dynamicElement(() => main.querySelector(`a[slot="page-3"]`)?.parentElement?.parentElement);
        buttonsContainer = document.createElement(`div`);
        buttonsContainer.classList.add(`flex`, `mx-md`, `shrink-0`, `pp_feedContainer`);
        aboutContainer.before(buttonsContainer);
        aboutContainer.remove();
        const subName = getCurrentSub();
        hrefGenerator = feed => {
            return `/r/${subName}/${feed.toLowerCase()}/`;
        };
        // render default feed dropdown
        const feedpanel = buttonsContainer.parentElement;
        feedpanel.classList.toggle(`justify-between`, false);
        feedpanel.classList.toggle(`flex-wrap`, false);
        feedpanel.classList.toggle(`pp_feedPanel`, true);
        const space = document.createElement(`div`);
        space.classList.add(`pp_feedPanel_space`);
        buttonsContainer.after(space);
        let currentSubSettings = subSettings.get(subName);
        const isDefault = (currentSubSettings.defaultFeed == undefined) ? (currentFeed == settings.DEFAULT_FEED_SUB.get()) : (currentFeed == currentSubSettings.defaultFeed);
        const defaultFeedMark = document.createElement(`div`);
        defaultFeedMark.classList.add(`pp_defaultFeed_mark`);
        let svg = buildSvg(isDefault ? (feedButtonBest_default()) : (feedButtonBest_empty_default()), 16, 16);
        defaultFeedMark.append(svg);
        space.after(defaultFeedMark);
        const defaultFeedMarkHint = appendNew(defaultFeedMark, `div`, `pp_defaultFeed_mark_hint`);
        const defaultFeedMarkHintSpan = appendNew(defaultFeedMarkHint, `span`);
        defaultFeedMarkHintSpan.textContent = isDefault ? `${currentFeed} is default feed for r/${subName}` : `Set ${currentFeed} as default feed for r/${subName}`;
        if (!isDefault) {
            defaultFeedMark.addEventListener(`click`, () => {
                const updatedSvg = buildSvg((feedButtonBest_default()), 16, 16);
                svg.replaceWith(updatedSvg);
                defaultFeedMarkHintSpan.textContent = `${currentFeed} is default feed for r/${subName}`;
                currentSubSettings.defaultFeed = currentFeed;
                subSettings.set(subName, currentSubSettings);
            }, { once: true });
        }
    }
    // render buttons
    const feeds = GetFeeds(location);
    const isUnseted = IsUnsetedFeed();
    for (const feed of feeds) {
        const button = appendNew(buttonsContainer, `a`, BUTTON_CLASSES);
        button.href = hrefGenerator(feed);
        const isCurrent = feed == currentFeed;
        button.classList.toggle(`bg-secondary-background-selected`, isCurrent);
        button.classList.toggle(`!text-neutral-content-strong`, isCurrent);
        const spanContainer = appendNew(button, `span`, [`inline-flex`, `flex-row`, `items-center`, `gap-xs`, `py-[var(--rem10)]`, `leading-5`, `font-14`, `pp_feedButton`]);
        let graphic = BUTTONS_SVG[feed];
        if (graphic != null) {
            let svg = buildSvg(graphic, 16, 16);
            spanContainer.append(svg);
        }
        const spanText = appendNew(spanContainer, `span`);
        spanText.textContent = feed;
        if (isUnseted && CheckFeedRedirect(location, feed)) {
            button.click();
        }
    }
}

;// CONCATENATED MODULE: ./src/modules/feed/feed.ts





let postObserver = null;
async function renderFeed(container) {
    // skip user page
    if (window.location.href.includes(`/user/`))
        return;
    const main = await dynamicElement(() => container.querySelector(`#subgrid-container`));
    // render embedded posts
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
    // render loaded posts
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
                    // load r/all posts
                    if (node.matches(`article`)) {
                        renderPost(node.querySelector(`shreddit-post`));
                    }
                }
            }
        }
    });
    postObserver.observe(main, { childList: true, subtree: true });
    renderSub(main);
    const feedDropdown = await dynamicElement(() => main.querySelector(`shreddit-sort-dropdown`), MAX_LOAD_LAG);
    // skip non feed page
    const isInvalidDropdown = (feedDropdown == null || feedDropdown.getAttribute(`trigger-id`) == `comment-sort-button`) && !window.location.href.includes(`/about/`);
    if (isInvalidDropdown)
        return;
    renderFeedButtons(main, feedDropdown);
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
        // reset pos
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
        const closeButton = appendNew(this.viewer, `div`, `pp_imageViewer_closeButton`);
        const closeSvg = buildSvg((imageCloseButton_default()), 40, 40);
        closeButton.appendChild(closeSvg);
        this.container = appendNew(this.viewer, `div`, `pp_imageViewer_imageContainer`);
        this.image = appendNew(this.container, `img`, `pp_imageViewer_image`);
        this.image.alt = `Comment image`;
        this.image.ondragstart = function () {
            return false;
        };
        // close
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
//
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
        pp_log(`Unable to render userTags`);
        return;
    }
    // clear old tags
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
    const tagHint = appendNew(tagHintContainer, `div`, `pp_tagHint`);
    tagHint.style.display = `none`;
    const tagsPanel = document.createElement(`div`);
    tagsPanel.classList.add(`pp_tagsPanel`);
    tagHintOffset.after(tagsPanel);
    USERTAG_CONFIGS.forEach((config, userTag) => {
        renderTagButton(config, userTag);
    });
    function renderTagButton(config, userTag) {
        const tagButton = appendNew(tagsPanel, `span`, `pp_tagButton`);
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
        // auto clear follow state
        if (context.userTag == UserTag.BLOCKED) {
            tagsData.tags = tagsData.tags.filter(t => t != UserTag.FOLLOWED);
        }
    }
    if (tagsData.tags.length > 1) {
        tagsData.tags.sort((firstItem, secondItem) => USERTAG_CONFIGS.get(firstItem).priority - USERTAG_CONFIGS.get(secondItem).priority);
    }
    tags.set(context.userId, tagsData);
    // refresh comments tags
    document.body.querySelectorAll(`shreddit-comment[author="${context.userId}"]`).forEach(comment => {
        renderUserTags(comment);
        if (isAdded && context.userTag == UserTag.BLOCKED) {
            comment.setAttribute(`collapsed`, ``);
        }
    });
    // execute specific operations
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
    // refresh context menu
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
    // hack to close other context menu
    document.body.click();
    let contextMenuButton = comment.querySelector(`shreddit-overflow-menu`).shadowRoot;
    css.registry(contextMenuButton);
    const contextMenu = contextMenuButton.querySelector(`faceplate-menu`);
    const originButton = contextMenu.querySelector(`faceplate-tracker[noun="report"]`);
    if (settings.HIDE_SHARE.isEnabled()) {
        let linkButton = originButton.cloneNode(true);
        linkButton.querySelector(`span .text-14`).textContent = `Copy link`;
        originButton.before(linkButton);
        /*
        let linkPath = linkButton.querySelector(`path`);
        linkPath.setAttribute(`d`, linkGraphics[0].d);
        let linkPathB = linkPath.cloneNode(true) as Element;
        linkPathB.setAttribute(`d`, linkGraphics[1].d);
        linkPath.after(linkPathB);*/
        const originIcon = linkButton.querySelector(`svg`);
        const shareIcon = buildSvg((shareButton_default()), 20, 20);
        originIcon.replaceWith(shareIcon);
        const permalink = comment.getAttribute(`permalink`);
        linkButton.addEventListener(`click`, () => {
            navigator.clipboard.writeText(`https://www.reddit.com${permalink}`);
            notify(`Link copied`);
        });
    }
    // close context menu
    let openButton = contextMenuButton.querySelector(`button`);
    openButton.addEventListener(`click`, () => {
        document.body.click();
    });
    // userTags
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
    // if there is no sort query param, then it is the default sort (confidence)
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
    const searchSpan = await dynamicElement(() => container.querySelector(`comment-body-header`)?.querySelector(`pdp-comment-search-input`)?.shadowRoot?.querySelector(`.pr-xs`), MAX_LOAD_LAG);
    if (checkIsRendered(sortContainer)) {
        return;
    }
    sortContainer.querySelector(`shreddit-sort-dropdown`).classList.add(`pp_sortDropdown_hidden`);
    searchSpan.textContent = `Search`;
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
        const button = appendNew(sortContainer, `div`, `pp_sortButton`);
        button.classList.toggle(`pp_sortButton_active`, sort == currentSort);
        button.setAttribute(`commentSort`, sort);
        button.addEventListener(`click`, () => {
            switchSort(sort);
        });
        const iconSpan = appendNew(button, `span`);
        const iconSvg = buildSvg(config.icon, 16, 16);
        iconSpan.append(iconSvg);
        const labelSpan = appendNew(button, `span`);
        labelSpan.textContent = config.overrideName != undefined ? config.overrideName : sort;
    }
    sortButtonsRendered = true;
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
            // refresh buttons
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
            // loadable replies
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
            // redirectable replies
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
    // intersections
    if (rootIntersector != null) {
        rootIntersector.disconnect();
        
    }
    else {
        rootIntersector = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    renderComment(entry.target.parentElement);
                    // registry childs when root becomes visible
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
    // mutations
    if (commentsMutations != null) {
        commentsMutations.disconnect();
    }
    else {
        commentsMutations = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node instanceof HTMLElement) {
                        // static comments
                        const commentTree = node.parentElement?.querySelector(`shreddit-comment-tree`);
                        if (commentTree != null) {
                            registryAllRoots(commentTree);
                            // singal to commentsSort buttons that comments refreshed
                            OnCommentsTreeLoaded();
                        }
                        // dynamic comments
                        if (node.matches(`shreddit-comment`)) {
                            if (node.getAttribute(`depth`) == `0`) {
                                registryRoot(node);
                            }
                            else {
                                registryComment(node);
                                registryAllComments(node);
                            }
                        }
                    }
                }
            }
        });
    }
    commentsMutations.observe(container, { childList: true, subtree: true });
    // sort buttons
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
    
    // collapse automoderator and pinned mods
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
    // unwrap moreComments
    setTimeout(() => {
        renderMoreReplies(comment);
    }, 150);
    // add anchors
    const nickname = comment.querySelector(`div[slot="commentMeta"]`).querySelector(`faceplate-hovercard[data-id="user-hover-card"]`);
    // skip [deleted]
    if (nickname == null)
        return;
    const tagsAnchor = document.createElement(`div`);
    tagsAnchor.setAttribute(`pp-anchor`, `tags`);
    nickname.parentElement.querySelector(`.ml-2xs`).after(tagsAnchor);
    const time = await dynamicElement(() => nickname.parentElement.querySelector(`time`)?.parentElement?.parentElement, MAX_LOAD_LAG);
    const infoAnchor = document.createElement(`div`);
    infoAnchor.setAttribute(`pp-anchor`, `info`);
    time?.before(infoAnchor);
    // make ghosted when karma below zero
    if (settings.GHOSTED_COMMENTS.isEnabled() && parseInt(comment.getAttribute(`score`)) < 0) {
        comment.querySelector(`div[slot="commentAvatar"]`).classList.add(`pp_muted_avatar`);
        comment.querySelector(`faceplate-tracker[noun="comment_author"]`).querySelector(`a`).style.color = `#a5a5a5`;
        commentBody.classList.add(`pp_muted_content`);
    }
    // registry image
    const imageContainer = commentBody.querySelector(`figure[class="rte-media"]`);
    if (imageContainer != null) {
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
    renderCollapseAward(comment, IS_COMMENT);
    renderUserTags(comment);
    const userId = comment.getAttribute(`author`);
    const userName = comment.querySelector(`faceplate-tracker[noun="comment_author"]`).querySelector(`a`);
    renderUserInfo(userId, userName, tagsAnchor, infoAnchor, IS_COMMENT);
    const contextMenuButton = await dynamicElement(() => comment.querySelector(`shreddit-overflow-menu`)?.shadowRoot?.querySelector(`faceplate-dropdown-menu`));
    renderCommentBookmark(comment);
    contextMenuButton.addEventListener(`click`, () => {
        contextMenu_renderContextMenu(comment);
    }, { once: true });
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
let isWide = false;
let isBottom = false;
let contentBlock = null;
function renderScrollToTop() {
    if (settings.SCROLL_TO_TOP.isDisabled())
        return;
    css.addStyle(scrollToTop/* default */.A, `scrollToTop`);
    const main = document.body.querySelector(`.main-container`).parentElement;
    contentBlock = document.body.querySelector(`.main-container`);
    scrollToTop_scrollToTop = appendNew(main.parentElement, `div`, `pp_scrollToTop`);
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
        refreshScrollToTop();
    });
    window.addEventListener('resize', event => {
        checkScreenWidth();
    });
    let prevIsBottom = false;
    setInterval(() => {
        isBottom = window.scrollY > START_Y;
        if (isBottom != prevIsBottom) {
            prevIsBottom = isBottom;
            refreshScrollToTop();
        }
    }, 330);
    checkScreenWidth();
}
function checkScreenWidth() {
    isWide = window.innerWidth > 1490;
    const rect = contentBlock.getBoundingClientRect();
    scrollToTop_scrollToTop.style.left = `${(300 + rect.left) / 2 - 50}px`;
    refreshScrollToTop();
}
function refreshScrollToTop() {
    const hidden = !(isWide && (isBottom || prevScrollHeight > 0));
    const inverted = !isBottom && prevScrollHeight > 0;
    scrollToTop_scrollToTop.classList.toggle(`pp_scrollToTop_hidden`, hidden);
    scrollToTop_scrollButton.classList.toggle(`pp_scrollToTop_inverted`, inverted);
}

;// CONCATENATED MODULE: ./src/modules/app.ts









async function renderApp() {
    css.addStyle(modules_app/* default */.A, `app`);
    const app = await dynamicElement(() => document.body.querySelector(`shreddit-app`)?.querySelector(`.grid-container`));
    if (checkIsRendered(app))
        return;
    renderFeed(document.body);
    renderComments(document.body);
    const leftSidebar = await dynamicElement(() => document.body.querySelector(`#left-sidebar-container`), 3000);
    renderSidebar(leftSidebar);
    const pageContainer = leftSidebar.parentElement;
    pageContainer.classList.add(`pp_pageContainer`);
    pageContainer.querySelector(`.subgrid-container`).classList.add(`pp_mainFeed`);
    const rightSidebar = await dynamicElement(() => document.body.querySelector(`#right-sidebar-container`));
    rightSidebar.classList.add(`pp_rightSidebar`);
    rightSidebar.classList.toggle(`styled-scrollbars`, true);
    renderWideMode(pageContainer, rightSidebar);
    renderBiggerFonts();
    renderScrollToTop();
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
            const subTittleContent = appendNew(subTittle, `span`, [`text-secondary-weak`, `font-normal`]);
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

// EXTERNAL MODULE: ./src/modules/settings/settingsWindow.less
var settingsWindow = __webpack_require__("./src/modules/settings/settingsWindow.less");
// EXTERNAL MODULE: ./resources/settingsArrow.svg
var settingsArrow = __webpack_require__("./resources/settingsArrow.svg");
var settingsArrow_default = /*#__PURE__*/__webpack_require__.n(settingsArrow);
;// CONCATENATED MODULE: ./src/modules/settings/settingsWindow.ts







css.addStyle(settingsWindow/* default */.A);
const settingsWindow_settingsWindow = new Window('Reddit++ Settings', renderSettingsWindow, closeSettingsWindow);
let changes = 0;
function renderSettingsWindow(win, context) {
    // hack to close user menu
    document.body.click();
    changes = 0;
    const changesBannerContainer = appendNew(win.content, `div`, `pp_settings_changesBannerContainer`);
    const changesBanner = appendNew(changesBannerContainer, `div`, `pp_settings_changesBanner`);
    changesBanner.textContent = `Page will be reloaded to apply new settings`;
    const scroll = appendNew(win.content, `div`, [`pp_window_scrollContent`, `styled-scrollbars`]);
    const elements = appendNew(scroll, `div`, `pp_window_elementsContainer`);
    addSettingToggle(`Wide mode`, `Make focus on the content by replacing right sidebar to screen border`, settings.WIDE_MODE);
    addSettingDropdown(`Content width`, null, settings.CONTENT_WIDTH);
    addSettingToggle(`Bigger fonts`, `Make fonts bigger for better reading`, settings.BIGGER_FONTS);
    addSettingToggle(`Better notify popup`, `Make notify popup a bit larger and remove useless button`, settings.NOTIFY_POPUP);
    addSettingToggle(`Redirect suggestion`, `Show suggestion to redirect from old.reddit and new.reddit to compatible pages`, settings.REDIRECT_SUGGESTION);
    addSettingToggle(`Redirect forced`, `Automatically redirect to compatible pages`, settings.REDIRECT_FORCED);
    addSubtittle(`Left sidebar`);
    addSettingToggle(`Sub filter`, `Tool for find subs on sidebar by name`, settings.SUB_FILTER);
    addSettingToggle(`Show Custom feeds`, null, settings.SIDEBAR_CUSTOMS);
    addSettingToggle(`Show Recent`, null, settings.SIDEBAR_RECENT);
    addSettingToggle(`Show Communities`, null, settings.SIDEBAR_SUBS);
    addSettingToggle(`Show Resources`, null, settings.SIDEBAR_RESOURCES);
    addSubtittle(`Common`);
    addSettingToggle(`Scroll to top button`, null, settings.SCROLL_TO_TOP);
    addSettingToggle(`Collapse Awards`, `Automatic collapse the award's button for none upvoted posts and comments`, settings.COLLAPSE_AWARDS);
    addSettingToggle(`Remove Awards`, `Remove the award's buttons completely`, settings.COLLAPSE_AWARDS_COMPLETELY);
    addSubtittle(`Default feeds`);
    addSettingDropdown(`Home`, null, settings.DEFAULT_FEED_HOME);
    addSettingDropdown(`Popular`, null, settings.DEFAULT_FEED_POPULAR);
    addSettingDropdown(`All`, null, settings.DEFAULT_FEED_ALL);
    addSettingDropdown(`Subreddit's`, null, settings.DEFAULT_FEED_SUB);
    addSubtittle(`Feed`);
    addSettingToggle(`Feed buttons`, `Unwrap feed sorting buttons`, settings.FEED_BUTTONS);
    addSettingToggle(`Flairs bar`, `Display available flairs to faster navigation. Specific flairs may be hidden via subreddit's flairs settings`, settings.FLAIR_BAR);
    addSettingToggle(`Collapse community highlights`, null, settings.COLLAPSE_HIGHLIGHTS);
    addSettingToggle(`Selectable text`, `Make a text selectable when posts viewed in feed`, settings.SELECTABLE_POSTS);
    addSettingToggle(`Unwrap button`, `Show the unwrap button for long-text posts in feed`, settings.UNWRAP_POST);
    addSettingToggle(`Soft background`, `Make the background of posts with soft gradient color`, settings.BACKPLATES);
    addSettingToggle(`Show post's author`, `Relates to Home, Popular and All feeds`, settings.SHOW_POST_AUTHOR);
    addSettingToggle(`Show bookmark`, `Show the bookmark button for saved and upvoted posts`, settings.SAVED_BOOKMARK_POSTS);
    addSettingToggle(`Show bookmark always`, `Show the bookmark button for all posts`, settings.SAVED_BOOKMARK_POSTS_SHOW_ALWAYAS);
    addSubtittle(`Comments`);
    addSettingToggle(`Sort buttons`, `Unwrap the comment's sort buttons`, settings.COMMENTS_SORT_BUTTONS);
    addSettingToggle(`Remember sort`, `Remember latest used comment's sort`, settings.COMMENTS_REMEMBER_SORT);
    addSettingToggle(`Unwrap "more replies"`, `Automatically unwrap more replies when it becomes visible`, settings.UNWRAP_MORE_REPLIES);
    addSettingToggle(`User info`, `Show user's karma and "new user" mark`, settings.USER_INFO);
    addSettingToggle(`User tags`, `Enable custom tags (sets via comment's context menu)`, settings.USER_TAGS);
    addSettingToggle(`Show nicknames`, `Use user's nicknames instead profile names`, settings.SHOW_NAMES);
    addSettingToggle(`Hide share button`, `Replace the share button to comment's context menu`, settings.HIDE_SHARE);
    addSettingToggle(`Ghosted comments`, `Make comments ghosted when comment's rating below zero`, settings.GHOSTED_COMMENTS);
    addSettingToggle(`Collapse unwanted`, `Automatic collapse all automoderator and mod's pinned comments`, settings.COLLAPSE_AUTOMODERATOR);
    addSettingToggle(`Show bookmark`, `Show the bookmark button for saved comments`, settings.SAVED_BOOKMARK_COMMENTS);
    addSettingToggle(`Show bookmark always`, `Show the bookmark button for all comments`, settings.SAVED_BOOKMARK_COMMENTS_SHOW_ALWAYAS);
    function addSubtittle(text) {
        const subtittle = appendNew(elements, `h3`, `pp_settings_subtittle`);
        subtittle.textContent = text;
    }
    function addSettingToggle(tittleText, descriptionText, setting) {
        const propertyArea = appendNew(elements, `div`, `pp_window_element`);
        const header = appendNew(propertyArea, `div`, `pp_settings_propertyHeader`);
        const tittle = appendNew(header, `div`, `pp_settings_propertyHeader_tittle`);
        tittle.textContent = tittleText;
        if (descriptionText != null) {
            const description = appendNew(header, `div`, `pp_settings_propertyHeader_description`);
            description.textContent = descriptionText;
        }
        else {
            propertyArea.classList.add(`pp_settings_property_oneLine`);
        }
        const buttonContainer = appendNew(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
        const toggleArea = appendNew(buttonContainer, `div`, `pp_checkBox_panelArea`);
        const toggleContainer = appendNew(toggleArea, `div`, `pp_checkBox_container`);
        const toggleBack = appendNew(toggleContainer, `button`, `pp_checkBox_button`);
        toggleBack.classList.toggle(`pp_checkBox_buttonActive`, setting.isEnabled());
        const knob = appendNew(toggleBack, `div`, `pp_checkBox_knob`);
        let changed = false;
        toggleBack.addEventListener(`click`, e => {
            const state = setting.isEnabled();
            toggleBack.classList.toggle(`pp_checkBox_buttonActive`, !state);
            setting.switch();
            changes += changed ? -1 : 1;
            changed = !changed;
            changesBannerContainer.classList.toggle(`pp_settings_changesBanner_active`, changes > 0);
        });
    }
    function addSettingDropdown(tittleText, descriptionText, setting) {
        const propertyArea = appendNew(elements, `div`, `pp_window_element`);
        const header = appendNew(propertyArea, `div`, `pp_settings_propertyHeader`);
        const tittle = appendNew(header, `div`, `pp_settings_propertyHeader_tittle`);
        tittle.textContent = tittleText;
        if (descriptionText != null) {
            const description = appendNew(header, `div`, `pp_settings_propertyHeader_description`);
            description.textContent = descriptionText;
        }
        else {
            propertyArea.classList.add(`pp_settings_property_oneLine`);
        }
        const buttonContainer = appendNew(propertyArea, `div`, `pp_settings_propertyButtonContainer`);
        const toggleArea = appendNew(buttonContainer, `div`, `pp_settings_arrowArea`);
        const leftButton = appendNew(toggleArea, `div`, [`pp_settings_arrow`, `pp_settings_arrowLeft`, `button`, `button-plain`, `button-medium`, `px-[var(--rem8)]`]);
        const leftButtonSvg = buildSvg((settingsArrow_default()), 20, 20);
        leftButton.append(leftButtonSvg);
        const dropdownCurrent = appendNew(toggleArea, `div`, [`text-secondary`, `font-normal`]);
        dropdownCurrent.textContent = setting.get();
        const rightButton = appendNew(toggleArea, `div`, [`pp_settings_arrow`, `button`, `button-plain`, `button-medium`, `px-[var(--rem8)]`]);
        const rightButtonSvg = buildSvg((settingsArrow_default()), 20, 20);
        rightButton.append(rightButtonSvg);
        const originValue = setting.get();
        let changed = false;
        leftButton.addEventListener(`click`, e => {
            switchList(-1);
        });
        rightButton.addEventListener(`click`, e => {
            switchList(1);
        });
        function switchList(shift) {
            setting.switch(shift);
            const currentValue = setting.get();
            dropdownCurrent.textContent = currentValue;
            if (currentValue != originValue && !changed) {
                changed = true;
                changes++;
            }
            if (currentValue == originValue && changed) {
                changed = false;
                changes--;
            }
            changesBannerContainer.classList.toggle(`pp_settings_changesBanner_active`, changes > 0);
        }
    }
}
function closeSettingsWindow() {
    if (changes > 0) {
        settings.nextRevision();
        window.location.reload();
    }
}

// EXTERNAL MODULE: ./resources/settingsButton.svg
var settingsButton = __webpack_require__("./resources/settingsButton.svg");
var settingsButton_default = /*#__PURE__*/__webpack_require__.n(settingsButton);
;// CONCATENATED MODULE: ./src/modules/header.ts









css.addStyle(header/* default */.A);
let notificationsInitialized = false;
async function header_renderHeader(container) {
    const nav = await dynamicElement(() => container.querySelector(`reddit-header-large`)?.querySelector(`nav`));
    if (checkIsRendered(nav))
        return;
    const userPanel = await dynamicElement(() => nav.childNodes.item(4));
    userPanel.classList.add(`pp_userPanel`);
    userPanel.addEventListener(`click`, () => {
        renderSettingsButton();
    }, { once: true });
    if (settings.NOTIFY_POPUP.isEnabled() && !notificationsInitialized) {
        notificationsInitialized = true;
        observeFor(document.body, (element) => {
            if (element.getAttribute(`data-id`) == `notification-container-element` && !checkIsRendered(element)) {
                renderNotifications(element);
            }
        });
    }
    const logo = container.querySelector(`#reddit-logo`);
    const logoPP = appendNew(logo, `div`, `pp_logo`);
    logoPP.textContent = `++`;
    
}
function renderSettingsButton() {
    let userMenu = document.getElementById(`user-drawer-content`);
    if (userMenu.querySelector(`faceplate-tracker[noun="pp-settings"]`) != null) {
        return;
    }
    let originSettingsButton = userMenu.querySelector(`faceplate-tracker[noun="settings"]`);
    let ppSettingsButton = originSettingsButton.cloneNode(true);
    ppSettingsButton.setAttribute(`noun`, `pp-settings`);
    originSettingsButton.parentNode.appendChild(ppSettingsButton);
    ppSettingsButton.querySelector(`a`).removeAttribute(`href`);
    const originSvg = ppSettingsButton.querySelector(`svg`);
    const svg = buildSvg((settingsButton_default()), 20, 20, { strokeColor: NONE_COLOR });
    originSvg.replaceWith(svg);
    let text = ppSettingsButton.querySelector(`.text-14`);
    text.textContent = `Reddit++`;
    ppSettingsButton.addEventListener(`click`, () => {
        settingsWindow_settingsWindow.open();
    });
}

// EXTERNAL MODULE: ./src/modules/redirect.less
var modules_redirect = __webpack_require__("./src/modules/redirect.less");
;// CONCATENATED MODULE: ./src/modules/redirect.ts





function checkRedirect() {
    const isOld = window.location.href.includes(`old.reddit.com`);
    const isPrev = window.location.href.includes(`new.reddit.com`);
    let redirect = null;
    if (isOld) {
        redirect = window.location.href.replace(`old.reddit.com`, `reddit.com`);
    }
    if (isPrev) {
        redirect = window.location.href.replace(`new.reddit.com`, `reddit.com`);
    }
    if (settings.REDIRECT_FORCED.isEnabled() && redirect != null) {
        window.location.assign(redirect);
    }
    if (settings.REDIRECT_SUGGESTION.isEnabled() && redirect != null) {
        renderSuggestion(redirect);
    }
    const commentsSortRedirect = checkSortCommentsRedirect();
    return redirect != null || commentsSortRedirect;
}
function renderSuggestion(redirect) {
    css.addStyle(modules_redirect/* default */.A);
    let secondsToRedirect = 19;
    const container = appendNew(document.body, `div`, `pp_redirectContainer`);
    const box = appendNew(container, `div`, `pp_redirectBox`);
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

;// CONCATENATED MODULE: ./src/core.ts









// ***********************************************************************************************************************
// ********************************************** ENTRY POINT ************************************************************
// ***********************************************************************************************************************
startRedditPlusPlus();
async function startRedditPlusPlus() {
    const documentBody = await dynamicElement(() => (document.head != null && document.body != null ? document.body : null));
    // check dublicates
    let pp_meta = document.head.querySelector(`meta[name="reddit-plus-plus"]`);
    if (pp_meta != null) {
        notify(`Reddit++ runned more that one times. Check out userscript manager to disable dublicates.`, { time: 10000 });
        return;
    }
    pp_meta = document.createElement(`meta`);
    pp_meta.setAttribute(`name`, `reddit-plus-plus`);
    pp_meta.setAttribute(`version`, "1.0.18");
    document.head.append(pp_meta);
    // call latest migration
    migration_1_0_0.check();
    if (checkRedirect()) {
        return;
    }
    const pp_app = await dynamicElement(() => documentBody.querySelector(`shreddit-app`), MAX_LOAD_LAG);
    if (pp_app == null || pp_app.getAttribute(`devicetype`) != `desktop`) {
        pp_log(`Reddit++ was stopped for a non compatible page`);
        return;
    }
    header_renderHeader(documentBody);
    renderApp();
    observeFor(documentBody, element => {
        // header
        if (element.matches(`reddit-header-large`) == true) {
            header_renderHeader(element.parentElement);
        }
        console.log(element);
        // content
        const isSubPage = element.matches(`shreddit-app`) == true;
        const isMainPage = element.classList.contains(`grid-container`) && element.parentElement.matches(`shreddit-app`) == true;
        if (isSubPage || isMainPage) {
            renderApp();
            checkSortCommentsRedirect();
        }
    });
}

})();

/******/ })()
;