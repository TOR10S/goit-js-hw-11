import{S as a,i as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function l(o){return fetch(`https://pixabay.com/api/?key=45080955-c7c4547ab1841009711dd2978&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{console.log(r)})}function u(o){const s=new a(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),i=document.querySelector(".gallery-list");let r=o.hits.map(e=>`<div class="image-frame"><a src="${e.largeImageURL}"><img class="image" src="${e.webformatURL}" alt="${e.tags}" /></a><h5>likes</h5><p>${e.likes}</p></div>`).join("");i.insertAdjacentHTML("afterbegin",r),s.refresh()}function f(){const o=document.querySelector(".gallery-list");o.innerHTML=""}const m=document.querySelector(".gallery-form"),d=document.querySelector(".input-for-gallery");m.addEventListener("submit",g);function g(o){f(),o.preventDefault();let s=d.value.trim();l(`${s}`).then(i=>{if(i.total===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}else u(i)})}
//# sourceMappingURL=commonHelpers.js.map
