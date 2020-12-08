import os
#import secrets
#from PIL import Image
from flask import render_template, url_for, flash, redirect, request, abort
from npProject import app
#from flaskblog.forms import RegistrationForm, LoginForm, UpdateAccountForm, PostForm, RequestResetForm, RequestPasswordForm
#from flaskblog.models import User, Post
#from flask_login import login_user, current_user, logout_user, login_required
#from flask_mail import Message


@app.route('/')
@app.route('/home')
def home():
    #page = request.args.get('page', 1, type=int)
    #posts = Post.query.order_by(Post.date_posted.desc()).paginate(page=page, per_page=5)
    return render_template('home.html', title='Home')

@app.route('/categories')
def categories():
    return render_template('categories.html', title='Categories')

@app.route('/register')
def register():
    return render_template('register.html', title='Register')

@app.route('/login')
def login():
    return render_template('login.html', title='Login')

@app.route('/logout')
def logout():
    return render_template('home.html')

@app.route('/article')
def article():
    return render_template('article.html')

@app.route('/readlater')
def readlater():
    return render_template('readlater.html')

