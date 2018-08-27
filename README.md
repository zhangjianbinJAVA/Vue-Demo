## Vue 入门

## 第一章
### 数据绑定
### 组件化

## 第二章
#### new Vue({...}) 标记当前页面的 html 结构、数据的展示及相关事件的绑定。

#### 模板
- el : 为实例提供挂载元素
- template : 将 template 的值替换挂载元素

#### 方法
- methods: 定义方法，并且使用 v-on 指令来监听 Dom 事件

#### 数据绑定
1. 文本插值
```
{{}}
```
2. html 属性 
```
<div v-bind:id="'id-' + message "></div>
result:
<div id="id-Hello Vue!"></div>
```
3.绑定表达式
```
{{ index == 0 ? 'a':'b'}}
```
4.过滤器
以管道符 | 指示
```
{{ name | uppercase }} // VUE
```
5.指令
- 参数
```
<img v-bind:src="ava" />  等同于 <img src='{{ava}}'/>
```
- 修饰符
v-on 绑定事件监听器，doClick 为函数名 , stop 修饰符，作用是停止冒泡
```
<button v-on:click.stop= "doClick"></button>
```

#### 计算属性
避免在模板中加入过重的业务逻辑
- Setter
