package reto3;

/**
 *
 * @author ColdHeart
 */

// la clase turismo es una subclase heredada de la clase Vehiculos
public class Turismo extends Vehiculos
{
    private int puertas;
    private boolean marchaAutomatica;

    // método constructor de la subclase Turismo
    public Turismo(int puertas, boolean marchaAutomatica, String matricula, String marca, String modelo, String color, double tarifa, boolean disponible) {
        super(matricula, marca, modelo, color, tarifa, disponible);
        this.puertas = puertas;
        this.marchaAutomatica = marchaAutomatica;
    }
    // método para visualizar desde la clase principal 
    // el atributo puertras del objeto instanciado desde la subclase
    // Turismo
    public int getPuertas() {
        return puertas;
    }
    // método para visualizar desde la clase principal 
    // el atributo MoarchaAutomatica del objeto instanciado desde la subclase
    // Turismo
    public boolean isMarchaAutomatica() {
        return marchaAutomatica;
    }
    // método para visualizar desde la clase principal 
    // todos los atributos que componen la clase padre y la clase hija Turismo
    @Override
    public String getAtributos() {
        return super.getAtributos() + 
                "Puertas: " + this.puertas + " ; " +
                "Marcha: " + this.marchaAutomatica; //To change body of generated methods, choose Tools | Templates.
    }

}
