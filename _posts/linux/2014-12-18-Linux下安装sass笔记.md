---
layout: default
title: Linux下安装Sass笔记
---

用gem install sass时出现错误：

	Loading command: install (LoadError)
	cannot load such file -- zlib

看报错提示是没有zlib，但是zlib我是已经安装了的。
然后找了很多网络资料，什么重装ruby啊之类的，但都没用。

最后居然是用 

	sudo gem install sass

居然 It's Working！！！

