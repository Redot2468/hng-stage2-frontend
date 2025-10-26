import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "@tanstack/react-router";
import bcrypt from "bcryptjs";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { SignupSchema, type SignupSchemaType } from "../../lib/schema/auth";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

export default function SignupForm() {
  const navigate = useNavigate();
  const form = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSignup(formData: SignupSchemaType) {
    const userId = crypto.randomUUID();
    const hashedPassword = await bcrypt.hash(formData.password, 10);

    const newUser = {
      id: userId,
      name: formData.name,
      email: formData.email,
      password: hashedPassword,
    };

    const usersFromLs = localStorage.getItem("users");

    const usersData: (typeof newUser)[] = JSON.parse(usersFromLs ?? "[]");

    localStorage.setItem("users", JSON.stringify([...usersData, newUser]));

    toast.success("Account created successfully! You can now log in.");
    navigate({ to: "/auth/login" });
  }

  return (
    <Card className=" max-w-[400px] mx-auto w-full">
      <CardHeader>
        <CardTitle>Create an Account</CardTitle>
        <CardDescription>Get started with TicketFlow today</CardDescription>
      </CardHeader>

      <CardContent>
        <form action="" onSubmit={form.handleSubmit(onSignup)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name">Name </FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    aria-invalid={fieldState.invalid}
                    placeholder=""
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Email Address</FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    aria-invalid={fieldState.invalid}
                    placeholder=""
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    placeholder="********"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="confirmPassword">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="confirmPassword"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="*********"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <Button className="w-full bg-blue-700 mt-6" type="submit">
            Sign up{" "}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center">
        <CardDescription>
          Already have an account?{" "}
          <Link to="/auth/login">
            <span className="text-blue-700 font-semibold">Login</span>
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
