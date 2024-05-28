"use server";
import ContactFormEmail from "@/email/ContactFormEmail";
import { getErrorMessage } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const sendEmail = async (values: { email: string; message: string }) => {
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mniamatmarjan@gmail.com",
      subject: "Message from contact form | Archiform",
      reply_to: values.email,
      react: React.createElement(ContactFormEmail, {
        message: values.message,
        senderEmail: values.email,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
