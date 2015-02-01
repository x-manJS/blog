---
layout: post
title: VisualStudio+Xamarin开发Android环境搭建
tags: android visualstudio xamarin
---

vs版本： 2013或者2015预览版。

## 下载相关软件

vs的话就不给包了，童鞋们自己搞定。

包括Android NDK、Android JDK离线包 xamarin studio等。

地址：[http://pan.baidu.com/s/1jGCDynW](http://pan.baidu.com/s/1jGCDynW)

xamarinStudio:[http://pan.baidu.com/s/1i304j3J](http://pan.baidu.com/s/1i304j3J)



## 1设置java环境变量-略


## 2设置Android SDK环境变量
解压`Android SDK`目录下的压缩包，然后拷贝到一个地方，我的是拷贝在了`C:\Program Files (x86)`下，然后设置SDK的环境变量。

我的SDK离线包保存在磁盘的地址是： C:\Program Files (x86)\android-sdk-windows

打开计算机属性——高级系统设置——环境变量

新建一个环境变量，变量名：ANDROID_HOME，变量值：C:\Program Files (x86)\android-sdk-windows（以你安装目录为准,确认里面有tools和add-ons等多个文件夹），点击确认。

在用户变量PATH后面加上变量值;%ANDROID_HOME%\platform-tools;点击确认即可。 在系统变量path中添加;C:\Program Files (x86)\android-sdk-windows\tools

Android SDK配置完成，接下来验证配置是否成功。

点击运行——输入cmd——回车——输入adb——回车，如果出现一堆英文，如下图所示，即表示配置成功，在输入Android，启动Android SDK Manager。

## Android NDK

拷贝`Android NDK`文件夹下的文件，拷贝到磁盘的某个位置，我的是在`C:\Program Files (x86)\android-ndk-r10`。

## 安装GTK

 [http://download.xamarin.com/GTKforWindows/Windows/gtk-sharp-2.12.25.msi](http://download.xamarin.com/GTKforWindows/Windows/gtk-sharp-2.12.25.msi)，安装的时候最好右击以管理员权限安装。

## 安装Xamarin

安装`Xamarin`文件夹下的文件

先安装`XamarinStudio-5.6.2.5-0.msi`

然后安装 `Xamarin.VisualStudio_3.9.236.msi` 

## 在visual studio中设置

在工具-选项中：

![](images/Asp.net/3.png)


如图，把 Android NDK和 Android SDK的路径改为你电脑上的磁盘路径。

设置正确后就会在在工具菜单中看到Android选项了。

![](images/Asp.net/4.png)

创建一个模拟器后就可以开始Android之旅了。

## 创建Android应用

文件 - 新建项目 -Android就能新建应用了。

![](images/Asp.net/5.png)

Enjoy!!!
