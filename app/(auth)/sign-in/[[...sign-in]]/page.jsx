import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
  <div className="grid items-center justify-center h-screen">
    <SignIn />
  </div>
  )
}