import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as c}from"./index-DRjF_FHU.js";const a=c.forwardRef(({label:m,error:r,hint:l,wrapperClassName:T,id:W,style:z,onFocus:n,onBlur:d,...D},q)=>{const[u,h]=c.useState(!1),t=W??c.useId(),x=l?`${t}-hint`:void 0,f=r?`${t}-error`:void 0,_={display:"block",width:"100%",background:"var(--surface-base)",border:r?"1px solid var(--color-error)":u?"1px solid var(--accent-primary)":"1px solid var(--border-default)",borderRadius:"var(--radius-sm)",padding:"var(--space-3) var(--space-4)",color:"var(--text-primary)",fontFamily:"var(--font-body)",fontSize:"1rem",lineHeight:"1.5",boxShadow:r?"0 0 0 3px rgba(155, 28, 28, 0.1)":u?"0 0 0 3px rgba(43, 91, 168, 0.15)":"none",transition:"border-color var(--duration-medium) var(--ease-kendo), box-shadow var(--duration-medium) var(--ease-kendo)",outline:"none",boxSizing:"border-box",...z};return e.jsxs("div",{className:T,style:{display:"flex",flexDirection:"column",gap:"var(--space-1)"},children:[m&&e.jsx("label",{htmlFor:t,style:{color:"var(--text-primary)",fontFamily:"var(--font-body)",fontSize:"0.875rem",fontWeight:500,letterSpacing:"0.02em"},children:m}),e.jsx("input",{ref:q,id:t,"aria-invalid":!!r,"aria-describedby":f??x,style:_,onFocus:p=>{h(!0),n==null||n(p)},onBlur:p=>{h(!1),d==null||d(p)},...D}),r&&e.jsx("span",{id:f,role:"alert",style:{color:"var(--color-error)",fontFamily:"var(--font-body)",fontSize:"0.75rem",lineHeight:"1.25rem"},children:r}),l&&!r&&e.jsx("span",{id:x,style:{color:"var(--text-muted)",fontFamily:"var(--font-body)",fontSize:"0.75rem",fontStyle:"italic",lineHeight:"1.25rem"},children:l}),e.jsx("style",{children:`
          input::placeholder {
            color: var(--color-hai, #6B7280);
            font-style: italic;
          }
          @media (prefers-reduced-motion: reduce) {
            input {
              transition-duration: 0.01ms !important;
            }
          }
        `})]})});a.displayName="Input";a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:"Label text"},error:{required:!1,tsType:{name:"string"},description:"Error message — sets aria-invalid"},hint:{required:!1,tsType:{name:"string"},description:"Helper text below the input"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Input wrapper class"}}};const C={title:"Components/Input",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Text input with kinari border, aiiro focus ring, and error state via aria-invalid. Placeholder rendered in hai italic."}}},argTypes:{label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},error:{control:"text"},disabled:{control:"boolean"}}},i={args:{label:"Email address",placeholder:"you@example.com",hint:"We will never share your email."}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px"},children:[e.jsx(a,{label:"Default",placeholder:"Enter text..."}),e.jsx(a,{label:"With hint",placeholder:"Enter text...",hint:"This is a helpful hint."}),e.jsx(a,{label:"Error state",placeholder:"Enter text...",error:"This field is required."}),e.jsx(a,{label:"Disabled",placeholder:"Cannot edit",disabled:!0})]})},s={args:{label:"Username",defaultValue:"zanshin_user"}};var b,y,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    hint: 'We will never share your email.'
  }
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var g,I,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '400px'
  }}>
      <Input label="Default" placeholder="Enter text..." />
      <Input label="With hint" placeholder="Enter text..." hint="This is a helpful hint." />
      <Input label="Error state" placeholder="Enter text..." error="This field is required." />
      <Input label="Disabled" placeholder="Cannot edit" disabled />
    </div>
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var j,E,w;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    defaultValue: 'zanshin_user'
  }
}`,...(w=(E=s.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};const F=["Playground","States","WithValue"];export{i as Playground,o as States,s as WithValue,F as __namedExportsOrder,C as default};
