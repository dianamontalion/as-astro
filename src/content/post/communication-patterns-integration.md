---
publishDate: 2023-05-14
title: Communication Patterns - Integration
slug: communication-patterns-integration
excerpt: Exploring patterns for forming new relationships between decoupled parts.
image: https://res.cloudinary.com/mentrix/image/upload/v1725388767/integration_rrj0fy.jpg
category: Systems Design
tags:
  - communication patterns
---
> Excessive complexity is nature’s punishment for organizations who are unable to make decisions.
> *--* Gregor Hohpe

This series:
- [Intro](/communication-patterns-intro)
- [Decoupling](/communication-patterns-decoupling)
- **Integration**
- [APIs](/communication-patterns-apis)
- [Events](/communication-patterns-events)
- [Streams](/communication-patterns-streams)

Last week, we explored drawing boundaries around software parts. What is decoupling, why does it matter and what are some principles for attempting it? This week, we explore patterns and principles for forming new relationships between the (decoupled) parts.

Interestingly, the patterns we rely on today haven’t changed much over time – despite remarkable change in the technology tools that implement them. Like most systems architecture practices, the skills needed to apply them are (somewhat) technology agnostic.

> “When Bobby Woolf and I started to document the [integration] patterns 20 years ago, the key technologies for distributed applications were JMS, SOAP, MSMQ, and .NET WCF. Large-scale application integration was done with integration tools and platforms, such as IBM WebSphere MQ, TIBCO, WebMethods (now Software AG), or Microsoft BizTalk. Although technology has evolved, many of these products still form the backbone of modern enterprises.
> 
> Cloud platforms and deployment automation have laid the foundation for a new generation of distributed systems: microservices and serverless architectures. Those applications rely on a smooth interconnect between components, giving rise to Service Meshes, Serverless Orchestrators, and Event Buses. Amazingly, we find the same integration patterns in those systems!”
> 
> *– Gregor Hohpe*

Patterns enable communication between software parts without tight coupling. Inherent in pattern design is building the necessary mechanisms, like message queues, Kafka streams and endpoints.

**We design**:

1. **Sources of information.** What information needs to be consumed by other parts? Parts become sources and consumers (or both).
2. **When information is shared.** Not everything that happens inside a part needs to be shouted to the world. When does matterful change happen? (Eventstorming can help design this.)
3. **The flow of information**. How will information be carried, stored and/or retrieved between parts?
4. **The structure of information**. Information stored inside a part, for example, in a MySQL database, won’t be understandable to a more semantic consumer, like a React front-end application. Patterns like canonical data modeling create a ubiquitous structure for information.
5. **Orchestration**. Software hosts and manages and cleans up and otherwise orchestrates the relationships between software parts. Software also tests the system in action.

There is no Miracle Pattern that applies to all circumstances. As we move from software to systems (of software), we need two things most of all: experience and sound judgement. It's tricky to discern which patterns will work best in each circumstance. We don't (necessarily) want to do what Netflix does, we want to create patterns that enable emergence: parts together accomplish something valuable that none of the parts could do alone.

Experience lessens our desire for control and increases our ability to create malleable architectures. We discern what matters most (clean, helpful communication) and what matters least (despite cultural imperatives, 99.999% is often indistinguishable from 99.9% in a well-designed system). By learning from the experience of others, we avoid building a distributed monolith in the cloud.

All this to say, books and podcasts are helpful. Here are resources to begin exploring. But playing with patterns is more helpful.

As always, we’d love to hear any recommendations you have!

### Enterprise Integration Patterns: Designing, Building and Deploying Messaging Solutions

by Gregor Hohpe & Bobby Woolf

This book has been around for decades. Yet, it’s still relevant in critical ways. It’s a good place to start thinking about patterns, which can then be adapted to more-modern situations. You can also  [explore them here](https://www.enterpriseintegrationpatterns.com/) (if you don’t mind the old school webpage design).

[Read](https://bookshop.org/p/books/enterprise-integration-patterns-designing-building-and-deploying-messaging-solutions-gregor-hohpe/115845?ean=9780321200686)

### Enterprise Integration Patterns 2

by Gregor Hohpe

This talk at YOW! 2017 explores Enterprise Integration Patterns (see above) … what is next? The author focuses on the thought processes behind patterns. A highly-recommended companion to reading the book.

[Watch](https://www.youtube.com/watch?v=QmaNucXFYd8)

### Grow Your Business Through Enterprise Integration, a Live Interview w/ a Panel of Experts

hosted by WBSRocks Podcast

This podcast is from a decidedly business perspective. When considering pattern changes, it helps to hear the language people use to describe them. We miss a lot when we look at solutions strictly through the lens of technology implementation.

[Listen](https://podcast.wbs.rocks/1456882/8958353-wbsp151-grow-your-business-through-enterprise-integration-a-live-interview-w-a-panel-of-experts)

### Data Integration: EAI Patterns (Beginner)

taught by Ron Johnson for Skillsoft

If you want to get your hands dirty with some hard-core implementation of a few basics. Fair warning: he says "applications" a lot.

[Learn](https://www.skillsoft.com/channel/data-integration-6d9c0e90-b293-11e7-a9da-49acecd508d2?technologyandversion=54746&amp;expertiselevel=54745)


