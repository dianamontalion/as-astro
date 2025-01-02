---
publishDate: 2023-06-14
title: Communication Patterns - APIs
slug: communication-patterns-apis
excerpt: As complexity increases, more software parts act as a source of information -- with layers that govern communication.
image: https://res.cloudinary.com/mentrix/image/upload/v1725385240/json_vn9bwd.png
category: Systems Design
tags:
  - communication patterns
---

> “It seems we’ve got a mental block when it comes to hypermedia in web APIs. This is a big problem, because hypermedia is the feature that makes a web API capable of handling changes gracefully.”
> -- Leonard Richardson

This series:

- [Intro](/communication-patterns-intro)
- [Decoupling](/communication-patterns-decoupling)
- [Integration](communication-patterns-integration)
- **APIs**
- [Events](/communication-patterns-events)
- [Streams](/communication-patterns-streams)

In this series, we’ve explored drawing boundaries around software parts. We’ve discussed integration patterns forming new relationships between decoupled parts. This week, we explore creating structure for the “sources” of information in a decoupled system. Specifically, how APIs can communicate information in a well-structured way.

Sources of information have layers; the software part itself, the logic that governs communication, the specific digital locations where communication happens (endpoints) and the information being shared. The layers that interface with consumers and govern communication with the application, are the API (application programming interface).

Designing these layers will likely be familiar. Even tightly-coupled software (usually) interfaces with other software or resources. Software that serves web pages, for example, is a source of information, with an endpoint (URL) that serves it (to a browser) based on logical rules.

Sharing information depends, to some extent, on when that information is needed. When a customer buys a product, the software part handling the transaction might want to find out, from another software part, if the customer has a credit that can be applied. When a news article is updated, readers need to see the edited version. In some situations, a consumer checks the source for new information every 24 hours. In others, consumers send bazillions of asynchronous requests.

We will dive into timing (events) in subsequent weeks. In another edition, we’ll discuss streaming information and events. Here, we’ll specifically look at APIs as the interface to share and retrieve information.

In its simplest form, an API enables one software part to get information from another software part. **As complexity in a system increases, APIs become integrated into the architecture, essential to the system’s design.** Kubernetes, for example, makes extensive use of APIs to orchestrate interactions across a complex series of services.

APIs can retrieve information from many types of storage; databases, S3, file systems, as well as operating systems, services running in the cloud, etc. They can be local or remote, using different types of protocols (HTTP, RPC). They can structure responses using XML, JSON or … there isn’t a limiting rule about the structure of responses except that ideally, they are useful and appropriate for the consumer. APIs that return HTML, for example, aren’t helpful to consumers that aren’t displaying web pages.

The emerging practice of Hypermedia APIs generates responses that are dynamic and discoverable. Instead of getting the static information, consumers get links to endpoints where further, deeper information is available. The consumer’s logic dictates which links to follow. A query language like GraphQL can sit on top of an API so consumers can ask for exactly what they want, across multiple API endpoints, and omit information they don't need. The more sophisticated our digital systems become, the more avenues of communication design open up.

Here are some resources to explore APIs. As always, we’d love to hear any recommendations you have!

### Designing Web APIs: Building the APIs that Developers Love

**by Brenda Jin, Saurabh Sahni and Amir Shevat**

Selecting a book to feature in this edition was tough. There are other excellent books on this topic, with slightly different points of view. This book is a good start, though reading four or five competing books is better.

[Read](https://bookshop.org/a/86792/9781603580557?ean=9780321200686)

### Unlock the Secrets of Great, Lasting APIs

**by Mike Amundsen & Casey Rosenthal**

This is the first goto; Book Club video and a good intro to the series. It includes other interviews about APIs that are worth watching. Each gives an overview of API thinking from the minds that teach it.

[Watch](https://gotopia.tech/bookclub/episodes/21/how-to-build-solid-and-great-apis)

### APIs Unplugged

**hosted by Matt McLarty & Mike Amundsen**

This podcast has three seasons of episodes ... a cornucopia of discussions on API essential topics. Dive in anywhere.

[Listen](https://soundcloud.com/mulesoft/sets)

### REST APIs with Flask and Python

**taught by Jose Salvatierra**

This bestselling Udemy course has 20K positive reviews and 100K students thus far. If you are a beginner, this is an ideal course to try. The mix of toolset makes it fun for non-beginners too.

[Learn](https://www.udemy.com/course/rest-api-flask-and-python/)
