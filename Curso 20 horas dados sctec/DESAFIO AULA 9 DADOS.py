#DESAFIO AULA 9 DADOS
# Contador de números pares

# 1. Solicitar ao usuário o início e o fim do intervalo
inicio = int(input("Digite o número inicial: "))
fim = int(input("Digite o número final: "))

print("Números pares no intervalo:")

# 2. laço FOR para percorrer o intervalo
for numero in range(inicio, fim + 1):

    # 3.  número é par?
    if numero % 2 == 0:
        print(numero)