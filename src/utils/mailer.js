import brevo from "@getbrevo/brevo";

export const sendStudentRegistrationEmail = async (to, studentId, tempPassword) => {
  try {
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    const emailData = {
      sender: {
        name: "EAPCET Admissions",
        email: "no-reply@eapcet.com", // You can use your verified sender email
      },
      to: [{ email: to }],
      subject: "Registration Successful - Your EAPCET Student Credentials",
      htmlContent: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color:#4CAF50;">🎉 Registration Successful</h2>
          <p>Dear Student,</p>
          <p>You have successfully registered on the EAPCET portal.</p>
          <p><strong>Your login details:</strong></p>
          <ul>
            <li><strong>Student ID:</strong> ${studentId}</li>
            <li><strong>Password:</strong> ${tempPassword}</li>
          </ul>
          <p>Please keep these credentials safe and do not share them with anyone.</p>
          <br/>
          <p>Best regards,<br/><strong>EAPCET Support Team</strong></p>
        </div>
      `,
    };

    await apiInstance.sendTransacEmail(emailData);
    console.log(`✅ Email sent successfully to ${to}`);
  } catch (error) {
    console.error("❌ Failed to send email via Brevo:", error.message);
  }
};
