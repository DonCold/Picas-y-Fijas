package program;

import java.util.Iterator;
import org.json.simple.JSONArray;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

/**
 *
 * @author ColdHeart
 */

public class menu {
    static String nombreDep = "";
    static int noTrabaja = 0;
    static int numPerson = 0;
    static long ingresosMayores = 0;
    static int numPersonMayores = 0;
    static int nivelPostgrado = 0;

    /*
        Resultado de Las Operaciones
    */
    static float porNoTrabajo = 0f;
    static float porPostgrado = 0f;
    static float promIngreso = 0f;
    
    @SuppressWarnings("empty-statement")
    public static void main(String args[]){
        JSONObject data = leerTxt("departamento.json");
        encapsularDatos(data);
        impresionDatos();
    }

    public static void impresionDatos(){
        porNoTrabajo = 100* (float) noTrabaja/numPerson;
        porPostgrado = 100* (float) nivelPostgrado/numPerson;
        promIngreso = (float) ingresosMayores/numPersonMayores;
        System.out.println("Numero de Personas Totales: "+numPerson);
        System.out.println("No Trabajan: "+noTrabaja);
        System.out.println("Numero de personas Mayores a 60 Años: "+numPersonMayores);
        System.out.println("Ingresos de las Personas Mayores: "+ingresosMayores);
        System.out.println("Numero de personas con Nivel Postgrado: "+nivelPostgrado);
        System.out.println("=================PORCENTAJES Y PROMEDIOS========================");
        System.out.println("Porcentaje de Desempleo: "+porNoTrabajo+"%");
        System.out.println("Porcentaje de Personas con Postgrado: "+porPostgrado+"%");
        System.out.println("Promedio del ingreso de las Personas Mayores a 60 Años: "+promIngreso);
    }

    public static JSONObject leerTxt(String direccion){
        JSONObject config = null;
        try{
            JSONParser parser = new JSONParser();
            Object object =  parser.parse(new FileReader(direccion));
            config = (JSONObject) object;
        } catch (Exception e) {
            System.out.println("Excepcion leyendo fichero de configuracion " + e);
        }
        return config;
    }

    public static void encapsularDatos(JSONObject config){
        List<Barrio> barr = new ArrayList<>();
        List<Vereda> verr = new ArrayList<>();

        nombreDep = (String) config.get("Nombre");
        JSONArray departamento = (JSONArray) config.get("Municipios");
        
        Iterator<JSONObject> iterador_depart = departamento.iterator();

        while(iterador_depart.hasNext()){
            JSONObject arrMunicipio = iterador_depart.next();
            String nom_mun = (String) arrMunicipio.get("Nombre");
            
            System.out.println("");
            System.out.println(nom_mun);
            System.out.println(nombreDep);
            System.out.println("=============================");

            JSONArray barrios = (JSONArray) arrMunicipio.get("Barrios");
            Iterator<JSONObject> iterador_barrios = barrios.iterator();
            while(iterador_barrios.hasNext()){
                JSONObject arrBarrios = iterador_barrios.next();
                String nombreHabitante = (String) arrBarrios.get("Nombre");
                String nivelEscolar = (String) arrBarrios.get("NivelEscolar");
                String cedula = (String) arrBarrios.get("Cedula");
                long edad = (long) arrBarrios.get("Edad");
                long ingreso = (long) arrBarrios.get("Ingresos");
                long salidasNocturnas = (long) arrBarrios.get("Salidas Nocturnas");
                boolean trabaja = (boolean) arrBarrios.get("Trabajo");
                numPerson++;
                if(trabaja==false){
                    noTrabaja++;
                }
                if(edad>60){
                    ingresosMayores+=ingreso;
                    numPersonMayores+=1;
                }
                if(nivelEscolar.equals("postgrado")){
                    nivelPostgrado+=1;
                }
                Barrio personBarrio = new Barrio(salidasNocturnas,cedula,nombreHabitante,edad,nivelEscolar,trabaja,ingreso);
                barr.add(personBarrio);
                System.out.println(nombreHabitante);
                System.out.println(nivelEscolar);
                System.out.println(cedula);
                System.out.println(edad);
                System.out.println(ingreso);
                System.out.println(salidasNocturnas);
                System.out.println(trabaja);
                System.out.println("=============================");
            }

            JSONArray veredas = (JSONArray) arrMunicipio.get("Veredas");
            Iterator<JSONObject> iterador_veredas = veredas.iterator();
            while(iterador_veredas.hasNext()){
                JSONObject arrVeredas = iterador_veredas.next();
                String nombreHabitante = (String) arrVeredas.get("Nombre");
                String nivelEscolar = (String) arrVeredas.get("NivelEscolar");
                String cedula = (String) arrVeredas.get("Cedula");
                long edad = (long) arrVeredas.get("Edad");
                long ingreso = (long) arrVeredas.get("Ingresos");
                String cultivo = (String) arrVeredas.get("Cultivos");
                boolean trabaja = (boolean) arrVeredas.get("Trabajo");
                numPerson++;
                if(trabaja==false){
                    noTrabaja++;
                }
                if(edad>60){
                    ingresosMayores+=ingreso;
                    numPersonMayores+=1;
                }
                if(nivelEscolar.equals("postgrado")){
                    nivelPostgrado+=1;
                }
                Vereda personVereda = new Vereda(cultivo,cedula,nombreHabitante,edad,nivelEscolar,trabaja,ingreso);
                verr.add(personVereda);
                System.out.println(nombreHabitante);
                System.out.println(nivelEscolar);
                System.out.println(cedula);
                System.out.println(edad);
                System.out.println(ingreso);
                System.out.println(cultivo);
                System.out.println(trabaja);
                System.out.println("=============================");
            }
            System.out.println("\n\n\n\n");
            System.out.println("==========================Resultados del Departamento "+nombreDep+"===========================");
            System.out.println("Total Personas de Veredas: "+verr.size());
            System.out.println("Total Personas de Barrios: "+barr.size());
        }
    }
}
