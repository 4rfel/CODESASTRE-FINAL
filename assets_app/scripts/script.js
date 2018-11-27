document.addEventListener('DOMContentLoaded', function() {
    // let db = new DB('https://co-des.firebaseio.com')
    let db = new DB('https://desgosto-final.firebaseio.com/')

    let params = new URLSearchParams(window.location.search)

    let url = '/'
    // Printing the path on firebase on the console
    console.log(url)
    db.download(url, function(data) {
        // Printing the data contained on that path on firebase
        console.log(data)
        var i = 1
        function evento(){
          i += 1
          console.log(i);
          let questao = document.querySelector('.souburro')
          questao.innerHTML = "Questão número: " + i

        }

        for(var e = 0; e < 10; e++){
        let resp1 = document.querySelector('.resp1')
        resp1.innerHTML = data["pergunta "+(i)]['respostas'][0]
        // console.log(data["pergunta "+(i)]['respostas'][0])

        let resp2 = document.querySelector('.resp2')
        resp2.innerHTML = data["pergunta "+(i)]['respostas'][1]
        // console.log(data["pergunta "+(i)]['respostas'][1])

        let resp3 = document.querySelector('.resp3')
        resp3.innerHTML = data["pergunta "+(i)]['respostas'][2]
        // console.log(data["pergunta "+(i)]['respostas'][2])

        let resp4 = document.querySelector('.resp4')
        resp4.innerHTML = data["pergunta "+(i)]['respostas'][3]
        // console.log(data["pergunta "+(i)]['respostas'][3])

        let pergunta = document.querySelector('.pergunta')
        pergunta.innerHTML = data["pergunta "+(i)]['respostas'][0]
        // console.log(data["pergunta "+(i)]['pergunta'])
      }
    })
})
