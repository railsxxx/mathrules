(function(e){function t(t){for(var i,l,r=t[0],s=t[1],o=t[2],d=0,h=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&h.push(c[l][0]),c[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);u&&u(t);while(h.length)h.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(i=!1)}i&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},c={app:0},a=[];function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/mathrules/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0409":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function c(e,t,n,c,a,l){var r=Object(i["k"])("math-list");return Object(i["f"])(),Object(i["c"])(r)}var a={"aria-labelledby":"list-summary",class:"stack-large"};function l(e,t,n,c,l,r){var s=Object(i["k"])("math-header"),o=Object(i["k"])("math-enter"),u=Object(i["k"])("math-item"),d=Object(i["k"])("math-keypad");return Object(i["f"])(),Object(i["c"])(i["a"],null,[Object(i["e"])(s),0==l.MathItems.length?(Object(i["f"])(),Object(i["c"])(o,{key:0,onNewmath:r.newMath},null,8,["onNewmath"])):Object(i["d"])("",!0),l.MathItems.length>0?(Object(i["f"])(),Object(i["c"])("h2",{key:1,id:"list-summary",ref:"listSummary",tabindex:"-1"},Object(i["l"])(r.listSummary),513)):Object(i["d"])("",!0),Object(i["e"])("ul",a,[(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["j"])(l.MathItems,(function(e){return Object(i["f"])(),Object(i["c"])("li",{key:e.id},[Object(i["e"])(u,{id:e.id,last:e.last,math:e.label,rule:e.rule,onItemedited:function(t){return r.editItem(e.id,t)},onItemdeleted:function(t){return r.deleteItem(e.id)},onRuleapplied:r.addItem},null,8,["id","last","math","rule","onItemedited","onItemdeleted","onRuleapplied"])])})),128))]),r.isTyping?(Object(i["f"])(),Object(i["c"])(d,{key:2,mqmathfieldref:r.MQMathField,mqmathfield:e.gFocusMQobj.get()},null,8,["mqmathfieldref","mqmathfield"])):Object(i["d"])("",!0)],64)}n("7db0"),n("4fad");var r=Object(i["m"])("data-v-3712278a");Object(i["h"])("data-v-3712278a");var s=Object(i["e"])("br",null,null,-1),o=Object(i["e"])("span",{id:"example1"},"(a-3)^2",-1),u=Object(i["e"])("span",{id:"example2"},"(a-b)^2⇒a^2-2ab+b^2",-1),d=Object(i["e"])("span",{id:"example3"},"b=3",-1),h=Object(i["e"])("span",{id:"example4"},"a^2-2a3+3^2",-1),b=Object(i["e"])("br",null,null,-1);Object(i["g"])();var f=r((function(e,t,n,c,a,l){return Object(i["f"])(),Object(i["c"])(i["a"],null,[Object(i["e"])("h1",null,Object(i["l"])(a.locale.title),1),Object(i["e"])("p",null,Object(i["l"])(a.locale.subtitle),1),s,Object(i["e"])("p",null,Object(i["l"])(a.locale.example)+":",1),Object(i["e"])("div",null,[Object(i["e"])("span",null,Object(i["l"])(a.locale.example1)+":",1),o]),Object(i["e"])("div",null,[Object(i["e"])("span",null,Object(i["l"])(a.locale.example2)+":",1),u]),Object(i["e"])("div",null,[Object(i["e"])("span",null,Object(i["l"])(a.locale.example3)+":",1),d]),Object(i["e"])("div",null,[Object(i["e"])("span",null,Object(i["l"])(a.locale.example4)+":",1),h]),b],64)})),m=window.MQ,p={data:function(){return{locale:this.gLocale}},mounted:function(){m.StaticMath(document.getElementById("example1")),m.StaticMath(document.getElementById("example2")),m.StaticMath(document.getElementById("example3")),m.StaticMath(document.getElementById("example4"))}};p.render=f,p.__scopeId="data-v-3712278a";var j=p,O=Object(i["m"])("data-v-74238eef");Object(i["h"])("data-v-74238eef");var g={key:0,class:"stack-small"},v={key:2,class:"btn-group"};Object(i["g"])();var k=O((function(e,t,n,c,a,l){var r=Object(i["k"])("rule-select");return Object(i["f"])(),Object(i["c"])(i["a"],null,[Object(i["e"])("div",null,[Object(i["e"])("p",{id:l.staticMathId},Object(i["l"])(n.math),9,["id"])]),e.isEditing?(Object(i["f"])(),Object(i["c"])(r,{key:1,id:n.id,rule:n.rule,onItemedited:l.itemEdited,onEditcancelled:l.editCancelled},null,8,["id","rule","onItemedited","onEditcancelled"])):(Object(i["f"])(),Object(i["c"])("div",g,[n.rule.filled?(Object(i["f"])(),Object(i["c"])("div",{key:0,id:l.editRule,class:"checkbox-label",onClick:t[1]||(t[1]=function(){return l.toggleToRuleSelect&&l.toggleToRuleSelect.apply(l,arguments)})},Object(i["l"])(n.rule.filled?n.rule.filled.left+" ⇒ "+n.rule.filled.right:""),9,["id"])):(Object(i["f"])(),Object(i["c"])("div",{key:1,onClick:t[2]||(t[2]=function(){return l.toggleToRuleSelect&&l.toggleToRuleSelect.apply(l,arguments)})},Object(i["l"])(e.locale.selectRule),1)),e.isLast?(Object(i["f"])(),Object(i["c"])("div",v,[Object(i["e"])("button",{type:"button",class:"btn btn__danger",onClick:t[3]||(t[3]=function(){return l.deleteStep&&l.deleteStep.apply(l,arguments)})},Object(i["l"])(e.locale.back),1)])):Object(i["d"])("",!0)]))],64)})),M=(n("ac1f"),n("5319"),Object(i["m"])("data-v-16f8d2fa"));Object(i["h"])("data-v-16f8d2fa");var y={key:0},C={key:1},S={key:2},R={key:0},E=Object(i["e"])("br",null,null,-1),F={key:1},w={class:"scrolldown"},I={class:"btn-group"};Object(i["g"])();var q=M((function(e,t,n,c,a,l){var r=Object(i["k"])("rule-add"),s=Object(i["k"])("rule-var-edit");return a.isAdding?(Object(i["f"])(),Object(i["c"])("div",y,[Object(i["e"])(r,{rules:a.rules,onRuleadded:l.onRuleAdded,onAddcancelled:l.onAddCancelled},null,8,["rules","onRuleadded","onAddcancelled"])])):a.isEditing?(Object(i["f"])(),Object(i["c"])("div",C,"isEditing")):(Object(i["f"])(),Object(i["c"])("div",S,[a.isSelected?(Object(i["f"])(),Object(i["c"])("div",R,[Object(i["e"])("span",{id:"selectedRule",onClick:t[1]||(t[1]=function(e){return l.onSelect(a.selectedRule)})},Object(i["l"])(a.selectedRule.filled?a.selectedRule.filled.left+"⇒"+a.selectedRule.filled.right:a.selectedRule.left+"⇒"+a.selectedRule.right),1),E,Object(i["e"])("span",null,Object(i["l"])(a.locale.setVarToAdapt),1)])):(Object(i["f"])(),Object(i["c"])("div",F,[Object(i["e"])("span",null,Object(i["l"])(a.locale.clickRuleToSelect),1),Object(i["e"])("div",w,[(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["j"])(a.rules,(function(e,t){return Object(i["f"])(),Object(i["c"])("span",{key:t,id:"rule_"+t,onClick:function(t){return l.onSelect(e)}},Object(i["l"])(e.filled?e.filled.left+"⇒"+e.filled.right:e.left+"⇒"+e.right),9,["id","onClick"])})),128))])])),(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["j"])(a.selectedRule.vars,(function(e,t){return Object(i["f"])(),Object(i["c"])("div",{key:t},[a.isSelected&&a.selectedRule.vars&&a.selectedRule.vars.length>0?(Object(i["f"])(),Object(i["c"])(s,{key:0,varName:e,varValue:a.selectedRule[e]?a.selectedRule[e]:"",onVaredited:l.onVarEdited},null,8,["varName","varValue","onVaredited"])):Object(i["d"])("",!0)])})),128)),Object(i["e"])("div",I,[Object(i["e"])("button",{type:"button",class:"btn btn__primary",onClick:t[2]||(t[2]=function(){return l.onSave&&l.onSave.apply(l,arguments)})},Object(i["l"])(a.locale.save),1),Object(i["e"])("button",{type:"button",class:"btn",onClick:t[3]||(t[3]=function(){return l.onCancel&&l.onCancel.apply(l,arguments)})},Object(i["l"])(a.locale.cancel),1)])]))})),x=Object(i["m"])("data-v-74b1940b"),Q=x((function(e,t,n,c,a,l){return Object(i["f"])(),Object(i["c"])(i["a"],null,[Object(i["e"])("label",{for:n.varName},Object(i["l"])(n.varName),9,["for"]),Object(i["e"])("span",null,[a.isEditing?(Object(i["f"])(),Object(i["c"])("span",{key:0,id:n.varName,onClick:t[1]||(t[1]=function(){return l.onEdit&&l.onEdit.apply(l,arguments)})},Object(i["l"])(a.varNewValue),9,["id"])):(Object(i["f"])(),Object(i["c"])("span",{key:1,onClick:t[2]||(t[2]=function(){return l.onClick&&l.onClick.apply(l,arguments)})},Object(i["l"])(a.locale.varCorrespondsToWhat),1))])],64)})),_=window.MQ,W={components:{},emits:["varedited"],props:{varName:{type:String,required:!0},varValue:{type:String,required:!0}},data:function(){return{varNewValue:this.varValue,isEditing:!1,locale:this.gLocale}},computed:{MQMathField:function(){return _.MathField(document.getElementById(this.varName))}},methods:{onChange:function(e){this.$emit("varedited",this.varName,e.replace(/\s+/g,""))},onClick:function(){this.isEditing=!0},onEdit:function(){this.MQMathField.focus(),this.gFocusMQobj.set(this.MQMathField),this.gFocusMQref.value=this.MQMathField}},updated:function(){var e=this.onChange,t=_.MathField(document.getElementById(this.varName),{spaceBehavesLikeTab:!0,supSubsRequireOperand:!0,substituteTextarea:function(){return document.createElement("SPAN")},handlers:{edit:function(){var n=t.latex();e(n)}}})}};n("d2ee");W.render=Q,W.__scopeId="data-v-74b1940b";var V=W,N=Object(i["m"])("data-v-499494f1");Object(i["h"])("data-v-499494f1");var L={id:"newRule"},T=Object(i["e"])("br",null,null,-1),A={class:"btn-group"};Object(i["g"])();var B=N((function(e,t,n,c,a,l){var r=Object(i["k"])("rule-var-edit");return Object(i["f"])(),Object(i["c"])(i["a"],null,[Object(i["e"])("div",L,Object(i["l"])((a.rule.vars?a.rule.vars:"vars")+" :: "+(a.rule.left?a.rule.left:"left")+"→"+(a.rule.right?a.rule.right:"right")),1),T,Object(i["e"])(r,{varName:"left",varValue:"",onVaredited:l.onVarEdited},null,8,["onVaredited"]),Object(i["e"])(r,{varName:"right",varValue:"",onVaredited:l.onVarEdited},null,8,["onVaredited"]),Object(i["e"])(r,{varName:"vars",varValue:"",onVaredited:l.onVarEdited},null,8,["onVaredited"]),Object(i["e"])("div",A,[Object(i["e"])("button",{type:"button",class:"btn",onClick:t[1]||(t[1]=function(){return l.onCancel&&l.onCancel.apply(l,arguments)})},"Cancel"),Object(i["e"])("button",{type:"button",class:"btn btn__primary",onClick:t[2]||(t[2]=function(){return l.onSave&&l.onSave.apply(l,arguments)})},"Save")])],64)})),P=(n("1276"),n("99af"),n("4160"),n("4d63"),n("25f0"),n("159b"),n("b85c")),$=window.MQ;function K(e,t){var n=[];return n.push(e),n=t.concat(n),n}function D(e,t){var n=[];return e.vars&&n.push(e),n=n.concat(t),J(n)}function J(e){return e.forEach((function(e,t,n){n[t].left=e.left.replace(/\s+/g,""),n[t].right=e.right.replace(/\s+/g,"")})),e}function U(e){var t,n={};n.left=e.left,n.right=e.right;var i,c=Object(P["a"])(e.vars);try{for(c.s();!(i=c.n()).done;){var a=i.value;e[a]&&(t=new RegExp(a,"g"),n.left=n.left.replace(t,e[a]),n.right=n.right.replace(t,e[a]))}}catch(l){c.e(l)}finally{c.f()}return e.filled=n,e}function G(e,t){if(t)$.StaticMath(document.getElementById("selectedRule"));else for(var n="",i=0;i<e.length;i++)n="rule_"+i,$.StaticMath(document.getElementById(n))}function H(e,t){var n=JSON.stringify(e),i=document.createElement("a");i.href="data:application/json,"+encodeURIComponent(n),i.download=t,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)}var Y=window.MQ,Z={components:{RuleVarEdit:V},emits:["ruleadded","addcancelled"],props:{rules:{type:Object,required:!0}},data:function(){return{rule:{},enlargedRules:this.rules,hasChanged:!1}},computed:{},methods:{onVarEdited:function(e,t){switch(this.hasChanged=!0,e){case"left":this.rule.left=t;break;case"right":this.rule.right=t;break;case"vars":this.rule.vars=t.split(",");break;default:}},onSave:function(){this.rule.vars&&this.hasChanged&&(this.hasChanged=!1,this.enlargedRules=K(this.rule,this.enlargedRules),H(this.enlargedRules,"rules.json"),this.$emit("ruleadded",this.enlargedRules),this.gFocusMQobj.clear(),this.gFocusMQref.value={})},onCancel:function(){this.$emit("addcancelled"),this.gFocusMQobj.clear(),this.gFocusMQref.value={}}},mounted:function(){Y.StaticMath(document.getElementById("newRule"))},updated:function(){Y.StaticMath(document.getElementById("newRule"))}};Z.render=B,Z.__scopeId="data-v-499494f1";var z=Z,X=n("7bca"),ee={components:{RuleVarEdit:V,RuleAdd:z},emits:["editcancelled","itemedited"],props:{rule:{type:Object,required:!0},id:{type:String,required:!0}},data:function(){return{selectedRule:this.rule,rules:D(this.rule,X),hasChanged:!1,isSelected:!1,isAdding:!1,isEditing:!1,locale:this.gLocale}},methods:{onVarEdited:function(e,t){this.selectedRule[e]=t,this.hasChanged=!0},onRuleAdded:function(e){this.rules=e,this.isAdding=!1},onAddCancelled:function(){this.isAdding=!1},onSelect:function(e){this.isSelected?this.isSelected=!1:(this.selectedRule=JSON.parse(JSON.stringify(e)),this.isSelected=!0,this.hasChanged=!0)},onSave:function(){this.selectedRule.vars&&(this.selectedRule=U(this.selectedRule),console.log("onSave",this.selectedRule),this.hasChanged&&(this.hasChanged=!1,this.$emit("itemedited",this.selectedRule),this.gFocusMQobj.clear(),this.gFocusMQref.value={}))},onCancel:function(){this.$emit("editcancelled"),this.gFocusMQobj.clear(),this.gFocusMQref.value={}}},mounted:function(){G(this.rules,this.isSelected)},updated:function(){G(this.rules,this.isSelected)}};n("6918");ee.render=q,ee.__scopeId="data-v-16f8d2fa";var te=ee,ne=window.MQ,ie={components:{RuleSelect:te},props:{id:String,last:Boolean,math:String,rule:Object},emits:["itemedited","itemdeleted","ruleapplied"],data:function(){return{isEditing:!1,isLast:this.last,newMath:this.math,staticMathMQ:{},locale:this.gLocale}},computed:{staticMathId:function(){return"static-math-"+this.id},editRule:function(){return"edit-rule-"+this.id}},methods:{rewriteMath:function(){console.log("rewriteMath: rule: ",this.rule),this.rule.filled&&(this.newMath=ce(this.math,this.rule.filled),this.$emit("ruleapplied",this.newMath))},deleteStep:function(){this.$emit("itemdeleted")},toggleToRuleSelect:function(){this.isLast&&(this.isEditing=!0)},itemEdited:function(e){this.$emit("itemedited",e),this.isEditing=!1},editCancelled:function(){this.isEditing=!1},onStaticMathClick:function(){this.gFocusMQobj.set(this.staticMathMQ),console.log("onStaticMathClick: gFocusMQobj: ",this.gFocusMQobj.get()),this.gFocusMQref.value=this.staticMathMQ,console.log("onStaticMathClick: gFocusMQref.value: ",this.gFocusMQref.value)}},watch:{last:function(e){this.isLast=e},rule:function(){this.rewriteMath()}},mounted:function(){var e=document.getElementById(this.staticMathId);this.staticMathMQ=ne.StaticMath(e),e=document.getElementById(this.editRule),ne.StaticMath(e)},updated:function(){var e=document.getElementById(this.editRule);ne.StaticMath(e)}};function ce(e,t){if(console.log("matchRule: rule:",t),t.left&&t.right){var n=e.replace(t.left,t.right);return n}}n("fcb1");ie.render=k,ie.__scopeId="data-v-74238eef";var ae=ie;function le(e,t,n,c,a,l){return Object(i["f"])(),Object(i["c"])(i["a"],null,[a.isEditing?(Object(i["f"])(),Object(i["c"])("span",{key:0,class:"input__lg",id:"enter-math-field",ref:"editMathFieldRef",onClick:t[1]||(t[1]=function(){return l.onEdit&&l.onEdit.apply(l,arguments)})},Object(i["l"])(a.init),513)):(Object(i["f"])(),Object(i["c"])("span",{key:1,class:"input__lg",onClick:t[2]||(t[2]=function(){return l.onClick&&l.onClick.apply(l,arguments)})},Object(i["l"])(a.locale.enterMath),1)),Object(i["e"])("button",{type:"button",onClick:t[3]||(t[3]=function(){return l.onStart&&l.onStart.apply(l,arguments)}),class:"btn btn__primary btn__lg"}," Start ")],64)}var re=window.MQ,se={components:{},emits:["newmath"],data:function(){return{init:"(a-3)^2",input:"(a-3)^2",isEditing:!1,locale:this.gLocale}},computed:{MQMathField:function(){return re.MathField(this.$refs.editMathFieldRef)}},methods:{onClick:function(){this.isEditing=!0},onEdit:function(){this.MQMathField.focus(),this.gFocusMQobj.set(this.MQMathField),this.gFocusMQref.value=this.MQMathField},onInput:function(e){this.input=e},onStart:function(){""!==this.input&&(this.$emit("newmath",this.input.replace(/\s+/g,"")),this.input="",this.gFocusMQobj.clear(),this.gFocusMQref.value={},this.isEditing=!1)}},updated:function(){var e=this.onInput,t=this.onStart,n=re.MathField(this.$refs.editMathFieldRef,{spaceBehavesLikeTab:!0,supSubsRequireOperand:!0,substituteTextarea:function(){return document.createElement("SPAN")},handlers:{edit:function(){e(n.latex())},enter:function(){t()}}})}};se.render=le;var oe=se,ue=Object(i["m"])("data-v-5e05c278");Object(i["h"])("data-v-5e05c278");var de=Object(i["e"])("br",null,null,-1),he={class:"btn-group"},be={class:"btn-group"},fe={class:"btn-group"},me={class:"btn-group"},pe={class:"btn-group"},je=Object(i["e"])("br",null,null,-1);Object(i["g"])();var Oe=ue((function(e,t,n,c,a,l){return Object(i["f"])(),Object(i["c"])(i["a"],null,[de,Object(i["e"])("div",he,[Object(i["e"])("span",{id:"digit1",class:"btn",onClick:t[1]||(t[1]=function(e){return l.onWrite("1")})}," 1 "),Object(i["e"])("span",{id:"digit2",class:"btn",onClick:t[2]||(t[2]=function(e){return l.onWrite("2")})}," 2 "),Object(i["e"])("span",{id:"digit3",class:"btn",onClick:t[3]||(t[3]=function(e){return l.onWrite("3")})}," 3 "),Object(i["e"])("span",{id:"digit4",class:"btn",onClick:t[4]||(t[4]=function(e){return l.onWrite("4")})}," 4 "),Object(i["e"])("span",{id:"digit5",class:"btn",onClick:t[5]||(t[5]=function(e){return l.onWrite("5")})}," 5 "),Object(i["e"])("span",{id:"digit6",class:"btn",onClick:t[6]||(t[6]=function(e){return l.onWrite("6")})}," 6 "),Object(i["e"])("span",{id:"digit7",class:"btn",onClick:t[7]||(t[7]=function(e){return l.onWrite("7")})}," 7 "),Object(i["e"])("span",{id:"digit8",class:"btn",onClick:t[8]||(t[8]=function(e){return l.onWrite("8")})}," 8 "),Object(i["e"])("span",{id:"digit9",class:"btn",onClick:t[9]||(t[9]=function(e){return l.onWrite("9")})}," 9 "),Object(i["e"])("span",{id:"digit0",class:"btn",onClick:t[10]||(t[10]=function(e){return l.onWrite("0")})}," 0 ")]),Object(i["e"])("div",be,[Object(i["e"])("span",{id:"chara",class:"btn",onClick:t[11]||(t[11]=function(e){return l.onWrite("a")})}," a "),Object(i["e"])("span",{id:"charb",class:"btn",onClick:t[12]||(t[12]=function(e){return l.onWrite("b")})}," b "),Object(i["e"])("span",{id:"charc",class:"btn",onClick:t[13]||(t[13]=function(e){return l.onWrite("c")})}," c "),Object(i["e"])("span",{id:"charm",class:"btn",onClick:t[14]||(t[14]=function(e){return l.onWrite("m")})}," m "),Object(i["e"])("span",{id:"charn",class:"btn",onClick:t[15]||(t[15]=function(e){return l.onWrite("n")})}," n "),Object(i["e"])("span",{id:"charx",class:"btn",onClick:t[16]||(t[16]=function(e){return l.onWrite("x")})}," x "),Object(i["e"])("span",{id:"comma",class:"btn",onClick:t[17]||(t[17]=function(e){return l.onWrite(",")})}," , ")]),Object(i["e"])("div",fe,[Object(i["e"])("span",{id:"plus",class:"btn",onClick:t[18]||(t[18]=function(e){return l.onWrite("+")})}," + "),Object(i["e"])("span",{id:"minus",class:"btn",onClick:t[19]||(t[19]=function(e){return l.onWrite("-")})}," - "),Object(i["e"])("span",{id:"mult",class:"btn",onClick:t[20]||(t[20]=function(e){return l.onCmd("\\cdot")})}," * "),Object(i["e"])("span",{id:"divide",class:"btn",onClick:t[21]||(t[21]=function(e){return l.onFrac()})}," / "),Object(i["e"])("span",{id:"divide",class:"btn",onClick:t[22]||(t[22]=function(e){return l.onWrite("=")})}," = "),Object(i["e"])("span",{id:"pm",class:"btn",onClick:t[23]||(t[23]=function(e){return l.onCmd("\\pm")})}," ± "),Object(i["e"])("span",{id:"brackets()",class:"btn",onClick:t[24]||(t[24]=function(e){l.onWrite("\\left(\\right)"),l.onKey("Left")})}," ( ) "),Object(i["e"])("span",{id:"brackets[]",class:"btn",onClick:t[25]||(t[25]=function(e){l.onWrite("\\left[\\right]"),l.onKey("Left")})}," [ ] ")]),Object(i["e"])("div",me,[Object(i["e"])("span",{id:"power2",class:"btn",onClick:t[26]||(t[26]=function(e){return l.onWrite("^{2}")})},"a^2"),Object(i["e"])("span",{id:"sqrt",class:"btn",onClick:t[27]||(t[27]=function(e){return l.onCmd("\\sqrt")})},"\\sqrt{a}"),Object(i["e"])("span",{id:"powerN",class:"btn",onClick:t[28]||(t[28]=function(e){l.onWrite("^{}"),l.onKey("Left")})},"a^n"),Object(i["e"])("span",{id:"sqrtN",class:"btn",onClick:t[29]||(t[29]=function(e){l.onWrite("\\sqrt[]{}"),l.onKey("Left Left")})},"\\sqrt[n]{a}")]),Object(i["e"])("div",pe,[Object(i["e"])("span",{id:"keyLeft",class:"btn",onClick:t[30]||(t[30]=function(e){return l.onKey("Left")})}," ← "),Object(i["e"])("span",{id:"keyRight",class:"btn",onClick:t[31]||(t[31]=function(e){return l.onKey("Right")})}," → "),Object(i["e"])("span",{id:"keyDelete",class:"btn",onClick:t[32]||(t[32]=function(e){return l.onDelete()})}," DEL "),Object(i["e"])("span",{id:"keySelect",class:"btn",onClick:t[33]||(t[33]=function(e){return l.onKey("Shift-Left")})}," SEL "),Object(i["e"])("span",{id:"keyCopy",class:"btn",onClick:t[34]||(t[34]=function(e){return l.onCopy()})}," CPY "),Object(i["e"])("span",{id:"keyCopy",class:"btn",onClick:t[35]||(t[35]=function(e){return l.onCut()})}," CUT "),Object(i["e"])("span",{id:"keyPaste",class:"btn",onClick:t[36]||(t[36]=function(e){return l.onPaste()})}," PST ")]),je],64)})),ge=window.MQ,ve={props:{mqmathfieldref:Object,mqmathfield:Object},methods:{onCmd:function(e){this.mqmathfield&&this.mqmathfield instanceof ge.MathField&&this.mqmathfield.cmd(e)},onWrite:function(e){this.mqmathfield&&this.mqmathfield instanceof ge.MathField&&this.mqmathfield.write(e)},onKey:function(e){this.mqmathfield&&this.mqmathfield instanceof ge.MathField&&this.mqmathfield.keystroke(e)},onFrac:function(){if(this.mqmathfield&&this.mqmathfield instanceof ge.MathField){var e=this.mqmathfield.__controller.textarea.val();e||this.mqmathfield.keystroke("Shift-Left"),this.mqmathfield.cmd("\\frac")}},onDelete:function(){if(this.mqmathfield&&this.mqmathfield instanceof ge.MathField){var e=this.mqmathfield.__controller.textarea.val();e||this.mqmathfield.keystroke("Shift-Left"),this.mqmathfield.keystroke("Del")}},onCopy:function(){if(this.mqmathfield){var e=this.mqmathfield.__controller,t=e.textarea.val();e.textarea.val(""),t&&(this.gClipboard=t)}},onCut:function(){if(this.mqmathfield&&this.mqmathfield instanceof ge.MathField){var e=this.mqmathfield.__controller,t=e.textarea.val();e.textarea.val(""),t&&(this.gClipboard=t,e.deleteForward())}},onPaste:function(){if(this.mqmathfield&&this.mqmathfield instanceof ge.MathField){var e=this.mqmathfield.__controller,t=this.gClipboard;""!==t&&e.paste(t)}}},mounted:function(){ge.StaticMath(document.getElementById("power2")),ge.StaticMath(document.getElementById("powerN")),ge.StaticMath(document.getElementById("sqrt")),ge.StaticMath(document.getElementById("sqrtN"))}};ve.render=Oe,ve.__scopeId="data-v-5e05c278";var ke=ve,Me=n("f5cb"),ye=n.n(Me),Ce={components:{MathHeader:j,MathItem:ae,MathEnter:oe,MathKeypad:ke},data:function(){return{MathItems:[]}},computed:{listSummary:function(){return"Schritt ".concat(this.MathItems.length)},isTyping:function(){return Object.entries(this.gFocusMQref.value).length>0},MQMathField:function(){return this.gFocusMQref.value}},methods:{newMath:function(e){this.MathItems=[],this.addItem(e)},addItem:function(e){this.MathItems.push({id:ye()("item-"),label:e,rule:{left:"",right:""}}),Se(this.MathItems)},updateDoneStatus:function(e){var t=this.MathItems.find((function(t){return t.id===e}));t.done=!t.done},deleteItem:function(){this.MathItems.pop(),Se(this.MathItems),this.$refs.listSummary.focus()},editItem:function(e,t){var n=this.MathItems.find((function(t){return t.id===e}));n.rule=t}}};function Se(e){var t=e.length-1;t>=0&&(e[t].last=!0),t>0&&(e[t-1].last=!1)}n("cc34");Ce.render=l;var Re=Ce,Ee={name:"App",components:{MathList:Re}};Ee.render=c;var Fe=Ee;n("b059");function we(){var e=window.MQ,t=void 0;return{set:function(n){t&&t instanceof e.MathField&&t.blur(),t=n},get:function(){return t},clear:function(){t&&t.blur(),t=void 0}}}var Ie={title:"Formeltrainer Mathematik",subtitle:"Die interaktive Formelsammlung hilft dir bei der Umformung eines mathematischen Ausdrucks",example:"Beispiel",example1:"Ausdruck",example2:"Formel",example3:"Variable",example4:"Umformung",enterMath:"Gib hier einen mathematischen Ausdruck ein",selectRule:"Wähle hier eine Formel aus",clickRuleToSelect:"Tippe auf die Formel deiner Wahl",setVarToAdapt:"Passe die Variablen an den Ausdruck an",varCorrespondsToWhat:"...entspricht was?",back:"Zurück",cancel:"Abbrechen",save:"Speichern"},qe=Object(i["b"])(Fe);qe.config.globalProperties.gClipboard="clip",qe.config.globalProperties.gFocusMQref=Object(i["i"])({}),qe.config.globalProperties.gFocusMQobj=we(),qe.config.globalProperties.gLocale=Ie,qe.mount("#app")},"5dba":function(e,t,n){},6918:function(e,t,n){"use strict";n("0409")},"7bca":function(e){e.exports=JSON.parse('[{"left":"(a^n)^m","right":"a^{n*m}","vars":["a","n","m"]},{"left":"(a + b) * c","right":"a * c + b * c","vars":["a","b","c"]},{"left":"a + b","right":"c","vars":["a","b","c"]},{"left":"a * b","right":"c","vars":["a","b","c"]},{"left":"a + b","right":"b + a","vars":["a","b"]},{"left":"(a + b)^2","right":"a^2+2ab+b^2","vars":["a","b"]},{"left":"(a - b)^2","right":"a^2-2ab+b^2","vars":["a","b"]},{"left":"ax^2 + bx + c = 0","right":"x_{1,2}=\\\\frac{ -b \\\\pm \\\\sqrt{b^2-4ac} }{ 2a }","vars":["a","b","c"]},{"left":"x^2 + px + q = 0","right":"x_{1,2}=\\\\frac{ -p}{2} \\\\pm \\\\sqrt{(\\\\frac{p}{2})^2-q}","vars":["p","q"]}]')},"86d3":function(e,t,n){},a63c:function(e,t,n){},b059:function(e,t,n){},cc34:function(e,t,n){"use strict";n("a63c")},d2ee:function(e,t,n){"use strict";n("5dba")},fcb1:function(e,t,n){"use strict";n("86d3")}});
//# sourceMappingURL=app.9a705515.js.map