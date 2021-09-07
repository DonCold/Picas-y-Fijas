
package reto3;

/**
 *
 * @author ColdHeart
 */

public class Vehiculos
{
    // atributos
    private String matricula;
    private String marca;
    private String modelo;
    private String color;
    private double tarifa;
    private boolean disponible;
    
    //metodo constructor

    public Vehiculos(String matricula, 
                     String marca, 
                     String modelo,
                     String color,
                     double tarifa,
                     boolean disponible) 
    {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.tarifa = tarifa;
        this.disponible = disponible;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public double getTarifa() {
        return tarifa;
    }

    public void setTarifa(double tarifa) {
        this.tarifa = tarifa;
    }

    public boolean isDisponible() {
        return disponible;
    }

    public void setDisponible(boolean disponible) {
        this.disponible = disponible;
    }

    public String getAtributos(){
        return "Matricula: " + this.matricula + " " +
                "Marca: " + this.marca + " " +
                "Modelo: " + this.modelo + " " +
                "Color: " + this.color+ " " +
                "tarifa: " + this.tarifa + " " +
                "disponible: " + this.disponible;
    }
}
