# Propriedades da Álgebra Booleana

## Referência dessa página

[Aula 11 - Propriedades da Álgebra Booleana](https://youtu.be/Px3W4QHfrHc?si=waJE4k-qr-eVyX7_)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Px3W4QHfrHc?si=waJE4k-qr-eVyX7_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Função lógica AND

- A . 0  = 0 (0 AND 0 = 0; 1 AND 0 = 0)
- A . 1  = A (0 AND 1 = 0; 1 AND 1 = 1)
- A . A  = A (0 AND 0 = 0; 1 AND 1 = 1)
- A . A' = 0 (1 AND 0 = 0; 0 AND 1 = 1)


## Função lógica OR

- A + 0  = A (0 OR 0 = 0; 1 OR 0 = 1)
- A + 1  = 1 (0 OR 1 = 1; 1 OR 1 = 1)
- A + A  = A (0 OR 0 = 0; 1 OR 1 = 1)
- A + A' = 1 (0 OR 1 = 1; 1 OR 0 = 1)

## Função lógica NOT

- A'' = A (NOT NOT 0 = 0; NOT NOT 1 = 1)


## Função lógica XOR

- A XOR 1  = A' (0 XOR 1 = 1; 1 XOR 1 = 0)
- A XOR 0  = A  (0 XOR 0 = 0; 1 XOR 0 = 1)
- A XOR A  = 0  (0 XOR 0 = 0; 1 XOR 1 = 0)
- A XOR A' = 1  (0 XOR 1 = 1; 1 XOR 0 = 1)


## Propriedades Comutativas

- A + B = B + A (tanto faz a ordem das entradas)
- A . B = B . A


## Propriedades Associativas

- A + (B + C) = (A + B) + C = (A + C) + B
- A (BC) = (AB)C


## Propriedades Distributivas

- A . (B + C) = AB + AC
- (A + B) . (C + D) = AC + AD + BC + BD


## Propriedades de Morgan

- (A + B)' = A' . B'
- (A . B)' = A' + B'