import{r as n,j as o,d as r}from"./app-07aad552.js";const c=({hotel:t})=>{const[s,e]=n.useState({}),a=async()=>{await r.Inertia.post(`/hotels/${t.id}/book`,s)};return o.jsxs("div",{children:[o.jsxs("h1",{children:["Book ",t.name]}),o.jsx("button",{onClick:a,children:"Book Now"})]})};export{c as default};