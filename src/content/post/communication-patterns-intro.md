---
publishDate: 2023-03-14
title: Communication Patterns - Intro
slug: communication-patterns-intro
date_published: 2022-12-15T21:22:00.000Z
date_updated: 2024-07-28T23:12:02.000Z
excerpt: As we move from software to systems of software, time and relationship is where complexity increases at breakneck speed.
image: https://res.cloudinary.com/dceomfgwj/image/upload/v1725388894/comm-patterns_yc4ihw.jpg
category: Featured
tags:
  - communication patterns
---
> *Objects that interact in a distributed system need to**be dealt with in ways that are intrinsically different**from objects that interact in a single address space*.
> *-- Jim Waldo, Gordon McKay Professor of the Practice of Computer Science at Harvard*

This series:
- **Intro**
- [Decoupling](/communication-patterns-decoupling)
- [Integration](communication-patterns-integration)
- [APIs](/communication-patterns-apis)
- [Events](/communication-patterns-events)
- [Streams](/communication-patterns-streams)

Software development requires thinking about time and relationships. If a program interacts with a database, we’ve created relational timing. Under X circumstances, at Y time, one part of the system will communicate with another part and get Z information. Perhaps we hook into an event to do a query. Perhaps we save a bit of data in the cache for a more ubiquitous use. Perhaps we mix information from an external API with local data. Perhaps we schedule asynchronous activities.

As we move from single-instance software to systems of software, time and relationship is where complexity increases at breakneck speed. **The moment we take a single step towards decoupling software, we discover a Grand Canyon-sized gap of potential architectural patterns.** That gap is filled with many tools and best practices: hypermedia RESTful APIs, cloud native, event messages, event-driven, event-sourcing, Kafka streams, CQRS, data lakes and Kubernetes clusters, to name a few.

Once we know what we’re building, we can take a course or read a book, put our hands in and figure it out. Unfortunately, the “know what we’re building” part is the hard part.

Designing emergent relationships requires new types of pattern thinking. Software thinking doesn’t always translate into systems thinking. When you change time and relationship, you shift the paradigm. This series, *[Communication Patterns](/topics/communication-patterns)* explores some of these shifts.

Systems require a lot more cross-functional communication. Good relationships between software parts depends on good thinking between people. **As we move from software to systems, our skillset expands in many directions at once.**

So where do we begin deciding what to build? It depends. (I know, but it really does.) The patterns we choose depend on what the system is designed to do. They depend on what we want the system to do in the future. For example, building an API that provides information about a widget, we need to know what people (and other software) will do with that information. What will remain static? What behavior do we hope will change or emerge over time?

We can't architect a system that will handle any potential future. Trying to do that is the path to ruin. Instead, **we try to** **design relationships that can grow and change**, without having to throw out everything and start again. Starting again is sometimes exciting (who doesn’t love an innovative green field project?) But it’s not a way to evolve. Just ask the dinosaurs.

> **“In a world where causality is systemic, entangled, in flux, and often elusive, we cannot design for absolute outcomes. Instead, we need to design for emergence.”
> 
> Ann M. Pendleton-Jullian, Design Unbound**

Emergent relationships adapt as circumstances change. “Designing for emergence” happens in the space between tight coupling and tossing everything into a data lake. It is designing for flux.

What’s in flux? **Many aspects of timing and relationship are in flux … we** ***want*** **them to be in flux. Flux is exactly what we are designing.**

Alas, there is no Flux Architecture Definitive Guide.

**Over the next eight editions, we’ll look at key patterns and processes in the gaps between software and systems.** This won't be a linear list – learn Kafka and voila, a system! But taken together, they make cohesive sense. We’ll look at how software communicates, in ways that ensure the conversation isn’t so mono-directional that other parts can’t get a word in edgewise.

Here are some starter resources that give a feel for this type of mindshift. Then, we’ll take it from there …

### Technology Strategy Patterns: Architecture as Strategy

by Eben Hewitt

Strategic thinking and pattern thinking are systems thinking. The challenge for many of us, when designing and implementing new patterns, is the increased need for cross-functional communication. This book weaves the necessary skillsets together into experienced support.

[Read](https://bookshop.org/p/books/technology-strategy-patterns-architecture-as-strategy-eben-hewitt/8141316?ean=9781492040873)

### 12 Patterns for Evolvable Web APIs

by Mike Amundsen

Mike is the “API guy” who literally wrote the books most of us have read. In this talk, he offers 12 patterns and practices for building APIs that can safely evolve over time. And client applications that can adapt to those changes without relying on explicit versioning systems or repeated redeployment.

[Watch](https://www.youtube.com/watch?v=g6n3UGsQpSs)

### APIs Unplugged: APIs in a Nonlinear World

hosted by Mike Amundsen and Matt McLarty with guest Diana Montalion

Matt, Mike and Diana discuss the relationship between APIs, software architecture, and non-linear thinking. They explore the most powerful ways that non-linear, systems, and pattern thinking, can be applied in the context of digital transformation.

[Listen](https://soundcloud.com/mulesoft/apis-unplugged-s3-e11-apis-in-a-non-linear-world-with-diana-montalion)

### Event Sourcing and Event Storage with Apache Kafka

taught by Anna McDonald, written by Ben Stopford

A tasty little morsel of a starter course on thinking in events.

[Learn](https://developer.confluent.io/learn-kafka/event-sourcing/event-driven-vs-state-based/)


