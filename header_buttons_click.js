        function headerButtonsClick() {
          var menu = document.getElementById("menu");
          var content_container = document.getElementById("content_container");
          var menuButton = document.getElementById("menu_button");
          var closeButton = document.getElementById("close_button");
          if (menu.style.display === "block") {
            menu.style.display = "none";
            content_container.style.display = "block";
            menuButton.style.display = "block";
            closeButton.style.display = "none";
          } else {
            menu.style.display = "block";
            menu.scrollTop = 0;
            content_container.style.display = "none";
            menuButton.style.display = "none";
            closeButton.style.display = "block";
          }
        }