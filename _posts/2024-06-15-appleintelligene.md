---
title: "Apple Intelligence"
link: https://www.apple.com/apple-intelligence/
tags: 
    - link
    - ai
---

And there it was, during this week's WWDC: Apple's AI strategy. Once more, Apple surpassed the (already high) expectations of many. Once more, they demonstrated their strategy is not so much about delivering impactful technology _first_ but delivering it _best_. Apple once demonstrated they have the patience to get it right. I think Apple may be best positioned to bring impactful AI to the masses:

- **Domain**: As Ben Thompson [put it](https://stratechery.com/2024/wwdc-apple-intelligence-apple-aggregates-ai/): "Apple Intelligence is the application of generative AI to use cases and content that Apple is uniquely positioned to provide and access. It is designed […] to maximize the advantages that Apple has in terms of being the operating system provider on your phone; and, on the other hand, what it is not is any sort of general purpose chatbot: that is where OpenAI comes in — and only there." In contrast, LLMs like OpenAI deal with a dramatically larger and more complex problem space. 

- **Aggregation**: Speaking of OpenAI: other third-party models are to follow. Ultimately, Apple positions LLMs like it's currently positioning search engines in Safari: the user gets to pick and choose one, based on their demands and desires. Apple consistently positions itself as an aggregator, similar to what we've seen with the music industry (iTunes), carriers (iPhone), and the film industry (TV (the app)), for instance.

- **Privacy**: Private Cloud Compute (PCC). As Sebastiaan de With [observed](https://sdw.space/apples-intelligent-strategy/), "AI assistants and agents are at their peak of utility if they have access to your most personal information, and Apple is uniquely one of the most trustworthy brands users would actually trust to use and handle their information." Advanced assistants reason over complex data requiring larger foundation models that don't fit on your phone. Apple therefore introduced Private Cloud Compute, a cloud system designed specifically for private AI processing, extending the industry-leading security and privacy of Apple devices into the cloud. It has been designed with industry-leading key requirements:

    - **Stateless computation on personal user data:** Personal data must only be used to fulfill the user’s request and must not be available to anyone, including Apple staff. Data should not be retained or logged after processing.

    - **Enforceable guarantees:** Security and privacy must be technically enforceable without relying on external components like load balancers. Operational requirements should not compromise privacy.

    - **No privileged runtime access:** There must be no privileged interfaces that allow Apple staff to bypass privacy guarantees. PCC should not support runtime privilege expansion through additional software.

    - **Non-targetability:** An attacker cannot target specific users without compromising the entire PCC system. Targeting users must require a wide attack, increasing the likelihood of detection.

    - **Verifiable transparency:** Security researchers must be able to verify that PCC’s privacy and security guarantees match public promises and that the software in the PCC environment is the same as inspected.

As stated by Thompson, Apple, probably more than any other company, deeply understands its position in the value chains in which it operates. Indeed, it promises features only it can deliver, and in the process lock-in its ability to compel partners to invest heavily in features it has no interest in developing but wants to make available to Apple’s users on Apple’s terms.