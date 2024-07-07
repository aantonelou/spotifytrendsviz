import { Dialog, Transition } from '@headlessui/react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, Fragment, memo, useCallback, useState } from 'react';

const Header: FC = memo(() => {
  const navSections = ['home', '2023', 'through_time', 'user_beats', 'presentation', 'about'];

  return (
    <>
      <MobileNav navSections={navSections} />
      <DesktopNav navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{ navSections: string[] }> = memo(({ navSections }) => {
  const baseClass =
    '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 sm:hover:text-lime-500 text-neutral-100';
  return (
    <header className="fixed top-0 z-50 hidden w-full bg-neutral-400/50 p-4 backdrop-blur sm:block" >
      <nav className="flex justify-center gap-x-8">
        {navSections.map(section => (
          <NavItem
            className={baseClass}
            key={section}
            section={section}
          />
        ))}
      </nav>
    </header>
  );
});

const MobileNav: FC<{ navSections: string[] }> = memo(({ navSections }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const baseClass =
    'p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800';
  return (
    <>
      <button
        aria-label="Menu Button"
        className="fixed right-2 top-2 z-40 rounded-md bg-emerald-800 p-2 ring-offset-gray-800/60 hover:bg-lime-500 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2 sm:hidden"
        onClick={toggleOpen}>
        <Bars3BottomRightIcon className="h-8 w-8 text-white" />
        <span className="sr-only">Open sidebar</span>
      </button>
      <Transition.Root as={Fragment} show={isOpen}>
        <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full">
            <div className="relative w-4/5 bg-stone-800">
              <nav className="mt-5 flex flex-col gap-y-2 px-2">
                {navSections.map(section => (
                  <NavItem
                    className={baseClass}
                    key={section}
                    section={section}
                    onClick={toggleOpen}
                  />
                ))}
              </nav>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
});

const NavItem: FC<{
  section: string;
  className: string;
  onClick?: () => void;
}> = memo(({ section, onClick }) => {
  const router = useRouter();
  const href = `/${section === 'home' ? '' : section}`.toLowerCase();
  const isActive = router.asPath.toLowerCase() === href;

  const activeStyle = isActive ? { color: '#047857', fontWeight: '600' } : { color: '#ffffff' };

  let displayText = section.charAt(0).toUpperCase() + section.slice(1);

  if (displayText === '2023') {
    displayText = 'Year in Music 2023';
  } else if (displayText === 'Through_time') {
    displayText = 'Through Time';
  } else if (displayText === 'User_beats') {
    displayText = 'User Beats';
  }

  return (
    <Link
      style={activeStyle}
      href={href}
      key={section}
      onClick={onClick}>
      {displayText}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
