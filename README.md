# jquery-scroll-animate 基于jquery的滚动添加动画 
## 本插件功能 
* 支持滚动添加动画
* 支持第三方css库animate.css
* 多配置项 可灵活配置
## 插件配置 
### JS相关引入
```html
<script src="src/jquery-1.11.3.js"></script>
<script src="src/jquery-scroll-animate.js"></script>
```
### CSS相关引入
```html
<link rel="stylesheet" href='src/animate.css'>
```
### JS插件配置
```html
<script>
$('.abc').jqueryScrollAnimate({
	direction:false,//是否重复播放动画 true为默认值 false 只播放一次 true可重复播放
	distance:0,//触发高度设置 根据需要动画的根元素与滚动条的高度判断关系 可以为负值
	animated:'.ani'// 需要动画元素的css类 默认为.ani		
})
</script>
```  
### DOM相关
```html
<div class="abc">
	<div class="text">
		<h1 class="ani" animate-effect='zoomIn' animate-duration='0.3s' animate-delay='0.1s'>这是一个大标题</p>
		<h2 class="ani" animate-effect='zoomIn' animate-duration='0.3s' animate-delay='0.2s'>这是一个小标题</p>
		<p class="ani" animate-effect='zoomIn' animate-duration='0.3s' animate-delay='0.3s'>这是一段内容</p>
	</div>
	</div>
<div class="abc">
	<div class="text">
		<h1 class="ani" animate-effect='zoomIn' animate-duration='0.3s' animate-delay='0.1s'>这是一个大标题</p>
		<h2 class="ani" animate-effect='zoomIn' animate-duration='0.3s' animate-delay='0.2s'>这是一个小标题</p>
		<p class="ani" animate-effect='zoomIn' animate-duration='0.3s' animate-delay='0.3s'>这是一段内容</p>
	</div>
</div>
```
* animate-effect 动画方式 参考animate.css
* animate-duration 动画时间
* animate-delay 动画延时
