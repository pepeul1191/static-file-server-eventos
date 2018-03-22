var Empleado = Backbone.Model.extend({
  initialize: function() {
  },
  id: function(empleado_id){
    var rpta = null;
		$.ajax({
   		type: "GET",
   		url: BASE_URL + "empleado/id/" + empleado_id,
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
});
