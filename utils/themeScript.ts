export const themeScript = `
  try {
    const themeId = localStorage.getItem('theme-id');
    if (themeId === 'dark' || ((!themeId || themeId === 'system') &&  window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (error) {
    console.log(error);
  }
`;