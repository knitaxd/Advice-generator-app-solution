# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Generate Advices pressing the button

### Screenshot

![](/images/advice-screenshot.jpeg)

### Links

- Solution URL: [https://knitaxd.github.io/]
- Live Site URL: [https://knitaxd.github.io/]

## My process
  I wrote mobile first and then use media queries for responsive web desing. For the JS i use fetch to extract the API

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
### What I learned

It´s my first time using fetch to get and API information. 

To see how you can add code snippets, see below:


```js
let getInfo = async()=>{
    let idRequest = await fetch('https://api.adviceslip.com/advice')
    let idResult = await idRequest.json()
    let HTMLCodeID = `ADVICE #${idResult.slip.id}`
    let HTMLCodeText = `"${idResult.slip.advice}"`
    document.querySelector('.box__element--id').textContent = HTMLCodeID
    document.querySelector('.box__element--text').textContent = HTMLCodeText
}

getInfo();

// Listener to get new advice
let reroll = document.getElementById('box__element--button')
reroll.addEventListener('click', () =>{
    getInfo()
})
```
### Continued development

I need to learn more about animations in CSS

## Author

- Frontend Mentor - [@knitaxd](https://www.frontendmentor.io/profile/knitaxd)
- Twitter - [@knitaxd](https://www.twitter.com/knitaxd)