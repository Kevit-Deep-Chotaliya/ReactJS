import '../index.css';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
    name: yup.string().required("Name is required"),
    age: yup
        .number()
        .transform((value, originalValue) => (originalValue === "" ? undefined : value))
        .typeError("Age must be a number")
        .positive("Age must be a positive number")
        .integer("Age must be a whole number")
        .min(18, "You must be at least 18 years old")
        .required("Age is required")
}).required();

const Hook_yup_form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({ resolver: yupResolver(schema) });

    async function onSubmit(data) {

        await new Promise((resolve) => setTimeout(resolve, 5000))
        console.log("submitting the form", data)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md bg-white rounded-xl shadow-md border border-slate-200 p-6 space-y-5"
            >
                <h2 className="text-xl font-semibold text-slate-800 border-b border-slate-100 pb-3">
                    User Registration
                </h2>

                {/* Name Field */}
                <div className="flex flex-col space-y-1.5">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-slate-700"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        autoComplete="off"
                        type="text"
                        placeholder="Enter your full name"
                        {...register("name")}
                        className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-white text-slate-900 placeholder-slate-400 transition focus:outline-none focus:ring-2 ${errors.name
                            ? "border-red-500 focus:ring-red-200"
                            : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-200"
                            }`}
                    />
                    {errors.name && (
                        <p className="text-xs font-medium text-red-500 mt-1">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Age Field */}
                <div className="flex flex-col space-y-1.5">
                    <label
                        htmlFor="age"
                        className="text-sm font-medium text-slate-700"
                    >
                        Age
                    </label>
                    <input
                        id="age"
                        autoComplete="off"
                        type="number"
                        placeholder="Enter your age"
                        {...register("age")}
                        className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-white text-slate-900 placeholder-slate-400 transition focus:outline-none focus:ring-2 ${errors.age
                            ? "border-red-500 focus:ring-red-200"
                            : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-200"
                            }`}
                    />
                    {errors.age && (
                        <p className="text-xs font-medium text-red-500 mt-1">
                            {errors.age.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-semibold rounded-lg shadow-sm transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {isSubmitting ? "Submitting..." : "Complete Registration"}
                    </button>
                </div>
            </form >
        </div >
    );
};

export default Hook_yup_form;