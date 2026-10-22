/**
 * Função de Exponenciação Modular Rápida (Square-and-Multiply)
 * Calcula (base^expoente) % modulo de forma eficiente em O(log expoente),
 * evitando estouro de memória com números grandes.
 *
 * @param {BigInt} base
 * @param {BigInt} expoente
 * @param {BigInt} modulo
 * @returns {BigInt}
 */
function expModular(base, expoente, modulo) {
  if (modulo === 1n) return 0n;

  let resultado = 1n;
  base = base % modulo;

  while (expoente > 0n) {
    // Se o bit menos significativo do expoente for 1 (expoente ímpar)
    if (expoente % 2n === 1n) {
      resultado = (resultado * base) % modulo;
    }
    // Divide o expoente por 2 (deslocamento de bit à direita)
    expoente = expoente >> 1n;
    // Eleva a base ao quadrado módulo p
    base = (base * base) % modulo;
  }

  return resultado;
}

// ============================================================================
// 1. PARÂMETROS PÚBLICOS (Acordados entre Alice e Bob)
// ============================================================================
// p: Número primo grande (10 dígitos)
const p = 1000000007n;

// g: Raiz primitiva módulo p (verificada via WolframAlpha: primitiveroot 1000000007)
const g = 5n;

// ============================================================================
// 2. CHAVES PRIVADAS (Secretas - nunca trafegam na rede)
// ============================================================================
const a = 500000018n; // Chave privada de Alice
const b = 500000019n; // Chave privada de Bob

// ============================================================================
// 3. CÁLCULO DAS CHAVES PÚBLICAS (Enviadas pelo canal inseguro)
// ============================================================================
// Alice calcula A = (g^a) mod p e envia para Bob
const A = expModular(g, a, p);

// Bob calcula B = (g^b) mod p e envia para Alice
const B = expModular(g, b, p);

// ============================================================================
// 4. CÁLCULO DO SEGREDO COMPARTILHADO (s)
// ============================================================================
// Alice recebe B de Bob e calcula s_Alice = (B^a) mod p
const s_Alice = expModular(B, a, p);

// Bob recebe A de Alice e calcula s_Bob = (A^b) mod p
const s_Bob = expModular(A, b, p);

// ============================================================================
// EXIBIÇÃO DOS RESULTADOS DA ATIVIDADE
// ============================================================================
console.log("=== PROTOCOLO DIFFIE-HELLMAN (DH) ===");
console.log(`Parâmetro público p (primo)          : ${p.toString()}`);
console.log(`Parâmetro público g (raiz primitiva) : ${g.toString()}`);
console.log("-------------------------------------");
console.log(`Chave privada de Alice (a)           : ${a.toString()}`);
console.log(`Chave privada de Bob (b)             : ${b.toString()}`);
console.log("-------------------------------------");
console.log(`Chave pública de Alice (A = g^a % p) : ${A.toString()}`);
console.log(`Chave pública de Bob (B = g^b % p)   : ${B.toString()}`);
console.log("-------------------------------------");
console.log(`Segredo calculado por Alice (s)      : ${s_Alice.toString()}`);
console.log(`Segredo calculado por Bob (s)        : ${s_Bob.toString()}`);
console.log(
  `Troca bem-sucedida?                  : ${s_Alice === s_Bob ? "SIM" : "NÃO"}`
);
