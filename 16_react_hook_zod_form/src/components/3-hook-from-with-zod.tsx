import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import simulatedApi from "../api/api";
import { Controller, useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z
    .object({
        firstName: z.string().min(1, "First Name is required"),
        lastName: z.string().min(1, "Last Name is required"),
        email: z.email("Valid email is required"),
        age: z
            .number({ message: "Age must be a valid number" })
            .min(18, "You must be at least 18 years old"),
        gender: z.enum(["male", "female", "other"], {
            message: "Gender is required",
        }),
        address: z.object({
            city: z.string().min(1, "City is required"),
            state: z.string().min(1, "State is required"),
        }),
        hobbies: z
            .array(
                z.object({
                    name: z.string().min(1, "Hobby name is required"),
                })
            )
            .min(1, "At least one Hobby is required"),
        startDate: z.date({ message: "Start date is required" }),
        subscribe: z.boolean(),
        referral: z.string(),
    })
    .superRefine((data, ctx) => {
        if (data.subscribe && data.referral.trim().length === 0) {
            ctx.addIssue({
                code: "custom",
                message: "Please tell us how you heard about us",
                path: ["referral"],
            });
        }
    });

type FormData = z.infer<typeof formSchema>;

const inputClasses =
    "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 shadow-xs transition placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";

const labelClasses = "mb-1.5 block text-sm font-medium text-slate-700";
const errorClasses = "mt-1 text-xs font-medium text-rose-600";

const HookFormWithZod: React.FC = () => {
    const {
        register,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        control,
        watch,
        handleSubmit,
        setError,
    } = useForm<FormData>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            age: undefined,
            gender: undefined,
            address: { city: "", state: "" },
            hobbies: [{ name: "" }],
            startDate: new Date(),
            subscribe: false,
            referral: "",
        },
        resolver: zodResolver(formSchema),
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "hobbies",
    });

    const isSubscribed = watch("subscribe");

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const response = await simulatedApi(data);
            console.log("Success", response);
        } catch (error: any) {
            console.error("Error: ", error);
            setError("root", {
                message: error.message || "Something went wrong. Please try again.",
            });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10">
                {/* Form Header */}
                <div className="mb-8 border-b border-slate-100 pb-5">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                        Member Onboarding &amp; Profile Registration
                    </h1>
                    <p className="mt-1.5 text-sm text-slate-500">
                        Complete your personal details, location, and interests to get started.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* First & Last Name */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label htmlFor="firstName" className={labelClasses}>
                                First Name
                            </label>
                            <input
                                id="firstName"
                                placeholder="Jane"
                                className={inputClasses}
                                {...register("firstName")}
                            />
                            {errors.firstName && (
                                <p className={errorClasses}>{errors.firstName.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="lastName" className={labelClasses}>
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                placeholder="Doe"
                                className={inputClasses}
                                {...register("lastName")}
                            />
                            {errors.lastName && (
                                <p className={errorClasses}>{errors.lastName.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className={labelClasses}>
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="jane.doe@example.com"
                            className={inputClasses}
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className={errorClasses}>{errors.email.message}</p>
                        )}
                    </div>

                    {/* Age, Gender & Start Date */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                        <div>
                            <label htmlFor="age" className={labelClasses}>
                                Age
                            </label>
                            <input
                                id="age"
                                type="number"
                                placeholder="18"
                                className={inputClasses}
                                {...register("age", { valueAsNumber: true })}
                            />
                            {errors.age && (
                                <p className={errorClasses}>{errors.age.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="gender" className={labelClasses}>
                                Gender
                            </label>
                            <select
                                id="gender"
                                className={inputClasses}
                                {...register("gender")}
                            >
                                <option value="">Select...</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.gender && (
                                <p className={errorClasses}>{errors.gender.message}</p>
                            )}
                        </div>

                        <div>
                            <label className={labelClasses}>Start Date</label>
                            <Controller
                                control={control}
                                name="startDate"
                                render={({ field }) => (
                                    <DatePicker
                                        placeholderText="Select Date"
                                        onChange={(date: Date | null) => field.onChange(date)}
                                        selected={field.value}
                                        className={inputClasses}
                                        wrapperClassName="w-full"
                                    />
                                )}
                            />
                            {errors.startDate && (
                                <p className={errorClasses}>{errors.startDate.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <span className={labelClasses}>Address</span>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <input
                                    {...register("address.city")}
                                    placeholder="City"
                                    className={inputClasses}
                                />
                                {errors.address?.city && (
                                    <p className={errorClasses}>
                                        {errors.address.city.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <input
                                    {...register("address.state")}
                                    placeholder="State"
                                    className={inputClasses}
                                />
                                {errors.address?.state && (
                                    <p className={errorClasses}>
                                        {errors.address.state.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Hobbies (Dynamic Field Array) */}
                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label className="text-sm font-medium text-slate-700">
                                Hobbies &amp; Interests
                            </label>
                            <button
                                type="button"
                                onClick={() => append({ name: "" })}
                                className="inline-flex items-center gap-1 rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-100"
                            >
                                + Add Hobby
                            </button>
                        </div>

                        <div className="space-y-3">
                            {fields.map((hobby, index) => (
                                <div key={hobby.id}>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register(`hobbies.${index}.name`)}
                                            placeholder={`Hobby #${index + 1} (e.g. Reading, Cycling)`}
                                            className={inputClasses}
                                        />
                                        {fields.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => remove(index)}
                                                className="shrink-0 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-medium text-rose-600 transition hover:bg-rose-100"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                    {errors.hobbies?.[index]?.name && (
                                        <p className={errorClasses}>
                                            {errors.hobbies[index].name.message}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter & Conditional Referral */}
                    <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                        <div className="flex items-center gap-3">
                            <input
                                id="sub"
                                type="checkbox"
                                className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                {...register("subscribe")}
                            />
                            <label
                                htmlFor="sub"
                                className="cursor-pointer select-none text-sm font-medium text-slate-700"
                            >
                                Subscribe to Newsletter
                            </label>
                        </div>

                        {isSubscribed && (
                            <div className="mt-4 border-t border-slate-200/80 pt-4">
                                <label htmlFor="referral" className={labelClasses}>
                                    Referral Source
                                </label>
                                <input
                                    id="referral"
                                    {...register("referral")}
                                    placeholder="How did you hear about us?"
                                    className={inputClasses}
                                />
                                {errors.referral && (
                                    <p className={errorClasses}>{errors.referral.message}</p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Root Error / Success Feedback */}
                    {errors.root && (
                        <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
                            {errors.root.message}
                        </div>
                    )}

                    {isSubmitSuccessful && !errors.root && (
                        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
                            Profile submitted successfully!
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? "Submitting..." : "Complete Registration"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HookFormWithZod;