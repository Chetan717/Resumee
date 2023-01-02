import React from 'react'

export default function Headers() {
  return (
    <>

    {/* header of application */}
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
      <li><button>Tools</button></li>
  <li><button>Products</button></li>
  <li><button>Guide</button></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl relative left-[30px] text-3xl font-bold font-mono p-2">Resumee.</a>
  </div>
  <div className="navbar-end relative hidden right-[50px] lg:flex">
    <ul className="gap-10 menu-horizontal px-1 font-semibold font-mono">
      <li><button>Home</button></li>
  <li><button>Tools</button></li>
  <li><button>Products</button></li>
  <li><button>Guide</button></li>
    </ul>
  </div>

</div>
    </>
  )
}


