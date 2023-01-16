# -*- coding: utf-8 -*-
"""
Created on Thu Jul  7 13:19:34 2022
@author: Mauro
"""

from backend.GestorDB import GestorDB
from backend.GestorLogin import GestorLogin

#import psycopg2

CONEXION_LOGIN = GestorLogin()



def sign_in(objeto):
    #compara los usuarios con la BD y si no estan los rechaza.

    mail = objeto["User"]
    pwd = objeto["Password"]

    return CONEXION_LOGIN.sign_in(mail,pwd)

def sign_up(objeto):

    mail = objeto["User"]
    pwd = objeto["Password"]

    return CONEXION_LOGIN.sign_up(mail,pwd)

def Test_Login(objeto):
    print (sign_in(objeto))


def Test_Register(objeto):
    print (sign_up(objeto))