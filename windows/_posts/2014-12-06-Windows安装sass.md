---
layout: post
title: 安装sass
---

#安装sass#

安装sass需要安装ruby环境

##第一步安装Ruby##

去官方[下载](https://www.ruby-lang.org/zh_cn/downloads/)
ruby安装

##第二步安装sass##

	gem install sass

然后就可以使用了。



##gem网络原因（你懂的）解决方案##	
解决方案就是替换ruby源，使用淘宝源。 一步一步敲入下列代码:

	$ gem sources --remove https://rubygems.org/
	$ gem sources -a https://ruby.taobao.org/
	$ gem sources -l
	*** CURRENT SOURCES ***
	
	https://ruby.taobao.org
	# 请确保只有 ruby.taobao.org
	$ gem install sass
