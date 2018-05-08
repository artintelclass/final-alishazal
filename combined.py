# -*- coding: utf-8 -*-
from flask import Flask, jsonify, render_template, request
#import example_helper
import json
import csv
import numpy as np
import chatbot as chatbot


#from deepmoji.sentence_tokenizer import SentenceTokenizer
#from deepmoji.model_def import deepmoji_emojis
#from deepmoji.global_variables import PRETRAINED_PATH, VOCAB_PATH

#yuxin code

# def inp(inout):
# 	your function here 
# 	return inout

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/add')
def add_numbers():
    """Add two numbers server side, ridiculous but well..."""
    #a = request.args.get('a', 0, type=str)#input from html

    a = request.args.get('a')
    print(a)
    result = chatbot.main(a)
    print("Result: ", result)
    #input from html
    returned=a
    #return jsonify(returned);
    return jsonify(''.join(result))

    #return jsonify(result = returned[0])#return something back

app.run( debug = True)