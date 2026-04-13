import{j as s}from"./jsx-runtime-DiklIkkE.js";import{R as i}from"./index-DRjF_FHU.js";import{B as T}from"./Button-Bmn7kITj.js";const S={success:{bg:"rgba(45, 106, 79, 0.95)",color:"var(--color-bg, #F5F4EF)",icon:"✓"},warning:{bg:"rgba(180, 83, 9, 0.95)",color:"var(--color-bg, #F5F4EF)",icon:"⚠"},error:{bg:"rgba(155, 28, 28, 0.95)",color:"var(--color-bg, #F5F4EF)",icon:"✕"},info:{bg:"rgba(43, 91, 168, 0.95)",color:"var(--color-bg, #F5F4EF)",icon:"ℹ"}};function p({toasts:t,onDismiss:a,maxVisible:o=3}){const c=t.slice(-o);return s.jsxs("div",{"aria-live":"polite","aria-atomic":"false",style:{position:"fixed",bottom:"var(--space-8)",right:"var(--space-8)",zIndex:9999,display:"flex",flexDirection:"column",gap:"var(--space-2)",alignItems:"flex-end",pointerEvents:"none"},children:[c.map((r,e)=>s.jsx(j,{toast:r,index:e,onDismiss:a},r.id)),s.jsx("style",{children:`
        /* Seme approach — slides in from right (like a iai draw) */
        @keyframes zanshin-toast-enter {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        /* Mujō departure — message lingers, then fades + sinks */
        @keyframes zanshin-toast-exit {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(8px) scale(0.96); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `})]})}p.displayName="Toast";function j({toast:t,onDismiss:a}){const[o,c]=i.useState(!1),r=t.variant??"info",e=S[r],d=i.useCallback(()=>{c(!0),setTimeout(()=>a(t.id),400)},[a,t.id]);return i.useEffect(()=>{const n=t.duration??5e3;if(n<=0)return;const l=setTimeout(d,n);return()=>clearTimeout(l)},[t.id,t.duration,d]),s.jsxs("div",{role:"status","aria-live":"polite",style:{display:"flex",alignItems:"flex-start",gap:"var(--space-3)",padding:"var(--space-4) var(--space-6)",background:e.bg,color:e.color,borderRadius:"var(--radius-md)",boxShadow:"0 4px 20px rgba(27,42,74,0.25)",fontFamily:"var(--font-body)",fontSize:"0.875rem",lineHeight:1.5,maxWidth:"360px",minWidth:"280px",pointerEvents:"auto",animation:o?"zanshin-toast-exit var(--duration-long) var(--ease-zanshin) forwards":"zanshin-toast-enter var(--duration-short) var(--ease-strike) both"},children:[s.jsx("span",{"aria-hidden":"true",style:{flexShrink:0,fontWeight:700,fontSize:"0.875rem",lineHeight:"1.5"},children:e.icon}),s.jsx("span",{style:{flex:1},children:t.message}),s.jsx("button",{onClick:d,"aria-label":"Dismiss notification",style:{background:"none",border:"none",color:e.color,cursor:"pointer",opacity:.7,padding:0,fontSize:"0.875rem",lineHeight:1,flexShrink:0,transition:"opacity var(--duration-short) var(--ease-zen)"},onMouseEnter:n=>{n.currentTarget.style.opacity="1"},onMouseLeave:n=>{n.currentTarget.style.opacity="0.7"},children:"✕"})]})}function b(){const[t,a]=i.useState([]),o=i.useCallback((e,d,n)=>{const l=`toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;return a(k=>[...k,{id:l,message:e,variant:d,duration:n}]),l},[]),c=i.useCallback(e=>{a(d=>d.filter(n=>n.id!==e))},[]),r=i.useCallback(()=>{a([])},[]);return{toasts:t,add:o,dismiss:c,dismissAll:r}}p.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{toasts:{required:!0,tsType:{name:"Array",elements:[{name:"ToastItem"}],raw:"ToastItem[]"},description:""},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},maxVisible:{required:!1,tsType:{name:"number"},description:"Maximum visible toasts",defaultValue:{value:"3",computed:!1}}}};const C={title:"Components/Toast",tags:["autodocs"],parameters:{docs:{description:{component:"Notification toasts. Four variants (success, warning, error, info). Auto-dismiss after 5s. Enter animation from bottom using kamae keyframe. Stacks up to 3."}}}};function F(){const{toasts:t,add:a,dismiss:o}=b(),c=["success","warning","error","info"],r={success:"Deployment succeeded — all 12 components shipped.",warning:"Attention: APCA contrast annotation may be stale.",error:"Build failed — check the CI workflow output.",info:"Storybook is available at localhost:6006."};return s.jsxs("div",{children:[s.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:c.map(e=>s.jsx(T,{variant:"ghost",size:"sm",onClick:()=>a(r[e],e),children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),s.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"0.8125rem",color:"var(--text-secondary)",marginTop:"12px"},children:"Toasts auto-dismiss after 5 seconds. Stacks up to 3 visible at once."}),s.jsx(p,{toasts:t,onDismiss:o})]})}const m={render:()=>s.jsx(F,{})},u={render:()=>{const{toasts:t,add:a,dismiss:o}=b();return i.useEffect(()=>{a("Deployment succeeded.","success",0),a("Attention: check contrast.","warning",0),a("Build failed.","error",0),a("Storybook running.","info",0)},[]),s.jsxs("div",{children:[s.jsx("p",{style:{fontFamily:"var(--font-body)",color:"var(--text-secondary)",fontSize:"0.875rem"},children:"Four variants shown simultaneously (no auto-dismiss)."}),s.jsx(p,{toasts:t,onDismiss:o,maxVisible:4})]})}};var f,g,y;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ToastDemo />
}`,...(y=(g=m.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,h,v;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(h=u.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const A=["Playground","AllVariants"];export{u as AllVariants,m as Playground,A as __namedExportsOrder,C as default};
