---
layout: post
title: Linux下安装Ruby环境笔记
---

因为sass和jekyll要用到ruby环境，所以浅浅的研究了下Ruby的安装。

下载ruby 去淘宝镜像下载 

	http://ruby.taobao.org/mirrors/ruby/

解压

	tar zxvf ruby-2.1.5.tar.gz

进入解压的文件夹

	cd ruby-2.1.5

配置到/usr/local/ruby,这么做是为了比较好管理

	./configure /usr/local/ruby

编译和安装

	make && make install

然后把bin路径写入到配置文件中

	echo "PATH=$PATH:/usr/local/ruby/bin;export PATH" >> /etc/profile
	source /etc/profile

没有执行这句的话，ruby指令还是不能用的，昨天装了好多遍，就是没在etc/profile中添加。

最后就可以检测ruby的版本号了。

	ruby -v 

有显示版本号既说明安装成功。

再检查gem版本号

	gem -v


---

后来发现虚拟机重启后，ruby又失效了。 应该是bin路径写错了。 

如果不想编辑安装的话，试试优雅的安装方式：

	yum install ruby


**M**

