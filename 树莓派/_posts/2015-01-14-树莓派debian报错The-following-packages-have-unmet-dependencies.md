---
layout: post
title: 树莓派的空间拓展
tags: linux 树莓派
---

报错内容：

	You might want to run 'apt-get -f install' to correct these:
	The following packages have unmet dependencies:

解决方案：

执行：

	sudo apt-get clean

然后

	sudo apt-get -f install

这里的-f表示fix，修复的意思。

然后就可以安装了。

如果还有问题，情参考：

[http://askubuntu.com/questions/140246/how-do-i-resolve-unmet-dependencies-after-adding-a-ppa](http://askubuntu.com/questions/140246/how-do-i-resolve-unmet-dependencies-after-adding-a-ppa)

这里说的还有更详细的，我只执行到这边就解决问题了。