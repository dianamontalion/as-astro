---
publishDate: 2024-07-28
title: Learning to Respond - Integrity
slug: learning-to-respond-integrity
excerpt: As a systems architect, my primary objective is to recommend changes that have conceptual integrity.
image: https://res.cloudinary.com/mentrix/image/upload/v1725439150/integrity_x7zlxq.jpg
category: Metacognition
tags:
  - learning to respond
---
> *I am more convinced than ever. Conceptual integrity is central to product quality.― Fred Brooks*

#### This series:
- [Noticing Our Reactions](learning-to-respond-noticing-our-reactions)
- [Logical Fallacies](learning-to-respond-logical-fallacies)
- [Start With Why](learning-to-respond-start-with-why)
- [Intuition](learning-to-respond-intuition-2)
- [Inference](learning-to-respond-inference)
- **Integration**
- [Synthesize](learning-to-respond-synthesize)

In this series, *[Learning to Respond](/topics/learning-to-respond)*, we are exploring integral practices needed to craft sound responses to other people’s thinking. Our eventual goal is to deliver system-level recommendations backed by strong, cohesive reasons.

Last week, we focused on inference. This week, we’ll talk about integration.

“I will contend that conceptual integrity is the most important consideration in system design. It is better to have a system omit certain anomalous features and improvements … than to have one that contains many good but independent and uncoordinated ideas.” ― Frederick P. Brooks Jr., The Mythical Man-Month: Essays on Software Engineering

As a systems architect, my primary objective is to recommend changes that have conceptual integrity. Conceptual integrity is one thing every system needs and something few people are concerned about creating.

To integrate is to “combine one thing with another to form a whole”. Conceptual integrity is combining mental concepts (ideas and strategies) so that they form a cohesive whole.

In a cohesive whole, parts fit together. They interdepend and cooperate to serve the mission of the system. This resembles a vibrant relationship, not a dictatorship – building everything into a monolith that “aligns” with one goal. Conceptual integrity helps us avoid the data silos, hacky duct taping and incompatible product dissociation that inevitably results in a system of “many good but independent and uncoordinated ideas”.

When there is conceptual integrity, the relationship patterns between software parts are emergent – they create positive opportunities for outcomes beyond what any of the parts could do alone. For example, a software system that shares events and information is potentially emergent. It enables new software parts to smoothly expand the system’s activities, Whereas adding more code to a highly-controlled, tightly-coupled and rigid software system where one action potentially takes down the whole process is not.

There are many ways to talk about integrity. We can talk about ethics and trustworthiness. We can talk about engineering best practices. We can talk about enterprise integration patterns or finding leverage points. All these ways of looking at integrity matter. Here, we’ll talk about the basics: creating integrity among mental concepts (ideas and strategies) before they are pushed into production.

To explore integration, we’ll talk about the carboat.

The fictitious Carboat Dilemma arose one day when I was faced with an outcome I see again and again. I blurted out, “It’s like one team wants a car. One team wants a boat. So the engineers are building a carboat … which nobody wants.”

This experience is so universal, people in many contexts have recognized it since.

Another common outcome is that one team builds a car. One team builds a boat. And voila! You have a system that contains two “good but independent and uncoordinated ideas”.

When faced with the carboat dilemma, how do you create conceptual integrity? How do you decide which “certain anomalous features and improvements” to omit?

While there is no One Right Answer to “how to cultivate integrity”, there are four integrative practices you can try:

## Why does this matter, now?

The most common reason why two “good but independent and uncoordinated ideas” get into production is our inability to prioritize what matters most to the system as a whole. We want everything! We end up with a tangled mess.

Governing every decision is the question: What is the organization’s mission?

Why does this idea improve the system’s ability to meet this mission? Does this idea matter most, right now? Does the change make the system, as a whole, more valuable?

When faced with the carboat dilemma, my primary question is: Why doesn’t the organization know which one it needs?

How did this schism arise in the first place? Can we figure out what matters *most* rather than deliver a carboat (that nobody wants)?

## What capabilities are we considering?

Feature-driven software development asks “What feature do users want?” Then we write requirements and create a timeline for pushing them into production.

Capability-driven software development asks “What capabilities support the highest-value activities in this system?” (This includes, of course, what users want and need to do.) “How can we improve those capabilities?” Work is usually cross-functional and sometimes done by more than one team simultaneously. Regardless of which part of the system we build, we are also always improving the system as a whole.

Stepping back from writing requirements and thinking about the capabilities can help create integrity. A car and a boat have many things in common, e.g. they both transport people. However, one drives on land and the other on water, are those activities equally valuable to the system?

An integrative approach is designing the capabilities they share … with inherent extensibility for building the few capabilities they don’t. (Assuming, after consideration, those are still needed.)

## Have we modeled this together?

Carboats arise when people have very different views of the same problem. Because they view the situation differently, they come up with different (and sometimes opposing) solutions. Collaborative modeling can help create shared insight.

For example, you can invite the car people to model the problem being solved by the boat people. And vice versa. The goal here is not to fix the problem, necessarily. The goal is to create a shared understanding of the challenges being faced. Alternatives often arise during these exercises.

A spirit of cooperation can be the just-enough push needed to create a solution that fits the whole circumstances. With outcomes that are better than the one team could deliver alone.

## Who gets to decide?

Carboats happen when nobody can or will prioritize which changes matter most. Prioritization is hard in part because organizations rely on politics more than reasoning to govern the process.

We can help by providing strong reasoning, regardless of our role. In the following editions, we’ll continue exploring how everyone can improve their responding and recommendation skills. Including methods for strengthening the reasons for acting and giving productive feedback. Even when the decision is not ours to make, we can contribute conceptual integrity.

A carboat in production mirrors the people system that produced it. The organization itself is a carboat. Taking a step back from debating the technology implementation and strategizing better methods for prioritization, resisting the urge to merge ideas rather than resolve their differences, improves conceptual integrity in production.

​

---

## Domain Storytelling: A Collaborative, Visual, and Agile Way to Build Domain-Driven Software

by Stefan Hofer, Henning Schwentner

​This book recommends exercises that will help you step back when you are stuck in the Carboat Dilemma.

[Read](https://www.amazon.com/dp/0137458916/ref=emc_b_5_t)

---


