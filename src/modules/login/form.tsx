"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import nProgress from "nprogress";
import { Formik } from "formik";
import * as Yup from "yup";
import FormField from "~/components/form-field";
import { Button } from "~/components/ui/button";
import MailIcon from "~/assets/icons/mail.svg";
import LockIcon from "~/assets/icons/lock.svg";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function LoginForm() {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async () => {
        nProgress.start();
        router.push("/");
      }}
      validationSchema={validationSchema}
      validateOnBlur={false}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-4">
            <FormField
              name="email"
              label="Email Address"
              type="email"
              required
              placeholder="Enter your email"
              endAdornment={{
                children: <Image src={MailIcon} alt={"mail icon"} />,
              }}
            />
            <FormField
              name="password"
              label="Password"
              required
              type={"password"}
              placeholder="Enter your password"
              endAdornment={{
                children: <Image src={LockIcon} alt={"mail icon"} />,
              }}
            />
            <div className="flex w-full items-center justify-end gap-4 mediumMobile:flex-col-reverse mediumMobile:gap-2">
              <Link
                href={"/forgot-password"}
                className="text-xs text-primary underline mediumMobile:self-end"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <Button type="submit" isLoading={isSubmitting}>
            Login now
          </Button>
          <div className="flex items-center justify-between gap-2">
            <hr className="h-[1px] w-full border-none bg-zinc-200/60" />
            <p className="text-info-700 text-sm">Or</p>
            <hr className="h-[1px] w-full border-none bg-zinc-200/60" />
          </div>
          <Button type="button" variant="outline">
            Signup now
          </Button>
        </form>
      )}
    </Formik>
  );
}
