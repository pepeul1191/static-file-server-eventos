var FormInscripcionView = Backbone.View.extend({
	el: '#form-registro',
  initialize: function(vista_html){
    this.vista_html = vista_html;
    this.render();
	},
  render: function() {
		this.$el.html(this.getTemplate());
		var source = null;
		var context = { };
		if(this.vista_html.template == "form_alumno.html"){
			source = $("#alumno-inscripcion-template").html();
		}
		if(this.vista_html.template == "form_empleado.html"){
			source = $("#empleado-inscripcion-template").html();
		}
		if(this.vista_html.template == "form_externo.html"){
			source = $("#externo-inscripcion-template").html();
		}
		var template = Handlebars.compile(source);
		var html = template(context);
		this.$el.html(html);
	},
	getTemplate: function() {
		var template = null;
		$.ajax({
		   url: STATICS_URL + 'templates/' + this.vista_html.template,
		   type: "GET",
		   async: false,
		   success: function(source) {
         template = source
		   }
		});
		return template;
	},
});
