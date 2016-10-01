<?php
require_once( "vendor/autoload.php" );

$loader = new Twig_Loader_Filesystem(__DIR__ . '/templates');
$twig = new Twig_Environment($loader, array(
    'debug' => true,
    'cache' => __DIR__ . '/twig_cache',
    'auto_reload' => true,
));
$twig->addExtension(new Twig_Extension_Debug());

$examples = array(
    'hello-world' => "Let's start with a simple example",
    'sequential'  => 'Run statement one by one sequentially',
    'if'          => 'basic control flow: IF ... THEN ... ELSE ...',
    'for'         => 'loop with FOR(init expression, condition expression, step expression).DO(...)',
    'continue'    => 'continue: jump to the end of the loop',
    'break'       => 'break out from a loop',
    'try1'        => 'use TRY ... CATCH ... FINALLY to catch exception',
    'try2'        => 'use TRY ... CATCH ... FINALLY to catch exception',
    'parallel'    => 'use PARA to launch fibers',
    'ajax-01'     => 'make ajax call',
);


echo $twig->render('index.twig.html', array('examples' => $examples));
?>

