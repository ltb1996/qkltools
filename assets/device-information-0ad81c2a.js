import{d as x,c8 as k,b as e,o as n,f as o,h as s,F as c,k as r,w as a,c as _,g as d,t as u,l as y,c9 as $,z as B,D as z}from"./index-58b00608.js";import{_ as D,a as S}from"./Grid-c101e19b.js";import"./is-browser-fc34c9a6.js";import"./get-slot-1efb97e5.js";const C={class:"label"},I={class:"value"},N={key:1,class:"undefined-value"},P=x({__name:"device-information",setup(V){const{width:p,height:v}=k(),m=[{name:"Screen",information:[{label:"Screen size",value:e(()=>`${window.screen.availWidth} x ${window.screen.availHeight}`)},{label:"Orientation",value:e(()=>window.screen.orientation.type)},{label:"Orientation angle",value:e(()=>`${window.screen.orientation.angle}°`)},{label:"Color depth",value:e(()=>`${window.screen.colorDepth} bits`)},{label:"Pixel ratio",value:e(()=>`${window.devicePixelRatio} dppx`)},{label:"Window size",value:e(()=>`${p.value} x ${v.value}`)}]},{name:"Device",information:[{label:"Browser vendor",value:e(()=>navigator.vendor)},{label:"Languages",value:e(()=>navigator.languages.join(", "))},{label:"Platform",value:e(()=>navigator.platform)},{label:"User agent",value:e(()=>navigator.userAgent)}]}];return(W,F)=>{const g=$,f=D,w=S,b=B;return n(),o(c,null,s(m,({name:t,information:h})=>r(b,{key:t,title:t},{default:a(()=>[r(w,{cols:"1 400:2","x-gap":"12","y-gap":"12"},{default:a(()=>[(n(!0),o(c,null,s(h,({label:i,value:{value:l}})=>(n(),_(f,{key:i,class:"information"},{default:a(()=>[d("div",C,u(i),1),d("div",I,[l?(n(),_(g,{key:0},{default:a(()=>[y(u(l),1)]),_:2},1024)):(n(),o("div",N," unknown "))])]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["title"])),64)}}});const E=z(P,[["__scopeId","data-v-ccbc73e2"]]);export{E as default};
