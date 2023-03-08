Aquí iré añadiendo información relevaante, para poder ubicarnos a lo largo de los proyectos y temas que vayamos desarrollando

## Comandos
  ###### npm create vite@latest :
  Este comando nos permitirá crear un proyecto de Vite, podemos seguir las intrucciones... Si hay problemas al ejecutar el comando puede ser problemas
  con la red a la que estemos conectados... Hay un comando por ensayar que sería ***npm config rm proxy*** y luego ejecutamos 
  ***npm config rm https-proxy***  
  
  Antes de ejecutar los siguientes comandos, debemos de movernos al directorio creado
  
  ###### npm install :
  Instalar las dependencias
  
  ## Paginas web importantes como recurso 
     
  ##### unavatar.io:
  Avatares
      
  ##### heroicons.com:
  Iconos
      
##### chakra-ui.com:
  Estilos y componentes para React ***Recomendada***
    
    
    
## Comentarios

-Podemos pasar funciones como props, de padre a hijo

-Tambien podemos pasar elementos

-Las props deben de ser inmutables, sí necesitamos cambiar el valor de la prop, lo que hacemos es crear una const o variable le asignamos el valor de 
la prop y ya le damos el tratamiento

-Podemos asignar valores por defecto en los componentes, asignandoles un valor a las props en donde son recibidas

-Podemos pasar props como objetos, no es lo normal pero se puede ***Es medio mala practica ***

     function App () {
     const alejo = {isFolowing: true, userName: 'Alejo'}
     
     return (
      <section calssName="App">
        <TwitterFollowCard {...alejo}
          Alejandro R.
        </TwitterFollowCard>
      </section>