import{j as e}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as r}from"./index-ChEI-nsM.js";import{M as a}from"./index-BP2Jfw-l.js";import"./index-DRjF_FHU.js";import"./iframe-BP7JvWXL.js";import"./index-BKlBQwGM.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";function i(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{title:"Docs/Shodo Motion"}),`
`,e.jsxs("div",{style:{maxWidth:"720px",margin:"0 auto",padding:"64px 24px",fontFamily:"'Cormorant Garamond', 'Noto Serif JP', Georgia, serif",background:"#141820",minHeight:"100vh",color:"#E8EBF0"},children:[e.jsx("p",{style:{fontSize:"11px",letterSpacing:"0.16em",textTransform:"uppercase",color:"#4A4860",marginBottom:"48px",fontFamily:"Inter, system-ui, sans-serif",fontWeight:500},children:"Motion · Shodo Philosophy"}),e.jsx(n.h1,{id:"書道と動き",children:"書道と動き"}),e.jsxs("p",{style:{fontSize:"28px",fontWeight:300,lineHeight:1.4,color:"#8AAFC0",margin:"0 0 64px 0",letterSpacing:"0.01em"},children:["The ink enters the paper once.",e.jsx("br",{}),"The hand that placed it is still present."]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"the-brush-stroke-as-animation-model",children:"The brush stroke as animation model"}),e.jsx(n.p,{children:"Shodo — Japanese calligraphy — offers a precise vocabulary for motion that digital animation theory has never named cleanly."}),e.jsxs(n.p,{children:["A master calligrapher begins each stroke in ",e.jsx(n.em,{children:"seme"})," (攻め): the brush approaches the paper with controlled pressure, not yet touching. There is intention before contact. Then comes the strike — ",e.jsx(n.em,{children:"utte"})," — the decisive moment when ink meets washi. The stroke travels. And then ",e.jsx(n.em,{children:"zanshin"})," (残心): the brush lifts, but the hand does not pull away. It hovers. The awareness of the completed mark lingers."]}),e.jsxs(n.p,{children:["This three-phase arc — ",e.jsx(n.strong,{children:"seme → utte → zanshin"})," — is the structural model behind every motion token in this system."]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"the-ao-sumi-ground",children:"The ao-sumi ground"}),e.jsx("div",{style:{background:"#1E2230",border:"1px solid rgba(91,143,168,0.15)",borderRadius:"4px",padding:"32px",margin:"32px 0",fontFamily:"Inter, system-ui, sans-serif",fontSize:"13px"},children:e.jsxs(n.p,{children:["The dark mode ground — ao-sumi (青墨, ",e.jsx(n.code,{children:"#141820"}),") — is not a neutral backdrop. It is the washi paper of the composition. Every element that enters it is an ink mark. The animation behaviors below are calibrated for this specific ground: deep enough that even a faint asagi line reads, still enough that a single entrance draws the eye."]})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"the-four-motion-arcs",children:"The four motion arcs"}),e.jsx(n.h3,{id:"1--hiki-fude-引き筆--the-drawn-line",children:"1 — Hiki-fude (引き筆) — The drawn line"}),e.jsxs(n.p,{children:["The brush pulls across the paper in a single confident stroke. Used for elements that ",e.jsx(n.strong,{children:"appear from a direction"}),": panels sliding in, toasts entering from an edge, navigation expanding."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Hiki-fude: directional pull entrance */
@keyframes hiki-fude {
  from {
    opacity: 0;
    transform: translateX(-16px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hiki-fude {
  animation: hiki-fude var(--duration-long) var(--ease-kendo) both;
}
`})}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Easing:"})," ",e.jsx(n.code,{children:"--ease-kendo"})," ",e.jsx(n.code,{children:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"})," — controlled deceleration, like a brush slowing as it nears the end of a stroke."]}),e.jsx(n.hr,{}),e.jsx(n.h3,{id:"2--tate-fude-縦筆--the-vertical-drop",children:"2 — Tate-fude (縦筆) — The vertical drop"}),e.jsxs(n.p,{children:["The brush descends. Ink falls from the tip down the washi. Used for elements that ",e.jsx(n.strong,{children:"enter from above"}),": dropdown menus, modal sheets, notification banners."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Tate-fude: vertical descent */
@keyframes tate-fude {
  from {
    opacity: 0;
    transform: translateY(-12px) scaleY(0.96);
    transform-origin: top center;
  }
  to {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
}

.tate-fude {
  animation: tate-fude var(--duration-medium) var(--ease-strike) both;
}
`})}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Easing:"})," ",e.jsx(n.code,{children:"--ease-strike"})," ",e.jsx(n.code,{children:"cubic-bezier(0.0, 0.0, 0.2, 1)"})," — fast entry with strong deceleration, like the initial pressure of a vertical stroke."]}),e.jsx(n.hr,{}),e.jsx(n.h3,{id:"3--fude-okoshi-筆起こし--the-brush-awakening",children:"3 — Fude-okoshi (筆起こし) — The brush awakening"}),e.jsxs(n.p,{children:["The brush is placed on the paper and pressed before moving. The mark begins as a dot that blossoms outward. Used for elements that ",e.jsx(n.strong,{children:"reveal in place"}),": content blocks fading and rising on scroll, cards appearing on load."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Fude-okoshi: reveal in place */
@keyframes fude-okoshi {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.99);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.fude-okoshi {
  animation: fude-okoshi var(--duration-long) var(--ease-zen) both;
}
`})}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Easing:"})," ",e.jsx(n.code,{children:"--ease-zen"})," ",e.jsx(n.code,{children:"cubic-bezier(0.4, 0.0, 0.2, 1)"})," — balanced entry. Neither urgent nor slow. The mark appears as if it was always there, gradually becoming visible."]}),e.jsx(n.hr,{}),e.jsx(n.h3,{id:"4--zanshin-hiki-残心引き--the-lingering-exit",children:"4 — Zanshin-hiki (残心引き) — The lingering exit"}),e.jsxs(n.p,{children:["When the brush lifts, it does not vanish. It withdraws slowly, leaving the awareness of its presence. Used for all ",e.jsx(n.strong,{children:"exits"}),": closing modals, dismissed toasts, collapsing panels."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Zanshin-hiki: the lingering exit */
@keyframes zanshin-hiki {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-6px) scale(0.995);
  }
}

.zanshin-hiki {
  animation: zanshin-hiki var(--duration-slow) var(--ease-zanshin) both;
}
`})}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Easing:"})," ",e.jsx(n.code,{children:"--ease-zanshin"})," ",e.jsx(n.code,{children:"cubic-bezier(0.0, 0.0, 0.1, 1)"})," — extreme deceleration at the end. The element nearly stops before it fully disappears. The viewer watches it go rather than having it taken away."]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"stagger--the-composed-composition",children:"Stagger — the composed composition"}),e.jsxs(n.p,{children:["A shodo composition is not a single stroke. It is a sequence — each mark placed with awareness of what came before. In interface terms: ",e.jsx(n.strong,{children:"staggered reveals"})," where each element inherits a delay proportional to its position."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Staggered scroll reveal — 80ms ma interval between each mark */
[data-shodo-stagger] > * {
  animation: fude-okoshi var(--duration-long) var(--ease-zen) both;
}

[data-shodo-stagger] > *:nth-child(1) { animation-delay: calc(var(--duration-ma) * 0); }
[data-shodo-stagger] > *:nth-child(2) { animation-delay: calc(var(--duration-ma) * 1); }
[data-shodo-stagger] > *:nth-child(3) { animation-delay: calc(var(--duration-ma) * 2); }
[data-shodo-stagger] > *:nth-child(4) { animation-delay: calc(var(--duration-ma) * 3); }
[data-shodo-stagger] > *:nth-child(5) { animation-delay: calc(var(--duration-ma) * 4); }
/* ... extend as needed */
`})}),e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"--duration-ma"})," token (80ms) is the ",e.jsx(n.em,{children:"ma"})," interval — the charged pause between Shinto ritual actions. Small enough to read as a single composition, large enough to perceive as intentional sequence."]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"token-reference",children:"Token reference"}),e.jsxs(n.p,{children:[`| Token | Value | Shodo role |
|---|---|---|
| `,e.jsx(n.code,{children:"--ease-kendo"})," | ",e.jsx(n.code,{children:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"}),` | Seme — controlled approach |
| `,e.jsx(n.code,{children:"--ease-strike"})," | ",e.jsx(n.code,{children:"cubic-bezier(0.0, 0.0, 0.2, 1)"}),` | Utte — decisive contact |
| `,e.jsx(n.code,{children:"--ease-zen"})," | ",e.jsx(n.code,{children:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),` | Fude-okoshi — balanced reveal |
| `,e.jsx(n.code,{children:"--ease-zanshin"})," | ",e.jsx(n.code,{children:"cubic-bezier(0.0, 0.0, 0.1, 1)"}),` | Lingering exit, slow release |
| `,e.jsx(n.code,{children:"--ease-ma"})," | ",e.jsx(n.code,{children:"cubic-bezier(0.4, 0.0, 0.6, 1)"}),` | Symmetric breath, in/out |
| `,e.jsx(n.code,{children:"--duration-ma"})," | ",e.jsx(n.code,{children:"80ms"}),` | Ma interval — stagger unit |
| `,e.jsx(n.code,{children:"--duration-short"})," | ",e.jsx(n.code,{children:"300ms"}),` | Minimum breath — all transitions |
| `,e.jsx(n.code,{children:"--duration-medium"})," | ",e.jsx(n.code,{children:"500ms"}),` | Standard — dropdowns, badges |
| `,e.jsx(n.code,{children:"--duration-long"})," | ",e.jsx(n.code,{children:"700ms"}),` | Entrance — section reveals |
| `,e.jsx(n.code,{children:"--duration-slow"})," | ",e.jsx(n.code,{children:"1000ms"})," | Zanshin hold — hero, exit |"]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"rules",children:"Rules"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No transition faster than 300ms."})," ",e.jsx(n.code,{children:"--duration-instant"})," (150ms) is reserved for kendo snap micro-interactions only — icon swaps, checkbox ticks."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Exits use ",e.jsx(n.code,{children:"--ease-zanshin"}),"."]})," Every dismissal lingers. Nothing is snatched away."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ma before and after."})," Where possible, delay entrances by ",e.jsx(n.code,{children:"--duration-ma"})," (80ms) after the trigger. Delay the ",e.jsx(n.em,{children:"next"})," action by the same interval after the entrance completes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reduced motion."})," All animations must respect ",e.jsx(n.code,{children:"prefers-reduced-motion: reduce"}),". Fade only — no translate, no scale."]}),`
`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@media (prefers-reduced-motion: reduce) {
  [class*="fude"], [class*="zanshin"] {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
  }
}
`})}),e.jsxs(n.ol,{start:"5",children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Never animate the ao-sumi ground itself."})," Background color transitions on the body or root surface break the illusion of a washi scroll. The ground is permanent; marks appear on it."]}),`
`]}),e.jsx(n.hr,{}),e.jsxs("p",{style:{fontSize:"11px",letterSpacing:"0.12em",textTransform:"uppercase",color:"#4A4860",marginTop:"80px",fontFamily:"Inter, system-ui, sans-serif"},children:["See the interactive demos in ",e.jsx("strong",{style:{color:"#5B8FA8"},children:"Motion / Shodo Arcs"})]})]})]})}function p(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{p as default};
