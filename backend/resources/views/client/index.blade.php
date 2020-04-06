<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<h1>il s'agit ici du client numero:<?php  echo($numero); ?> </h1>
<h1>il s'agit ici du client numero:{{$numero}} </h1>
    <ul>
        <?php foreach($client as $cli): ?>
            <li><?=  $cli ?></li>
        <?php  endforeach; ?>
    </ul>
</body>
</html>