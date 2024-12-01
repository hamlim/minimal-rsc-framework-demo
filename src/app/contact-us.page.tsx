export default async function ContactUsPage() {
  // Native support for server actions
  async function formAction(formData: FormData) {
    "use server";

    console.log(formData);
    // do something with the form data
  }

  return (
    <html lang="en">
      <head>
        <title>Contact Us</title>
      </head>
      <body>
        <h1>Contact Us</h1>
        <form action={formAction}>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  );
}
