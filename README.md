
# Projeto com GraphQL.

Neste projeto contém uma API em NodeJS e outra em VAPOR com Swift.<br/>
[/ There are two APIS inside this project, vapor and nodeJs one]

Você 


## Install Depenceny nodeJS.
npm i 
sudo npm i -g knex


## Api: Local pelo nodeJS
http://localhost:4000/api


# 
## CREATE A SCHEMA.json:
apollo schema:download --endpoint=http://localhost:4000/api schema.json


CREATE IN BUILD PHASES :
SCRIPT_PATH="${PODS_ROOT}/Apollo/scripts"
cd "${SRCROOT}/${TARGET_NAME}"
"${SCRIPT_PATH}"/run-bundled-codegen.sh codegen:generate --target=swift --includes=./**/*.graphql --localSchemaFile="schema.json" API.swift





Install VAPOR :
brew install vapor/tap/vapor-beta

Create a Project VAPOR:
vapor-beta new <PROJECT_NAME> -n

Open VAPOR:
vapor-beta xcode