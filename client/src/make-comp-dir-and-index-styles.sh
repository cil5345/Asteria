#!/bin/bash
printf "Component name:"
read comp
mkdir components/$comp
touch components/$comp/index.js
touch components/$comp/style.css
printf 'import React from "react"
import "./style.css" \n \nexport default function ' >> components/$comp/index.js
printf $comp >> components/$comp/index.js
printf '() {\n \n return \n}' >> components/$comp/index.js
