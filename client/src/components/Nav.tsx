import logo from '../assets/Logo_.png'

const Nav = () => {
    return (
        <div className=''>
            <nav className="flex justify-between items-center p-4 shadow-md">
                <div className="flex gap-4">
                    <h1 className="text-lg font-bold"><img src={logo} alt="logo" /></h1>

                    <a href="#" className="text-gray-600">Shop</a>
                    <a href="#" className="text-gray-600">Explore</a>
                </div>
                <div className="flex justify-between gap-4">
                    <input type="text" placeholder="Search" className="border p-1 rounded" />
                    <a href="#" className="text-gray-600">Contact Us</a>
                </div>
            </nav>
        </div>
    )
}

export default Nav
