# To-Do-List
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <style>
      *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
      }
      #container{
          width: 100%;
          min-height: 100vh;
          background-color: rgb(206, 202, 202);
          padding: 20px;
      }
      #todo{
          background-color: rgb(193, 191, 191);
          width: 100%;
          max-width: 650px;
          min-width: 550px;
          margin: 120px auto 30px;
          padding: 50px 40px 90px;
          border-radius: 30px;
          box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.479);
          transition: height 0.3s ease;
      }
      #todo h2{
          color: rgb(33, 33, 33);
          margin: 30px 15px;
          font-size: 2.5em;
          user-select: none;
          font-weight: 900;
      }
      #add{
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #edeef0;
          padding-left: 30px;
          margin-bottom: 40px;
          border-radius: 40px;
          box-shadow: -9px 9px 15px rgba(0, 0, 0, 0.488);
      }
      #add input[type="text"]{
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 1.2em;
          padding: 20px;
      }
      #add button{
          border: none;
          outline: none;
          width: 70px;
          height: 70px;
          font-size: 4em;
          font-weight: 900;
          color: rgb(227, 227, 227);
          background-color: rgb(32, 32, 32);
          border-radius: 50%;
          cursor: pointer;
          user-select: none;
      }
      #list li{
          list-style: none;
          font-size: 1.4em;
          padding: 15px 15px 15px 45px;
          user-select: none;
          position: relative;
          user-select: auto;
          outline: none;
      }
      li span{
          position: absolute;
          right: 10px;
          top: 10%;
          cursor: pointer;
          width: 40px;
          height: 40px;
          font-size: 22px;
        user-select: none;
        line-height: 40px;
        text-align: center;
        border-radius: 50%;
    }
    li span:hover{
        color: red;
        background-color: #edeef0;
    }
    #list li:not(:last-child)::after {
        content: '';
        display: block;
        height: 1px; 
        background-color: #000;
        margin-top: 10px; 
    }
    #list li::before{
        content: '';
        position: absolute;
        height: 28px;
        width: 28px;
        border-radius: 50%;
        background-image: url(imgs/unchecked.png);
        background-size: cover;
        background-position: center;
        left: 0;
        cursor: pointer;
    }
    #list .checked{
        text-decoration: line-through;
        color: rgba(0, 0, 0, 0.500);
    }
    #list .checked::before{
        content: '';
        position: absolute;
        height: 28px;
        width: 28px;
        border-radius: 50%;
        background-image: url(imgs/checked.png);
        background-size: cover;
        background-position: center;
        left: 0;
        cursor: pointer;
    }
    </style>
</head>
<body>
    <div id="container">
        <div id="todo">
            <h2>To-Do List <span style="text-shadow: 1px 4px 4px black;">&#128195;</span></h2>
            <form id="add" action="#">
                <input type="text" name="" id="input" placeholder="Enter items to add in the list" required>
                <button type="submit">+</button>
            </form>
            <ul id="list">
                <!-- <li class="checked">PME Assignment 1<span>&#xD7;</span></li> -->
            </ul>
        </div>
    </div>
  <script>
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
        li.text(newTask);
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
  </script>
</body>
</html>
