
package reto3;

/**
 *
 * @author ColdHeart
 */

public class VehiculoAlquilado 
{
    //atributos de la clase VehiculoAlquilado
    private Cliente clientes; // objeto de la clase cliente
    private Vehiculos vehiculo; // objeto de la clase vehiculos
    private int diaAlquiler;
    private int mesAlquiler;
    private int añoAlquiler;
    private int totalDiasAlquiler;

    // método constructor clase VehiculoAlquilado
    public VehiculoAlquilado(Cliente clientes,
            Vehiculos vehiculo, 
            int diaAlquiler, 
            int mesAlquiler, 
            int añoAlquiler, 
            int totalDiasAlquiler) 
    {
        this.clientes = clientes;
        this.vehiculo = vehiculo;
        this.diaAlquiler = diaAlquiler;
        this.mesAlquiler = mesAlquiler;
        this.añoAlquiler = añoAlquiler;
        this.totalDiasAlquiler = totalDiasAlquiler;
    }
    // método para visualizar desde la clase principal 
    // el atributo Objeto cliente del objeto instanciado desde la clase 
    // VehiculoAlquilado
    public Cliente getClientes() {
        return clientes;
    }
    // método para visualizar desde la clase principal 
    // el atributo Objeto vehiculo del objeto instanciado desde la clase 
    // VehiculoAlquilado
    public Vehiculos getVehiculo() {
        return vehiculo;
    }
    // método para visualizar desde la clase principal 
    // el atributo totalDiasAlquiler del objeto instanciado desde la clase 
    // VehiculoAlquilado
    public int getTotalDiasAlquiler() {
        return totalDiasAlquiler;
    } 
}
