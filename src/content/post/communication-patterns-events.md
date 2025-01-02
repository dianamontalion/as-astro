---
publishDate: 2023-07-14
title: Communication Patterns - Events
slug: communication-patterns-events
date_published: 2023-01-31T15:06:00.000Z
date_updated: 2024-07-28T23:14:08.000Z
excerpt: Events are the way a system communication that something matterful has changed.
image: https://res.cloudinary.com/mentrix/image/upload/v1725387663/cp-events_htdrv3.png
category: Systems Design
tags:
  - communication patterns
---

This series:

- [Intro](/communication-patterns-intro)
- [Decoupling](/communication-patterns-decoupling)
- [Integration](communication-patterns-integration)
- [APIs](/communication-patterns-apis)
- **Events**
- [Streams](/communication-patterns-streams)

In this series, we’ve decoupled parts of software and formed communicative relationships between them. This week, our focus is events – a system's communication that something matterful has changed.

Let's use an example: Publishing movie reviews for the fictitious MyMovies.com. In the editing software, I write a new review and press "publish". This is the Publish event. I want my system to take actions when Publish happens. I want to update the Latest Reviews section on the homepage, for example. I want to send a push notification or an email to readers who've requested them.

With events, I don't need to know what other parts of my system will do when I Publish. I can send a Publish message to a shared resource (like a queue) and other parts can listen for those messages then take their own action.

For example, a software part (in this case, a microservice) posts the review announcement to Twitter automatically. Another part posts slightly different content to Instagram. The Mastodon service, recently added, came online without changing code in other parts. With events, parts can react asynchronously and evolve in their own way.

Going deeper into this example: The software that displays my site (perhaps using Vue.js) is decoupled from the software where I write and “publish” (we'll call this the source). The display software also gathers information from other sources, like Rotten Tomatoes, and mixes that information with my review.

The display software doesn't only need to know when Publish happens, it also needs the new review content. Not all events include information sharing, but many do.

Parts can share information without events. A simple relationship between the display and the source software is unidirectional. The display software checks the source software via an API (see last edition) every X minutes, or whenever it wants refreshed information.

The next-level relationship, which improves most systems, adds an event message between them. The source sends a notification whenever Publish happens that includes the API link. The display software listens for notifications and retrieves the review using that link in real time.

The next-next-level relationship is a Publish event that includes the review itself, and all the information related to it. Any software part listening for the Publish event will get everything in one step, structured in an understandable way.

The tricky part with this approach is, not all consumers want the same information. Hypermedia APIs and tools like GraphQL can mitigate this “all or nothing” situation. When an event happens, consumers can retrieve only the information they want from the source.

At the uber-next level, events flow through a system and become the source of truth for that system. For example, I write my review using Wordpress and a copy of it lives inside that software. But when I Publish, from the system's point of view, the Publish event and the information shared within it, outside of Wordpress, is now the "source". We'll talk more about this in a later edition.

The Publish event is obviously important in this example. Other parts of my system (and the world) will be interested in it. What about when I fix a typo? When a review is archived? Does the software that generates a Publish event need to share everything?

No, and figuring out which events matter in a system is an important part of the system’s design. Approaches like Domain-driven Design focus on understanding a system's events and information-sharing relationships.

Here are some resources. As always, we’d love to hear any recommendations you have!

### Building Event-Driven Microservices: Leveraging Organizational Data at Scale

**by Adam Bellemare**

This book takes a thorough look at events. The title says “microservices” but, because they are “software parts”, the event aspect doesn’t depend on whether or not the part is technically a microservice.

[Read](https://bookshop.org/p/books/building-event-driven-microservices-leveraging-organizational-data-at-scale-adam-bellemare/14121560?ean=9781492057895)

### Trying Out Online EventStorming

**by Virtual Domain-driven Design**

A live example of a group modeling events. The events are based on a real-life experience rather than a software example. Which is a good way to introduce event modeling.

[Watch](https://www.youtube.com/watch?v=CbPEibNUe0s&t=185s)

### Event-Driven Systems at ASOS

**hosted by members of ASOS' tech team**

A good high-level description of real-world events in a software system, by the ASOS team who live them every day. Like this newsletter, they focus on communication patterns in a system beyond the strictly technical.

[Listen](http://techpodcast.asos.com/episode/988165e6/event-driven-systems-asos)

### Event Driven Architecture - The Complete Guide

**taught by Memi Lavi**

An overview course that goes well beyond the high-level explanations we’ve explored here.

[Learn](https://www.udemy.com/course/event-driven-architecture-the-complete-guide/)

> “If the application is event-driven, it can be decoupled into multiple self-contained components. This helps us become more scalable, because we can always add new components or remove old ones without stopping or breaking the system. If errors and failures are passed to the right component, which can handle them as notifications, the application can become more fault-tolerant or resilient. So if we build our system to be event-driven, we can more easily achieve scalability and failure tolerance, and a scalable, decoupled, and error-proof application is fast and responsive to users.”
>
> -- Nickolay Tsvetinov, Learning Reactive Programming with Java 8
