!function(){function e(e,t){return new Promise((function(n,o){var a=Math.random()>.3;setTimeout((function(){a?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}function t(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))}function n(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}({form:document.querySelector("form"),delay:document.getElementsByName("dalay"),step:document.getElementsByName("step"),amount:document.getElementsByName("amount")}).form.addEventListener("submit",(function(o){o.preventDefault(),amount=Number(o.target.elements.amount.value),delay=Number(o.target.elements.delay.value),step=Number(o.target.elements.step.value),console.log(amount),console.log(delay),console.log(step);for(var a=0;a<=amount;a+=1)e(a,delay).then((function(e){e.position,e.delay;return t})).catch((function(e){e.position,e.delay;return n}));delay+=step}))}();
//# sourceMappingURL=03-promises.31852c40.js.map
