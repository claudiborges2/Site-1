#AULA 8 DADOS if, elif, else e Laços de repetição

hora =12
humor ='outra palavra'

if humor == 'sono' and hora <=10:
    print("acordar")
elif humor == 'sedento' or hora <=14:
    print("almoçar")
else:
    print('agua')


#AULA 9  FOR e WHILE
planetas = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']

for planeta in planetas:
    print('Planetas:', planeta)

    for i in range(5):
        print("i=", i)

        #uso do while
    i=0
    while i < 5:
        print(i, end='')
        i += 1      
            