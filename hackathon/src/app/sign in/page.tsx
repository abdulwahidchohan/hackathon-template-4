import { SignIn } from "@clerk/nextjs"
import MainHeader from "@/components/MainHeader"
import Companies from "@/components/Companies"

export default function SignInPage() {
  return (
    <div className="w-full">
      <MainHeader title="Sign In" prev="Home . Pages . " current="Sign In" />
      <div className="flex justify-center items-center w-full my-28">
        <SignIn
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

