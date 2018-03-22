var AlumnoDetalle = Backbone.View.extend({
	el: '#modal-container',
	initialize: function(){
		this.model = new Alumno();
	},
	events: {
	},
	render: function(alumno_id) {
		$("#btnModal").click();
    var data = this.model.id(alumno_id);
    var context = JSON.parse(data);
		this.$el.html(this.getTemplate());
		var source = $("#alumno-detelle-template").html();
		var template = Handlebars.compile(source);
		var html = template(context);
		this.$el.html(html);
	},
	getTemplate: function(data) {
		var template = null;
		$.ajax({
		   url: STATICS_URL + 'templates/alumno_detalle.html',
		   type: "GET",
		   async: false,
		   success: function(source) {
			   template = source
		   }
		});
		return template;
	},
});
