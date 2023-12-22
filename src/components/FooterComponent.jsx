import { Footer } from 'flowbite-react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import logo from '../assets/LOGO-RESIMPLE-01.png';

export function FooterComponent() {
  return (
    <Footer bgDark>
      <div className='w-full'>
        <div className='grid w-full grid-cols-1 gap-8 px-6 py-4 md:grid-cols-5 '>
          <div className='mx-auto md:mx-0'>
            <img
              src={logo}
              className='mr-3 h-62 w-52 md:h-42 md:w-32 '
              alt='ReSimple Logo'
            />
          </div>
          <div className='text-white mx-2'>
            <h2 className='py-2 font-bold'>Más sobre ReSimple</h2>
            <p>
              No dudes en contactarnos y te asesoraremos en todo lo relacionado
              con la Ley REP de envases y embalajes.
            </p>
          </div>
          <div className='text-white mx-2'>
            <h2 className='py-2 font-bold'>Redes Sociales</h2>
            <div className='mt-4 flex space-x-6 sm:mt-0'>
              <Footer.Icon
                icon={BsInstagram}
                className='w-20 h-20'
                href='https://www.instagram.com/resimple.cl/'
                target='_blank'
                rel='noopener noreferrer'
              />
              <Footer.Icon
                icon={BsLinkedin}
                href='https://www.linkedin.com/company/resimple/'
                target='_blank'
                rel='noopener noreferrer'
              />
            </div>
          </div>
          <div className='text-white mx-2'>
            <h2 className='py-2 font-bold'>Contacto</h2>
            <p>Mail: info@resimple.cl</p>
            <p>+56 2 2437 0459</p>
          </div>
          <div className='text-white mx-2'>
            <h2 className='py-2 font-bold'>Horarios</h2>
            <p>Lun a Jue de 8:30 a 18:00 hrs.</p>
            <p>Vie de 8:30 a 14:00 hrs.</p>
            <p>Avenida Apoquindo 4501 Of. 503, Las Condes</p>
          </div>
        </div>
      </div>
    </Footer>
  );
}
