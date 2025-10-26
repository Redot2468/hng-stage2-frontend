import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "@tanstack/react-router";
import bcrypt from "bcryptjs";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { LoginSchema, type LoginSchemaType } from "../../lib/schema/auth";
import type { User } from "../../types/auth-types";
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

export default function LoginForm() {
  const navigate = useNavigate();
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onLogin(formData: LoginSchemaType) {
    const usersFromLs: User[] = JSON.parse(
      localStorage.getItem("users") ?? "[]"
    );

    const existingUser = usersFromLs?.find(
      (user) => user.email === formData.email
    );

    if (!existingUser) {
      toast.error("Invalid email or password");
      return;
    }

    const doesPasswordMatch = await bcrypt.compare(
      formData.password,
      existingUser?.password
    );

    if (!doesPasswordMatch) {
      toast.error("Invalid email or password");
      return;
    }

    // CREATE A SESSION IN LS
    const session = {
      id: existingUser?.id,
      name: existingUser?.name,
      email: existingUser?.email,
    };

    localStorage.setItem("ticketapp_session", JSON.stringify(session));

    toast.success(`Welcome, ${existingUser?.name?.split(" ")[0]}`);
    navigate({
      to: "/dashboard",
    });
  }

  return (
    <Card className=" max-w-[400px] mx-auto w-full">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>Login to your account to continue</CardDescription>
      </CardHeader>

      <CardContent>
        <form action="" onSubmit={form.handleSubmit(onLogin)}>
          <FieldGroup>
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
          </FieldGroup>

          <Button className="w-full bg-blue-700 mt-6" type="submit">
            Login{" "}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center">
        <CardDescription>
          Don&apos;t have an account?{" "}
          <Link to="/auth/signup">
            <span className="text-blue-700 font-semibold">Login</span>
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
