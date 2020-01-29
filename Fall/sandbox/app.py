from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    print(app)
    print(request)
    print(request.args)
    return render_template('form.html')

@app.route('/auth')
def submission():
    print(request)
    return render_template('response.html',
                            name=request.args['name'],
                            age=request.args['age'])
    #return (request.args)['name'] + "\'s brain is " + (request.args)['age'] + " Years Old!"


if __name__ == '__main__':
    app.debug = True
    app.run()
