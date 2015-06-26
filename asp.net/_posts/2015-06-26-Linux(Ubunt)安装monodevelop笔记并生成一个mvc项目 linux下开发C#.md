---
layout: post
title: Linux(Ubunt)安装monodevelop笔记并生成一个mvc项目 linux下开发C#
tags: linux  ubuntu 
---

我用的安装方法比较简单，不是源码安装。

1. 使用ubuntu 软件中心搜索 monodevelop（注意拼写），安装第一个选项的软件。

2.安装好后，就会有一个软件在左边 任务烂。启动后新建mvc项目。跑的时候发现有问题，报错：
    
    The xsp4 web server cannot be found. Please ensure that it is installed.
    
  解决办法是在ubuntu 软件中心xsp4，会有两个列表，都安装了。然后重启monodevelop，重新生成.没问题了。

