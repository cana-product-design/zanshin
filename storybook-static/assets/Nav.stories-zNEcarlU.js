import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as w}from"./index-DRjF_FHU.js";import{B}from"./Button-Bmn7kITj.js";const s=w.forwardRef(({items:a,brand:i,actions:r,variant:t="light",className:o,style:l,onNavigate:n},u)=>{const f=t==="dark"?{background:"#1A2744",borderBottom:"1px solid rgba(75, 179, 204, 0.2)"}:t==="transparent"?{background:"transparent",borderBottom:"1px solid var(--border-default)"}:{background:"var(--surface-base)",borderBottom:"1px solid var(--border-default)"};return e.jsxs("nav",{ref:u,className:o,"aria-label":"Main navigation",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--space-sm) var(--space-xl)",...f,...l},children:[i&&e.jsx("div",{style:{flexShrink:0},children:i}),e.jsx("ul",{role:"list",style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",margin:0,padding:0,listStyle:"none"},children:a.map(d=>e.jsx(z,{item:d,variant:t,onNavigate:n},d.href))}),r&&e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",flexShrink:0},children:r})]})});s.displayName="Nav";function z({item:a,variant:i,onNavigate:r}){const[t,o]=w.useState(!1),l=i==="dark",n=a.current,u={position:"relative",display:"inline-block",color:l?n?"#4DB3CC":t?"#F5F4EF":"rgba(245, 244, 239, 0.7)":n||t?"var(--text-primary)":"var(--text-secondary)",textDecoration:"none",fontFamily:"var(--font-body)",fontSize:"13px",letterSpacing:"0.05em",textTransform:"uppercase",padding:"var(--space-2) var(--space-3)",transition:"color var(--duration-medium) var(--ease-kendo)",outline:"none",cursor:"pointer",background:"none",border:"none"},f={position:"absolute",bottom:"-1px",left:0,width:n||t?"100%":"0%",height:"2px",background:l?"#4DB3CC":"var(--accent-primary)",transition:"width var(--duration-long) var(--ease-kendo)"},d=R=>{R.preventDefault(),r==null||r(a.href)};return e.jsxs("li",{children:[e.jsxs("a",{href:a.href,"aria-current":a.current?"page":void 0,style:u,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:r?d:void 0,children:[a.label,e.jsx("span",{"aria-hidden":"true",style:f})]}),e.jsx("style",{children:`
        @media (prefers-reduced-motion: reduce) {
          a span { transition-duration: 0.01ms !important; }
          a { transition-duration: 0.01ms !important; }
        }
      `})]})}s.__docgenInfo={description:"",methods:[],displayName:"Nav",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"NavItem"}],raw:"NavItem[]"},description:""},brand:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Brand/logo content"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Actions area (right side)"},variant:{required:!1,tsType:{name:"union",raw:"'dark' | 'light' | 'transparent'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"},{name:"literal",value:"'transparent'"}]},description:"Use kachiiro background (aizome dark style) or transparent",defaultValue:{value:"'light'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:"(href: string) => void",signature:{arguments:[{type:{name:"string"},name:"href"}],return:{name:"void"}}},description:"Called when a nav item is clicked"}}};const v=[{label:"Overview",href:"#overview"},{label:"Components",href:"#components",current:!0},{label:"Tokens",href:"#tokens"},{label:"Accessibility",href:"#a11y"}],T={title:"Components/Nav",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Navigation bar with sliding underline on hover (zanshin easing). Three variants: light, dark (kachiiro), and transparent. aria-current support for active page."}},layout:"fullscreen"},argTypes:{variant:{control:"select",options:["light","dark","transparent"]}}},c={args:{items:v,variant:"light",brand:e.jsx("span",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.125rem",color:"var(--text-primary)"},children:"残心"})}},p={render:()=>e.jsx(s,{variant:"light",items:v,brand:e.jsx("span",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.125rem",color:"var(--text-primary)"},children:"残心 Zanshin"}),actions:e.jsx(B,{size:"sm",variant:"ghost",children:"Sign in"})})},m={render:()=>e.jsx("div",{style:{background:"#1B2A4A"},children:e.jsx(s,{variant:"dark",items:v,brand:e.jsx("span",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.125rem",color:"#F5F4EF"},children:"残心 Zanshin"}),actions:e.jsx(B,{size:"sm",children:"Deploy"})})})};var y,g,h;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    variant: 'light',
    brand: <span style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '1.125rem',
      color: 'var(--text-primary)'
    }}>残心</span>
  }
}`,...(h=(g=c.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,b,k;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Nav variant="light" items={sampleItems} brand={<span style={{
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '1.125rem',
    color: 'var(--text-primary)'
  }}>残心 Zanshin</span>} actions={<Button size="sm" variant="ghost">Sign in</Button>} />
}`,...(k=(b=p.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var S,j,F;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#1B2A4A'
  }}>
      <Nav variant="dark" items={sampleItems} brand={<span style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '1.125rem',
      color: '#F5F4EF'
    }}>残心 Zanshin</span>} actions={<Button size="sm">Deploy</Button>} />
    </div>
}`,...(F=(j=m.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};const A=["Playground","LightVariant","DarkVariant"];export{m as DarkVariant,p as LightVariant,c as Playground,A as __namedExportsOrder,T as default};
