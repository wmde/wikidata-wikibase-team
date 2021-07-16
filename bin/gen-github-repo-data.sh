#!/bin/bash

set -e

# Fetches data that the team site needs for a single github repository
# storing it in the data/github directory...

IFS='/'
read -a parts <<< "$1"
IFS=' '

SCRIPTDIR=$(dirname "$(readlink -f "$0")")
OUTFILE=${SCRIPTDIR}/../data/tmp-github-${parts[0]}-${parts[1]}.json

echo Fetching data for ${parts[0]} ${parts[1]}
echo And outputing to ${OUTFILE}

# Conditional ADR path...
FILE_ADR_PATH="docs/adr"
[ ${parts[1]} = "wikit" ] && FILE_ADR_PATH="docs/src/00-doc/05-decisions-and-ADRs/adr"

gh api graphql -f query="
{
  repository(owner: \"${parts[0]}\", name: \"${parts[1]}\") {
    url
    name
    nameWithOwner
    createdAt
    pushedAt
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
    filesRoot: object(expression: \"HEAD:\") {
      ... on Tree {
        entries {
          path
        }
      }
    }
    filesDotGithub: object(expression: \"HEAD:.github\") {
      ... on Tree {
        entries {
          path
        }
      }
    }
    filesAdrs: object(expression: \"HEAD:${FILE_ADR_PATH}\") {
      ... on Tree {
        entries {
          path
        }
      }
    }
  }
}
" | jq '.' > $OUTFILE
