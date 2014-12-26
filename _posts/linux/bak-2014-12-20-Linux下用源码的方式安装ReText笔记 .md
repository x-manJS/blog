---
layout: default
title: 2014-12-20-Linux下用源码的方式安装ReText笔记 
---

ReText是Linux下的一款MarkDown编辑软件，这篇文章记录的是我个人的CentOS安装ReText笔记。
去[官网](http://sourceforge.net/projects/retext/files/)下载源码，下载的是5.x版本的，算是最新的了。


然后解压

	# tar -zxvf  ReText-5.0.1.tar.gz

进入文件夹

	# cd ReText-5.0.1.

用python安装

	# python setup.py install

这边的python需要使用3.x版本的，不然安装不了。

装完后有个build文件夹生成，进入，发现有个script的文件夹，在进入，发现有retext.py的文件，执行：

	# python retext.py

一般在这边就能用了，但是报错：

	 No module named 'markups'

那肯定要安装这个模块了。

下载python-markups，解压，进入文件夹，发现有个setup.py的文件夹，安装之。

	# python setup.py install

再进入retext执行

	# python retext.py

又报错：

	# No module named 'PyQt5'

