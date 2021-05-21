function calcular(){

    var valorVeiculo = formSignUp.valorv.value;
    console.log(valorVeiculo);

            if (valorVeiculo == ''){

                alert('preencha o campo com o valor do veiculo');
                var vErro = document.getElementById ('msg_erro');
                console.log(vErro);
                vErro.innerHTML = 'Favor preencher o campo!';
                console.log(vErro);
                            }  

    var valorEntrada = formSignUp.valore.value;
    console.log(valorEntrada);
                            
             if (valorEntrada == ''){

                alert('preencha o campo com o valor');
                var vErro = document.getElementById ('msg_erro');
                console.log(vErro);
                vErro.innerHTML = 'Favor preencher o campo!';
                console.log(vErro);

                             }

    var valorTaxa = formSignUp.taxa.value;
    console.log(valorTaxa);                             

             if (valorTaxa == ''){

                alert('preencha o campo com o valor da taxa');
                var vErro = document.getElementById ('msg_erro');
                console.log(vErro);
                vErro.innerHTML = 'Favor preencher o campo!';
                console.log(vErro);

                             }



























    
}