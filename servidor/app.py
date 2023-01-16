from flask import Flask, render_template,jsonify, request#url_for, ,redirect, flash
from flask_cors import CORS, cross_origin
from backend import FuncionesBack

#from flask_login import LoginManager,login_user,logout_user,login_required
#from flask_wtf.csrf import CSRFProtect
#from config import config
#from cmath import log
#from distutils.log import Log
#from register import RegistrationForm
#import EntradasSalidas
#import forms
#import GestorLogin

app = Flask(__name__)
CORS(app)

#csrf=CSRFProtect()
#login_manager_app = LoginManager(app)
#@login_manager_app.user_loader
#def load_user(id):
#    """return ModelUser.get_by_id(db,id)"""

@cross_origin
@app.route('/')
def datos():
     data = {'password': 'elBananero'}
     return jsonify(data)  

@app.route('/send', methods=['POST'])
def leerObjetoLogin():
    jsonObjeto = request.get_json()
    print(jsonObjeto)
    respuestaLogin = FuncionesBack.sign_in(jsonObjeto)
    print(respuestaLogin)
    # respuestaLogin = Prueba_conexion.sign_up(jsonObjeto)
    # if (respuestaLogin == True):
    #     token = creoToken(jsonObjeto)
    #     return jsonify({"Respuesta": respuestaLogin,"Token": token})
    
    return jsonify(jsonObjeto)

"""@app.route('/register', methods=['GET', 'POST'])
def register():
    register_form = RegistrationForm(request.form)
    if request.method == 'POST' and register_form.validate():
        registerEmail = register_form.email.data
        registerPassword = register_form.password.data
        print(registerEmail + "  " + registerPassword)
        respuestaRegistro = EntradasSalidas.sign_up(registerEmail,registerPassword)
        print("La respuesta es: " + str(respuestaRegistro))
        if respuestaRegistro:
            return redirect(url_for('login'))
    return render_template('register.html', form=register_form)"""

"""@app.route('/')
def index():
    return redirect(url_for('login')) """

"""@app.route('/login', methods = ['GET','POST'])
def login():
    login_form = forms.LogginForm(request.form)
    if request.method == 'POST' and login_form.validate():
        print(request.form['username'])
        print(request.form['password'])
        mail = login_form.username.data
        pwd = login_form.password.data
        print(mail,pwd)
        respuesta = EntradasSalidas.sign_in(mail,pwd)
        #errorPassword = GestorLogin.sign_in()
        #errorUser = GestorLogin.sign_in()
        print("La respuesta es: " + str(respuesta))
        if respuesta:
            #login_user(respuesta)
            return redirect(url_for('home'))
        #elif errorPassword:
            flash("Invalid Password")
            return render_template('auth/login.html')
        #elif errorUser:
            flash("User not Found")
            return render_template('auth/login.html')
        else:    
            return render_template('auth/login.html',form=login_form)    
            
    else:    
        return render_template('auth/login.html',form=login_form)"""
        

"""@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('login'))"""

"""@app.route('/protected')
@login_required
def protected():
    return "<h1>Protejido</h1>"    
def status_401(error):
    return redirect(url_for('login'))
def status_404(error):
    return "<h1>Pagina NO encontrada</h1>",401       """     

if __name__ == "__main__":
    #app.config.from_object(config['development'])
    #csrf.init_app(app)
    #app.register_error_handler(401,status_401)
    #app.register_error_handler(404,status_404)
    app.run(port=4005,debug=True)


# Test_Login('usuariodeprueba@gmail.com',"prueba12345")
# Test_Register('prueba_evelyn@gmail.com.ar',"ekisdexD")
# pbkdf2:sha256:260000$sQ1Brq7ZLM3aKhJx$11d56cee32ca4a3fbf5840de57fb828ec5e2bdbd5cc44e7cb3857decb11e2ed7 asdasd123