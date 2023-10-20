
// aqui chamo os meus principais recursos para poder fazer a logica da minha aplicação 
const convertButton = document.querySelector(".convert_button");
const selectPrime = document.querySelector(".box_select_one");
const selectSecundary = document.querySelector(".box_select_two");
const input = document.querySelector(".input_values");


// aqui são os eventos junto com a duas funçoes da minha aplicação. um evento de "click" e outro de troca "change"
convertButton.addEventListener("click", main);
selectPrime.addEventListener('change', selectorPrimary);
selectSecundary.addEventListener('change', selectorSecundary);

input.addEventListener("blur", adicionaNumero);



function adicionaNumero(event) {
   // lembrando que o numero do input é uma string
   const input = document.querySelector(".input_values");
   const numeroDecimal = Number.parseFloat(input.value);


   const NumberFormat = new Intl.NumberFormat("pt-BR",
      {
         minimumFractionDigits: 2,

      });

   const numeroFormatado = NumberFormat.format(numeroDecimal);


   input.value = numeroFormatado;

}





function main() {


   convertReal();
   convertDolar();



}




function convertDolar() {

   const value1 = document.querySelector(".currency_value_to_convert");
   const value2 = document.querySelector(".currency_value");

   const firstSelector = document.querySelector(".box_select_one").value
   const secondSelector = document.querySelector(".box_select_two").value;
   // input do do valor
   const inputValue = document.querySelector(".input_values").value;


   // CODIGO ADICIONADO
   // remove caracteres especias da String tira o . e troca pela virgula
   const newString = inputValue.replace(/\./g, "").replace(/,/g, ".");
   // converte a String em numero
   const changedValue = parseFloat(newString);
   // pega o valor antigo
   const oldValue = changedValue;




   // variaveis de conversao

   const euroOfTheDay = 0.95;
   const bitcointoDay = 0.000035057;
   const libraOfTheDay = 0.16;
   const realToDay = 5.05

   // isso sera alterado 
   let conversionDolarToDolar = changedValue;
   let conversionDolarToReal = changedValue * realToDay;
   let conversionDolarToEuro = changedValue * euroOfTheDay;
   let conversionDolarToBitcoin = changedValue * bitcointoDay;
   let conversionDolarToLibraExterlina = changedValue * libraOfTheDay;

   if (firstSelector == "dolar" && secondSelector == "dolar") {

      // CODIGO ADICIONADO
      value1.textContent = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",


      }).format(oldValue);


      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(conversionDolarToDolar);


      // DEVE EXIBIR MAIS CASAS DECIMAIS
   } else if (firstSelector == "dolar" && secondSelector == "bitcoin") {


      // CODIGO ADICIONADO
      value1.textContent = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",


      }).format(oldValue);



      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC",
         minimumFractionDigits: 4,
         maximumFractionDigits: 10
      }).format(conversionDolarToBitcoin);


   } else if (firstSelector == "dolar" && secondSelector == "euro") {

      // CODIGO ADICIONADO
      value1.textContent = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
      }).format(oldValue);


      value2.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(conversionDolarToEuro);



   } else if (firstSelector == "dolar" && secondSelector == "libra") {
      // CODIGO ADICIONADO
      value1.textContent = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
      }).format(oldValue);

      value2.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(conversionDolarToLibraExterlina);



   } else if (firstSelector == "dolar" && secondSelector == "real") {

      // CODIGO ADICIONADO
      value1.textContent = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
      }).format(oldValue);

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(conversionDolarToReal);



   }
}


