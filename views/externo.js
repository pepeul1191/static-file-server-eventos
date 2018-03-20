var tablaExterno = new Grid();

var ExternoView = Backbone.View.extend({
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
		   url: STATICS_URL + 'templates/externo.html',
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
		tablaExterno.BorrarTable();
   	var ajax_dao_externo = new AjaxPython();
   	ajax_dao_externo.Constructor("GET", BASE_URL + "externo/listar", "", false);
   	tablaExterno.SetTableId("tablaExterno");
   	tablaExterno.SetTableObj("tablaExterno");
   	tablaExterno.SetTableHeader(externo_array_json_th);
   	tablaExterno.SetTableBody(externo_array_json_td, externo_array_json_btn_td, ajax_dao_externo);
   	tablaExterno.SetTableFooter(externo_array_json_btn, false);
   	tablaExterno.SetLabelMensaje("#txtMensajeRpta");
   	tablaExterno.SetURLGuardar(BASE_URL + "accesos/sistema/guardar");
   	tablaExterno.MostrarTable();
	}
});
