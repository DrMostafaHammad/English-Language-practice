# English Language Practice Project Notes

Last updated: 2026-05-14

## Purpose

This project stores HTML grammar/vocabulary games and related teacher resources for private English students.

The games should be playable in a browser, hosted on GitHub Pages, and submit student results to Google Sheets through Google Apps Script.

## New Chat Handoff

When starting a new Codex chat for this project, use this prompt:

```text
Read PROJECT_NOTES.md first from the local project folder. This project is also pushed to GitHub at https://github.com/DrMostafaHammad/English-Language-practice. Continue from these notes and inspect the repo files before making changes.
```

The local project folder should stay:

```text
C:\Users\Mostafa Hammad\Documents\Codex\English-Language-Practice
```

Treat this file as the durable source of truth when the chat context is missing or compressed. If anything important changes, update this file, commit it, and push it.

## New Game Checklist

For each new game:

1. Read this file first.
2. If the user gives a source URL, browse it and summarize the learning points.
3. Create original questions inspired by the topic; do not copy exercise items wholesale.
4. Use 20 questions unless the user asks for a different number.
5. Mix question modes where suitable, such as multiple choice and fill in the blank.
6. Shuffle multiple-choice answer options at runtime.
7. Keep the answer flow: answer -> feedback/explanation -> student clicks `Next`.
8. Include sound effects, polished styling, and a classroom-friendly game feel.
9. Include subtle/simple visual assets automatically when useful, and mention where they were added.
10. Add a generous `Explanation` page, especially when the game will be used during a lesson.
11. Add an `Explanation` button on the first/start page so students can read the lesson before starting if they want.
12. Submit results to the existing Apps Script URL and preserve the standard payload.
13. Add the game to the root homepage with `Open` and `Copy Link` controls.
14. Update `PROJECT_NOTES.md` with the new game title, source, folder, and direct student link.
15. Commit and push changes to GitHub.

## Current Online Setup

Google Sheet:

- Name: `Codex Games Results`
- Results tab: `Submissions`

Apps Script web app URL:

```text
https://script.google.com/macros/s/AKfycbzemuwABx_r378H23gNRkisj2n_LW92T97voS5NwMfuLjH6O8sfW2bifcfUXYMlQzMcpg/exec
```

GitHub repository:

```text
https://github.com/DrMostafaHammad/English-Language-practice
```

GitHub Pages site:

```text
https://drmostafahammad.github.io/English-Language-practice/
```

## Folder Structure

```text
English-Language-Practice/
  PROJECT_NOTES.md
  index.html
  apps-script/
    Code.gs
  templates/
  games/
    prepositions-place-quest/
      index.html
    articles-adventure/
      index.html
    word-order-workshop/
      index.html
```

## Google Sheet Columns

The `Submissions` sheet should use these columns:

```text
Timestamp
Student Name
Game Title
Score
Correct
Total Questions
Percentage
Time Spent Seconds
Answers JSON
Raw Submission
```

There should be no `Class` column. Students only enter their name.

Recommended sheet formatting:

- Freeze row 1.
- Use text wrapping for `Answers JSON` and `Raw Submission`.
- Optionally hide `Raw Submission` during normal review.

## Apps Script Notes

The Apps Script backend receives game results with `doPost(e)` and appends one row to the `Submissions` tab.

When changing Apps Script code:

1. Save the script.
2. Use `Deploy -> Manage deployments`.
3. Edit the existing deployment.
4. Choose `New version`.
5. Deploy.

The web app URL should stay the same when updating the existing deployment.

Only use a new URL if a completely new deployment is created.

## Game Submission Payload

Each game should submit JSON similar to this:

```json
{
  "studentName": "Student Name",
  "gameTitle": "Game Title",
  "score": 1500,
  "correct": 15,
  "total": 18,
  "timeSpentSeconds": 420,
  "answers": [
    {
      "questionNumber": 1,
      "question": "Question text",
      "type": "choice",
      "studentAnswer": "Student answer",
      "correctAnswer": "Correct answer",
      "isCorrect": true,
      "pointsEarned": 100
    }
  ]
}
```

## Game Design Requirements

For all future games:

- Students enter only their name.
- No class/group field.
- Submit results to the Apps Script URL above.
- Track every answer, not just the final score.
- Track time spent.
- Show a result screen with score, correct count, and rank.
- If submission fails, show a backup result code or summary.
- Use a clear, polished, classroom-friendly visual style.
- Make the game playable as a standalone `index.html` file.

Important answer-flow rule:

```text
Student answers
-> game shows Correct/Wrong feedback
-> explanation stays on screen
-> student clicks Next
-> next question appears
```

Do not auto-advance immediately after feedback. Students need time to read explanations.

## Current Game

Current game:

- Title: `Prepositions Place Quest`
- Topic: A1-A2 prepositions of place: `in`, `on`, and `at`
- Source pages:
  - `https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/prepositions-place`
  - `https://test-english.com/grammar-points/a1/at-in-on-prepositions-of-place/`
- Project copy lives at: `games/prepositions-place-quest/index.html`
- Direct student link: `https://drmostafahammad.github.io/English-Language-practice/games/prepositions-place-quest/`
- Question count: 25
- Question types: multiple choice and fill in the blank
- Multiple-choice answer options are shuffled at runtime.
- Includes an `Explanation` button on the first page before the game starts.
- Uses a subtle HTML/CSS place-map visual on the start screen.
- After final result submission, the `Explanation` button opens the lesson page in the game.

