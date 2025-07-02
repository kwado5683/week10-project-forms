"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  //   FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "test@email.com",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  }

  return (
    <div className="min-h-screen flex items-center justify-center mx-0">
      <Form {...form}>
        <form
          className="flex flex-col gap-4 w-full max-w-sm p-6 rounded-xl border border-white/20 shadow-xl text-white"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel></FormLabel> */}
                <FormControl>
                  <Input
                    className="p-2 bg-white/10 border border-white/30 h-10 placeholder:text-gray-300"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription></FormDescription> */}
                <FormMessage className="font-semibold pt-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel></FormLabel> */}
                <FormControl>
                  <Input
                    className="p-2 bg-white/10 border border-white/30 h-10 placeholder:text-gray-300"
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription></FormDescription> */}
                <FormMessage className="font-semibold pt-2" />
              </FormItem>
            )}
          />
          <Button className="py-2 h-10" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
