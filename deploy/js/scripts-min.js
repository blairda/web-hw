var $menu=$("#menu-icon"),$nav=$("nav[data-nav]"),$navA=$("nav[data-nav] a"),isVisible=!1;function mouseClick(){console.log("click"),!1===isVisible?($nav.show(),isVisible=!0):($nav.hide(),isVisible=!1)}$menu.on("click",mouseClick),$navA.on("click",mouseClick);