import{b as C,ab as i,d as B,n as c,v as L,o as k,f as U,k as r,i as a,x as d,g as o,c as F,w as g,t as K,W as N,y as V,ac as $,m as E,z as h}from"./index-58b00608.js";import{_ as j}from"./InputNumber-7db2128c.js";import{_ as z}from"./Switch-84f335ed.js";import"./use-locale-fc1432f2.js";import"./use-form-item-8c934713.js";import"./Input-382d5275.js";import"./Button-6022fea9.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-893aff2c.js";function D(_,{replacementChar:e="*",keepFirst:l=4,keepLast:p=0,keepSpace:u=!0}={}){return _.split("").map((s,m,v)=>u&&s===" "||m<l||m>=v.length-p?s:e).join("")}function O(_,e={}){return C(()=>D(i(_),{replacementChar:i(e.replacementChar),keepFirst:i(e.keepFirst),keepLast:i(e.keepLast),keepSpace:i(e.keepSpace)}))}const R={"mt-4":"",flex:"","gap-10px":""},W=o("div",null,"Keep first:",-1),q=o("div",null,"Keep last:",-1),A=o("div",{"mb-5px":""}," Keep spaces: ",-1),G={"break-anywhere":"","text-wrap":""},ee=B({__name:"string-obfuscator",setup(_){const e=c("Lorem ipsum dolor sit amet"),l=c(4),p=c(4),u=c(!0),s=O(e,{keepFirst:l,keepLast:p,keepSpace:u}),{copy:m}=L({source:s});return(v,t)=>{const b=V,f=j,x=z,S=$,w=E,y=h;return k(),U("div",null,[r(b,{value:a(e),"onUpdate:value":t[0]||(t[0]=n=>d(e)?e.value=n:null),"raw-text":"",placeholder:"Enter string to obfuscate",label:"String to obfuscate:",clearable:"",multiline:""},null,8,["value"]),o("div",R,[o("div",null,[W,r(f,{value:a(l),"onUpdate:value":t[1]||(t[1]=n=>d(l)?l.value=n:null),min:"0"},null,8,["value"])]),o("div",null,[q,r(f,{value:a(p),"onUpdate:value":t[2]||(t[2]=n=>d(p)?p.value=n:null),min:"0"},null,8,["value"])]),o("div",null,[A,r(x,{value:a(u),"onUpdate:value":t[3]||(t[3]=n=>d(u)?u.value=n:null)},null,8,["value"])])]),a(s)?(k(),F(y,{key:0,"mt-60px":"","max-w-600px":"",flex:"","items-center":"","gap-5px":"","font-mono":""},{default:g(()=>[o("div",G,K(a(s)),1),r(w,{onClick:t[4]||(t[4]=n=>a(m)())},{default:g(()=>[r(S)]),_:1})]),_:1})):N("",!0)])}}});export{ee as default};
