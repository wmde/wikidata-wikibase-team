# Incident Management

The Incident Management process aims to ensure that the following errors get the attention they deserve:
- bugs in production in wikibase code base
- bugs in production in wikidata
- bugs in wikidata or wikibase blocking current development in other teams e.g. Wikidata/Wikibase, WMF.

There is **always one person in the team with the Incident Manager role** which changes weekly on a rotational basis based on the availability of the team members. 

In case someone in the team detects an issue that may comply with any of the descriptions above, they should inform the incident manager on duty.

For that there are three possible channels:

- The name of Incident Manager of the week is written on the Journey Model calendar in an event that covers the full week. (EMs are responsible for that calendar entry.)
- WD/WB Incident Manager mattermost channel
- Send an email to the wikidata-emergency email address

:::details Why was the process created?

With the current size of the team (especially number of engineers), and the broad scope of software system we're responsible and co-responsible for, we intend to optimize the way we handle unexpected interruptions and regressions.
In particular, we want to avoid multiple engineers investigating and resolving these, without being aware of each other's activity.
Also, we strive for improving the communication around these issues by ensuring the clear current status of their resolution is always known.

:::

### Useful links

[Wikidata bug tracker issues with the highest "Unbreak Now!" priority](https://phabricator.wikimedia.org/maniphest/query/CE0.8hatW_LF/)
