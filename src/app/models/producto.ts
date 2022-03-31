

export class Producto{
    id: number;
    nombre: string;
    caracteristicas: string;
    fechaLanzamiento:Date ;
    correoFabricante: string;

    paisFabricacion:string;
    precio: number;
    unidadesDisponibles:number;
    unidadesVendidas:number;
    imagen:string;



    constructor(){
        this.id= 0;
        this.nombre ="";
        this.caracteristicas = "";
        this.fechaLanzamiento= new Date();
        this.correoFabricante = "";
        this.paisFabricacion="";
        this.precio=0;
        this.unidadesDisponibles=0;
        this.unidadesVendidas=0;
        this.imagen = "";


    }

}