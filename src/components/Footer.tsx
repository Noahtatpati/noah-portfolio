import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export function Footer() {
  return (
    <footer className="border-t border-base-200 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-base-400 font-body">
            &copy; {new Date().getFullYear()} Noah Mohandas Tatpati
          </p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:nmtatpati@gmail.com"
              className="text-base-400 hover:text-accent transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/Noahtatpati"
              target="_blank"
              rel="noreferrer"
              className="text-base-400 hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/noahtatpati"
              target="_blank"
              rel="noreferrer"
              className="text-base-400 hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
