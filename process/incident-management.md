# Incident Management

The Incident Management process aims to ensure that the following errors get the attention they deserve:
- bugs in production in wikibase code base
- bugs in production in wikidata
- bugs in wikidata or wikibase blocking current development in other teams e.g. Wikidata/Wikibase, WMF.

:::details Why was the process created?

With the current size of the team (especially number of engineers), and the broad scope of software system we're responsible and co-responsible for, we intend to optimize the way we handle unexpected interruptions and regressions.
In particular, we want to avoid multiple engineers investigating and resolving these, without being aware of each other's activity.
Also, we strive for improving the communication around these issues by ensuring the clear current status of their resolution is always known.

:::

There is **always one person in the team with the Incident Manager role** which changes weekly on a rotational basis based on the availability of the team members. EMs organize the allocation.

:::details EM guide to IM Selection

- Create a poll e.g. [dudle](https://dudle.inf.tu-dresden.de/)
- Send poll to IM candidates + EMs
- Create the list of the IMs for the next month taking into account:
  - the availability shown in the poll 
  - and the list of past IMs (striving for a regular frequency for all IMs)
- Add the list to [the sheet](https://docs.google.com/spreadsheets/d/1Uueflfu2DY2UqQdeWnk9OGsGXUKjkJxIu8FtFfdsB-k)
- Send email to the IMs with the list and a reminder of the more important documents:
  - [Sheet to record the incidents](https://docs.google.com/spreadsheets/d/1GKu0PKpK1gw0EEC45V9vkKk8nQJ1pbF7maz5YjWln-0)
  - Incident Management: HowTo (This documentation)
  - Incident management Interaction Flows (This documentation)
- Create weekly entries on the Wikidata - Journey Model Calendar

:::

## Reporting incidents

In case someone in the team detects an issue that may comply with any of the descriptions above, they should inform the incident manager on duty.

You can file a Phabricator task:

- Create phabricator task with error details - [use this form](https://phabricator.wikimedia.org/maniphest/task/edit/form/46/)
  - stack trace, 
  - link showing the failure
  - Add tags:
    - `Wikidata`
    - If NO production error: remove `Wikimedia-production-error`
  - Set priority
  - If appropriate, train blocker ([deployment calendar](https://wikitech.wikimedia.org/wiki/Deployments) has link to current parent task), etc)

And contact the Incident Manager

- WD/WB Incident Manager internal mattermost channel (often the most efficient)
- The name of Incident Manager of the week is written on the Journey Model calendar in an event that covers the full week. (EMs are responsible for that calendar entry.)
- Send an email to the wikidata-emergency email address

## Identifying incidents

Who: Incident manager

How:

- Subscribe to https://phabricator.wikimedia.org/project/board/1055/ 
- You may find [Wikidata bug tracker issues with the highest "Unbreak Now!" priority](https://phabricator.wikimedia.org/maniphest/query/CE0.8hatW_LF/) useful
- Pay attention to your emails (where the wikidata-emergency emails will appaer). For filtering purposes the subject of such emails starts with “[Wikidata Emergency]”

## Manage incidents

Who: Incident manager

How:

- Respond on phabricator
  - Self assign
  - Comment “we are on it” or something similar
  - Verify with PM
    - Re-Check priority
  - Research & document
  - Broadcast 
    - ComCom
    - E-mail to the wikidata/wikibase team or department, if applies
  - Add tag:
    - wikidata-campsite-iteration-∞
- Build & brief workforce
  - Look for takers in the camp channel
  - escalate to EM if no volunteer/expert can be found
- Update status
  - Progress
  - Resolved
- Log incident [in the record sheet](https://docs.google.com/spreadsheets/d/1GKu0PKpK1gw0EEC45V9vkKk8nQJ1pbF7maz5YjWln-0)

## Resolve incidents

Who: Work Force

How:

- Depending on situation
- Be available for report to Incident Manager

## Post-mortems

Who: Engineering Manager

How: Follow these [instructions](https://docs.google.com/document/d/1WiHps-soKYNajgGjJ1Imuh2pauCo-GpBzWd14HmG8uc)

:::tip

More details might appear here soon...

:::