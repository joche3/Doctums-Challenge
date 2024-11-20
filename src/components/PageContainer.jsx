import React from 'react';
import { twMerge } from 'tailwind-merge';

const PageContainer = ({ children, className, ...props }) => {
  const animatedTransition =
    'animate-fade animate-once animate-duration-500 animate-ease-in animate-normal animate-fill-backwards';
  const spacing =
    'p-2 md:p-4 lg:p-12 xl:p-16 pt-[20px] md:pt-[20px] lg:pt-[20px] xl:pt-[20px]';
  const maxWidth = 'max-w-[1400px] h-screen mx-auto'; // Ancho máximo y centrado

  return (
    <article
      className={twMerge(animatedTransition, spacing, maxWidth, className)}
      {...props}
    >
      {children}
    </article>
  );
};

export default PageContainer;