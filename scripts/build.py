import json
import os
import codecs
import jinja2
from collections import OrderedDict

with open('../data/data.json') as file:
	data = json.loads(file.read())

env = jinja2.Environment(
    loader=jinja2.FileSystemLoader('templates'),
    variable_start_string='{{--',
    variable_end_string='--}}',
    trim_blocks=True,
    lstrip_blocks=True
)

index = env.get_template('index.html')
code_unit = env.get_template('code_unit.html').render(data=data)

result = index.render(
    code=code_unit
)

with codecs.open('../index.html','w','utf-8') as file:
    file.write(result)