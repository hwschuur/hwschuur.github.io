---
title: "LLMs don't do formal reasoning"
link: https://arxiv.org/abs/2410.05229
tags: 
    - link
    - ai
---

Relevant new research on LLMs from 6 AI researchers at Apple, challenging a dominant opinion and answering an important question: can Large Language Models (LLMs) truly reason? (turns out they cannot) Or are they just sophisticated pattern matchers? (turns out they are)

Many interesting results described in [the paper](https://arxiv.org/pdf/2410.05229). As an example, even o1-preview, OpenAI's latest and most advanced model,  demonstratibly makes silly mistakes. Either it doesn't understand what 'now' is, or it doesn't understand what 'last year' is, or a more likely explanation is that its training data with inflation has this pattern, and it's following that again:

{% include figure image_path="https://pbs.twimg.com/media/GZjRYrwaAAId3xv?format=jpg" alt="OpenAI's o1-preview making silly mistakes" %}