Previous games:

- Title: `Articles Adventure`
- Topic: A1 English articles: `a`, `an`, `the`, and zero article
- Source page: `https://test-english.com/grammar-points/a1/a-an-the-no-article/`
- Project copy lives at: `games/articles-adventure/index.html`
- Direct student link: `https://drmostafahammad.github.io/English-Language-practice/games/articles-adventure/`
- Question count: 20
- Question types: multiple choice and fill in the blank
- Multiple-choice answer options are shuffled at runtime.
- After final result submission, the `Explanation` button opens a fuller ESL teacher-style explanation page in the game.

- Title: `Word Order Workshop`
- Topic: A1 basic word order in English
- Source page: `https://test-english.com/grammar-points/a1/basic-word-order-in-english/`
- Project copy lives at: `games/word-order-workshop/index.html`
- Direct student link: `https://drmostafahammad.github.io/English-Language-practice/games/word-order-workshop/`
- Question count: 20
- After final result submission, the `Explanation` button opens a brief rules page in the game.

The old `Tense Trail` game has been removed locally.

## Future Game Workflow

1. User gives a title, topic, URL, or lesson source.
2. If a URL is provided, browse and summarize the learning points.
3. Create original game questions based on the topic.
4. Build a standalone HTML game using the shared submission system.
5. Save it as:

```text
games/game-folder-name/index.html
```

6. User uploads or pushes it to GitHub.
7. Direct student link format:

```text
https://drmostafahammad.github.io/English-Language-practice/games/game-folder-name/
```

## Source Pages Tested

British Council present simple page:

```text
https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple
```

Notes:

- Main grammar explanation is readable.
- Embedded Grammar Test 1 and 2 links are visible, but the interactive questions are not reliably readable as normal text.
- Best approach: use the explanation to create original questions.

Test-English basic word order page:

```text
https://test-english.com/grammar-points/a1/basic-word-order-in-english/
```

Notes:

- Main explanation is readable.
- Exercises 1, 2, and 3 are mostly readable.
- Exercise 1 dropdown options appear flattened inline, but can be inferred.
- Best approach: create original questions inspired by the topic, not copied wholesale.

British Council prepositions of place page:

```text
https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/prepositions-place
```

Notes:

- Main explanation covers `in`, `on`, and `at` for location.
- `in`: inside bigger spaces, cities/countries, cars/taxis, water, mountains/countryside/forest.
- `on`: surfaces, floors, public transport, lines/streets/borders/rivers/islands.
- `at`: activity places, public places, exact positions, addresses, entrances, back/front of a room.
- Best approach: create original questions based on the rule categories.

Test-English at/in/on prepositions of place page:

```text
https://test-english.com/grammar-points/a1/at-in-on-prepositions-of-place/
```

Notes:

- Main explanation adds useful chunks such as `at home`, `at work`, `at school`, `at the shop`, `on the left/right`, `on TV/the radio/the internet`, and `in a picture/book/newspaper`.
- Best approach: include both simple spatial questions and common fixed phrases.

## GitHub Pages Notes

Current repository has an `index.html` at the root. It is now a game-library homepage that links to each game.

Games live in their own folders:

```text
index.html
games/
  prepositions-place-quest/index.html
  articles-adventure/index.html
  word-order-workshop/index.html
  vocabulary-volcano/index.html
  present-simple-quest/index.html
```

Direct links can be sent to students for homework.

## Future Template System Notes

Do not force all English practice areas into one rigid game template.

Preferred long-term plan:

- Keep a shared game engine pattern for common behavior:
  - student name only
  - score, streak, timer, and answer tracking
  - answer feedback stays visible until `Next`
  - result screen and backup result summary
  - Google Sheet submission
  - sound effects and polished classroom-friendly styling
  - answer option shuffling
  - final `Explanation` page
- Create different reusable templates for different practice types as the project grows:
  - grammar choice games
  - word-order games
  - vocabulary choice games
  - collocation/matching games
  - reading comprehension quizzes
  - listening homework pages

Start with a reusable grammar-choice or word-order template only after a few more games have been created and the repeated patterns are clearer.

## Visual Asset Notes

For upcoming games, include subtle, simple images automatically when they support the topic or make the game feel more polished.

Start small:

- Prefer one lightweight topic image, visual motif, or diagram per new game.
- Use images first on the start screen, explanation page, or as simple category visuals.
- Keep important grammar text in HTML/CSS rather than embedded inside generated images, because generated image text may be imperfect.
- Store assets inside the relevant game folder, for example:

```text
games/articles-adventure/assets/
```

- Prefer optimized `.webp` images and keep each asset small when possible.
- In final responses, explicitly mention where images were added so the user knows what to review.
- Increase image use gradually after seeing which placements are helpful for teaching.

Current local state:

- Root `index.html` is now a game-library homepage.
- Published games: `Prepositions Place Quest`, `Articles Adventure`, `Word Order Workshop`.
- The same Google Sheet and Apps Script web app URL should be reused for future games unless the user asks for a fresh backend.
