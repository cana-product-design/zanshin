import{j as c}from"./jsx-runtime-DiklIkkE.js";import{R as m}from"./index-DRjF_FHU.js";const S={sm:{padding:"var(--space-1) var(--space-3)",fontSize:"0.75rem",lineHeight:"1.25rem"},md:{padding:"var(--space-2) var(--space-6)",fontSize:"0.875rem",lineHeight:"1.5rem"},lg:{padding:"var(--space-3) var(--space-8)",fontSize:"1rem",lineHeight:"1.75rem"}},k={primary:{background:"var(--accent-primary)",color:"var(--color-bg)",border:"none"},ghost:{background:"transparent",color:"var(--accent-primary)",border:"1px solid var(--accent-primary)"},danger:{background:"var(--color-error)",color:"var(--color-bg)",border:"none"}},u=m.forwardRef(({variant:i="primary",size:f="md",loading:a=!1,disabled:t,children:v,style:b,onMouseEnter:n,onMouseLeave:o,onMouseDown:s,onMouseUp:l,...g},h)=>{const[y,p]=m.useState(!1),[x,d]=m.useState(!1),e={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"var(--space-2)",borderRadius:"var(--radius-md)",fontFamily:"var(--font-body)",fontWeight:500,letterSpacing:"0.025em",cursor:t||a?"not-allowed":"pointer",opacity:t||a?.5:1,transition:"background var(--duration-medium) var(--ease-kendo), transform var(--duration-short) var(--ease-strike), box-shadow var(--duration-long) var(--ease-zanshin), border-color var(--duration-medium) var(--ease-kendo), color var(--duration-medium) var(--ease-kendo)",outline:"none",transformOrigin:"center bottom",...S[f],...k[i]};return y&&!t&&!a&&(i==="primary"?(e.background="var(--accent-hover)",e.boxShadow="0 4px 20px rgba(43, 91, 168, 0.28)"):i==="ghost"?(e.background="var(--accent-subtle)",e.borderColor="var(--accent-hover)",e.color="var(--accent-hover)"):i==="danger"&&(e.opacity=.9,e.boxShadow="0 4px 20px rgba(155, 28, 28, 0.28)")),x&&!t&&!a&&(e.transform="scale(0.97) translateY(1px)",e.boxShadow="0 1px 4px rgba(43, 91, 168, 0.15)"),c.jsxs("button",{ref:h,disabled:t||a,"aria-disabled":t||a,"aria-busy":a,style:{...e,...b},onMouseEnter:r=>{p(!0),n==null||n(r)},onMouseLeave:r=>{p(!1),d(!1),o==null||o(r)},onMouseDown:r=>{d(!0),s==null||s(r)},onMouseUp:r=>{d(!1),l==null||l(r)},...g,children:[a&&c.jsx("span",{"aria-hidden":"true",style:{width:"0.875em",height:"0.875em",border:"2px solid currentColor",borderTopColor:"transparent",borderRadius:"50%",display:"inline-block",animation:"zanshin-spin 600ms linear infinite"}}),v,c.jsx("style",{children:`
          @keyframes zanshin-spin {
            to { transform: rotate(360deg); }
          }
          /* Ma pulse on focus — breathing ring (Shinto interval) */
          button:focus-visible {
            outline: 3px solid var(--accent-primary, var(--accent-blue));
            outline-offset: 3px;
            animation: zanshin-ma-pulse 1600ms var(--ease-ma, cubic-bezier(0.4,0,0.6,1)) infinite;
          }
          @keyframes zanshin-ma-pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(43, 91, 168, 0); }
            50%       { box-shadow: 0 0 0 4px rgba(43, 91, 168, 0.18); }
          }
          @media (prefers-reduced-motion: reduce) {
            button {
              transition-duration: 0.01ms !important;
              animation: none !important;
            }
          }
        `})]})});u.displayName="Button";u.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"}]},description:"Visual style variant",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size",defaultValue:{value:"'md'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Shows loading spinner and disables interaction",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{u as B};
