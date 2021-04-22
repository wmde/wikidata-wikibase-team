#!/bin/bash
# Fetches data that the team site needs for all github repositories in repositories.json

SCRIPTDIR=$(dirname "$(readlink -f "$0")")

cat $SCRIPTDIR/../data/repositories.json | jq -r '.main[] .github | sub("https://github.com/";"")' | while read line ; do
    $SCRIPTDIR/gen-github-repo-data.sh $line
done