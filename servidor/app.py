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
    if respuestaLogin: 
        print("Usuario Encontrado")
        respuestaToken = crearToken(data = request.get_json())
        tokenString = respuestaToken.decode()
        tokenJSON = json.dumps(tokenString)
        print(tokenJSON)
        response = jsonify(tokenJSON)
        response.headers["Authorization"] = "Bearer " + tokenString
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
