"use strict";(self["webpackChunkaugest"]=self["webpackChunkaugest"]||[]).push([[8717],{91877:function(t,e,l){l.r(e),l.d(e,{default:function(){return h}});var a=l(19812),i=l(55893),u=l(44220),s=l.p+"img/turtle.11e7ebdd.png",r=function(t){return(0,a.dD)("data-v-28c1aa2c"),t=t(),(0,a.Cn)(),t},c={class:"container"},n={class:"game",style:{position:"relative"}},d={class:"turtles"},v=(0,a.uE)('<div class="turtle-list" data-v-28c1aa2c><div class="turtle-item" data-v-28c1aa2c>5</div><div class="turtle-item" data-v-28c1aa2c>4</div><div class="turtle-item" data-v-28c1aa2c>3</div><div class="turtle-item" data-v-28c1aa2c>2</div><div class="turtle-item" data-v-28c1aa2c>1</div></div>',1),o={class:"turtle-game"},m=r((function(){return(0,a._)("div",{class:"turtle basic",style:{"z-index":"5"}},[(0,a._)("img",{src:s,style:{width:"200px"}})],-1)})),_={key:0,class:"game-title"},g={key:1},w={key:2};function y(t,e,l,r,y,f){return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",n,[(0,a._)("div",d,[(0,a.wy)((0,a._)("div",{class:"time"},(0,i.zw)(r.time),513),[[u.F8,r.turtle>=0]]),v,(0,a._)("div",o,[(0,a.wy)((0,a._)("div",{class:(0,i.C_)({turtle:!0,new5:8==r.turtle}),style:{"z-index":"10","animation-duration":"1s"}},[(0,a._)("img",{class:(0,i.C_)({autoscale:8==r.turtle}),id:"turtle5",src:s,style:{width:"200px"}},null,2)],2),[[u.F8,r.turtle>=8]]),(0,a.wy)((0,a._)("div",{class:(0,i.C_)({turtle:!0,new4:6==r.turtle}),style:{"z-index":"9","animation-duration":"1s"}},[(0,a._)("img",{class:(0,i.C_)({autoscale:6==r.turtle}),id:"turtle4",src:s,style:{width:"200px"}},null,2)],2),[[u.F8,r.turtle>=6]]),(0,a.wy)((0,a._)("div",{class:(0,i.C_)({turtle:!0,new3:4==r.turtle}),style:{"z-index":"8"}},[(0,a._)("img",{class:(0,i.C_)({autoscale:4==r.turtle}),id:"turtle3",src:s,style:{width:"200px"}},null,2)],2),[[u.F8,r.turtle>=4]]),(0,a.wy)((0,a._)("div",{class:(0,i.C_)({turtle:!0,new2:2==r.turtle}),style:{"z-index":"7"}},[(0,a._)("img",{class:(0,i.C_)({autoscale:2==r.turtle}),id:"turtle2",src:s,style:{width:"200px"}},null,2)],2),[[u.F8,r.turtle>=2]]),(0,a.wy)((0,a._)("div",{class:(0,i.C_)({turtle:!0,new1:0==r.turtle}),style:{"z-index":"6"}},[(0,a._)("img",{class:(0,i.C_)({autoscale:0==r.turtle}),id:"turtle1",src:s,style:{width:"200px"}},null,2)],2),[[u.F8,r.turtle>=0]]),m])]),(0,a._)("div",{class:"gamecover",onClick:e[0]||(e[0]=function(){return r.start&&r.start.apply(r,arguments)})},[-1==r.turtle?((0,a.wg)(),(0,a.iD)("div",_,"不能比下面的乌龟大哦")):(0,a.kq)("",!0),-1==r.gamestatus?((0,a.wg)(),(0,a.iD)("div",g,"输了")):(0,a.kq)("",!0),1==r.gamestatus?((0,a.wg)(),(0,a.iD)("div",w,"Win!")):(0,a.kq)("",!0)])])])}var f=l(20521),p={name:"Turtle",setup:function(){var t,e=(0,f.iH)(-1),l=!1,i=200,u=(0,f.iH)(0),s=(0,f.iH)(10);function r(){if(0!=u.value)return u.value=0,e.value=-1,void(i=200);l||(-1==e.value?(e.value=0,c()):(n(),e.value++,l=!0,setTimeout((function(){var t=(e.value+1)/2,a=document.getElementById("turtle"+t).getBoundingClientRect().width;a<=i?(i=a,e.value++,e.value>=9?u.value=1:c()):(console.log("game over!"),u.value=-1),l=!1}),1e3)))}var c=function(){s.value=10,t=setInterval((function(){s.value-=1,s.value<=0&&r()}),1e3)},n=function(){clearInterval(t)};return(0,a.Ah)((function(){clearInterval(t)})),{turtle:e,start:r,gamestatus:u,time:s}}},C=l(48998);const x=(0,C.Z)(p,[["render",y],["__scopeId","data-v-28c1aa2c"]]);var h=x}}]);
//# sourceMappingURL=8717-legacy.21f83eba.js.map