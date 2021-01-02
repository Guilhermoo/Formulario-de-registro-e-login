var log = document.getElementById('login')
        var reg = document.getElementById('registro')
        var btn = document.getElementById('button')
        var nome = document.querySelector('h2')


        function registro() {
            log.style.left = "-400px"
            reg.style.left = "5px"
            btn.style.left = "132px"
        }
        
        function login() {
            log.style.left = "5px"
            reg.style.left ="400px"
            btn.style.left ="-0px"
        }

        function telaTroca () {
            document.getElementById('tela').style.zIndex = '1'
            document.getElementById('caixa').style.zIndex = '-1'
        }
        function telaIniciada() {
            valor = document.getElementById('nome').value
            nome = document.querySelector('h2').innerText = valor
        }