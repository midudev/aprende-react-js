# Ciclos de vida de un componente de React

Una de las características más interesantes de React, y que seguramente más problemas de concepto provoca entre los desarrolladores, son los ciclos de vida de sus componentes.

¿Pero que es el ciclo de vida de un componente? Para entenderlo rápidamente, digamos que los componentes de React están en diferentes etapas desde que se inicia su vida hasta que desaparece, pasando por todas las actualizaciones que recibe.

Para que entendamos perfectamente a que nos referimos con el ciclo de vida, podemos pensar en el videojuego Pong.

##### Primer renderizado  
getDefaultProps -> getInitialState -> componentWillMount -> render -> componentDidMount

##### Se le pasan nuevas _props_
componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate

##### Cambia el _state_ del componente  
shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate

##### El component se va a desmontar
componentWillUnmount

React nos da la posibilidad de ejecutar código en los diferentes ciclos de vida de los componentes, de formas que podamos controlar completamente  

Todos los componentes de React tienen un ciclo de vida realmente complicado, la propia naturaleza
de React hace que este sea de esta manera. Para facilitarnos la vida React nos provee de una serie
de eventos para capturar y actuar en determinados puntos de este ciclo de vida. Realmente son
solo 7 puntos de captura, los cuales podemos dividir por puntos de construcción, actualización y
destrucción.
A continuación podrás descubrir cuales son y para utilizarlos solo tendrás que incluirlos dentro de
la definición de tu componente.

componentWillMount ↦ componentDidMount ↦ *render*


### render




```js
ReactElement render ()
```
