import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//P7EXYBP7VA74B199C7M76A3R

export async function POST(req) {
  try {
    const { name, email, message, category } = await req.json();

    const msg = {
      to: "us@bs1st.com",
      from: "us@bs1st.com",
      subject: `New ${category} Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Category: ${category}
        Message: ${message}
      `,
    };

    await sgMail.send(msg);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      },
    );
  }
}
