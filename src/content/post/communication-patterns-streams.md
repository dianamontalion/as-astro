---
title: Communication Patterns - Streams
slug: communication-patterns-streams
date_published: 2023-02-07T16:57:00.000Z
date_updated: 2024-07-28T23:14:33.000Z
excerpt: Where once there were events, now there are flows of data published continuously.
image: https://res.cloudinary.com/dceomfgwj/image/upload/v1725385240/json_vn9bwd.png
category: Systems Design
tags:
  - communication patterns
---
> *“Event-driven architecture gives you this shared language to help have those conversations [between business and technology]. You can go to people in your business and say: "What are the important events? What are the things that happen in the world, in the business, that have a big influence that we need to publish [and] have an ongoing record of?”
> -- Gwen Shapira*

This series:
- [Intro](/communication-patterns-intro)
- [Decoupling](/communication-patterns-decoupling)
- [Integration](communication-patterns-integration)
- [APIs](/communication-patterns-apis)
- [Events](/communication-patterns-events)
- **Streams**

Ten years ago, this series would have ended last week, with software communicating with other software using event messages. The communication of those events might happen every week, day, hour, five minutes, or whenever a relevant action happens, like Publish(ing) new content. Varying amounts of information are shared (or not) when the event message is sent.

Now, there are also streams — flows of data published continuously in real time. The difference between event streams and "legacy" events is like a parent using a baby monitor, rather than getting a notification when the baby cries or checking every so often to see if the baby is awake.

Bigger information systems can, and often do, mix different types of event architectures. The “right” communication patterns depend on what organizational information is doing and when it’s doing it. Systems architecture, like all human communication design, is more of a dance than a strict following of rigid rules. Rules matter, nobody wants to wreak havoc by having no defined boundaries for information sharing. Event streams create boundaries that are more fluid and flexible while still creating a dependable infrastructure.

The word “stream” is an apt analogy. Unlike the events we explored in last week’s edition, an event stream is a constant flow, a river, of information. All the events and the information that goes along with them are (usually) in that river. Everything relevant that happens in the software that makes up the system goes into that flow. Other parts of the system fish out whatever they want to capture.

Imagine information as fish, pulled out of the event stream. The fish doesn't live permanently outside of the stream. It is consumed, stored to be consumed later, or transformed into something appropriate to the circumstance (baked salmon). Meanwhile, the source, the natural habit, is the river. This is a magic river though, where every fish extracted also remains in the river. You can go back next year and pull the same fish out again.

For example, when a customer buys a product, the information goes into the stream. Other software parts take action, like sending a confirmation email. When the email is sent, an event is sent to the stream. And so on throughout the life cycle of the experience. In traditional systems, inventory numbers and sales data live in a database. With streams, the source of truth for those transactions is the stream.

If I create a new service that analyzes customer buying activity, I don't have to migrate data into that service. I can read from the stream, going back as long as the information "fish" are still living in there.

Some software parts add information to the stream, some consume information, and some take information then transform it — adding a relationship between the Buy event and the Shipped event, for example. This entire process might sound like writing to a database and in some ways, it is. Unlike a database though, an expanding spreadsheet of queryable, relational information, an event stream is a snapshot of the system’s communications at any moment in time. It is data storage in motion.

There are many benefits to this approach -- if the complexity of implementation is worthwhile. Primarily, event streams move the source of informational truth out of software itself and into a shared space. Which liberates organizations from monoliths, where information is trapped inside the logic of a single piece of software. Streams enable faster deployment of new software that is decoupled from, but relies on, information created by other software parts.

When done well, the world is your oyster. Streams can support new products and relationships between information that meet the evolving needs of users, rather than being constrained by the information structure built for the needs of yesterday.

Which all sounds lovely but we shouldn’t ignore the real-world complexity. Streams are expensive, in money and expertise. For organizations like LinkedIn, Intuit, AirBnB, Twitter and Square, event streams are essential to exist in the modern digital ecosystem. For other organizations choosing to adopt this approach, careful architecture is needed to avoid a flood of information that is more difficult to manage than the original challenges the stream solved.

Streams are architected and can have an inherent structure, in the form of topics. Other parts listen for a particular topic, like only Shipped events. Our book recommendation below is our favorite place to begin understanding event streams.

As always, we’d love to hear your thoughts and recommendations.

### Designing Event-Driven Systems

**by Ben Stopford**

After reading this book, you'll have a sufficient understanding of the patterns and principles of streaming. It's a great place to start. You can download a copy for free from Confluent.

[Read](https://www.confluent.io/resources/ebook/designing-event-driven-systems/)

### Kafka Streams 101

**by Sophie Blee-Goldman**

A good overall introduction to streams from an engineering point of view. This series of short videos includes the concepts you need to begin building streaming applications.

[Watch](https://www.youtube.com/playlist?list=PLa7VYi0yPIH35IrbJ7Y0U2YLrR9u4QO-s)

### Streaming Audio: A Confluent Podcast about Apache Kafka

**by Kris Jenkins**

Explore wide ranging topics, from implementation methods to data democratization. There are 255 episodes, dive in anywhere.

[Listen](https://developer.confluent.io/podcast/)

### Learn About Kafka

**taught by Tim Berglund and team**

A series of courses from Confluent Developer that explore the basics of streaming through the advanced concepts, including security.

[Learn](https://developer.confluent.io/learn-kafka/apache-kafka/events/)

