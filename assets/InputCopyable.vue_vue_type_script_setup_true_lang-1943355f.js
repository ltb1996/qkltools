import{d as v,bh as f,v as x,b as C,o as y,c as b,w as e,k as n,i as s,x as k,ac as g,m as $,aW as w,y as B}from"./index-58b00608.js";const I=v({__name:"InputCopyable",props:{value:{}},emits:["update:value"],setup(p,{emit:_}){const o=f(p,"value",_),{copy:c,isJustCopied:u}=x({source:o,createToast:!1}),l=C(()=>u.value?"Copied!":"Copy to clipboard");return(V,t)=>{const i=g,m=$,r=w,d=B;return y(),b(d,{value:s(o),"onUpdate:value":t[1]||(t[1]=a=>k(o)?o.value=a:null)},{suffix:e(()=>[n(r,{tooltip:s(l)},{default:e(()=>[n(m,{circle:"",variant:"text",size:"small",onClick:t[0]||(t[0]=a=>s(c)())},{default:e(()=>[n(i)]),_:1})]),_:1},8,["tooltip"])]),_:1},8,["value"])}}});export{I as _};
