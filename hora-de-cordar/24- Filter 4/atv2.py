# Segunda-feira = 1
# Terça-feira   = 2
# Quarta-feira  = 3
# Quinta-feira  = 4
# Sexta-feira   = 5

num=1
dia_da_semana=""
dia_mais_voto=""
mais_votos=0
while num <= 5:
    if num==1:
        dia_da_semana="Segunda-feira"
    if num==2:
        dia_da_semana="Terça-feira"
    if num==3:
        dia_da_semana="Quarta-feira"
    if num==4:
        dia_da_semana="Quinta-feira"
    if num==5:
        dia_da_semana="Sexta-feira" 

    voto= int(input("Digite a quantidade de votos de {}: ".format(dia_da_semana)))

    if voto > mais_votos:
        mais_votos= voto
        dia_mais_voto = dia_da_semana

    num+=1

print("O dia escolhido foi {} com {} votos!".format(dia_mais_voto,mais_votos))