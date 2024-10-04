import{ab as p,d as A,n as M,E as _,b as x,p as L,o as h,f as S,g as v,k as e,w as m,i as t,x as c,F as k,y as P,D as C}from"./index-58b00608.js";import{A as E,c as D,C as V,D as z,L as j,a as T,P as q,b as B,S as N,d as O,Y as U,e as F,f as I,g as K,h as R,i as W,j as G,k as H,l as J,m as Q,n as X,o as Z,q as $,p as ee,r as ae,t as te,s as se,v as oe,u as le}from"./public-api-1d5b2fbb.js";import{w as ne}from"./defaults-4d6daddf.js";import{T as re}from"./TextareaCopyable-c0b1a0cf.js";import{_ as ie}from"./Switch-84f335ed.js";import{_ as me}from"./FormItem-27164bbf.js";import{_ as ue}from"./InputNumber-7db2128c.js";import"./Copy-d2f90fc9.js";import"./Scrollbar-ff23f279.js";import"./use-form-item-8c934713.js";import"./use-locale-fc1432f2.js";import"./Input-382d5275.js";import"./Button-6022fea9.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-893aff2c.js";const f=Object.freeze(Object.defineProperty({__proto__:null,Alias:E,CST:D,Composer:V,Document:z,Lexer:j,LineCounter:T,Pair:q,Parser:B,Scalar:N,Schema:O,YAMLError:U,YAMLMap:F,YAMLParseError:I,YAMLSeq:K,YAMLWarning:R,isAlias:W,isCollection:G,isDocument:H,isMap:J,isNode:Q,isPair:X,isScalar:Z,isSeq:$,parse:ee,parseAllDocuments:ae,parseDocument:te,stringify:se,visit:oe,visitAsync:le},Symbol.toStringTag,{value:"Module"}));function pe({rawYaml:d,sortKeys:r=!1,indentSize:a=2}){const s=f.parse(p(d));return f.stringify(s,{sortMapEntries:p(r),indent:p(a)})}const _e={style:{flex:"0 0 100%"}},ce={style:{margin:"0 auto","max-width":"600px"},flex:"","justify-center":"","gap-3":""},fe=A({__name:"yaml-viewer",setup(d){const r=M(),a=_("yaml-prettify:raw-yaml",""),s=_("yaml-prettify:indent-size",2),l=_("yaml-prettify:sort-keys",!1),g=x(()=>ne(()=>pe({rawYaml:a,indentSize:s,sortKeys:l}),"")),y=L({source:a,rules:[{validator:u=>u===""||f.parse(u),message:"Provided YAML is not valid."}]});return(u,o)=>{const w=ie,i=me,b=ue,Y=P;return h(),S(k,null,[v("div",_e,[v("div",ce,[e(i,{label:"Sort keys :","label-placement":"left","label-width":"100"},{default:m(()=>[e(w,{value:t(l),"onUpdate:value":o[0]||(o[0]=n=>c(l)?l.value=n:null)},null,8,["value"])]),_:1}),e(i,{label:"Indent size :","label-placement":"left","label-width":"100","show-feedback":!1},{default:m(()=>[e(b,{value:t(s),"onUpdate:value":o[1]||(o[1]=n=>c(s)?s.value=n:null),min:"1",max:"10",style:{width:"100px"}},null,8,["value"])]),_:1})])]),e(i,{label:"Your raw YAML",feedback:t(y).message,"validation-status":t(y).status},{default:m(()=>[e(Y,{ref_key:"inputElement",ref:r,value:t(a),"onUpdate:value":o[2]||(o[2]=n=>c(a)?a.value=n:null),placeholder:"Paste your raw YAML here...",rows:"20",multiline:"",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",monospace:""},null,8,["value"])]),_:1},8,["feedback","validation-status"]),e(i,{label:"Prettified version of your YAML"},{default:m(()=>[e(re,{value:t(g),language:"yaml","follow-height-of":t(r)},null,8,["value","follow-height-of"])]),_:1})],64)}}});const Ee=C(fe,[["__scopeId","data-v-e3e05584"]]);export{Ee as default};
