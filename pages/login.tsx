import useAuth from "@/hooks/useAuth";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}

function Login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div
      className="relative flex h-screen w-screen flex-col bg-black md:items-center 
    md:justify-center md:bg-transparent"
    >
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt=""
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <div className="bg-black/75 rounded">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative mt-24 py-10 px-6 md:mt-0
          md:max-w-md md:px-14"
          >
          <h1 className="text-4xl font-semibold">
            {variant === "login" ? "Sign In" : "Register"}
          </h1>
          <div className="relative">
            <input
              type="email"
              placeholder=" "
              className="
              mt-8
              block
              rounded-md
              px-6
              pt-6
              pb-1
              w-full
              text-base
              text-white
              bg-neutral-700
              appearance-none
              focus:outline-none
              focus:ring-0
              peer
              invalid:border-b-1"
              {...register("email", { required: true })}
              />
            <label
              className="
              absolute 
              text-base
              text-zinc-400
              duration-150 
              transform 
              -translate-y-3 
              scale-75 
              top-4 
              z-10 
              origin-[0] 
              left-6
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75
              peer-focus:-translate-y-3"
              >
              Email
            </label>
            <p className="text-[13px] font-light  text-orange-500 mt-4">
              {variant === 'login' ? (errors.email && 'Please enter a valid email.') : null}
            </p>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder=" "
              className="
              mt-8
              block
              rounded-md
              px-6
              pt-6
              pb-1
              w-full
              text-base
              text-white
              bg-neutral-700
              appearance-none
              focus:outline-none
              focus:ring-0
              peer
              invalid:border-b-1
              "
              {...register("password", { required: true })}
              />
            <label className="
              absolute 
              text-base
              text-zinc-400
              duration-150 
              transform 
              -translate-y-3 
              scale-75 
              top-4 
              z-10 
              origin-[0] 
              left-6
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75
              peer-focus:-translate-y-3">
              Password
            </label>
            <p className="p-1 text-[13px] font-light  text-orange-500 mt-4">
            {variant === 'login' ? (errors.password && 'Your password must contain between 4 and 60 characters.') : null}
            </p>
          </div>

          <button
            className="w-full rounded bg-[#e50914] py-3 font-semibold mt-4"
            onClick={
              variant === "login" ? () => setLogin(true) : () => setLogin(false)
            }
            >
            {variant === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="text-[gray] px-6 md:px-14 mb-6">
          {variant === "login"
            ? "First time using Netflix? "
            : "Already have an account? "}
          <button
            type="submit"
            className="text-white hover:underline"
            onClick={toggleVariant}
            >
            {variant === "login" ? "Create an account" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
