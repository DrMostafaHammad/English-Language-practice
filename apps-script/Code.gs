const SHEET_NAME = "Submissions";

const HEADERS = [
  "Timestamp",
  "Student Name",
  "Game Title",
  "Score",
  "Correct",
  "Total Questions",
  "Percentage",
  "Time Spent Seconds",
  "Answers JSON",
  "Raw Submission"
];

function setupSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  sheet.clear();
  sheet.appendRow(HEADERS);
  sheet.setFrozenRows(1);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }

    const data = JSON.parse(e.postData.contents);

    const correct = Number(data.correct || 0);
    const total = Number(data.total || 0);
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    sheet.appendRow([
      new Date(),
      data.studentName || "",
      data.gameTitle || "",
      data.score || 0,
      correct,
      total,
      percentage,
      data.timeSpentSeconds || "",
      JSON.stringify(data.answers || []),
      JSON.stringify(data)
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.message
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService
    .createTextOutput("Codex Games Results backend is working.")
    .setMimeType(ContentService.MimeType.TEXT);
}
