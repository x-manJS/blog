(function(){
	var cList = $('#categoryList li a');
	var timer = null;
	var timer2 = null;
	cList.each(function(){
		var $this = $(this);
		$this.hover(function(){
			//clearTimeout(timer2);
			timer = setTimeout(function(){
				$this.animate({
					backgroundColor: '#00945D'
				});
			}, 200);
			
		}, function(){
			clearTimeout(timer);
			// timer2 = setTimeout(function(){
				$this.animate({
					backgroundColor: '#252525'
				});
			// }, 400);
		})
	});	
})()
