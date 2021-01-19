<?php
funciton has_header_injection($str){
  return preg_match("/[\r\n]/", $str);
}
if(isset ($_Post["contact-form "])){
  $fullname = trim($_Post['fullname']);
  $eml = trim($_Post['eml']);
  $msg = $_Post['message'];

if(has_header_injection($fullname || $eml)){
  die();
}
  if(!$fullname || !$eml ||  !$msg){
    echo '<h3 class="error">this filed is requied</h3>
    <a href=""#contact-section" class="button block">Please try agian!</a>';
    exit;
  }

  $mailTo = "heartofgrafx@gmail.com";

  $subject = ".$fullname send job";

  $message = "fullName: $fullname\r\n";
  $message .= "email: $eml\r\n\";
  $message .= "yourMessage: \r\n $msg";

 $message = wordwrap($message, 50);

  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  $headers .= "name: $fullname\r\n";
  $headers .= "X-priority: 1\r\n";
  $headers .= "X-MSMail-Priority: High\r\n";

  if(mail($mailTo, $subject, $message, $headers)){
    echo '<h3>Thank You</h3>';
  }
  header('refresh 1; url=https://liamohth.github.io/Resume/');
}
?>
