#Clase diseñada con patrón de diseño Singleton

#Importación de módulos esenciales para el funcionamiento del programa

#Importación de la clase GestorDB
from backend.GestorDB import GestorDB

#Creación de objeto CONEXION_DB como constante, creo una nueva instancia de GestorDB para manipular funciones de la librería "psycopg2"
CONEXION_DB = GestorDB()

class GestorLogin:
    #va a ser el esqueleto de los datos pedidos
    def __init__(self):
        self

    def sign_in(self, mail, pwd):
    #compara los usuarios con la BD y si no estan los rechaza.

        try:
            CONEXION_DB.iniciarConexion('localhost','postgres','123CrackeN','postgres',5432)
            CONEXION_DB.ejecutar("SELECT contraseña FROM login WHERE email LIKE '{}'".format(mail))
            retorno = CONEXION_DB.mostrarResultados()
            print(retorno)

            if (len(retorno) == 0):
                raise Exception("No encontré el mail solicitado en la base de datos")

            if (retorno[0][0] != pwd):
                raise Exception("La contraseña ingresada no coincide")

            respuesta = True

        except Exception as e:
            print (e)
            respuesta = False

        finally:
            CONEXION_DB.finalizarConexion()
            print("Devolviendo respuesta: {}".format(respuesta))
            return respuesta

    def sign_up(self, mail, pwd):

        try:
            CONEXION_DB.iniciarConexion('localhost','postgres','123CrackeN','postgres',8000)
            CONEXION_DB.ejecutar("SELECT email FROM login WHERE email LIKE '{}'".format(mail))
            retorno = CONEXION_DB.mostrarResultados()
            print(retorno)

            if (len(retorno) != 0):
                raise Exception("No puedo crear una cuenta con un usuario con mail ya existente en la base de datos")

            CONEXION_DB.ejecutar("INSERT INTO login (email, contraseña) VALUES ('{}','{}')".format(mail,pwd))
            CONEXION_DB.commit()
            respuesta = True

        except Exception as e:
            print (e)
            respuesta = False

        finally:
            CONEXION_DB.finalizarConexion()
            print("Devolviendo respuesta: {}".format(respuesta))
            return respuesta

'''
def Test_Login(mail,pwd):
    print (sign_in(mail,pwd))
def Test_Register(mail,pwd):
    print (sign_up(mail,pwd))
'''