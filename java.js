function mascara_telefone ()
        {
           //limitador
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
}




document.addEventListener("DOMContentLoaded", () => {
  const destino = document.getElementById("sp1");
  const texto = "Desenvolvedor em formação focado em criar soluções visuais que combinam design e código de forma harmoniosa";
  let i = 0;

  function escreverLetra() {
    if (i < texto.length) {
      destino.textContent += texto.charAt(i);
      i++;
      setTimeout(escreverLetra, 100); 
    }
  }


  destino.textContent = "";
  escreverLetra();
});

function dark(){
 var botao = document.body;
botao.classList.toggle("dark");
}


const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});



const btnVerMais = document.getElementById("btnVerMais");
const modalProjetos = document.getElementById("modalProjetos");
const projetosSection = document.getElementById("projetos");

btnVerMais.addEventListener("click", () => {
    modalProjetos.classList.toggle("show");
    projetosSection.classList.toggle("expandido");

    btnVerMais.textContent =
        modalProjetos.classList.contains("show")
            ? "Ver menos"
            : "Ver mais projetos";
});
