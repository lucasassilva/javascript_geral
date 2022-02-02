function somar (n1, n2) {
    const resultado = n1 + n2;
    if(!isNaN(resultado)) {
        return null;
    }
    return resultado;
}

module.exports = somar;