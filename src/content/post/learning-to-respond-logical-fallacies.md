---
publishDate: 2024-03-28
title: Learning to Respond - Logical Fallacies
slug: learning-to-respond-logical-fallacies
excerpt: As knowledge workers, we rely on reasoning to recommend an action and build things. A logical fallacy is a flaw in reasoning.
image: https://res.cloudinary.com/dceomfgwj/image/upload/v1725439384/logical-fallacies_aogptu.jpg
category: Metacognition
tags:
  - learning to respond
---
> *The first principle is that you must not fool yourself and you are the easiest person to fool. -- Richard P. Feynman*

#### This series:
- [Noticing Our Reactions](learning-to-respond-noticing-our-reactions)
- **Logical Fallacies**
- [Start With Why](learning-to-respond-start-with-why)
- [Intuition](learning-to-respond-intuition-2)
- [Inference](learning-to-respond-inference)
- [Integration](learning-to-respond-integrity)
- [Synthesize](learning-to-respond-synthesize)

As knowledge workers, we rely on reasoning. We employ mostly-linear reasoning to incrementally build software. Using programming languages, we construct a demonstrable behavior change. We test our logic as we build, is it sound? Does this variable contain what I meant it to contain? Does this FOR loop generate the intended logic?

Reasoning also builds knowledge outside of the code. We craft recommendations using systematic reasoning and informal logic. For example, when we advocate for an improvement in our deployment workflow, we don’t simply say “We should move to continuous deployment because it’s better.”

We say:

“I recommend moving towards continuous deployment. Specifically, by adopting this workflow as we deliver our first decoupled microservice. This approach allows us to architect and observe deployment methods in one greenfield area. Afterward, we can expand these learnings to other areas of the system, with discernment.

According to our CTO, weekly releases are the biggest blocker to the modernization of our system. Our inability to modernize is degrading our previously-established competitive advantage. Continuous deployment is becoming a widely established industry best practice, let’s not miss this opportunity to grow into it.”

We use inference, a just-big-enough leap in logic, to create a strong connection between our recommendation, why it matters, and the reasons that justify it. We accept that we can’t know, for sure, if we are right because “right” depends on point of view, the context, and experience over time. We can still take sound action … weekly releases are a blocker, here’s something we can do about that today.

Sound reasoning is mental mapmaking, bringing others along with our thinking. We take them on a journey, using inference to create an understanding of the context. Context always matters. Continuous deployment isn’t a universal priority. Our reasoning demonstrates why the idea is important to do *in this circumstance, right now*.

Moving from software to systems thinking is moving from linear to nonlinear reasoning. When we can’t fully test our logic as we construct it because there are too many factors influencing its “rightness”. It’s easy to miss “bugs” in our thinking. Our unexamined thoughts, our leaps of logic, often contain logical fallacies.

A logical fallacy is a flaw in reasoning. The further we move from linear, incremental reasoning the more space is created for logical fallacies to flourish. When shared, erroneous leaps of logic trigger a spiral of fallacious thinking. Rather than supporting sound recommendations, we end up in a maelstrom of persuasion politics.

Advertising and politics *depend* on the use of logical fallacies to control discourse. We are exposed to them constantly. Fallacies are powerful, they appeal to our baser instincts and feel important for convincing people. *We are trained to use logical fallacies rather than to spot them.*

As knowledge workers, we need to spot them. Bugs in our reasoning will inevitably lead to poor systems design.

Here are some examples:

### Strawman

Hollis recommends offloading complexity by using cloud-native tools. Briar responds: “Hollis hates open source.”

Briar has shifted the discussion away from the benefits and drawbacks of cloud-native tools. “Hates open source” is an exaggerated misrepresentation of Hollis’ view. And not the point regardless. Briar could help Hollis consider the benefits of open-source alternatives and compare them to the benefits of cloud-native tools.

### Anecdotal

Hollis recommends building a new capability using microservices, with detailed reasons supporting it. Briar says: “We tried microservices and it was a disaster.”

Briar is using personal experience and an isolated example, instead of engaging Hollis’ reasoning. As they say in finance, “Past performance does not predict future results.” The insights gained last time might improve the odds of success this time. Either way, Briar needs to say more than this one sentence to demonstrate why past experience is relevant now.

