#!/bin/bash

set -e

# Fetches data that the team site needs for all github repositories in repositories.json

SCRIPTDIR=$(dirname "$(readlink -f "$0")")

git clone https://github.com/wikimedia/Wikibase $SCRIPTDIR/../data/tmp/git/Wikibase

# cat $SCRIPTDIR/../data/repositories.json | jq -r '.main[] .github | sub("https://github.com/";"")' | while read line ; do
#     $SCRIPTDIR/gen-github-repo-data.sh $line
# done

# # Combine multiple JSON files into a single JSON file, indexed by repo github url
# jq -n 'reduce inputs as $s (.; .[$s.data.repository.url] += $s)' $SCRIPTDIR/../data/tmp-github-*.json > $SCRIPTDIR/../data/github.json

# # Remove the temporary files
# rm $SCRIPTDIR/../data/tmp-github-*.json