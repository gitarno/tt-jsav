// Createa new Ajax request

var request = new Request({
    method:"GET",
    url:"http://example.org/content.php",
    onSuccess:function(content){
        console.log(content);
    }
}).send();

