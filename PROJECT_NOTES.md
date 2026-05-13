# English Language Practice Project Notes

Last updated: 2026-05-13

## Purpose

This project stores HTML grammar/vocabulary games and related teacher resources for private English students.

The games should be playable in a browser, hosted on GitHub Pages, and submit student results to Google Sheets through Google Apps Script.

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
    # Future games go here.
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

There is no current game in this fresh local project.

The old `Tense Trail` game has been removed locally. Future games should be created from scratch and saved under `games/game-folder-name/index.html`.

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

## GitHub Pages Notes

Current repository has an `index.html` at the root. It is now a game-library homepage. At the moment, it shows an empty state until the first new game is created.

Games live in their own folders:

```text
index.html
games/
  vocabulary-volcano/index.html
  word-order-workshop/index.html
```

Direct links can be sent to students for homework.

Current local state:

- Root `index.html` is now a game-library homepage with an empty state.
- There are no games currently published locally.
- The same Google Sheet and Apps Script web app URL should be reused for future games unless the user asks for a fresh backend.
