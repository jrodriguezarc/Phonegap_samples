//Initialize Parse

$(document).ready(function(){
Parse.initialize("xLDpfEcs3rdyyELCIIbALY2RHmA7FVEsg2yth9mU","SGAuGwCUrYX49d10ZNgzDiUiLPhDrpNT5Byq4kdr");


  var Product = Parse.Object.extend("Producto");
  var query = new Parse.Query(Product);
  var text = "";
  query.find({
    success: function(results) {
      for (var i = 0; i < results.length; i++) { 
        var object = results[i];
        var carPhoto = object.get("Imagenes");

        text = text + '<p><h2>' + object.get('Nombre') + ' <p></h2>' +
              '<p><h3> Codigo' + object.get('Codigo') + ' <p></h3>' +
              '<p><h4> Descripcion <p></h4> <p><h5>' + object.get('Descripcion') + ' <p></h5>' +
              
              '<p><img src="' + carPhoto.url() + '" alt="Auto"></p>';
  	          $("#var_img").html(text);
      }
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });







});