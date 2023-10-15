<?php
require_once 'DB.php';
require_once 'Celebrity.php';

DB::connect(
    'localhost',
    'celebrities',
    'root',
    ''


);
$celebrities = DB::select('
    SELECT *
    FROM `celebrities`
    ORDER BY `name` ASC
    LIMIT 5, 20
', [], 'Celebrity');

// Set JSON headers
header('Content-Type: application/json');

// Encode and output the JSON response
$jsonResponse = json_encode($celebrities);
echo $jsonResponse;

?>

///this should just be the spot that you are pulling data from the database and then sending it as json to create your endpoint