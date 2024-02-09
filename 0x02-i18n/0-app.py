#!/usr/bin/env python3
"""
Basic Flask app
create a single / route and an index.html template
that simply outputs “Welcome to Holberton” as page title
and "Hello World" as header 
"""


from flask import Flask, render_template


app = Flask(__name__)


@app.route('/', strict_slashes=False)
def index():
    """
    return 0-index.html
    """
    title = "Welcome to Holberton"
    return render_template('0-index.html', title=title)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000', debug=True)

