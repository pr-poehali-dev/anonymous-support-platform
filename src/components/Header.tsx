import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  isLoggedIn: boolean;
  onLogin: () => void;
}

export default function Header({ onNavigate, currentPage, isLoggedIn, onLogin }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-all"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-md">
              <span className="text-2xl">🤝</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Анонимная Поддержка
            </span>
          </button>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate('home')}
              className={`transition-colors ${currentPage === 'home' ? 'text-primary font-medium' : 'text-foreground/70 hover:text-foreground'}`}
            >
              Главная
            </button>
            <button 
              onClick={() => onNavigate('how-to')}
              className={`transition-colors ${currentPage === 'how-to' ? 'text-primary font-medium' : 'text-foreground/70 hover:text-foreground'}`}
            >
              Как пользоваться
            </button>
            <button 
              onClick={() => onNavigate('community')}
              className={`transition-colors ${currentPage === 'community' ? 'text-primary font-medium' : 'text-foreground/70 hover:text-foreground'}`}
            >
              Сообщество
            </button>
            <button 
              onClick={() => onNavigate('faq')}
              className={`transition-colors ${currentPage === 'faq' ? 'text-primary font-medium' : 'text-foreground/70 hover:text-foreground'}`}
            >
              FAQ
            </button>
            
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Avatar className="w-8 h-8 bg-gradient-to-br from-primary/20 to-purple-300">
                      <AvatarFallback>🙂</AvatarFallback>
                    </Avatar>
                    <span>Мой профиль</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => onNavigate('profile')}>
                    <Icon name="User" size={16} className="mr-2" />
                    Профиль
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate('my-stories')}>
                    <Icon name="BookOpen" size={16} className="mr-2" />
                    Мои истории
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icon name="Settings" size={16} className="mr-2" />
                    Настройки
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Icon name="LogOut" size={16} className="mr-2" />
                    Выйти
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" size="sm" onClick={onLogin}>
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
            )}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            <button 
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-2 py-2 rounded hover:bg-secondary"
            >
              Главная
            </button>
            <button 
              onClick={() => { onNavigate('how-to'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-2 py-2 rounded hover:bg-secondary"
            >
              Как пользоваться
            </button>
            <button 
              onClick={() => { onNavigate('community'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-2 py-2 rounded hover:bg-secondary"
            >
              Сообщество
            </button>
            <button 
              onClick={() => { onNavigate('faq'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-2 py-2 rounded hover:bg-secondary"
            >
              FAQ
            </button>
            {!isLoggedIn && (
              <Button variant="outline" size="sm" onClick={onLogin} className="w-full">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}