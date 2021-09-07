import random

def aleatorio():
    return random.randint(1, 5)

listas = [aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio()]

listas1 = [aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio()]

listas2 = [aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio()]

listas3 = [aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio()]

listas4 = [aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(), aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio(),aleatorio()]

azul = []
verde = []
naranja = []
gris = []

""" AQUI LOS AZULES """
prom = 0
prom1 = 0
prom2 = 0
prom3 = 0
prom4 = 0

for i in range(0,5):
    prom += listas[i]
    prom1 += listas1[i]
    prom2 += listas2[i]
    prom3 += listas3[i]
    prom4 += listas4[i]

azul.append((prom/5))
azul.append((prom1/5))
azul.append((prom2/5))
azul.append((prom3/5))
azul.append((prom4/5))

""" AQUI LOS VERDES """
prom = 0
prom1 = 0
prom2 = 0
prom3 = 0
prom4 = 0

for i in range(5,10):
    prom += listas[i]
    prom1 += listas1[i]
    prom2 += listas2[i]
    prom3 += listas3[i]
    prom4 += listas4[i]

verde.append((prom/5))
verde.append((prom1/5))
verde.append((prom2/5))
verde.append((prom3/5))
verde.append((prom4/5))

""" AQUI LOS NARANJAS """

prom = 0
prom1 = 0
prom2 = 0
prom3 = 0
prom4 = 0

for i in range(10,15):
    prom += listas[i]
    prom1 += listas1[i]
    prom2 += listas2[i]
    prom3 += listas3[i]
    prom4 += listas4[i]

naranja.append((prom/5))
naranja.append((prom1/5))
naranja.append((prom2/5))
naranja.append((prom3/5))
naranja.append((prom4/5))

""" AQUI LOS GRISES """

prom = 0
prom1 = 0
prom2 = 0
prom3 = 0
prom4 = 0

for i in range(15,20):
    prom += listas[i]
    prom1 += listas1[i]
    prom2 += listas2[i]
    prom3 += listas3[i]
    prom4 += listas4[i]

gris.append((prom/5))
gris.append((prom1/5))
gris.append((prom2/5))
gris.append((prom3/5))
gris.append((prom4/5))

print("Promedio de Azules: ",azul)
print("Promedio de Verdes: ",verde)
print("Promedio de Naranja: ",naranja)
print("Promedio de Gris: ",gris)

promedioazul = azul[0]
promedioverde = verde[0]
promedionaranja = naranja[0]
promediogris = gris[0]

for i in range(0,5):
    if(azul[i]>=promedioazul):
        promedioazul = azul[i]

    if(verde[i]>=promedioverde):
        promedioverde = verde[i]

    if(naranja[i]>=promedionaranja):
        promedionaranja = naranja[i]

    if(gris[i]>=promediogris):
        promediogris = gris[i]

print("")
print("Promedio mas alto de Azules: ",promedioazul)
print("Promedio mas alto de Verdes: ",promedioverde)
print("Promedio mas alto de Naranjas: ",promedionaranja)
print("Promedio mas alto de Grises: ",promediogris)
