import{c as g,h as d}from"./render.3d5dfd30.js";import{p as t,c,h,a as i,q as f,I as m,g as y,_ as x,L as _,M as v,N as C,O as $,U as P}from"./index.b406f681.js";var Q=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:o}){const{proxy:{$q:s}}=y(),e=i(f,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(i(m,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const r=c(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:s.screen.height;return n.styleFn(a,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":s.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":s.screen.height-a+"px"}}),u=c(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:r.value},d(o.default))}}),q="/assets/quasar-logo-vertical.55e9c854.svg";const F=_({name:"IndexPage"}),B=P("img",{alt:"Quasar logo",src:q,style:{width:"200px",height:"200px"}},null,-1);function I(n,o,s,e,l,r){return v(),C(Q,{class:"flex flex-center"},{default:$(()=>[B]),_:1})}var k=x(F,[["render",I]]);export{k as default};
