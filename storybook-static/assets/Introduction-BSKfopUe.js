import{j as e}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as t}from"./index-ChEI-nsM.js";import{M as r}from"./index-CnNHfrqM.js";import"./index-DRjF_FHU.js";import"./iframe-Ck1JtClO.js";import"./index-BKlBQwGM.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{title:"Docs/Introduction"}),`
`,e.jsx(n.h1,{id:"残心-zanshin-design-system",children:"残心 Zanshin Design System"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"A Japanese-inspired React design system with APCA-validated accessibility"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"philosophy",children:"Philosophy"}),`
`,e.jsx(n.p,{children:"Three principles govern every design decision in Zanshin."}),`
`,e.jsx(n.h3,{id:"wabi-sabi-侘び寂び",children:"Wabi-sabi (侘び寂び)"}),`
`,e.jsx(n.p,{children:"Beauty in imperfection and transience. Surfaces carry subtle texture rather than sterile flatness. Whitespace is intentional silence — not emptiness, but charged potential. Nothing is over-polished; honest materials show through. The warm shironeri background and kinari borders are not pure white or stark gray, but shades that acknowledge the organic nature of craft."}),`
`,e.jsx(n.h3,{id:"zanshin-残心",children:"Zanshin (残心)"}),`
`,e.jsxs(n.p,{children:["Lingering awareness after action. Every interaction leaves a trace: transitions don't snap, focus states breathe, hover states suggest presence before commitment. The name of this system is this principle. When a button is pressed, it remembers — ",e.jsx(n.code,{children:"translateY(1px)"})," and a receding shadow signal the full arc of the action. The underline on a nav link expands with a long ease, then stays. This is zanshin."]}),`
`,e.jsx(n.h3,{id:"sumi-e-墨絵",children:"Sumi-e (墨絵)"}),`
`,e.jsx(n.p,{children:"Ink-wash economy. A single brushstroke defines form. The UI uses minimum elements with maximum intention. No decoration that doesn't encode meaning. The Divider component is literally a brushstroke — a gradient that fades to nothing at both ends, like ink absorbed into washi paper. Corner radii never exceed 8px. Every shadow uses only deep-indigo or grayscale tones."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"two-palettes-one-system",children:"Two Palettes, One System"}),`
`,e.jsx(n.p,{children:"Zanshin provides two named color modes, switchable at runtime via the toolbar above:"}),`
`,e.jsxs(n.p,{children:[`| Palette | Character | Accent | Context |
|---|---|---|---|
| `,e.jsx(n.strong,{children:"Kintsugi"})," (金継ぎ) | Warm, contemplative | Gold ",e.jsx(n.code,{children:"#C9A84C"}),` | Portfolio, editorial, personal |
| `,e.jsx(n.strong,{children:"Aizome"})," (藍染) | Disciplined, focused | Indigo ",e.jsx(n.code,{children:"#2B5BA8"})," | Product UI, dashboards, documentation |"]}),`
`,e.jsx(n.p,{children:"Both palettes share a common foundation: shironeri surfaces, kinari borders, sumi text. The accent layer switches; everything else stays constant."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ZanshinProvider, Button, Card } from '@zanshin/ui';

function App() {
  return (
    <ZanshinProvider defaultPalette="aizome">
      <Card title="Zanshin">
        <Button variant="primary">Take action</Button>
      </Card>
    </ZanshinProvider>
  );
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"explore",children:"Explore"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"Palette"})," and ",e.jsx(n.strong,{children:"Theme"})," toolbar items to preview every component in all four states:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Kintsugi light"}),`
`,e.jsx(n.li,{children:"Kintsugi dark"}),`
`,e.jsx(n.li,{children:"Aizome light"}),`
`,e.jsx(n.li,{children:"Aizome dark"}),`
`]}),`
`,e.jsx(n.p,{children:"Navigate to any component in the sidebar to see its Playground story with live controls, and variant stories showing all states side-by-side."})]})}function u(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{u as default};
