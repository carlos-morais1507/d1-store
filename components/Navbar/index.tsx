import Link from "next/link"
import { BsFillCartFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          D1Store
        </Link>
      </div>
      <div className="flex-none">
        <BsFillCartFill />
      </div>
    </div>
  )
}

export default Navbar