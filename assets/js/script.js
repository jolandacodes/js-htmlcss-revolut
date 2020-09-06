$(document).ready(function(){

    var dropDown = $("li.dropdown");

    // Select the element that will be clicked

    $(dropDown).click(function(){

    // Creates a click event when that selected element is clicked

        var $clickedDropdown = $(this).find('.dropdowncontent');

        // Tells it to find the div 'dropdowncontent' of the selected element

        if ($clickedDropdown.hasClass('show')) {
          $clickedDropdown.removeClass('show');

        //  If it has the class, clicking will remove it
        } else if ($('.dropdowncontent').hasClass('show')) {
          $('.dropdowncontent').removeClass('show');
          $clickedDropdown.addClass('show'); 

        //   If any  div with the class 'dropdowncontent' has the class show remove it, than add the class to this specific div,
        } else {
          $clickedDropdown.addClass('show');
        }

        // if no element has the class show, add it to this specific element
    

    });







});