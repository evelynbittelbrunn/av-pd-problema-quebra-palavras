function quebraPalavras(texto, dicionario) {
    const n = texto.length;
    const custo = new Array(n + 1).fill(Infinity);
    custo[0] = 0;
    const quebra = new Array(n + 1).fill(-1); 
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            const palavra = texto.slice(j, i);
            if (dicionario.has(palavra)) {
                if (custo[j] + 1 < custo[i]) { 
                    custo[i] = custo[j] + 1;
                    quebra[i] = j;
                }
            }
        }
    }

    console.log(custo);
    console.log(quebra);

    const palavrasQuebradas = [];
    let idx = n;
    while (idx !== -1) {
        const palavra = texto.slice(quebra[idx], idx);
        palavrasQuebradas.unshift(palavra);
        idx = quebra[idx];
    }

    return { palavrasQuebradas, custoMinimo: custo[n] };
}

// Exemplo de uso
const texto = "programacaodinamica";
const dicionario = new Set(["pro", "grama", "cao", "dinamica", "programacao", "programa"]);

const resultado = quebraPalavras(texto, dicionario);
console.log("Palavras quebradas:", resultado.palavrasQuebradas);
console.log("Custo mínimo:", resultado.custoMinimo);
