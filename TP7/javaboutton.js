function calcul_moyenne(){
    var n1= prompt("donner la première note");
    var n2= prompt("donner la deuxième note");
    var n3=prompt("donner la troisième note: ");


var somme= Number(n1)+Number(n2)+Number(n3);

document.write("Voici la somme:" +somme+ "<Hr>");
var moyenne= somme/3;

document.write("voici la moyenne:"+moyenne+"<br>");

if (moyenne<10)
document.write("vous êtes redoublant");
else
document.write("vous êtes admis");
}

function test_age(){
    var n1=prompt("donner votre age");
    
    var age=n1

    document.write("<font size='8em' color='white'>"+"voici votre age:"+age+"</font>"+"<Hr>")

    if (age<18){
    document.write("<font size='8em' color='white'>"+"vous êtes mineur"+"</font>")
    document.bgColor="red"
    }
    else{
    document.write("<font size='8em' color='white'>"+"vous êtes majeur"+"</font>")
    document.bgColor="green"
    }
}
function simple_affichage(){
    let name = prompt("donner votre prénom")
    let familyname = prompt("donner votre nom")
    document.write("<div style='margin: auto; width:300px; broder:2px solid blue,'>")
    document.write("bonjour"+name+familyname)
    document.write("</div>")
}

function test_couleur(){
    let c=prompt("donner une couleur")
    if(c == "bleu"|| c == "Bleu"){
        document.body.style.background= "blue"
    }
    else if (c == "rouge"|| c == "ROUGE"){
    document.body.style.background= "red"
    }
    else{
        document.write("couleur non comprise")
    }
}