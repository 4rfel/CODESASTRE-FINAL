document.addEventListener('DOMContentLoaded', function ()
{
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
});

$(document).ready(function ()
{
    // Carrega quiz
    var num_pergunta = 1;
    var pontos = 0;
    let db = new DB('https://coisa-62403.firebaseio.com/');

    db.download("/", function (data)
    {
        // console.log(data['perguntas'][num_pergunta]['resposta_correta']);
        $('.pergunta').html(data["perguntas"][num_pergunta]['pergunta']);
        $('.resp1').html(data["perguntas"][num_pergunta]['respostas'][0]);
        $('.resp2').html(data["perguntas"][num_pergunta]['respostas'][1]);
        $('.resp3').html(data["perguntas"][num_pergunta]['respostas'][2]);
        $('.resp4').html(data["perguntas"][num_pergunta]['respostas'][3]);
    });

    $('.dropdown-trigger').dropdown({
        closeOnClick: false,
    });

    $('.sidebarCollapse').click(function ()
    {
        $('.sidebar').toggleClass('active');
    });

    $('.click').click(function ()
    {
        var elements = $('.click');
        elements.each(function ()
        {
            $(this).find('p').removeClass('selected');
        });
        $(this).find('p').addClass('selected');
    });

    $('#submit_quiz').click(function ()
    {
        db.download("/", function (data)
        {
            // Verifica resposta correta
            var resposta_correta = data['perguntas'][num_pergunta - 1]['resposta_correta'];
            var answer = $(document).find('.selected').data("id");

            if (resposta_correta === answer)
            {
                pontos += 1;
                $('.pontos').html("Pontos: " + pontos);
            }
        });

        // Incrementa pergunta
        num_pergunta += 1;
        $('.souburro').html("Questão número: " + (num_pergunta));

        // Desseleciona a resposta selecionada
        var elements = $('.click');
        elements.each(function ()
        {
            $(this).removeClass('selected');
        });
        db.download("/", function (data)
        {
            $('.pergunta').html(data["perguntas"][num_pergunta]['pergunta']);
            $('.resp1').html(data["perguntas"][num_pergunta]['respostas'][0]);
            $('.resp2').html(data["perguntas"][num_pergunta]['respostas'][1]);
            $('.resp3').html(data["perguntas"][num_pergunta]['respostas'][2]);
            $('.resp4').html(data["perguntas"][num_pergunta]['respostas'][3]);
        });
    });

    $('.dropdown-trigger').dropdown({
        closeOnClick: false,
    });
});