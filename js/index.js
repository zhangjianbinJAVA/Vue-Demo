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

// 计算属性 demo1
var vm_5 = new Vue({
	el:'#computed',
	data:{
		firstName:'Gavin',
		lastName:'Cly'
	},
	computed:{
		fullName:function(){
			//this 指向 vm_5
			return this.firstName +' '+ this.lastName
		}
	}
})

// 计算属性 demo2
var vm_6=new Vue({
	el:'#computer-2',
	data:{
		cents:100 // 后端数据分
	},
	computed:{
		price:{ // price 前端展示和更新的数据
			set:function(newVlue){
				this.cents=newVlue*100; //前端数据更新值后，元转为分
			},
			get:function(){
				return (this.cents /100).toFixed(2); //后端数据分 转换 为元
			}
		}
	}
})