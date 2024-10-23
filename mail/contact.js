$(document).ready(function () {
    $("#sendMessageButton").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();

        // Validar que los campos estén completos
        if (name && email && subject && message) {
            $.ajax({
                url: "send_email.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                },
                success: function (response) {
                    if (response === "success") {
                        $('#success').html("<div class='alert alert-success'>Mensaje enviado correctamente.</div>");
                        $('#contactForm').trigger("reset"); // Reiniciar el formulario
                    } else {
                        $('#success').html("<div class='alert alert-danger'>Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.</div>");
                    }
                },
                error: function () {
                    $('#success').html("<div class='alert alert-danger'>Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.</div>");
                }
            });
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});
