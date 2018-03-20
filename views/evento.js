var tablaEvento = new Grid();

var EventoView = Backbone.View.extend({
	el: '#workspace',
	initialize: function(){
		//this.render();
		//console.log("initialize");
	},
	render: function() {
		this.$el.html(this.getTemplate());
		return this;
	},
	getTemplate: function() {
		var data = { };
		var template_compiled = null;
		$.ajax({
		   url: STATICS_URL + 'templates/evento.html',
		   type: "GET",
		   async: false,
		   success: function(source) {
		   	var template = Handlebars.compile(source);
		   	template_compiled = template(data);
		   }
		});
		return template_compiled;
	},
	mostrarTabla: function(){
		tablaEvento.BorrarTable();
   	var ajax_dao_sistema = new AjaxPython();
   	ajax_dao_sistema.Constructor("GET", BASE_URL + "evento/listar", "", false);
   	tablaEvento.SetTableId("tablaEvento");
   	tablaEvento.SetTableObj("tablaEvento");
   	tablaEvento.SetTableHeader(evento_array_json_th);
   	tablaEvento.SetTableBody(evento_array_json_td, evento_array_json_btn_td, ajax_dao_sistema);
   	tablaEvento.SetTableFooter(evento_array_json_btn, false);
   	tablaEvento.SetLabelMensaje("#txtMensajeRpta");
   	tablaEvento.SetURLGuardar(BASE_URL + "accesos/sistema/guardar");
   	tablaEvento.MostrarTable();
	}
});
