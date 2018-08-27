//数据绑定
var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	},
//	将 {{...}} 修改为 ${}
	delimiters: ['${', '}']
})

//组件化
var Message = Vue.extend({
	props: ['content'],
	template: '<h1>{{content}}</h1>'
})
Vue.component('message', Message)
var vm = new Vue({
	el: '#cm'
})

//模板
var vm_1 = new Vue({
	el: '#tpl',
	template: '#tpl'
})

//数据
var data = {
	a: 1,
	b: {
		x: 1234
	}
}
var vm_2 = new Vue({
	el: '#my-data',
	data: data
})

var myComponent = Vue.component('my-component', {
	props: ['title', 'content'],
	data: function() {
		return {
			desc: '123'
		}
	},
	template: '<div><h1>{{title}}</h1><p>{{content}}</p><p>{{desc}}</p></div>'
})
var vm_3 = new Vue({
	el: '#mycomponent'
})

//方法
var vm_4 = new Vue({
	el: '#button',
	data: {
		a: 789
	},
	methods: {
		alert:function(){
			alert(this.a)
		}
	}
})