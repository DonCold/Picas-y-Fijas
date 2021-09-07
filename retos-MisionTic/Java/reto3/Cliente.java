package reto3;

/**
 *
 * @author ColdHeart
 */

public class Cliente 
{
    // atributos de la clase cliente
    private String iden;
    private String nombre;
    private String apellido;
    // método constructor de la clase cliente
    public Cliente(String iden, 
                   String nombre, 
                   String apellido) 
    {
        this.iden = iden;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    // método para visualizar desde la clase principal 
    // el atributo iden del cliente de un objeto instanciado 
    public String getIden() {
        return iden;
    }
    // método para visualizar desde la clase principal 
    // el atributo nombre del cliente de un objeto instanciado 
    public String getNombre() {
        return nombre;
    }
    // método para visualizar desde la clase principal 
    // el atributo apellido del cliente de un objeto instanciado
    public String getApellido() {
        return apellido;
    }
    
}