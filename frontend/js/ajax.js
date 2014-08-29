
/* REGISTRATION FORM */

function registration(form_data){
    $.ajax({
        type : "POST",
        url : "/register",
        dataType : 'json',
        data: form_data,
        success : function(data) {
            console.log(data)
        },
        error : function(xhr, ajaxOptions, thrownError) {
            alert("Failed to add task!");
        },
        async : false
    });
}


