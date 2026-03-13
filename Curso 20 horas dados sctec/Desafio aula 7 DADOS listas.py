#Desafio aula 7 DADOS sctec
# 1. Criar uma lista de frutas
frutas = ["maça", "banana", "laranja", "uva"]


# 2. Usar lista
print("\Desafio aula 7 DADOS - lista de frutas:")
for fruta in frutas:
    print(fruta)


# 3. Aplicar pilha - LIFO
pilha = []

pilha.append("maça")
pilha.append("banana")
pilha.append("laranja")
pilha.append("uva")

print("\nPilha:")
print(pilha)

# remove o último
pilha.pop()

print("Pilha após pop:")
print(pilha)


# 4. Aplicar fila - FIFO
fila = []
fila.append("maça")
fila.append("banana")
fila.append("laranja")
fila.append("uva")
print("\nFila:")
print(fila)

# remover o primeiro
fila.pop(0)

print("Fila após remover o primeiro:")
print(fila)


# 5. Imprimir somente maçã e laranja
print("\nSomente maçã e laranja:")

for fruta in frutas:
    if fruta == "maça" or fruta == "laranja":
        print(fruta)