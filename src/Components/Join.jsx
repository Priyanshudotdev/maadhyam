import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Loader icon

const Join = ({ text }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMobileModal, setIsMobileModal] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileModal(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // Email validation function
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async () => {
        if (!isValidEmail(email)) {
            setErrorMessage("Invalid email address");
            return;
        }

        setErrorMessage(""); // Clear error
        setIsLoading(true); // Show loader

        const data = { name, email };

        try {
            const response = await fetch(import.meta.env.VITE_SHEETS_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok || response.type === "opaque") {
                setIsSubmitted(true);
                setName("");
                setEmail("");
            } else {
                setErrorMessage("Failed to submit. Try again.");
            }
        } catch (error) {
            setErrorMessage("An error occurred. Try again.");
            console.error("Error:", error);
        } finally {
            setIsLoading(false); // Hide loader
        }
    };

    if (!isMobileModal) {
        return (
            <div className="">
                <button
                    className="active:opacity-[.3]"
                    onClick={() => {
                        document.getElementById("my_modal_2").showModal();
                    }}
                >
                    {text}
                </button>
                <dialog
                    id="my_modal_2"
                    className="modal bg-black text-[#020202]"
                >
                    <div className="modal-box flex items-center justify-center flex-col">
                        <h3 className="font-bold text-lg mb-4">
                            Celebrate With Us!
                        </h3>
                        {isSubmitted ? (
                            // Success message after submission
                            <div className="text-center">
                                <h4 className="text-green-600 text-lg font-semibold">
                                    Welcome to Maadhyam!
                                </h4>
                            </div>
                        ) : (
                            // Input form before submission
                            <div className="w-[70%] flex flex-col gap-y-4">
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="p-2 w-full border-[1px] border-zinc-200 rounded"
                                />
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    placeholder="Enter Email | We will notify you"
                                    className="p-2 w-full border-[1px] border-zinc-200 rounded"
                                />
                                {errorMessage && (
                                    <p className="text-red-500 text-sm">
                                        {errorMessage}
                                    </p>
                                )}
                                <button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className={`p-2 w-full rounded ${
                                        isLoading
                                            ? "bg-gray-400 cursor-not-allowed"
                                            : "bg-zinc-800 text-white hover:opacity-[.6] active:opacity-[.4]"
                                    }`}
                                >
                                    {isLoading ? (
                                        <AiOutlineLoading3Quarters className="animate-spin mx-auto" />
                                    ) : (
                                        "Join"
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                    <form method="dialog" className="modal-backdrop  ">
                        <button className="p-2 rounded">Close</button>
                    </form>
                </dialog>
            </div>
        );
    } else {
        <div className="">
            <button className=" bg-red-600 active:opacity-[.3]  ">
                Join us on 26th Jan
            </button>
            ;
        </div>;
    }
};

export default Join;
