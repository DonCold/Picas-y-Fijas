/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package program;

/**
 *
 * @author ColdHeart
 */
public class Persona {
    String cedula;
    String nombrePersona;
    long edad;
    String NivelEscolar;
    boolean trabaja;
    long ingreso;

    public Persona(String cedula, String nombrePersona, long edad, String NivelEscolar, boolean trabaja, long ingreso) {
        this.cedula = cedula;
        this.nombrePersona = nombrePersona;
        this.edad = edad;
        this.NivelEscolar = NivelEscolar;
        this.trabaja = trabaja;
        this.ingreso = ingreso;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getNombrePersona() {
        return nombrePersona;
    }

    public void setNombrePersona(String nombrePersona) {
        this.nombrePersona = nombrePersona;
    }

    public long getEdad() {
        return edad;
    }

    public void setEdad(long edad) {
        this.edad = edad;
    }

    public String getNivelEscolar() {
        return NivelEscolar;
    }

    public void setNivelEscolar(String NivelEscolar) {
        this.NivelEscolar = NivelEscolar;
    }

    public boolean isTrabaja() {
        return trabaja;
    }

    public void setTrabaja(boolean trabaja) {
        this.trabaja = trabaja;
    }

    public long getIngreso() {
        return ingreso;
    }

    public void setIngreso(long ingreso) {
        this.ingreso = ingreso;
    }
    
}
