<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos enviados por el formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Datos del destinatario del correo
    $to = "johannramos4322@gmail.com"; // Reemplaza con tu dirección de correo
    $subject = "Mensaje de: " . $name . " - " . $subject;

    // Crear el cuerpo del correo
    $body = "Nombre: " . $name . "\n";
    $body .= "Correo: " . $email . "\n\n";
    $body .= "Mensaje:\n" . $message . "\n";

    // Cabeceras del correo
    $headers = "From: " . $email;

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
