function visitante() {
    document.body.style.background = "#0D0C0C";
    document.querySelector(".ti_conte").style.background="none";
    document.querySelector(".tex_conte").style.background="none";
    document.querySelector(".letra").style.color="#BCB9FF";
    document.querySelector(".cambio").style.display="none";
    document.querySelector(".rrcambio").style.display="block";
}

function local() {
    document.body.style.background = "repeating-linear-gradient(to right,#CC1F10,#CC1F10 11%,#FFFFFF 11%,#FFFFFF 22%)";
    document.querySelector(".ti_conte").style.background="white";
    document.querySelector(".tex_conte").style.background="white";
    document.querySelector(".letra").style.color="black";
    document.querySelector(".rrcambio").style.display="none";
    document.querySelector(".cambio").style.display="block";
}
