let texto = document.querySelector("#nome");
// texto.textContent = "Rodrigo";

let nome = prompt("Qual é o seu nome?");

texto.textContent = nome;

if (nome == null){
    texto.textContent = 'Seja bem-vindo';
}else{
    texto.textContent = nome;
}