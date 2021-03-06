var Externo = Backbone.Model.extend({
  initialize: function() {
  },
  id: function(externo_id){
    var rpta = null;
		$.ajax({
   		type: "GET",
   		url: BASE_URL + "externo/id/" + externo_id,
   		data: {csrfmiddlewaretoken: CSRF},
   		async: false,
   		success: function(data){
				rpta = data;
   		},
   		error: function(data){
				console.log("error");
				rpta = data;
   		}
   	});
    return rpta;
  },
  guardar: function(externo){
    var rpta = null;
		$.ajax({
   		type: "POST",
   		url: BASE_URL + "externo/guardar_detalle",
   		data: {data: JSON.stringify(externo), csrfmiddlewaretoken: CSRF},
   		async: false,
   		success: function(data){
				rpta = data;
   		},
   		error: function(data){
				console.log("error");
				rpta = data;
   		}
   	});
    return rpta;
  },
});
