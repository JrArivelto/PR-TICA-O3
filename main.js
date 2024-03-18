function introduzirUser(){
    const text= prompt('Olá, Qual o seu nome?')
    if(text.length >= 6){
        alert('Seu nome é extenso!')
}
    else{
        alert('Seu nome é pequeno')
}
}

introduzirUser()
