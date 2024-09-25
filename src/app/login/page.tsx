import Image from "next/image";
import LoginIllustration from "~/assets/illustrations/login.png";
import LoginIllustrationVector1 from "~/assets/illustrations/login-vectors/1.png";
import LoginIllustrationVector2 from "~/assets/illustrations/login-vectors/2.png";
import LoginForm from "~/modules/login/form";

export default function Login() {
  return (
    <div className="w-full bg-[#F4F4F4]">
      <div className="mx-auto flex min-h-screen w-full max-w-App">
        <aside className="relative flex w-full items-center justify-center overflow-hidden">
          <Image src={LoginIllustration} alt="Login illustration" className="w-[50%]" priority />
          <Image
            src={LoginIllustrationVector1}
            alt="Login illustration vector 1"
            className="absolute left-0 top-[-14px] w-[100px]"
          />
          <Image
            src={LoginIllustrationVector2}
            alt="Login illustration vector 2"
            className="absolute bottom-0 right-[-14px] w-[100px]"
          />
        </aside>
        <main className="flex min-h-screen w-full max-w-[500px] items-center bg-white p-6 largeLaptop:max-w-[700px]">
          <div className="flex w-full flex-col items-center gap-10">
            <h1 className="text-base font-semibold text-[#555555]">Login into your account</h1>
            <LoginForm />
          </div>
        </main>
      </div>
    </div>
  );
}
