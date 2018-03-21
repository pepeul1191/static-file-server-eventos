var EventoPrevisualizar = Backbone.View.extend({
	el: '#modal-container',
	initialize: function(){
		this.model = new Evento();
	},
	events: {
	},
	render: function(evento_id) {
    var evento = this.model.id(evento_id);
		if (evento.status == 500){
			alert("error en ajax");
		}else{
			var context = JSON.parse(evento);
			context.id = evento_id;
			context.titulo_modal = "Previsualizar Evento";
      context.STATIC_URL = STATICS_URL;
      context.BASE_URL = BASE_URL;
      $("#btnModal").click();
  		this.$el.html(this.getTemplate());
  		var source = $("#evento-previsualizar-template").html();
  		var template = Handlebars.compile(source);
  		var html = template(context);
  		this.$el.html(html);
		}
	},
	getTemplate: function(data) {
		var template = null;
		$.ajax({
		   url: STATICS_URL + 'templates/evento_previsualizar.html',
		   type: "GET",
		   async: false,
		   success: function(source) {
			   template = source
		   }
		});
		return template;
	},
});
