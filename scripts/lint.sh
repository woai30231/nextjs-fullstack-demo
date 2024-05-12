#!/bin/bash

forPush="--for-push"
isForPush="$( [[ $1 == $forPush ]]; echo $? )"

cleanup() {
  if [[ $isForPush == "0" ]]; then
      git stash pop -q
      rm .script
      echo "Stash Applied"
  fi
}

echo "Started"
trap '[[ $? -ne 0 ]] && cleanup' EXIT

if [[ $isForPush == "0" ]]; then
    touch .script
    git stash push -uqm "Backup of auto commit functionality"
    echo "Stash Stored"
fi

yarn prettier:fix --log-level silent
echo "Prettier Completed"
yarn lint:fix
echo "Eslint Completed"
yarn ts
echo "Typescript Completed"

if [[ $isForPush == "0" ]]; then
    git add .
    if ! git diff-index --quiet HEAD; then
      git commit -m "refactor: code reformatted" -q
      echo "Commit Completed"
    fi
    cleanup
fi

echo "Done"