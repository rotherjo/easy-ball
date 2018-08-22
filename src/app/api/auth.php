<?php

if (isset($_POST) && !empty($_POST)) {
    $nutzer = $_POST['nutzer'];
    $pw = $_POST['pw'];

    if ($nutzer == 'admin' && $pw == 'admin') {
        ?>
        {
        	"success": true,
        	"secret": "Nur der Admin kennt diese Zugangsdaten!"
        }
    	<?php
    } else {
        ?>
        {
        	"success": false,
        	"secret": "Ungültige Zugangsdaten"
        }
        <?php
    }
} else {
    ?>
    {
    	"success": false,
    	"secret": "Nur POST Zugang ist erlaubt, kein Direktlink"
    }
    <?php
}
?>