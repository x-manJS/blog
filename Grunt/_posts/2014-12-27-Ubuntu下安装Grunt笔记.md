---
layout: post 
title: Ubuntu下安装Grunt笔记
tags: linux ubuntu grunt node
---


grunt是著名前端構架工具，幫助前端工程師更簡單的完成工作。之前在Windows下安裝過這Grunt,現在嘗試在Ubuntu下安裝。

確定已經安裝Node後開始安裝Grunt。

##安裝Grunt CLI##

首先全局安裝Grunt命令行接口（Commond Line）

    npm install grunt-cli -g

參數-g表示安裝grunt-cli到全局。

安裝好後安裝Grunt，這邊安裝好的Grunt-Cli並不是意味着安裝好了Grunt。

##安裝Grunt##

在命令行中輸入

    npm install grunt -g
    
這樣就安裝好了基本的Grunt了。

grunt有很多插件可以裝，首先我需要解決的問題是模板問題。[模板筆記](/2014/12/28/Grunt模板安裝筆記.html)