import{j as s}from"./jsx-runtime-DiklIkkE.js";import{R as r}from"./index-DRjF_FHU.js";import{B as T}from"./Button-2KxsfuRR.js";const F={success:{bg:"rgba(45, 106, 79, 0.95)",color:"#F5F4EF",icon:"✓"},warning:{bg:"rgba(180, 83, 9, 0.95)",color:"#F5F4EF",icon:"⚠"},error:{bg:"rgba(155, 28, 28, 0.95)",color:"#F5F4EF",icon:"✕"},info:{bg:"rgba(43, 91, 168, 0.95)",color:"#F5F4EF",icon:"ℹ"}};function p({toasts:t,onDismiss:o,maxVisible:a=3}){const i=t.slice(-a);return s.jsxs("div",{"aria-live":"polite","aria-atomic":"false",style:{position:"fixed",bottom:"var(--space-md)",right:"var(--space-md)",zIndex:9999,display:"flex",flexDirection:"column",gap:"var(--space-2)",alignItems:"flex-end",pointerEvents:"none"},children:[i.map((n,e)=>s.jsx(S,{toast:n,index:e,onDismiss:o},n.id)),s.jsx("style",{children:`
        @keyframes toast-enter {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes toast-exit {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(8px) scale(0.95); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; }
        }
      `})]})}p.displayName="Toast";function S({toast:t,onDismiss:o}){const[a,i]=r.useState(!1),n=t.variant??"info",e=F[n],c=r.useCallback(()=>{i(!0),setTimeout(()=>o(t.id),300)},[o,t.id]);return r.useEffect(()=>{const d=t.duration??5e3;if(d<=0)return;const l=setTimeout(c,d);return()=>clearTimeout(l)},[t.id,t.duration,c]),s.jsxs("div",{role:"status","aria-live":"polite",style:{display:"flex",alignItems:"flex-start",gap:"var(--space-3)",padding:"var(--space-4) var(--space-6)",background:e.bg,color:e.color,borderRadius:"var(--radius-md)",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.2)",fontFamily:"var(--font-body)",fontSize:"0.875rem",lineHeight:1.5,maxWidth:"360px",minWidth:"280px",pointerEvents:"auto",animation:a?"toast-exit 300ms var(--ease-kendo) forwards":"toast-enter 350ms var(--ease-strike) both"},children:[s.jsx("span",{"aria-hidden":"true",style:{flexShrink:0,fontWeight:700,fontSize:"0.875rem",lineHeight:"1.5"},children:e.icon}),s.jsx("span",{style:{flex:1},children:t.message}),s.jsx("button",{onClick:c,"aria-label":"Dismiss notification",style:{background:"none",border:"none",color:e.color,cursor:"pointer",opacity:.7,padding:0,fontSize:"0.875rem",lineHeight:1,flexShrink:0,transition:"opacity 150ms"},children:"✕"})]})}function h(){const[t,o]=r.useState([]),a=r.useCallback((e,c,d)=>{const l=`toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;return o(k=>[...k,{id:l,message:e,variant:c,duration:d}]),l},[]),i=r.useCallback(e=>{o(c=>c.filter(d=>d.id!==e))},[]),n=r.useCallback(()=>{o([])},[]);return{toasts:t,add:a,dismiss:i,dismissAll:n}}p.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{toasts:{required:!0,tsType:{name:"Array",elements:[{name:"ToastItem"}],raw:"ToastItem[]"},description:""},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},maxVisible:{required:!1,tsType:{name:"number"},description:"Maximum visible toasts",defaultValue:{value:"3",computed:!1}}}};const C={title:"Components/Toast",tags:["autodocs"],parameters:{docs:{description:{component:"Notification toasts. Four variants (success, warning, error, info). Auto-dismiss after 5s. Enter animation from bottom using kamae keyframe. Stacks up to 3."}}}};function j(){const{toasts:t,add:o,dismiss:a}=h(),i=["success","warning","error","info"],n={success:"Deployment succeeded — all 12 components shipped.",warning:"Attention: APCA contrast annotation may be stale.",error:"Build failed — check the CI workflow output.",info:"Storybook is available at localhost:6006."};return s.jsxs("div",{children:[s.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:i.map(e=>s.jsx(T,{variant:"ghost",size:"sm",onClick:()=>o(n[e],e),children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),s.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"0.8125rem",color:"var(--text-secondary)",marginTop:"12px"},children:"Toasts auto-dismiss after 5 seconds. Stacks up to 3 visible at once."}),s.jsx(p,{toasts:t,onDismiss:a})]})}const m={render:()=>s.jsx(j,{})},u={render:()=>{const{toasts:t,add:o,dismiss:a}=h();return r.useEffect(()=>{o("Deployment succeeded.","success",0),o("Attention: check contrast.","warning",0),o("Build failed.","error",0),o("Storybook running.","info",0)},[]),s.jsxs("div",{children:[s.jsx("p",{style:{fontFamily:"var(--font-body)",color:"var(--text-secondary)",fontSize:"0.875rem"},children:"Four variants shown simultaneously (no auto-dismiss)."}),s.jsx(p,{toasts:t,onDismiss:a,maxVisible:4})]})}};var f,x,g;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ToastDemo />
}`,...(g=(x=m.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,b,v;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const {
      toasts,
      add,
      dismiss
    } = useToast();
    React.useEffect(() => {
      add('Deployment succeeded.', 'success', 0);
      add('Attention: check contrast.', 'warning', 0);
      add('Build failed.', 'error', 0);
      add('Storybook running.', 'info', 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <div>
        <p style={{
        fontFamily: 'var(--font-body)',
        color: 'var(--text-secondary)',
        fontSize: '0.875rem'
      }}>
          Four variants shown simultaneously (no auto-dismiss).
        </p>
        <Toast toasts={toasts} onDismiss={dismiss} maxVisible={4} />
      </div>;
  }
}`,...(v=(b=u.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const D=["Playground","AllVariants"];export{u as AllVariants,m as Playground,D as __namedExportsOrder,C as default};
