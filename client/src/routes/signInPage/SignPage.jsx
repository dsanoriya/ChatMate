import { SignIn } from '@clerk/clerk-react'
import './signPage.css'

const SignPage = () => {
  return (
    <div className='signPage'>
        <SignIn path="/sign-in" signUpUrl="/sign-up" forceRedirectUrl="/dashboard" />
        </div>
  )
}

export default SignPage