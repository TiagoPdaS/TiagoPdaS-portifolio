<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $assunto = $_POST['assunto'];
  $mensagem = $_POST['mensagem'];

  $destinatario = 'tiagoeuabrasil@gmail.com';
  $assunto_email = 'Novo contato pelo formulário de contato';
  $corpo_email = "nome: $nome\n";
  $corpo_email .= "email: $email\n";
  $corpo_email .= "mensagem: $mensagem\n";

  if (mail($destinatario,  $corpo_email)) {
    http_response_code(200);
    echo 'success';
  } else {
    http_response_code(500);
    echo 'error';
  }
} else {
  http_response_code(403);
  echo 'Forbidden';
}
?>