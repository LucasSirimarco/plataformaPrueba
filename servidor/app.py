from flask import Flask, Blueprint,render_template,jsonify,json, request#url_for, ,redirect, flash
from flask_cors import CORS, cross_origin
from backend import FuncionesBack
from dotenv import load_dotenv
from function_jwt import crearToken,validarToken

app = Flask(__name__)
route_auth = Blueprint("route_auth", __name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@cross_origin
@app.route('/')
def datos():
     data = {'password': 'elBananero'}
     return jsonify(data)  

@cross_origin
@app.route("/send",methods=["POST"])
def leerObjetoLogin():
    jsonObjeto = request.get_json()
    respuestaLogin = FuncionesBack.sign_in(jsonObjeto)
    # respuestaLogin = respuesta[0]
    # respuestaRefresh = respuesta[1]
    if respuestaLogin: 
        print("Usuario Encontrado")
        # if respuestaRefresh == None:
        respuestaToken = crearToken(data = request.get_json())
        tokenString = respuestaToken.decode()
        # print("AAAAA")
        # print(tokenString)
        # tokenJSON = json.dumps(tokenString)
        # print(tokenJSON)
        respuestaAgregarRefreshToken = FuncionesBack.almacenar_refresh_token(jsonObjeto,tokenString)
        respuestaBoolean = respuestaAgregarRefreshToken[0]
        respuestaToken = respuestaAgregarRefreshToken[1]
        respuestaMail = respuestaAgregarRefreshToken[2]
        print("Te devuelvo esto: {}".format(respuestaToken))
        if (respuestaBoolean == False):
            raise("Error al querer almacenar el refresh token")
<<<<<<< HEAD
        response = jsonify(json.dumps({"respuestaToken":respuestaToken ,"respuestaMail" : respuestaMail}))
=======
        response = jsonify(json.dumps(respuestaToken + ";" + respuestaMail))
>>>>>>> 931aa19dcd2125385ea29ed0ed200c3afa3b6d07
        # responseMail = jsonify(json.dumps(respuestaMail))
        print(response)
        response.headers["Authorization"] = "Bearer " + respuestaToken
        return response
    else:
        response = jsonify({"message":"User not found"})
        print("No se encontro el Usuario")
        response.status_code = 404
        return response
            
@app.route("/verify/token")
def verificarToken():
    token = request.headers["Autorization"].split(" ")[1]
    return validarToken(token, output=True)

if __name__ == "__main__":
    load_dotenv()
    app.run(port=4005,debug=True)
