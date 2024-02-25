#!/usr/bin/env python3
"""
Basic flask setup
Instantiate Babel Object
create config class for flask app
"""


from flask import Flask, render_template, request
from flask_babel import Babel, gettext


app = Flask(__name__)
babel = Babel(app)


class Config():
    """
    config class for flask app
    """
    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app.config.from_object(Config)


@babel.localeselector
def get_locale():
    """
    determine the best match for supported languages
    """
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/')
def home():
    """
    return 2-index.html
    """
    home_title = gettext('Welcome to Holberton')
    home_header = gettext('Hello World')
    return render_template('2-index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000', debug=True)
