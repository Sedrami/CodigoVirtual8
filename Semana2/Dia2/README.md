# Posicionamiento en CSS
## `position:relative;`

-Puedo mover al elemento con 2 ejes de referencia:
 - top: cantidad de pixeles desde el extremo superior
 - left: cantidad de pixeles desde el extremo izquierdo
-Si el elemento es movido, su espacio original se respeta por los demas elementos
-Un elemento tambien puede tener `position:relative` cuando tiene hijos con `position:absolute` de tal forma que, dichos hijos, no se salgan del area del padre

## `position:absolute;`

-El elemento sale del contexto de los demas elementos (tiene el efecto de flotar sobre los demas elementos)
-Los elementos que no tienen `position:absolute;` ocupan el espacio de este elemento
 - top, left, right y bottom
-Obligatorimente, debemos especificar, al menos 2  ejes de referencia
-El elemento `absolute` se mueve con referencia al proximo padre que tenga `position:relative`
-De no cumplirse el anterior punto, el padre de referencia, seria el elemento HTML

## `position:fixed;`

-El elemento es posicionado con referencia al Viewport (el area de visualizacion de la pagina)
-Se puede anclar con 4 puntos de referencia: top, left right y bottom