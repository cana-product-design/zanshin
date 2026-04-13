import{j as e}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as r}from"./index-ChEI-nsM.js";import{M as t}from"./index-CEAXvSCQ.js";import"./index-DRjF_FHU.js";import"./iframe-DPkBEacT.js";import"./index-BKlBQwGM.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(t,{title:"Docs/Accessibility"}),`
`,e.jsx(n.h1,{id:"accessibility--apca-audit",children:"Accessibility — APCA Audit"}),`
`,e.jsxs(n.p,{children:["Zanshin uses the ",e.jsx(n.strong,{children:"Advanced Perceptual Contrast Algorithm (APCA)"}),", the contrast model proposed for WCAG 3.0. Unlike WCAG 2.x's single ratio, APCA produces a signed ",e.jsx(n.strong,{children:"Lc"})," value that distinguishes text-on-dark (WoB) from text-on-light (BoW)."]}),`
`,e.jsx(n.p,{children:"The APCA test suite runs on every CI push and must pass all 29 tests before merge."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"lc-thresholds",children:"Lc Thresholds"}),`
`,e.jsxs(n.p,{children:[`| Lc (absolute) | Use case |
|---|---|
| ≥ 75 | Body text at any size |
| ≥ 60 | Large text (24px+), Fluent UI labels |
| `,e.jsx(n.strong,{children:"≥ 45"})," | ",e.jsx(n.strong,{children:"Interactive elements — buttons, links, inputs, nav"}),` |
| ≥ 30 | Decorative / incidental text |
| ≥ 15 | Non-text elements (borders, icons, dividers) |
| < 15 | Fail — insufficient for any purpose |`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"aizome-light--validated-pairs",children:"Aizome Light — Validated Pairs"}),`
`,e.jsxs(n.p,{children:[`| Pair | Lc | Grade | Notes |
|---|---|---|---|
| Sumi on Shironeri (body) | +99.0 | ✅ Body text | Primary body — maximum contrast |
| Aiiro on Shironeri (links) | +77.0 | ✅ Body text | Full prose link color |
| Hai on Shironeri (muted) | +68.0 | ✅ Large text | ≥18px labels only |
| Aiiro on Washi (card links) | +70.7 | ✅ Large text | ≥18px or bold |
| Asagi on Shironeri | +43.1 | ❌ `,e.jsx(n.strong,{children:"PROHIBITED"})," | Non-text use only on light surfaces |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"aizome-dark--validated-pairs",children:"Aizome Dark — Validated Pairs"}),`
`,e.jsxs(n.p,{children:[`| Pair | Lc | Grade | Notes |
|---|---|---|---|
| Shironeri on Kachiiro (body) | −91.4 | ✅ Body text | Primary text on dark ground |
| Shironeri on Nōkon (body) | −92.5 | ✅ Body text | Headers, nav |
| Asagi on Kachiiro (interactive) | −48.9 | ✅ Interactive | Active nav, focus indicators |
| Asagi on Nōkon (interactive) | −50.0 | ✅ Interactive | Nav links, badges |
| Mizuiro on Kachiiro (labels) | −71.3 | ✅ Large text | ≥18px labels |
| Aiiro on Kachiiro | −15.1 | ❌ `,e.jsx(n.strong,{children:"PROHIBITED"}),` | Same hue family — insufficient |
| Hanada on Kachiiro | −29.6 | ❌ Non-text only | Borders, decorative lines |`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"kintsugi--validated-pairs",children:"Kintsugi — Validated Pairs"}),`
`,e.jsx(n.p,{children:`| Pair | Lc | Grade | Notes |
|---|---|---|---|
| Sumi on Shironeri (body) | +99.0 | ✅ Body text | Primary text |
| Hai on Shironeri (secondary) | +68.0 | ✅ Large text | ≥18px |
| Sumi on Gold (badge) | +62.2 | ✅ Interactive | Badge labels on gold bg |
| Gold on Shironeri | +40.4 | ❌ Non-text only | Decorative borders/underlines only |`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"key-design-rules-from-the-audit",children:"Key Design Rules from the Audit"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Never use asagi as text on light surfaces."})," Lc +43.1 fails the interactive threshold. Use aiiro (Lc +77.0) for links on light backgrounds."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Never use aiiro text on kachiiro backgrounds."})," Lc −15.1 — same hue family, no perceptual contrast. Use asagi (Lc −48.9) instead."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Aiiro buttons require white text."})," White at Lc −78.5 is safe. Shironeri at Lc −72.0 is large-text only. Dark text on aiiro buttons fails."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Gold accent is decorative on light surfaces."})," Kintsugi gold (Lc +40.4) does not meet the interactive threshold. Never use as body link text."]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"minimum-size-requirements",children:"Minimum Size Requirements"}),`
`,e.jsx(n.p,{children:"When a pairing falls in the 45–74 Lc range, font size constrains safe use:"}),`
`,e.jsx(n.p,{children:`| Lc (abs) | Normal weight minimum | Bold/semibold minimum |
|---|---|---|
| 75+ | 12px | 10px |
| 60–74 | 18px | 14px |
| 45–59 | 24px | 16px |
| 30–44 | Non-text only | 24px (with caution) |`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"running-the-apca-test-suite",children:"Running the APCA Test Suite"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run test:apca
`})}),`
`,e.jsx(n.p,{children:"29 tests covering:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Lc annotation accuracy (±1.0 tolerance)"}),`
`,e.jsx(n.li,{children:"Passing pairs clear their declared threshold"}),`
`,e.jsx(n.li,{children:"Intentional failures stay below their threshold"}),`
`,e.jsx(n.li,{children:"APCA engine self-tests (black/white reference values)"}),`
`]}),`
`,e.jsxs(n.p,{children:["All 29 tests must pass. The CI workflow (",e.jsx(n.code,{children:"apca-ci.yml"}),") enforces this on every push."]})]})}function p(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{p as default};
