import{_ as f}from"./InputCopyable.vue_vue_type_script_setup_true_lang-1943355f.js";import{d as b,E as g,b as B,p as I,o as l,f as r,k as n,i as s,x as h,F as x,h as S,y as k,c as y}from"./index-58b00608.js";import{c as i}from"./integer-base-converter.model-834f64a6.js";import{i as T,b as p,a as V}from"./ipv4-address-converter.service-dddf9b6b.js";import{_ as w}from"./Divider-19948028.js";const H=b({__name:"ipv4-address-converter",setup(A){const e=g("ipv4-converter:ip","192.168.1.1"),u=B(()=>{const a=T({ip:e.value});return[{label:"Decimal: ",value:String(a)},{label:"Hexadecimal: ",value:i({fromBase:10,toBase:16,value:String(a)}).toUpperCase()},{label:"Binary: ",value:i({fromBase:10,toBase:2,value:String(a)})},{label:"Ipv6: ",value:p({ip:e.value})},{label:"Ipv6 (short): ",value:p({ip:e.value,prefix:"::ffff:"})}]}),{attrs:c}=I({source:e,rules:[{message:"Invalid ipv4 address",validator:a=>V({ip:a})}]});return(a,o)=>{const v=k,d=w,m=f;return l(),r("div",null,[n(v,{value:s(e),"onUpdate:value":o[0]||(o[0]=t=>h(e)?e.value=t:null),label:"The ipv4 address:",placeholder:"The ipv4 address..."},null,8,["value"]),n(d),(l(!0),r(x,null,S(s(u),({label:t,value:_})=>(l(),y(m,{key:t,label:t,"label-position":"left","label-width":"100px","label-align":"right","mb-2":"",value:s(c).validationStatus==="error"?"":_,placeholder:"Set a correct ipv4 address"},null,8,["label","value"]))),128))])}}});export{H as default};
