var alumno_array_json_th = [
	{titulo:"id", index: "_id", estilos:"width: 10px; display:none;"},
	{titulo:"Apellido Paterno",index:"paterno",estilos:"width: 120px;"},
  {titulo:"Apellido Materno",index:"materno",estilos:"width: 120px;"},
  {titulo:"Nombre",index:"nombres",estilos:"width: 100px;"},
  {titulo:"Correo Alumno",index:"correo_alumno",estilos:"width: 120px;"},
  {titulo:"Correo Personal",index:"correo_personal",estilos:"width: 120px;"},
  {titulo:"Celuluar",index:"celular",estilos:"width: 90px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 80px;"}
];

var alumno_array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"_id", edicion:""},
	{tipo:"text",estilos:"width:120px;", index:"paterno", edicion:""},
  {tipo:"text",estilos:"width:120px;", index:"materno", edicion:""},
  {tipo:"text",estilos:"width:100px;", index:"nombres", edicion:""},
  {tipo:"text",estilos:"width:120px;", index:"correo_alumno", edicion:""},
  {tipo:"text",estilos:"width:120px;", index:"correo_personal", edicion:""},
  {tipo:"text",estilos:"width:120px;", index:"celular", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];
/*
"id":1,"codigo":20000001,"dni":"70241720","nombres":"Janelle Bebe","paterno":"Edensor","materno":"Wloch","correo_alumno":"20000001@aloe.ulima.edu.pe","correo_personal":"bwloch0@usatoday.com","celular":"987731000","carrera_id":4,"alumno_estado_id":1
*/
var alumno_array_json_btn_td = [
	{clase:"fa fa-chevron-right", href:"#/accesos/sistemas/menu/", alt:"Gestionar Menú",estilos:"padding-left: 2px;", tipo:"btn_td_href", operacion:"IrURL"},
	{clase:"fa fa-list",href:"#/accesos/sistemas/permiso/",alt:"Gestionar Permisos",estilos:"padding-left: 2px;", tipo:"btn_td_href", operacion:"IrURL"},
	{clase:"fa fa-id-card-o",href:"#/accesos/sistemas/rol/",alt:"Gestionar Roles",estilos:"padding-left: 2px;", tipo:"btn_td_href", operacion:"IrURL"},
	{clase:"fa fa-times",url:"",alt:"Eliminar capa",estilos:"padding-left: 2px;", operacion:"QuitarFila"}
];

var alumno_array_json_btn = [
];
