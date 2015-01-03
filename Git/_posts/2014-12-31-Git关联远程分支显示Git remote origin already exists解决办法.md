---
layout: post
title: Git关联远程分支显示Git remote origin already exists解决办法
---


Git关联远程分支显示时，

	git remote add origin git@...
	
显示Git remote origin already exists。

解决方法是先删除origin：

	git remote  rm origin
