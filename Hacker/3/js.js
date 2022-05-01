function Choices(){
    var interactionUser = ""
    while (interactionUser != 1 && interactionUser != 2 && interactionUser != 3 && interactionUser != "homem"){
        interactionUser = prompt (
            'Qual é a resposta do enigma?'
        )
        if (interactionUser == 1)
        {
            window.location.href = '../FAIL/perdeu.html'
        }
        else if (interactionUser == 2)
        {
            window.location.href = '../FAIL/perdeu.html'
        }
        else if (interactionUser == 3)
        {
            window.location.href = '../FAIL/perdeu.html'
        }
        else if (interactionUser == "homem")
        {
            window.location.href = '../4/fase4.html'
        }
        else if(interactionUser == null){
           return;
        }
        else{
            alert ('ERRO. Apenas os números 1, 2 e 3 permitidos no prompt')
        }
    }
}
