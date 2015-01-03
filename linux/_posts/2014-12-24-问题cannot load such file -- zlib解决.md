---
layout: post
title: 问题cannot load such file -- zlib解决
---


执行

	sudo gem install jekyll

时报错：

	cannot load such file -- zlib

要进入ruby安装包的 `ruby-2.1.5/ext/zlib`执行

	sudo ruby extconf.rb
	sudo make
	sudo make install

这样之后就把zlib安装上去了。 

