"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Typography from "@/components/common/Typography";

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(1),
});

async function onSubmit(values: z.infer<typeof formSchema>) {
  const { error } = await sendEmail(values);

  if (error) {
    toast.error(error);
    return;
  }

  toast.success("Email sent successfully!");
}

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Typography text="Your Email" />
              <FormControl>
                <Input
                  placeholder="johndoe@gmail.com"
                  {...field}
                  required
                  className="outline-none border-b sm:text-base border-cmaccent rounded-lg bg-cmsecondary"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <Typography text="Your Message" />
              <FormControl>
                <Textarea
                  placeholder="Brief summary, your timeline, goals, etc."
                  {...field}
                  required
                  rows={10}
                  className="border-cmaccent sm:text-base bg-cmsecondary outline-none rounded-lg border-b"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex">
          <Button
            type="submit"
            className="group w-full max-w-[10rem] flex items-center justify-center gap-2 py-6 rounded-full bg-cmprimary text-cmsecondary outline-none transition-all  hover:bg-cmprimary/90"
          >
            Submit{" "}
            <Send className="w-5 h-5 opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
