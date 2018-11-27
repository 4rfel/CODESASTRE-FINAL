document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);



  // let name = document.querySelector('.name')
  // name.innerHTML = "nome sério"

});


document.addEventListener('DOMContentLoaded', function() {
    // let db = new DB('https://co-des.firebaseio.com')
    let db = new DB('https://desgosto-final.firebaseio.com/')


    db.download(db, function(data) {
        // Printing the data contained on that path on firebase
        console.log(data)

    })
})

// https://desgosto-final.firebaseio.com/



var i = 1
function evento(){
  i += 1
  console.log(i);
  let questao = document.querySelector('.souburro')
  questao.innerHTML = "Questão número: " + i

}


$(document).ready(function ()
    {
        $('.click').click(function ()
        {
            var elements = $('.click');
            elements.each(function(){
                $(this).removeClass('active');
            });
            $(this).addClass('active');
        })
        $('#submit_quiz').click(function ()
       {
           // Desseleciona a resposta selecionada
           var elements = $('.click');
           elements.each(function ()
           {
               $(this).removeClass('active');
           });

          // Faz alguma coisa quando clica no botão enviar
       });
       $('.dropdown-trigger').dropdown({
            closeOnClick: false,
        });
    });
