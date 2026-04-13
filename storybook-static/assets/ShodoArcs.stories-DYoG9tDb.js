import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as x}from"./index-DRjF_FHU.js";const R=`
  @keyframes hiki-fude {
    from { opacity: 0; transform: translateX(-20px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes tate-fude {
    from { opacity: 0; transform: translateY(-14px) scaleY(0.96); transform-origin: top center; }
    to   { opacity: 1; transform: translateY(0) scaleY(1); }
  }
  @keyframes fude-okoshi {
    from { opacity: 0; transform: translateY(10px) scale(0.99); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes zanshin-hiki {
    from { opacity: 1; transform: translateY(0) scale(1); }
    to   { opacity: 0; transform: translateY(-8px) scale(0.995); }
  }
  @keyframes fude-stagger-in {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @media (prefers-reduced-motion: reduce) {
    [class*="arc-"] { animation-duration: 1ms !important; }
  }
`;function a(){if(typeof document>"u"||document.getElementById("shodo-keyframes"))return;const s=document.createElement("style");s.id="shodo-keyframes",s.textContent=R,document.head.appendChild(s)}const o={background:"#141820",minHeight:"320px",borderRadius:"4px",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:"48px 56px",gap:"24px",position:"relative",fontFamily:"'Cormorant Garamond', 'Noto Serif JP', Georgia, serif"},t={fontFamily:"Inter, system-ui, sans-serif",fontSize:"11px",letterSpacing:"0.14em",textTransform:"uppercase",color:"#4A4860",marginBottom:"4px"},l={marginTop:"32px",padding:"8px 20px",background:"transparent",border:"1px solid rgba(91,143,168,0.35)",borderRadius:"4px",color:"#5B8FA8",fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",letterSpacing:"0.08em",cursor:"pointer",transition:"border-color 300ms cubic-bezier(0.4,0.0,0.2,1), color 300ms cubic-bezier(0.4,0.0,0.2,1)"};function d(){const[s,i]=x.useState(0),r=x.useCallback(()=>i(n=>n+1),[]);return{key:s,strike:r}}function W(){a();const{key:s,strike:i}=d();return e.jsxs("div",{style:o,children:[e.jsx("p",{style:t,children:"Hiki-fude 引き筆 — The drawn line"}),e.jsxs("div",{style:{animation:"hiki-fude 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("h2",{style:{fontSize:"36px",fontWeight:300,color:"#E8EBF0",lineHeight:1.2,margin:0},children:"残心"}),e.jsx("p",{style:{fontSize:"16px",color:"#8AAFC0",margin:0,fontFamily:"Inter, system-ui, sans-serif",fontWeight:300},children:"Lingering awareness — the panel enters from the left."}),e.jsx("div",{style:{marginTop:"4px",height:"1px",width:"200px",background:"linear-gradient(90deg, #5B8FA8, transparent)"}})]},s),e.jsx("p",{style:{...t,position:"absolute",bottom:"24px",right:"24px",margin:0,opacity:.6},children:"ease-kendo · 700ms"}),e.jsx("button",{style:l,onClick:i,children:"Strike again"})]})}function U(){a();const{key:s,strike:i}=d();return e.jsxs("div",{style:o,children:[e.jsx("p",{style:t,children:"Tate-fude 縦筆 — The vertical drop"}),e.jsxs("div",{style:{animation:"tate-fude 500ms cubic-bezier(0.0, 0.0, 0.2, 1) both",background:"#1E2230",border:"1px solid rgba(91,143,168,0.15)",borderRadius:"4px",padding:"28px 32px",width:"100%",maxWidth:"360px"},children:[e.jsx("p",{style:{...t,marginBottom:"12px"},children:"Dropdown · Modal · Banner"}),e.jsx("p",{style:{fontSize:"20px",fontWeight:300,color:"#E8EBF0",margin:"0 0 12px 0"},children:"The brush descends."}),e.jsx("p",{style:{fontSize:"13px",color:"#8AAFC0",margin:0,fontFamily:"Inter, system-ui, sans-serif",lineHeight:1.6},children:"Fast entry — ink meets paper with intent. Decisive, not aggressive."})]},s),e.jsx("p",{style:{...t,position:"absolute",bottom:"24px",right:"24px",margin:0,opacity:.6},children:"ease-strike · 500ms"}),e.jsx("button",{style:l,onClick:i,children:"Strike again"})]})}function Y(){a();const{key:s,strike:i}=d();return e.jsxs("div",{style:o,children:[e.jsx("p",{style:t,children:"Fude-okoshi 筆起こし — The brush awakening"}),e.jsxs("div",{style:{animation:"fude-okoshi 700ms cubic-bezier(0.4, 0.0, 0.2, 1) both",display:"flex",flexDirection:"column",gap:"16px",width:"100%",maxWidth:"400px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"4px",background:"rgba(91,143,168,0.12)",border:"1px solid rgba(91,143,168,0.22)",flexShrink:0}}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"15px",color:"#E8EBF0",margin:"0 0 4px 0",fontFamily:"Inter, system-ui, sans-serif",fontWeight:500},children:"Scroll reveal"}),e.jsx("p",{style:{fontSize:"12px",color:"#4A4860",margin:0,fontFamily:"Inter, system-ui, sans-serif"},children:"fude-okoshi · ease-zen · 700ms"})]})]}),e.jsx("p",{style:{fontSize:"18px",fontWeight:300,color:"#8AAFC0",margin:0,lineHeight:1.5},children:"The mark appears as if it was always there, gradually becoming visible."})]},s),e.jsx("button",{style:l,onClick:i,children:"Strike again"})]})}function Z(){a();const[s,i]=x.useState(!0),r=()=>i(!1),n=()=>i(!0);return e.jsxs("div",{style:o,children:[e.jsx("p",{style:t,children:"Zanshin-hiki 残心引き — The lingering exit"}),s?e.jsxs("div",{style:{animation:"fude-okoshi 500ms cubic-bezier(0.4, 0.0, 0.2, 1) both",background:"#1E2230",border:"1px solid rgba(91,143,168,0.22)",borderRadius:"4px",padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px",width:"100%",maxWidth:"400px"},children:[e.jsx("p",{style:{fontSize:"14px",color:"#8AAFC0",margin:0,fontFamily:"Inter, system-ui, sans-serif"},children:"The brush is still present after the stroke."}),e.jsx("button",{onClick:r,style:{background:"transparent",border:"1px solid rgba(91,143,168,0.22)",borderRadius:"2px",color:"#4A4860",fontFamily:"Inter, system-ui, sans-serif",fontSize:"11px",padding:"4px 10px",cursor:"pointer",letterSpacing:"0.06em",flexShrink:0},children:"Dismiss"})]}):e.jsxs("div",{style:{animation:"zanshin-hiki 1000ms cubic-bezier(0.0, 0.0, 0.1, 1) both",background:"#1E2230",border:"1px solid rgba(91,143,168,0.22)",borderRadius:"4px",padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px",width:"100%",maxWidth:"400px",pointerEvents:"none"},children:[e.jsx("p",{style:{fontSize:"14px",color:"#8AAFC0",margin:0,fontFamily:"Inter, system-ui, sans-serif"},children:"The brush is still present after the stroke."}),e.jsx("div",{style:{width:"52px",height:"25px",background:"rgba(91,143,168,0.06)",borderRadius:"2px"}})]}),e.jsx("p",{style:{...t,position:"absolute",bottom:"24px",right:"24px",margin:0,opacity:.6},children:"ease-zanshin · 1000ms"}),!s&&e.jsx("button",{style:{...l,marginTop:"16px"},onClick:n,children:"Restore"})]})}const L=[{kanji:"攻",romaji:"Seme",label:"Approach",color:"#5B8FA8"},{kanji:"打",romaji:"Utte",label:"Strike",color:"#2E6B8A"},{kanji:"残",romaji:"Zan",label:"Linger",color:"#8AAFC0"},{kanji:"心",romaji:"Shin",label:"Awareness",color:"#E8EBF0"}];function _(){a();const{key:s,strike:i}=d();return e.jsxs("div",{style:{...o,gap:"0"},children:[e.jsx("p",{style:{...t,marginBottom:"32px"},children:"Stagger — the composed composition (80ms ma interval)"}),e.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:L.map((r,n)=>e.jsxs("div",{style:{animation:"fude-stagger-in 700ms cubic-bezier(0.4, 0.0, 0.2, 1) both",animationDelay:`${n*80}ms`,display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",minWidth:"72px"},children:[e.jsx("span",{style:{fontSize:"48px",fontWeight:300,color:r.color,lineHeight:1,display:"block"},children:r.kanji}),e.jsx("span",{style:{fontSize:"11px",color:"#4A4860",fontFamily:"Inter, system-ui, sans-serif",letterSpacing:"0.1em",textTransform:"uppercase"},children:r.romaji}),e.jsxs("span",{style:{fontSize:"10px",color:"rgba(74,72,96,0.6)",fontFamily:"Inter, system-ui, sans-serif"},children:["+",n*80,"ms"]})]},r.kanji))},s),e.jsx("button",{style:l,onClick:i,children:"Strike again"})]})}function M(){a();const{key:s,strike:i}=d(),r=[{name:"Hiki-fude",kanji:"引き筆",animation:"hiki-fude 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both",desc:"ease-kendo · 700ms",delay:"0ms"},{name:"Tate-fude",kanji:"縦筆",animation:"tate-fude 500ms cubic-bezier(0.0, 0.0, 0.2, 1) both",desc:"ease-strike · 500ms",delay:"80ms"},{name:"Fude-okoshi",kanji:"筆起こし",animation:"fude-okoshi 700ms cubic-bezier(0.4, 0.0, 0.2, 1) both",desc:"ease-zen · 700ms",delay:"160ms"},{name:"Zanshin-hiki",kanji:"残心引き",animation:"zanshin-hiki 1000ms cubic-bezier(0.0, 0.0, 0.1, 1) both",desc:"ease-zanshin · 1000ms",delay:"240ms"}];return e.jsxs("div",{style:{...o,flexDirection:"column",gap:"0",padding:"40px 48px"},children:[e.jsx("p",{style:{...t,marginBottom:"32px"},children:"All four arcs — sequential composition"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"16px",width:"100%"},children:r.map(n=>e.jsx("div",{style:{background:"#1E2230",border:"1px solid rgba(91,143,168,0.12)",borderRadius:"4px",padding:"24px",overflow:"hidden",position:"relative"},children:e.jsxs("div",{style:{animation:n.animation,animationDelay:n.delay},children:[e.jsx("p",{style:{fontSize:"28px",fontWeight:300,color:"#5B8FA8",margin:"0 0 8px 0"},children:n.kanji}),e.jsx("p",{style:{fontSize:"14px",fontWeight:500,color:"#E8EBF0",margin:"0 0 4px 0",fontFamily:"Inter, system-ui, sans-serif"},children:n.name}),e.jsx("p",{style:{fontSize:"11px",color:"#4A4860",margin:0,fontFamily:"Inter, system-ui, sans-serif",letterSpacing:"0.06em"},children:n.desc})]},s)},n.name))}),e.jsx("button",{style:l,onClick:i,children:"Strike again"})]})}const P={title:"Motion/Shodo Arcs",parameters:{docs:{description:{component:"Ink-brush entry animations derived from Shodo calligraphy. Each arc maps a physical brush action to a UI motion pattern, rendered on the ao-sumi dark ground (#141820). See Docs/Shodo Motion for the full philosophical context."}},backgrounds:{default:"ao-sumi",values:[{name:"ao-sumi",value:"#141820"},{name:"sumi-nuri",value:"#1E2230"},{name:"shironeri",value:"#F5F4EF"}]}}},c={name:"Hiki-fude (Directional Pull)",render:()=>e.jsx(W,{}),parameters:{docs:{description:{story:"The brush pulls across the paper in a single confident stroke. Use for panels sliding in, toasts entering from an edge, navigation expanding. **Easing:** `--ease-kendo` (controlled deceleration)."}}}},p={name:"Tate-fude (Vertical Drop)",render:()=>e.jsx(U,{}),parameters:{docs:{description:{story:"The brush descends — ink falls from tip to paper. Use for dropdown menus, modal sheets, notification banners. **Easing:** `--ease-strike` (fast entry, hard deceleration)."}}}},m={name:"Fude-okoshi (Reveal in Place)",render:()=>e.jsx(Y,{}),parameters:{docs:{description:{story:"The brush is placed and pressed before moving — the mark begins as a dot that blossoms. Use for scroll-triggered reveals, on-load card appearances. **Easing:** `--ease-zen` (balanced, meditative)."}}}},h={name:"Zanshin-hiki (Lingering Exit)",render:()=>e.jsx(Z,{}),parameters:{docs:{description:{story:"When the brush lifts, it does not vanish. Use for **all exits** — closing modals, dismissed toasts, collapsing panels. **Easing:** `--ease-zanshin` (extreme deceleration — the element nearly stops before it disappears)."}}}},u={name:"Stagger (Composed Composition)",render:()=>e.jsx(_,{}),parameters:{docs:{description:{story:"A shodo composition is not a single stroke — it is a sequence. Each element enters 80ms (`--duration-ma`) after the previous, reading as one intentional composition."}}}},g={name:"All Arcs — Side by Side",render:()=>e.jsx(M,{}),parameters:{docs:{description:{story:"All four motion arcs in a single view. Use this story for visual regression testing and to compare easing curves against the ao-sumi ground."}}}};var f,y,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Hiki-fude (Directional Pull)',
  render: () => <HikiFudeDemo />,
  parameters: {
    docs: {
      description: {
        story: 'The brush pulls across the paper in a single confident stroke. Use for panels sliding in, toasts entering from an edge, navigation expanding. **Easing:** \`--ease-kendo\` (controlled deceleration).'
      }
    }
  }
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var k,j,S;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Tate-fude (Vertical Drop)',
  render: () => <TateFudeDemo />,
  parameters: {
    docs: {
      description: {
        story: 'The brush descends — ink falls from tip to paper. Use for dropdown menus, modal sheets, notification banners. **Easing:** \`--ease-strike\` (fast entry, hard deceleration).'
      }
    }
  }
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var v,F,A;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Fude-okoshi (Reveal in Place)',
  render: () => <FudeOkoshiDemo />,
  parameters: {
    docs: {
      description: {
        story: 'The brush is placed and pressed before moving — the mark begins as a dot that blossoms. Use for scroll-triggered reveals, on-load card appearances. **Easing:** \`--ease-zen\` (balanced, meditative).'
      }
    }
  }
}`,...(A=(F=m.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var E,z,T;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Zanshin-hiki (Lingering Exit)',
  render: () => <ZanshinHikiDemo />,
  parameters: {
    docs: {
      description: {
        story: 'When the brush lifts, it does not vanish. Use for **all exits** — closing modals, dismissed toasts, collapsing panels. **Easing:** \`--ease-zanshin\` (extreme deceleration — the element nearly stops before it disappears).'
      }
    }
  }
}`,...(T=(z=h.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var C,D,w;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Stagger (Composed Composition)',
  render: () => <StaggerDemo />,
  parameters: {
    docs: {
      description: {
        story: 'A shodo composition is not a single stroke — it is a sequence. Each element enters 80ms (\`--duration-ma\`) after the previous, reading as one intentional composition.'
      }
    }
  }
}`,...(w=(D=u.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var I,B,H;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'All Arcs — Side by Side',
  render: () => <AllArcsDemo />,
  parameters: {
    docs: {
      description: {
        story: 'All four motion arcs in a single view. Use this story for visual regression testing and to compare easing curves against the ao-sumi ground.'
      }
    }
  }
}`,...(H=(B=g.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const q=["HikiFude","TateFude","FudeOkoshi","ZanshinHiki","StaggerComposition","AllArcs"];export{g as AllArcs,m as FudeOkoshi,c as HikiFude,u as StaggerComposition,p as TateFude,h as ZanshinHiki,q as __namedExportsOrder,P as default};
