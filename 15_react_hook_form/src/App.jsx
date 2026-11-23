import './App.css'
import { useForm, ErrorMessage } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting},
  } = useForm();

  async function onSubmit(data) {

    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("submitting the form", data)
  }

  return (
    <div className="relative min-h-screen bg-[#11131e] flex items-center justify-center p-4 overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#241b44] rounded-full opacity-80 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#2d1e3b] rounded-full opacity-80 pointer-events-none" />

      {/* Main Glass Card */}
      <form className="relative z-10 w-full max-w-md bg-gradient-to-b from-[#333947]/95 to-[#222733]/95 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl space-y-5"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Registration Form
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Enter your personal details
          </p>
        </div>

        <div>
          <label
            htmlFor="firstname"
            className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-2"
          >
            First Name
          </label>
          <input
            id="firstname"
            type="text"
            {...register('firstname', {
              required: "firstname is required",
              minLength: {
                value: 5,
                message: 'Firstname requires atleast 5 letters'
              },
              maxLength: {
                value: 10,
                message: 'This input exceed maxLength'
              }
            })}
            placeholder="First name"
            className="w-full px-4 py-3 bg-[#151823] border border-white/5 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 transition"
          />
          {errors.firstname && <p>{errors.firstname.message}</p>}
        </div>

        <div>
          <label
            htmlFor="middlename"
            className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-2"
          >
            Middle Name
          </label>
          <input
            id="middlename"
            type="text"
            {...register('middlename', {
              required: 'middlename is required'
            })}
            placeholder="Middle name"
            className="w-full px-4 py-3 bg-[#151823] border border-white/5 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 transition"
          />
          {errors.middlename && <p>{errors.middlename.message}</p>}
        </div>

        <div>
          <label
            htmlFor="lastname"
            className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-2"
          >
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            {...register('lastname', {
              required: true,
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Last name is not as per the rules"
              }
            },
            )}
            placeholder="Last name"
            className="w-full px-4 py-3 bg-[#151823] border border-white/5 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 transition"
          />
          {errors.lastname && <p>{errors.lastname.message}</p>}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled= {isSubmitting}
            value={isSubmitting ? "Submitting" : "Submit" }
            className="w-full py-3.5 bg-gradient-to-r from-[#8264ff] via-[#b04de8] to-[#df49a6] hover:opacity-90 text-white font-semibold rounded-xl shadow-lg transition cursor-pointer active:scale-95"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default App