from flask import render_template,request
from app.config import app,SQLAlchemyDB as db
from app.database.model import RedisInfo
from app.utils import StringUtil
from flask_script import Manager
from app.utils import ResponseUtil


@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/api/add',methods=['POST'])
def add_redis():
    host = request.form.get("host")
    port = request.form.get("port")
    password = request.form.get("password")

    md5 = StringUtil.md5(host + str(port))
    redis_info = RedisInfo.query.get(md5)
    if redis_info:
        redis_info.password = password
    else:
        redis_info = RedisInfo(md5=md5,host=host,port=port,password=password)
    redis_info.save()
    return ResponseUtil.standard_response(redis_info.dict())

@app.route('/api/redis_info', methods=['GET'])
def redis_info():
    redis_info = RedisInfo.query.get(md5)
    if redis_info:
        return ResponseUtil.standard_response(redis_info.dict())
    return ResponseUtil.standard_response('Not Found!')

@app.route('/api/redis_list', methods=['GET'])
def redis_list():
    redis_all = RedisInfo.query.all()
    redis_all = [r.dict() for r in redis_all]

    return ResponseUtil.standard_response(redis_all)

manager = Manager(app)

@manager.command
def createdb(drop_first=False):
    """Creates the database."""
    if drop_first:
        db.drop_all()
    db.create_all()
    print('OK: database is initialed.')

if __name__ == '__main__':
    app.run()
