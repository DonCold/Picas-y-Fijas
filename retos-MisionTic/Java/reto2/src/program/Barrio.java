/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package program;

import java.util.List;

/**
 *
 * @author ColdHeart
 */
public class Barrio extends Persona{
    long salidasNocturnas;

    public Barrio(long salidasNocturnas, String cedula, String nombrePersona, long edad, String NivelEscolar, boolean trabaja, long ingreso) {
        super(cedula, nombrePersona, edad, NivelEscolar, trabaja, ingreso);
        this.salidasNocturnas = salidasNocturnas;
    }

    public long getSalidasNocturnas() {
        return salidasNocturnas;
    }

    public void setSalidasNocturnas(long salidasNocturnas) {
        this.salidasNocturnas = salidasNocturnas;
    }
}
