/**
 * Driftmark /start lead collector.
 *
 * Receives POSTed lead JSON from the website's /api/lead route and appends
 * a row to the active Google Sheet. See SETUP.md for deployment steps.
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lead = JSON.parse(e.postData.contents);

  sheet.appendRow([
    lead.submittedAt || new Date().toISOString(),
    lead.language || "",
    lead.company || "",
    lead.phone || "",
    lead.need || "",
    lead.forWhom || "",
    lead.sector || "",
    lead.currentWebsite || "",
    lead.budget || "",
    lead.start || "",
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
