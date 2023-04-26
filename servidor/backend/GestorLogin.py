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

            CONEXION_DB.ejecutar("SELECT pwd, id, username FROM login WHERE email = '{}' AND pwd = '{}'".format(mail, pwd))
            retorno = CONEXION_DB.mostrarResultados()
            print(retorno)

            if (len(retorno) == 0):
                raise Exception("Credenciales incorrectas")

            respuesta = {
                "Id": retorno[0][1],
                "Username": retorno[0][2]
            }

        except Exception as e:
            print (e)
            respuesta = False

        finally:

            # if respuesta:
            #     CONEXION_DB.ejecutar("SELECT refreshToken FROM login WHERE email LIKE '{}'".format(mail))
            #     refreshToken = CONEXION_DB.mostrarResultados()
            #     print(refreshToken)
            # else:
            #     refreshToken = None
            #     print(refreshToken)
            CONEXION_DB.ejecutar("SELECT refreshtoken FROM login WHERE email LIKE '{}'".format(mail))
            print(CONEXION_DB.mostrarResultados())
            CONEXION_DB.finalizarConexion()
            print("Devolviendo respuesta: {}".format(respuesta))
            return respuesta

    def sign_up(self, mail, pwd, username):

        try:

            CONEXION_DB.iniciarConexion('localhost','postgres','123CrackeN','postgres',5432)

            CONEXION_DB.iniciarConexion('localhost','postgres','123CrackeN','postgres',5432)

            CONEXION_DB.ejecutar("SELECT email FROM login WHERE email LIKE '{}'".format(mail))
            retorno = CONEXION_DB.mostrarResultados()
            print(retorno)

            if (len(retorno) != 0):
                raise Exception("No puedo crear una cuenta con un usuario con mail ya existente en la base de datos")

            CONEXION_DB.ejecutar("INSERT INTO login (email, pwd, username) VALUES ('{}','{}','{}')".format(mail,pwd,username))
            CONEXION_DB.commit()
            respuesta = True

        except Exception as e:
            print (e)
            respuesta = False

        finally:
            CONEXION_DB.finalizarConexion()
            print("Devolviendo respuesta: {}".format(respuesta))
            return respuesta

    def agregarRefreshToken(self, mail, refreshToken):
        try:

            # CONEXION_DB.iniciarConexion('localhost','postgres','123CrackeN','postgres',5432)

            CONEXION_DB.iniciarConexion('localhost','postgres','123CrackeN','postgres',5432)

            CONEXION_DB.ejecutar("SELECT email FROM login WHERE email LIKE '{}'".format(mail))
            retorno = CONEXION_DB.mostrarResultados()
            print(retorno)

            if (len(retorno) == 0):
                raise Exception("No encontré el mail solicitado en la base de datos")

            # print(refreshToken)
            CONEXION_DB.ejecutar("UPDATE login SET refreshtoken='{}' WHERE email='{}'".format(refreshToken,mail))
            # CONEXION_DB.ejecutar("INSERT INTO login (refreshToken, pwd) VALUES ('{}','{}')".format(mail,pwd))
            CONEXION_DB.commit()

            respuesta = True

        except Exception as e:
            print (e)
            respuesta = False

        finally:

            CONEXION_DB.ejecutar("SELECT refreshtoken FROM login WHERE email LIKE '{}'".format(mail))
            token = CONEXION_DB.mostrarResultados()
            CONEXION_DB.ejecutar("SELECT email FROM login WHERE email LIKE '{}'".format(mail))
            email = CONEXION_DB.mostrarResultados()
            CONEXION_DB.finalizarConexion()
            # print(token)
            print("Devolviendo respuesta: {}".format(respuesta))
            return [respuesta,token[0][0],email[0][0]]
