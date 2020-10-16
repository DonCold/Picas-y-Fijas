#include <iostream>
#include <stdlib.h>
#include <conio.h>
#include <time.h>
#include <fstream>

using namespace std;
void menu();
void UnJugador();
void DosJugadores();
void CrearData();
void BorrarData();
void VerData();
void VerRecords();

int main(){
	CrearData();

	getch();
	return 0;
}

void menu(){
	system("color 7C");
	int Elegir;

	cout<<endl<<"\t\tP I C A S  Y  F I J A S  -  E L  J U E G O"<<endl<<endl;
	cout<<"Todos los derechos reservados.."<<endl<<endl;
	system("pause");
	system("color 0F");
	cout<<" 1: Un jugador V2.0"<<endl;
	cout<<" 2: Dos jugadores V1.0"<<endl;
	cout<<" 3: Ver Records"<<endl<<endl;
	cout<<" 4: Salir"<<endl<<endl;
	cout<<"-> ";
	cin>>Elegir; cout<<endl;
	switch(Elegir){
		case 1:
			UnJugador();
			break;
		case 2:
			DosJugadores();
			break;
		case 3:
			VerRecords();
			break;
		case 4:
			cout<<endl<<"**Nos Vemos Luego!!..**"<<endl;
			break;
		default:
			cout<<endl<<"Dato Erroneo**"<<endl;
			break;
	}
}

