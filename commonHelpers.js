import{r as m}from"./assets/octagon-d8a8367c.js";/* empty css                      */import{f,i as h}from"./assets/vendor-77e16229.js";const o=document.querySelector("button[data-start]"),a=document.querySelector("#datetime-picker"),y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");o.classList.add("start-btn");o.addEventListener("click",C);o.disabled=!0;let c=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=Date.now();t[0]-e>0?o.disabled=!1:(o.disabled=!0,h.show({message:"Please choose a date in the future",backgroundColor:"#EF4040",messageSize:"16",position:"topRight",theme:"dark",iconUrl:m}))}},k=f("#datetime-picker",b);function q(t){const d=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:u,seconds:l}}function r(t){return String(t).padStart(2,0)}function C(){const t=k.selectedDates[0];a.disabled=!0,o.disabled=!0,c=setInterval(()=>{const e=Date.now(),n=t-e;if(n<0){clearInterval(c),a.disabled=!1;return}M(q(n))},1e3)}function M({days:t,hours:e,minutes:n,seconds:s}){y.textContent=r(t),p.textContent=r(e),S.textContent=r(n),D.textContent=r(s)}
//# sourceMappingURL=commonHelpers.js.map
