let nivel = 0;
let ultimoNivel = 400; //vai ate a tela 450
let telaIni = "url('https://64.media.tumblr.com/85b3857cca4ea3c1bf6087c610e43745/55112aed06d34f7a-fe/s2048x3072/879136c914451b60178d432ea981bb4e5ea3f36a.pnj')";
		mostrarMenu();
		function mostrarMenu(){
			if (nivel===50)
			telaIni = "url('https://64.media.tumblr.com/6c6be6b07724d3e709415d6e2fdee5aa/14325a69374aee55-e4/s250x400/02e8def2e5597e70aedb8490305b47a9563331de.gifv')";
			else if (nivel===100)
				telaIni = "url('https://64.media.tumblr.com/74085e0f3bcce2c9720f9ce1a7ed11b4/0de65dbc5de7cc87-23/s540x810/bf141447554e41a65431b382bb338b3ce6254645.gifv')";
			else if (nivel===150)
				telaIni = "url('https://64.media.tumblr.com/cfcfcfdf859182b5fe03b0c6072bd746/53bc382e63d71f2c-63/s540x810/f42b796e22f34b8451eb1484eff87a5f3f731ae0.gifv')";
			else if (nivel===200)
				telaIni = "url('https://64.media.tumblr.com/3ca181c7520919efb78656a63e42de90/57488b74b3cbeddb-e2/s540x810/87599bbca907364bcc2853a3dd85e34a5abe26b4.jpg')";
			else if (nivel===250)
				telaIni = "url('https://64.media.tumblr.com/c2a3ec7a3cec3090f964b8556b86f52a/827552b548c00657-ad/s500x750/b66ed2650ccca759c08120876aa1dbcc2f2316ed.jpg')";
			else if (nivel===300)
				telaIni = "url('https://64.media.tumblr.com/1b67d9650acf9bd345f4915d5688f0a5/9ba806d91d1ae575-ef/s500x750/84fb9f889cd3f4b945c4af1cdbb6ef454f55fd7f.gifv')";
			else if (nivel===350)
				telaIni = "url('https://64.media.tumblr.com/9e54154aa434aa42a4fe2730f8a7094b/e2381d800a16d708-c8/s400x600/57f68175f9fd89b63140b040427c9ed0892ad506.gifv')";
			else if (nivel===400)
			telaIni = "url('https://64.media.tumblr.com/87c3fa2958fc7a38acaca9a57e3bafe8/b6219b541402ca85-52/s400x600/ccbd86223aefab0edc78b8b0a1d8a4076695edc7.webp')";
			//else if (nivel===450)
			//	telaIni = "url('')";
		
			document.body.style.backgroundImage = telaIni;
			document.getElementById("divTela").style.display = 'none';
			document.getElementById("divMenu").style.display = 'block';
			document.getElementById("divBotões").style.display = 'none';
		}		
		document.getElementById("bot2").disabled = true;
		document.getElementById("bot3").disabled = true;
		document.getElementById("bot4").disabled = true;
		document.getElementById("bot5").disabled = true;
		function novaTela(){
			if (tela>=51&&tela<101)
				mudarTela51();
			else if (tela>=101&&tela<151)
				mudarTela101();
			else if (tela>=151&&tela<201)
				mudarTela151();
			else if (tela>=201&&tela<251)
				mudarTela201();
			else if (tela>=251&&tela<301)
				mudarTela251();
			else if (tela>=301&&tela<351)
				mudarTela301();
			else if (tela>=351&&tela<401)
				mudarTela351();
		//else if (tela>=401&&tela<451)
			//	mudarTela401();
		//<script src="assets/telas401.js"></script>
			else 
				mudarTela();
		}
		function escolherTema(escolha){	
			tela = escolha+nivel;
			novaTela();
			chance = 5;
			stringTela = document.getElementById("divTela");
			stringTela.innerHTML = `Tela ${tela} - ${chance} chances`;
			mostrarTelaNumerosChances()	;		
		}		
		function mostrarTelaNumerosChances() {
			document.getElementById("divTela").style.display = 'block';
			document.getElementById("divMenu").style.display = 'none';
			document.getElementById("divBotões").style.display = 'block';
		}
		let cheat = 0;
		let bonus = 2;
		let novaCor = 0;
		let terminou = 0;
		let ativos = [];
		let arrayBotões = document.getElementsByClassName("botão");
		registrarAtivos();
		function registrarAtivos(){
			for (let i = 0; i <  arrayBotões.length;  i++){
				ativos[i] = i+1;
			}
		}
		let segredo = Math.floor(Math.random()*arrayBotões.length) + 1;		
		for (let i = 0; i < arrayBotões.length; i++) {	
			arrayBotões[i].addEventListener("click", function() {			
				if (terminou){
					if(chance<=0){					
						mostrarMenu();					
						arrayBotões[palpite-1].classList.remove("gameover");																			
						arrayBotões[segredo-1].disabled=false;
						arrayBotões[segredo-1].classList.remove("segredo");				
					}					
					else if (tela%10 == 0){		
					
						if(tela == 10+nivel)
							document.getElementById("bot2").disabled = false;
						else if(tela == 20+nivel)
							document.getElementById("bot3").disabled = false;
						else if(tela == 30+nivel)
							document.getElementById("bot4").disabled = false;
						else if(tela == 40+nivel)
							document.getElementById("bot5").disabled = false;
						mostrarMenu();								
					}
					else {
						tela++;
						novaTela();
					}
					chance=chance+bonus;			
					stringTela.innerHTML =`Tela ${tela} - ${chance} chances`;
					terminou = 0;
					arrayBotões[palpite-1].classList.remove("segredo");
					segredo = Math.floor(Math.random()*arrayBotões.length) + 1;
					ativar();
					registrarAtivos();
				}
				else{				
					palpite = parseInt(this.value);
					if (palpite === 3 && cheat === 0){
						cheat=1;
					}else if (palpite === 58 && cheat === 1){
						cheat=2;
					}else if (palpite === 5 && cheat === 2){
						cheat=3;
					}else if (palpite === 56 && cheat === 3){
						if ((tela-1)%10 === 0 && tela < ultimoNivel+40){
							tela += 9;
							bonus = 5;
							palpite=segredo;
						}
						cheat=0;
					}else if (palpite === 57 && cheat === 3){
						if ((tela-1)%50 === 0 && tela < ultimoNivel){
							tela = 50+nivel;
							bonus = 5;
							palpite = segredo;
						}
						cheat=0;
					}else{
						cheat=0;
					}
					comparar(palpite);
					desativar();
				}							
			});
		}
		function desativar() {	
			for (let i = 0; i < arrayBotões.length; i++) {		
				if(novaCor){
					arrayBotões[i].disabled=true;
					if (chance<=0){
						arrayBotões[palpite-1].classList.add("gameover");						
					}													
					arrayBotões[segredo-1].disabled=false;
					arrayBotões[segredo-1].classList.add("segredo");								
					terminou=1;				
				}											
				else if(!ativos.includes(parseInt(arrayBotões[i].value))){
					arrayBotões[i].disabled=true;
					arrayBotões[i].classList.add("transparente");				
				}			
			}
			novaCor=0;
		}
		function ativar() {
			for (let i = 0; i < arrayBotões.length; i++) {	
				arrayBotões[i].disabled=false;
				arrayBotões[i].classList.remove("transparente");		
			}			
		}
		function comparar(palpite){	
			if(palpite == segredo){	
					arrayBotões[palpite-1].classList.add("segredo");
					if (tela%10 == 0){
						if (tela === 50+nivel && nivel != ultimoNivel){
							nivel += 50;
							document.getElementById("bot2").disabled = true;
							document.getElementById("bot3").disabled = true;
							document.getElementById("bot4").disabled = true
							document.getElementById("bot5").disabled = true;
						}			
						if (tela === 50+nivel && nivel === ultimoNivel)
							stringTela.innerHTML = `ÚLTIMA TELA!\nClique ${palpite} para continuar`;
						else
							stringTela.innerHTML = `Telas ${tela+1} a ${tela+10} liberadas! \nClique ${palpite} para continuar`;
					}
					else
						stringTela.innerHTML = `Clique ${palpite} para Tela ${tela+1}`;
					novaCor = 1;						
			}	else {
					if(palpite < segredo){	
						let index = ativos.indexOf(palpite);
						ativos.splice(0,index+1);								
					}
					if(palpite > segredo){
						let index = ativos.indexOf(palpite);
						ativos.splice(index);
					}
					chance--;
					if (chance == 0){
						stringTela.innerHTML = `Clique ${segredo} para tela menu`;
						novaCor = 1;
					}
					else if (chance == 1)
						stringTela.innerHTML = `Tela ${tela} - última chance`;
					else 
						stringTela.innerHTML = `Tela ${tela} - ${chance} chances`;
			}
		}
		
		
