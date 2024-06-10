function avancarimg() {
  var imagem = document.getElementById("img1");
  var imagem2 = document.getElementById("img2");
  var imagem3 = document.getElementById("img3");
  var imagem4 = document.getElementById("img4");
  var imagem5 = document.getElementById("img5");
  var imagem6 = document.getElementById("img6");
  var texto = document.getElementById("texto");

  if (imagem.style.display == "flex") {
    imagem.style.display = "none";
    imagem2.style.display = "flex";
    texto.textContent = "OUTRIDER";
  } else if (imagem2.style.display == "flex") {
    imagem2.style.display = "none";
    imagem3.style.display = "flex";
    texto.textContent = "SERAPH";
  } else if (imagem3.style.display == "flex") {
    imagem3.style.display = "none";
    imagem4.style.display = "flex";
    texto.textContent = "RUIN";
  } else if (imagem4.style.display == "flex") {
    imagem4.style.display = "none";
    imagem5.style.display = "flex";
    texto.textContent = "SPECTRE";
  } else if (imagem5.style.display == "flex") {
    imagem5.style.display = "none";
    imagem6.style.display = "flex";
    texto.textContent = "REAPER";
  } else if (imagem6.style.display == "flex") {
    imagem6.style.display = "none";
    imagem.style.display = "flex";
    texto.textContent = "BATTERY";
  } else {
    imagem.style.display = "flex";
    texto.textContent = "BATTERY";
  }
}

function voltarimg() {
  var imagem = document.getElementById("img1");
  var imagem2 = document.getElementById("img2");
  var imagem3 = document.getElementById("img3");
  var imagem4 = document.getElementById("img4");
  var imagem5 = document.getElementById("img5");
  var imagem6 = document.getElementById("img6");

  if (imagem.style.display == "flex") {
    imagem.style.display = "none";
    imagem6.style.display = "flex";
    texto.textContent = "REAPER";
  } else if (imagem2.style.display == "flex") {
    imagem2.style.display = "none";
    imagem.style.display = "flex";
    texto.textContent = "BATTERY";
  } else if (imagem3.style.display == "flex") {
    imagem3.style.display = "none";
    imagem2.style.display = "flex";
    texto.textContent = "OUTRIDER";
  } else if (imagem4.style.display == "flex") {
    imagem4.style.display = "none";
    imagem3.style.display = "flex";
    texto.textContent = "SERAPH";
  } else if (imagem5.style.display == "flex") {
    imagem5.style.display = "none";
    imagem4.style.display = "flex";
    texto.textContent = "RUIN";
  } else if (imagem6.style.display == "flex") {
    imagem6.style.display = "none";
    imagem5.style.display = "flex";
    texto.textContent = "SPECTRE";
  } else {
    imagem.style.display = "flex";
    texto.textContent = "BATTERY";
  }
}

function clicar1() {
  var imagem = document.getElementById("img1");
  var voltar = document.getElementById("voltar");
  var avancar = document.getElementById("avancar");
  var battery = document.getElementById("battery");
  var titulo = document.getElementById("titulo");
  if (imagem.style.display == "flex") {
    titulo.style.display = "none";
    avancar.style.display = "none";
    voltar.style.display = "none";
    imagem.style.display = "none";
    texto.textContent = "";
    battery.style.display = "flex";
  }
}

function voltar1() {
  var imagem = document.getElementById("img1");
  var voltar = document.getElementById("voltar");
  var avancar = document.getElementById("avancar");
  var battery = document.getElementById("battery");
  var titulo = document.getElementById("titulo");

  if (battery.style.display == "flex") {
    battery.style.display = "none";
    titulo.style.display = "block";
    avancar.style.display = "flex";
    voltar.style.display = "flex";
    imagem.style.display = "flex";
    texto.textContent = "BATTERY";
  }
}

function clicar2() {
  var imagem = document.getElementById("img2");
  var voltar = document.getElementById("voltar");
  var avancar = document.getElementById("avancar");
  var outrider = document.getElementById("outrider");
  var titulo = document.getElementById("titulo");

  if (imagem.style.display == "flex") {
    titulo.style.display = "none";
    avancar.style.display = "none";
    voltar.style.display = "none";
    imagem.style.display = "none";
    texto.textContent = "";
    outrider.style.display = "flex";
  }
}

function voltar2() {
  var imagem = document.getElementById("img2");
  var voltar = document.getElementById("voltar");
  var avancar = document.getElementById("avancar");
  var outrider = document.getElementById("outrider");
  var titulo = document.getElementById("titulo");

  if (outrider.style.display == "flex") {
    outrider.style.display = "none";
    titulo.style.display = "block";
    avancar.style.display = "flex";
    voltar.style.display = "flex";
    imagem.style.display = "flex";
    texto.textContent = "OUTRIDER";
  }
}

