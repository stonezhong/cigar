<?php
require_once( "vendor/autoload.php" );

$loader = new Twig_Loader_Filesystem(array(__DIR__ . '/templates', __DIR__ . '/js'));
$twig = new Twig_Environment($loader, array(
    'debug' => true,
    'cache' => __DIR__ . '/twig_cache',
    'auto_reload' => true,
));
$twig->addExtension(new Twig_Extension_Debug());

echo $twig->render('run-example.twig.html', array('example' => $_GET['example']));
?>

