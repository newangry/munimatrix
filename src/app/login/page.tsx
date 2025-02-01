import Link from "next/link";

const Login = () => {
    return (
        <div
        className="bg-background flex flex-col h-screen items-center justify-center"
        >
            <h1 className="text-white">Login</h1>
            <a href="/home" className="text-white">Back to Home</a>
        </div>
    )
}

export default Login;