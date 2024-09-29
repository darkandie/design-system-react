import{j as x}from"./jsx-runtime-CkxqCPlQ.js";import{c as H}from"./clsx-B-dksMZM.js";import{S as T}from"./index-DxjvaFr2.js";import"./index-DJO9vBfz.js";function C({size:t="md",children:b,asChild:y}){const S=y?T:"h2";return x.jsx(S,{className:H("text-gray-100 font-bold font-sans",{"text-lg":t==="sm","text-xl":t==="md","text-2xl":t==="lg"}),children:b})}C.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""}}};const q={title:"Components/Heading",component:C,args:{children:"Lorem ipsum...",size:"md"},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}}}},e={},r={args:{size:"sm"}},s={args:{size:"lg"}},a={args:{asChild:!0,children:x.jsx("h1",{children:"Heading with h1"})},argTypes:{children:{table:{disable:!0}},asChild:{table:{disable:!0}}}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,p,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <h1>Heading with h1</h1>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const w=["Default","Small","Large","CustomComponent"];export{a as CustomComponent,e as Default,s as Large,r as Small,w as __namedExportsOrder,q as default};
