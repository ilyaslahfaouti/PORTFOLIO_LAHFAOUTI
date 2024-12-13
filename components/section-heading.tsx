import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;  // Ajout de la prop className optionnelle
};

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={`text-3xl font-medium capitalize mb-8 text-center ${className}`}>
      {children}
    </h2>
  );
}
