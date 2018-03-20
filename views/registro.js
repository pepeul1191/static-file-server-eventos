var EstacionSensorView = Backbone.View.extend({
	el: '#form-registro',
  initialize: function(vista_html){
    this.vista_html = vista_html;
    this.render();
	},
  render: function() {
    this.$el.html(this.getTemplate());
	},
	getTemplate: function() {
		var data = { };
		var template_compiled = null;
    console.log(this.vista_html);
		$.ajax({
		   url: STATICS_URL + 'templates/' + this.vista_html.template,
		   type: "GET",
		   async: false,
		   success: function(source) {
         var template = Handlebars.compile(source);
		   	 template_compiled = template(data);
		   }
		});
		return template_compiled;
	},
});
