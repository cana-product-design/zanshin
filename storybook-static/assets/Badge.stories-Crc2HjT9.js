import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as r}from"./Badge-Cd0erqAQ.js";import"./index-DRjF_FHU.js";const f={title:"Components/Badge",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Inline label for status, category, or rank. Uppercase, 0.06em letter-spacing, xs font. Five variants covering all semantic roles."}}},argTypes:{variant:{control:"select",options:["primary","accent","success","warning","error"]},children:{control:"text"}}},a={args:{variant:"primary",children:"Badge"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"accent",children:"Accent"}),e.jsx(r,{variant:"success",children:"Success"}),e.jsx(r,{variant:"warning",children:"Warning"}),e.jsx(r,{variant:"error",children:"Error"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontFamily:"var(--font-body)"},children:[e.jsx("span",{style:{color:"var(--text-primary)",fontSize:"0.9375rem"},children:"Server status"}),e.jsx(r,{variant:"success",children:"Operational"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontFamily:"var(--font-body)"},children:[e.jsx("span",{style:{color:"var(--text-primary)",fontSize:"0.9375rem"},children:"Deployment"}),e.jsx(r,{variant:"warning",children:"Pending"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontFamily:"var(--font-body)"},children:[e.jsx("span",{style:{color:"var(--text-primary)",fontSize:"0.9375rem"},children:"Build"}),e.jsx(r,{variant:"error",children:"Failed"})]})]})};var s,i,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Badge'
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-body)'
    }}>
        <span style={{
        color: 'var(--text-primary)',
        fontSize: '0.9375rem'
      }}>Server status</span>
        <Badge variant="success">Operational</Badge>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-body)'
    }}>
        <span style={{
        color: 'var(--text-primary)',
        fontSize: '0.9375rem'
      }}>Deployment</span>
        <Badge variant="warning">Pending</Badge>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-body)'
    }}>
        <span style={{
        color: 'var(--text-primary)',
        fontSize: '0.9375rem'
      }}>Build</span>
        <Badge variant="error">Failed</Badge>
      </div>
    </div>
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const u=["Playground","AllVariants","WithContext"];export{n as AllVariants,a as Playground,t as WithContext,u as __namedExportsOrder,f as default};
