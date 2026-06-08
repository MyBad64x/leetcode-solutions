### Descrição
Dado um número inteiro `n`, retorne uma função contadora que inicialmente retorna `n` e depois incrementa 1 a cada nova chamada.

* **Dificuldade:** Fácil
* **Conceito Chave:** Closures & Escopo de Funções

### Solução e Aprendizado
A resolução explora o conceito de **Closure** no JavaScript, onde a função interna mantém a referência e o acesso ao escopo da função pai mesmo após a execução inicial. Utilizei o operador de pós-incremento (`return n++`) para retornar o valor atual e incrementá-lo logo em seguida de forma limpa e performática.