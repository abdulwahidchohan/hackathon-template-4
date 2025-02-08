import { SignUp } from "@clerk/nextjs"
import MainHeader from "@/components/MainHeader"
import Companies from "@/components/Companies"

export default function SignUpPage() {
  return (
    <div className="w-full">
      <MainHeader title="Sign Up" prev="Home . Pages . " current="Sign Up" />
      <div className="flex justify-center items-center w-full my-28">
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "bg-[#fb2e86] hover:bg-[#e81d7f] text-white",
              card: "shadow-2xl shadow-gray-100 border-2 border-gray-100 rounded-md",
            },
          }}
        />
      </div>
      <Companies />
    </div>
  )
}

