<?php
    require("assets/php/functions.php");

    $functions = new functions();
?>

<!doctype html>
<html class="no-js" lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">

        <link rel="stylesheet" href="assets/styles/styles.min.css">
    </head>
    <body>
        
        <?php echo $functions->Paginas('Home'); ?>
        
        <!-- OUTDATED BROWSERS -->
        <div id="outdated"></div>
        <!-- OUTDATED BROWSERS -->

        <script async src="https://www.googletagmanager.com/gtag/js?id=id-do-cliente"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

         gtag('config', 'id-do-cliente');
        </script>
        <script src="assets/scripts/main.min.js"></script>
    </body>
</html>
