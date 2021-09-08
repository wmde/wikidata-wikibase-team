# Journey Model COPY (WIP)

## notes: 
- the definitions for hike/trailblaze need work
- what is the definition of discovery ?

## Introduction

The Journey model is a a version of the [Spotify model](https://www.atlassian.com/agile/agile-at-scale/spotify) and has been in use by the Wikidata & Wikibase team since 2019. See the [ So, why the Journey Model?](#so-why-the-journey-model) for why this method was selected. 

## Process Overview
In our Journey model, we separate our work into two concepts: Campsite and Journeys.

[**Campsite**](/process/campsite) is our home. It covers the topics of maintenance, bug fixes, live operations, and similar topics. 
<br> 
[**Journeys**](/process/journeys) involve a group of people who leave camp to focus completely on a topic for a *limited amount of time*. 

**How it works:**
<br>
Campers spend their time keeping everything in order. Then the Product Manager decides on a feature set/ product they'd like to have worked on and organize a [kickoff meeting](#glossary). Everyone at camp is invited (this means all teams!) and the goals and epics involved are introduced. After all the questions and comments have been discussed, a [bonfire meeting](#glossary) is held. During (or shortly after) the bonfire, it is decided who will join the journey.

:::warning
In practice, the order in which the kickoff and bonfire meetings happen are sometimes switched or combined into one meeting meetings -- Adam
:::


There are currently two types of journeys:

[**Hikes**](#hike-or-trailblaze)  are journeys with a clear map
<br>
[**Trailblaze**](#hike-or-trailblaze)  are journeys without a map (often technical in nature)

Journeys exist outside of the campsite and their first order of business is to establish a method of working (usually some variation of [scrum](https://en.wikipedia.org/wiki/Scrum_(software_development)) ) as well as a [Navigator](#glossary). A journey should be no longer than a quarter, but may [run longer].(#hike-or-trailblaze)

*To see examples of what was produced during a journey, check out the [Projects](https://wmde.github.io/wikidata-wikibase-team/projects/) section!*

The journey concludes with a [Marshmallows (or S'mores) meeting](#glossary). The people on the journey invite everyone in the software development department to show their result and then talk about their trials and tribulations (and, of course, successes!).

After this meeting, everyone on the journey returns to camp. To make sure that the entire team is able to maintain the new feature or product there is a final step: ["boot cleaning"](#glossary). The boot cleaning phase has at least one person from the journey in camp for a minimum of four weeks. This person assists the other campers with any journey-related bugs or incidents which may pop up. 

## Journey Lifecycle
<!-- |Step: | Discovery | Kickoff/ Bonfire| Journey| Marshmallows (S’mores)| Boot Cleaning|
|--- | --- | --- | --- | --- | ---|
|Involved | PM / UX / Devs / Etc | Everyone | Journey Team | Everyone | 1 Journey-er + Campers| -->

|Step|Name|Duration | Involved|
|--- | --- | --- | --- |
|1|[Discovery](#discovery) | TBD | PM / UX / Devs / Etc | 
|2|[Kickoff/ Bonfire](#bonfire-kick-off) |1-2 Meetings|  Everyone |
|3|[Journey](#journey)| 3 months |Journey Team | 
|4|[Marshmallows](#marshmallows-s-mores) (S’mores)|1 Meeting |Everyone | 
|5|[Boot Cleaning](#boot-cleaning)| 4 Weeks after Journey's end | 1 Journey-er + Campers|


For details on each of the steps, please see the [Glossary](#Glossary).






## Hike or Trailblaze?

Hike are journeys that have clear map to achieve their goal.  

Hikes...
- are driven by a Product Manager
- form around a product on the roadmap
<!-- - can invite people from other camps to join their hike. -->
- have no team limit (as long as the camp is protected)
- should not last more than one quarter (3 months)


Trailblaze are journeys without a clear map. Part of their task is to find the way to achieving their goal. They follow the same processes as a hike except: 
- anyone may propose a trailblaze
- The kickoff must be persuasive enough to get it accepted into the roadmap

If a journey 

## Discovery

TBD

## Bonfire / Kick off 

<ProcessTable
  :what="[
    'A meeting, run by a product representative, that takes place in camp before a journey starts.',
  ]"
  :why="[
    'Present the journey to the team',
    'Decide who goes on the journey',
  ]"
  who="All involved parties of the journey should attend: Engineers, Product Manager, UX/Com/Architect (if needed)"
/>

During the bonfire, the team is encourage to self-organize. Meaning:
- the developers can decide whether they want to join a hike and who else is needed
- Non-engineers can be invited to join a hike (UX for example) for limited amount of time or for the full hike.
- Engineering Managers will make the final decision if too few or too many people are interested


While everyone can join a bonfire, only people who are at camp may join a hike

:::tip
**The team is strongly encouraged to say no if they feel that a journey is not well prepared.** A journey will only work if the goals are clear!
:::

## Journey

## Marshmallows (S'mores)

## Boot Cleaning





## Journeys Processes



## Glossary
|What| Details|
|--- | ---|
|**Campsite** | Its our homebase. It covers the topics of maintenance, bug fixes, live operations, and similar topics.|
|**Journeys** | A journey involves a group of people who leave camp to focus completely on a topic for a *limited amount of time*.|
|**Kickoff Meeting** | A kickoff meeting introduces the feature set or product that a stakeholder would like to have worked on. All teams in the department should be invited and the stakeholder should come prepared with the goals and epics involved.|
|**Bonfire Meeting** | During a bonfire, the team members who will work on the journey are decided. In practice, this is often combined with the kickoff meeting|
|**Hikes** | A hike is a journeys with a clear map. Meaning, we know what we're working on|
|**Trailblaze** | A trailblaze is a journey without a map (often technical in nature).|
|**Navigator** | A navigator is an engineers. They are to maee sure the process is working well and that information is funneled to the Product Manager / Engineering Manager and try to be the voice for the team in case unclarities arise. A journey member that holds the map that was given to the group and funnels information from the team / to the team to the outside world.  Ideally the navigator takes care of the team’s processes. (A navigator is not a must and the entire team can share that responsibility).|
|**Marshmallows (or S'mores) meeting** | During the S'mores meeting, what was done during the journey is presented to the department along with the good/bad of the journey|
|**Boot Cleaning** | The four weeks after a journey during which a journey person consciously remains at camp. This person assists the other camps in dealing with any issues which pop up with the explicit goal of knowledge transfer|
|**Discovery**| |
 




## Journey Ceremonies and Artifacts
Below is a table of all the ceremonies and artifacts that are a part of the journey model, who is involved, and where they are occuring.

 - 🔥 is the Campsite!
 - 🥾 are the Journeys!

|What | What | Where its found|
|--- | --- | ---|
|Bonfire | Ceremony | 🥾|
|Daily | Ceremony | 🔥 & 🥾|
|Discovery | Process | 🥾 |
|Marshmallows / Smores | Ceremony | 🔥 & 🥾|
|Navigator | Person | 🥾|
|Navigator Summit | Ceremony | 🔥 & 🥾|
|Retrospectives | Ceremony | 🔥 & 🥾|
|Story Time (aka Sprint Planning) | Ceremony | 🔥 & 🥾|
|Story Writing / Task Polishing | Ceremony | 🔥 & 🥾|
|Task breakdown | Ceremony | 🔥 & 🥾|
|User Story Estimations | Process | 🔥 & 🥾|


## Bonfire / Kick off 


<ProcessTable
  :what="[
    'A meeting, run by a product representative, that takes place in camp before a journey starts.',
  ]"
  :why="[
    'Present the journey to the team',
    'Decide who goes on the journey',
  ]"
  who="All involved parties of the journey should attend: Engineers, Product Manager, UX/Com/Architect (if needed)"
/>

::warn:::
The team is strongly encouraged to say **no** if they feel that a journey is not well prepared**, a journey will only work if the goals are clear.
:::

Daily (Standup)

Story Time (a.k.a Sprint Planning)

## 
## So, why the Journey Model?

:::details Read more about why this model was introduced

### Problems we had

*   Complicated structure to our roadmap, sometimes we had 3 - 4 lanes happening at the same time, sometimes just 1… started to feel we were having a fake constructs of teams, where one team worked on 1 thing and the other worked on 3 different things at the same time.
*   Knowledge sharing between the teams was difficult, people were stuck in their silo and didn’t see what’s going on the other part of the bigger team.
*   We never had time to modernise or try new things out, 2 team structure made it feel like there are always enough products to work on and allocating people to do something new will just not work, unless the entire team is allocated (which is also not what Engineering Manager / Team might want) 
*   We are working in a dynamic industry and also with clear lack of resources (to tackle what we are trying to) - We are in a never ending race to produce and we never find the time to work on our infrastructure (aside from fire fighting)

The problems stated above are not all of our problems of course, these are just the ones we decided to that we feel are more pressing right now.

We can’t solve all of our problems! That we know… so we mapped what are the problems we do want to solve.

### Problems we wanted to solve

*   Be able to allocate **the right amount of people** to work on a product / project
*   Be able to form a team around a technical difficulty we have (outside the roadmap) / tech improvements we need to do, in a planned manner and not just firefighting.
*   Have one goal per team to solve - currently they are having multiple goals we're chasing in parallel which adds to confusion.
*   Be able to share knowledge within the bigger Wikidata group.
    *   A goal would be that the 1 man silo would become a group silo, it’s not a perfect solution, but it’s a start in the right direction.

The idea is to try and solve the problems that are bugging us and from there came the idea to try a version of the Spotify model. The idea is to use the Spotify chapter model as an interface, but implement it in a way that works better for us, the entire “vertical” / “horizontal” wasn’t needed for us, as we don’t have dev-ops and all of the engineers are full-stack.

### Other solutions considered

Splitting into 3 teams, continue with static team structure

1. Wikidata Feature Team
2. Lexeme Feature Team
3. Infrastructure / Maintenance Team

**What problems would that solve?**

This model would have given us a more dynamic way of working, creating 2 feature teams (Lexeme and Wikidata) and one Infrastructure team (mostly to work on core issues and maintenance).

This would also fit more our current roadmap and way of working and would have reduced the Ministry of Magic’s workload by taking 2 developers to focus only on Infrastructure while the rest are still doing feature work.

**What wouldn’t it solve?**

Knowledge sharing wouldn’t have improved and probably worsened by this, as this creates another team silo.

**What issues would come with it?**

Creating a Maintenance / Infrastructure team is problematic to say the least, it’s a team that will do the work that no one wants to do, developers working on these type of teams tend to quickly want to move out after a duration of time.

### A bit of context

First, we played with wordings, generally we asked how words affect culture?

We thought we want to avoid the term **team**, as it comes with previous terminology - a team for us until now is a long running team.

There was a need from our side to make it clear that a “team”:

*   Has one clear goal 
*   Formed and disbanded when a goal is achieved
*   Collects learnings from their _<span style="text-decoration:underline;">journey</span>_ ;) 

And that’s how the **journey** metaphor started. A “team” became “Hikers”, “Trail Blazers” or “Campers” to fit to the journey metaphor, but also to describe the difference between them using one word.

### What are the challenges?

*   Team forming takes time and might lead to slow starts in projects
*   Process around this needs to be airtight, hikes starting without clear goals and clear path will be doomed to fail
*   Puts a lot of pressure on the product work
*   The more journeys we have the more complicated it gets to EM to track what’s going on
    *   Either being a member of all the dailies which will take time or not being a part of them, which means find a new way to gather the information

### Recap of this model’s benefits

*   Hikers / Trailblazers will focus on one thing, which will reduce interruption time and will increase quality of work and focus
*   Dynamic model allows the camp to accept more work just by forming a new hike
*   Knowledge sharing is integrated into the process, in the 20% consultation time and in the dynamic switch of teams
*   Forces clear goals before hike / trailblazing forms and works with the Kickoff concept of new products
*   Creates an opening to invite UX to join our journeys 

:::
