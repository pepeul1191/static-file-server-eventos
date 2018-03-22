var eventoDetalleView = new EventoDetalleView({});

var Router = Marionette.AppRouter.extend({
    routes: {
      'email/:email': 'showEmail',
      "" : "index",
      "evento": "evento",
      "evento/crear" : "eventoCrear",
      "evento/editar/:evento_id" : "eventoEditar",
      "evento/ver/:evento_id" : "eventoVer",
      "evento/participantes/:evento_id" : "eventoParticipantes",
      "alumno": "alumno",
      "alumno/ver/:alumno_id" : "alumnoVer",
      "empleado": "empleado",
      "empleado/ver/:empleado_id" : "empleadoVer",
      "externo": "externo",
      "*actions" : "index"
    },
    showEmail: function(email) {
        // show the email
      alert(email);
    },
    index: function() {
        // show the email
    },
    evento: function() {
      var eventoView = new EventoView({});
      eventoView.render();
      eventoView.mostrarTabla();
    },
    eventoCrear: function() {
      eventoDetalleView.renderCrear();
    },
    eventoEditar: function(evento_id){
      eventoDetalleView.renderEditar(evento_id);
    },
    eventoVer: function(evento_id){
      var eventoPrevisualizar = new EventoPrevisualizar({});
      eventoPrevisualizar.render(evento_id);
    },
    eventoParticipantes: function(evento_id){
      alert("eventoParticipantes" + evento_id);
      //var usuarioRolPermisoView = new UsuarioRolPermisoView({});
      //usuarioRolPermisoView.render(usuario_id);
      //$("#idUsuario").html(usuario_id);
      //usuarioDetalleView.mostrarTabla(usuario_id);
    },
    alumno: function() {
      var alumnoView = new AlumnoView({});
      alumnoView.render();
      alumnoView.mostrarTabla();
    },
    alumnoVer: function(alumno_id){
      var alumnoVer = new AlumnoDetalle({});
      alumnoVer.render(alumno_id);
    },
    empleado: function() {
      var empleadoView = new EmpleadoView({});
      empleadoView.render();
      empleadoView.mostrarTabla();
    },
    empleadoVer: function(empleado_id){
      var empleadoVer = new EmpleadoDetalle({});
      empleadoVer.render(empleado_id);
    },
    externo: function() {
      var externoView = new ExternoView({});
      externoView.render();
      externoView.mostrarTabla();
    },
});

var App = Marionette.Application.extend({
  region: '#body-app',
  onStart() {
    var router = new Router();
    Backbone.history.start();
  }
});

var myApp = new App();
myApp.start();
