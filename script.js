
class figuraGeometrica{
    constructor(ladoA, ladoB){
        this.ladoA = ladoA
        this.ladoB = ladoB
    }
    area(){
        return 0
    }
    perimetro(){
        return 0
    }
}

class Rectangulo extends figuraGeometrica{
    area(){
        let areaResult= this.ladoA * this.ladoB
        console.log(areaResult)
    }

    perimetro(){
        let metroResult = 2*(this.ladoA+this.ladoB)
        console.log(metroResult)
    }
}

class Cuadrado extends figuraGeometrica{
    area(){
        let areaCuad = this.ladoA ** 2
        console.log(areaCuad)
    }
    perimetro(){
        let metroCuadrado= this.ladoA * 4
        console.log(metroCuadrado)
    }
}

console.log("Cuadrado")
const cuad = new Cuadrado(5)

cuad.perimetro()
cuad.area()

console.log("Rectangulo")
const rec = new Rectangulo(8,6)

rec.perimetro()
rec.area()


