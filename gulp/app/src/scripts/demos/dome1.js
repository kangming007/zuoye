angular.module("myApp",[])
/*.controller("democon",["$scope",function($scope){
	var user=[
		{
			user:"marry",
			email:"marry@sohu.com"
		},
		{
			user:"Lili",
			email:"Lili@sohu.com"
		}
	]
	$scope.user=user
	$scope.isshow=true
	$scope.count=0;
	$scope.add=function(){
		this.count++
	}
	//所有课程
	$scope.items=[]
	//添加课程
	$scope.addItem=function(event){
		if(event.keyCode==13){
			$scope.items.unshift($scope.item)
			$scope.item=""
		}
	}
	 $scope.limit = 4;
    $scope.books = [
       {
           name:"JavaScript高级程序设计",publite:false,updated:1480574804538
       },
       {
           name:"Angular权威指南",publite:true,updated:1470574804525
       },
       {
           name:"Vue实战",publite:false,updated:1480374804538
       },
       {
           name:"Node全栈开发",publite:true,updated:1480271504538
       }
    ]

    $scope.price = 199.98;



}])*/






//.controller("democon",["$scope",function(){
/*	$.ajax("xuexi.json")
	.done(function(){
		console.log("成功")
	})
	.fail(function(){
		console.log("失败")
	})*/
	
/*	$.when($.ajax("xuexi.json"),$.ajax("haohao.json"))
	.done(function(){
		console.log("请求成功")
	})
	.fail(function(){
		console.log("请求失败")
	})*/


//普通函数模仿ajax()的回调    有弊端：在外面可以改变dtd  因为dtd是个全局变量
	//var dtd=$.Deferred()
	/*var wait=function(){	
		var task=function(){
			console.log("hello")
			//dtd.reject()
		}
		setTimeout(task,3000)
		//return dtd
	}
	//dtd.resolve()
	$.when(wait())
	.done(function(){
		console.log("成功")
	})
	.fail(function(){
		console.log("失败")
	})


//完美版的普通函数模仿ajax()
  var dtd=$.Deferred() 
  var wait=function(dtd){
  	var task=function(){
  		console.log("hello")
  		dtd.reject()
  	}
  	setTimeout(task,3000)
  	return dtd.promise()
  }
  var b=wait(dtd)

  $.when(b)
  .done(function(){
  	console.log("成功")
  })
  .fail(function(){
  	console.log("失败")
  })*/
//}])



.controller("myController",["$scope",function($scope){
	    var person=[
			{
				firstname:"zs",
				lastname:"Fang",
				Gender:"Male",
				Salary:"1234",
				rmb:"￥1234",
				Date:"2020-07-11"
			},
			{
				firstname:"wang",
				lastname:"wu",
				Gender:"Jam",
				Salary:"3456",
				rmb:"￥3456",
				Date:"2013-05-11"
			},
			{
				firstname:"li",
				lastname:"si",
				Gender:"arry",
				Salary:"2345",
				rmb:"￥2345",
				Date:"2013-07-11"
			},
			
			{
				firstname:"song",
				lastname:"er",
				Gender:"Slo",
				Salary:"4567",
				rmb:"￥4567",
				Date:"2017-07-11"
			}
		]
		$scope.person=person;
		$scope.paixu=function(e,text)
		{
			console.log(e)
			console.log(text)
			var spans=document.querySelector("span");
			
			if($scope.field==text){
				$scope.field=-text
				spans.className=" "
			}else{
				$scope.field=text
				spans.className="down"
				
			}
		}	


}])

