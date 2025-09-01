import { Avatar, Button, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react';
import {Link, useLocation} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa';
import {useSelector} from 'react-redux'

const Header = () => {
    const path = useLocation().pathname;
    const {currentUser} = useSelector((state) => state.user)
  return (
    <Navbar className='border-b-2'>

      {/* Logo */}
      <Link to={"/"} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Praveen's</span>
        Blog
      </Link>

      {/* textinput */}
      <form >
        <TextInput
        type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline' />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch  />
      </Button>

      {/* dark and sigiiin */}
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color={"gray"} pill>
            <FaMoon />
        </Button>
        {currentUser ? (
          <Dropdown arrowIcon={false} inline label={
            <Avatar alt='user' img={currentUser.profilePicture} rounded/>
          }>
            <DropdownHeader>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </DropdownHeader>

            <Link to={'/dashboard?tab=profile'}>
                <DropdownItem>
                  Profile
                </DropdownItem>
            </Link>
            <DropdownDivider/>
            <DropdownItem>
              Sign out
            </DropdownItem>

          </Dropdown>
        )
        :
        (
          <Link to={"/sign-in"}>
            <Button className='bg-gradient-to-br from-purple-600 to-blue-500 text-white font-bold py-2 px-4 rounded-xl' outline >Sign In</Button>
        </Link>
        )}
        
        <NavbarToggle />
      </div>

      {/*  menu*/}
      <NavbarCollapse>
            <NavbarLink active={path === "/"} as={"div"}>
                <Link to={"/"}>Home</Link>
            </NavbarLink>
            <NavbarLink active={path==="/about"} as={"div"}>
                <Link to={"/about"}>About</Link>
            </NavbarLink>
            <NavbarLink active={path==="/projects"} as={"div"}>
                <Link to={"/projects"}>Projects</Link>
            </NavbarLink>
        </NavbarCollapse>

    </Navbar>
  )
}

export default Header
