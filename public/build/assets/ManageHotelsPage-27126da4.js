import{j as e,I as d}from"./app-07aad552.js";const t=({hotels:s})=>{const r=async i=>{confirm("Are you sure you want to delete this hotel?")};return e.jsxs("div",{children:[e.jsx("h1",{children:"Manage Hotels"}),e.jsx(d,{href:"/add-hotel",children:"Add New Hotel"}),e.jsx("ul",{children:s.map(i=>e.jsxs("li",{children:[e.jsx("h2",{children:i.id}),e.jsx("h3",{children:i.name}),e.jsx("p",{children:i.description}),e.jsxs("p",{children:["Price: $",i.price]}),e.jsxs("div",{children:[e.jsx(d,{href:`/edit-hotel/${i.id}`,children:"Edit"}),e.jsx(d,{href:route("delete-hotel",{id:i.id}),method:"delete",as:"button",onClick:()=>r(i.id),children:"Delete"})]})]},i.id))})]})};export{t as default};
