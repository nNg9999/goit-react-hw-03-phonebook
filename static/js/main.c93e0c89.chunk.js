(this["webpackJsonpgoit-react"]=this["webpackJsonpgoit-react"]||[]).push([[0],{1:function(t,e,n){t.exports={container:"ContactForm_container__1Fugb",form:"ContactForm_form__1ex58",input:"ContactForm_input__1BTCQ",button:"ContactForm_button__10aCv",filter:"ContactForm_filter__2MBy1",contactList:"ContactForm_contactList__SqfhB"}},10:function(t,e,n){t.exports=n(15)},15:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),i=n(9),l=n(2),s=n(3),u=n(5),m=n(4),f=n(8),d=n(1),b=n.n(d),h=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onAddContact(a,c),t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:b.a.form,onSubmit:this.handleSubmit},c.a.createElement("label",{className:b.a.name},"Name",c.a.createElement("input",{type:"text",name:"name",className:b.a.input,value:e,onChange:this.handleChange})),c.a.createElement("label",{className:b.a.name},"Namber",c.a.createElement("input",{type:"text",name:"number",className:b.a.input,value:n,onChange:this.handleChange})),c.a.createElement("button",{type:"submit",className:b.a.button},"Add contact"))}}]),n}(a.Component);h.defaulProps={};var v=h,p=function(t){var e=t.contacts,n=t.onRemove;return c.a.createElement("ul",{className:b.a.contactList},e.map((function(t){var e=t.id,a=t.name,r=t.number;return c.a.createElement("li",{key:e}," ",a,": ",r,c.a.createElement("section",null,c.a.createElement("button",{type:"submit",className:b.a.button,onClick:function(){return n(e)}},"Delete")))})))};p.defaultProps={};var C=p,g=function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("label",{className:b.a.filter},"Find contacts by name",c.a.createElement("input",{type:"text",name:"filter",className:b.a.input,value:e,onChange:function(t){return n(t.target.value)}}))};g.defaultProps={};var E=g,y=n(17),_=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.AddContacts=function(e,n){(e||n)&&(t.state.contacts.some((function(t){return t.name===e}))?alert(e+" is alredy in contacts"):t.setState((function(t){var a=t.contacts;return{contacts:[].concat(Object(i.a)(a),[{id:Object(y.a)(),name:e,number:n}])}})))},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.changeFilter=function(e){t.setState({filter:e})},t.RemoveContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=this.getVisibleContacts();return console.log(a),c.a.createElement("div",{className:b.a.container},c.a.createElement("h1",null,"Phonebook"),c.a.createElement(v,{onAddContact:this.AddContacts}),c.a.createElement("h2",null,"Contacts"),n.length>1&&c.a.createElement(E,{value:e,onChangeFilter:this.changeFilter}),n.length>0&&c.a.createElement(C,{contacts:a,onRemove:this.RemoveContact}),!a.length&&c.a.createElement("div",null,"Not faund"))}}]),n}(a.Component);_.defaulProps={};var N=_;o.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c93e0c89.chunk.js.map