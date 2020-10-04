
# Projeto com GraphQL.

Neste projeto contém uma API em NodeJS.
[/API in NodeJS with GraphQL]

## Install Depenceny nodeJS.
npm i 
sudo npm i -g knex

## Api: Local pelo nodeJS
http://localhost:4000/api

# Look :
## CREATE A SCHEMA.json for iOS:
apollo schema:download --endpoint=http://localhost:4000/api schema.json


## CREATE IN BUILD PHASES :
SCRIPT_PATH="${PODS_ROOT}/Apollo/scripts"
cd "${SRCROOT}/${TARGET_NAME}"
"${SCRIPT_PATH}"/run-bundled-codegen.sh codegen:generate --target=swift --includes=./**/*.graphql --localSchemaFile="schema.json" API.swift