function convertReal() {
   const value1 = document.querySelector(".texto1");
   const value2 = document.querySelector(".currency_value");

   const firstSelector = document.querySelector(".box_select_one").value
   const secondSelector = document.querySelector(".box_select_two").value;
   let inputValue = document.querySelector(".input_values").value;
   // CODIGO ADICIONADO
   const message = document.querySelector(".message");

   // CODIGO ADICIONADO
   // remove caracteres especias da String tira o . e troca pela virgula
   const newString = inputValue.replace(/\./g, "").replace(/,/g, ".");
   // converte a String em numero
   const changedValue = parseFloat(newString);
   // pega o valor antigo
   let oldValue = changedValue;


   // variaveis de conversao
   const dollarOfTheDay = 5.05;
   const euroOfTheDay = 0.19;
   const bitcoinOfTheDay = 0.0000072;
   const libraOfTheDay = 0.16;

   // REALIZA OS CALCULOS
   let conversionRealToDollar = changedValue / dollarOfTheDay;
   let conversionRealToEuro = changedValue * euroOfTheDay;
   // O BITCOIN ESTA CONVERTENDO SIM É QUE O NUMERO DE CASAS DECIMAIS DELE É MUITO GRANDE
   let conversionRealToBitcoin = changedValue * bitcoinOfTheDay;
   let conversionRealToLibraExterlina = changedValue / libraOfTheDay;

   if (firstSelector == "real" && secondSelector == "dolar") {
      // CODIGO NOVO
      if (isNaN(oldValue)) {   
         oldValue = 0.00;
         conversionRealToDollar = 0;
         message.textContent = "value invalid"; 
       

      } else {
         message.textContent = ""; 

      }


      // CODIGO ADICIONADO
      value1.textContent = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL",


      }).format(oldValue);



      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(conversionRealToDollar);





   }


   else if (firstSelector == "real" && secondSelector == "bitcoin") {



      // CODIGO ADICIONADO
      value1.textContent = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL",


      }).format(oldValue);


      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BTC",

         minimumFractionDigits: 4,
         maximumFractionDigits: 10

      }).format(conversionRealToBitcoin);




   } else if (firstSelector == "real" && secondSelector == "euro") {



      // CODIGO ADICIONADO
      value1.textContent = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL",


      }).format(oldValue);

      value2.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(conversionRealToEuro);



   } else if (firstSelector == "real" && secondSelector == "libra") {


      // CODIGO ADICIONADO
      value1.textContent = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL",


      }).format(oldValue);

      value2.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(conversionRealToLibraExterlina);



   } else if (firstSelector == "real" && secondSelector == "real") {


      // CODIGO ADICIONADO
      value1.textContent = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL",


      }).format(oldValue);

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(oldValue);



   }
  
         


}

//


// troca a imagem , troca o texto , troca o tipo de moeda
function selectorPrimary() {
   const image1 = document.querySelector(".img_convert");
   const text1 = document.querySelector(".currency");
   const selectPrime = document.querySelector(".box_select_one");
   const value1 = document.querySelector(".currency_value_to_convert");


   if (selectPrime.value == "real") {
      image1.src = "./assets/brasil.png";
      text1.innerHTML = "Real";

      //  alterar aqui

      value1.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(0.00)

   } else if (selectPrime.value == "dolar") {
      image1.src = "./assets/estados-unidos.png";
      text1.innerHTML = "Dolar";


      value1.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(0.00);


   } else if (selectPrime.value == "euro") {
      image1.src = "./assets/euro.png";
      text1.innerHTML = "Euro";


      value1.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(0.00);



   } else if (selectPrime.value == "libra") {
      image1.src = "./assets/libra.png";
      text1.innerHTML = "Libra";


      //  alterar aqui

      value1.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(0.00);


   } else if (selectPrime.value == "bitcoin") {
      image1.src = "./assets/bitcoin.png";
      text1.innerHTML = "Bitcoin";

      //  alterar aqui

      value1.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC"
      }).format(0.00);


   }



}
// troca a imagem , troca o texto , troca o tipo de moeda
function selectorSecundary() {
   const image2 = document.querySelector(".img_converted");
   const text2 = document.getElementById("name_currency");
   const selectSecundary = document.querySelector(".box_select_two");
   const value2 = document.querySelector(".currency_value");

   if (selectSecundary.value == "real") {
      image2.src = "./assets/brasil.png";
      text2.innerHTML = "Real";


      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(0.00);


   } else if (selectSecundary.value == "dolar") {
      image2.src = "./assets/estados-unidos.png";
      text2.innerHTML = "Dolar";

      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(0.00);

   } else if (selectSecundary.value == "euro") {
      image2.src = "./assets/euro.png";
      text2.innerHTML = "Euro";


      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(0.00);


   } else if (selectSecundary.value == "libra") {
      image2.src = "./assets/libra.png";
      text2.innerHTML = "Libra";

      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(0.00);

   } else if (selectSecundary.value == "bitcoin") {
      image2.src = "./assets/bitcoin.png";
      text2.innerHTML = "Bitcoin";


      //  alterar aqui

      value2.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC"
      }).format(0.00);


   }



}

