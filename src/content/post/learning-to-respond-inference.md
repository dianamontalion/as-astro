---
publishDate: 2024-06-28
title: Learning to Respond - Inference
slug: learning-to-respond-inference
excerpt: Inference helps us build bridges between from one sound idea to another.
image: https://res.cloudinary.com/dceomfgwj/image/upload/v1725438935/inference_th2ut6.jpg
category: Metacognition
tags:
  - learning to respond
---
> *The greatest progress that the human race has made lies in learning how to make correct inferences. ― Friedrich Nietzsche*

#### This series:
- [Noticing Our Reactions](learning-to-respond-noticing-our-reactions)
- [Logical Fallacies](learning-to-respond-logical-fallacies)
- [Start With Why](learning-to-respond-start-with-why)
- [Intuition](learning-to-respond-intuition-2)
- **Inference**
- [Integration](learning-to-respond-integrity)
- [Synthesize](learning-to-respond-synthesize)

In this *[Learning to Respond](/topics/learning-to-respond)* series, we are on a journey from sharing reactive opinions and ideas to crafting sound, cohesive responses and recommendations. Meanwhile, I am on a seven-week journey, teaching at conferences in the EU. While I’m traveling, we’ll explore tasty tidbits of integral skills needed to create conceptual integrity.

“I will contend that conceptual integrity is the most important consideration in system design. It is better to have a system omit certain anomalous features and improvements … than to have one that contains many good but independent and uncoordinated ideas.” ― Frederick P. Brooks Jr., The Mythical Man-Month: Essays on Software Engineering

Many good but independent and uncoordinated ideas, built into the code, describes every software system I’ve seen. How do we create interdependent and coordinated ideas? The following editions will focus on:

- Inference (this edition)
- Integration (next edition)
- Synthesis (next next edition)

Then we will dive into crafting responses backed by strong, cohesive reasons.

When we are deciding what to do, how best to act as circumstances change, we are rarely making decisions alone. No one person has sufficient subject-matter expertise, experience and authority to decide. We need strong communication to enable people to reach the same conclusions.

Inference is building the bridges needed to cross from one idea to another, in a way that leads towards a sound conclusion. It enables us to form relationships between ideas. When we put two ideas side by side, do they follow, one to the next? If A is true, does that naturally lead us to consider B?

## Examples with weak inference

Here is an assertion we hear often in software development and the solutions we consider. The common structure of idea sharing is “This is true, therefore, this is what needs to happen.” Then, we debate whether or not we agree.

**Our team is struggling to complete work in a sprint. Therefore,**

- we need less work to do.
- we need more people to do the work.
- we need more project management to clarify the work.
- we need a faster DevOps pipeline.
- we need pair programming or mob programming.
- we need better estimation skills.
- we need to abandon estimating because it’s delusional.
- we need more psychological safety.
- we need faster code reviews.
- we need a vacation.
- we need more experienced people.
- we need to uncomplicate our Agile process.
- we need to quit Agile because we have too many meetings.

## The same examples with stronger inference

When we create strong inferences, we don’t simply stick two ideas together. We ensure, through our informal reasoning, that by believing and understanding one assertion, we can naturally accept that the second is also, probably, true.

**Our team is struggling to complete work in a sprint. Specifically, the amount of work queued up for the team to complete in two weeks exceeds the amount of work the team pushes to production.**

The team delivers a dependable amount of work every two weeks and has an established velocity. Yet each sprint, extra work is assigned “to inspire them to be faster”. This antipattern is counterproductive, the team needs the appropriate amount of work, which is less than what is being prioritized.

---

There are three team members on leave, two are on extended parental leave. To continue delivering at the same rate, we need more people to do the work until the full team returns.

---

The team spends 42% of their time clarifying the needs of stakeholders or working with “supervising” engineers to get their approach approved. We need more technical project management support to help clarify the work if we want to increase our delivery speed.

---

If the team does not have work completed in the first four days of their sprint, they might not get the work to production in the weekly release. This release is often blocked. The team gets work “done” but not deployed. To improve sprint consistency. we need a faster DevOps pipeline so we can push to production when work is done.

---

The team’s knowledge is unbalanced, some devs work quickly and some are still learning the basics. Pair or mob programming will help us spread the skills out more consistently and work faster overall.

---

Looking back at four months of delivery data, our estimates are consistently 58% of the actual work needed. We underestimate. We need better estimation skills, beginning with doubling our estimates until we develop a more accurate feel.

---

The organization’s demand for strict estimates in 15-minute increments has shifted the team’s focus away from doing work and towards figuring out all the details before they begin. We are wasting 50% of our time, compared to our previous workflow. We need to abandon estimating, in this way, because it’s delusional (evidence has proven this idea is not producing results.)

---

The team spends a lot of time arguing. Three team members have quit. In their exit interviews, they said they’re going to a company where they can do the work without all the constant personality drama and power-tripping by senior devs. We need more psychological safety if we want to maintain velocity.

---

Over the last three months, the team has consistently opened PRs for all estimated work, then waited for an average of 3.8 days for a code review. We need faster code reviews if we want to complete sprints on time.

---

The team has worked an average of 59 hours per week for three months delivering a Big Feature. They are showing signs of burnout, including forgetting things they rarely forgot six months ago. To improve their velocity, we need to give them a vacation break.

---

The entire team is coding in a brand new language. Either we need to expect less while they upramp their skills or integrate some more experienced people to help them upramp quicker.

---

What began as a self-organizing and invigorating process has become a waterfall-with-Jira process. We are ignoring all the ways Agile supports a team’s ability to self-organize and think well together. We need to uncomplicate our Agile process.

---

The team believes that if they didn’t need to communicate, they could write more code faster. They want to quit Agile because they have “too many” meetings. They are quantifying “too many” and working on a recommendation for restructuring communication flows.

## Three essential inferences

There are “many good but uncoordinated ideas” when there is a lack of inference between three things:

- One idea and another. In the above examples, we have one idea "the delivery is too slow" and another idea "do X." Inference is making the relationship between them clear.
- The Why and the What. One team wants to deliver a new app. One team wants to create a faster DevOps workflow. Neither team describes why their work is valuable to the systems as a whole. How can an organization decide which is the priority?
- The patterns and principles that govern a system. Whenever we add code to a software system, we are implicitly designing relationships between parts of that system. We protect healthy patterns and principles when we connect our ideas to the principles established. For example, we generate events that are structured like other events in the system, or we share our strong reasoning for doing it differently.

Next week, we’ll take the next step beyond inference (ideas that follow) towards integration (ideas that can blend together).

---
