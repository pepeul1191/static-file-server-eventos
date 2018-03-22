var EventoInscripcion = Backbone.View.extend({
	el: '#evento-inscripcion',
	initialize: function(){
	},
	events: {
	},
	render: function() {
    var evento = null;
		$.ajax({
   		type: "GET",
   		url: BASE_URL + "evento/nombre_url",
   		data: {nombre_url: NOMBRE_URL, csrfmiddlewaretoken: CSRF},
   		async: false,
   		success: function(data){
				evento = data;
   		},
   		error: function(data){
				console.log("error");
				evento = data;
   		}
   	});
    if(evento == "null"){
      window.location.href = BASE_URL + "error/access/404";
    }
		var context = JSON.parse(evento);
    context.STATIC_URL = STATICS_URL;
    context.BASE_URL = BASE_URL;
		var source = $("#evento-inscripcion-template").html();
		var template = Handlebars.compile(source);
		var html = template(context);
		this.$el.html(html);
	},
});
