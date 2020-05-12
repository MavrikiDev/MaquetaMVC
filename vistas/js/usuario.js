$(document).ready(function(){

	/*================== MOSTRAR USUARIOS ===============*/

	function MostrarUsuario(){
		$.ajax({
			url: "ajax/usuario-ajax.php",
			type: "POST",
			data: {wildcardUser: "all"},
			success: function(response){
				console.log(response);
				let usuario = JSON.parse(response);
				let plantilla = '';
				usuario.forEach(user =>{
					plantilla += `
						<tr id=${user.id}>
							<td>${user.User}</td>
							<td>${user.Email}</td>
							<td>${user.Tipo}</td>
							<td>${user.Acceso}</td>
							<td>
								<button class="btn btn-info">
								Editar
								</button>
								<button class="btn btn-danger btnDelUser">
								Eliminar
								</button>
							</td>
						</tr>

					`
				});

				$("#tablaCuerpo").append(plantilla);
			}
		});
	}

	MostrarUsuario();

	/*=====================	Eliminar user	=====================*/	

	$(document).on('click','.btnDelUser', function(){ //capturo el evento click del boton	
		let fila = $(this)[0].parentElement.parentElement;
		let id = $(fila).attr('id');
		console.log(id);
		if(confirm("¿Desea eliminar este usuario?")){
			$.ajax({
				url: 'ajax/usuario-ajax.php',
				type: 'POST',
				data: {"del_ID" : id},
				success: function(response){
					console.log(response);
					//MostrarUsuario();
				}
			});
		}
		location.reload();
	});	


	/*=====================	MODAL	=====================*/

	var modal = document.getElementById("usuarioModal");

	$("#btnAgregarUsuario").click(function(){
		modal.style.display = "block";
	});

	$("#close-modal").click(function(){
		//modal.style.display = "none";
		cerrarModal();
	});

	$(window).click(function(e){
		if(e.target == modal){
			//$("#formAddUser").trigger('reset');
			//modal.style.display = "none";
			cerrarModal();
		}
	});

	/*---------------- Validamos que se ingrese nombre ----------------*/	
	$("#nombre").on('blur',function(){

		if($(this).val() == "" || $(this).val() == null){
			$(this).css('border-color', 'red');
		}else{
			$(this).css('border-color', 'green');
		}
	});

	/*---------------- Validamos que se ingrese apellido ----------------*/	
	$("#apellido").on('blur',function(){
		if($(this).val() == "" || $(this).val() == null){
			$(this).css("border-color","red");
		}else{
			$(this).css("border-color","green");
		}
	});

	/*---------------- Validamos si existe el usuario ----------------*/	
	var user_exists = true;
	$("#username").on('blur',function(){
		let username = $("#username").val();

		if($(this).val() == "" || $(this).val() == null){
			$("#username").css("border-color", "red");
			$("#user-error").text("Este campo es obligatorio");
			$("#user-error").css("color","red");
			return;
		}

		$.ajax({
			url: "ajax/usuario-ajax.php",
			type: "POST",
			data: {
				"check_user" : username
			},
			success: function(response){
				console.log("He recibido: " + response);
				
				if(response == "no disponible"){
					user_exists = true;
					$("#username").siblings("#user-error").text("El usuario no está disponible");
					$("#username").css("border-color","red");
					$("#user-error").css("color","red");
				}else if(response == "disponible"){
					user_exists = false;
					$("#username").siblings("#user-error").text("Usuario disponible");
					$("#user-error").css("color","green");
					$("#username").css("border-color", "green");
				}
			}
		});
	});

	/*---------------- Validamos que se ingrese password ----------------*/	
	$("#password").on('blur',function(){
		if($(this).val() == "" || $(this).val() == null){
			$(this).css("border-color","red");
		}
		else if(($(this).val()).length > 8){
			$(this).css("border-color","green");	
		}
	});

	/*---------------- Validamos si existe el email ----------------*/	
	var email_exists = false;
	$("#email").on('blur',function(){
		let email = $("#email").val();

		if($(this).val() == "" || $(this).val() == null){
			$(this).css("border-color","");
			return;
		}

		$.ajax({
			url: "ajax/usuario-ajax.php",
			type: "POST",
			data: {
				"check_email": email
			},
			success: function(response){
			//	console.log(response); //Debug
				if(response == "disponible"){
					email_exists = false;
					$("#email").css("border-color","green");
				}else if(response == "no disponible"){
					email_exists = true;
				}
			}
		});
	});

	/*---------------- Validamos y registramos el usuario ----------------*/	
	$("#formAddUser").submit(function(e){
		e.preventDefault();

		if(user_exists == true || email_exists == true){
			$("#error_msg").text("Revise los campos e inténtelo nuevamente.");
			return;
		}
		//Revisar enviar un array datos haciendo uso de datos = FromData(), datos.append(dato)
		let nombre = $("#nombre").val();
		let apellido = $("#apellido").val();
		let user = $("#username").val();
		let pass = $("#password").val();
		let email = $("#email").val();
		let privilegio = $('input:radio[name=privilegio]:checked').val();
		
		//let privilegio = $("").value();
		//console.log("Datos capturados");
		console.log("email: " + email);

		$.ajax({
			url: "ajax/usuario-ajax.php",
			type: "POST",
			data: {
				name:nombre,
				lname:apellido,
				user:user,
				pass:pass,
				email:email,
				priv:privilegio
			},
			success: function(response){
				//console.log(response);
				let plantilla = '';

			}
		});
		cerrarModal();
		location.reload();

	});

	function cerrarModal(){
		$("#nombre").css("border-color", "");
		$("#apellido").css("border-color", "");
		$("#username").css("border-color", "");
		$("#password").css("border-color", "");
		$("#email").css("border-color", "");
		$("#error_msg").text("");
		$("#user-error").text("");
		$("#formAddUser").trigger('reset');
		modal.style.display = "none";
	}
	//FIN MODAL






});

