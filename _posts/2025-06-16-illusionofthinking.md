---
title: The Illusion of Thinking
link: https://machinelearning.apple.com/research/illusion-of-thinking
tags: 
    - link
    - ai
    - apple
---
 
Interesting research from Apple Machine Learning Research asks the obvious but still-open question: do longer “chains of thought” mean "actual" "reasoning", or are Large Reasoning Models (LRMs) still just very expensive parrots? 

They built a set of classic logic puzzles—Tower of Hanoi, river crossings, that sort of thing— and cranked up the difficulty. On easy settings, plain-vanilla LLMs often out-score their LRM cousins (the LRMs waste tokens narrating the obvious). At medium puzzle difficulty, LRMs pull ahead; their longer reasoning helps.

At hard difficulty, both LLMs and LRMs fail almost completely (“accuracy collapse”).
Strangely, LRMs think less and abandon good plans just when they’re needed most. Indeed, the parrot is alive and well for LRMs, [too](https://hwschuur.nl/2024/10/15/llmsdontdoformalreasoning/). 
