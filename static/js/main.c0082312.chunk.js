(this["webpackJsonppunk-api"]=this["webpackJsonppunk-api"]||[]).push([[0],[,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(4),s=a.n(n),i=(a(9),a(2)),b=(a(10),a(11),a(0)),l=function(e){var t=e.picture,a=e.name,r=e.tagLine,n=e.date,s=e.ph,l=e.abv,o=e.ibu,j=e.ebc,d=e.description,h=Object(c.useState)(!1),u=Object(i.a)(h,2),_=u[0],m=u[1],p=Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"beerCard__container",children:Object(b.jsxs)("div",{className:"beerCard__tile",children:[Object(b.jsx)("div",{className:"beerCard__tile--picture",children:Object(b.jsx)("img",{className:"beerCard__picture",src:t,alt:a})}),Object(b.jsxs)("div",{className:"beerCard__tile--information",children:[Object(b.jsx)("h2",{className:"beerCard__tile--information name",children:a}),Object(b.jsx)("h3",{className:"beerCard__tile--information-tagLine",children:r}),Object(b.jsxs)("div",{className:"beerCard__data",children:[Object(b.jsxs)("h4",{className:"data__date",children:["Date:  ",n]}),Object(b.jsxs)("h4",{className:"data",children:["ABV:  ",l,"%"]}),Object(b.jsxs)("h4",{className:"data",children:["pH:  ",s]}),Object(b.jsxs)("h4",{className:"data",children:["IBU (bitterness):  ",o]}),Object(b.jsxs)("h4",{className:"data",children:["EBC (colour):  ",j]})]})]})]})})}),O=Object(b.jsxs)("div",{className:"beerCard__extra",children:[Object(b.jsx)("h3",{className:"beerCard__description-title",children:"Description:"}),Object(b.jsx)("h5",{className:"beerCard__description-text",children:d})]});return Object(b.jsxs)("div",{className:"beerCard",onClick:function(){m(!_)},children:[_?O:p,O?_:p]})},o=(a(13),function(e){var t=e.BeerArr.map((function(e,t){return Object(b.jsx)(l,{picture:e.image_url,name:e.name,tagLine:e.tagline,date:e.first_brewed,ph:e.ph,abv:e.abv,ibu:e.ibu,ebc:e.ebc,description:e.description,foodPairing:e.food_pairing},t)}));return Object(b.jsx)("div",{className:"beerGallery",children:t})}),j=(a(14),a(15),function(e){var t=e.placeholder,a=e.searchTerm,c=e.handleInput;return Object(b.jsx)("div",{className:"searchbox__container",children:Object(b.jsx)("input",{placeholder:t,type:"text",value:a,onInput:c,className:"searchbox__container--input"})})}),d=(a(16),function(e,t){var a=e.filterLabel,c=e.filterBox,r=e.name;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"filterbox__container",children:[Object(b.jsx)("input",{classNAme:"filterBox__checkbox",type:"checkbox",id:t,name:r,onChange:c}),Object(b.jsxs)("h5",{className:"filterbox__label",children:[" ",a]})]})})}),h=function(e){var t=e.searchTerm,a=e.handleInput,c=e.filterFunction;return Object(b.jsx)("div",{className:"nav-bar__container",children:Object(b.jsxs)("nav",{children:[Object(b.jsx)("h2",{className:"nav-bar__header",children:"Peruse the Brews"}),Object(b.jsx)(j,{placeholder:"Search by product name",searchTerm:t,handleInput:a}),Object(b.jsxs)("section",{className:"nav-bar__filter-boxes",children:[Object(b.jsx)(d,{filterBox:c,filterLabel:"High ABV  (> 6.0%)",name:"abv"}),Object(b.jsx)(d,{filterBox:c,filterLabel:"Brewdog Classics",name:"classic"}),Object(b.jsx)(d,{filterBox:c,filterLabel:"Acidity    (pH < 4)",name:"ph"})]})]})})},u=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(""),s=Object(i.a)(n,2),l=s[0],j=s[1],d=Object(c.useState)(""),u=Object(i.a)(d,2),_=u[0],m=u[1],p=Object(c.useState)([]),O=Object(i.a)(p,2),f=O[0],x=O[1],v=Object(c.useState)([]),g=Object(i.a)(v,2),N=g[0],C=g[1],B=Object(c.useState)(!1),k=Object(i.a)(B,2),w=k[0],S=k[1],L=Object(c.useState)(""),F=Object(i.a)(L,2),I=F[0],y=F[1],A=Object(c.useState)(!1),P=Object(i.a)(A,2),T=P[0],D=P[1];return Object(c.useEffect)((function(){var e="https://api.punkapi.com/v2/beers?".concat(I).concat(_,"&per_page=80");fetch(e).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){r(e),x(e);var t=e.filter((function(e){return e.ph<4&&null!==e.ph}));!0===w&&r(t),C(t)})).catch((function(e){e&&!1===T&&r([])}))}),[_,w,I,T]),Object(b.jsxs)("div",{className:"app__container",children:[Object(b.jsx)("header",{className:"app__header",children:Object(b.jsx)("h1",{className:"header__title",children:" API For Punks "})}),Object(b.jsxs)("div",{className:"app__main",children:[Object(b.jsx)(h,{searchTerm:l,handleInput:function(e){var t=e.target.value;0===t.length?(D(!0),r(f)):D(!1),j(t),0!==l.length&&y("beer_name=".concat(l.replace(" ","_").toLowerCase(),"&"))},filterFunction:function(e){console.log(e.target.name),"abv"===e.target.name?e.target.checked?m(""===_?"abv_gt=6":"abv_gt=6&brewed_before=01-2010"):m("brewed_before=01-2010&abv_gt=6"===_?"brewed_before=01-2010":""):"classic"===e.target.name?e.target.checked?m(""===_?"brewed_before=01-2010":"brewed_before=01-2010&abv_gt=6"):m("brewed_before=01-2010&abv_gt=6"===_?"brewed_before=01-2010":""):"ph"===e.target.name&&(S(!w),console.log(w),console.log(_),e.target.checked?r(N):r(f))},className:"app__main--nav-sidebar"}),Object(b.jsx)(o,{BeerArr:a,className:"app__main--beer-gallery"})]})]})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),_()}],[[17,1,2]]]);
//# sourceMappingURL=main.c0082312.chunk.js.map