function get_json_Data(url,callback){

  var result;
  $.ajax({
    
    url:url,
    success:callback
  });
  return result;
}

var url='https://pvk4498.github.io/webapps/garage%20web%20app/json/data.json';
var data = get_json_Data(url,handleResult);

function handleResult(result){
  console.log(result);
  

   var options={
        valueNames:[
                    'id', 
                    'name',
                    'address'
                    ,'city'
                    ,'contact',
                    { name: 'image', attr: 'src' },
                    { name: 'link', attr: 'href' }
                  ],
        item:'myitem',
        page: 4,
        pagination: true
      };
     
   var userList = new List('mylist',options,result);
   
   userList.on('updated', function (list) {
		if (list.matchingItems.length > 0) {
			$('.no-result').hide()
		} else {
			$('.no-result').show()
		}
	});
   

   $('#clear-btn').click(function() {
    $('#search').val('');
    userList.search();
 });

 
 
}


