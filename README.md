# Padrão de desenvolvimento

Padrão para desenvolvimento de sites simples.

## Requisitos

Para utilizar o padrão é necessario:

`Gulp` , `Node` , `PHP` , `SASS`

## Instalação

Para instalar siga as intruções abaixo.

1) Clone o repositório para sua maquina e altere o nome da pasta seguindo o padrão (nome do projeto + dev) Ex: `nomedoprojetodev`

2) Execute o comando abaixo para instalar todas as dependencias do projeto

```
npm install
```

3) Abra o arquivo gulpfile.js e edite a variavel `host` definindo o url padrão do projeto seguindo o nome da pasta EX: se a pasta chama `nomedoprojetodev` a variavel host recebe o seguinte valor `nomedoprojeto.dev` aonde `nomedoprojeto` é o nome do projeto e `dev` é a deinifição de que o projeto é local

4) Execute o comando gulp install-project (caso peça senha, digite a senha do seu computador) para instalar o projeto no seu virtualhost

## Task

Tarefas programadas para a inicialização do trabalho

### Iniciar Servidor

Para iniciar o servidor e qualquer mudança atualizar a pagina execute o comando

```
gulp watch
```

### Compilar arquivos

Para compilar os arquivos rode apenas a task

```
gulp
```

## Checklists

Alguns padrões que devemos seguir no desenvolvimento de projetos

### Botões com loading

Para informar o usuario de que ao clicar em um botão, esta carregando uma ação utilize a seguinte syntax no botão

```
data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Carregando..."
```

### Google Analytics

Sempre configurar o Google Analytics após a criação do projeto, subistituindo no arquivo **index.php** o trecho `id-do-cliente` pelo id de acompanhamento gerado.

## Plugins

Utilize os seguintes plugins para o desenvolvimento caso necessario

### Fancybox

Utilizamos o plugin **Fancybox** para a exibição de imagens como galeria

* [FANCYBOX](http://fancyapps.com) - Site do plugin
* [FANCYBOX](http://fancyapps.com/fancybox/3/docs/) - Documentação

Utilização

**Tag Data**

```
data-fancybox
```

ou

**Jquery**

```
$("elemento").fancybox();
```

### SweetAlerts

Utilizamos o plugin **SweetAlerts** para a exibição de alertas personalizados

* [SWAL](https://sweetalert.js.org/) - Site do Plugin
* [SWAL](https://sweetalert.js.org/docs/) - Documentação

Utilização

```
swal("Titulo","Descrição","tipo-de-alerta");
```

### Flickity

Utilizamos o plugin **Flickity** para a criação de sliders

* [FLICKITY](https://flickity.metafizzy.co/) - Site do Plugin
* [FLICKITY](https://flickity.metafizzy.co/style.html) - Documentação de customização visual
* [FLICKITY](https://flickity.metafizzy.co/options.html) - Documentação de opções

Utilização

**Tag Data**
```
data-flickity='{}'
```

ou

**Jquery**

```
$('elemento').flickity();
```

## Tecnologias

* [NPM](https://www.npmjs.com/) - Package Manager
* [NODEJS](https://nodejs.org/) - Javascript Engine
* [GULP](https://gulpjs.com/) - Workflow Automation
* [SASS](http://sass-lang.com/) - CSS Preprocessor

## Autores

* **João Vitor de Oliveira** - *Desenvolvedor do Padrão* - [GITHUB](https://github.com/joaoskr)