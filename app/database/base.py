# -*- coding: utf-8 -*-

from app.config import SQLAlchemyDB as db


class BaseMethod(object):
    __table_args__ = {'mysql_engine': 'MyISAM', 'mysql_charset': 'utf8'}

    # insert and update
    def save(self):
        db.session.add(self)
        db.session.commit()

    # delete
    def delete(self):
        db.session.delete(self)
        db.session.commit()
