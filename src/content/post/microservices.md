---
publishDate: 2022-12-14
title: Microservices
slug: microservices
excerpt: Moving from monolith to microservices is an incremental decoupling of capabilities. And a mindshift from code thinking to designing well-architected relationships.
image: https://res.cloudinary.com/mentrix/image/upload/v1725436909/microservices_chpv1r.jpg
category: Systems Design
---
> *Just remember: there is no such thing as a microservice. The microservice architecture is an architectural style that structures an application (a.k.a. system) as a set of loosely coupled services.
> ― Chris Richardson*

Many teams are moving inexorably away from monolithic software. While the phrase “monolith” has taken on a negative connotation, there’s nothing inherently wrong with monolithic software. The word describes a codebase that is self-contained and mostly independent.

Increasingly, we use the word monolith or legacy to mean a Big Ball of Mud, a codebase that is difficult to change, it's capabilities are set in stone. The popular solution is application modernization, which usually involves microservices.

If circumstances haven’t changed much, legacy software doesn’t necessarily need modernization. When it does, organizations sometimes imagine a Big Lift and Shift Transformation. But that’s not how modernization works.

Moving from monolith to microservices (smaller, containerized applications) is an incremental decoupling of capabilities. Most of the time, microservices are brought online *in relationship* to the current (monolithic) software. Microservices are self-contained and independent, like monolithic software, but unlike monoliths, they depend on **well-designed relationships with other software**. Relationships replace the capabilities that were previously housed wholly inside the monolith.

Microservices are easier to change and evolve … unless they are tightly coupled. In a monolith, information is always available to all the code. Microservices have access to only the information they need, only when they need it. Redesigning the structure and flow of data is critical to loose coupling. When we modernize, we rearchitect space and time in our system.

The most difficult aspect of architecting microservices isn’t Kafka, Kubernetes, Docker or learning GoLang. (Though those skills are challenging!) The most difficult part is changing the way teams, and the organization, think about software. Teams need to adapt to new patterns and surrender those that don’t fit the new paradigm. For example, teams unwilling to let go of database transactions (as essential) will create very complicated microservices implementations.

Microservices rely on pattern thinking. Which often means transforming a linear software delivery approach into an adaptive, learning-driven approach. Otherwise, teams can't help but build a Distributed Monolith In the Cloud.

How do we reconsider and adopt the patterns, in the technology and in the people, that support microservices? What guides our decision making? Where do we begin?

Here are some resources for diving into these questions. They’ll help us explore the patterns, perils and pitfalls while developing the thinking skills needed.

### Microservices Patterns

by Chris Richardson

A comprehensive overview of the challenges teams face when moving to microservices, with industry-tested solutions to these problems.

[Read](https://bookshop.org/a/86792/9781617294549)

### Monolith to Microservices

by Sam Newman

This practical guide, with many insightful patterns, is a companion to  [Building Microservices](https://bookshop.org/a/86792/9781492034025) .

[Read](https://bookshop.org/a/86792/9781492047841)

### Architektur-Migration (nicht nur) zu Microservices (German)

by Eberhard Wolff

The architectures of many systems are suboptimal. Eberhard advises teams moving from monolith to microservices. In this episode, we discuss the typical procedure for such migrations and the challenges that arise. (In German)

[Watch](https://www.youtube.com/watch?v=zFzNe2MTg6Y)

### Seven Ways to Fail at Microservices

hosted by Thomas Betts

Implementing microservices is really challenging and there are many ways to fail. **Holly Cummins** has identified seven ways to fail at microservices. Thomas Betts asks her to describe them and how they can be avoided.

[Listen](https://www.infoq.com/podcasts/seven-ways-failing-microservices/)

### Microservices with Node JS and React

taught by Stephen Grider

This comprehensive course includes building with high-value technology tools. It goes deeper than most courses into the more challenging aspects.

[Learn](https://www.udemy.com/course/microservices-with-node-js-and-react/)


