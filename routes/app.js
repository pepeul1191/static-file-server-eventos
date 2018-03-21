var eventoDetalleView = new EventoDetalleView({});

var Router = Marionette.AppRouter.extend({
    routes: {
      'email/:email': 'showEmail',
      "" : "index",
      "evento": "evento",
      "evento/crear" : "eventoCrear",
      "alumno": "alumno",
      "empleado": "empleado",
      "externo": "externo",
      /*
      "accesos/usuario/roles_permisos/:usuario_id" : "showUsuarioRolesPermisos",
      */
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
    alumno: function() {
      var alumnoView = new AlumnoView({});
      alumnoView.render();
      alumnoView.mostrarTabla();
    },
    empleado: function() {
      var empleadoView = new EmpleadoView({});
      empleadoView.render();
      empleadoView.mostrarTabla();
    },
    externo: function() {
      var externoView = new ExternoView({});
      externoView.render();
      externoView.mostrarTabla();
    },
    /*
    showUsuarioRolesPermisos: function(usuario_id){
        var usuarioRolPermisoView = new UsuarioRolPermisoView({});
        usuarioRolPermisoView.render(usuario_id);
        $("#idUsuario").html(usuario_id);
        //usuarioDetalleView.mostrarTabla(usuario_id);
    },
    */
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
