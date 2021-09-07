package reto1;

import javax.swing.JOptionPane;

/**
 *
 * @author ColdHeart
 */
public class Inicio {
    public static void main(String args[]){
        boolean codigoListo = false;
        int[] codigo = new int[6];

        while(codigoListo==false){
            codigo = pedirDatos();
            if(codigo[0]!=-1){
                if(codigo[0] == 1 || codigo[0] == 2){
                    if(codigo[1]!=0){
                        codigoListo = true;
                    }
                }
            }
            if(codigoListo!=true){
                JOptionPane.showMessageDialog(null, "**Error**");
            }
        }
        /* Declaracion de variables */
        String tipo, servicio = "";
        int sum=0, descuento=0, recargo=0;
        float costo=0f;
        
        /* =================================================================== */
        if(codigo[0]==1){
            tipo = "Afiliado";
        }else{
            tipo = "Particular";
        }

        switch(codigo[1]){
            case 1:
                servicio = "Radiología";
                costo = 85000f;
                break;
            case 2:
                servicio = "Ecografía";
                costo = 55250f;
                break;
            case 3:
                servicio = "Laboratorio Clínico";
                costo = 128900f;
                break;
            case 4:
                servicio = "Consulta Externa";
                costo = 56000f;
                break;
            case 5:
                servicio = "Consulta Especializada";
                costo = 390000f;
                break;
            case 6:
                servicio = "Radiología-Laboratorio";
                costo = 200000f;
                break;
            case 7:
                servicio = "Tratamiento Dental";
                costo = 100000f;
                break;
            case 8:
                servicio = "Prueba Covid-19 PCR";
                costo = 150000f;
                break;
            case 9:
                servicio = "Prueba Covid-19 Anticuerpos";
                costo = 80000f;
                break;
        }
        
        sum = codigo[2] + codigo[3] + codigo[4];
        
        if((sum % 2)==0 && codigo[0]==1){
            descuento += 15;
        }
        if((sum % 2)==0 && codigo[0]==2){
            recargo += 15;
        }
        if((sum % 2)==1 && codigo[0]==1){
            descuento += 25;
        }

        switch(codigo[5]){
            case 0:
                recargo += 0;
                break;
            case 1:
                recargo += 5;
                break;
            case 2:
                recargo += 10;
                break;
            case 3:
                recargo += 15;
                break;
            case 4:
                recargo += 20;
                break;
            case 5:
                recargo += 20;
                break;
            case 6:
                recargo += 15;
                break;
            case 7:
                recargo += 10;
                break;
            case 8:
                recargo += 5;
                break;
            case 9:
                recargo += 0;
                break;
        }
        
        /* Aplicando Descuentos y Recaudos */
        float agregar = 0f,quitar = 0f;
        int valor = 0;
        if(descuento > 0){
            quitar =((float)descuento/100);
            quitar = (costo*quitar);
        }
        if(recargo > 0){
            agregar =((float)recargo/100);
            agregar = (costo*agregar);
        }
        valor = (int)costo;
        costo = (costo+agregar);
        costo = (costo-quitar);
        
        System.out.print("Codigo: ");
        for(int i=0; i<codigo.length; i++){
            System.out.print(codigo[i]);
        }
        
        System.out.println("\nEl Usuario es "+tipo);
        System.out.println("Servicio Utilizado: "+servicio);
        System.out.println("El costo del servicio es: "+valor);
        System.out.println("Con un Descuento de: "+descuento+"%");
        System.out.println("Con un Recargo Total de: "+recargo+"%");
        System.out.println("Total a Pagar: "+costo);
    }
    
    
    public static int[] pedirDatos(){
        int[] codigo = new int[6];
        int i = 6, resto;

        int numero = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el Codigo del Usuario: "));
        if(numero>999999 || numero<100000){
            numero = -1;
            codigo[0] = -1;
        }
        while(numero>0){
            i--;
            resto = numero % 10;
            numero = numero/10;
            codigo[i] = resto;
        }
        return codigo;
    }
}
