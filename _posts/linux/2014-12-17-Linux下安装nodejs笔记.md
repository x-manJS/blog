---
layout: default
title: 2014-12-17-Linux下安装nodejs笔记
---

安装了个CentOS，尝试安装NodeJS。

1. 首先[下载](http://nodejs.org/)nodejs包到桌面。（下载下了好久Σ( ° △ °|||)︴）

解压

	tar xvf node-v0.10.33.tar.gz

进入解压出来的文件夹
 
	Downloads]$ cd node-v0.10.33/

配置

	./config

编译

	make install  

  编译需要比较久的时间。遇到一个文件夹拒绝访问的问题，最后用sudo解决了。

判断node是否成功安装

	node -v

安装成功的话应该会显示版本号的。

如果系统没有安装GCC，需要安装

	yum install gcc

	
 
