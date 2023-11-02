const form = document.getElementById("formAtividade");
const imgAprovado = '<img src="images/aprovado.png"></img>';
const imgReprovado = '<img src="images/reprovado.png"></img>';
const atividade = [];
const nota = [];
const aprov = '<span class="resultado aprovado">Aprovado</span>';
const rprov = '<span class="resultado reprovado">Reprovado</span>';
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addLinha();
  mediaFinal();
  atualizaMedia();
});

function addLinha() {
  const inputNome = document.getElementById("nomeAtividade");
  const inputNota = document.getElementById("notaAtividade");

  if (atividade.includes(inputNome.value)) {
    alert(`A atividade: ${inputNome.value} já foi inserida`);
  } else {
    atividade.push(inputNome.value);
    nota.push(parseFloat(inputNota.value));

    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNota.value}</td>`;
    linha += `<td>${inputNota.value >= 6 ? imgAprovado : imgReprovado}</td>`;
    linha += "</tr>";
    linhas += linha;
  }

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;

  inputNome.value = "";
  inputNota.value = "";
}

function mediaFinal() {
  let somaNota = 0;

  for (let i = 0; i < nota.length; i++) {
    somaNota += nota[i];
  }

  return somaNota / nota.length;
}

function atualizaMedia() {
  const media = mediaFinal();
  document.getElementById("mediaValor").innerHTML = media;
  document.getElementById("mediaResultado").innerHTML =
    media >= 6 ? aprov : rprov;
}
