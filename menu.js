$('body').on('click', function(event){

var  $menu = $('#menu'),
     $target = $(e.target);

//если кликнули в любом другом месте, вне меню - скрываем его
if (!$menu.find($target).length) $menu.hide();

});