function clicar3() {
  var imagem = document.getElementById("img3");
  var voltar = document.getElementById("voltar");
  var avancar = document.getElementById("avancar");
  var seraph = document.getElementById("seraph");
  var titulo = document.getElementById("titulo");

  if (imagem.style.display == "flex") {
    titulo.style.display = "none";
    avancar.style.display = "none";
    voltar.style.display = "none";
    imagem.style.display = "none";
    texto.textContent = "";
    seraph.style.display = "flex";
  }
}

function voltar3() {
  var imagem = document.getElementById("img3");
  var voltar = document.getElementById("voltar");
  var avancar = document.getElementById("avancar");
  var seraph = document.getElementById("seraph");
  var titulo = document.getElementById("titulo");

  if (seraph.style.display == "flex") {
    seraph.style.display = "none";
    titulo.style.display = "block";
    avancar.style.display = "flex";
    voltar.style.display = "flex";
    imagem.style.display = "flex";
    texto.textContent = "SERAPH";
  }
}

function clicar4() {
  var imagem = document.getElementById("img4");
  var voltar = document.getElementById("voltar");
  var avancar = document.getElementById("avancar");
  var ruin = document.getElementById("ruin");
  var titulo = document.getElementById("titulo");

  if (imagem.style.display == "flex") {
    titulo.style.display = "none";
    avancar.style.display = "none";
    voltar.style.display = "none";
    imagem.style.display = "none";
    texto.textContent = "";
    ruin.style.display = "flex";
  }
}

function voltar4() {
  var imagem = document.getElementById("img4");
  var voltar = document.getElementById("voltar");
  var avancar = document.getElementById("avancar");
  var ruin = document.getElementById("ruin");
  var titulo = document.getElementById("titulo");

  if (ruin.style.display == "flex") {
    ruin.style.display = "none";
    titulo.style.display = "block";
    avancar.style.display = "flex";
    voltar.style.display = "flex";
    imagem.style.display = "flex";
    texto.textContent = "RUIN";
  }
}

function clicar5() {
  var imagem = document.getElementById("img5");
  var voltar = document.getElementById("voltar");
  var avancar = document.getElementById("avancar");
  var spectre = document.getElementById("spectre");
  var titulo = document.getElementById("titulo");

  if (imagem.style.display == "flex") {
    titulo.style.display = "none";
    avancar.style.display = "none";
    voltar.style.display = "none";
    imagem.style.display = "none";
    texto.textContent = "";
    spectre.style.display = "flex";
  }
}

function voltar5() {
  var imagem = document.getElementById("img5");
  var voltar = document.getElementById("voltar");
  var avancar = document.getElementById("avancar");
  var spectre = document.getElementById("spectre");
  var titulo = document.getElementById("titulo");

  if (spectre.style.display == "flex") {
    spectre.style.display = "none";
    titulo.style.display = "block";
    avancar.style.display = "flex";
    voltar.style.display = "flex";
    imagem.style.display = "flex";
    texto.textContent = "SPECTRE";
  }
}

function clicar6() {
  var imagem = document.getElementById("img6");
  var voltar = document.getElementById("voltar");
  var avancar = document.getElementById("avancar");
  var reaper = document.getElementById("reaper");
  var titulo = document.getElementById("titulo");

  if (imagem.style.display == "flex") {
    titulo.style.display = "none";
    avancar.style.display = "none";
    voltar.style.display = "none";
    imagem.style.display = "none";
    texto.textContent = "";
    reaper.style.display = "flex";
  }
}

function voltar6() {
  var imagem = document.getElementById("img6");
  var voltar = document.getElementById("voltar");
  var avancar = document.getElementById("avancar");
  var reaper = document.getElementById("reaper");
  var titulo = document.getElementById("titulo");

  if (reaper.style.display == "flex") {
    reaper.style.display = "none";
    titulo.style.display = "block";
    avancar.style.display = "flex";
    voltar.style.display = "flex";
    imagem.style.display = "flex";
    texto.textContent = "REAPER";
  }
}

const selecionar1 = document.getElementById("selecionar1");
const selecionar2 = document.getElementById("selecionar2");
const selecionar3 = document.getElementById("selecionar3");
const selecionar4 = document.getElementById("selecionar4");
const selecionar5 = document.getElementById("selecionar5");
const selecionar6 = document.getElementById("selecionar6");

selecionar1.addEventListener("click", () => {
  alert("Personagem Battery Selecionado");
  window.location.reload();
});
selecionar2.addEventListener("click", () => {
  alert("Personagem Outrider Selecionado");
  window.location.reload();
});
selecionar3.addEventListener("click", () => {
  alert("Personagem Seraph Selecionado");
  window.location.reload();
});
selecionar4.addEventListener("click", () => {
  alert("Personagem Ruin Selecionado");
  window.location.reload();
});
selecionar5.addEventListener("click", () => {
  alert("Personagem Spectre Selecionado");
  window.location.reload();
});
selecionar6.addEventListener("click", () => {
  alert("Personagem Reaper Selecionado");
  window.location.reload();
});
