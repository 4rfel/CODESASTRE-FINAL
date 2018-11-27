import json
import numpy as np

main = {}
main['perguntas'] = {}
for e in range(1,11):
    main['perguntas'][str(e)] = {"pergunta":"pergunta muito séria sobre carros "+str(e), 'respostas':["resposta muito mais séria que a pergunta " + str(e) + " n 1","resposta muito mais séria que a pergunta " + str(e) + " n 2","resposta muito mais séria que a pergunta " + str(e) + " n 3","resposta muito mais séria que a pergunta " + str(e) + " n 4"], 'resposta_correta': np.random.randint(0,5)}



with open("arquivo.json", 'w') as arq:
    json.dump(main, arq, sort_keys = True, indent = 4,)
