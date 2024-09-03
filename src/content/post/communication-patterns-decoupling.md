---
title: Communication Patterns - Decoupling
slug: communication-patterns-decoupling
date_published: 2022-12-22T16:37:00.000Z
date_updated: 2024-07-28T23:12:30.000Z
excerpt: Exploring how to draw boundaries around software parts. How do you figure out what to decouple from what?
image: https://res.cloudinary.com/dceomfgwj/image/upload/v1725387003/boundaries_jtzwru.jpg
category: Systems Design
tags:
  - communication patterns
---
> *Reducing coupling doesn’t necessarily reduce the risk of making a mistake when changing a single element. Reducing coupling reduces the number of elements changing at once and reduces the chances that you’ll miss one of the elements that need to change in sync.
> -- Kent Beck*

This series:
- [Intro](/communication-patterns-intro)
- **Decoupling**
- [Integration](communication-patterns-integration)
- [APIs](/communication-patterns-apis)
- [Events](/communication-patterns-events)
- [Streams](/communication-patterns-streams)

Each week, we share resources that help us think and act differently, as we move from software to systems (of software). Last week, we introduced an six-edition series on communication patterns – navigating the gaps between software and systems.

This week, we explore how to draw boundaries around software parts. How do you figure out what to decouple from what?

Finding learning resources on this topic is challenging. Most books and courses focus on an implementation choice (microservices) or a particular approach (Domain-driven Design) rather than decoupling itself. Also, **knowing what to decouple depends on your circumstances**.

What does it mean to draw boundaries and decouple? Here’s a familiar example where the boundaries have a clear demarcation: Web content management software, like Drupal and Wordpress are functionally one piece of software. Conceptually, they have a front and back end.

The "back end" is content creation and editing, the PHP code and MySQL (usually) database, along with an interface for editors. The “front end”, aka the theme, is a directory of files, usually HTML, CSS, and Javascript. governing in-browser display and interaction.

This tight coupling of front and back is still widely used. When the software is intended to display local content on a single webpage (like a blog), it’s sufficient.

Increasingly, we live in a “create once, publish everywhere” world. A single news article, for example, displays on a single web page and is also distributed to numerous news aggregators. The article is described with varying summaries posted across the social media landscape. Sometimes it includes video, audio, interactive data, images, contextual links, etc. which may require different distribution paths. In different contexts, the content might display differently (in some languages, for example, a different video might be shown).

Then there are apps, and other “front end” variations, that use the same information but structure it completely differently.

We don’t have sufficient integrated software systems to support this emerging reality. Everyone still does a lot of cutting and pasting.

So what can we do? There are many reasons to create a separation of concerns. Perhaps the front end is constrained by the technology selected for the back end. Building with front end frameworks, like Angular or React, can generate more-performant software with its own logic. The front end team can design their own software and push changes quicker, without getting entangled in a monolith.

Meanwhile, back end software and services can focus on creating, structuring and publishing content that will be consumed by other software.

What changes, in this scenario, when one piece of software becomes two pieces (or more) in relationship to one another? Some examples:

- The backend becomes an information source, content as a service.
- The structure of that information changes from MySQL queries behind a web page to a schema of consistently-meaningful information for various consumers.
- An editor previewing content isn’t looking at a web page. (The content might also be displayed on an Apple Watch.) Instead, they create well-formed and clean content.
- Relationships between pieces of information become increasingly important. Different front end applications can collect and display content in varying ways. For example, displaying all recipes with spinach in them. Without queries, the data needs to be structured for these relationships.
- A front end displays information that is not editable in that application.
- Configuration management gets trickier.
- **Breaking temporal coupling leads to adopting events – events become central to communication.**

In the above example, the two parts were already somewhat defined. But what about a Big Ball of Mud monolith? How would you begin decoupling that software?

First rule: **Start small**, if possible. (It’s almost always possible.) You aren’t “fixing” a monolith – you are trading one set of problems for another. Be clear about why this change helps in your circumstance. Perhaps you need one part of the system to scale and you can’t accomplish that inside the monolith.

**Understand the domain by modeling what the system does.** What do people do and when does it happen? Find a capability that can operate independently. Where would that have the most benefit?

**Design one part so that it does not need to know anything about the other part, except when it does**. Usually, this is done by events. Caution: it’s very easy to build a distributed monolith in the cloud, rather than actually decoupling. If your parts aren't independently deployable, you might still have tight coupling.

In the seven remaining editions in this series, we’ll go deeper into integration patterns, data structures, API design and the ways events can be orchestrated.

Meanwhile, Happy New Year.

P.S. There will be no newsletter on Thursday December 29th. See you next year!

### How to Break a Monolith into Microservices: What to Decouple When

by Zhamak Dehghani

Start with a simple service, then draw out services that are based on vertical capabilities that are important to the business and subject to frequent change. These services should not be dependent upon the remaining monolith. Ensure that each step of migration represents an atomic improvement to the overall architecture.

[Read](https://martinfowler.com/articles/break-monolith-into-microservices.html)

### Monolith Decomposition Patterns

by Sam Newman

GOTO 2019: This talk is similar to the article above. Sam is an engaging presenter and the decoupling concepts are similar to what is described in this newsletter.
​
Alternatively, [Uncoupling by Michael Nygard](https://www.youtube.com/watch?v=esm-1QXtA2Q) (GOTO 2018). He is more Ops focused, so this might appeal to those who want a more technical explanation.

[Watch](https://www.youtube.com/watch?v=9I9GdSQ1bbM)

### Looking Back at Working Effectively with Legacy Code

with Michael Feathers and hosted by Wes Reisz

In his book of the same name, Feathers' discussed leveraging unit tests to introduce--not only a validation of correctness but also-- documentation on a system's operation. This podcast reflects on his experience since, how to decouple and modularize monolithic code, and 24 different techniques to introduce change safely.

[Listen](https://www.infoq.com/podcasts/working-effectively-legacy-code/)

### Moving to Microservices: Part Two (hands on)

taught by Maria Gomez

This short lab from the 2019 O’Reilly Software Architecture conference (the last in-person event) gives a hands-on experience of the concepts we've discussed in this edition.

Requires an O'Reilly platform subscription (free trial available).

[Learn](https://www.oreilly.com/library/view/oreilly-software-architecture/9781492050506/video324131.html)