void DosJugadores(){
	char Jugador1[20],Jugador2[20];
	int E, Adivinar, Error, Numero, NAdivinar, B[4], A[4],Fijas=0,Picas=0,Intentos;
	E=1;

	cout<<endl<<endl<<"Ingrese el nombre del primer jugador:"<<endl;
	cout<<"-> ";
	cin>>Jugador1; cout<<endl;
	cout<<"Ingrese el nombre del segundo jugador:"<<endl;
	cout<<"-> ";
	cin>>Jugador2; cout<<endl;
	system("cls");
	while(E==1){
		Intentos=0;
		Fijas=0;
		BorrarData();
		system("cls");
		cout<<endl<<"Quien adivinara?: "<<Jugador1<<"(1) o "<<Jugador2<<"(2)"<<endl;
		cout<<"-> ";
		cin>>Adivinar;
		switch(Adivinar){
			case 1:
				do{
					Error=0;
					cout<<Jugador2<<", �Que numero desea colocar?: ";
					cin>>NAdivinar;
					if(NAdivinar>9999||NAdivinar<1000){
						Error=1;
					}

					B[0]=NAdivinar/1000;
					B[1]=(NAdivinar-(B[0]*1000))/100;
					if(B[1]==B[0]){
						Error=1;
					}
					B[2]=((NAdivinar-(B[0]*1000))-(B[1]*100))/10;
					if(B[2]==B[1] || B[2]==B[0]){
						Error=1;
					}
					B[3]=(((NAdivinar-(B[0]*1000))-(B[1]*100))-(B[2]*10));
					if(B[3]==B[0] || B[3]==B[1] || B[3]==B[2]){
						Error=1;
					}
					if(Error==1){
						cout<<"**Error**"<<endl;
					}
				} while(NAdivinar>9999||NAdivinar<1000||Error==1);
				system("cls");
				cout<<endl;
				while(Fijas!=4){
					Intentos++;
					Fijas=0;
					Picas=0;
					if(Intentos>1){
						VerData();
					}
					do{
						Error=0;
						cout<<Jugador1<<", Ingrese un numero de 4 digitos diferentes: ";
						cin>>Numero;
						if(Numero>9999||Numero<1000){
							Error=1;
						}

						A[0]=Numero/1000;
						A[1]=(Numero-(A[0]*1000))/100;
						if(A[1]==A[0]){
							Error=1;
						}
						A[2]=((Numero-(A[0]*1000))-(A[1]*100))/10;
						if(A[2]==A[1] || A[2]==A[0]){
							Error=1;
						}
						A[3]=(((Numero-(A[0]*1000))-(A[1]*100))-(A[2]*10));
						if(A[3]==A[0] || A[3]==A[1] || A[3]==A[2]){
							Error=1;
						}
						if(Error==1){
							cout<<"**Error**"<<endl;
						}
					} while(Numero>9999||Numero<1000||Error==1);
					cout<<endl;
					for(int i=0;i<4;i++){
						if(A[i]==B[i]){
							Fijas++;
						}
					}

					if(A[0]==B[1] || A[0]==B[2] || A[0]==B[3]){
						Picas++;
					}

					if(A[1]==B[0] || A[1]==B[2] || A[1]==B[3]){
						Picas++;
					}
					if(A[2]==B[0] || A[2]==B[1] || A[2]==B[3]){
						Picas++;
					}
					if(A[3]==B[0] || A[3]==B[1] || A[3]==B[2]){
						Picas++;
					}
					ofstream Ronda;
					Ronda.open("Historial.txt",ios::app);
					if (Ronda.fail()){
						cout<<"No se pudo abrir el archivo";
						getch();
						system("cls");
						menu();
					}
					Ronda<<"Intento No."<<Intentos<<"=\t\tNumero: "<<A[0]<<A[1]<<A[2]<<A[3]<<"     Fijas:"<<Fijas<<" Picas:"<<Picas<<endl;
					Ronda.close();
					system("cls");
				}
				VerData();
				cout<<"Termino. Numero de intentos: "<<Intentos<<endl;
				break;
			case 2:
				do{
					Error=0;
					cout<<Jugador1<<", �Que numero desea colocar?: ";
					cin>>NAdivinar;
					if(NAdivinar>9999||NAdivinar<1000){
						Error=1;
					}

					B[0]=NAdivinar/1000;
					B[1]=(NAdivinar-(B[0]*1000))/100;
					if(B[1]==B[0]){
						Error=1;
					}
					B[2]=((NAdivinar-(B[0]*1000))-(B[1]*100))/10;
					if(B[2]==B[1] || B[2]==B[0]){
						Error=1;
					}
					B[3]=(((NAdivinar-(B[0]*1000))-(B[1]*100))-(B[2]*10));
					if(B[3]==B[0] || B[3]==B[1] || B[3]==B[2]){
						Error=1;
					}
					if(Error==1){
						cout<<"**Error**"<<endl;
					}
				} while(NAdivinar>9999||NAdivinar<1000||Error==1);
				system("cls");
				cout<<endl;
				while(Fijas!=4){
					Intentos++;
					Fijas=0;
					Picas=0;
					if(Intentos>1){
						VerData();
					}
					do{
						Error=0;
						cout<<Jugador2<<", Ingrese un numero de 4 digitos diferentes: ";
						cin>>Numero;
						if(Numero>9999||Numero<1000){
							cout<<"**ERROR**"<<endl;
						}

						A[0]=Numero/1000;
						A[1]=(Numero-(A[0]*1000))/100;
						if(A[1]==A[0]){
							Error=1;
						}
						A[2]=((Numero-(A[0]*1000))-(A[1]*100))/10;
						if(A[2]==A[1] || A[2]==A[0]){
							Error=1;
						}
						A[3]=(((Numero-(A[0]*1000))-(A[1]*100))-(A[2]*10));
						if(A[3]==A[0] || A[3]==A[1] || A[3]==A[2]){
							Error=1;
						}
						if(Error==1){
							cout<<"**Error**"<<endl;
						}
					} while(Numero>9999||Numero<1000||Error==1);
					cout<<endl;
					for(int i=0;i<4;i++){
						if(A[i]==B[i]){
							Fijas++;
						}
					}
					if(A[0]==B[1] || A[0]==B[2] || A[0]==B[3]){
						Picas++;
					}

					if(A[1]==B[0] || A[1]==B[2] || A[1]==B[3]){
						Picas++;
					}
					if(A[2]==B[0] || A[2]==B[1] || A[2]==B[3]){
						Picas++;
					}
					if(A[3]==B[0] || A[3]==B[1] || A[3]==B[2]){
						Picas++;
					}
					ofstream Ronda;
					Ronda.open("Historial.txt",ios::app);
					if (Ronda.fail()){
						cout<<"No se pudo abrir el archivo";
						getch();
						system("cls");
						menu();
					}
					Ronda<<"Intento No."<<Intentos<<"=\t\tNumero: "<<A[0]<<A[1]<<A[2]<<A[3]<<"     Fijas:"<<Fijas<<" Picas:"<<Picas<<endl;
					Ronda.close();
					system("cls");
				}
				VerData();
				cout<<"Termino. Numero de intentos: "<<Intentos<<endl;
				break;
			default:
				cout<<endl<<"Dato Erroneo**"<<endl;
				break;
	}
		cout<<endl<<"Desea continuar: Si(1) No(otro numero)"<<endl;
		cout<<"-> ";
		cin>>E;
	}
	system("cls");
	menu();
}
void UnJugador(){
	char Jugador[20];
	int E, A[4], B[4], Numero, Picas=0, Fijas=0, Error, Intentos;
	E=1;
	cout<<endl<<endl<<"Ingrese su nombre:"<<endl;
	cout<<"-> ";
	cin>>Jugador;
	system("cls");
	while(E==1){
		Intentos=0;
		Fijas=0;
		BorrarData();
		system("cls");

		srand(time(NULL));
		A[0]=1 + rand() % (9);
		A[1]=0 + rand() % (9);
		while(A[1]==A[0]){
			A[1]=0 + rand() % (9);
		}
		A[2]=0 + rand() % (9);
		while(A[2]==A[0] or A[2]==A[1]){
			A[2]=0 + rand() % (9);
		}
		A[3]=0 + rand() % (9);
		while(A[3]==A[0] or A[3]==A[1] or A[3]==A[2]){
			A[3]=0 + rand() % (9);
		}

		cout<<endl;
		while(Fijas!=4){
			Intentos++;
			Fijas=0;
			Picas=0;
			if(Intentos>1){
				VerData();
			}
			do{
				Error=0;
				cout<<"Ingrese un numero de 4 digitos diferentes: ";
				cin>>Numero;
				if(Numero>9999||Numero<1000){
					Error=1;
				}

				B[0]=Numero/1000;
				B[1]=(Numero-(B[0]*1000))/100;
				if(B[1]==B[0]){
					Error=1;
				}
				B[2]=((Numero-(B[0]*1000))-(B[1]*100))/10;
				if(B[2]==B[1] || B[2]==B[0]){
					Error=1;
				}
				B[3]=(((Numero-(B[0]*1000))-(B[1]*100))-(B[2]*10));
				if(B[3]==B[0] || B[3]==B[1] || B[3]==B[2]){
					Error=1;
				}
				if(Error==1){
					cout<<"**Error**"<<endl;
				}
			} while(Numero>9999||Numero<1000||Error==1);

			cout<<endl;
			for(int i=0;i<4;i++){
				if(B[i]==A[i]){
					Fijas++;
				}
			}
			if(B[0]==A[1] || B[0]==A[2] || B[0]==A[3]){
				Picas++;
			}

			if(B[1]==A[0] || B[1]==A[2] || B[1]==A[3]){
				Picas++;
			}
			if(B[2]==A[0] || B[2]==A[1] || B[2]==A[3]){
				Picas++;
			}
			if(B[3]==A[0] || B[3]==A[1] || B[3]==A[2]){
				Picas++;
			}
			ofstream Ronda;
			Ronda.open("Historial.txt",ios::app);
			if (Ronda.fail()){
				cout<<"No se pudo abrir el archivo";
				getch();
				system("cls");
				menu();
			}
			Ronda<<"Intento No."<<Intentos<<"=\t\tNumero: "<<B[0]<<B[1]<<B[2]<<B[3]<<"     Fijas:"<<Fijas<<" Picas:"<<Picas<<endl;
			Ronda.close();
			system("cls");
		}

		VerData();
		cout<<"Termino. Numero de intentos: "<<Intentos<<endl;

		ofstream Records;
		Records.open("Records.txt",ios::app);
		if (Records.fail()){
			cout<<"No se pudo abrir el archivo";
			getch();
			system("cls");
			menu();
		}
		Records<<"Nombre: "<<Jugador<<"\t\tNumero de intentos: "<<Intentos<<endl;
		Records.close();

		cout<<endl<<"�volver a jugar?: Si(1) No(otro numero)"<<endl;
		cout<<"-> ";
		cin>>E;
	}
	system("cls");
	menu();
}

