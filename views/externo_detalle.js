var ExternoDetalle = Backbone.View.extend({
	el: '#modal-container',
	initialize: function(){
		this.model = new Externo();
	},
	events: {
		"click #btnGuardarDetalleExterno": "guardarDetalleEvento"
	},
	renderVer: function(alumno_id) {
		$("#btnModal").click();
    var data = this.model.id(alumno_id);
    var context = JSON.parse(data);
    context.titulo_modal = "Ver Participante Externo";
    context.disabled = true;
		this.$el.html(this.getTemplate());
		var source = $("#empleado-detelle-template").html();
		var template = Handlebars.compile(source);
		var html = template(context);
		this.$el.html(html);
	},
  renderEditar: function(alumno_id) {
		$("#btnModal").click();
    var data = this.model.id(alumno_id);
    var context = JSON.parse(data);
    context.titulo_modal = "Editar Participante Externo";
    context.disabled = false;
		this.$el.html(this.getTemplate());
		var source = $("#empleado-detelle-template").html();
		var template = Handlebars.compile(source);
		var html = template(context);
		this.$el.html(html);
	},
	getTemplate: function(data) {
		var template = null;
		$.ajax({
		   url: STATICS_URL + 'templates/externo_detalle.html',
		   type: "GET",
		   async: false,
		   success: function(source) {
			   template = source
		   }
		});
		return template;
	},
  guardarDetalleEvento: function(){
    var externo = {
      _id: $("#lblIdExterno").html(),
      dni: $("#txtDNI").val(),
      correo: $("#txtCorreo").val(),
      telefono: $("#txtTelefono").val(),
      nombres: $("#txtNombres").val(),
      paterno: $("#txtPaterno").val(),
      materno: $("#txtMaterno").val(),
    }
		var rpta = this.model.guardar(externo);
		rpta = JSON.parse(rpta);
		if(rpta['tipo_mensaje'] == "error"){
			$("#txtMensajeExternoDetalle").removeClass("color-success");
			$("#txtMensajeExternoDetalle").addClass("color-rojo");
			$("#txtMensajeExternoDetalle").html(rpta['mensaje'][0]);
		}else{
			$("#txtMensajeExternoDetalle").removeClass("color-rojo");
			$("#txtMensajeExternoDetalle").addClass("color-success");
			$("#txtMensajeExternoDetalle").html(rpta['mensaje'][0]);
			if ($("#lblIdExterno").html() == "E"){
				$("#lblIdExterno").html(rpta['mensaje'][1]);
				$(".modal-title").html("Editar Evento");
			}
		}
	},
});
