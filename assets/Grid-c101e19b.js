import{ak as P,al as X,b as S,n as N,am as F,an as z,d as T,ao as U,M as x,R as E,ap as Y,K as H,aq as B,ag as J,ar as W,as as I,at as j,au as Z,av as K,a2 as ee,aw as V}from"./index-58b00608.js";import{i as te}from"./is-browser-fc34c9a6.js";import{g as se}from"./get-slot-1efb97e5.js";function ne(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(r=>{if(r==="")return;const[n,s]=r.split(":");s===void 0?t[""]=n:t[n]=s}),t}function _(e,t){var r;if(e==null)return;const n=ne(e);if(t===void 0)return n[""];if(typeof t=="string")return(r=n[t])!==null&&r!==void 0?r:n[""];if(Array.isArray(t)){for(let s=t.length-1;s>=0;--s){const i=t[s];if(i in n)return n[i]}return n[""]}else{let s,i=-1;return Object.keys(n).forEach(a=>{const l=Number(a);!Number.isNaN(l)&&t>=l&&l>=i&&(i=l,s=n[a])}),s}}function re(e){var t;const r=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:n})=>n===P);return!!(r&&r.value===!1)}const ie={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function oe(e){return`(min-width: ${e}px)`}const G={};function ae(e=ie){if(!X)return S(()=>[]);if(typeof window.matchMedia!="function")return S(()=>[]);const t=N({}),r=Object.keys(e),n=(s,i)=>{s.matches?t.value[i]=!0:t.value[i]=!1};return r.forEach(s=>{const i=e[s];let a,l;G[i]===void 0?(a=window.matchMedia(oe(i)),a.addEventListener?a.addEventListener("change",d=>{l.forEach(f=>{f(d,s)})}):a.addListener&&a.addListener(d=>{l.forEach(f=>{f(d,s)})}),l=new Set,G[i]={mql:a,cbs:l}):(a=G[i].mql,l=G[i].cbs),l.add(n),a.matches&&l.forEach(d=>{d(a,s)})}),F(()=>{r.forEach(s=>{const{cbs:i}=G[e[s]];i.has(n)&&i.delete(n)})}),S(()=>{const{value:s}=t;return r.filter(i=>s[i])})}const O=1,L=z("n-grid"),q=1,le={span:{type:[Number,String],default:q},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},ve=T({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:le,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:r,overflowRef:n,layoutShiftDisabledRef:s}=U(L),i=Y();return{overflow:n,itemStyle:r,layoutShiftDisabled:s,mergedXGap:S(()=>x(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:a=q,privateShow:l=!0,privateColStart:d=void 0,privateOffset:f=0}=i.vnode.props,{value:$}=t,g=x($||0);return{display:l?"":"none",gridColumn:`${d??`span ${a}`} / span ${a}`,marginLeft:f?`calc((100% - (${a} - 1) * ${g}) / ${a} * ${f} + ${g} * ${f})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:r,offset:n,mergedXGap:s}=this;return E("div",{style:{gridColumn:`span ${r} / span ${r}`,marginLeft:n?`calc((100% - (${r} - 1) * ${s}) / ${r} * ${n} + ${s} * ${n})`:""}},this.$slots)}return E("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),fe={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Q=24,M="__ssr__",ue={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Q},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},me=T({name:"Grid",inheritAttrs:!1,props:ue,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:r}=H(e),n=/^\d+$/,s=N(void 0),i=ae(r?.value||fe),a=B(()=>!!(e.itemResponsive||!n.test(e.cols.toString())||!n.test(e.xGap.toString())||!n.test(e.yGap.toString()))),l=S(()=>{if(a.value)return e.responsive==="self"?s.value:i.value}),d=B(()=>{var u;return(u=Number(_(e.cols.toString(),l.value)))!==null&&u!==void 0?u:Q}),f=B(()=>_(e.xGap.toString(),l.value)),$=B(()=>_(e.yGap.toString(),l.value)),g=u=>{s.value=u.contentRect.width},v=u=>{K(g,u)},R=N(!1),y=S(()=>{if(e.responsive==="self")return v}),p=N(!1),m=N();return J(()=>{const{value:u}=m;u&&u.hasAttribute(M)&&(u.removeAttribute(M),p.value=!0)}),W(L,{layoutShiftDisabledRef:I(e,"layoutShiftDisabled"),isSsrRef:p,itemStyleRef:I(e,"itemStyle"),xGapRef:f,overflowRef:R}),{isSsr:!te,contentEl:m,mergedClsPrefix:t,style:S(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:x(e.xGap),rowGap:x(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${d.value}, minmax(0, 1fr))`,columnGap:x(f.value),rowGap:x($.value)}),isResponsive:a,responsiveQuery:l,responsiveCols:d,handleResize:y,overflow:R}},render(){if(this.layoutShiftDisabled)return E("div",j({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,r,n,s,i,a,l;this.overflow=!1;const d=ee(se(this)),f=[],{collapsed:$,collapsedRows:g,responsiveCols:v,responsiveQuery:R}=this;d.forEach(o=>{var C,h,c,b,D;if(((C=o?.type)===null||C===void 0?void 0:C.__GRID_ITEM__)!==!0)return;if(re(o)){const w=V(o);w.props?w.props.privateShow=!1:w.props={privateShow:!1},f.push({child:w,rawChildSpan:0});return}o.dirs=((h=o.dirs)===null||h===void 0?void 0:h.filter(({dir:w})=>w!==P))||null,((c=o.dirs)===null||c===void 0?void 0:c.length)===0&&(o.dirs=null);const k=V(o),A=Number((D=_((b=k.props)===null||b===void 0?void 0:b.span,R))!==null&&D!==void 0?D:O);A!==0&&f.push({child:k,rawChildSpan:A})});let y=0;const p=(t=f[f.length-1])===null||t===void 0?void 0:t.child;if(p?.props){const o=(r=p.props)===null||r===void 0?void 0:r.suffix;o!==void 0&&o!==!1&&(y=Number((s=_((n=p.props)===null||n===void 0?void 0:n.span,R))!==null&&s!==void 0?s:O),p.props.privateSpan=y,p.props.privateColStart=v+1-y,p.props.privateShow=(i=p.props.privateShow)!==null&&i!==void 0?i:!0)}let m=0,u=!1;for(const{child:o,rawChildSpan:C}of f){if(u&&(this.overflow=!0),!u){const h=Number((l=_((a=o.props)===null||a===void 0?void 0:a.offset,R))!==null&&l!==void 0?l:0),c=Math.min(C+h,v);if(o.props?(o.props.privateSpan=c,o.props.privateOffset=h):o.props={privateSpan:c,privateOffset:h},$){const b=m%v;c+b>v&&(m+=v-b),c+m+y>g*v?u=!0:m+=c}}u&&(o.props?o.props.privateShow!==!0&&(o.props.privateShow=!1):o.props={privateShow:!1})}return E("div",j({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[M]:this.isSsr||void 0},this.$attrs),f.map(({child:o})=>o))};return this.isResponsive&&this.responsive==="self"?E(Z,{onResize:this.handleResize},{default:e}):e()}});export{ve as _,me as a};
