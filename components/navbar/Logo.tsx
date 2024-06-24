import { LuTent } from "react-icons/lu";
import { Button } from "../ui/button";
import Link from "next/link";


export default function Logo() {
  return (
    <Button asChild size='icon'>
      <Link href="/">
          <LuTent className="w-6 h-6"/>
      </Link>
    </Button>
  )
}
