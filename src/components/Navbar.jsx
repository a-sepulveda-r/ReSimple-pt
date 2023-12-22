import { Navbar } from 'flowbite-react';
import logo from '../assets/LOGO-RESIMPLE-01.png';
import { IconInstagram } from '../icons/IconInstagram';
import { IconLinkedIn } from '../icons/IconLinkedIn';

export function NavbarMenu() {
  return (
    <Navbar
      fluid
      rounded
      className='bg-violet-600'
    >
      <Navbar.Brand href='/'>
        <img
          src={logo}
          className='mr-3 h-20 w-20 '
          alt='ReSimple Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold text-white'>
          ReSimple
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2 '>
        <div className='hidden md:flex gap-2 '>
          <a
            href='https://www.instagram.com/resimple.cl/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconInstagram
              width={'30px'}
              height={'30px'}
            />
          </a>
          <a
            href='https://www.linkedin.com/company/resimple/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconLinkedIn
              width={'30px'}
              height={'30px'}
            />
          </a>
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href='#'
          className='text-white'
        >
          Ayuda
        </Navbar.Link>
        <Navbar.Link
          href='#'
          className='text-white'
        >
          Landing
        </Navbar.Link>
        <Navbar.Link
          href='#'
          className='text-white'
        >
          Ley Rep
        </Navbar.Link>
        <Navbar.Link
          href='#'
          className='text-white'
        >
          Marcas
        </Navbar.Link>
        <Navbar.Link
          href='#'
          className='text-white'
        >
          Licitaciones
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
