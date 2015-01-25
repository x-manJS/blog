---
layout: post
title: WebApi的ModelBinder 实现自定义参数类型
tags: C# MVC ModelBinder 自定义参数
---

在mvc中，写个控制器：

	public class TestController : Controller
    {
        public string Index(List<int> id)
        {
            return "test";
        }
    }

然后访问URL：

	localhost:8888/api/test/index?id=1,2,3,4

断点发现，这个id参数并不能接收到参数。

因为在url参数中，‘1,2,3,4’是个字符串。

那么现在问题来了，我们要把这个东西作为List<int>来接收到，要怎么破呢。

使用ModelBinder。

一步一步来看看怎么做。

新建一个ListModelBinder类：

	public class ListModelBinder : IModelBinder
    {
         public bool BindModel(System.Web.Http.Controllers.HttpActionContext actionContext, ModelBindingContext bindingContext)
        {
            ValueProviderResult result = bindingContext.ValueProvider.GetValue(bindingContext.ModelName);

            string[] valueList = result.AttemptedValue.Split(',');

            List<int> intList = new List<int>();
            foreach (string val in valueList)
            {
                intList.Add(int.Parse(val));
            }
            bindingContext.Model = intList;
            return true;
        }
    }

这个类继承`System.Web.Http.ModelBinding`程序集的`IModelBinder`接口。

在这段代码里，bindingContext.Model是最后返回的结果，把字符串接收到的结果分割转换成List<int>.就酱。

然后在`App_Star`文件夹下的`WebApiConfig.cs`文件中的`WebApiConfig`类中的`Register`方法中添加绑定参数类型：

	config.BindParameter(typeof(List<int>), new ListModelBinder());


然后做个接口：

	 public class TestController : ApiController
	    {
	        [HttpGet]
	        public string Index(List<int> id, int[] ids)
	        {
	            return "124";
	        }
	    }


这边的id之后就能成功获取id列表了。

绑定成功。

这里只对webapi有效果，对mvc的路由没效果。
	