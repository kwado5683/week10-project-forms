import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./index.css";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export default function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "test@email.com",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "This email is already taken",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="flex flex-col gap-4 w-full max-w-sm p-6 rounded-xl border border-white/20  shadow-xl text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          {...register("email")}
          type="text"
          placeholder="Email"
          className="p-2 rounded-md bg-white/10 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {errors.email && (
          <div className="text-red-400 font-semibold">
            {errors.email.message}
          </div>
        )}

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="p-2 rounded-md bg-white/10 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {errors.password && (
          <div className="text-red-400 font-semibold">
            {errors.password.message}
          </div>
        )}

        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-black font-semibold py-2 rounded-md transition disabled:opacity-50"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>

        {errors.root && (
          <div className="text-red-400 text-center">{errors.root.message}</div>
        )}
      </form>
    </div>
  );
}
