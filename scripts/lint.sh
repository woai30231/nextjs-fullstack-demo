#!/bin/bash

echo "Started"

pnpm --silent format:fix --log-level silent
echo "Prettier Completed"
pnpm --silent lint:fix
echo "Eslint Completed"
pnpm --silent typecheck
echo "Typescript Completed"

echo "Done"
