let pagoMes = 8200

let consumoKWH = 400

let aumentoPago = (pagoMes * 20) / 100

console.log(consumoKWH > 300 ? `Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, en
base al ajuste tarifario (hogares con consumo mayor a 300kwh por
mes tendrán un aumento del 20%), cumplimos con informarle que se
ha ajustado el total a pagar, que será de ${pagoMes + aumentoPago}` : "No hay aumento, se le mantiene el subsidio");