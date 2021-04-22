#!/bin/bash
# Fetches data that the team site needs for a single github repository
# storing it in the data/github directory...

IFS='/'
read -a parts <<< "$1"
IFS=' '

SCRIPTDIR=$(dirname "$(readlink -f "$0")")
OUTFILE=${SCRIPTDIR}/../data/github/${parts[0]}-${parts[1]}.json

echo Fetching data for ${parts[0]} ${parts[1]}
echo And outputing to ${OUTFILE}

gh api graphql -f query="
{
  repository(owner: \"${parts[0]}\", name: \"${parts[1]}\") {
    url
    name
    nameWithOwner
    description
    descriptionHTML
    primaryLanguage {
      name
    }
    languages(first: 5) {
      nodes {
        name
      }
    }
    defaultBranchRef {
      target {
        ... on Commit {
          tree {
            entries {
              name
            }
          }
        }
      }
    }
  }
}
" | jq '.' > $OUTFILE
