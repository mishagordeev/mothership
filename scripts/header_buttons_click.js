        function menuButtonClick() {
          let menu = document.getElementById("menu")
          let content = document.getElementById("root")
          let menuButton = document.getElementById("menu_button")
          let closeButton = document.getElementById("close_button")
          let wrapper = document.getElementById("wrapper")
          if (closeButton.classList.contains("inactive")) {

            closeButton.classList.remove("inactive")
            menuButton.classList.add("inactive")
            menu.classList.remove("inactive")
            menu.scrollTop = 0;
            content.classList.add("inactive")
            wrapper.classList.add("menu_color")
            window.scrollTo(0,0)

          } else {

            closeButton.classList.add("inactive")
            menuButton.classList.remove("inactive")
            menu.classList.add("inactive")
            content.classList.remove("inactive")
            wrapper.classList.remove("menu_color")   

          }
        }