(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["verify"],{"0d7a":function(e,t,n){"use strict";var r=n("b2a2"),i=n("8a1c"),a=n("857c"),c=n("2732"),o=n("ef4c"),s=n("38eb"),u=n("d88d"),l=n("59da"),d=n("5139"),p=n("efe2"),f=[].push,v=Math.min,h=4294967295,g=!p((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(c(this)),a=void 0===n?h:n>>>0;if(0===a)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,a);var o,s,u,l=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,g=new RegExp(e.source,p+"g");while(o=d.call(g,r)){if(s=g.lastIndex,s>v&&(l.push(r.slice(v,o.index)),o.length>1&&o.index<r.length&&f.apply(l,o.slice(1)),u=o[0].length,v=s,l.length>=a))break;g.lastIndex===o.index&&g.lastIndex++}return v===r.length?!u&&g.test("")||l.push(""):l.push(r.slice(v)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=c(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,i,n):r.call(String(i),t,n)},function(e,i){var c=n(r,e,this,i,r!==t);if(c.done)return c.value;var d=a(e),p=String(this),f=o(d,RegExp),x=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),y=new f(g?d:"^(?:"+d.source+")",b),m=void 0===i?h:i>>>0;if(0===m)return[];if(0===p.length)return null===l(y,p)?[p]:[];var C=0,E=0,w=[];while(E<p.length){y.lastIndex=g?E:0;var R,_=l(y,g?p:p.slice(E));if(null===_||(R=v(u(y.lastIndex+(g?0:E)),p.length))===C)E=s(p,E,x);else{if(w.push(p.slice(C,E)),w.length===m)return w;for(var S=1;S<=_.length-1;S++)if(w.push(_[S]),w.length===m)return w;E=C=R}}return w.push(p.slice(C)),w}]}),!g)},"22ef":function(e,t,n){"use strict";var r=n("efe2");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},"38eb":function(e,t,n){"use strict";var r=n("f62c").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"426b":function(e,t,n){},5139:function(e,t,n){"use strict";var r=n("99ad"),i=n("22ef"),a=RegExp.prototype.exec,c=String.prototype.replace,o=a,s=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=s||l||u;d&&(o=function(e){var t,n,i,o,d=this,p=u&&d.sticky,f=r.call(d),v=d.source,h=0,g=e;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),n=new RegExp("^(?:"+v+")",f)),l&&(n=new RegExp("^"+v+"$(?!\\s)",f)),s&&(t=d.lastIndex),i=a.call(p?n:d,g),p?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:s&&i&&(d.lastIndex=d.global?i.index+i[0].length:t),l&&i&&i.length>1&&c.call(i[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),e.exports=o},"59da":function(e,t,n){var r=n("2118"),i=n("5139");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"77ad":function(e,t,n){"use strict";var r=n("1c8b"),i=n("a719"),a=n("74e7"),c=n("e1d6"),o=n("d88d"),s=n("da10"),u=n("1bbd"),l=n("90fb"),d=n("1ea7"),p=n("ff9c"),f=d("slice"),v=p("slice",{ACCESSORS:!0,0:0,1:2}),h=l("species"),g=[].slice,x=Math.max;r({target:"Array",proto:!0,forced:!f||!v},{slice:function(e,t){var n,r,l,d=s(this),p=o(d.length),f=c(e,p),v=c(void 0===t?p:t,p);if(a(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?i(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(d,f,v);for(r=new(void 0===n?Array:n)(x(v-f,0)),l=0;f<v;f++,l++)f in d&&u(r,l,d[f]);return r.length=l,r}})},"8a1c":function(e,t,n){var r=n("a719"),i=n("2118"),a=n("90fb"),c=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==i(e))}},"91cd":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"verify"},[n("h2",[e._v("Verification code")]),n("p",{staticClass:"top-tips"},[e._v("Enter the 4-digit code sent to you at")]),n("p",{staticClass:"top-tips"},[e._v(e._s(e.phone)+".")]),n("div",{staticClass:"code-input-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"tel",maxlength:"4"},domProps:{value:e.code},on:{input:[function(t){t.target.composing||(e.code=t.target.value)},e.inputHandler]}}),n("div",{staticClass:"input-wrap-modal",on:{click:e.inputWrapClick}},[n("div",{staticClass:"modal-block"},[e._v(e._s(e.codeShowArray[0]))]),n("div",{staticClass:"modal-margin"}),n("div",{staticClass:"modal-block"},[e._v(e._s(e.codeShowArray[1]))]),n("div",{staticClass:"modal-margin"}),n("div",{staticClass:"modal-block"},[e._v(e._s(e.codeShowArray[2]))]),n("div",{staticClass:"modal-margin"}),n("div",{staticClass:"modal-block"},[e._v(e._s(e.codeShowArray[3]))])])]),n("div",{staticClass:"bottom-tips"},[n("p",[e._v("Didn't receive SMS?")]),e.resendCut?n("p",{staticClass:"left-tips"},[e._v("Resend "+e._s(e.resendCut)+"s")]):n("p",{staticClass:"left-tips active-tips",on:{click:e.resend}},[e._v("Resend")])])])},i=[],a=(n("b4fb"),n("9302"),n("77ad"),n("e35a"),n("0d7a"),n("063a")),c={data:function(){return{resendCut:"59",code:void 0,phone:""}},computed:{codeShowArray:function(){var e=new Array(4);return this.code?Object.assign(e,this.code.split("")):e}},created:function(){var e=this.$route.query,t=e.area,n=e.phone;this.area=t,this.phone=n},mounted:function(){var e=this;this.$nextTick((function(){e.$el.querySelector(".code-input-wrap input").focus()})),this.startCut()},methods:{inputHandler:function(){var e=this;if(4===this.code.length){this.$el.querySelector(".code-input-wrap input").blur();var t=this.code,n=this.$route.query,r=n.area,i=n.phone,c=n.referUserId,o=n.role,s=n.env,u="/Landpage/preRegister.action?area=".concat(r,"&phone=").concat(i,"&referUserId=").concat(c,"&isCoach=").concat(o,"&code=").concat(t,"&env=").concat(s);Object(a["a"])(u,{},"GET").then((function(t){e.$router.push({name:"success"})})).catch((function(t){"phone number is aready registered!"===t.error?window.history.back():(e.code=void 0,e.$el.querySelector(".code-input-wrap input").focus())}))}},resend:function(){var e=this,t=this.$route.query,n=t.area,r=t.phone,i=(t.referUserId,t.role,t.env),c="/Landpage/sendMsg.action?area=".concat(n,"&phone=").concat(r,"&env=").concat(i);Object(a["a"])(c,{},"GET").then((function(t){e.resendCut="59",e.startCut()}))},startCut:function(){var e=this;this.timer=setInterval((function(){"01"===e.resendCut?(clearInterval(e.timer),e.resendCut=void 0):e.resendCut=e.padNum(+e.resendCut-1)}),1e3)},padNum:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return(Array(t).join(0)+e).slice(-t)},inputClick:function(){},inputWrapClick:function(){this.$el.querySelector(".code-input-wrap input").focus()}}},o=c,s=(n("978b"),n("9ca4")),u=Object(s["a"])(o,r,i,!1,null,"eaa1a9ae",null);t["default"]=u.exports},9302:function(e,t,n){"use strict";var r=n("1c8b"),i=n("692f"),a=n("da10"),c=n("d7e1"),o=[].join,s=i!=Object,u=c("join",",");r({target:"Array",proto:!0,forced:s||!u},{join:function(e){return o.call(a(this),void 0===e?",":e)}})},"978b":function(e,t,n){"use strict";var r=n("426b"),i=n.n(r);i.a},"99ad":function(e,t,n){"use strict";var r=n("857c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b2a2:function(e,t,n){"use strict";n("e35a");var r=n("1944"),i=n("efe2"),a=n("90fb"),c=n("5139"),o=n("0fc1"),s=a("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var v=a(e),h=!i((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),g=h&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return t=!0,null},n[v](""),!t}));if(!h||!g||"replace"===e&&(!u||!l||p)||"split"===e&&!f){var x=/./[v],b=n(v,""[e],(function(e,t,n,r,i){return t.exec===c?h&&!i?{done:!0,value:x.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),y=b[0],m=b[1];r(String.prototype,e,y),r(RegExp.prototype,v,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)})}d&&o(RegExp.prototype[v],"sham",!0)}},d7e1:function(e,t,n){"use strict";var r=n("efe2");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},e35a:function(e,t,n){"use strict";var r=n("1c8b"),i=n("5139");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},f62c:function(e,t,n){var r=n("3da3"),i=n("2732"),a=function(e){return function(t,n){var a,c,o=String(i(t)),s=r(n),u=o.length;return s<0||s>=u?e?"":void 0:(a=o.charCodeAt(s),a<55296||a>56319||s+1===u||(c=o.charCodeAt(s+1))<56320||c>57343?e?o.charAt(s):a:e?o.slice(s,s+2):c-56320+(a-55296<<10)+65536)}};e.exports={codeAt:a(!1),charAt:a(!0)}}}]);