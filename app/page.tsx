import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/admin/login" className="absolute top-20 right-20 underlined">
        Go to Admin Log In →
      </Link>
    </div>
  );
}