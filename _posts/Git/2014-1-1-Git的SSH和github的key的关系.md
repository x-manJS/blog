---
layout: default
title: Git的SSH和github的key的关系
tags: linux git ssh key
---

新年快乐。

我在github上有2个仓库，一个是博客的仓库，一个是grunt-init的模板仓库。

现在我再同一台笔记本上，有时要更新grunt-init的template模板，有时要更新博客文章，但是分别是两个仓库。

而ssh生成的`id_rsa.pub`只能添加到其中的一个仓库中，比如我把他添加到template仓库中，那么当我要把博客文章推送到github仓库时，ssh用的还是指向的是template的ssh，显示没有权限。---这是个问题是今天早上才发现怎么回事的。

我们可以建一个新的ssh key：

	ssh-keygen -t rsa -C "user@domain.com"	

在提示的时候名为为`id_rsa_2`,区别`id_rsa`。


然后把`id_rsa_2.pub`的key添加到blog仓库中。

添加完后在博客下推送，发现还是没有权限推送博客，原来是因为SSH默认读取的是`id_rsa`这个key，可以做个测试：

	把`id_rsa`和`id_rsa.pub`备份，改为其他名称。 

然后
	
	把`id_rsa_2.pub`和`id_rsa_2.pub`改为`id_rsa`

发现可以成功把博客的内容推送到github了。

但是奇怪的是我切换到template,既然还能推送到远程仓库。我觉得可能是缓存，决定过会儿在跟踪。

---

在Linux上做新的测试，做和上文一样的情况，发现改变id_rsa后，确实博客的权限没有了。

那么这样说要来会切换`id_rsa`了。有什么好办法呢。


默认SSH只会读取`id_rsa`，所以为了让SSH识别新的私钥，需要将其添加到SSH agent

	ssh-add ～/.ssh/id_rsa_2

但我这边测试过还是没办法实现推送到github。

然后尝试下面这种方法，

在`etc/ssh/ssh_config`中加入`id_rsa_2`, 如图

![](/images/Git/1.png)

奇迹发生了，It's Working....

Linux中的/ext一般存放的都是配置文件，ssh_config是ssh的配置文件，这句话意思是指定`id_rsa_2`.

	


