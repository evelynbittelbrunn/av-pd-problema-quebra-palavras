function wordBreak(texto, dicionario) {
    const n = texto.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;

    // console.log(dp);

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && dicionario.includes(texto.substring(j, i))) {
                console.log(i);
                console.log(j);
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
}

// Exemplo de uso:
const texto = "tvplasma";
const dicionario = ["tv", "plasma"];

console.log(wordBreak(texto, dicionario)); // Saída: true