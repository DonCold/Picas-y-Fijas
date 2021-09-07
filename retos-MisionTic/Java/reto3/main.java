package reto3;

/**
 *
 * @author ColdHeart
 */

public class main {
    public static void main(String args[]){
        EmpresaAlquilerVehiculos Empre = new EmpresaAlquilerVehiculos("987654321-1", "Mel KK QM", "www.melkkqm.com");

        Deportivo car1 = new Deportivo(8010, "ZXD525", "Chevrolet", "2019", "BLANCO", 800, true);
        Furgoneta car2 = new Furgoneta(1219, 50, "OLK256", "Ferrari", "2020", "ROJO", 1500, true);
        Turismo car3 = new Turismo(1217, true, "OLI528", "Nissan", "2018", "NEGRO", 850, true);
        Turismo car4 = new Turismo(1080, false, "OLI588", "Nissan", "2017", "GRIS", 790, false);
        
        Empre.registrarVehiculo(car1);
        Empre.registrarVehiculo(car2);
        Empre.registrarVehiculo(car3);
        Empre.registrarVehiculo(car4);

        Cliente cli1 = new Cliente("1053531455", "Luis", "Osorio");
        Cliente cli2 = new Cliente("1097190615", "Melanny", "Nalu");
        Cliente cli3 = new Cliente("4160917901", "Yulieth", "Garcia");
        
        Empre.registrarCliente(cli1);
        Empre.registrarCliente(cli2);
        Empre.registrarCliente(cli3);
        
        Empre.imprimirCliente();
        System.out.println(" ");
        Empre.imprimirVehiculos();
        
        String consultarCliente = "1053531455";
        
        System.out.println(" ");
        if("-1".equals(String.valueOf(Empre.getCliente(consultarCliente)))){
            System.out.println("El Cliente No Existe");
        }else{
            System.out.println("El Cliente Existe");
        }
    }
}
