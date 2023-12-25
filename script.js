$(document).ready(() => {
    check();
    getData();
    
    const input = $("#input");
    const list = $("#list");

    function check(){
        if($('#list li').length > $('.checked').length)
            $('#check').text("Check All");
        else
            $('#check').text("Uncheck All");
    }

    function saveData() {
        localStorage.setItem("data", list.html());
    }

    function getData() {
        list.html(localStorage.getItem("data"));
    }

    $("#add").submit(function(event) {
        event.preventDefault();

        var newTask = input.val();
        var li = $("<li class='unchecked'>");
        var cross = $("<span>")
        cross.html("\u00d7");
        li.html(`<p>${newTask}</p>`);
        li.append(cross);
        li.hide().appendTo(list).slideDown(function(){
            saveData();
        });
        check();
        input.val('');
        
    });

    list.on("click", "li", function() {
        $(this).toggleClass('checked unchecked');
        check();
        $("#opt ul").fadeOut('fast');
        saveData();
    });

    list.on("click", "span", function() {
        $(this).parent().slideUp(400, function() {
            $(this).remove();
            check();
            $("#opt ul").fadeOut('fast');
            saveData();
        });
    });

    $("#opt i").click(function(event) {
        event.stopPropagation();
        $("#opt ul").fadeIn('fast');
    })

    $(document).on('click', ':not(opt)', function(event){
        if (!$(event.target).closest('ul').length) {
            $("#opt ul").fadeOut('fast');
        }
    })

    $("#check").click(function() {
        if($('#list li').length > $('.checked').length){
            $('#list li').attr('class', 'checked'); 
            $('#check').text("Uncheck All");
        }else{
            $('#list li').attr('class', 'unchecked'); 
            $('#check').text("Check All");
        }
        $("#opt ul").fadeOut('fast');

        saveDate();
    });

    $("#clear").click(function() {
        $('#list').html('');
    });

    getData();
    
});
