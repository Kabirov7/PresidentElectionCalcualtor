(this.webpackJsonppresident_election_calculator=this.webpackJsonppresident_election_calculator||[]).push([[0],{61:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(7),s=n(1),c=n.n(s),r=n(14),i=n.n(r),o=(n(80),n.p,n(81),n(67)),l=n(17),d=n(69),u=n(62),j=n(63),b=n(70),h=n(68),p=n(127),x=n(57);x.a.initializeApp({apiKey:"AIzaSyCo3GIxJ_WTstoas4rsptLGrqOJ6vGNAw8",authDomain:"testelcalculator.firebaseapp.com",projectId:"testelcalculator",storageBucket:"testelcalculator.appspot.com",messagingSenderId:"861762964692",appId:"1:861762964692:web:fd60d39923a5f965fabf41",measurementId:"G-9RY5GJVYC4"});var f=x.a,O=n(46),g=n(124),m=n(133),v=n(132),w=n(129),y=n(131),T=(n(61),Object(g.a)((function(e){return{formControl:{minWidth:100,maxWidth:300},question:{fontFamily:"PT Serif",fontWeight:"700",fontSize:20}}})));function N(e){var t=T(),n=c.a.useState(""),r=Object(O.a)(n,2),i=r[0],o=r[1],l=c.a.useState(!1),d=Object(O.a)(l,2),u=d[0],j=d[1],b=e.index,h=e.response,x=(e.required,e.locked),f=e.keyMap;Object(s.useEffect)((function(){h&&o(h)}),[h]);return Object(a.jsxs)("div",{children:[Object(a.jsx)(p.a,{className:t.question,style:{marginBottom:5,marginTop:20},children:e.title}),Object(a.jsxs)(w.a,{className:t.formControl,disabled:x,children:[Object(a.jsx)(m.a,{id:"controlled-open-select-label",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"}),Object(a.jsx)(y.a,{labelId:"controlled-open-select-label",id:"select"+b,open:u,onClose:function(e){j(!1)},onOpen:function(e){j(!0)},value:i,onChange:function(t){o(t.target.value),e.returnAnswer(t.target.value,f)},children:e.answers.map((function(e,t){return Object(a.jsx)(v.a,{value:e,children:e},t)}))})]})]})}var S=n(130),q=n(134),C=Object(g.a)({root:{paddingTop:"25px"},input:{width:42},text:{fontSize:"18px",fontFamily:"PT Serif",fontWeight:"700"},supportText:{fontFamily:"PT Serif",fontWeight:"300",margin:"10px 0px 15px 0px"}});function k(e){var t=Object(s.useState)(50),n=Object(O.a)(t,2),c=n[0],r=n[1],i=C(),o=e.candidate.split(" ")[1],l=o[o.length-1];return Object(a.jsxs)("div",{className:i.root,style:{fontFamily:"PT Serif"},children:[Object(a.jsxs)(p.a,{className:i.text,children:["\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043b\u044e\u0434\u0435\u0439 \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0442\u044c \u0437\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u043e\u0432 \u0438\u043b\u0438 \u043f\u0440\u043e\u0442\u0438\u0432 \u0432\u0441\u0435\u0445, \u0447\u0442\u043e\u0431\u044b ",e.candidate," \u043d\u0435 ","\u0430"==l?"\u0432\u044b\u0438\u0433\u0440\u0430\u043b\u0430":"\u0432\u044b\u0438\u0433\u0440\u0430\u043b"," \u0432 \u043f\u0435\u0440\u0432\u043e\u043c \u0442\u0443\u0440\u0435 \u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0441\u043a\u0438\u0445 \u0432\u044b\u0431\u043e\u0440\u043e\u0432?"]}),Object(a.jsx)(p.a,{className:i.supportText,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435, \u043a\u0430\u043a\u043e\u0439 \u043e\u043a\u0430\u0436\u0435\u0442\u0441\u044f \u044f\u0432\u043a\u0430 (\u0432 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u0430\u0445)"}),Object(a.jsx)(S.a,{container:!0,spacing:2,alignItems:"center",children:Object(a.jsx)(S.a,{item:!0,xs:!0,children:Object(a.jsx)(q.a,{valueLabelDisplay:"auto","aria-label":"pretto slider",value:"number"===typeof c?c:0,onChange:function(t,n){r(n),e.returnRange(n)}})})})]})}n(88);var I=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={questions:[],answers:{},forms:[],result:[],range:50},e.returnAnswer=function(t,n){var a=Object(d.a)({},e.state.answers);a[n]=t,e.setState({answers:a}),console.log(a)},e.returnRange=function(t){var n=t;e.setState({range:n})},e.questions=function(){return e.state.questions.map((function(t,n){if("select"==t.type)return Object(a.jsx)(N,{keyMap:t.key,index:n,title:t.question,response:null,answers:t.answers,returnAnswer:e.returnAnswer,required:t.required},"profile_"+n)}))},e.agree=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(p.a,{style:{marginTop:"20px"},children:" \u0427\u0442\u043e \u0436, \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0431\u0435\u0434\u044b \u0441\u0430\u043c\u043e\u0433\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e, \u043d\u0430 \u0432\u0430\u0448 \u0432\u0437\u0433\u043b\u044f\u0434, \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u0430, \u0430 \u0437\u043d\u0430\u0447\u0438\u0442 \u0432\u0430\u043c \u043d\u0435 \u0437\u0430 \u0447\u0442\u043e \u043f\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0442\u044c. \u0418\u0434\u0438\u0442\u0435 \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043e\u043a \u0438 \u0433\u043e\u043b\u043e\u0441\u0443\u0439\u0442\u0435, \u0432\u044b \u0438\u043c\u0435\u0435\u0442\u0435 \u043d\u0430 \u044d\u0442\u043e \u043f\u043e\u043b\u043d\u043e\u0435 \u043f\u0440\u0430\u0432\u043e."})})},e.disagree=function(){var t=e.state.answers.candidate.split(" ")[1],n=t[t.length-1];return Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)(p.a,{className:"contentText",children:["\u0418\u0442\u0430\u043a, \u0432\u044b \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0435, \u0447\u0442\u043e ",e.state.answers.candidate," \u0438\u043c\u0435\u0435\u0442 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u0443\u044e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c \u0438 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0438\u0433\u0440\u0430\u0442\u044c \u0443\u0436\u0435 \u0432 \u043f\u0435\u0440\u0432\u043e\u043c \u0442\u0443\u0440\u0435, \u043d\u043e \u0432\u044b \u044d\u0442\u043e\u0433\u043e \u043d\u0435 \u0445\u043e\u0442\u0438\u0442\u0435."]}),Object(a.jsx)(p.a,{className:"contentText",children:"\u041a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u0430\u0448\u0435\u043c\u0443 \u043d\u0435\u043b\u044e\u0431\u0438\u043c\u043e\u043c\u0443 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u0443 \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u0443\u043f\u043e\u0440\u043d\u043e \u0431\u043e\u0440\u043e\u0442\u044c\u0441\u044f \u0437\u0430 \u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e? \u041a\u0430\u043a \u043e\u0442\u0442\u044f\u043d\u0443\u0442\u044c \u0431\u043e\u0440\u044c\u0431\u0443 \u0445\u043e\u0442\u044f \u0431\u044b \u043d\u0430 \u0432\u0442\u043e\u0440\u043e\u0439 \u0442\u0443\u0440?"}),Object(a.jsxs)(p.a,{className:"contentText",children:["\u0412\u0442\u043e\u0440\u043e\u0439 \u0442\u0443\u0440 \u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0441\u043a\u0438\u0445 \u0432\u044b\u0431\u043e\u0440\u043e\u0432 \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u044b\u043c \u043f\u0440\u0435\u0446\u0435\u0434\u0435\u043d\u0442\u043e\u043c \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d\u0430! \u0423 \u043d\u0430\u0441 ",Object(a.jsx)("a",{href:"https://kloop.kg/blog/2017/10/26/samara_elections_kg/",target:"_blank",children:"\u0443\u043a\u0440\u0430\u043b\u0438 \u044d\u0442\u0443 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432 2017 \u0433\u043e\u0434\u0443"}),", \u0442\u0430\u043a \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0434\u043e\u0431\u044c\u0451\u043c\u0441\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u0435\u0439\u0447\u0430\u0441!"]}),Object(a.jsx)(p.a,{className:"contentText",children:"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0434\u043e, \u0447\u0442\u043e\u0431\u044b \u0432\u0430\u0448 \u043d\u0435\u043b\u044e\u0431\u0438\u043c\u044b\u0439 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442 \u043d\u0430\u0431\u0440\u0430\u043b \u043c\u0435\u043d\u044c\u0448\u0435 50% \u0433\u043e\u043b\u043e\u0441\u043e\u0432. \u041a\u0430\u043a \u044d\u0442\u043e\u0433\u043e \u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f? \u0414\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u043e\u0432 \u0438\u043b\u0438 \u043f\u0440\u043e\u0442\u0438\u0432 \u0432\u0441\u0435\u0445 \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043b\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u044b \u0438\u0437\u0431\u0438\u0440\u0430\u0442\u0435\u043b\u0435\u0439."}),Object(a.jsxs)(p.a,{className:"contentText",children:[Object(a.jsx)("b",{children:"\u0412\u0410\u0416\u041d\u041e!"})," \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043d\u0430\u0434\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u0439\u0442\u0438 \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043e\u043a \u0438 \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0442\u044c!"]}),Object(a.jsxs)(p.a,{className:"contentText",children:[Object(a.jsx)("b",{children:"\u0417\u0430\u043a\u043e\u043d \u043e \u0432\u044b\u0431\u043e\u0440\u0430\u0445 \u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430 \u041a\u044b\u0440\u0433\u044b\u0437\u0441\u043a\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u0438 \u0434\u0435\u043f\u0443\u0442\u0430\u0442\u043e\u0432 \u0416\u043e\u0433\u043e\u0440\u043a\u0443 \u041a\u0435\u043d\u0435\u0448\u0430 \u041a\u044b\u0440\u0433\u044b\u0437\u0441\u043a\u043e\u0439 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438, \u0441\u0442\u0430\u0442\u044c\u044f 55, \u043f\u0443\u043d\u043a\u0442 3:"})," \xab\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442 \u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430, \u043d\u0430\u0431\u0440\u0430\u0432\u0448\u0438\u0439 \u0432 \u043f\u0435\u0440\u0432\u043e\u043c \u0442\u0443\u0440\u0435 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0432\u044b\u0448\u0435 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u044b \u0433\u043e\u043b\u043e\u0441\u043e\u0432 \u0432\u0441\u0435\u0445 \u0438\u0437\u0431\u0438\u0440\u0430\u0442\u0435\u043b\u0435\u0439, ",Object(a.jsx)("b",{children:"\u043f\u0440\u0438\u043d\u044f\u0432\u0448\u0438\u0445 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0432\u044b\u0431\u043e\u0440\u0430\u0445"}),"\xbb."]}),Object(a.jsx)(k,{returnRange:e.returnRange,candidate:e.state.answers.candidate}),Object(a.jsxs)("div",{className:"resultContainer",children:[Object(a.jsx)("p",{children:"\u0412\u043e\u0442 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u0443\u044e\u0442 \u043f\u0440\u0438 \u0442\u0430\u043a\u043e\u0439 \u044f\u0432\u043a\u0435:"}),Object(a.jsx)("span",{children:Math.ceil(3544403*e.state.range/100)})]}),Object(a.jsxs)("div",{className:"resultContainer",children:[Object(a.jsxs)("p",{children:["\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u043e \u0433\u043e\u043b\u043e\u0441\u043e\u0432 \u0437\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u043e\u0432, \u0447\u0442\u043e\u0431\u044b ",e.state.answers.candidate," \u043d\u0435 ","\u0430"==n?"\u0432\u044b\u0438\u0433\u0440\u0430\u043b\u0430":"\u0432\u044b\u0438\u0433\u0440\u0430\u043b"," \u0432 \u043f\u0435\u0440\u0432\u043e\u043c \u0442\u0443\u0440\u0435:"]}),Object(a.jsx)("span",{children:Math.ceil(Math.ceil(3544403*e.state.range/100)/2+1)})]})]})},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.firestore().collection("question").doc("Template").get().then((function(t){e.setState({questions:t.data().question})})),console.log("Get questions")}},{key:"render",value:function(){var e="";return void 0!=this.state.answers.candidate&&void 0!=this.state.answers.agree&&(e="\u0414\u0430"==this.state.answers.agree?this.agree():"\u041d\u0435\u0442"==this.state.answers.agree?this.disagree():Object(a.jsx)("div",{})),Object(a.jsxs)("div",{children:[this.questions(),e]})}}]),n}(s.Component);var A=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(o.a,{children:Object(a.jsx)(l.a,{exact:!0,path:"/PresidentElectionCalcualtor",children:Object(a.jsx)(I,{})})})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root")),_()}},[[90,1,2]]]);
//# sourceMappingURL=main.61f04dc4.chunk.js.map