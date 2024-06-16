function calcularRanking(vitorias, derrotas) {
    // Calcula o saldo de partidas rankeadas
    let saldoVitorias = vitorias - derrotas;

    // Definindo os intervalos de vitórias para cada nível
    const niveis = [
        { nome: "Ferro", min: 0, max: 9 },
        { nome: "Bronze", min: 10, max: 20 },
        { nome: "Prata", min: 21, max: 50 },
        { nome: "Ouro", min: 51, max: 80 },
        { nome: "Diamante", min: 81, max: 90 },
        { nome: "Lendário", min: 91, max: 100 },
        { nome: "Imortal", min: 101, max: Infinity }
    ];

    // Determina o nível baseado na quantidade de vitórias usando um loop for
    let nivel = "Ferro"; // Nível inicial caso não haja correspondência nos intervalos

    for (let i = 0; i < niveis.length; i++) {
        if (saldoVitorias >= niveis[i].min && saldoVitorias <= niveis[i].max) {
            nivel = niveis[i].nome;
            break; // Sai do loop assim que encontrar o nível correto
        }
    }

    // Retorna a mensagem formatada com o saldo de vitórias e o nível
    return "O Herói tem saldo de " + saldoVitorias + " está no nível de " + nivel;
}

// Exemplo de uso da função
let resultado = calcularRanking(50, 25);
console.log(resultado); // Saída