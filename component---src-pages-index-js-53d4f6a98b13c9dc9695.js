(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{216:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),r=t(258),s=t(369),c=t.n(s),l=t(20),m=t.n(l),o=t(231),d=t.n(o),p=t(225),u=function(e){var a=e.classes;return i.a.createElement(c.a,{className:a.root},i.a.createElement(d.a,{container:!0,spacing:24},e.children))};u.propTypes={classes:m.a.object.isRequired};var f=Object(p.withStyles)(function(e){return{root:{flexGrow:1,margin:"4rem auto",maxWidth:"79.3688rem",minWidth:"30.5781rem",minHeight:"112.252rem",padding:"3rem",position:"relative"}}})(u),h=(t(233),t(377)),g=t.n(h),E=function(e){var a=e.classes;return i.a.createElement(d.a,{item:!0,xs:12,sm:5,md:Number(e.gridSize),className:a.AvatarContainer},i.a.createElement("div",{className:a.AvatarContainer},i.a.createElement(g.a,{className:a.Avatar,alt:e.alt,src:e.src})))};E.propTypes={classes:m.a.object.isRequired};var b=Object(p.withStyles)(function(e){return{AvatarContainer:{maxWidth:"100%",height:"auto"},Avatar:{width:"100%",height:"100%",margin:0}}})(E),v=t(37),y=t.n(v),S=t(379),N=t.n(S),w=t(381),x=t.n(w),z=t(234),k=t.n(z),I=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(a=e.call.apply(e,[this].concat(n))||this).state={width:454,height:500},a.updateWindowDimensions=function(){a.setState({width:window.innerWidth,height:window.innerHeight})},a}y()(a,e);var t=a.prototype;return t.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},t.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},t.render=function(){var e,a=this.props.classes,t="https://www.linkedin.com/in/marcin-zaborowski/",n="https://www.github.com/Thrajnor",r="https://www.google.pl/maps/place/Wroc%C5%82aw/@51.1267432,16.7116858,10z/data=!3m1!4b1!4m5!3m4!1s0x470fe9c2d4b58abf:0xb70956aec205e0f5!8m2!3d51.1078852!4d17.0385376";return e="undefined"!=typeof window&&this.state.width<672?i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{item:!0,xs:4,sm:1},i.a.createElement(N.a,{component:"nav",className:a.Contact},i.a.createElement(x.a,{className:a.listItem},i.a.createElement("a",{href:t},i.a.createElement("i",{className:["fab fa-linkedin",a.bigIcon,a.LinkedIn].join(" ")}))),i.a.createElement(x.a,{className:a.listItem},i.a.createElement("a",{href:n},i.a.createElement("i",{className:["fab fa-github",a.bigIcon,a.Github].join(" ")}))))),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(N.a,{component:"nav",className:a.Contact},i.a.createElement(x.a,{className:a.listItem},i.a.createElement(k.a,{className:[a.Mail,a.root].join(" "),variant:"display2"},this.props.Mail," ",i.a.createElement("i",{className:"fas fa-at"}))),i.a.createElement(x.a,{button:!0,className:a.listItem},i.a.createElement("a",{href:r},i.a.createElement(k.a,{className:[a.Home,a.root].join(" "),variant:"display2"},this.props.Home," ",i.a.createElement("i",{className:"fas fa-map-marker-alt"})))),i.a.createElement(x.a,{className:[a.listItem,a.lastListItem].join(" ")},i.a.createElement(k.a,{className:[a.Phone,a.root].join(" "),variant:"display2"},this.props.Phone," ",i.a.createElement("i",{className:"fas fa-mobile-alt"})))))):i.a.createElement(d.a,{item:!0,xs:Number(this.props.gridSize)},i.a.createElement(N.a,{component:"nav",className:a.Contact},i.a.createElement(x.a,{className:a.listItem},i.a.createElement(k.a,{className:a.Mail,variant:"display2"},this.props.Mail," ",i.a.createElement("i",{className:"fas fa-at"}))),i.a.createElement(x.a,{button:!0,className:a.listItem},i.a.createElement("a",{href:t},i.a.createElement(k.a,{className:a.LinkedIn,variant:"display2"},this.props.LinkedIn," ",i.a.createElement("i",{className:"fab fa-linkedin"})))),i.a.createElement(x.a,{button:!0,className:a.listItem},i.a.createElement("a",{href:n},i.a.createElement(k.a,{className:a.Github,variant:"display2"},this.props.Github," ",i.a.createElement("i",{className:"fab fa-github"})))),i.a.createElement(x.a,{button:!0,className:a.listItem},i.a.createElement("a",{href:r},i.a.createElement(k.a,{className:a.Home,variant:"display2"},this.props.Home," ",i.a.createElement("i",{className:"fas fa-map-marker-alt"})))),i.a.createElement(x.a,{className:[a.listItem,a.lastListItem].join(" ")},i.a.createElement(k.a,{className:a.Phone,variant:"display2"},this.props.Phone," ",i.a.createElement("i",{className:"fas fa-mobile-alt"}))))),i.a.createElement(i.a.Fragment,null,e)},a}(i.a.Component);I.propTypes={classes:m.a.object.isRequired||m.a.array.isRequired};var j=Object(p.withStyles)(function(e){var a,t;return{bigIcon:{fontSize:"3rem",lineHeight:"3rem"},Contact:{paddingBottom:"0"},mobileFix:(a={},a[e.breakpoints.down("sm")]={flexBasis:"33.3333%",maxWidth:"33.3333%"},a),listItem:{textAlign:"right",display:"list-item",padding:"0px",marginBottom:"1.5rem",color:"#fff"},root:(t={},t[e.breakpoints.up("sm")]={textAlign:"center"},t[e.breakpoints.down("sm")]={textAlign:"center"},t),lastListItem:{marginBottom:"0px"},Github:{color:"#6e5494"},LinkedIn:{color:"#0077B5"},Home:{color:"#333"},Mail:{color:"#313335"},Phone:{color:"#313335"}}})(I),W=function(e){return i.a.createElement(d.a,{item:!0,xs:8,sm:!0,md:Number(e.gridSize)},i.a.createElement(k.a,{variant:"headline"}," ",e.firstName," "),i.a.createElement(k.a,{variant:"headline"}," ",e.lastName," "),i.a.createElement(k.a,{variant:"display1"},e.disc))},M=function(e){var a=e.classes;return i.a.createElement(d.a,{item:!0,xs:Number(e.gridSize)},i.a.createElement(k.a,{variant:"body1"},e.title," ",i.a.createElement("em",{className:a.subTitle},e.subTitle)),i.a.createElement(k.a,{variant:"subheading"},e.subheading))};M.propTypes={classes:m.a.object.isRequired};var T=Object(p.withStyles)(function(e){return{subTitle:{fontWeight:"400",fontSize:"1.5rem"}}})(M),C=function(e){var a=e.classes;return i.a.createElement(d.a,{item:!0,xs:Number(e.gridSize)},i.a.createElement(k.a,{variant:"title"},e.icon," ",e.title),i.a.createElement("hr",{className:a.divider}))};C.propTypes={classes:m.a.object.isRequired};var R=Object(p.withStyles)({divider:{border:"0",height:".2rem",backgroundImage:"linear-gradient(to right, #fff, rgba(0, 0, 0, 1), #fff)",marginLeft:"5%",marginBottom:"0"}})(C),q=(t(402),t(128),function(e){var a,t=e.classes,n=(a=e.skills).sort(a.experience).map(function(a){return i.a.createElement(d.a,{item:!0,xs:Number(e.gridSizeXS),sm:Number(e.gridSizeSM),md:Number(e.gridSize),key:a.name},i.a.createElement(k.a,{className:t.text,variant:a.variant},a.icon," ",a.name,function(e){var a=[];if(""!==e){for(var n=0;n<e;n++)a.push(i.a.createElement("i",{className:"material-icons",key:n},"radio_button_checked"));for(var r=0;r<5-e;r++)a.push(i.a.createElement("i",{className:"material-icons",key:r+5},"radio_button_unchecked"));return i.a.createElement("span",{className:t.Experience},a," ",[])}}(a.experience)))});return i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(d.a,{container:!0,spacing:0},n))});q.propTypes={classes:m.a.object.isRequired};var A=Object(p.withStyles)(function(e){var a;return{text:{textAlign:"left"},Experience:(a={float:"right"},a[e.breakpoints.up("lg")]={marginLeft:"2rem"},a)}})(q),L=Object(p.withStyles)(function(e){var a;return{RODO:(a={padding:"9rem 3rem 0 3rem"},a[e.breakpoints.down("sm")]={padding:"1rem 3rem 0 3rem"},a)}})(function(e){var a=e.classes;return i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,{variant:"caption",className:a.RODO},e.disc),i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(k.a,{variant:"caption",align:"right"},e.powered," ",e.poweredIcon)))}),P=t(277),H=t.n(P);a.default=function(){return i.a.createElement(r.a,null,i.a.createElement(f,null,i.a.createElement(b,{gridSize:"3",alt:"Marcin",src:t(403)}),i.a.createElement(W,{gridSize:"3",disc:"Web Developer",firstName:"Marcin",lastName:"Zaborowski"}),i.a.createElement(j,{gridSize:"6",Mail:"marcin.zaborowski@protonmail.com",LinkedIn:"linkedin.com/in/marcin-zaborowski/",Github:"github.com/Thrajnor",Home:"Wrocław, Poland",Phone:"536 486 861"}),i.a.createElement(T,{gridSize:"12",subheading:"I'm proactive and eager to learn new things through work."}),i.a.createElement(R,{gridSize:"12",icon:i.a.createElement("i",{className:"fas fa-cogs"}),title:"Skills"}),i.a.createElement(A,{gridSizeXS:"12",gridSizeSM:"4",gridSize:"3",skills:[{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-html5"}),name:"Html5",experience:"4"},{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-css3-alt"}),name:"Css3",experience:"4"},{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-git-square"}),name:"GitHub",experience:"3"},{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-js-square"}),name:"JavaScript",experience:"3"},{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-react"}),name:"React",experience:"3"},{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-sass"}),name:"Sass",experience:"3"},{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-node-js"}),name:"NodeJs",experience:"2"},{variant:"display3",icon:i.a.createElement("i",{className:"fab fa-vuejs"}),name:"VueJS",experience:"2"}]}),i.a.createElement(R,{gridSize:"12",icon:i.a.createElement("i",{className:"fas fa-comments"}),title:"Languages"}),i.a.createElement(A,{gridSizeXS:"12",gridSizeSM:"6",gridSize:"6",skills:[{variant:"display3",icon:"",name:"English",experience:"5"},{variant:"display3",icon:"",name:"Polish",experience:"5"}]}),i.a.createElement(R,{gridSize:"12",icon:i.a.createElement("i",{className:"fas fa-code"}),title:"Work Experience"}),i.a.createElement(T,{gridSize:"12",title:"Freelancing",subTitle:"(July 2018 – Present)"}),i.a.createElement(R,{gridSize:"12",icon:i.a.createElement("i",{className:"fas fa-check-circle"}),title:"Certificates"}),i.a.createElement(T,{gridSize:"12",title:"The Web Developer Bootcamp",subTitle:"(09 May 2018)",subheading:i.a.createElement(H.a,null,i.a.createElement("a",{href:"https://www.ude.my/UC-ENB0NKS0"},"https://www.ude.my/UC-ENB0NKS0"))}),i.a.createElement(R,{gridSize:"12",icon:i.a.createElement("i",{className:"far fa-lightbulb"}),title:"Interests"}),i.a.createElement(A,{gridSizeXS:"6",gridSizeSM:"3",gridSize:"3",skills:[{variant:"body2",icon:"",name:"Coding",experience:""},{variant:"body2",icon:"",name:"Scouting",experience:""},{variant:"body2",icon:"",name:"Cooking",experience:""},{variant:"body2",icon:"",name:"Veganism",experience:""},{variant:"body2",icon:"",name:"Psychology",experience:""},{variant:"body2",icon:"",name:"Hiking",experience:""},{variant:"body2",icon:"",name:"Gaming",experience:""},{variant:"body2",icon:"",name:"Technology",experience:""}]}),i.a.createElement(L,{gridSize:"12",disc:"I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the Personal Data Protection Act as of 29 August 1997, consolidated text: Journal of Laws 2016, item 922 as amended.",powered:"Powered by React",poweredIcon:i.a.createElement("i",{className:"fab fa-react"})})))}},236:function(e,a,t){var n;e.exports=(n=t(246))&&n.default||n},243:function(e){e.exports={data:{site:{siteMetadata:{title:"Marcins Resume"}}}}},246:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),r=t(20),s=t.n(r),c=t(61),l=t(4),m=function(e){var a=e.location,t=l.a.getResourcesForPathname(a.pathname);return i.a.createElement(c.a,{location:a,pageResources:t})};m.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=m},247:function(e,a,t){},258:function(e,a,t){"use strict";var n=t(243),i=t(1),r=t.n(i),s=t(20),c=t.n(s),l=t(259),m=t.n(l),o=(t(221),t(236),r.a.createContext({})),d=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};var p=t(225),u=(t(247),Object(p.createMuiTheme)({props:{MuiWithWidth:{initialWidth:"xs"}},palette:{primary:{main:"#6e5494"}},breakpoints:{values:{lg:775,md:672,sm:455}},typography:{fontFamily:["Merienda","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),fontWeightMedium:500,display3:{fontSize:"1.97rem",fontWeight:700,color:"#222"},display2:{fontSize:"1.4rem",fontStyle:"italic",height:"2rem"},display1:{fontSize:"1.7rem",fontStyle:"italic"},body1:{fontSize:"2rem",fontWeight:700},headline:{fontSize:"2.7rem",fontWeight:700},title:{fontSize:"2.5rem"},body2:{fontSize:"1.6rem",fontWeight:400},subheading:{fontSize:"1.7rem",fontStyle:"italic"},button:{fontStyle:"italic"},caption:{fontSize:"1.1rem",fontStyle:"italic"}}})),f=function(e){var a=e.children;return e.data,r.a.createElement(d,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),r.a.createElement("div",{style:{padding:"0px 1.0875rem 1.45rem"}},r.a.createElement(p.MuiThemeProvider,{theme:u},a)))},data:n})};f.propTypes={children:c.a.node.isRequired},a.a=f},403:function(e,a,t){e.exports=t.p+"static/AvatarCV-1ef7c9bc33dbe763ccc25b376090ab1d.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-53d4f6a98b13c9dc9695.js.map