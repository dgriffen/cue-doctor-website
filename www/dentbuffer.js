//url: /products
//returns json that is array of products

$(document).ready(function() {

// the code is inside the ready function - 
// makes sure that DOM is loaded before using jQuery
;


  //alert("Now going to make POST ajax call - results will appear soon");
$.get("/products", function(data,status) {
        //obj = JSON.parse(data);
        for(i = 0; i < data.length; i++) {
            if(data[i].name == "Dent Buffer") {
                $("#bodytext").text(obj[i].description);
            }

        }
});

}); // end of document ready function


