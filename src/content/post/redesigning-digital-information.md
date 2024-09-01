---
title: Redesigning Digital Information
slug: redesigning-digital-information
date_published: 2023-03-07T20:25:00.000Z
date_updated: 2024-07-28T23:16:30.000Z
excerpt: Information designed to fit software logic must now be restructured to serve emergent consumer logic.
---

When *The Economist* envisioned their digital presence, they imagined a weekly print magazine readable via a web browser. In print, an article might span a few pages but digitally, one article equals one page. Wikipedia imagined a digital encyclopedia where every subject, from Albert Einstein to high five, was an editable web page. The home page of the New York Times was the digital translation of front-page news.

Fast forward a decade or so. *The Economist* publishes an article to dozens of digital platforms; they also have films. Wikipedia is a ubiquitous digital knowledge graph helping to structure the internet. And more than 6 million people subscribe to the digital-only version of the NY Times.

The paradigm has shifted – from publishing pages to a hyperconnected, interrelated information system in motion across the digital ecosphere. Information is consumed by many different devices in many different contexts. This shift triggers the need for digital transformation.

Invariably, organizations approach this change as a technology change. Decouple the front end, choose between React and Vue. Design continuous delivery pipelines to liberate deployment from years of weekly releases. Build APIs, publish events and put microservices in containers.

These tools and practices support transformation … but they are not the transformation. Transformation is at the heart of the system. ***Information designed to fit software logic must now be restructured to serve emergent consumer logic.***

In other words, the way we design information needs to shift first, before we rebuild the technology around that information.

To begin modernizing, many digital content providers go headless – decoupling the logic of display and user interaction from the “source” of information (where it is edited). This is a valuable step, but the source’s API was not designed to serve consumers who have no access to the software’s logic.

This relationship limits how much decoupling can actually happen.

### Three challenges to this approach

#### Information is missing

For example, Economist articles are organized by Sections, the United States, Business, China. The editors themselves are grouped by section, it is critical data. Decoupling revealed that “sections” was a relationship written into code. Using the data only, an article didn’t know what section it belonged to. So asking the API for the article didn’t deliver this critical information.

Information sources evolve organically, so integrated data that API consumers need might not be readily available. When Google consumes a Wikipedia page, they care about the trustworthiness of recent edits. Does this page include a recent malicious change? Trust data, in that context, is as important as the information itself.

#### Information is inconsistent and lacks semantic meaningfulness

Software for digital information publishing, like WordPress, deconstructs content for storage (MySQL, for example) and reconstructs for page views. No consistency is required across different types of content structures. For example, an article has an abstract and a blog post has a summary and an event has a description. From a consumer’s point of view, these are all the same thing. Each might have a date field, called date, that describes different dates (print edition date, digitally-published date and date of the event).

#### Relationships aren’t always explicit

In a decoupled world, some responsibilities (like navigation through menus) move out of the source software. But the relationships that enable hierarchical (navigation, embedded video, sections of a page) and lateral (topics, categories, shared resources) interrelationships aren’t easy to parse. Relationships let consumers dynamically create an ever-changing *and purposefully changeable* user experience. The logic they use arises from the information they retrieve.

### Three principles that help

#### Structure consistent, semantically-sensible containers for information

Label information in consistent ways that make sense to a human reader. Follow a ubiquitous data model, call a summary a summary everywhere, for example. Better yet, follow a shared vocabulary like Schema.org and call it an abstract. Avoid software-specific jargon, the outside world shouldn’t need the internal ID if it’s gobbledygook. <– a real schema diagnosis!

#### Mix types of information

Software logic might send you to multiple APIs to retrieve different types of information, like trust data or related articles. An article might give you its category but the category might not give you the associated article. This is where hypermedia APIs can help. The overall information structure can include all the options for information, with links to retrieve more if the consumer wants it. This makes the information inherently discoverable. Don’t stuff everything into one response! Form relationships.

#### Design relationships

This is the most essential practice. This newsletter is a good example! What you see here is an HTML page with formatted text and a few images. This is what this newsletter looks like, formed using these practices. This structure enables me to create blogs of related articles, a library of resources, a calendar of events and a collection of quotes. All from the same “information”. I can also discover where quotes are used across multiple types of content and how often an event was shown. I can find everything created by a person or all the people with expertise in one subject.

##### **Here are a few examples**:

**Article formats:** I can consume the text of a newsletter as HTML, text, markdown, broken down into JSON (handy for most situations) or a combination of these (and more).

[Take a Look](https://gist.github.com/dianamontalion/175fef20efd49ee31421a55355234856)

**The whole newsletter, broken down by parts**: I can get the information (as much or as little as I like), then display it in the components (or other formats) best for the context.

[Take a Look](https://gist.github.com/dianamontalion/45edb70d535a72e2d57c5599d8277e3e)

**Resources from one expert:** I can organize the works of a single person, completely separate from the newsletter context.

[Take a Look](https://gist.github.com/dianamontalion/407257dd553b7fac97eefb3f8f98afed)

​

> *Information is a source of learning. But unless it is organized, processed, and available to the right people in a format for decision making, it is a burden, not a benefit.
> 
> -- William Pollard*
