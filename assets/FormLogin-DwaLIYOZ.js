import{r as j,u as C,a as q,j as s,I as o,L as E,b as L,B as i,l as B}from"./index-xcNv8wPn.js";import{u as D}from"./index.esm-DKU2bOqS.js";import{c as F,a as n,b as $,o as I}from"./index.esm-TC8dIvat.js";const z=({formText:N,link:g,textLink:y,buttonText:v,isInput:t})=>{var w,h,x,f;const[m,l]=j.useState(!1),[d,p]=j.useState(!1),u=C(),S=q(),P=F({name:n(),email:n().email().required("Email is required"),password:n().required("Password is required").min(6),confirmPassword:n().oneOf([$("password"),void 0],"Passwords must match")}).required(),{register:a,handleSubmit:b,formState:{errors:e}}=D({resolver:I(P)}),k=async r=>{try{if(S.pathname==="/register"){const c={name:r.name,email:r.email,password:r.password};if(await u(L(c)),e)return i.error("Something went wrong...");i.success("Registration successful!")}else{const c={email:r.email,password:r.password};if(await u(B(c)),e)return i.error("Something went wrong...")}}catch{i.error("Something went wrong, please try again.")}};return s.jsxs("form",{onSubmit:b(k),children:[s.jsxs("div",{className:"wrap-input",children:[t&&s.jsxs("div",{children:[s.jsx("input",{...a("name"),placeholder:"Name",className:"input"}),s.jsx("p",{className:"form-errors",children:(w=e.name)==null?void 0:w.message})]}),s.jsxs("div",{children:[s.jsx("input",{...a("email"),placeholder:"Email",className:"input"}),s.jsx("p",{className:"form-errors",children:(h=e.email)==null?void 0:h.message})]}),s.jsxs("div",{className:"password-wrap",children:[s.jsx("input",{...a("password"),placeholder:"Password",type:m?"text":"password",className:"input"}),m?s.jsx("div",{onClick:()=>l(!1),children:s.jsx(o,{name:"openeye",className:"icon-eye"})}):s.jsx("div",{onClick:()=>l(!0),children:s.jsx(o,{name:"closeeye",className:"icon-eye"})}),s.jsx("p",{className:"form-errors",children:(x=e.password)==null?void 0:x.message})]}),t&&s.jsxs("div",{className:"password-wrap",children:[s.jsx("input",{...a("confirmPassword"),placeholder:"Confirm password",type:d?"text":"password",className:"input"}),d?s.jsx("div",{onClick:()=>p(!1),children:s.jsx(o,{name:"openeye",className:"icon-eye"})}):s.jsx("div",{onClick:()=>p(!0),children:s.jsx(o,{name:"closeeye",className:"icon-eye"})}),s.jsx("p",{className:"form-errors",children:(f=e.confirmPassword)==null?void 0:f.message})]})]}),s.jsx("button",{type:"submit",className:"form-button",children:v}),s.jsxs("p",{className:"form-text",children:[N," ",s.jsx(E,{to:g,className:"form-link",children:y})]})]})};export{z as F};