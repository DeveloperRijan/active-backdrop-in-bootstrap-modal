/* ## Show the backdrop  - must wrap your modal by 
<div class="modal-backdrop">
	yourModalHere
</div>
=====================================================
##
*/

$('<div class="modal-backdrop"></div>').appendTo(document.body);


/*
## Remove it (later)
================================================================
*/

$(".modal-backdrop").remove();



/*
## Use Color in backdrop by css
*/
.modal-backdrop{
backgroud-color: YOUR_COLOR
}

/*
## or Use Color in backdrop by js/jquery
*/
$(".modal-backdrop").css('backgroud-color', 'Your_Color_Code')

/*
## or add class to add color in backdrop
*/
$(".modal-backdrop").addClass('Your_Class_Name')




