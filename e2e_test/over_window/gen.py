#!/usr/bin/env python3

import os
import shutil
from os import path
from string import Template

cd = path.dirname(path.abspath(__file__))
templates_dir = path.join(cd, "templates")
generated_dir = path.join(cd, "generated")

contexts = {
    "batch": {
        "view_type": "view",
    },
    "streaming": {
        "view_type": "materialized view",
    },
}

file_head = """# This file is generated by `gen.py`. Do not edit it manually!"""

for mode in contexts.keys():
    mode_dir = path.join(generated_dir, mode)
    shutil.rmtree(mode_dir)
    os.makedirs(mode_dir, exist_ok=True)

for file in os.listdir(templates_dir):
    if not file.endswith(".slt") and not file.endswith(".slt.part"):
        continue

    print(f"Generating `{file}`...")

    with open(path.join(templates_dir, file), "r") as f:
        tpl = Template(f.read())

    for mode, context in contexts.items():
        out_file = path.join(generated_dir, mode, file)
        with open(out_file, "w") as f:
            f.write(file_head + "\n\n")
            f.write(tpl.safe_substitute(context))

print("Done.")
