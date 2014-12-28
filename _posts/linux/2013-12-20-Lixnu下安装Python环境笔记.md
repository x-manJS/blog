---
layout: default
title: Lixnu下安装Python环境笔记
---

在linux中有挺多软件是需要使用到的，比如markdown编辑器`Retext`.但是linux自带的python是2.7版本的，我需要安装3.x版本的。

首先去官网下载一个python3.x的安装包

下载后解压：
	
	tar -zxvf python-3.4.2.tgz

然后

	# cd  python-3.4.2

然后
	
	# ./configure --prefix=/usr/local/python3

这边指定了一个文件夹 `/usr/local/python3`，我的理解是把python安装到这里。

然后

	# make all && make install

安装中出现了一个问题：


	Ignoring ensurepip failure: pip 1.5.6 requires SSL/TLS

这个问题需要安装`openssl-devel`来解决问题

	# yum install openssl-devel


顺利完成后

	# cd /usr/local/python3/bin

	#ls -l 

查看到一个 python-3.4的文件

	# ./python-3.4 -V

这样就能查看版本了，这个V是大写的。 如果不小心进入了python命令行，`ctrl + d` 退出。

然后就是要把全局的 python 命令行从2.7编程3.4

建立软连接，使系统默认的 python指向新的python.

先备份旧版本的python，改个名字就好

	# mv /usr/bin/python /usr/bin/python2.7

然后建个指向心版本python的软连接代替被移除的旧版本python
  
	#  ln -s /usr/local/python3/bin/python3.4 /usr/bin/python  


重新检验Python 版本

	#python -V

好了。搞定


**这时候yum指令执行的话会报错,要让yum指向旧版本的python**

如果打yum命令，你会发现报错了。提示你可能是python版本不对。所以我们要把yum依旧指向老的python版本：

	# vi /usr/bin/yum

在打开的文件里的头一行，也就是指定python环境的那行代码，修改成：

	#!/usr/bin/python2.7

报错

	File "/usr/libexec/urlgrabber-ext-down", line 28

打开这个文件夹，把第一行的

	#!/usr/bin/python

改为

	#!/usr/bin/python2.7

**最后**

最后说个和python相关的：安装python软件语法作为备忘，因为ReText就是Python写的软件。

	# python setup.py install 

