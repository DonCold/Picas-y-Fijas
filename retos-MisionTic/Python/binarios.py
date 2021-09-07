numero = int(input("Ingrese el numero Binario a Convertir: "))
guardarNum = numero

numeros = []

# Este While separa los numeros ingresados en una lista
while numero > 0:
    resto = numero % 10
    numero = int(numero / 10)
    numeros.append(resto)

resultado = 0
for i in range(len(numeros)):
    resultado += numeros[i]*(2**i)

print("Numero en Binario: ", guardarNum)
print("Numero en Decimal: ", resultado)