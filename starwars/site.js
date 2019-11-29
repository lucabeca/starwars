function validaFaleConosco() {
	
	var nome = document.frmfaleconosco.txtnome.value;
	var expRegnome= new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
	if(!expRegnome.test(nome)){
		alert("Preencha o campo nome completo!!!");
		document.frmfaleconosco.txtnome.focus();
		return false;
	}

	var fone = document.frmfaleconosco.txtfone.value;
	var expRegfone = new RegExp("[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	if(!expRegfone.test(fone)){
		alert("Preencha o Campo Telefone ou formato inválido!!!");
		document.frmfaleconosco.txtfone.focus();
		return false;
	}

	var email = document.frmfaleconosco.txtemail.value;
	var expRegemail = new RegExp("/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/");
	if(!expRegemail.test(email)){
		alert("Preencha o campo Email ou formato inválido !!!");
		document.frmfaleconosco.txtemail.focus();
		return false;
	}
}

function verificationMotivo(motivo) {
	
	// Capturamos a estrutura da div cujo ID é opçãoProduto na variável elemento
	var elemento = document.getElementById("opcaoProduto");

	//Se o valor da variavel motivo for "PR"

	if(motivo=="PR") {
		//Criamos um elemento (tag) <select> e guardamos na variável homônia
		var select = document.createElement("select");
		//setamos nesse novo select o atributo 'name' com o valor 'selproduto'
		select.setAttribute("name", "selproduto");
		//conteudo atual da variavel select:
		//<select name = "selproduto"></select>

		//criamos um elemento (tag) <option> e guardamos na variavel homonia
		var option = document.createElement("option");
		//setamos nesse novo select o atributo 'value' com o valor vazio
		option.setAttribute("name", " ");

		// criamos um no de texto "escolha" e gravamos na variavel 'texto'
		var texto = document.creatTextNode("Escolha")
		//colocamos o no de texto criado como "filho" da tag option criada
		option.appendChild(texto);
		//conteudo atual da variavel option:
		//<option value=" ">Escolha </option>
		//colocamos o option criado como "filho" da tag select criada
		select.appendChild(option);
		//Conteúdo atual da variável select:
		//<select name "selproduto"><option value=" ">Escolha</option></select>select>

		var option = document.createElement("option");
		option.setAttribute("value","AR");

		var texto = document.creatTextNode("Ar Condicionado")
		option.appendChild(texto);
		select.appendChild(option);


		var option = document.creatTextNode("option");
		option.setAttribute("value","AQ");

		var texto = document.creatTextNode("Aquecedor");
		option.appendChild(texto);
		select.appendChild(option);

		elemento.appendChild(select);

	}else{
		if(elemento.firstChild)
			elemento.removeChild(elemento.firstChild)
	}
}  