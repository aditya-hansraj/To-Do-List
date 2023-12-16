$(document).ready(() => {
    const input = $("#input");
    const list = $("#list");

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
        li.html(`<p>${newtask}<p>`);
        li.append(cross);
        li.hide().appendTo(list).slideDown(function(){
            saveData();
        });
        input.val('');
        
    });

    $("span").click(function(){
        $(this).parent().remove();
    })

    list.on("click", "li", function() {
        $(this).toggleClass('checked unchecked');
        saveData();
    });

    list.on("click", "span", function() {
        $(this).parent().slideUp(400, function() {
            $(this).remove();
            saveData();
        });
    });

    getData();
});