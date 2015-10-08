import json
import os
import codecs
import jinja2
from collections import OrderedDict

with open('../data/data.json') as file:
	data = json.loads(file.read())

pubs_order = ["PBS Mediashift", "Mashable", "Pretty Much Amazing", "Evolver.fm", "North by Northwestern", "The Omelette Chronicles", "Eat Your Jams"]
pubs = OrderedDict()

for pub in pubs_order:
    pubs[pub] = []

for pub in pubs:
	for item in data["writing"]:
		if item["pub"] == pub:
			pubs[pub].append(item)

data["writing"] = pubs

env = jinja2.Environment(
    loader=jinja2.FileSystemLoader('templates'),
    variable_start_string='{{--',
    variable_end_string='--}}',
    trim_blocks=True,
    lstrip_blocks=True
)

index = env.get_template('index.html')
photo_unit = env.get_template('photo_unit.html').render(data=data["photo"])
code_unit = env.get_template('code_unit.html').render(data=data["code"])
design_unit = env.get_template('design_unit.html').render(data=data["design"])
writing_unit = env.get_template('writing_unit.html').render(data=data["writing"])

result = index.render(
    photo=photo_unit,
    code=code_unit,
    design=design_unit,
    writing=writing_unit
)

with codecs.open('../index.html','w','utf-8') as file:
    file.write(result)