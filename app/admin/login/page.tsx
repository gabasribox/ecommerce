import Link from "next/link";
import Container from "@/components/container/container";

export default function AdminLogin() {
  return (
    <main>
      <Link href="/" className="absolute top-20 left-20 underlined">
        ← Back to Home Page
      </Link>

      <div className="center min-h-screen">
        <Container 
          container_title="Log In (Admin)" 
          container_width="w-[450px]"
        >
          <form className="column-5">
            <input 
              name="email"
              type="email" 
              placeholder="Email" 
              className="input"
            />

            <div className="column-1">
              <input 
                name="password"
                type="password" 
                placeholder="Password" 
                className="input"
              />

              <Link href="/admin/login" className="end underlined text-sm">
                Forgot your password?
              </Link>
            </div>
          
            <span className="center text-sm">
              Only authorized people can log in.
            </span>

            <button className="default-button">
              Log In
            </button>
          </form>
        </Container>
      </div>
    </main>
  )
}