import LoginForm from "@/components/login-form";

export default function LoginPage() {
  return (
    <div
      className="bg-muted flex min-h-svh flex-col bg-cover bg-center bg-no-repeat items-center justify-center p-6 md:p-10"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),url('/bg.svg')",
      // }}
    >
      <div className="absolute -z-10 inset-0 bg-black/80" />
      <div className="w-full  z-50 max-w-md flex justify-center ">
        <LoginForm />
      </div>
    </div>
  );
}
