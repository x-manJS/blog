---
layout: default
title: Linux下安装Jekyll笔记
---


需要安装node

安装jekyll

	sudo gem install jekyll

报错

	Failed to build gem native extension
	can't find header files for ruby at /usr/share/include/ruby.h

安装

	yum install ruby-devel

问题解决。一些其他的linux版本需要装的是ruby-del，我用的centos要安装的是ruby-devel。这点有区别。

