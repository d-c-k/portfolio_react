(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{18:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(1),a=t.n(i),o=t(9),c=t.n(o),d=(t(18),t(4)),s=Object(i.createContext)(),l=[{sv:"Portfolio - Daniel Koefoed",en:"Portfolio - Daniel Koefoed"},{sv:"Om mig",en:"About me"},{sv:"Hej!\nJag \xe4r en aspirerande fullstack-utvecklare som f\xf6r n\xe4rvarande pluggar p\xe5 Nackademin i Stockholm. Tidigare har jag bland annat studerat f\xf6rpackningsdesign samt jobbat som formgivare och originalare av trycksaker. Om n\xe5got h\xe4r p\xe5 sidan skulle v\xe4cka ditt intresse s\xe5 tveka inte att h\xf6ra av dig!\n/Daniel",en:"Hello!\nI\xb4m an aspiring fullstack developer currently studying at Nackademin in Stockholm, Sweden. I\xb4ve previously studied packaging design and worked as a designer of printed media. If you find anything on this page that sparks your interest, don\xb4t hesitate to reach out!\n/Daniel"},{sv:"Kontakt",en:"Contact"},{sv:"G\xe5 till",en:"Go to"},{sv:"Kod",en:"Code"},{sv:"TEMA",en:"THEME"}],u=t(2),m=t(3);function p(){var n=Object(u.a)(["\n    cursor: pointer;\n    font-size: 0.70rem;\n    color:inherit;\n    background: inherit;\n    border: none;\n    text-decoration: ",";\n"]);return p=function(){return n},n}var g=m.a.button(p(),(function(n){return n.active?"underline":"none"}));function h(){var n=Object(u.a)(["\n    @media screen and (min-width: 641px){\n        grid-column: 3;\n    }\n\n    @media screen and (min-width: 1008px){\n        grid-column: 5;\n    }\n"]);return h=function(){return n},n}var v=m.a.div(h());function f(){var n=Object(i.useContext)(s),e=n.lang,t=n.setLang,a=n.theme,o=n.setTheme;return Object(r.jsxs)(v,{children:[Object(r.jsx)(g,{active:"sv"===e,onClick:function(){t("sv")},children:"SV"})," / ",Object(r.jsx)(g,{active:"en"===e,onClick:function(){t("en")},children:"EN"})," | ",Object(r.jsx)(g,{onClick:function(){o("dark"===a?"light":"dark")},children:"sv"===e?l[6].sv:l[6].en})]})}function j(){var n=Object(u.a)(["\n    z-index: 1;\n    \n    @media screen and (max-width: 640px){\n        width: calc(100vw - 3.2rem);\n        display: flex;\n        justify-content: space-between;        \n        position: fixed;\n        margin: 3.2rem 1.6rem 0 1.6rem;\n    }\n    \n    @media screen and (min-width: 641px){\n        display: grid;\n        grid-row: 2;\n        grid-column: 2/5;\n        grid-column-gap: 1rem; \n        grid-template-columns: repeat(3, 1fr);\n    }\n\n    @media screen and (min-width: 1008px){\n        grid-column: 2/7;\n        grid-template-columns: repeat(5, 1fr);\n    }\n"]);return j=function(){return n},n}var b=m.a.div(j());function x(){var n=Object(u.a)(["\n    @media screen and (min-width: 641px){\n        grid-column: 1/3;\n    }\n"]);return x=function(){return n},n}var w=m.a.div(x());function O(){var n=Object(i.useContext)(s).lang;return Object(r.jsxs)(b,{children:[Object(r.jsx)(w,{children:"sv"===n?l[0].sv:l[0].en}),Object(r.jsx)(f,{})]})}var k=["JavaScript","Node.js","HTML","CSS","SASS/SCSS","React","Express.js","MySQL","MongoDB"];function y(n){var e=n.text.split("\n").map((function(n,e){return Object(r.jsx)("p",{children:n},e)}));return Object(r.jsx)(r.Fragment,{children:e})}function S(){var n=Object(u.a)(["\n    list-style-type: '-';\n    list-style-position: inside;\n    columns: 2;\n\n    @media screen and (min-width: 641px) and (max-width: 1007px){\n        columns: 3;\n    } \n\n    @media screen and (min-width: 1008px) {\n        list-style-position: outside;\n    }\n"]);return S=function(){return n},n}var C=m.a.ul(S());function z(n){return Object(r.jsx)(C,{children:n.list.map((function(n,e){var t=e;return Object(r.jsx)("li",{children:n},t)}))})}function T(){var n=Object(u.a)(["\n    display: grid;\n    grid-column: 2/4;\n    grid-row:1;  \n    grid-column-gap: 1rem; \n    grid-row-gap: 1rem; \n    @media screen and (max-width: 640px){\n        scroll-snap-align: start;        \n        grid-template-rows: 5.2rem 2rem auto 1fr;\n    }\n\n    @media screen and (min-width: 641px) and (max-width: 1007px){\n        grid-column: 2/5;\n        grid-row: 3;\n        grid-template-columns: repeat(3, 1fr);\n        grid-template-rows: repeat(2, auto);\n    }\n\n    @media screen and (min-width: 1008px){\n        grid-column: 2/7;\n        grid-row: 3;\n        grid-template-columns: repeat(5, 1fr);\n    }\n"]);return T=function(){return n},n}var _=m.a.div(T());function A(){var n=Object(u.a)(["\n    grid-column: 1/3;\n    grid-row: 4;\n\n    @media screen and (min-width: 641px) and (max-width: 1007px){\n        grid-column: 2/4;\n        grid-row: 2;\n    }\n\n    @media screen and (min-width: 1008px){\n        grid-column: 5;\n        grid-row: 1;\n    }\n"]);return A=function(){return n},n}var I=m.a.div(A());function L(){var n=Object(u.a)(["\n    @media screen and (max-width: 640px){\n        grid-column: 1/3;\n        grid-row: 2;\n    }\n\n    @media screen and (min-width: 641px){\n        grid-column: 1;\n    }\n"]);return L=function(){return n},n}var P=m.a.div(L());function q(){var n=Object(u.a)(["\n    grid-column: 1/3;\n    grid-row: 3;\n\n    @media screen and (min-width: 641px){\n        grid-column: 2/4;\n        grid-row: 1;\n    }\n"]);return q=function(){return n},n}var B=m.a.div(q());function D(){var n=Object(i.useContext)(s).lang;return Object(r.jsxs)(_,{children:[Object(r.jsx)(P,{children:Object(r.jsx)("p",{children:"sv"===n?l[1].sv:l[1].en})}),Object(r.jsx)(B,{children:Object(r.jsx)(y,{text:"sv"===n?l[2].sv:l[2].en})}),Object(r.jsx)(I,{children:Object(r.jsx)(z,{list:k})})]})}var E=[{title:{sv:"CRUD-app",en:"CRUD app"},text:{sv:'Skoluppgift. Skapa, l\xe4s av, uppdatera och ta bort poster i en lista. Inkluderar \xe4ven login med JWT-token samt validering av input-formatet i "VAT-Number"-f\xe4ltet. Byggd i React med styled-components. L\xf6senord: javascriptoramverk',en:'Schoolassignment. Create, read, update and delete posts in a list. Also includes log in with JWT-token and validation of input format in the "VAT-Number" field. Built in React using styled-components. Password: javascriptoramverk'},links:{repo:"https://github.com/d-c-k/react-crud",page:"https://d-c-k.github.io/react-crud/"},image:{mob:"/img/react_crud_screen_mob.jpg",desktop:"/img/react_crud_screen.jpg"}},{title:{sv:"Musikspelare",en:"Audio player"},text:{sv:"En enkel ljuduppspelnings-app med n\xe5gra f\xf6rinlagda .mp3-filer som spelas upp med en tillh\xf6rande .gif som loopas i bakgrunden. Funktioner inkluderar spela/pausa, n\xe4sta/f\xf6rra sp\xe5r, repeat, volymkontroll samt en sp\xe5rlista(endast desktop).",en:"A simple audio playback app with a few preloaded .mp3-files and corresponding .gif-images looping in the background. Functions include play/pause, previous and next track selectors, repeat, volume control and a tracklist(desktop only)"},links:{repo:"https://github.com/d-c-k/audioplayer",page:"https://d-c-k.github.io/audioplayer/"},image:{mob:"/img/audioplayer_screen_mob.jpg",desktop:"%PUBLIC_URL%/audioplayer_screen.jpg"}},{title:{sv:"Quiz-app",en:"Quiz app"},text:{sv:"Skoluppgift. Ett quiz med fr\xe5gor h\xe4mtade via API. V\xe4lj om du vill besvara mellan 5 och 10 fr\xe5gor, markera svarsalternativet eller alternativen du tror st\xe4mmer och g\xe5 vidare till n\xe4sta fr\xe5ga. Om du \xe5ngrar ett svar kan du backa s\xe5 l\xe5ngt du vill innan du v\xe4ljer att l\xe5sa och g\xe5 vidare. P\xe5 resultatsidan visas din totala po\xe4ng, varje fr\xe5ga skrivs ut i en ruta med ditt svar och eventuellt r\xe4tt alternativ om det du svarade skulle vara fel.",en:"Schoolassignment. A quiz with questions fetched via an API. Choose if you want to answer between 5 and 10 questions, select the alternative or alternatives you belive is correct and move on to the next question. If you wish to change an answer on a previous question you may go back as far as you like before locking your solution. On the result screen your total score is shown, every question is printed with your selected answer and possible correct answers if what you chose happend to be incorrect."},links:{repo:"https://github.com/d-c-k/Quiz",page:"https://d-c-k.github.io/Quiz/"},image:{mob:"/img/quiz_screen_mob.jpg",desktop:"/img/quiz_screen.jpg"}}];function F(){var n=Object(u.a)(["\n    @media screen and (max-width: 640px){\n        //position: fixed;\n    }\n\n    position: absolute;\n    bottom: 5%;\n    height: 5%;\n    width: auto;\n    left: 0;\n    right: 0;\n    margin: auto;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n\n"]);return F=function(){return n},n}var M=m.a.div(F());function N(){var n=Object(u.a)(["\n    width: 0.3rem;\n    height: 0.3rem;\n    margin: 0 .5rem;\n    border-radius: 50%;\n    border: 1px solid ",";\n    background-color: ",";\n"]);return N=function(){return n},n}var J=m.a.div(N(),(function(n){return n.color}),(function(n){return n.active?n.color:"none"}));function R(){var n=Object(u.a)(["   \n    @media screen and (max-width: 640px){\n        //scroll-snap-align: start;        \n    }\n\n    background-image: url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size:cover;\n    min-width: 100%;\n    height:100%;\n    position: relative;    \n"]);return R=function(){return n},n}var H=m.a.div(R(),(function(n){return n.image}));function Q(){var n=Object(u.a)(["\n    height: 100%;\n    width: 100%;\n    background-color: ",";\n    display: grid;\n    grid-template-columns: 1.6rem 1fr 1fr 1.6rem;\n    \n    @media screen and (min-width: 641px){\n        padding-top: 1rem;\n        grid-template-columns: 3.2rem 1fr 1fr 1fr 3.2rem;\n        grid-column-gap: 1rem;\n    }\n\n    @media screen and (min-width: 1008px){\n        grid-template-columns: repeat(7, 1fr);\n    }\n"]);return Q=function(){return n},n}var K=m.a.div(Q(),(function(n){return"light"===n.theme?"rgba(255, 255, 255, .65)":"rgba(0, 0, 0, .65)"}));function U(){var n=Object(u.a)(["\n    display: grid;\n    grid-column: 2/4;\n    grid-column-gap: 1rem;\n    grid-row-gap: 1rem;\n    grid-template-rows: 5.2rem 2rem auto 1fr;\n\n    @media screen and (min-width: 641px) and (max-width: 1007px){\n        grid-column: 2/5;\n        grid-template-columns: repeat(3, 1fr);\n        grid-template-rows: auto 1fr;\n    }\n\n    @media screen and (min-width: 1008px){\n        grid-column: 2/7;\n        grid-template-columns: repeat(5, 1fr);\n    }\n"]);return U=function(){return n},n}var V=m.a.div(U());function G(n){var e=Object(i.useContext)(s),t=e.lang,a=e.theme;return Object(r.jsx)(H,{image:n.data.image.desktop,children:Object(r.jsx)(K,{theme:a,children:Object(r.jsxs)(V,{children:[Object(r.jsx)(P,{children:"sv"===t?n.data.title.sv:n.data.title.en}),Object(r.jsx)(B,{children:"sv"===t?n.data.text.sv:n.data.text.en}),Object(r.jsxs)(I,{children:[Object(r.jsxs)("a",{href:n.data.links.page,target:"blank",children:[">> ","sv"===t?l[4].sv:l[4].en]}),Object(r.jsx)("br",{}),Object(r.jsxs)("a",{href:n.data.links.repo,target:"blank",children:[">> ","sv"===t?l[5].sv:l[5].en]})]})]})})})}function W(){var n=Object(u.a)(["\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 80%;\n    width: 2.5%;\n    border: none;\n    color: inherit;\n    font-size: 2rem;\n    background: none;\n    cursor: pointer;\n    text-align: center;\n    ",": 2.5%;\n\n    @media screen and (max-width: 640px){\n        //display:none;\n        transform: none;\n        ",": 0%;\n        width: 20%;\n    }\n"]);return W=function(){return n},n}var X=m.a.button(W(),(function(n){return n.side}),(function(n){return n.side}));function Y(){var n=Object(u.a)(["\n    @media screen and (max-width: 640px){\n        // scroll-snap-points-x: repeat(100vw);\n        // scroll-snap-type: x mandatory;\n        // overflow-x: scroll;\n    }\n\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    position: relative;\n"]);return Y=function(){return n},n}var Z=m.a.div(Y());function $(){var n=Object(i.useContext)(s).theme,e=[0,1,2],t=Object(i.useState)(0),a=Object(d.a)(t,2),o=a[0],c=a[1],l=Object(i.useState)(0),u=Object(d.a)(l,2),m=u[0],p=u[1];return Object(r.jsxs)(Z,{children:[e.map((function(n,e){return Object(r.jsx)("div",{className:"innerSlideContainer",style:{transform:"translateX(".concat(o,"%)")},children:Object(r.jsx)(G,{data:E[n]})},e)})),Object(r.jsx)(X,{side:"left",id:"leftBtn",onClick:function(){c(0===o?-100*(e.length-1):o+100),p(0===m?e.length-1:m-1)},children:"\u276e"}),Object(r.jsx)(X,{side:"right",id:"rightBtn",onClick:function(){o===-100*(e.length-1)?c(0):c(o-100),m===e.length-1?p(0):p(m+1)},children:"\u276f"}),Object(r.jsx)(M,{children:e.map((function(e,t){return Object(r.jsx)(J,{color:"light"===n?"#111111":"white",active:m===e},t)}))})]})}function nn(){var n=Object(u.a)(["\n    display: grid;\n    grid-column: 1/5;\n    grid-row: 2;\n    overflow:hidden;\n\n    @media screen and (max-width: 640px){\n        scroll-snap-align: start; \n    }\n    \n    @media screen and (min-width: 641px){\n        grid-column: 1/6;\n        grid-row: 4;\n    }\n\n    @media screen and (min-width: 1008px){\n        grid-column: 1/8\n    }\n\n"]);return nn=function(){return n},n}var en=m.a.div(nn());function tn(){return Object(r.jsx)(en,{children:Object(r.jsx)($,{})})}function rn(){var n=Object(u.a)(["\n    display: grid;\n    grid-column: 2/4;\n    grid-row: 3;\n    grid-column-gap: 1rem;\n    grid-row-gap: 1rem;\n\n    @media screen and (max-width: 640px){\n        scroll-snap-align: start;\n        grid-template-rows: 5.2rem 2rem auto 1fr;\n    }\n\n    @media screen and (min-width: 641px){\n        grid-column: 2/5;\n        grid-row: 5;\n        grid-column-gap: 1rem;\n        grid-template-columns: repeat(3, 1fr);\n        margin-bottom: 2rem;\n    }\n\n    @media screen and (min-width: 1008px){\n        grid-column: 2/7;\n        grid-template-columns: repeat(5, 1fr);\n    }\n"]);return rn=function(){return n},n}var an=m.a.div(rn());function on(){var n=Object(u.a)(["\n    @media screen and (max-width: 640px) {\n        grid-row: calc("," + 1);\n        grid-column: 1;\n    }\n\n    grid-column: ",";\n"]);return on=function(){return n},n}var cn=m.a.div(on(),(function(n){return n.col}),(function(n){return n.col}));function dn(){var n=Object(i.useContext)(s).lang;return Object(r.jsxs)(an,{children:[Object(r.jsx)(P,{children:Object(r.jsx)("p",{children:"sv"===n?l[3].sv:l[3].en})}),Object(r.jsx)(cn,{col:2,children:Object(r.jsxs)("p",{children:["dc.koefoed@gmail.com",Object(r.jsx)("br",{}),"(+46)70 - 755 06 60"]})}),Object(r.jsxs)(cn,{col:3,children:[Object(r.jsx)("a",{href:"https://www.linkedin.com/in/daniel-koefoed-647306a8/",target:"blank",children:">> Linkedin"}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"https://github.com/d-c-k",target:"blank",children:">> GitHub"})]})]})}function sn(){var n=Object(u.a)(["\n    height: 100vh;\n    width: 100vw;\n\n    background-color: ","};\n    color: ",";\n\n    @media screen and (max-width: 640px){\n        display: grid;\n        grid-template-columns: 1.6rem 1fr 1fr 1.6rem; \n        grid-template-rows: repeat(3, 100vh); \n        scroll-snap-points-y: repeat(100vh);\n        scroll-snap-type: y mandatory;\n        overflow-y: scroll;\n    }\n\n    @media screen and (min-width: 641px){\n        display: grid;\n        grid-template-columns: 3.2rem 1fr 1fr 1fr 3.2rem;\n        grid-template-rows: 3.2rem 4.2rem auto 1fr auto; \n        grid-column-gap: 1rem;\n        grid-row-gap: 1rem;\n    }\n\n    @media screen and (min-width: 1008px){\n        grid-template-columns: repeat(7, 1fr);\n        grid-template-rows: 3.2rem 4.2rem auto 1fr auto; \n    }\n"]);return sn=function(){return n},n}var ln=m.a.div(sn(),(function(n){return"light"===n.theme?"white":"#111111"}),(function(n){return"light"===n.theme?"#111111":"white"}));var un=function(){var n=Object(i.useState)("sv"),e=Object(d.a)(n,2),t=e[0],a=e[1],o=Object(i.useState)(""),c=Object(d.a)(o,2),l=c[0],u={lang:t,setLang:a,theme:l,setTheme:c[1]};return Object(r.jsx)(s.Provider,{value:u,children:Object(r.jsxs)(ln,{theme:l,children:[Object(r.jsx)(O,{}),Object(r.jsx)(D,{}),Object(r.jsx)(tn,{}),Object(r.jsx)(dn,{})]})})},mn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),i(n),a(n),o(n)}))};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(un,{})}),document.getElementById("root")),mn()}},[[21,1,2]]]);
//# sourceMappingURL=main.b5e2da51.chunk.js.map