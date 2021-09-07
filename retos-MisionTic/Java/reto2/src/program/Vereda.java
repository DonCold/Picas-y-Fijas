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
public class Vereda extends Persona{
    String Cultivo;

    public Vereda(String Cultivo, String cedula, String nombrePersona, long edad, String NivelEscolar, boolean trabaja, long ingreso) {
        super(cedula, nombrePersona, edad, NivelEscolar, trabaja, ingreso);
        this.Cultivo = Cultivo;
    }

    public String getCultivo() {
        return Cultivo;
    }

    public void setCultivo(String Cultivo) {
        this.Cultivo = Cultivo;
    }
}
