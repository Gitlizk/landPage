(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"2bd6":function(e,t,s){"use strict";var a=s("5178"),i=s.n(a);i.a},5178:function(e,t,s){},6511:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("div",{staticClass:"header"},[s("img",{staticClass:"head-img",attrs:{src:e.headImg,alt:""}}),s("div",{staticClass:"head-title"},[s("p",{staticClass:"user-name"},[e._v(e._s(e.userName))]),s("p",{staticClass:"invite-tip"},[e._v("invited you to download")])])]),s("div",{staticClass:"content"},[s("div",{staticClass:"home-radio coach",class:1===e.role?"active-radio":"",on:{click:function(t){return e.roleChoose(1)}}},[s("div",{staticClass:"select-btn"})]),s("div",{staticClass:"home-radio student",class:0===e.role?"active-radio":"",on:{click:function(t){return e.roleChoose(0)}}},[s("div",{staticClass:"select-btn"})])]),s("div",{staticClass:"home-btn",class:-1===e.role?"":"active-btn",on:{click:e.goNext}},[e._v("Next")])])},i=[],o={data:function(){return{userName:"",headImg:"",role:-1}},methods:{roleChoose:function(e){this.role=e},goNext:function(){-1!==this.role&&this.$router.push({name:"phone",query:{role:this.role,referUserId:this.referUserId,env:this.$route.query.env}})}},created:function(){var e=this.$route.query,t=e.referUserId,a=e.userName,i=e.iconUrl;this.referUserId=t,this.userName=a||"Patrick Fairweather",this.headImg=i?decodeURIComponent(decodeURIComponent(i)):s("f6a2")}},r=o,n=(s("2bd6"),s("9ca4")),c=Object(n["a"])(r,a,i,!1,null,"67bdf423",null);t["default"]=c.exports},f6a2:function(e,t,s){e.exports=s.p+"img/head-img-default.dba1d608.jpg"}}]);