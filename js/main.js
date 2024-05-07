
$('#telefone').mask('(00) 00000-0000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },

        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        
    },
    messages: {
        nome: 'Por favor ensira o seu nome',
        email: 'Por favor ensira o seu e-mail',
        telefone: 'Por favor ensira o seu telefone',
        
    },
    submitHandler: function(form){
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        console.log(camposIncorretos);
        
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})
