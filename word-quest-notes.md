# Pony English Project Notes

## Project

- Project name: Pony English Word Quest
- Folder: `pony-- English`
- Teaching focus: Appendix 2 vocabulary review, Chinese-English meaning check, phrase recognition, and example sentence understanding
- Format: static HTML/CSS/JavaScript only

## Files

```text
Pony--English/
├── index.html
├── day2.html
├── day3.html
├── day4.html
├── day5.html
├── day6.html
├── day7.html
├── word-quest.html
├── grammar-review.html
└── word-quest-notes.md
```

## Teaching Design

- The game has 6 levels matching Unit 1 to Unit 6.
- Most vocabulary points from the provided Appendix 2 images are included. The teacher removed two unclear sentence-completion cards: `space` and `stuck`.
- Some words are tested as natural phrases instead of isolated words, for example:
  - `turn left`
  - `turn right`
  - `go straight`
  - `slow down`
  - `pay attention to`
  - `traffic lights`
  - `see a film`
  - `take a trip`
  - `get together`
  - `take a deep breath`
  - `count to ten`
- Question types include:
  - English to Chinese
  - Chinese to English
  - phrase meaning
  - sentence completion
  - sentence understanding

## Classroom Use

- Recommended first use: teacher projects the page and plays one unit together with the class.
- For weaker students: let them focus on English-to-Chinese questions first.
- For stronger students: ask them to read the example sentence aloud before choosing.
- Students can replay a level with shuffled order for review.
- Each level's questions and choices are generated once when the level starts, so the choices stay stable after a student answers.

## Comprehensive Grammar Review

- File: `grammar-review.html`
- Source: 6 teacher-provided review screenshots, split into 82 single-blank tasks.
- The page has 8 sections covering question words, `there be`, commands and exclamations, verb forms and tenses, and three short passage exercises.
- Students complete one multiple-choice blank at a time.
- Wrong-answer feedback gives the Chinese meaning and a short reasoning path without immediately exposing the answer.
- After all questions are complete, the page summarizes the knowledge points connected to the student's actual mistakes.
- No audio, APIs, student names, uploaded scores, or persistent storage are used.

## Feedback And Scoring

- Correct answers add points and stars.
- After a student chooses, the page displays the correct answer for memory reinforcement.
- Wrong answers do not show extra hint text; they only show the correct answer.
- The result screen shows score, stars, and encouraging feedback.

## Privacy

- The page does not ask for student names.
- The page does not save scores.
- The page does not upload any data.

## Local Testing

1. Open `Pony--English/index.html` in a browser.
2. Open `word-quest.html` and `grammar-review.html` from the homepage links.
3. Test Unit 1 and Unit 6 on a phone-size screen and a computer-size screen.
4. In the grammar review, test a correct choice, a wrong choice, level selection, previous/next navigation, and the final mistake summary.
5. Check that choices are clickable and the result screen appears after the last question.
6. Use the shuffle button to confirm the word quest can restart in a new order.

## GitHub Upload Notes

- Target GitHub folder/repository name: `Pony--English`
- Exact local repository path: `/Users/miaomiaopeng/Documents/Rise- Teaching/Pony--English`
- Remote repository: `https://github.com/pikating0214/Pony--English.git`
- Upload structure for this update: `index.html`, `grammar-review.html`, and `word-quest-notes.md`.
- Do not push from Codex unless the teacher explicitly asks for Git/GitHub operation.
