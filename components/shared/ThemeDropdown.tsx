'use client'

import Image from 'next/image';
import moon from '@/assets/icons/moon.svg';
import sun from '@/assets/icons/sun.svg';
import system from '@/assets/icons/system.svg';
import { useEffect, useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import useOnclickOutside from "react-cool-onclickoutside";

enum ThemeId {
  light = 'light',
  dark = 'dark',
  system = 'system'
};

interface Theme {
  id: ThemeId;
  name: string;
  icon: StaticImport;
};

function ThemeDropdown() {
  const themes = [
    { id : 'light', name: 'Light', icon: sun},
    { id : 'dark', name: 'Dark', icon: moon},
    { id : 'system', name: 'System', icon: system}
  ] as Theme[];
  
  const getInitTheme = () => themes.find(theme => theme.id === (localStorage.getItem('theme-id') || ThemeId.system));

  const [activeTheme, setActiveTheme] = useState({
    isLoaded: false,
    isActive: false,
    theme: null as Theme | null
  });

  const ref = useOnclickOutside(() => {
    setActiveTheme((prevActiveTheme) => ({ ...prevActiveTheme, isActive: false}));
  });

  const isDarkSystemTheme = (): boolean => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  const isSystemTheme = (theme: Theme): boolean => {
    return theme.id === ThemeId.system;
  }

  const isDarkTheme = (theme: Theme): boolean => {
    return theme.id === ThemeId.dark;
  }

  const selectActiveTheme = (theme: Theme) => {
    setActiveTheme((prevActiveTheme) => ({ ...prevActiveTheme, theme }));
    localStorage.setItem('theme-id', theme.id);
    setActiveTheme((prevActiveTheme) => ({ ...prevActiveTheme, isActive: false}));
    if ((isDarkSystemTheme() && isSystemTheme(theme)) || isDarkTheme(theme)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const handleBlur = () => console.log('handleBlur')

  useEffect(() => {
    const currentTheme = getInitTheme()

    selectActiveTheme(currentTheme as Theme);
  }, []);

  return (
    <>
      <div className="h-6" ref={ref}>
        { activeTheme.theme && 
        <div>
          <button id="themeDropdownButton" data-dropdown-toggle="dropdown"
            onClick={()=> setActiveTheme((prevActiveTheme) => ({ ...prevActiveTheme, isActive: !activeTheme.isActive}))}
            className="bg-transparent dark:them-icon-white" type="button">
              { activeTheme?.theme?.icon &&
                <Image src={activeTheme.theme.icon} alt={activeTheme?.theme?.name || ''} className="w-4 h-4 text-gray-800 dark:text-white" />
              }
          </button>
            
          <div id="themeDropdown" className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${!activeTheme.isActive && 'hidden'}`} onBlur={handleBlur}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              {
                themes.map(theme => 
                  <li key={theme.id} onClick={() => selectActiveTheme(theme)}
                    className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center cursor-pointer ${theme.id === activeTheme.theme?.id ? 'bg-gray-100 dark:bg-gray-600': ''}`}>
                    <Image src={theme.icon} alt={theme.name} className="w-4 h-4" />
                    <span className="ml-3">{theme.name}</span>
                  </li>
                )
              }
            </ul>
          </div>
        </div> }
      </div>
    </>
  )
}

export default ThemeDropdown;