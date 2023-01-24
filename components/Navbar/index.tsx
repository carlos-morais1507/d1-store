import Link from "next/link"
import { BsFillCartFill, BsFillHouseFill, BsFillPersonFill, BsSearch } from 'react-icons/bs'
import { Unbounded } from "@next/font/google"
import { prod__count, price__total, logged } from "@/store/StoreVars"

const unbounded = Unbounded({
  weight: '800',
  subsets: ['latin'],
})

const Navbar = () => {
  return (
    <>
    <div className="navbar border-b-neutral fixed border-b-2 hidden sm:flex">
      <div className="flex-1 LOGO">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <h1 className={`${unbounded.className} font-black`}>D1STORE</h1>
        </Link>
      </div>
      <div className="flex-none gap-2 SEARCH">
        <div className="form-control">
          <input type="text" placeholder={`Pesquisar...`} className="input bg-base-200"/>
        </div>
      </div>
      <div className="flex-none mx-3 CART"> 
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-circle btn-ghost">
            <div className="indicator">
              <BsFillCartFill className="text-xl"/>
              <span className={`${(prod__count > 0) ? "" : "hidden"} badge badge-sm indicator-item bg-primary text-inherit`}>{prod__count}</span>
            </div>      
          </label>
          <div className="mt-3 card card-compact dropdown-content bg-base-100 w-56 drop-shadow-xl border-2 border-neutral ">
            <div className="card-body">
              <span className="font-bold text-lg">{prod__count} {(prod__count != 1) ? "Itens" : "Item"}</span>
              <span className="text-info">Total: R${price__total.toFixed(2)}</span>
              <div className="card-actions">
                <Link href="/Cart" className="btn btn-primary btn-block">Ir ao Carrinho</Link>
              </div>
            </div>
          </div>         
        </div>
      </div>
      <div className="flex-none PROFILE">
        <div className="dropdown dropdown-botom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="Avatar" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 drop-shadow-xl border-2 border-neutral bg-base-100 rounded-box w-52">
            <li className={(logged) ? "block" : "hidden"}><a className="justify-between">Meu Perfil</a></li>
            <li className={(logged) ? "block" : "hidden"}><a>Configurações</a></li>
            <li  className={`${(logged) ? "block" : "hidden"} text-error`}><a>Logout</a></li>
            <li  className={`${(logged) ? "hidden" : "block"} text-success`}><a>Login</a></li>            
          </ul>
        </div>
      </div>
    </div>
    <div className="btm-nav sm:hidden">
      <button className="active">
        <BsFillHouseFill />
      </button>
      <button>
        <BsSearch />
      </button>
      <button>
        <BsFillCartFill />
        </button>
        <button>
          <BsFillPersonFill />
        </button>
    </div>
    </>
  )
}

export default Navbar

