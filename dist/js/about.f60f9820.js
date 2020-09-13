(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"159b":function(t,e,a){var i=a("da84"),o=a("fdbc"),s=a("17c2"),r=a("9112");for(var n in o){var l=i[n],d=l&&l.prototype;if(d&&d.forEach!==s)try{r(d,"forEach",s)}catch(c){d.forEach=s}}},"17c2":function(t,e,a){"use strict";var i=a("b727").forEach,o=a("a640"),s=a("ae40"),r=o("forEach"),n=s("forEach");t.exports=r&&n?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,a){"use strict";var i=a("23e7"),o=a("17c2");i({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},a640:function(t,e,a){"use strict";var i=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&i((function(){a.call(null,e||function(){throw 1},1)}))}},c4b6:function(t,e,a){},d61c:function(t,e,a){"use strict";var i=a("c4b6"),o=a.n(i);o.a},f820:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"daping"},[a("h1",[t._v("财务-资产分析展示")]),a("div",{staticClass:"flex-div"},[a("div",{staticClass:"chart"},[a("h3",[t._v("收支分析-每月收支情况分析")]),a("div",{attrs:{id:"szfx-mysz"}})]),a("div",{staticClass:"chart"},[a("h3",[t._v("收支分析-三公经费分析")]),a("div",{attrs:{id:"szfx-sgjf"}})])]),a("div",{staticClass:"flex-div"},[a("div",{staticClass:"chart"},[a("h3",[t._v("项目支出-项目支出进度前10名")]),a("div",{attrs:{id:"xmzc"}})]),a("div",{staticClass:"chart"},[a("h3",[t._v("资产类别分布情况")]),a("div",{attrs:{id:"zclb"}})]),a("div",{staticClass:"chart"},[a("h3",[t._v("资产类别分布情况-分布")]),a("div",{attrs:{id:"zclbbt"}})])]),a("div",{staticClass:"flex-div"},[a("div",{staticClass:"chart"},[a("h3",[t._v("资产使用状态统计")]),a("div",{attrs:{id:"zcsy"}})]),a("div",{staticClass:"chart"},[a("h3",[t._v("多饼")]),a("div",{attrs:{id:"db"}})])])])}];a("4160"),a("159b");function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var r={name:"About",components:{},data:function(){return{color:["rgb(78, 112, 240)","rgb(0, 197, 210)","rgb(255, 206, 43)","rgb(255, 129, 44)","rgb(249, 80, 62)","rgb(237, 6, 175)"]}},mounted:function(){this.getszfxmysz(),this.getszfxsgjf(),this.getxmzc(),this.getzclb(),this.getzcsy(),this.getdb()},methods:{getszfxmysz:function(){var t=this;axios.get("http://10.2.21.85:8099/revenueExpenditure/query").then((function(e){if(200==e.status){var a=[],i=[];e.data.data.forEach((function(t){a.push(t.revenue),i.push(t.expenditure)}));var o=echarts.init(document.getElementById("szfx-mysz")),s={color:t.color,title:{show:!1},tooltip:{trigger:"axis"},legend:{data:["收入","支出"],textStyle:{color:"#fff"}},toolbox:{show:!1},xAxis:{type:"category",boundaryGap:!1,data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],axisLabel:{color:"#fff"},axisLine:{lineStyle:{width:1,type:"dashed",color:"rgba(219, 219, 219, 0.4)"}}},yAxis:{type:"value",axisLabel:{formatter:"{value} 元",color:"#fff",width:200},axisLine:{lineStyle:{width:1,type:"dashed",color:"rgba(219, 219, 219, 0.4)"}},splitLine:{lineStyle:{width:1,type:"dashed",color:"rgba(219, 219, 219, 0.4)"}}},series:[{name:"收入",type:"line",data:a},{name:"支出",type:"line",data:i}]};o.setOption(s),window.addEventListener("resize",(function(){o.resize()}))}}))},getszfxsgjf:function(){var t=this;axios.get("http://10.2.21.85:8099/public/query").then((function(e){if(console.log(e),200==e.status){var a=echarts.init(document.getElementById("szfx-sgjf")),i=e.data.data;i.a="分类";var o={color:t.color,title:{show:!1},tooltip:{trigger:"axis"},dataset:{dimensions:["a","official","overseasTrips","publicrun"],source:[i]},legend:{textStyle:{color:"#fff"}},xAxis:{type:"category",axisLabel:{color:"#fff"},axisLine:{lineStyle:{width:1,type:"dashed",color:"rgba(219, 219, 219, 0.4)"}}},yAxis:{axisLabel:{color:"#fff"},axisLine:{lineStyle:{width:1,type:"dashed",color:"rgba(219, 219, 219, 0.4)"}},splitLine:{lineStyle:{width:1,type:"dashed",color:"rgba(219, 219, 219, 0.4)"}}},series:[{type:"bar"},{type:"bar"},{type:"bar"}]};a.setOption(o),window.addEventListener("resize",(function(){a.resize()}))}}))},getxmzc:function(){var t=this;axios.get("http://10.2.21.85:8099/revenueExpenditure/query").then((function(e){if(console.log(e),200==e.status){var a=echarts.init(document.getElementById("xmzc")),i={color:t.color,legend:{textStyle:{color:"#fff"}},xAxis:{axisLabel:{color:"#fff"},axisLine:{lineStyle:{width:1,type:"dashed",color:"rgba(219, 219, 219, 0.4)"}},type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{axisLabel:{color:"#fff"},axisLine:{lineStyle:{width:1,type:"dashed",color:"rgba(219, 219, 219, 0.4)"}},splitLine:{lineStyle:{width:1,type:"dashed",color:"rgba(219, 219, 219, 0.4)"}},type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]};a.setOption(i),window.addEventListener("resize",(function(){a.resize()}))}}))},getzclb:function(){var t=this;axios.get("http://10.2.21.85:8099/asset/query").then((function(e){if(console.log(e),200==e.status){var a,i=echarts.init(document.getElementById("zclb")),o=(a={color:t.color,legend:{textStyle:{color:"#fff"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}"}},s(a,"legend",{show:!1,textStyle:{color:"#fff"}}),s(a,"series",[{name:"漏斗图",type:"funnel",left:"10%",top:30,bottom:60,width:"80%",sort:"descending",gap:2,label:{show:!0,position:"inside"},labelLine:{length:10,lineStyle:{width:1,type:"solid",color:"#eee"}},itemStyle:{borderColor:"#fff",borderWidth:1},emphasis:{label:{fontSize:20}},data:[{value:parseFloat(e.data.data.book),name:"book"},{value:parseFloat(e.data.data.cul),name:"cul"},{value:parseFloat(e.data.data.land),name:"land"},{value:parseFloat(e.data.data.live),name:"live"},{value:parseFloat(e.data.data.privatedivice),name:"privatedivice"},{value:parseFloat(e.data.data.publicdivice),name:"publicdivice"}]}]),a);i.setOption(o),window.addEventListener("resize",(function(){i.resize()})),t.getzclbbt(e)}}))},getzclbbt:function(t){var e,a=this,i=echarts.init(document.getElementById("zclbbt")),o=(e={color:a.color,legend:{textStyle:{color:"#fff"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}%"}},s(e,"legend",{show:!1,textStyle:{color:"#fff"}}),s(e,"series",[{name:"分布",type:"pie",radius:"55%",center:["50%","50%"],data:[{value:parseFloat(t.data.data.book),name:"book"},{value:parseFloat(t.data.data.cul),name:"cul"},{value:parseFloat(t.data.data.land),name:"land"},{value:parseFloat(t.data.data.live),name:"live"},{value:parseFloat(t.data.data.privatedivice),name:"privatedivice"},{value:parseFloat(t.data.data.publicdivice),name:"publicdivice"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]),e);i.setOption(o),window.addEventListener("resize",(function(){i.resize()}))},getzcsy:function(){var t=this;axios.get("http://10.2.21.85:8099/assetuse/query").then((function(e){if(console.log(e),200==e.status){var a,i=echarts.init(document.getElementById("zcsy")),o=(a={color:t.color,legend:{textStyle:{color:"#fff"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}}},s(a,"legend",{show:!1,textStyle:{color:"#fff"}}),s(a,"grid",{left:"3%",right:"4%",bottom:"3%",top:"1%",containLabel:!0}),s(a,"xAxis",{type:"value",axisLabel:{color:"#fff"},axisLine:{lineStyle:{width:1,type:"dashed",color:"rgba(219, 219, 219, 0.4)"}},splitLine:{show:!1,lineStyle:{width:1,type:"dashed",color:"rgba(219, 219, 219, 0.4)"}}}),s(a,"yAxis",{axisLabel:{color:"#fff"},axisLine:{lineStyle:{width:1,type:"dashed",color:"rgba(219, 219, 219, 0.4)"}},splitLine:{lineStyle:{width:1,type:"dashed",color:"rgba(219, 219, 219, 0.4)"}},type:"category",data:["l5","p5","t5","x5"]}),s(a,"series",[{name:"使用",type:"bar",stack:"总量",label:{show:!0,position:"insideRight"},data:[e.data.data.l5,e.data.data.p5,e.data.data.t5,e.data.data.x5]}]),a);i.setOption(o),window.addEventListener("resize",(function(){i.resize()}))}}))},getdb:function(){var t=this;axios.get("http://10.2.21.85:8099/revenueExpenditure/query").then((function(e){if(console.log(e),200==e.status){var a=echarts.init(document.getElementById("db")),i=[{name:"Apples",value:70},{name:"Strawberries",value:68},{name:"Bananas",value:48},{name:"Oranges",value:40},{name:"Pears",value:32},{name:"Pineapples",value:27},{name:"Grapes",value:18}],o={color:t.color,series:[{type:"pie",radius:"25%",center:["50%","50%"],data:i,animation:!1,label:{position:"outer",alignTo:"none",bleedMargin:5},left:0,right:"66.6667%",top:0,bottom:0},{type:"pie",radius:"25%",center:["50%","50%"],data:i,animation:!1,label:{position:"outer",alignTo:"labelLine",bleedMargin:5},left:"33.3333%",right:"33.3333%",top:0,bottom:0},{type:"pie",radius:"25%",center:["50%","50%"],data:i,animation:!1,label:{position:"outer",alignTo:"edge",margin:20},left:"66.6667%",right:0,top:0,bottom:0}]};a.setOption(o),window.addEventListener("resize",(function(){a.resize()}))}}))}}},n=r,l=(a("d61c"),a("2877")),d=Object(l["a"])(n,i,o,!1,null,"9c435d68",null);e["default"]=d.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.f60f9820.js.map