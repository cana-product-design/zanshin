import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as h}from"./index-DRjF_FHU.js";const j={sm:"var(--space-4)",md:"var(--space-8)",lg:"var(--space-xl)"},a=h.forwardRef(({variant:i="default",spacing:y="md",label:o,className:g,style:x},b)=>{const S={border:"none",height:i==="accent"?"2px":"1px",background:i==="accent"?"linear-gradient(90deg, transparent 0%, var(--accent-primary) 30%, #4DB3CC 70%, transparent 100%)":"linear-gradient(90deg, transparent 0%, var(--border-default) 20%, var(--border-default) 80%, transparent 100%)",margin:`${j[y]} 0`,...x};return e.jsx("hr",{ref:b,className:g,style:S,role:o?"separator":void 0,"aria-label":o})});a.displayName="Divider";a.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'accent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'accent'"}]},description:"Visual variant",defaultValue:{value:"'default'",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Vertical spacing above and below",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Accessible label (for screen readers)"},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const T={title:"Components/Divider",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Horizontal rule as a sumi-e brushstroke — gradients that fade to nothing at both ends, like ink absorbed into washi paper."}}},argTypes:{variant:{control:"select",options:["default","accent"]},spacing:{control:"select",options:["sm","md","lg"]}}},r={args:{variant:"default",spacing:"md"}},t={render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--font-body)",color:"var(--text-primary)",margin:0},children:"Section one — above the default divider"}),e.jsx(a,{variant:"default"}),e.jsx("p",{style:{fontFamily:"var(--font-body)",color:"var(--text-primary)",margin:0},children:"Section two — between dividers"}),e.jsx(a,{variant:"accent"}),e.jsx("p",{style:{fontFamily:"var(--font-body)",color:"var(--text-primary)",margin:0},children:"Section three — below the accent divider"})]})},n={render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--font-body)",color:"var(--text-secondary)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.06em"},children:"Small spacing"}),e.jsx(a,{spacing:"sm"}),e.jsx("p",{style:{fontFamily:"var(--font-body)",color:"var(--text-secondary)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.06em"},children:"Medium spacing (default)"}),e.jsx(a,{spacing:"md"}),e.jsx("p",{style:{fontFamily:"var(--font-body)",color:"var(--text-secondary)",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.06em"},children:"Large spacing"}),e.jsx(a,{spacing:"lg"})]})};var s,c,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    spacing: 'md'
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div>
      <p style={{
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      margin: 0
    }}>
        Section one — above the default divider
      </p>
      <Divider variant="default" />
      <p style={{
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      margin: 0
    }}>
        Section two — between dividers
      </p>
      <Divider variant="accent" />
      <p style={{
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      margin: 0
    }}>
        Section three — below the accent divider
      </p>
    </div>
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,f,u;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div>
      <p style={{
      fontFamily: 'var(--font-body)',
      color: 'var(--text-secondary)',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }}>
        Small spacing
      </p>
      <Divider spacing="sm" />
      <p style={{
      fontFamily: 'var(--font-body)',
      color: 'var(--text-secondary)',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }}>
        Medium spacing (default)
      </p>
      <Divider spacing="md" />
      <p style={{
      fontFamily: 'var(--font-body)',
      color: 'var(--text-secondary)',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }}>
        Large spacing
      </p>
      <Divider spacing="lg" />
    </div>
}`,...(u=(f=n.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const D=["Playground","BothVariants","SpacingVariants"];export{t as BothVariants,r as Playground,n as SpacingVariants,D as __namedExportsOrder,T as default};
