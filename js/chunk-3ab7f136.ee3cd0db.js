(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ab7f136"],{"446e":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",{attrs:{for:e.slug}},[e._v(" "+e._s(e.label)),e.isRequired?a("span",{staticClass:"required"},[e._v("*")]):e._e()]),a("input",{attrs:{id:e.slug,type:"text",placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e.note?a("small",{staticClass:"note"},[a("Markdown",{attrs:{content:e.note}})],1):e._e()])},s=[],o=a("2b0e"),r=a("84f8"),l=a("e6e0"),i=o["a"].extend({name:"TextInput",components:{Markdown:l["a"]},props:{label:{type:String,required:!0},value:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug:function(){return Object(r["a"])("text",this.label,this.value)}}}),u=i,c=(a("6091"),a("2877")),p=Object(c["a"])(u,n,s,!1,null,"c1fbdf8e",null);t["a"]=p.exports},6091:function(e,t,a){"use strict";a("fae3")},7737:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",{attrs:{for:e.slug}},[e._v(" "+e._s(e.label)+" ")]),a("input",{attrs:{id:e.slug,type:"checkbox"},domProps:{checked:e.checked},on:{change:function(t){return e.$emit("input",t.target.checked)}}}),e.note?a("small",{staticClass:"note"},[a("Markdown",{attrs:{content:e.note}})],1):e._e()])},s=[],o=a("2b0e"),r=a("e6e0"),l=a("84f8"),i=o["a"].extend({name:"Checkbox",components:{Markdown:r["a"]},props:{label:{type:String,required:!0},checked:{type:Boolean,required:!1,default:!1},note:{type:String,required:!1}},computed:{slug:function(){return Object(l["a"])("box",this.label)}}}),u=i,c=a("2877"),p=Object(c["a"])(u,n,s,!1,null,null,null);t["a"]=p.exports},"7b65":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"badges container-lg"},[e._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"app-input"},[a("h2",[e._v("Input values")]),a("form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.submit(t))}}},[a("fieldset",{attrs:{name:"gh-repo"}},[a("legend",[e._v("GitHub repo")]),a("TextInput",{attrs:{label:"Username",isRequired:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("br"),a("TextInput",{attrs:{label:"Repo name",isRequired:""},model:{value:e.repoName,callback:function(t){e.repoName=t},expression:"repoName"}}),a("br"),a("TextInput",{attrs:{label:"License"},model:{value:e.licenseType,callback:function(t){e.licenseType=t},expression:"licenseType"}}),a("br"),a("div",[a("label",[e._v("Version type")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.versionType,expression:"versionType"}],attrs:{type:"radio",id:"one",value:"tag"},domProps:{checked:e._q(e.versionType,"tag")},on:{change:function(t){e.versionType="tag"}}}),a("label",{attrs:{for:"one"}},[e._v("Tag")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.versionType,expression:"versionType"}],attrs:{type:"radio",id:"two",value:"release"},domProps:{checked:e._q(e.versionType,"release")},on:{change:function(t){e.versionType="release"}}}),a("label",{attrs:{for:"two"}},[e._v("Release")])])],1),a("br"),a("fieldset",{attrs:{name:"large-cta-buttons"}},[a("legend",[e._v("Large CTA buttons")]),a("Checkbox",{attrs:{label:"Template",note:"Add a <i>Use This Template</i> button."},model:{value:e.useThisTemplate,callback:function(t){e.useThisTemplate=t},expression:"useThisTemplate"}}),a("br"),a("Checkbox",{attrs:{label:"GitHub Pages",note:"Add link to a GitHub Pages site."},model:{value:e.ghPages,callback:function(t){e.ghPages=t},expression:"ghPages"}})],1),a("br"),a("fieldset",{attrs:{name:"gh-actions"}},[a("legend",[e._v("GitHub Actions workflow")]),a("TextInput",{attrs:{label:"Name",placeholder:"Node CI",note:'From the "name" field of a GH Actions workflow file. For badge-generator default repo, you can use "GH Pages Deploy" for a sample.'},model:{value:e.workflowName,callback:function(t){e.workflowName=t},expression:"workflowName"}})],1),a("br"),a("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])]),a("div",{staticClass:"col-6"},[a("Results",{attrs:{result:e.result}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("Help",{attrs:{message:e.note}})],1)])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[e._v("Repo badges")]),a("p",[e._v(" Generate shields about your repo and add them to your README.md file. ")])])])}],o=(a("99af"),a("2b0e")),r=a("ca2c"),l=a("7737"),i=a("8169"),u=a("446e"),c=a("2eda"),p=(a("5319"),a("ac1f"),a("7cba"));function d(e){var t=e.ghURL,a=e.workflowName,n=encodeURIComponent(a);return"".concat(t,"/workflows/").concat(n,"/badge.svg")}function m(e){var t=e.ghURL,a=e.workflowName,n=a.replace(/ /g,"+");return"".concat(t,'/actions?query=workflow:"').concat(n,'"')}function h(e){var t=e.ghURL,a=e.workflowName;return{altText:a,imageTarget:d({ghURL:t,workflowName:a}),linkTarget:m({ghURL:t,workflowName:a})}}function f(e,t){var a=e.ghURL(),n=h({ghURL:a,workflowName:t});return Object(p["a"])(n)}var g="\n- Where to put repo metadata badges.\n    - In your `README.md` file.\n- Where to put the social badges.\n    - On a docs site to link back to your repo.\n    - Link to a repo you don't own - such as if you want to link to the Vue repo and show its star count.\n- The first social badge has fixed display logic - so make sure you enter a valid repo as the badge can't tell you it is broken. A positive of this is that it works to point to private repos.\n- If you want to always how the latest tag, even if it has _no release_ yet, use the Tag badge. Otherwise, use the Release badge.\n- For centered badges - note that the HTML `align` attribute is being deprecated in favor of CSS. But in markdown on GitHub you cannot set CSS even inline and so must use the `align` attribute.\n",v=o["a"].extend({name:"RepoBadges",components:{Checkbox:l["a"],Help:r["a"],Results:i["a"],TextInput:u["a"]},data:function(){return{username:"MichaelCurrin",repoName:"badge-generator",licenseType:"MIT",useThisTemplate:!1,ghPages:!1,workflowName:"",result:"_Your output will appear here_",versionType:"tag",note:g}},methods:{submit:function(){console.debug("Process inputs and render results"),console.debug({username:this.username,repoName:this.repoName,licenseType:this.licenseType,useThisTemplate:this.useThisTemplate,versionType:this.versionType,ghPages:this.ghPages,workflowName:this.workflowName});var e=new c["a"](this.username,this.repoName,this.licenseType),t=this.workflowName?f(e,this.workflowName):"",a=e.tagBadge(this.versionType),n=e.licenseBadge(!0),s=e.gh(),o=e.ghSocial("stars"),r=e.ghSocial("forks"),l=this.useThisTemplate?e.useThisTemplateBadge():"",i=this.ghPages?e.ghPagesBadge():"",u=e.licenseMessage();this.result="_Social buttons_\n\n".concat(s,"\n").concat(o,"\n").concat(r,"\n\n_Repo metadata_\n\n").concat(t,"\n").concat(a,"\n").concat(n,'\n\n_Call-to-Action buttons_\n\n<div align="center">\n\n').concat(l,"\n\n").concat(i,"\n\n</div>\n\n").concat(u)}}}),b=v,w=a("2877"),k=Object(w["a"])(b,n,s,!1,null,null,null);t["default"]=k.exports},8169:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-results"},[a("h2",[e._v("Output values")]),a("div",[a("h3",[e._v("Preview")]),a("Markdown",{attrs:{content:e.result}})],1),a("div",[a("h3",[e._v("Code")]),a("Pre",[e._v(e._s(e.result))])],1)])},s=[],o=a("2b0e"),r=a("ee75"),l=a("e6e0"),i=o["a"].extend({name:"Results",components:{Markdown:l["a"],Pre:r["a"]},props:{result:String}}),u=i,c=a("2877"),p=Object(c["a"])(u,n,s,!1,null,null,null);t["a"]=p.exports},"84f8":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return s}));a("5319"),a("ac1f"),a("a15b");function n(e){return e.replace(/^\/+/,"")}function s(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t.join("-");return n.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},ca2c:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-notes"},[a("h2",[e._v("Notes")]),a("p",[a("Markdown",{attrs:{content:e.message}})],1)])},s=[],o=a("2b0e"),r=a("e6e0"),l=o["a"].extend({name:"Help",components:{Markdown:r["a"]},props:{message:String}}),i=l,u=a("2877"),c=Object(u["a"])(i,n,s,!1,null,null,null);t["a"]=c.exports},ee75:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",[a("code",[e._t("default")],2)])},s=[],o=a("2b0e"),r=o["a"].extend({name:"Pre"}),l=r,i=a("2877"),u=Object(i["a"])(l,n,s,!1,null,null,null);t["a"]=u.exports},fae3:function(e,t,a){}}]);
//# sourceMappingURL=chunk-3ab7f136.ee3cd0db.js.map