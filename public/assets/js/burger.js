//Devour Button Click
$(document).on('click', '.devourBurger', function() {
    let id = $(this).data('burgerid');

    let newState = {
        devour: 1
    };

    //PUT Request
    $.ajax('/api/burgers/' + id, {
        type: 'PUT',
        data: newState
    }).then(
        function() {
            location.reload();
        }
    );
});

//Create Button Click
$('.create-form').on('submit', function(event) {
    event.preventDefault();

    let newBurger = {
        name: $('#bg').val().trim()
    };

    //POST Request
    $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
    }).then(
        function() {
            location.reload();
        }
    );
});