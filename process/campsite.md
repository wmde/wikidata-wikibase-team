# Campsite

**Campers will work in a Kanbanish** and will mostly do maintenance work, minor features and bug fixes that are not related to ongoing journeys.

They should use the **20% consultation** time that the hikers / trailblazers reserve to get help on **how to solve the things they are working on, but they have never seen before.**

You can find the work on an [infinate iteration Phabricator board](https://phabricator.wikimedia.org/project/view/3539/).

**Campers (Metaphors)**

*   The camp is our home - we all belong there
*   We need to make sure it could grow to our needs and contain what our hikers are bringing in
*   Our camp should be strong enough to handle rain and even rainstorm and campers should prepare for those scenarios

Campers will…

*   do maintenance work and bug fixes
*   finish loose ends of other features if needed 
*   work in kanban and will follow the process Ministry of Magic team has established and works well (see campers process below)
*   Campers / Engineering Manager can (and are encouraged to) create a Trailblazers team to tackle big maintenance issues / tech innovation they want to try and have a kickoff meeting and try to form their journey
*   There must always be **1.2 FTEs on camp (on average - they can still take holiday etc..)**

## Process overview

| Rituals & Details      |  |
| ----------- | ----------- |
| Daily      | ✔️ Every workday       |
| Story Time   | ✔️ Once a week, 45 minutes     |
| Task Breakdown   | ❔ Weekly, as and when needed     |
| Board clean up | ✔️ Once a week 15 minutes after story time |
| Retrospective | ✔️ Every 2 weeks, 60 minutes. |
| Working mode | Kanbanish with Story times |
| Commitment | Take the task from highest priority Story from the "To Do" column |

## Task input

Campsite tasks come from a variety of places, but generally they all start life as Phabricator tasks, moving through one of 4 owned backlogs, the appropriate sessions to prepare the task for pickup, eventually making their wait to the Campsite storytime and iterration.

```mermaid
graph LR
A[Task created]:::created -->B1(Wikidata product backlog):::backlog
A[Task created] -->B2(Wikibase product backlog):::backlog
A[Task created] -->B3(General Tech backlog):::backlog
A[Task created] -->B4(Design System backlog):::backlog

B1(Wikidata product backlog) -->Backlog1(Prioritized backlog):::prio
Backlog1(Prioritized backlog) -->CP1(Product Polishing):::groomOrPrio
CP1(Product Polishing) -->C2(Storytime)

B2(Wikibase product backlog) -->Backlog2(Prioritized backlog):::prio
Backlog2(Prioritized backlog) -->CP2(Product Polishing):::groomOrPrio
CP2(Product Polishing) -->C2(Storytime)

B3(Wikidata / Wikibase Tech backlog) -->P3(Tech Prioritization Session):::groomOrPrio
P3(Tech Prioritization Session) -->Backlog3(Prioritized backlog):::prio
Backlog3(Prioritized backlog) -->CP3(Tech Polishing):::groomOrPrio
CP3(Tech Polishing) -->C2(Storytime)

B4(Design System backlog) -->P4(DS Grooming Session):::groomOrPrio
P4(DS Grooming Session) -->Backlog4(Prioritized backlog):::prio
Backlog4(Prioritized backlog) -->C2(Storytime)

C2(Storytime):::woo -->C3(Iteration):::woo

%% Colours progress from red -> orange -> yellow -> green, as they go via the blue bits of process
classDef created fill:#fa8072;
classDef backlog fill:#dc8b23;
classDef groomOrPrio fill:#6495ed
classDef prio fill:#f8de7e
classDef woo fill:#1de249;
```

## Tech polishing

Tech polishing happens before the Campsite received tickets from the tech backlog to the Campsite Storytime.

<ProcessTable
  :what="[
    'A weekly 45 minuite meeting to polish tech backlog tickets about to head to Campsite Storytime.',
  ]"
  :why="[
    'Specify possible missing details in the tickets to be presented in the Campsite Storytime',
    'Have a more productive and time-efficent Storytime meeting, by having som questions asked in advance'
  ]"
  who="Tech lead (or representative), Campsite representative"
  since="November 2020"
/>

:::details Campsite representative

If you want to have a look at what will be polished ahead of time, ask the Tech lead (or representative) to ensure the "Prioritized tech" column is up to date and ready.

**During the session**

- Provide questions, thoughts and input on the tasks in the "Prioritized tech" column (that will be brought to the campsite storytime)
- Ensure the task is clear and could be picked up by the campsite

**After the session**

- Report on mattermost to the campsite channel about the tasks that were polished

![](https://i.imgur.com/A2MR204.png)

:::

:::details Tech lead (or representative)

**Before the session**

- Check the Campsite iteration board & talk to other Campsite inputers to see how many tasks it might make sense to bring to the Storytime.
- Add the highest scored tasks from the tech backlog to the "Prioritized tech" column on the Campsite board, ordered from highest to loweest.
- Do not add things that are blocked and thus can not be picked up.
- Keep the "Prioritized tech" column lean, removing anything that is no longer at the top of the tech backlog from the board.

**During the session**

- Introduce the campsite representative to the polishing session if needed
- Iterate through the tasks in the "Prioritized tech" column as time allows
  - Acceptance criteria should be added to the tasks

![](https://i.imgur.com/p1jJo8M.png)

:::

- Tech Lead will make sure the "Tech backlog" on the campsite board has appropriate ordered tasks at the top of it
- A "ticket polishing" session happens weekly with a member of the campsite to ensure the ticket makes sense and to write ACs
- The ticket is represented in a story time by the tech lead for pickup by the team
- Once picked up the task is archived from the tech prioritization system & moved to "Active" on the wdwb-tech board
