import{u as k,j as n,a as e,L as p,r as o,c as N,s as C,b,d as f,F as v}from"./index-e9dad851.js";const L=({pizza:t})=>{const{addOne:r,removeOne:a,removeFromCart:l}=k(),{imageUrl:c,title:i,type:d,size:u,amount:h,priceByAmount:s}=t;return n("li",{className:"cartItem",children:[n("div",{className:"description",children:[e("img",{src:c}),n("div",{className:"info",children:[e("p",{children:i}),n("p",{children:[d," тісто, ",u," см."]})]})]}),n("div",{className:"controls",children:[n("div",{className:"amount__section",children:[e("button",{disabled:h===1,className:"btn btn-orange",onClick:m=>{a(t)},children:"-"}),e("div",{children:h}),e("button",{className:"btn btn-orange",onClick:m=>{r(t)},children:"+"})]}),n("div",{className:"total__section",children:[n("p",{className:"total",children:[s," ₴"]}),e("button",{className:"btn btn-grey",onClick:m=>{l(t)},children:"x"})]})]})]})},g=({items:t})=>e("ul",{className:"cart_list",children:t.map(r=>e(L,{pizza:r},r.cartId))}),_=()=>n("section",{className:"empty_cart",children:[n("h2",{children:["Ваш кошик порожній ",e("span",{children:"😢"})]}),e("p",{children:"Скоріше за все, ви ще не замовляли піцу. Для того, щоб замовити піцу, поверніться на головну сторінку."}),e("img",{src:"./empty.png"}),e(p,{to:"/Pizza/",children:"Повернутись на головну"})]}),B=({open:t,locked:r,onClose:a,children:l})=>{const c=o.useRef(null),i=o.useMemo(()=>N(C.modal,!t&&C["modal--closing"]),[t]),d=o.useCallback(s=>{s.preventDefault(),r||a()},[r,a]),u=o.useCallback(({target:s})=>{const{current:m}=c;s===m&&!r&&a()},[r,a]),h=o.useCallback(()=>{const{current:s}=c;t||s&&s.close()},[t]);return o.useEffect(()=>{const{current:s}=c;t&&s&&s.showModal()},[t]),e("dialog",{ref:c,className:i,onClose:a,onCancel:d,onClick:u,onAnimationEnd:h,children:e("div",{className:C.modal__container,children:l})})},M=()=>{const{resetCart:t}=k(),{totalAmount:r,totalPrice:a,cartPizzas:l}=b(f),[c,i]=o.useState(!1);return e(v,{children:l.length?n("section",{className:"cart_section",children:[n(B,{open:c,onClose:()=>{i(!1)},children:[e("p",{className:"modal_mes",children:"Ви дійсно бажаєте очистити кошик?"}),n("div",{className:"modal_btn",children:[e("button",{onClick:d=>{t()},children:"Так!"}),e("button",{onClick:d=>{i(!1)},children:"Повернутись"})]})]}),n("div",{className:"cart_header",children:[n("div",{children:[n("svg",{width:"31",height:"31",viewBox:"0 0 31 31",fill:"none",children:[e("path",{d:"M10.6667 28.7917C12.0014 28.7917 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7917 10.6667 28.7917Z",stroke:"#3F3F3F",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M25.1667 28.7917C26.5014 28.7917 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7917 25.1667 28.7917Z",stroke:"#3F3F3F",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M7.85117 8.24999H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31083C7.24334 3.72991 6.95872 3.19643 6.51862 2.80968C6.07852 2.42292 5.5129 2.20922 4.927 2.20833H2.20825",stroke:"#3F3F3F",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),e("h2",{children:"Кошик"})]}),n("div",{onClick:()=>{i(!0)},children:[n("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[e("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),e("p",{children:"Очистити кошик"})]})]}),e(g,{items:l}),n("div",{className:"cart_info",children:[n("p",{children:["Усього піц: ",n("span",{children:[r," шт."]})]}),n("p",{children:["Сума замовлення:"," ",n("span",{className:"-orange",children:[a," ₴"]})]})]}),n("div",{className:"cart_actions",children:[n(p,{to:"/Pizza/",className:"cart_btn",children:["<"," Повернутись назад"]}),e("button",{className:"cart_btn cart_btn_orange",children:"Сплатити зараз"})]})]}):e(_,{})})};export{M as default};
