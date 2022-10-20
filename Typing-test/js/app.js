const displayText = document.querySelector(".display-text");
const input = document.querySelector("#input");
const retry = document.querySelector("#retry");
const timer = document.querySelector(".timer");

let nthString = 0;
let isTimerOn = false;

input.addEventListener("input", () => {
  if (!isTimerOn) {
    startTimer();
    isTimerOn = true;
  }
  const characterSpan = document.querySelectorAll("span");
  let flag;
  characterSpan.forEach((character, index) => {
    if (input.value[index] == null) {
      console.log(input.value[index]);
      character.classList.remove("correct");
      character.classList.remove("incorrect");
      flag = false;
    } else if (input.value[index] === character.textContent) {
      character.classList.remove("incorrect");
      character.classList.add("correct");
      flag = true;
    } else {
      flag = false;
      character.classList.add("incorrect");
      character.classList.remove("correct");
    }
  });
  if (flag) {
    finished();
  }
});

const strings = [
  "The Odyssey, Homer's epic poem of the 8th Century BC, topped our poll. Why was it the first choice? According to writer and broadcaster Natalie Haynes: Because it is one of the great foundational myths of western culture; because it asks what it means to be a hero; because it has great female characters in it, as well as men; because it is full of gods and monsters and is properly epic and because it forces us to question the assumptions we might have about quests, war, and the ever-current issue of what it means to return home. Lisa Appignanesi, novelist and critic, picks out its influence on all that followed, arguing It’s a basic story template – of the journey which is also a return. Kenneth W Warren, Professor of English at the University of Chicago, agrees.",
  "Harriet Beecher Stowe’s 1852 novel came in at number two, and for Zimbabwean novelist Tendai Huchu, it is hard to think of any literary work today that could ever have such an impact. Jenny Bhatt, writer and Contributing Editor at PopMatters calls it the first widely-read political novel in the US and the first work of fiction that openly addressed the cruelty of slavery, human exploitation, the lopsided legal system, the entrenched patriarchy, the need for feminism, and more. It became one of the most popular books of the century – in the US and abroad – and is credited with radically altering the perception of slavery, with many voters noting its influence on the abolition movement. Its human focus and call for empathy struck a chord among readers. Author and novelist Roxana Robinson says it “told the story of slavery through the eyes of the enslaved, and was one of the first novels to show black characters as fathers and mothers, parents and children – human beings, who were living under inhuman conditions. The novel is not without its faults – translator Caroline Alexander calls it embarrassingly sentimental – and has perhaps, not aged well: today its characterisationis criticised for its poor stereotypes (Jenny Bhatt), while Tendai Huchu points out that “the term Uncle Tom has become an epithet of abuse, far from what the author intended. Nevertheless, its impact is undeniable, influencing generations of writers, and being translated into several languages. Novelist, poet and critic Elizabeth Rosner says it “effectively helped an entire nation not only to question its deplorable laws and practices but also to change forever a system of violently racist dehumanisation. That, for me, defines literature at its best. And for Rebecca Steinitz, novelist and critic at The Boston Globe, “it continues to be a touchpoint for our reckoning with race and representation.",
  "George Orwell’s ground-breaking dystopian novel Nineteen Eighty-Four was a popular choice with our voters. Why? “Because it captures a truth about totalitarianism and human history, says book critic Alex Clark. Novelist and reviewer at the Boston Globe, Rebecca Steinitz, meanwhile, comments on how the story’s themes of totalitarianism, technology and surveillance have been endlessly relevant and resonant since the day it appeared. Adam Thorpe, critic and author of Missing Fay among other novels, points to the book’s unique blend of past and future: “The eponymous year itself may be long past, and the novel's gadgets now have a quaint, even hipsterish air, yet the date is still sealed in its nightmarish guise as a vision of the future.There is an “uncanny accuracy says Jean Seaton, Professor of Media History at Westminster University, in the book’s definition of modern tyranny: “Now more than ever, we seem to live in the framework it identified… Even the author’s name – ‘Orwellian’ – conjures up a world of thought control. Its precision about the mechanisms of propaganda and the machinery of oppression has got it banned by every authoritarian regime: they are scared of its power to name horror. It is a handbook for those who want to resist. All those who chose Orwell’s masterpiece seem to agree on one thing – the novel’s scary prescience. “Big Brother gets all the attention, says novelist and columnist Nilanjana S Roy. “But it’s the rest, the eagerness to join mobs, to obey, to hurt, that he caught so unforgettably. Or, as BBC Culture Editor Rebecca Laurence succinctly puts it: The ultimate 20th-Century novel becomes the ultimate 21st-Century novel. Terrifying.",
  "Telling the story of the colonisation of a Nigerian tribe from the point of view of an African, Things Fall Apart exploded stereotypes about Africa and brought to life the true impact of cross-cultural misunderstandings. Achebe said that “this was the first time we were seeing ourselves, as autonomous individuals, rather than half-people, or as Conrad would say, ‘rudimentary souls’ – many of those who responded to our poll agreed, and it reached number five. Published within my lifetime, it has been possible to see the effect of a single work of fiction in offering a radically different view of Africa, says the novelist Beverley Naidoo. “The European colonial narrative could never be the same after this first work by Achebe was published. It’s “an empowering African novel: it brought African experience to the world like no other African fiction has, according to Dominica Dipio, Associate Professor of Literature at Makerere University in Uganda. Noun Fare, a novelist and journalist from Togo, calls Chinua Achebe’s 1959 novel a milestone in African literature. It has come to be seen as the archetypal modern African novel in English, and is read in Nigeria and throughout Africa. By changing the filter through which the continent was seen, Things Fall Apart could help combat prejudices. The novel showed readers what an African world looked like when it was not being reduced to canned images animated by racist assumptions, says Ainehi Edoro-Glines, a Nigerian academic. Achebe’s innovation was to change the conventions of modern storytelling so that instead of seeing darkness any time readers looked at Africa, they’d see what every novel was designed to show – a complex representation of life.",
  "The classic One Thousand and One Nights, is another top pick. A timeless work, says Ainehi Edoro-Glines, Assistant Professor of Literature, Marquette University. “It gets at the primordial human desire for the story that never ends – which can very easily stand for life that never comes to an end. Ahdaf Soueif, novelist, writer and commentator, points out: “Many characters, motifs and quotations (‘Open Sesame!’) from this set of stories within stories have become common parlance across the world. In the west, the ‘Nights’ has definitely coloured the view of the ‘Orient.’ Or as BBC journalist Sophia Smith Galer puts it: “The symbols and characters in the stories – from Aladdin’s cave to devilish adventurers, djinn and harems – still show in 2018 how cultural appropriation, appreciation and racism continue to manifest within the parameters of Arabian Nights imagery It’s the deepest of wells, says novelist and columnist Nilanjana S Roy. “In medieval and modern times, from writers to singers and film-makers, we never stopped drawing from it. Critic Muneeza Shamsie, meanwhile, admires “Sheherazade’s courage, intelligence and confidence and the fact that she succeeds, asserts the power of storytelling and imagination over that of tyranny and terror – a concept which has strongly influenced the ideals and ideas of our world. And Lena Merhej, a comic artist from Lebanon, picked the book “because it gives a subversive voice to a woman that uses it as a weapon for her survival.",
  "Many consider Don Quixote, published in two volumes, in 1605 and 1615, to be the first novel. Terry Hong, critic at the Smithsonian Asian-Pacific American Center, certainly thinks so: “The Western canon was established with this evergreen, never-aging buddy adventure. Miguel de Cervantes satirical account of an aging Spaniard besotted with tales of chivalry who becomes a latter-day knight-errant himself has inspired a long-in-development film by Terry Gilliam, which just premiered at the Cannes Film Festival, and a popular Broadway musical. Susan Larson, critic at WWNO and The New Orleans Advocate, has an explanation for why it has endured for so long: “This comic masterpiece has inspired countless writers and readers across the centuries with the persistence and surprisingly modern charm of its questing protagonist and his loyal sidekick. So do we call Don Quixote the first buddy comedy, as well? David Varno, US-based literary critic, adds: “This portrait of determination to dream meaning into one's life continues to deepen our understanding of what it means to be human. We all have the potential to be a Quixote, for good or for ill, and Cervantes reminds us how important it is to laugh at this when it is revealed in others and in ourselves.",
];

setDisplayText();

function setDisplayText() {
  const stringArray = strings[nthString].split("");
  stringArray.forEach((character) => {
    const span = document.createElement("span");
    span.textContent = character;
    displayText.appendChild(span);
  });
}

function finished() {
  input.value = "";
  clearInterval(time);
  console.log(strings[nthString].split(" ").length);
  calculateSpeed(sec, strings[nthString].split(" ").length);
}
let time, sec;
function startTimer() {
  sec = 0;
  timer.textContent = sec;
  time = setInterval(() => {
    sec++;
    timer.textContent = sec;
  }, 1000);
}

function calculateSpeed(time, numberOfWords) {
  const mins = time / 60;
  const wpm = Math.floor(numberOfWords / mins);
  timer.textContent = wpm + " WPM";
}
