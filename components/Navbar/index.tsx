import NavDrawer from './NavDrawer';
import NavLink from './NavLink'
import ThemeDropdown from '../shared/ThemeDropdown';

function Navbar() {
  const navLinks = [
    {name: 'About', href: '/about'},
    {name: 'News', href: '/news'},
    {name: 'News2', href: '/news2'},
    {name: 'News3', href: '/news3'},
    {name: 'Home', href: '/home'}
  ];

  return (
    <>
    <div className="flex justify-start pl-4 pr-4 pt-1 pb-1 bg-white dark:bg-gray-900">
      <ThemeDropdown />
    </div>

    <header className="sticky top-0 z-10">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </div>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <NavDrawer navLinks={navLinks} />
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map(
                navLink => <li key={navLink.name}>
                  <NavLink href={navLink.href} key={navLink.name}>
                    {navLink.name}
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </>
  )
}

export default Navbar