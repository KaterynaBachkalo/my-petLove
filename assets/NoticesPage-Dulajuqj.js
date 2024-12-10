import{j as e,I as C,r as o,m as V,u as $,f as q,n as H,e as I,o as J,p as W,q as X,t as Y}from"./index-IA5-4jMs.js";import{a as Z,F as U,P as _}from"./Pagination-CboFghGr.js";import{u as Q,C as ee}from"./index.esm-DWq5r4YB.js";import{c as se,a as R,o as te}from"./index.esm-yVt_Lh8t.js";const ne=({title:s,imgURL:a,popularity:t,name:c,birthday:l,sex:i,species:n,category:r,comment:u})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"notices-card",children:[e.jsxs("div",{className:"notices-card-top",children:[e.jsx("img",{src:a,alt:s,className:"notices-img"}),e.jsxs("div",{className:"notices-title-wrap",children:[e.jsx("h3",{className:"notices-title",children:s}),e.jsxs("div",{className:"notices-icon-wrap",children:[e.jsx(C,{className:"icon-star",name:"star"}),e.jsx("p",{className:"notices-popularity",children:t})]})]}),e.jsxs("div",{className:"notices-text-wrapper",children:[e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Name"}),e.jsx("p",{children:c})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Birthday"}),e.jsx("p",{children:Z(l)})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Sex"}),e.jsx("p",{children:i})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Species"}),e.jsx("p",{children:n})]}),e.jsxs("div",{className:"notices-text-wrap",children:[e.jsx("p",{className:"notices-title-text",children:"Category"}),e.jsx("p",{children:r})]})]}),e.jsx("p",{className:"notices-text",children:u})]}),e.jsxs("div",{className:"notices-button-wrap",children:[e.jsx("button",{type:"button",className:"notices-button",children:"Read more"}),e.jsx("div",{className:"notices-add-favorite",children:e.jsx(C,{className:"icon-heart",name:"heart"})})]})]})}),ae=(s,a,t)=>{o.useEffect(()=>{const c=i=>{i.code==="Escape"&&s(!1)},l=i=>{a.current&&!a.current.contains(i.target)&&(t!=null&&t.current)&&!(t!=null&&t.current.contains(i.target))&&s(!1)};return window.addEventListener("keydown",c),document.addEventListener("mousedown",l),()=>{window.removeEventListener("keydown",c),document.removeEventListener("mousedown",l)}},[s,a,t])},B=V.forwardRef(({onSelect:s,onClose:a,data:t},c)=>{const l=r=>{s(r)},i=()=>{s("Show all")},n=o.useRef(null);return ae(a,n,c),e.jsx("div",{ref:n,children:e.jsx("div",{children:e.jsxs("ul",{className:"menu-categories-list",children:[e.jsx("li",{className:"menu-categories-item",onClick:i,children:"Show all"}),t&&t.map(r=>e.jsx("li",{className:"menu-categories-item",onClick:()=>l(r),children:r},r))]})})})}),ce=["sell","free","lost","found"],oe=["unknown","female","male","multiple"],le=["dog","cat","monkey","bird","snake","turtle","lizard","frog","fish","ants","bees","butterfly","spider","scorpion"],F=({placeholder:s,setSearchQuery:a})=>{const t=se({category:R(),gender:R(),type:R()}).required(),{handleSubmit:c,control:l,setValue:i}=Q({resolver:te(t)}),n=$(),r=o.useRef(null),u=o.useRef(null),w=o.useRef(null),x=o.useRef(null),[d,S]=q(),[p,f]=o.useState(d.get("category")??""),[g,N]=o.useState(d.get("gender")??""),[j,y]=o.useState(d.get("type")??"");o.useEffect(()=>{f(d.get("category")??""),N(d.get("gender")??""),y(d.get("type")??"")},[d]);const[M,b]=o.useState(!1),[L,P]=o.useState(!1),[T,k]=o.useState(!1),D=m=>{a(h=>({...h,...m})),O(m),n(H(1))},z=()=>{c(D)()},K=()=>{s==="Category"?b(!M):s==="By gender"?P(!L):k(!T)},E=m=>{s==="Category"?f(m):s==="By gender"?N(m):y(m),b(!1),P(!1),k(!1)},O=m=>{const h=new URLSearchParams(d);Object.entries(m).forEach(([G,A])=>{A?h.set(G,A):h.delete(G)}),S(h)};return o.useEffect(()=>{i("category",p),i("gender",g),i("type",j)},[p,i,g,j]),e.jsx("form",{onSubmit:c(D),children:e.jsxs("div",{className:`find-form-wrap ${s==="Category"||s==="By gender"?"category":s==="By type"?"type":""}`,children:[e.jsx(ee,{name:s==="Category"?"category":s==="By gender"?"gender":"type",control:l,render:({field:m})=>e.jsx("input",{...m,className:"input find-input",placeholder:s,value:s==="Category"?p:s==="By gender"?g:j,onBlur:z})}),e.jsx("button",{type:"button",className:"find-form-button",onClick:K,ref:r,children:e.jsx("div",{className:"find-form-icon",children:e.jsx(C,{name:"chevron-down",className:"icon-search"})})}),M&&e.jsx(B,{onSelect:E,onClose:()=>b(!1),ref:u,data:ce}),L&&e.jsx(B,{onSelect:E,onClose:()=>P(!1),ref:w,data:oe}),T&&e.jsx(B,{onSelect:E,onClose:()=>k(!1),ref:x,data:le})]})})},v=({setSearchQuery:s,text:a,isActive:t,onClick:c})=>{const l=()=>{s(i=>({...i,title:t?"":a})),c()};return e.jsx("div",{className:"button-wrap",children:e.jsxs("button",{type:"submit",className:`sort-button ${t?"cross":""}`,onClick:l,children:[a,t&&e.jsx(C,{className:"icon-cross",name:"close"})]})})},ie=({setSearchQuery:s})=>{const[a,t]=o.useState(null),c=l=>{t(a===l?null:l)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"notices-form-wrap",children:[e.jsxs("div",{className:"notices-form-top",children:[e.jsx(U,{setSearchQuery:s,placeholder:"Search"}),e.jsx(F,{setSearchQuery:s,placeholder:"Category"}),e.jsx(F,{setSearchQuery:s,placeholder:"By gender"}),e.jsx(F,{setSearchQuery:s,placeholder:"By type"}),e.jsx(U,{setSearchQuery:s,placeholder:"Location"})]}),e.jsx("div",{className:"notices-stroke"}),e.jsxs("div",{className:"sort-button-wrap",children:[e.jsx(v,{setSearchQuery:s,text:"Popular",isActive:a==="Popular",onClick:()=>c("Popular")}),e.jsx(v,{setSearchQuery:s,text:"Unpopular",isActive:a==="Unpopular",onClick:()=>c("Unpopular")}),e.jsx(v,{setSearchQuery:s,text:"Cheap",isActive:a==="Cheap",onClick:()=>c("Cheap")}),e.jsx(v,{setSearchQuery:s,text:"Expensive",isActive:a==="Expensive",onClick:()=>c("Expensive")})]})]})})},xe=()=>{const s=I(J),a=6,[t,c]=q();console.log("searchParams",t.get("title")),o.useEffect(()=>{t.has("page")||c({page:"1"})},[t,c]);const l=Number(t.get("page"))||1,i=I(W),[n,r]=o.useState({title:t.get("title")||null,category:t.get("category")||null,gender:t.get("gender")||null,type:t.get("type")||null,location:t.get("location")||null});console.log("searchQuery",n);const u=$();o.useEffect(()=>{const x={page:l,limit:a,title:n!=null&&n.title?n.title:null,category:n!=null&&n.category?n.category:null,gender:n!=null&&n.gender?n.gender:null,type:n!=null&&n.type?n.type:null,location:n!=null&&n.location?n.location:null};u(X(x)),u(Y(n))},[l,u,n]);const w=x=>{c({page:String(x)})};return e.jsxs("div",{className:"notices-container",children:[e.jsxs("div",{className:"notices-main-wrap",children:[e.jsx("h2",{className:"notices-main-title",children:"Find your favorite pet"}),e.jsx(ie,{setSearchQuery:r})]}),e.jsx("div",{className:"news-cards notices-cards",children:s&&s.length>0?s.map(({name:x,title:d,imgURL:S,species:p,birthday:f,sex:g,category:N,comment:j,popularity:y})=>e.jsx(ne,{name:x,title:d,imgURL:S,species:p,birthday:f,sex:g,category:N,comment:j,popularity:y},d)):e.jsx("p",{children:"There are news yet"})}),e.jsx(_,{totalItems:i,currentPage:l,onPageChange:w})]})};export{xe as default};
