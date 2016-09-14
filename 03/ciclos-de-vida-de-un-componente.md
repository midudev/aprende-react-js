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



componentWillMount ↦ componentDidMount ↦ *render*


### render




```js
ReactElement render ()
```
