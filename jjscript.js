$("#iform").submit(function(event){
	event.preventDefault();
	var item=$("#box").val();
	if(item)
		{
			$("#list").append("<li>&nbsp&nbsp"+item+"&nbsp&nbsp<hr></li>");
		}
});