(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84613f92"],{"0213":function(e,t,s){},"446e":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("label",{attrs:{for:e.slug}},[e._v(" "+e._s(e.label)),e.isRequired?s("span",{staticClass:"required"},[e._v("*")]):e._e()]),s("input",{attrs:{id:e.slug,type:"text",placeholder:e.placeholder,required:e.isRequired},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e.note?s("small",{staticClass:"note"},[s("vue-markdown",[e._v(e._s(e.note))])],1):e._e()])},n=[],r=s("9ce6"),o=s.n(r),i=s("84f8"),l={name:"TextInput",components:{VueMarkdown:o.a},props:{label:{type:String,required:!0},value:{type:String,required:!0},placeholder:{type:String,required:!1},note:{type:String,required:!1},isRequired:{type:Boolean,required:!1}},computed:{slug:function(){return Object(i["a"])("text",this.label,this.value)}}},u=l,c=(s("59eb"),s("2877")),p=Object(c["a"])(u,a,n,!1,null,"bcd1d980",null);t["a"]=p.exports},"59eb":function(e,t,s){"use strict";s("0213")},7737:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("label",{attrs:{for:e.slug}},[e._v(" "+e._s(e.label)+" ")]),s("input",{attrs:{id:e.slug,type:"checkbox"},domProps:{checked:e.checked},on:{change:function(t){return e.$emit("input",t.target.checked)}}}),e.note?s("small",{staticClass:"note"},[s("vue-markdown",[e._v(e._s(e.note))])],1):e._e()])},n=[],r=s("9ce6"),o=s.n(r),i=s("84f8"),l={name:"Checkbox",components:{VueMarkdown:o.a},props:{label:{type:String,required:!0},checked:{type:Boolean,required:!1,default:!1},note:{type:String,required:!1}},computed:{slug:function(){return Object(i["a"])("box",this.label)}}},u=l,c=s("2877"),p=Object(c["a"])(u,a,n,!1,null,null,null);t["a"]=p.exports},"7b65":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"badges container-lg"},[e._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"app-input"},[s("h2",[e._v("Input values")]),s("form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.submit(t))}}},[s("fieldset",{attrs:{name:"ghRepo"}},[s("legend",[e._v("GitHub repo")]),s("TextInput",{attrs:{label:"Username",isRequired:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),s("br"),s("TextInput",{attrs:{label:"Repo name",isRequired:""},model:{value:e.repoName,callback:function(t){e.repoName=t},expression:"repoName"}}),s("br"),s("TextInput",{attrs:{label:"License"},model:{value:e.licenseType,callback:function(t){e.licenseType=t},expression:"licenseType"}}),s("br"),s("div",[s("label",[e._v("Version type")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.versionType,expression:"versionType"}],attrs:{type:"radio",id:"one",value:"tag"},domProps:{checked:e._q(e.versionType,"tag")},on:{change:function(t){e.versionType="tag"}}}),s("label",{attrs:{for:"one"}},[e._v("Tag")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.versionType,expression:"versionType"}],attrs:{type:"radio",id:"two",value:"release"},domProps:{checked:e._q(e.versionType,"release")},on:{change:function(t){e.versionType="release"}}}),s("label",{attrs:{for:"two"}},[e._v("Release")])])],1),s("br"),s("fieldset",{attrs:{name:"buttons"}},[s("legend",[e._v("Large CTA buttons")]),s("Checkbox",{attrs:{label:"Template",note:"Add a <i>Use This Template</i> button."},model:{value:e.useThisTemplate,callback:function(t){e.useThisTemplate=t},expression:"useThisTemplate"}}),s("br"),s("Checkbox",{attrs:{label:"GitHub Pages",note:"Add link to a GitHub Pages site."},model:{value:e.ghPages,callback:function(t){e.ghPages=t},expression:"ghPages"}})],1),s("br"),s("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])]),s("div",{staticClass:"col-6"},[s("Results",{attrs:{result:e.result}})],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("Help",{attrs:{message:e.note}})],1)])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",[e._v("Repo badges")])])])}],r=(s("99af"),s("ca2c")),o=s("7737"),i=s("8169"),l=s("446e"),u=s("2eda"),c="\n- Where to put the badges\n    - Use the Social badges on docs site to link back to your repo.\n    - Or use the Social badges to link to repo you don't own.\n    - Use the Repo metadata and the CTA sections at the top of your `README.md` and also on your docs site.\n- The first social badge is dumb - so you have to make sure you enter a valid repo. A positive of this is that it works for private repos.\n- If you want to always how the latest tag, even if it has _no release_ yet, use the Tag badge. Otherwise, use the Release badge.\n- For centered badges - note that the HTML `align` attribute is being deprecated in favor of CSS. But in markdown on GitHub you cannot set CSS even inline and so must use the `align` attribute.\n",p={name:"RepoBadges",components:{Checkbox:o["a"],Help:r["a"],Results:i["a"],TextInput:l["a"]},data:function(){return{username:"MichaelCurrin",repoName:"badge-generator",licenseType:"MIT",useThisTemplate:!1,ghPages:!1,result:"_Your output will appear here_",versionType:"tag",note:c}},methods:{submit:function(){console.debug("Process inputs and render results"),console.debug({username:this.username,repoName:this.repoName,licenseType:this.licenseType,useThisTemplate:this.useThisTemplate,versionType:this.versionType,ghPages:this.ghPages});var e=new u["a"](this.username,this.repoName),t=e.tagBadge("release"===this.versionType),s=e.licenseBadge(this.licenseType),a=e.gh(),n=e.ghSocial("stars"),r=e.ghSocial("forks"),o=this.useThisTemplate?e.useThisTemplateBadge(this.useThisTemplate):"",i=this.ghPages?e.ghPagesBadge():"";this.result="_Social buttons_\n\n".concat(a,"\n").concat(n,"\n").concat(r,"\n\n_Repo metadata_\n\n").concat(t,"\n\n").concat(s,'\n\n_Call-to-Action buttons_\n\n<div align="center">\n\n').concat(o,"\n").concat(i,"\n\n</div>\n      ")}}},d=p,v=s("2877"),h=Object(v["a"])(d,a,n,!1,null,null,null);t["default"]=h.exports},8169:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-results"},[s("h2",[e._v("Output values")]),s("div",[s("h3",[e._v("Preview")]),s("vue-markdown",{attrs:{source:e.result}})],1),s("div",[s("h3",[e._v("Code")]),s("pre",[s("code",[e._v(e._s(e.result))])])])])},n=[],r=s("9ce6"),o=s.n(r),i={name:"Results",components:{VueMarkdown:o.a},props:{result:String}},l=i,u=s("2877"),c=Object(u["a"])(l,a,n,!1,null,null,null);t["a"]=c.exports},"84f8":function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"a",(function(){return n}));s("a15b"),s("ac1f"),s("5319");function a(e){return e.replace(/^\/+/,"")}function n(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var a=t.join("-");return a.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},ca2c:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-notes"},[s("h2",[e._v("Notes")]),s("p",[s("vue-markdown",[e._v(" "+e._s(e.message)+" ")])],1)])},n=[],r=s("9ce6"),o=s.n(r),i={name:"Checkbox",components:{VueMarkdown:o.a},props:{message:{type:String,required:!0}}},l=i,u=s("2877"),c=Object(u["a"])(l,a,n,!1,null,null,null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-84613f92.274929c8.js.map