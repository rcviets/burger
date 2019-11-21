//Devour Button Click
$('.devourBurger').on('click', function() {
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