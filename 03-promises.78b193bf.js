!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=r);var i=r("6JpON");function a(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}function u(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))}function l(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}({form:document.querySelector("form")}).form.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(e.target.elements.amount.value),t=Number(e.target.elements.delay.value),o=Number(e.target.elements.step.value),r=1;r<=n;r+=1)a(r,t).then(u).catch(l),t+=o}))}();
//# sourceMappingURL=03-promises.78b193bf.js.map