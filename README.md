# bottom-tip
AloeTip是一个仿bootstrap Wran色彩风格的底部tip插件，实现淡入淡出效果。可自定义淡入\淡出速度、显示时间、层级、展示内容、展示样式。
目前量化回测平台中有使用。

#兼容性&模块化支持
        |           |             |         |           |
------- | --------- | ----------- | ------- | --------- |
IE7+ OK | Chrome OK	| Firefox OK	| Opera ?	| Safari OK |

支持CommonJS以及AMD规范。
? 表示未经测试 ，有顺手测试的同学请M我哈 感激

兼容性问题请及时反馈.. IE6如果需要支持固定在底部，需要用absolute模拟fixed效果，css中自行更改一下。

#使用方法

aloetip有四种样式的提示框，对应配置参数type: info(默认)、success、warning、danger

1、引入文件
```
<link rel="stylesheet" href="aloetip.css">
<script src="aloetip.js"></script>
```
2、Javascript
```
AloeTip.show('这是一条info信息');

AloeTip.show({
	text:'这是一条success信息',
	type:'success',
	speend : 20,
	zIndex : 101,
	time : 3000
});

AloeTip.show({text:'这是一条warning信息',type:'warning'});
AloeTip.show({text:'这是一条danger信息',type:'danger'});
```

#配置

大多数情况并不需要特别的配置，参数传string能快速调用方法 填充显示文本。

以下是对象作为参数的配置

属性/方法	| 类型        | 默认值	| 说明
-------- |----        |-----  |----
*text	   | string     |       | 填充文本内容
speend	 | Number	    |100	  | 淡入\淡出的速度，计算方法是每speend时间透明度变化0.5%
zIndex	 | Number	    |10001	| 生成Dom的层级，应处于页面最高
type	   | string	    |info	  | 展示样式类型，可选：info \ success \ warning \ danger
time	   | Numver(ms) |	2000	| 淡入\淡出中间的时间间隔（即显示时间）

