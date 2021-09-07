package reto3;

/**
 *
 * @author ColdHeart
 */

// la clase Furgoneta es una subclase heredada de la clase Vehiculos
public class Furgoneta extends Vehiculos
{
    // atributos de la subclase  Furgoneta
    private int carga;
    private int volumen; 
    // método constructor de la subclase Furgoneta
     public Furgoneta(int carga, int volumen, String matricula, String marca, String modelo, String color, double tarifa, boolean disponible) {
        super(matricula, marca, modelo, color, tarifa, disponible);
        this.carga = carga;
        this.volumen = volumen;
    }

    // método para visualizar desde la clase principal 
    // el atributo carga del objeto instanciado desde la subclase
    // Furgoneta
    public int getCarga() {
        return carga;
    }
    // método para visualizar desde la clase principal 
    // el atributo volumen del objeto instanciado desde la subclase
    // Furgoneta
    public int getVolumen() {
        return volumen;
    }
    // método para visualizar desde la clase principal 
    // todos los atributos que componen la clase padre y la clase hija Furgoneta
    @Override
    public String getAtributos() {
        return super.getAtributos() +
                "Carga (kg): " + this.carga + "; " +
                "Volumen (m3): " + this.volumen; //To change body of generated methods, choose Tools | Templates.
    }
    // método heredado desde la clase Vehiculos
    @Override
    public void setDisponible(boolean disponible) {
        super.setDisponible(disponible); //To change body of generated methods, choose Tools | Templates.
    }
}