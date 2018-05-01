var EventoDetalleView = Backbone.View.extend({
	el: '#modal-container',
	initialize: function(){
		//this.render();
		//console.log("initialize");
		this.model = new Evento();
	},
	events: {
		"click #btnGuardarDetalleEvento": "guardarDetalleEvento",
		"click #buscar_file_evento": "triggerFile",
		"click #upload_file_evento": "subirFile",
		"click #btnAsociarImagenEvento": "asociarImagenEvento",
	},
	render: function(context) {
		$("#btnModal").click();
		this.$el.html(this.getTemplate());
		var source = $("#evento-detelle-template").html();
		var template = Handlebars.compile(source);
		var html = template(context);
		this.$el.html(html);
		( function( factory ) {
				if ( typeof define === "function" && define.amd ) {
					// AMD. Register as an anonymous module.
					define( [ "../widgets/datepicker" ], factory );
				} else {
					// Browser globals
					factory( jQuery.datepicker );
				}
			}( function( datepicker ) {
				datepicker.regional.es = {
					closeText: "Cerrar",
					prevText: "&#x3C;Ant",
					nextText: "Sig&#x3E;",
					currentText: "Hoy",
					monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio",
					"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
					monthNamesShort: [ "ene","feb","mar","abr","may","jun",
					"jul","ago","sep","oct","nov","dic" ],
					dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
					dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
					dayNamesMin: [ "D","L","M","X","J","V","S" ],
					weekHeader: "Sm",
					dateFormat: "dd/mm/yy",
					firstDay: 1,
					isRTL: false,
					showMonthAfterYear: false,
					yearSuffix: ""
				};
				datepicker.setDefaults( datepicker.regional.es );
				return datepicker.regional.es;
			} ) );
		$("#txtFechaInicio").datepicker({
			showOtherMonths: true,
			selectOtherMonths: true
		});
		$("#txtFechaFin").datepicker({
			showOtherMonths: true,
			selectOtherMonths: true
		});
		$('#txtHoraInicio').timepicker({
			timeFormat: 'h:mm p',
			interval: 60,
			minTime: '10',
			maxTime: '6:00pm',
			defaultTime: '11',
			startTime: '10:00',
			dynamic: false,
			dropdown: true,
			scrollbar: true
		});
		$('#txtHoraFin').timepicker({
			timeFormat: 'h:mm p',
			interval: 60,
			minTime: '10',
			maxTime: '6:00pm',
			defaultTime: '11',
			startTime: '10:00',
			dynamic: false,
			dropdown: true,
			scrollbar: true
		});
		CKEDITOR.replace('txtDescripcionEvento');
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
    var context = {
			id: "E",
			titulo_modal: "Crear Evento",
		};
    this.render(context);
	},
	renderEditar: function(evento_id) {
		var evento = this.model.id(evento_id);
		if (evento.status == 500){
			alert("error en ajax");
		}else{
			var context = JSON.parse(evento);
			context.id = evento_id;
			context.titulo_modal = "Editar Evento";
	    this.render(context);
		}
	},
	guardarDetalleEvento: function(){
		var rpta = this.model.guardar();
		rpta = JSON.parse(rpta);
		if(rpta['tipo_mensaje'] == "error"){
			$("#txtMensajeRptaEventoDetalle").removeClass("color-success");
			$("#txtMensajeRptaEventoDetalle").addClass("color-rojo");
			$("#txtMensajeRptaEventoDetalle").html(rpta['mensaje'][0]);
		}else{
			$("#txtMensajeRptaEventoDetalle").removeClass("color-rojo");
			$("#txtMensajeRptaEventoDetalle").addClass("color-success");
			$("#txtMensajeRptaEventoDetalle").html(rpta['mensaje'][0]);
			if ($("#lblIdEvento").html() == "E"){
				$("#lblIdEvento").html(rpta['mensaje'][1]);
				$(".modal-title").html("Editar Evento");
			}
		}
	},
	triggerFile: function() {
		$("#input_file_evento").trigger("click");
	},
	subirFile: function() {
		//$("#view_file_dni").addClass("oculto");
		$("#input_file_evento").upload(
			BASE_URL + "archivo/subir",
			{
			 nombre : "Imagen 1 nombre",
			 descripcion : "Imagen 1 descripcion"
			},
			function(mensaje){
				if(mensaje['tipo_mensaje'] == 'success'){
					$("#imagen_id").html(mensaje['mensaje'][1]);
					$("#txtMensajeRptaEventoDetalle").html(mensaje['mensaje'][0]);
					$("#txtMensajeRptaEventoDetalle").removeClass("color-rojo");
					$("#txtMensajeRptaEventoDetalle").addClass("color-success");
					$("#view_file").removeClass("oculto");
					$("#btnAsociarMenuExposicion").removeClass("oculto");
					$("#view_file").attr("href", mensaje['mensaje'][2]);
				}else{
					$("#txtMensajeRptaEventoDetalle").removeClass("color-success");
					$("#txtMensajeRptaEventoDetalle").addClass("color-rojo");
					$("#txtMensajeRptaEventoDetalle").html(mensaje['mensaje'][0]);
				}
				event.preventDefault();
			},
			$("#progbar_dni"),
			$("#upload_file_dni")
		);
		event.preventDefault();
	},
});
