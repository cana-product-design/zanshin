import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as v}from"./index-DRjF_FHU.js";import{B as f}from"./Button-Bmn7kITj.js";import{B as E}from"./Badge-Cd0erqAQ.js";const r=v.forwardRef(({children:c,title:o,description:p,footer:m,interactive:t=!1,className:T,style:R,onClick:a},B)=>{const[l,u]=v.useState(!1),H={background:"var(--surface-raised)",border:l&&t?"1px solid rgba(75, 179, 204, 0.4)":"1px solid var(--border-default)",borderRadius:"var(--radius-lg)",padding:"var(--space-8)",position:"relative",overflow:"hidden",transition:"box-shadow var(--duration-medium) var(--ease-kendo), border-color var(--duration-medium) var(--ease-kendo)",boxShadow:l&&t?"0 8px 32px rgba(27, 42, 74, 0.12), 0 2px 8px rgba(27, 42, 74, 0.08)":"none",cursor:a?"pointer":"default",...R},N={content:'""',position:"absolute",top:0,left:0,width:"100%",height:"3px",background:"linear-gradient(90deg, var(--accent-primary), #4DB3CC)",opacity:l&&t?1:0,transition:"opacity var(--duration-long) var(--ease-zen)",pointerEvents:"none"};return e.jsxs("div",{ref:B,className:T,style:H,onClick:a,onMouseEnter:()=>t&&u(!0),onMouseLeave:()=>t&&u(!1),role:a?"button":void 0,tabIndex:a?0:void 0,onKeyDown:a?i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),a(i))}:void 0,children:[t&&e.jsx("div",{"aria-hidden":"true",style:N}),(o||p)&&e.jsxs("div",{style:{marginBottom:c?"var(--space-4)":0},children:[o&&e.jsx("h3",{style:{margin:0,fontFamily:"var(--font-display)",fontWeight:600,fontSize:"1.125rem",color:"var(--text-primary)",lineHeight:1.3},children:o}),p&&e.jsx("p",{style:{margin:o?"var(--space-1) 0 0":0,fontFamily:"var(--font-body)",fontSize:"0.875rem",color:"var(--text-secondary)",lineHeight:1.5},children:p})]}),c&&e.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:"0.9375rem",color:"var(--text-primary)",lineHeight:1.6},children:c}),m&&e.jsx("div",{style:{marginTop:"var(--space-6)",paddingTop:"var(--space-4)",borderTop:"1px solid var(--border-default)"},children:m}),e.jsx("style",{children:`
          @media (prefers-reduced-motion: reduce) {
            div {
              transition-duration: 0.01ms !important;
            }
          }
        `})]})});r.displayName="Card";r.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:"Card title"},description:{required:!1,tsType:{name:"string"},description:"Card subtitle / description"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Footer content"},interactive:{required:!1,tsType:{name:"boolean"},description:"Make the card interactive (hover effects)",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};const I={title:"Components/Card",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Washi surface with kinari border. Interactive variant shows an aiiro-to-asagi bloom on the top edge and elevated shadow on hover."}}},argTypes:{title:{control:"text"},description:{control:"text"},interactive:{control:"boolean"}}},n={args:{title:"Zanshin Card",description:"Lingering awareness after action.",interactive:!0,children:"Card body content goes here. This surface uses washi paper coloring — warm, textured, honest."}},s={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"24px"},children:[e.jsx(r,{title:"Static card",description:"Non-interactive surface",children:"Content without hover effects."}),e.jsx(r,{title:"Interactive card",description:"Hover to reveal bloom",interactive:!0,children:"Hover over this card to see the aiiro-to-asagi top border appear."}),e.jsx(r,{title:"Card with footer",description:"Actions in the footer area",interactive:!0,footer:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(f,{size:"sm",children:"Confirm"}),e.jsx(f,{size:"sm",variant:"ghost",children:"Cancel"})]}),children:"Card body with footer actions."})]})},d={render:()=>e.jsx(r,{title:"Feature",description:"New in v1.0",interactive:!0,footer:e.jsx(E,{variant:"success",children:"Shipped"}),children:"A card demonstrating the integration of badge and footer components."})};var h,g,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Zanshin Card',
    description: 'Lingering awareness after action.',
    interactive: true,
    children: 'Card body content goes here. This surface uses washi paper coloring — warm, textured, honest.'
  }
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,b,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px'
  }}>
      <Card title="Static card" description="Non-interactive surface">
        Content without hover effects.
      </Card>
      <Card title="Interactive card" description="Hover to reveal bloom" interactive>
        Hover over this card to see the aiiro-to-asagi top border appear.
      </Card>
      <Card title="Card with footer" description="Actions in the footer area" interactive footer={<div style={{
      display: 'flex',
      gap: '8px'
    }}>
            <Button size="sm">Confirm</Button>
            <Button size="sm" variant="ghost">Cancel</Button>
          </div>}>
        Card body with footer actions.
      </Card>
    </div>
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var w,j,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Card title="Feature" description="New in v1.0" interactive footer={<Badge variant="success">Shipped</Badge>}>
      A card demonstrating the integration of badge and footer components.
    </Card>
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const D=["Playground","Variants","WithBadge"];export{n as Playground,s as Variants,d as WithBadge,D as __namedExportsOrder,I as default};
