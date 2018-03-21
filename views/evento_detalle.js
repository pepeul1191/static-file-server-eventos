var EventoDetalleView = Backbone.View.extend({
	el: '#modal-container',
	initialize: function(){
		//this.render();
		//console.log("initialize");
	},
	render: function() {
		this.$el.html(this.getTemplate());
		return this;
	},
	getTemplate: function(data) {
		var template = null;
		$.ajax({
		   url: STATICS_URL + 'templates/evento_detalle.html',
		   type: "GET",
		   async: false,
		   success: function(source) {
			   template = source
		   }
		});
		return template;
	},
  renderCrear: function() {
    var context = {titulo_modal: "Crear Evento"};
    $("#btnModal").click();
		this.$el.html(this.getTemplate());
		var source = $("#evento-detelle-template").html();
		var template = Handlebars.compile(source);
		var html = template(context);
		this.$el.html(html);
		//var evento = new Evento();
		//var formUsuarioView = new FormEventoDetalleView({model:evento});
		//formUsuarioView.render();
	},
});
