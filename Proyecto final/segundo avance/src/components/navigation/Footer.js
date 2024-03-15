// Importando el componente Typography de Material Tailwind
import { Typography } from "@material-tailwind/react";
 
// Definiendo los enlaces para el footer
const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

// Obteniendo el año actual
const currentYear = new Date().getFullYear();
 
// Componente de Footer
export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          {/* Título del Footer */}
          <Typography variant="h5" className="mb-6">
            Material Tailwind
          </Typography>
          {/* Enlaces del Footer */}
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                {/* Título de la sección */}
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {/* Lista de enlaces */}
                {items.map((link) => (
                  <li key={link}>
                    {/* Enlace */}
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        {/* Derechos de autor */}
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            {/* Año actual y enlace al sitio web de Material Tailwind */}
            &copy; {currentYear} <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </Typography>
          {/* Iconos de redes sociales */}
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {/* Icono de Facebook */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Icono de Facebook */}
              </svg>
            </Typography>
            {/* Icono de Twitter */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Icono de Twitter */}
              </svg>
            </Typography>
            {/* Icono de Instagram */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Icono de Instagram */}
              </svg>
            </Typography>
            {/* Icono de LinkedIn */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Icono de LinkedIn */}
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
