// import { areaRetangulo } from './retangulo';
// import { areaCircuferencia } from './circunferencia'
import retangulo from './retangulo';
import { areaCircuferencia as circ } from './circunferencia';

console.log('Módulo carregado...')
console.log(retangulo(7, 8))
console.log(circ(2))

const { digaOi} = require('./novo')
console.log(digaOi('Ana'))

