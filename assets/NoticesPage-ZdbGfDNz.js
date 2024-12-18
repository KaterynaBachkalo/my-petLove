import{j as e,I as k,r as c,m as A,u as D,f as T,n as K,o as O,p as V,e as R,q as H,t as J,v as W,w as X}from"./index-gm0vPMK8.js";import{a as Y,F as Z,P as _}from"./Pagination-Dt0mpjPW.js";import{u as Q,C as ee}from"./index.esm-Ix82GRFP.js";import{c as se,a as B,o as te}from"./index.esm-CaQCzZUx.js";const ae=({title:s,imgURL:i,popularity:n,name:o,birthday:l,sex:t,species:g,category:d,comment:j})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"notices-card",children:[e.jsxs("div",{className:"notices-card-top",children:[e.jsx("img",{src:i,alt:s,className:"notices-img"}),e.jsxs("div",{className:"notices-title-wrap",children:[e.jsx("h3",{className:"notices-title",children:s}),e.jsxs("div",{className:"notices-icon-wrap",children:[e.jsx(k,{className:"icon-star",name:"star"}),e.jsx("p",{className:"notices-popularity",children:n})]})]}),e.jsxs("div",{className:"notices-text-wrapper",children:[e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Name"}),e.jsx("p",{children:o})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Birthday"}),e.jsx("p",{children:Y(l)})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Sex"}),e.jsx("p",{children:t})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Species"}),e.jsx("p",{children:g})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Category"}),e.jsx("p",{children:d})]})]}),e.jsx("p",{className:"notices-text",children:j})]}),e.jsxs("div",{className:"notices-button-wrap",children:[e.jsx("button",{type:"button",className:"notices-button",children:"Read more"}),e.jsx("div",{className:"notices-add-favorite",children:e.jsx(k,{className:"icon-heart",name:"heart"})})]})]})}),ne=(s,i,n)=>{c.useEffect(()=>{const o=t=>{t.code==="Escape"&&s(!1)},l=t=>{i.current&&!i.current.contains(t.target)&&(n!=null&&n.current)&&!(n!=null&&n.current.contains(t.target))&&s(!1)};return window.addEventListener("keydown",o),document.addEventListener("mousedown",l),()=>{window.removeEventListener("keydown",o),document.removeEventListener("mousedown",l)}},[s,i,n])},M=A.forwardRef(({onSelect:s,onClose:i,data:n},o)=>{const l=d=>{s(d)},t=()=>{s("")},g=c.useRef(null);return ne(i,g,o),e.jsx("div",{className:"menu-modal",children:e.jsx("div",{className:"menu-modal-container",children:e.jsxs("ul",{className:"menu-categories-list",ref:g,children:[e.jsx("li",{className:"menu-categories-item",onClick:t,children:"Show all"}),n&&n.map(d=>e.jsx("li",{className:"menu-categories-item",onClick:()=>l(d),children:d},d))]})})})}),ce=["sell","free","lost","found"],ie=["unknown","female","male","multiple"],oe=["dog","cat","monkey","bird","snake","turtle","lizard","frog","fish","ants","bees","butterfly","spider","scorpion"],L=({placeholder:s,setSearchQuery:i})=>{const n=se({category:B(),sex:B(),species:B()}).required(),{handleSubmit:o,control:l,setValue:t}=Q({resolver:te(n)}),g=D(),d=c.useRef(null),j=c.useRef(null),a=c.useRef(null),v=c.useRef(null),[p,P]=T(),[r,m]=c.useState(p.get("category")??""),[u,S]=c.useState(p.get("sex")??""),[f,w]=c.useState(p.get("species")??""),[C,N]=c.useState(!1),[b,y]=c.useState(!1),[G,E]=c.useState(!1),I=x=>{i(h=>({...h,...x})),$(x),g(K(1))},z=()=>{s==="Category"?N(!C):s==="By gender"?y(!b):E(!G)},F=x=>{const h={};s==="Category"?(m(x),h.category=x||void 0):s==="By gender"?(S(x),h.sex=x||void 0):(w(x),h.species=x||void 0),N(!1),y(!1),E(!1),$(h),o(I)()},$=x=>{const h=new URLSearchParams(p);Object.entries(x).forEach(([q,U])=>{U?h.set(q,U):h.delete(q)}),P(h)};return c.useEffect(()=>{m(p.get("category")??""),S(p.get("sex")??""),w(p.get("type")??"")},[p]),c.useEffect(()=>{t("category",r||""),t("sex",u||""),t("species",f||"")},[r,u,f,t]),e.jsx("form",{onSubmit:o(I),ref:d,children:e.jsxs("div",{className:`find-form-wrap ${s==="Category"||s==="By gender"?"category":s==="By type"?"type":""}`,children:[e.jsx(ee,{name:s==="Category"?"category":s==="By gender"?"sex":"species",control:l,render:({field:x})=>e.jsx("input",{...x,className:"input find-input",placeholder:s,value:s==="Category"?r:s==="By gender"?u:f})}),e.jsx("button",{type:"button",className:"find-form-button",onClick:z,ref:s==="Category"?j:s==="By gender"?a:v,children:e.jsx("div",{className:"find-form-icon",children:e.jsx(k,{name:"chevron-down",className:"icon-search"})})}),C&&e.jsx(M,{onSelect:F,onClose:()=>N(!1),ref:j,data:ce}),b&&e.jsx(M,{onSelect:F,onClose:()=>y(!1),ref:a,data:ie}),G&&e.jsx(M,{onSelect:F,onClose:()=>E(!1),ref:v,data:oe})]})})},re=({setSearchQuery:s,text:i,isActive:n,onClick:o})=>{const l=()=>{s(t=>({...t,title:n?"":i})),o()};return e.jsx("div",{className:"button-wrap",children:e.jsxs("button",{type:"submit",className:`sort-button ${n?"cross":""}`,onClick:l,children:[i,n&&e.jsx(k,{className:"icon-cross",name:"close"})]})})},le=({setSearchQuery:s})=>{const i=D(),[n,o]=c.useState(""),l=t=>{n===t?(o(""),i(O())):(o(t),i(V(t)))};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"notices-form-wrap",children:[e.jsxs("div",{className:"notices-form-top",children:[e.jsx(Z,{setSearchQuery:s,placeholder:"Search"}),e.jsx(L,{setSearchQuery:s,placeholder:"Category"}),e.jsx(L,{setSearchQuery:s,placeholder:"By gender"}),e.jsx(L,{setSearchQuery:s,placeholder:"By type"})]}),e.jsx("div",{className:"notices-stroke"}),e.jsx("div",{className:"sort-button-wrap",children:["Popular","Unpopular","Cheap","Expensive"].map(t=>e.jsx(re,{setSearchQuery:s,text:t,isActive:n===t,onClick:()=>l(t)},t))})]})})},pe=()=>{const s=R(H),i=R(J),[n,o]=c.useState(s);c.useEffect(()=>{if(s.length>0){let r=[...s];switch(i){case"Popular":r.sort((m,u)=>u.popularity-m.popularity);break;case"Unpopular":r.sort((m,u)=>m.popularity-u.popularity);break;case"Cheap":r.sort((m,u)=>(m.price||0)-(u.price||0));break;case"Expensive":r.sort((m,u)=>(u.price||0)-(m.price||0));break;default:r=s}o(r)}},[s,i]);const l=6,[t,g]=T();c.useEffect(()=>{t.has("page")||g({page:"1"})},[t,g]);const d=Number(t.get("page"))||1,j=R(W),[a,v]=c.useState({title:t.get("title")||null,category:t.get("category")||null,sex:t.get("sex")||null,species:t.get("species")||null}),p=D();c.useEffect(()=>{const r={page:d,limit:l,title:a!=null&&a.title?a.title:null,category:a!=null&&a.category?a.category:null,sex:a!=null&&a.sex?a.sex:null,species:a!=null&&a.species?a.species:null};p(X(r))},[d,p,a]);const P=r=>{g({page:String(r),...a.title&&{title:String(a.title)},...a.category&&{category:String(a.category)},...a.sex&&{sex:String(a.sex)},...a.species&&{species:String(a.species)}})};return e.jsxs("div",{className:"notices-container",children:[e.jsxs("div",{className:"notices-main-wrap",children:[e.jsx("h2",{className:"notices-main-title",children:"Find your favorite pet"}),e.jsx(le,{setSearchQuery:v})]}),e.jsx("div",{className:"news-cards notices-cards",children:n&&n.length>0?n.map(({name:r,title:m,imgURL:u,species:S,birthday:f,sex:w,category:C,comment:N,popularity:b,price:y})=>e.jsx(ae,{name:r,title:m,imgURL:u,species:S,birthday:f,sex:w,category:C,comment:N,popularity:b,price:y},m)):e.jsx("p",{children:"There are news yet"})}),e.jsx(_,{totalItems:j,currentPage:d,onPageChange:P})]})};export{pe as default};