void CrearData(){
	ofstream Historial;

	Historial.open("Historial.txt",ios::out);

	if (Historial.fail()){
		cout<<endl<<"No se pudo crear el archivo";
		getch();
		system("cls");
		exit(1);
	}
	Historial<<endl;
	Historial.close();

	menu();
}

void BorrarData(){
	ofstream Historial;

	Historial.open("Historial.txt",ios::out);

	if (Historial.fail()){
		cout<<endl<<"No se pudo borrar el archivo";
		getch();
		system("cls");
		exit(1);
	}
	Historial<<endl;
	Historial.close();
}

void VerData(){
	ifstream Ronda;
	string Texto;

	Ronda.open("Historial.txt",ios::in);

	if (Ronda.fail()){
		cout<<endl<<"**El archivo no existe**"<<endl;
		getch();
		system("cls");
		menu();
	}

	while(!Ronda.eof()){
		getline(Ronda,Texto);
		cout<<Texto<<endl;
	}

	Ronda.close();
}

void VerRecords(){
	ifstream Records;
	string Texto;

	Records.open("Records.txt",ios::in);

	if (Records.fail()){
		cout<<endl<<"**El archivo no existe**"<<endl;
		getch();
		system("cls");
		menu();
	}

	while(!Records.eof()){
		getline(Records,Texto);
		cout<<Texto<<endl;
	}

	Records.close();
	getch();
	system("cls");
	menu();
}
