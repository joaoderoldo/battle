<?php
class functions{

	/**
     * Carrega as paginas na index
     * @param  $link - Nome do arquivo no diretorio paginas/
     * @return conteudo da pagina.
     */

	public function Paginas($link){

		if(isset($_GET['pagina'])){
			$url = $_GET['pagina'];
		}
		
		if($link == 'Home' or $link == ''){
			if(!isset($url)){
				include('assets/views/home.php');
			}else{
				if(file_exists('assets/views/'.$url.'.php')){
					include('assets/views/'.$url.'.php');
				}else{
					include('assets/views/404.php');
				}
			}
		}

	}

}
?>