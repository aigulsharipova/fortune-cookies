const button = document.querySelector('#btn');
const par = document.querySelector('#par');
const oracle = ["People are naturally attracted to you.",
"If you have something good in your life, don't let it go!",
"Whatever you're goal is in life, embrace it visualize it, and for it will be yours.",
"Your shoes will make you happy today.",
"You cannot love life until you live the life you love.",
"A dream you have will come true.",
"Never give up. You're not a failure if you don't give up.",
"You will become great if you believe in yourself.",
"There is no greater pleasure than seeing your loved ones prosper.",
"You will marry your lover.",
"The greatest love is self-love.",
"You can make your own happiness.",
"Now is the time to try something new.",
"Wealth awaits you very soon.",
"You are very talented in many ways.",
"A new voyage will fill your life with untold memories.",
"Your ability for accomplishment will follow with success.",
"Everyone agrees. You are the best.",
"It's better to be alone sometimes.",
"When fear hurts you, conquer it and defeat it!",
"You will conquer obstacles to achieve success.",
"Fortune favors the brave."]

button.addEventListener('click', ()=> {
  let random = oracle[Math.floor(Math.random() * oracle.length)]; 
  par.textContent = random;
})