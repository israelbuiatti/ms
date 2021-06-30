<?php
//$conn = new PDO('mysql:host=grupopeggy.com.br;dbname=israelap_db','israelap_user','user123',array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
//$conn = new PDO('mysql:host=agenciacolibri.com.br;dbname=gbadv_db','gbadv_user','brigido@#2017',array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
$conn = new PDO('mysql:host=192.185.176.138;dbname=buiat309_site2','buiat309_user','q1w2e3r4',array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));


$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ); 
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);




?>