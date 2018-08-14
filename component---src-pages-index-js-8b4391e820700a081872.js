(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{213:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),r=t(259),s=t(381),c=t.n(s),o=t(20),l=t.n(o),m=t(224),p=t.n(m),d=t(221),u=function(e){var a=e.classes;return i.a.createElement(c.a,{className:a.root},i.a.createElement(p.a,{container:!0,spacing:24},e.children))};u.propTypes={classes:l.a.object.isRequired};var f=Object(d.withStyles)(function(e){return{root:{flexGrow:1,margin:"1rem auto 0 auto",maxWidth:"79.3688rem",minWidth:"30.5781rem",minHeight:"112.252rem",padding:"3rem",position:"relative"}}})(u),h=(t(239),t(34)),g=t.n(h),E=t(389),b=t.n(E),y=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(a=e.call.apply(e,[this].concat(n))||this).state={},a}return g()(a,e),a.prototype.render=function(){var e=this.props.classes;return i.a.createElement(p.a,{item:!0,xs:12,sm:5,md:Number(this.props.gridSize),className:e.AvatarContainer},i.a.createElement("div",{className:e.AvatarContainer},i.a.createElement(b.a,{className:e.Avatar,alt:this.props.alt,src:this.props.src})))},a}(i.a.Component);y.propTypes={classes:l.a.object.isRequired};var x=Object(d.withStyles)(function(e){return{AvatarContainer:{maxWidth:"100%",height:"auto"},Avatar:{width:"100%",height:"100%",margin:0,boxShadow:"0px .5px 5px 0px rgba(0, 0, 0, 0.2), 0px .25px 2px 0px rgba(0, 0, 0, 0.14), 0px .125px 1px -2px rgba(0, 0, 0, 0.12);"}}})(y),v=t(394),S=t.n(v),N=t(396),w=t.n(N),z=t(229),k=t.n(z),j=t(391),I=t.n(j),T=Object(d.withStyles)({button:{all:"inherit",cursor:"pointer",userSelect:"text"}})(function(e){var a=e.classes;return i.a.createElement(I.a,{className:a.button,"data-clipboard-text":e.copy},e.children)}),C=t(244),M=function(e){function a(){return e.apply(this,arguments)||this}return g()(a,e),a.prototype.render=function(){var e=this,a=this.props.duration,t=this.props.message,n=this.props.type;return"copy"===this.props.message&&(t=i.a.createElement(k.a,{variant:"caption"},"Copied to Clipboard!")),this.props.type||(n="success"),this.props.duration||(a=3e3),i.a.createElement("span",{onClick:function(){e.props.alert.show(t,{timeout:a,type:n,transition:"fade"})}},this.props.children)},a}(n.Component),W=Object(C.b)(M),R=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(a=e.call.apply(e,[this].concat(n))||this).state={width:454,height:500},a.updateWindowDimensions=function(){a.setState({width:window.innerWidth,height:window.innerHeight})},a}g()(a,e);var t=a.prototype;return t.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},t.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},t.render=function(){var e,a=this.props.classes,t="https://www.linkedin.com/in/marcin-zaborowski/",n="https://www.github.com/Thrajnor",r="https://www.google.pl/maps/place/Wroc%C5%82aw/@51.1267432,16.7116858,10z/data=!3m1!4b1!4m5!3m4!1s0x470fe9c2d4b58abf:0xb70956aec205e0f5!8m2!3d51.1078852!4d17.0385376";return e="undefined"!=typeof window&&this.state.width<672?i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{item:!0,xs:!0},i.a.createElement(S.a,{component:"nav",className:a.Contact},i.a.createElement(w.a,{className:a.listItem},i.a.createElement("a",{href:t},i.a.createElement("i",{className:["fab fa-linkedin",a.bigIcon,a.LinkedIn].join(" ")}))),i.a.createElement(w.a,{className:a.listItem},i.a.createElement("a",{href:n},i.a.createElement("i",{className:["fab fa-github",a.bigIcon,a.Github].join(" ")}))))),i.a.createElement(p.a,{item:!0,xs:12},i.a.createElement(S.a,{component:"nav",className:a.Contact},i.a.createElement(w.a,{className:a.listItem},i.a.createElement(T,{copy:this.props.mail},i.a.createElement(W,{message:"copy"},i.a.createElement(k.a,{className:[a.Mail,a.root].join(" "),variant:"display2"},this.props.Mail)))),i.a.createElement(w.a,{button:!0,className:a.listItem},i.a.createElement("a",{href:r},i.a.createElement(k.a,{className:[a.Home,a.root].join(" "),variant:"display2"},i.a.createElement("i",{className:"fas fa-map-marker-alt"})," ",this.props.Home))),i.a.createElement(w.a,{className:[a.listItem,a.lastListItem].join(" ")},i.a.createElement(k.a,{className:[a.Phone,a.root].join(" "),variant:"display2"},i.a.createElement("i",{className:"fas fa-mobile-alt"})," ",this.props.Phone))))):i.a.createElement(p.a,{item:!0,xs:!0},i.a.createElement(S.a,{component:"nav",className:a.Contact},i.a.createElement(w.a,{className:a.listItem},i.a.createElement(T,{copy:this.props.Mail},i.a.createElement(W,{message:"copy"},i.a.createElement(k.a,{className:a.Mail,variant:"display2"},this.props.Mail," ",i.a.createElement("i",{className:"fas fa-at"}))))),i.a.createElement(w.a,{button:!0,className:a.listItem},i.a.createElement("a",{href:t},i.a.createElement(k.a,{className:a.LinkedIn,variant:"display2"},this.props.LinkedIn," ",i.a.createElement("i",{className:"fab fa-linkedin"})))),i.a.createElement(w.a,{button:!0,className:a.listItem},i.a.createElement("a",{href:n},i.a.createElement(k.a,{className:a.Github,variant:"display2"},this.props.Github," ",i.a.createElement("i",{className:"fab fa-github"})))),i.a.createElement(w.a,{button:!0,className:a.listItem},i.a.createElement("a",{href:r},i.a.createElement(k.a,{className:a.Home,variant:"display2"},this.props.Home," ",i.a.createElement("i",{className:"fas fa-map-marker-alt"})))),i.a.createElement(w.a,{className:[a.listItem,a.lastListItem].join(" ")},i.a.createElement(k.a,{className:a.Phone,variant:"display2"},this.props.Phone," ",i.a.createElement("i",{className:"fas fa-mobile-alt"}))))),i.a.createElement(i.a.Fragment,null,e)},a}(i.a.Component);R.propTypes={classes:l.a.object.isRequired||l.a.array.isRequired};var q=Object(d.withStyles)(function(e){var a;return{bigIcon:{fontSize:"3rem",lineHeight:"3rem"},Contact:{paddingBottom:"0"},listItem:{textAlign:"right",display:"list-item",padding:"0px",marginBottom:"1.5rem",color:"#fff"},root:(a={},a[e.breakpoints.up("sm")]={textAlign:"center"},a[e.breakpoints.down("sm")]={textAlign:"center"},a),lastListItem:{marginBottom:"0px"},Github:{color:"#6e5494"},LinkedIn:{color:"#0077B5"},Home:{color:"#333"},Mail:{color:"#313335"},Phone:{color:"#313335"}}})(R),A=function(e){return i.a.createElement(p.a,{item:!0,xs:!0,md:4},i.a.createElement(k.a,{variant:"headline"}," ",e.firstName," "),i.a.createElement(k.a,{variant:"headline"}," ",e.lastName," "),i.a.createElement(k.a,{variant:"display1"},e.disc))},F=function(e){var a=e.classes;return i.a.createElement(p.a,{item:!0,xs:Number(e.gridSize)},i.a.createElement(k.a,{variant:"body1"},e.title," ",i.a.createElement("em",{className:a.subTitle},e.subTitle)),i.a.createElement(k.a,{variant:"subheading"},e.subheading))};F.propTypes={classes:l.a.object.isRequired};var O=Object(d.withStyles)(function(e){return{subTitle:{fontWeight:"400",fontSize:"1.5rem"}}})(F),P=function(e){var a=e.classes;return i.a.createElement(p.a,{item:!0,xs:Number(e.gridSize)},i.a.createElement(k.a,{variant:"title"},e.icon," ",e.title),i.a.createElement("hr",{className:a.divider}))};P.propTypes={classes:l.a.object.isRequired};var L=Object(d.withStyles)({divider:{border:"0",height:".3rem",backgroundImage:"linear-gradient(to right, #fff, rgba(0, 0, 0, 1), #fff)",marginLeft:"5%",marginBottom:"0"}})(P),B=(t(409),t(125),function(e){var a=e.classes,t=e.skills.sort(function(e,a){return e.experience<a.experience?1:e.experience>a.experience?-1:0}),n=[a.text,a.marginRight].join(" "),r=t.map(function(t){return i.a.createElement(p.a,{item:!0,xs:Number(e.gridSizeXS),sm:Number(e.gridSizeSM),md:Number(e.gridSize),key:t.name},i.a.createElement(k.a,{className:"mr"===t.fix?n:a.text,variant:t.variant},t.icon," ",i.a.createElement("span",{className:t.fix},t.name),function(e){var t=[];if(""!==e){for(var n=0;n<e;n++)t.push(i.a.createElement("i",{className:"material-icons",key:n},"radio_button_checked"));for(var r=0;r<5-e;r++)t.push(i.a.createElement("i",{className:"material-icons",key:r+5},"radio_button_unchecked"));return i.a.createElement("span",{className:a.Experience},t," ",[])}}(t.experience)))});return i.a.createElement(p.a,{item:!0,xs:12},i.a.createElement(p.a,{container:!0,spacing:0},r))});B.propTypes={classes:l.a.object.isRequired};var D=Object(d.withStyles)(function(e){var a,t;return{text:{textAlign:"left"},Experience:(a={float:"right"},a[e.breakpoints.up("lg")]={marginLeft:"2rem"},a),marginRight:(t={},t[e.breakpoints.up("sm")]={marginRight:"1.945rem"},t)}})(B),H=Object(d.withStyles)(function(e){var a;return{RODO:(a={padding:"0 2rem",marginBottom:"3rem"},a[e.breakpoints.down("sm")]={padding:"1rem 3rem 0 3rem"},a),footerBox:{position:"absolute",bottom:"3rem",margin:"0 3rem"}}})(function(e){var a=e.classes;return i.a.createElement("div",{className:a.footerBox},i.a.createElement(k.a,{variant:"display4",className:a.RODO},e.disc),i.a.createElement(p.a,{item:!0,xs:12},i.a.createElement(k.a,{variant:"display4",align:"right"},e.powered," ",e.poweredIcon)))}),G=t(410),J=t.n(G),U=Object(d.withStyles)({button:{margin:"1rem auto 0 auto",display:"block",padding:"0 3rem"}})(function(e){var a=e.classes;return i.a.createElement(i.a.Fragment,null,i.a.createElement(W,{message:"I've downloaded you a pdf!"},i.a.createElement(J.a,{className:a.button,size:"medium"},i.a.createElement("a",{href:e.src,download:"CV-MarcinZaborowski.png"},e.children))))}),V=t(257),X=t.n(V);a.default=function(){return i.a.createElement(r.a,null,i.a.createElement(U,{src:t(412)},"Download PDF!"),i.a.createElement(f,null,i.a.createElement(x,{gridSize:"3",alt:"Marcin",src:t(413)}),i.a.createElement(p.a,{item:!0,xs:!0,sm:7,md:!0},i.a.createElement(p.a,{container:!0,spacing:0},i.a.createElement(A,{gridSize:"4",disc:"Web Developer",firstName:"Marcin",lastName:"Zaborowski"}),i.a.createElement(q,{gridSize:"5",Mail:"marcin.zaborowski@protonmail.com",LinkedIn:"linkedin.com/in/marcin-zaborowski/",Github:"github.com/Thrajnor",Home:"Wrocław, Poland",Phone:"+48 536 486 861"}))),i.a.createElement(O,{gridSize:"12",subheading:"I'm proactive and eager to learn new things through work."}),i.a.createElement(L,{gridSize:"12",icon:i.a.createElement("i",{className:"fas fa-cogs"}),title:"Skills"}),i.a.createElement(D,{gridSizeXS:"12",gridSizeSM:"4",gridSize:"3",skills:[{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-html5"}),name:"Html5",experience:"4",fix:"smallTextFix"},{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-git-square"}),name:"Git",experience:"3",fix:"smallTextFix"},{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-js-square"}),name:"JavaScript",experience:"3"},{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-react"}),name:"React",experience:"3",fix:"smallTextFix"},{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-sass"}),name:"Sass",experience:"3",fix:"smallTextFix"},{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-node-js"}),name:"NodeJs",experience:"2"},{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-vuejs"}),name:"VueJS",experience:"1",fix:"smallTextFix"},{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-css3-alt"}),name:"Css3",experience:"4",fix:"smallTextFix"}]}),i.a.createElement(L,{gridSize:"12",icon:i.a.createElement("i",{className:"fas fa-comments"}),title:"Languages"}),i.a.createElement(D,{gridSizeXS:"12",gridSizeSM:"6",gridSize:"6",skills:[{variant:"display3",icon:"",name:"English",experience:"5",fix:"mr"},{variant:"display3",icon:"",name:"Polish",experience:"5",fix:"smallTextFix"}]}),i.a.createElement(L,{gridSize:"12",icon:i.a.createElement("i",{className:"fas fa-code"}),title:"Work Experience"}),i.a.createElement(O,{gridSize:"12",title:"Freelancing",subTitle:"(July 2018 – Present)"}),i.a.createElement(L,{gridSize:"12",icon:i.a.createElement("i",{className:"fas fa-check-circle"}),title:"Certificates"}),i.a.createElement(O,{gridSize:"12",title:"The Web Developer Bootcamp",subTitle:"(09 May 2018)",subheading:i.a.createElement(X.a,null,i.a.createElement("a",{href:"https://www.ude.my/UC-ENB0NKS0"},"https://www.ude.my/UC-ENB0NKS0"))}),i.a.createElement(L,{gridSize:"12",icon:i.a.createElement("i",{className:"far fa-lightbulb"}),title:"Interests"}),i.a.createElement(D,{gridSizeXS:"6",gridSizeSM:"3",gridSize:"3",skills:[{variant:"body2",icon:"",name:"Coding",experience:""},{variant:"body2",icon:"",name:"Scouting",experience:""},{variant:"body2",icon:"",name:"Cooking",experience:""},{variant:"body2",icon:"",name:"Veganism",experience:""},{variant:"body2",icon:"",name:"Psychology",experience:""},{variant:"body2",icon:"",name:"Hiking",experience:""},{variant:"body2",icon:"",name:"Gaming",experience:""},{variant:"body2",icon:"",name:"Technology",experience:""}]}),i.a.createElement(H,{gridSize:"12",disc:"I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the Personal Data Protection Act as of 29 August 1997, consolidated text: Journal of Laws 2016, item 922 as amended.",powered:"Powered by React",poweredIcon:i.a.createElement("i",{className:"fab fa-react"})})))}},232:function(e,a,t){var n;e.exports=(n=t(243))&&n.default||n},240:function(e){e.exports={data:{site:{siteMetadata:{title:"Marcins Resume"}}}}},243:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),r=t(20),s=t.n(r),c=t(60),o=t(4),l=function(e){var a=e.location,t=o.a.getResourcesForPathname(a.pathname);return i.a.createElement(c.a,{location:a,pageResources:t})};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=l},247:function(e,a,t){},259:function(e,a,t){"use strict";t(68);var n=t(240),i=t(1),r=t.n(i),s=t(20),c=t.n(s),o=t(261),l=t.n(o),m=(t(218),t(232),r.a.createContext({})),p=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};var d=t(221),u=t(244),f=t(268),h=(t(247),Object(d.createMuiTheme)({props:{MuiWithWidth:{initialWidth:"xs"}},palette:{primary:{main:"#6e5494"}},breakpoints:{values:{lg:775,md:672,sm:455}},typography:{fontFamily:["Merienda","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),fontWeightMedium:500,display4:{fontSize:"1.1rem",fontStyle:"italic",fontWeight:"400",margin:"0px",padding:"0px"},display3:{fontSize:"1.71rem",fontWeight:700,color:"#222"},display2:{fontSize:"1.4rem",fontStyle:"italic",height:"2rem"},display1:{fontSize:"1.7rem",fontStyle:"italic"},body1:{fontSize:"2rem",fontWeight:700},headline:{fontSize:"2.44rem",fontWeight:700},title:{fontSize:"2.5rem"},body2:{fontSize:"1.6rem",fontWeight:400},subheading:{fontSize:"1.7rem",fontStyle:"italic"},button:{fontStyle:"italic"},caption:{fontSize:"1.2rem",fontWeight:700,color:"#fff"}}})),g={position:"bottom center",offset:"3rem"},E=function(e){var a=e.children;return e.data,r.a.createElement(p,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),r.a.createElement("div",{style:{padding:"0px 1.0875rem 1.45rem"}},r.a.createElement(d.MuiThemeProvider,{theme:h},r.a.createElement(u.a,Object.assign({template:f.a},g),a))))},data:n})};E.propTypes={children:c.a.node.isRequired},a.a=E},412:function(e,a,t){e.exports=t.p+"static/testCV-5da3a3361d676b699da041ee7b15f685.png"},413:function(e,a,t){e.exports=t.p+"static/AvatarCV-962927eea68a79fa98045f747d11c599.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-8b4391e820700a081872.js.map