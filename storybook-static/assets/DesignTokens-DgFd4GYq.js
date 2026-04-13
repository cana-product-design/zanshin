import{j as e}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as s}from"./index-ChEI-nsM.js";import{M as r}from"./index-BLc3uEph.js";import"./index-DRjF_FHU.js";import"./iframe-Bc2Et7wJ.js";import"./index-BKlBQwGM.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";function d(c){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...s(),...c.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{title:"Docs/Design Tokens"}),`
`,e.jsx(n.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"All Zanshin components use CSS custom properties exclusively. No hardcoded hex values appear in component code."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"color-palette",children:"Color Palette"}),`
`,e.jsx(n.h3,{id:"foundation--both-modes",children:"Foundation — Both Modes"}),`
`,e.jsx(n.p,{children:"These tokens are identical across all palette modes."}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Name | Description |
|---|---|---|---|
| `,e.jsx(n.code,{children:"--color-shironeri"})," | ",e.jsx(n.code,{children:"#F5F4EF"}),` | 白練 Raw silk | Primary light background |
| `,e.jsx(n.code,{children:"--color-fiber"})," | ",e.jsx(n.code,{children:"#DDD9CE"}),` | Natural fiber | Card surfaces (kintsugi) |
| `,e.jsx(n.code,{children:"--color-kinari"})," | ",e.jsx(n.code,{children:"#D9D5C7"}),` | 生成り Unbleached | Borders, dividers |
| `,e.jsx(n.code,{children:"--color-sumi"})," | ",e.jsx(n.code,{children:"#1C1C1E"}),` | 墨 Ink black | Primary text |
| `,e.jsx(n.code,{children:"--color-hai"})," | ",e.jsx(n.code,{children:"#6B7280"})," | 灰 Ash gray | Secondary text |"]}),`
`,e.jsx(n.h3,{id:"semantic-colors",children:"Semantic Colors"}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Usage |
|---|---|---|
| `,e.jsx(n.code,{children:"--color-success"})," | ",e.jsx(n.code,{children:"#2D6A4F"}),` | Bamboo green — growth, resilience |
| `,e.jsx(n.code,{children:"--color-warning"})," | ",e.jsx(n.code,{children:"#B45309"}),` | Lacquer amber — caution, craft |
| `,e.jsx(n.code,{children:"--color-error"})," | ",e.jsx(n.code,{children:"#9B1C1C"}),` | Iron oxide red — urgency |
| `,e.jsx(n.code,{children:"--color-info"})," | ",e.jsx(n.code,{children:"#2563EB"})," | Clear sky blue |"]}),`
`,e.jsx(n.h3,{id:"kintsugi-palette",children:"Kintsugi Palette"}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Usage |
|---|---|---|
| `,e.jsx(n.code,{children:"--accent-primary"})," | ",e.jsx(n.code,{children:"#C9A84C"}),` | Kintsugi gold — CTAs, links |
| `,e.jsx(n.code,{children:"--accent-hover"})," | ",e.jsx(n.code,{children:"#A8863B"}),` | Deepened amber — hover states |
| `,e.jsx(n.code,{children:"--surface-base"})," | ",e.jsx(n.code,{children:"#F5F4EF"}),` | Shironeri — page background |
| `,e.jsx(n.code,{children:"--surface-raised"})," | ",e.jsx(n.code,{children:"#DDD9CE"})," | Natural fiber — cards |"]}),`
`,e.jsx(n.h3,{id:"aizome-light-palette",children:"Aizome Light Palette"}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Usage |
|---|---|---|
| `,e.jsx(n.code,{children:"--accent-primary"})," | ",e.jsx(n.code,{children:"#2B5BA8"}),` | Aiiro — CTAs, links (Lc +77) |
| `,e.jsx(n.code,{children:"--accent-hover"})," | ",e.jsx(n.code,{children:"#1A2744"}),` | Nōkon — hover states |
| `,e.jsx(n.code,{children:"--surface-base"})," | ",e.jsx(n.code,{children:"#F5F4EF"}),` | Shironeri |
| `,e.jsx(n.code,{children:"--surface-raised"})," | ",e.jsx(n.code,{children:"#EAE8E0"})," | Washi — cards |"]}),`
`,e.jsx(n.h3,{id:"aizome-dark-palette-kachiiro-ground",children:"Aizome Dark Palette (Kachiiro Ground)"}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Usage |
|---|---|---|
| `,e.jsx(n.code,{children:"--accent-primary"})," | ",e.jsx(n.code,{children:"#4DB3CC"}),` | Asagi — interactive (Lc −48.9) |
| `,e.jsx(n.code,{children:"--surface-base"})," | ",e.jsx(n.code,{children:"#1B2A4A"}),` | Kachiiro — victory color |
| `,e.jsx(n.code,{children:"--surface-raised"})," | ",e.jsx(n.code,{children:"#1A2744"}),` | Nōkon — deep navy |
| `,e.jsx(n.code,{children:"--text-primary"})," | ",e.jsx(n.code,{children:"#F5F4EF"}),` | Shironeri — primary text |
| `,e.jsx(n.code,{children:"--text-secondary"})," | ",e.jsx(n.code,{children:"#4DB3CC"})," | Asagi — interactive labels |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"spacing-scale--ma-間",children:"Spacing Scale — Ma (間)"}),`
`,e.jsxs(n.p,{children:["The spacing scale encodes the Japanese concept of ",e.jsx(n.em,{children:"ma"})," — the meaningful space between things."]}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Use |
|---|---|---|
| `,e.jsx(n.code,{children:"--space-1"})," | ",e.jsx(n.code,{children:"4px"}),` | Micro gaps |
| `,e.jsx(n.code,{children:"--space-2"})," | ",e.jsx(n.code,{children:"8px"}),` | Icon padding, badge gap |
| `,e.jsx(n.code,{children:"--space-3"})," | ",e.jsx(n.code,{children:"12px"}),` | Button padding (sm) |
| `,e.jsx(n.code,{children:"--space-4"})," | ",e.jsx(n.code,{children:"16px"}),` | Input padding, button padding (md) |
| `,e.jsx(n.code,{children:"--space-6"})," | ",e.jsx(n.code,{children:"24px"}),` | Component internal spacing |
| `,e.jsx(n.code,{children:"--space-8"})," | ",e.jsx(n.code,{children:"32px"}),` | Card padding |
| `,e.jsx(n.code,{children:"--space-sm"})," | ",e.jsx(n.code,{children:"16px"}),` | Component-to-component |
| `,e.jsx(n.code,{children:"--space-md"})," | ",e.jsx(n.code,{children:"24px"}),` | Section inner padding |
| `,e.jsx(n.code,{children:"--space-lg"})," | ",e.jsx(n.code,{children:"40px"}),` | Between content blocks |
| `,e.jsx(n.code,{children:"--space-xl"})," | ",e.jsx(n.code,{children:"64px"}),` | Between major sections |
| `,e.jsx(n.code,{children:"--space-2xl"})," | ",e.jsx(n.code,{children:"96px"})," | Page section separation |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Usage |
|---|---|---|
| `,e.jsx(n.code,{children:"--font-display"}),` | Noto Serif JP, Cormorant Garamond | Headings, display text |
| `,e.jsx(n.code,{children:"--font-body"}),` | Inter, Noto Sans JP | All body text |
| `,e.jsx(n.code,{children:"--font-mono"})," | JetBrains Mono, Fira Code | Code |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"border-radius",children:"Border Radius"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Hard ceiling: 8px."})," Soft forms contradict budo geometry."]}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Use |
|---|---|---|
| `,e.jsx(n.code,{children:"--radius-sm"})," | ",e.jsx(n.code,{children:"2px"}),` | Inputs, badges, tags |
| `,e.jsx(n.code,{children:"--radius-md"})," | ",e.jsx(n.code,{children:"4px"}),` | Buttons, dropdowns |
| `,e.jsx(n.code,{children:"--radius-lg"})," | ",e.jsx(n.code,{children:"8px"})," | Cards, modals, panels |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"motion--zanshin-transitions",children:"Motion — Zanshin Transitions"}),`
`,e.jsx(n.p,{children:"Every interaction leaves a trace of awareness."}),`
`,e.jsxs(n.p,{children:[`| Token | Value | Character |
|---|---|---|
| `,e.jsx(n.code,{children:"--ease-zen"})," | ",e.jsx(n.code,{children:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),` | Deliberate, revealing |
| `,e.jsx(n.code,{children:"--ease-kendo"})," | ",e.jsx(n.code,{children:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"}),` | Controlled, micro-interactions |
| `,e.jsx(n.code,{children:"--ease-strike"})," | ",e.jsx(n.code,{children:"cubic-bezier(0.0, 0.0, 0.2, 1)"}),` | Fast in, soft out — decisive |
| `,e.jsx(n.code,{children:"--duration-short"})," | ",e.jsx(n.code,{children:"300ms"}),` | Minimum — no transition under this |
| `,e.jsx(n.code,{children:"--duration-slow"})," | ",e.jsx(n.code,{children:"400ms"}),` | Standard component transitions |
| `,e.jsx(n.code,{children:"--duration-medium"})," | ",e.jsx(n.code,{children:"500ms"}),` | Reveals, page elements |
| `,e.jsx(n.code,{children:"--duration-long"})," | ",e.jsx(n.code,{children:"800ms"})," | Scroll reveals, yugen moments |"]})]})}function p(c={}){const{wrapper:n}={...s(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(d,{...c})}):d(c)}export{p as default};
