'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-midnight text-white">
      <div className="container-custom py-12 lg:py-16">
        {/* Footer Info Minimalista */}
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <p className="text-white/60 font-inter text-sm">
            © {currentYear} Abogada Leal · Todos los derechos reservados
          </p>
          <p className="text-white/20 font-inter text-xs">
            Creado por{' '}
            <a
              href="https://julianmolinaz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/50 transition-colors"
            >
              julianmolinaz.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
