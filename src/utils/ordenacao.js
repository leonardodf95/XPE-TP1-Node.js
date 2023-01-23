export function ordenacao(array){
    if(array.length === 0) return [];
    if(array.length === 1) return array;

    let comparacao = array[0];

    let maiores = array.filter(x => x.models.length > comparacao.models.length);
    let iguais = array.filter(x => x.models.length === comparacao.models.length);
    let menores = array.filter(x => x.models.length < comparacao.models.length)

    iguais.sort((a,b) => {
        return a.brand < b.brand ? -1 : a.brand > b.brand ? 1 : 0;
    })

    return ordenacao(maiores).concat(iguais).concat(ordenacao(menores))
}

export function ordenacaoInversa(array){
    if(array.length === 0) return [];
    if(array.length === 1) return array;

    let comparacao = array[0];

    let maiores = array.filter(x => x.models.length > comparacao.models.length);
    let iguais = array.filter(x => x.models.length === comparacao.models.length);
    let menores = array.filter(x => x.models.length < comparacao.models.length)

    iguais.sort((a,b) => {
        return a.brand < b.brand ? -1 : a.brand > b.brand ? 1 : 0;
    })

    return ordenacaoInversa(menores).concat(iguais).concat(ordenacaoInversa(maiores))
}
