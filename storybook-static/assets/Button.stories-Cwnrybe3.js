import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as r}from"./Button-2KxsfuRR.js";import"./index-DRjF_FHU.js";const G={title:"Components/Button",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Primary action element. Three variants: primary (aiiro/kintsugi-gold bg), ghost (transparent with accent border), danger (error bg). Zanshin transitions on hover/active."}}},argTypes:{variant:{control:"select",options:["primary","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"},disabled:{control:"boolean"},children:{control:"text"}}},a={args:{variant:"primary",size:"md",children:"Take action",loading:!1,disabled:!1}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"danger",children:"Danger"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{children:"Normal"}),e.jsx(r,{loading:!0,children:"Loading"}),e.jsx(r,{disabled:!0,children:"Disabled"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{variant:"ghost",size:"sm",children:"Ghost Small"}),e.jsx(r,{variant:"ghost",size:"md",children:"Ghost Medium"}),e.jsx(r,{variant:"ghost",size:"lg",children:"Ghost Large"})]})};var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Take action',
    loading: false,
    disabled: false
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,v,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Button>Normal</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var B,f,j;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Button variant="ghost" size="sm">Ghost Small</Button>
      <Button variant="ghost" size="md">Ghost Medium</Button>
      <Button variant="ghost" size="lg">Ghost Large</Button>
    </div>
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const w=["Playground","Variants","Sizes","States","GhostVariants"];export{o as GhostVariants,a as Playground,s as Sizes,n as States,t as Variants,w as __namedExportsOrder,G as default};