### Appeal to Authority

Hollis recommends building a new capability using microservices, with detailed reasons to support it. Briar says: “Our CTO said that microservices won’t work for us.”

An authority thinking that something is true … does not make it true. Like the previous example, this isn’t a sufficiently-valid response. What were the reasons supporting the CTO’s conclusions? “The CTO is concerned about X, Y and Z in our circumstance. Can we discuss those concerns?”

### Bandwagon

We need Kubernetes, everyone is using it now.

When I was a kid and argued that I needed to do something “because my friends are doing it”, the response was “If your friends jumped off a bridge would you do it too?” Alas, perhaps, peer pressure is powerful. But the counterpoint is valid: popularity is not validation. Why is Kubernetes a valuable priority in this context right now?

### Black or White

If you can’t pass this whiteboard test, you can’t succeed at this job.

Be wary whenever anyone argues a binary reality … the world is full of possibilities. Unless your entire job involves passing whiteboard tests in stressful interview scenarios, this is a dubious claim. A famous American example of this fallacy is the New Hampshire state motto: Live free or die. Maybe, move instead?

### Middle Ground

Product team A says the organization needs a car. Product team B says the organization needs a boat. So, the organization builds a carboat.

A compromise between two extremes is not always the truth … or the best solution. Compromise can be a sneaky way of avoiding difficult, collaborative decisions. What does the organization most need? (Hint: It wasn’t a carboat.)

### Burden of Proof

In response to a recommendation shared in a Google Doc, a comment: “This looks like a graph and graphs don’t scale.”

We see this fallacy so often, it might feel normal. The comment shifts the burden of proof onto the recommender. What reasons justify the claim that graphs don’t scale? How are they directly correlated to the context and reasoning in the recommendation?

### Ad hominem

Hollis makes a compelling recommendation for adopting event-based interactions. Briar says “Hollis overcomplicates everything!”

Attacking someone’s character in an attempt to undermine their argument does not undermine their argument. It avoids their argument. (And it’s mean.) Even if Hollis habitually overcomplicates things, Briar still needs to describe how *this* recommendation is overly complicated.

### Appeal to Emotion

An architect shares a recommendation with the engineering team and asks for feedback. The lead engineer tells the team not to respond because “architecture is a bullshit role that doesn’t respect our expertise!”

This is an emotionally-loaded response meant to influence the *feelings* of the team. This scenario is so common, you might be thinking, “hell yes, the lead engineer is right!” Or, at least, you might imagine a scenario in which the architect deserves this reaction. Doesn’t matter. This is a fallacious response because it has nothing to do with the recommendation’s validity. Logical fallacies seem effective but they rarely get us what we really want. Does that reaction solve the problem posed by the lead engineer and generate respect for their expertise? Nope.

### Slippery Slope

If we host parts of our system in AWS, we will be locked in and paying exorbitant fees.

You can not negate a recommendation simply by predicting catastrophe. If there is a connection between one microservices hosted in AWS and bankruptcy, you need to explicitly describe it.

See if you can catch yourself committing an error of reasoning. Practice debugging your thinking by sharing stronger reasons to justify what you say. Try to spot a logical fallacy shared by someone else. More importantly, see if you can catch yourself reacting poorly to it! In subsequent editions, we’ll explore better ways to respond.

### An Illustrated Book of Bad Arguments

**by Ali Almossawi**

This adorable book is a lovely little introduction that you can read, in multiple languages, for free.

[Read](https://bookofbadarguments.com/)

### Monty Python and the Holy Grail: Witch Scene

**by Monty Python**

The most fun anyone has ever had with informal reasoning and logical fallacies.

[Watch](https://www.youtube.com/watch?v=rf71YotfykQ)

### thou shalt not commit logical fallacies

**created by School of Thought**

This site is Logical Fallacy Central ... visit it regularly to brush up on your skills. (The card deck is fun too.)

[Look](https://yourlogicalfallacyis.com/)

### Essential Logic: The Logical Fallacies

**taught by Dr. Christopher Perrin**

This course has a good introduction to argumentation (informal reasoning) that's worth watching even if you don't stay for the fallacies.

[Learn](https://classicalu.com/courses/essential-logic-the-logical-fallacies/lessons/logical-fallacies-introduction/)


