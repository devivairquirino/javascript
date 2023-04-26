num_aluno=1
qtd_alunos_impar=1
soma_nota_impar=0
nota_alunos_impar=0
media_nota_impar=0

while qtd_alunos_impar<=3:
    print("VOCÊ ESTÁ DIGITANDO AS NOTAS DOS ALUNOS ÍMPARES.")
    nota_alunos_impar= int(input("Digite a nota do aluno {}: ".format(num_aluno)))
    soma_nota_impar+= nota_alunos_impar
    media_nota_impar=soma_nota_impar/qtd_alunos_impar
    num_aluno+=2
    qtd_alunos_impar+=1


num_aluno=2
qtd_alunos_par=1
soma_nota_par=0
nota_alunos_par=0
media_nota_par=0


while qtd_alunos_par<=3:
    print("VOCÊ ESTÁ DIGITANDO AS NOTAS DOS ALUNOS PARES.")
    nota_alunos_par= int(input("Digite a nota do aluno {}: ".format(num_aluno)))
    soma_nota_par+= nota_alunos_par
    media_nota_par=soma_nota_par/qtd_alunos_par
    num_aluno+=2
    qtd_alunos_par+=1

if media_nota_impar > media_nota_par:
    print("Média das notas dos alunos ímpares: {}".format(media_nota_impar))
    print("Média das notas dos alunos pares: {}".format(media_nota_par))
    print("A metade ÍMPAR teve a maior média de notas!")
else:
    print("Média das notas dos alunos ímpares: {}".format(media_nota_impar))
    print("Média das notas dos alunos pares: {}".format(media_nota_par))
    print("A metade PAR teve a maior média de notas!")