---
layout: default
title: 2014-12-21-Linux下用源码的方式安装PyQt笔记
---

pyqt在Linux是经常用到的桌面开发工具。 而用python的pyqt包用来做开发是现在流行的。


安装之前需要安装的软件有：

[SIP](http://nchc.dl.sourceforge.net/project/pyqt/sip/sip-4.14.1/sip-4.14.1.tar.gz),下载后加解压

	# python configure.py
	# make
	# make install

安装QT（具体怎么安装QT请看[2014-12-21-Linux下安装QT笔记](2014-12-21-Linux下安装QT笔记)）


然后安装PyQt

下载源文件后：

	python configure.py -q /usr/local/qt/bin/qmake

这边需要要指定qmake的路径


	成功之后，然后再 
	make (要等一段时间)
	make install
	成功运行命令后，PYQT 安装成功.你可以在python解析器下，运行import PyQt4 来检测是否安装成功.

测试脚本

	import sys
	from PyQt4 import QtGui
	app = QtGui.QApplication(sys.argv)
	widget = QtGui.QWidget()
	widget.resize(250, 150)
	widget.setWindowTitle('yihaomen.com QT TEST')
	widget.show()
	sys.exit(app.exec_())












