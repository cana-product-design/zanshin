import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as i}from"./index-DRjF_FHU.js";import{B as l}from"./Button-Bmn7kITj.js";function a({content:m,placement:f="top",delay:w=150,children:p}){const[s,g]=i.useState(!1),[A,h]=i.useState(!1),u=i.useRef(),x=`zanshin-tooltip-${i.useId().replace(/:/g,"")}`,b=()=>{u.current=setTimeout(()=>{h(!0),requestAnimationFrame(()=>g(!0))},w)},v=()=>{clearTimeout(u.current),g(!1),setTimeout(()=>h(!1),200)};i.useEffect(()=>()=>clearTimeout(u.current),[]);const t=6,z={top:{bottom:"100%",left:"50%",transform:`translateX(-50%) translateY(${s?"-6px":"0px"})`,marginBottom:`${t}px`},bottom:{top:"100%",left:"50%",transform:`translateX(-50%) translateY(${s?"6px":"0px"})`,marginTop:`${t}px`},left:{right:"100%",top:"50%",transform:`translateY(-50%) translateX(${s?"-6px":"0px"})`,marginRight:`${t}px`},right:{left:"100%",top:"50%",transform:`translateY(-50%) translateX(${s?"6px":"0px"})`,marginLeft:`${t}px`}},E={top:{bottom:-t,left:"50%",transform:"translateX(-50%)",borderLeft:`${t}px solid transparent`,borderRight:`${t}px solid transparent`,borderTop:`${t}px solid #1A2744`},bottom:{top:-t,left:"50%",transform:"translateX(-50%)",borderLeft:`${t}px solid transparent`,borderRight:`${t}px solid transparent`,borderBottom:`${t}px solid #1A2744`},left:{right:-t,top:"50%",transform:"translateY(-50%)",borderTop:`${t}px solid transparent`,borderBottom:`${t}px solid transparent`,borderLeft:`${t}px solid #1A2744`},right:{left:-t,top:"50%",transform:"translateY(-50%)",borderTop:`${t}px solid transparent`,borderBottom:`${t}px solid transparent`,borderRight:`${t}px solid #1A2744`}},L={position:"absolute",zIndex:9999,background:"#1A2744",color:"#F5F4EF",padding:"var(--space-2) var(--space-3)",borderRadius:"var(--radius-md)",fontFamily:"var(--font-body)",fontSize:"0.8125rem",lineHeight:1.4,whiteSpace:"nowrap",pointerEvents:"none",opacity:s?1:0,transition:"opacity var(--duration-short) var(--ease-kendo), transform var(--duration-short) var(--ease-kendo)",maxWidth:"280px",...z[f]},S=i.cloneElement(p,{"aria-describedby":s?x:void 0,onMouseEnter:n=>{var o,r;b(),(r=(o=p.props).onMouseEnter)==null||r.call(o,n)},onMouseLeave:n=>{var o,r;v(),(r=(o=p.props).onMouseLeave)==null||r.call(o,n)},onFocus:n=>{var o,r;b(),(r=(o=p.props).onFocus)==null||r.call(o,n)},onBlur:n=>{var o,r;v(),(r=(o=p.props).onBlur)==null||r.call(o,n)}});return e.jsxs("span",{style:{position:"relative",display:"inline-flex"},children:[S,A&&e.jsxs("span",{id:x,role:"tooltip",style:L,children:[m,e.jsx("span",{"aria-hidden":"true",style:{position:"absolute",width:0,height:0,...E[f]}})]}),e.jsx("style",{children:`
        @media (prefers-reduced-motion: reduce) {
          [role="tooltip"] { transition-duration: 0.01ms !important; }
        }
      `})]})}a.displayName="Tooltip";a.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The tooltip text content"},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Where the tooltip appears relative to the trigger",defaultValue:{value:"'top'",computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"Delay before showing (ms)",defaultValue:{value:"150",computed:!1}},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const M={title:"Components/Tooltip",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Appears on hover/focus after a configurable delay (default 150ms). Kachiiro background with shironeri text. Arrow indicator. Four placement options."}},layout:"centered"},argTypes:{placement:{control:"select",options:["top","bottom","left","right"]},delay:{control:"number"},content:{control:"text"}}},c={args:{content:"Lingering awareness after action",placement:"top",delay:150},render:m=>e.jsx(a,{...m,children:e.jsx(l,{children:"Hover over me"})})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",flexWrap:"wrap",justifyContent:"center",padding:"48px"},children:[e.jsx(a,{content:"Appears above",placement:"top",children:e.jsx(l,{variant:"ghost",size:"sm",children:"Top"})}),e.jsx(a,{content:"Appears below",placement:"bottom",children:e.jsx(l,{variant:"ghost",size:"sm",children:"Bottom"})}),e.jsx(a,{content:"Appears left",placement:"left",children:e.jsx(l,{variant:"ghost",size:"sm",children:"Left"})}),e.jsx(a,{content:"Appears right",placement:"right",children:e.jsx(l,{variant:"ghost",size:"sm",children:"Right"})})]})};var y,T,$;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    content: 'Lingering awareness after action',
    placement: 'top',
    delay: 150
  },
  render: args => <Tooltip {...args}>
      <Button>Hover over me</Button>
    </Tooltip>
}`,...($=(T=c.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var B,R,j;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '48px'
  }}>
      <Tooltip content="Appears above" placement="top">
        <Button variant="ghost" size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Appears below" placement="bottom">
        <Button variant="ghost" size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip content="Appears left" placement="left">
        <Button variant="ghost" size="sm">Left</Button>
      </Tooltip>
      <Tooltip content="Appears right" placement="right">
        <Button variant="ghost" size="sm">Right</Button>
      </Tooltip>
    </div>
}`,...(j=(R=d.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const k=["Playground","AllPlacements"];export{d as AllPlacements,c as Playground,k as __namedExportsOrder,M as default};
