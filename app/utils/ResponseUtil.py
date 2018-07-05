# -*- coding: utf-8 -*-

from app.utils import JsonUtil



def standard_response(data):
    rst = {}
    rst['data'] = data
    return JsonUtil.object_2_json(rst)


