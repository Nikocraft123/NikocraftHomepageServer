import sys
from flask import Flask, render_template, request


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


@app.errorhandler(404)
def not_found(error):
    return render_template("error.html", code="404", message=f"The requested URL '{request.url}' was not found!"), 404


@app.route("/about/")
def about():
    return render_template("about.html")


if __name__ == '__main__':
    app.run(port=80, debug="-d" in sys.argv)
