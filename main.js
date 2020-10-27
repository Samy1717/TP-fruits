$(document).ready(function () {


    $('#liste_fruits').click(function(e){
        if($('#liste_fruits option:selected').text()){
            $('#ajouter').attr("disabled", false);
            $('#supprimer').attr("disabled", true);

        }

    })

    $('#ajouter').click(function(e){
        if($('#liste_fruits option:selected').text()){
            $('#liste_fruits option:selected').appendTo('#panier')
        }
    })


    $('#panier').click(function(e){
        if($('#panier option:selected').text()){
            $('#supprimer').attr("disabled", false);
            $('#ajouter').attr("disabled", true);

        }

    })

    $('#supprimer').click(function(e){
        if($('#panier option:selected').text()){
            $('#panier option:selected').appendTo('#liste_fruits')
        }
    })



});




// Si cliquer sur un element liste fruit
// --> Cliquer sur ajouter
// -->remove l element chaine de caractere de list fruit
// --creer cet element dans list panier

// Si cliquer sur un element liste mon panier
// --> Cliquer sur supprimer
// -->remove l element chaine de caractere de list panier
// --creer cet element dans list fruit