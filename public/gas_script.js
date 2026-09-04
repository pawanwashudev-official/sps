/* eslint-disable @typescript-eslint/no-unused-vars */
// Google Apps Script to Handle Form Submissions
// Instructions:
// 1. Go to https://script.google.com/
// 2. Click "New Project"
// 3. Paste this code into "Code.gs"
// 4. Click "Deploy" -> "New deployment"
// 5. Select type: "Web app"
// 6. Description: "Contact Form Handler"
// 7. Execute as: "Me"
// 8. Who has access: "Anyone" (IMPORTANT)
// 9. Click "Deploy" and copy the "Web app URL"
// 10. Paste the URL into your frontend code (ContactSection.tsx)

function doPost(e) {
    try {
        // 1. Parse the incoming JSON data
        var data = JSON.parse(e.postData.contents);
        var name = data.name;
        var email = data.email;
        var phone = data.phone;
        var message = data.message;

        // 2. Prepare Email Details
        // Replace this with the official school email if different
        var recipientEmail = "aryanrajspsbihta@gmail.com";
        var subject = "New Website Inquiry from " + name;
        var body =
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n\n" +
            "Message:\n" + message;

        // 3. Send the Email
        MailApp.sendEmail({
            to: recipientEmail,
            subject: subject,
            body: body
        });

        // 4. Return Success Response
        return ContentService.createTextOutput(JSON.stringify({ "status": "success", "message": "Email sent" }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Handle Errors
        return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Handle GET requests (just in case someone visits the URL directly)
function doGet(e) {
    return ContentService.createTextOutput("Students Public School Form Handler is Active.");
}
