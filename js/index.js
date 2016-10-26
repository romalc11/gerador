function gera(){
    
    var descPt = document.getElementById("descpt").value.trim();
    var descEsp = document.getElementById("descesp").value.trim();
    var descIng = document.getElementById("descing").value.trim();
    var taSin = document.getElementById("tasin");
    var taCat = document.getElementById("tacat");
    var taRes = document.getElementById("tares");
    
    if (descPt === "" || descEsp === "" || descIng === ""){
        alert("Por favor preencha todos os descritores!")
    } else {
        document.getElementById("tares").value = "";
        var descritores = "";
        var stmtFinal = "";

            if (descPt == descEsp && descPt != descIng) {
                descritores = '(mh:"' + descPt + '") OR ('+ descPt + ') OR (mh:"'+ descIng +'") OR ('+ descIng +')';

            } else if (descPt == descIng && descPt != descEsp) {

                descritores = '(mh:"' + descPt + '") OR ('+ descPt + ') OR (mh:"'+ descEsp +'") OR ('+ descEsp +')';

            } else if (descIng == descEsp && descIng != descPt) {

               descritores = '(mh:"' + descPt + '") OR ('+ descPt + ') OR (mh:"'+ descIng +'") OR ('+ descIng +')';

            } else if (descPt == descEsp && descPt == descIng) {

                descritores = '(mh:"' + descPt + '") OR ('+ descPt + ')';

            } else {
                descritores = '(mh:"' + descPt + '") OR ('+ descPt + ') OR (mh:"'+ descIng +'") OR ('+ descIng +') OR (mh:"' +  descEsp + '") OR ('+ descEsp +')';
        
            }

            stmtFinal = descritores;

            var sinonimos = taSin.value.split(";");

            if ((sinonimos.length != 0) && (taSin.value.trim() != "")) {
                
                for(i = 0; i < sinonimos.length; i++){
                    var verificada = sinonimos[i].trim();
                    stmtFinal = stmtFinal + ' OR (' + verificada + ')';
                }
            }

            var categorias = taCat.value.split(";");
        
            if ((categorias.length != 0) && (taCat.value.trim() != "")) {
                for(i = 0; i < categorias.length; i++){
                    var verificada = categorias[i].trim();
                    stmtFinal = stmtFinal + ' OR (mh:' + verificada + '$)';
                }
            }

            taRes.value = stmtFinal;
    }
}

function geraPb(){
    
    var descIng = document.getElementById("pbdescing").value.trim();
    var taSin = document.getElementById("pbtasin");
    var taRes = document.getElementById("pbtares");
    
    if (descIng === ""){
        alert("Por favor preencha o descritor!")
    } else {
        document.getElementById("pbtares").value = "";
        var descritores = "";
        var stmtFinal = "";


            stmtFinal = '"' + descIng + '"[Mesh] OR (' + descIng + ')';

            var sinonimos = taSin.value.split(";");

            if ((sinonimos.length != 0) && (taSin.value.trim() != "")) {
                
                for(i = 0; i < sinonimos.length; i++){
                    var verificada = sinonimos[i].trim();
                    stmtFinal = stmtFinal + ' OR (' + verificada + ')';
                }
            }


            taRes.value = stmtFinal;
    }
}

function limpa() {
    document.getElementById("descpt").value = "";
    document.getElementById("descesp").value = "";
    document.getElementById("descing").value = "";
    document.getElementById("tasin").value = "";
    document.getElementById("tacat").value = "";
    document.getElementById("tares").value = "";
}

function limpaPb() {
    document.getElementById("pbdescing").value = "";
    document.getElementById("pbtasin").value = "";
    document.getElementById("pbtares").value = "";
}