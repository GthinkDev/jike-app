"use client";

import Link from "next/link";
import { ComponentProps, FC, FormEvent, useState } from "react";
import { clsx } from "clsx";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IProps {
  className?: ComponentProps<"div">;
}

const LoginForm: FC<IProps> = (props) => {
  const { className } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <div
      className={clsx(
        "flex flex-col gap-6 w-full  justify-center items-center",
        className,
      )}
    >
      <Card className="overflow-hidden p-0 w-full ">
        <CardContent className="grid p-0 md:grid-cols-1">
          <form className="p-6 md:p-8 " onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">欢迎回来</h1>
                <p className="text-muted-foreground text-balance">
                  登录您的账号
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">账号</Label>
                <Input
                  required
                  id="email"
                  placeholder="m@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">密码</Label>
                  <Link
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                    href="#"
                  >
                    忘记密码?
                  </Link>
                </div>
                <Input
                  required
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button className="w-full" type="submit">
                登录
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-sm text-balance  ">
        登录即表示同意我们的{" "}
        <Link className={"text-foreground"} href="#">
          《服务条款》
        </Link>{" "}
        和{" "}
        <Link className={"text-foreground"} href="#">
          《隐私政策》
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
