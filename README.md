# diffie-hellman

Atividade sobre Diffie-Hellman (DH) desenvolvida na disciplina Segurança em Sistemas de Informação.

## Requisitos

- Node.js instalado no sistema

## Execução

No terminal, dentro da pasta do projeto, execute:

```bash
node "node diffie_hellman.js"
```

## O que a execução mostra

O script calcula:

- os parâmetros públicos `p` e `g`
- as chaves privadas de Alice e Bob
- as chaves públicas geradas por cada participante
- o segredo compartilhado calculado por ambos
- uma validação de sucesso da troca de chaves

Ao final, a saída deve indicar que a troca foi bem-sucedida (`Troca bem-sucedida? : SIM`).

## Como foi implementado

Código gerado com o `Gemini AI`, da Google. O modelo utilizado foi o `Argon` com nível de raciocínio no máximo.

Prompt usado:

```
"Você é um especialista em Segurança em Sistemas de Computação. Você me ajudará com atividades práticas da disciplina na universidade. Preciso que me explique didaticamente o que cada atividade pede e depois implemente o que é pedido em JAVASCRIPT.

Atividade Diffie-Hellman (DH)

Implementar um DH (Diffie-Hellman) para compartilhamento de segredo (valor de s).

Enviar o código e valores das variáveis escolhidos (p, g, a, b, e calculados, como o A e B)

p -> número primo

g -> raíz primitiva módulo p

Dado um valor p (primo grande!), a raíz primitiva pode ser encontrada até pelo site (exemplo de p=23) https://www.wolframalpha.com/input?i=primitiveroot+23

https://pt.wikipedia.org/wiki/Raiz_primitiva_m%C3%B3dulo_n "
```
