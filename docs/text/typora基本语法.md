# Typora Markdown基本语法及快捷键

## 标题

### **1~5级标题:**

方式一：按<kbd>#</kbd>的数量+<kbd>空格</kbd>

方式二：按<kbd>ctrl</kbd>+<kbd>1</kbd>~<kbd>5</kbd>

方式三：按<kbd>ctrl</kbd>+<kbd>+</kbd>或者<kbd>ctrl</kbd>+<kbd>-</kbd>来实现标题的升降级

## 字体

### **字体大小：**

利用字体`font size`标签

<font size =18>字体大小设置</font>



或直接用`big`、`small`标签

<big>大号字体</big>

正常字体

<small>小号字体</small>

### 字体颜色：

利用字体`font color`标签

<font color =red>字体颜色红色</font>

<font color =blue>字体颜色红色</font>

<font color =green>字体颜色红色</font>

<font color =yellow>字体颜色红色</font>

### 字体文本高亮：

利用字体`mark`标签

<mark>字体文本内容高亮</mark>

### **字体基本样式：**

#### 粗体：

用两个`*`包裹文字,也可以用<kbd>ctrl</kbd>+<kbd>b</kbd>

**粗体**

#### 斜体：

用一个`*`包裹文字,也可以用<kbd>ctrl</kbd>+<kbd>i</kbd>

*斜体*

#### 下划线：

用`u`标签来实现，也可以用<kbd>ctrl</kbd>+<kbd>u</kbd>

<u>下划线</u>

#### 删除线：

用两个`~`包裹文字,也可以用<kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>5</kbd>

~~删除线~~

#### 字体上下标注：

用`sub`和`sup`标签，或用`~`包裹表示下标、用`^`包裹表示上标

字体<sub>下标</sub>

字体<sup>上标</sup>

#### 字体注脚：

用`[^内容]`

字体[^注脚]

## 分割线

用三个<kbd>`</kbd>或用三个<kbd>*</kbd>

---

***



## 代码块

用三个<kbd>`</kbd>+<kbd>空格</kbd>,也可以用<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>k</kbd>

```编程语言
代码块
```

示例：

``` python
a = 10 
b = 2
print(a+b)
```

## 超链接

用`[]()`来实现，或<kbd>ctrl</kbd>+<kbd>k</kbd>，可用于外链网址

也可以用于内部markdown文件内的跳转，类似锚点的效果（一般以`#标题`作为跳转id），也可以用于两个markdown文件之间进行跳转（跳转url为`文件相对路径`+`#标题`）

[超链接](https://www.bing.com)

## 图片：

用`![]()`来实现，或<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>i</kbd>

## 列表

### 无序列表

<kbd>-</kbd>+<kbd>空格</kbd>或<kbd>+</kbd>+<kbd>空格</kbd>或<kbd>*</kbd>+<kbd>空格</kbd>

- 无序列表
  + 无序列表
  + 无序列表
    * 无序列表
    * 无序列表

### 有序列表

<kbd>1</kbd>+<kbd>.</kbd>+<kbd>空格</kbd>、<kbd>2</kbd>+<kbd>.</kbd>+<kbd>空格</kbd>、<kbd>3</kbd>+<kbd>.</kbd>+<kbd>空格</kbd>

1. 有序列表
   1. 有序列表
   2. 有序列表
      1. 有序列表
      2. 有序列表

### 任务列表

<kbd>-</kbd>+<kbd>空格</kbd>+<kbd>[</kbd>+<kbd>]</kbd>,在中括号中填<kbd>x</kbd>表示任务标记完成

- [x] 已标记
- [ ] 未标记  ​​

## 表情符号(图标)

在两个`:`输入需要表情符号的英文代码,也可以使用输入法中的表情或标签<kbd>Win</kbd>+<kbd>。</kbd>

:dog::cat::star::email::phone::pen::moon::house::m::computer::pencil::ok::book:

## 警告或标记类型

`>[!note]`、`>[!tip]`、`>[!important]`、`>[!warning]`、`>[!caution]`这5个主要标记

> [!note]  
>
> 有用的信息、需要记录、标记的信息

> [!tip]
>  
>更好的建议

> [!important]   
>
> 重要 、紧急

> [!caution]  
> 
> 负面结果的建议或风险操作

> [!warning]
> 
> 警告信息、立即注意

## 数学表达式

公式以两个`$`包裹，也可以<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>m</kbd>

示例：
$$
\sqrt{3x-1}+(1+x)^2
$$

## 流程图

```flow
start=>start: 接收到消息
info=>operation: 读取信息
setCache=>operation: 更新缓存
end=>end: 处理结束
start->info->setCache->end
```

### 基本语法

graph 指定流程图方向：

graph LR 横向，graph TD 

纵向元素的形状定义：id[描述] 

以直角矩形绘制id(描述) 

以圆角矩形绘制id{描述} 

以菱形绘制id>描述] 

以不对称矩形绘制id((描述)) 

以圆形绘制线条定义：

A-->B 带箭头指向

A---B 不带箭头连接

A-.-B 虚线连接

A-.->B 虚线指向

A==>B 加粗箭头指向
