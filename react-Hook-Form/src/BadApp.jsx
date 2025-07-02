import { useState, useEffect } from "react";
import "./index.css";

export default function BadApp() {
  const [email, setEmail] = useState("test@email.com");
  const [password, setPassword] = useState("");
  const [errorList, setErrorList] = useState({});
  const [isInvalid, setIsInvalid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Redo validation whenever any field changes
  useEffect(() => {
    const errors = {}; // Validate for field-level errors first
    if (email && !email.includes("@")) errors.email = "Invalid email";
    if (password && password.length < 3) errors.password = "Password too short";
    /* if (confirmPassword !== password) errors.confirmPassword = "Passwords don't match"; */
    setErrorList(errors);

    // Validate for form-level errors too
    //const areBlanksFilled = email.trim() !== '' && password.trim() !== '';
    //const areTickBoxesAgreed = tAndCsAgreed;

    setIsInvalid(
      !password ||
        !email ||
        "email" in errors ||
        "password" in errors ||
        "confirmPassword" in errors // || !areBlanksFilled || !areTickBoxesAgreed
    );
  }, [email, password]);

  // const handleTandCsClick = () => setTandCsAgreed(!tAndCsAgreed);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Artificial delay
    if (email !== "test@email.com") setIsSubmitted(true);
    else alert("This email is already taken"); // Simulate this email taken
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="flex flex-col gap-4 w-full max-w-sm p-6 rounded-xl border border-white/20   shadow-xl text-white"
        onSubmit={handleSubmit}
      >
        {/* { isSubmitted ? ( */}
        {/* <div className="text-center"> */}
        {/* <p className="text-2xl font-bold mb-2">Details submitted!</p> */}
        {/* </div> ) : ( */}
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <div className="mb-1 font-semibold">Email</div>
        <input
          type="text"
          className="p-2 rounded-md bg-white/10 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {errorList.email && (
          <div className="text-red-400 text-sm font-semibold">
            {errorList.email}
          </div>
        )}

        <div className="mb-1 font-semibold">Password</div>
        <input
          type="text"
          className="p-2 rounded-md bg-white/10 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {errorList.password && (
          <div className="text-red-400 text-sm font-semibold">
            {errorList.password}
          </div>
        )}
        <button
          disabled={isSubmitted || isInvalid}
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-black font-semibold py-2 rounded-md transition disabled:opacity-50"
        >
          {isSubmitted ? "Your details have been sent!" : "Submit"}
        </button>
        {/* ) */}
      </form>
    </div>
  );
}
