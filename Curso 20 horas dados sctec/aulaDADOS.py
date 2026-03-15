# AULAS 10 e 11 funçoes  e funçoes puras apra evitar EFEITO COLATERAL
# EFEITO COLATERAL: quando a função tem um efeito colateral, ou seja, ela altera o estado do programa ou do ambiente externo de alguma forma. Isso pode incluir modificar variáveis globais, escrever em arquivos, imprimir na tela, etc. O problema com funções que têm efeitos colaterais é que elas podem tornar o código mais difícil de entender e depurar, pois o comportamento da função pode depender do estado do programa ou do ambiente externo.

def pure_increment(elements, index):
        new_elements = elements[:] 
        new_elements = elements.copy()
        new_elements[index] += 1
        return elements
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]

print(pure_increment(lista, 0))  # Output: [1, 2, 4, 4, 5, 6, 7, 8, 9]

print(lista) 
# funções puras: map, filter, sorted, reduce, lambda, list comprehension

#AULA 11
#erros em python: SyntaxError, NameError, TypeError, ValueError, IndexError, KeyError, AttributeError, ImportError, ZeroDivisionError, FileNotFoundError, IOError, RuntimeError, RecursionError, MemoryError, OverflowError.

#TRATANDO EXCESSOES: TRY, EXCEPT, ELSE, FINALLY
try:
    # Código que pode gerar uma exceção
    pass
except Exception as e:
    # Tratamento da exceção
    print(f"Ocorreu um erro: {e}")
else:
    # Código que é executado se não houver exceção
    pass
finally:
    # Código que é executado independentemente de haver ou não exceção
    #eception handling: try, except, defelse, finally

def dividir(a, b): #continuar aula 11 na metade , messa parte do try except
    try:
        return a / b
    except ZeroDivisionError:
        print("Não é possível dividir por zero.")
    except TypeError:
        print("Os argumentos devem ser números.")
    else:
        print("Divisão realizada com sucesso.")
    finally:
        print("Operação de divisão finalizada.")