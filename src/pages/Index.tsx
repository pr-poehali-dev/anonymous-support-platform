import { useState } from 'react';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import FAQ from '@/components/FAQ';
import HowTo from '@/components/HowTo';
import Community from '@/components/Community';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface Story {
  id: number;
  text: string;
  category: string;
  categoryColor: string;
  emoji: string;
  timestamp: string;
}

const categories = [
  { name: 'Радость', color: 'bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200', emoji: '😊' },
  { name: 'Грусть', color: 'bg-sky-50 text-sky-700 hover:bg-sky-100 border-sky-200', emoji: '😢' },
  { name: 'Одиночество', color: 'bg-violet-50 text-violet-700 hover:bg-violet-100 border-violet-200', emoji: '🤍' },
  { name: 'Тревога', color: 'bg-rose-50 text-rose-700 hover:bg-rose-100 border-rose-200', emoji: '😰' },
  { name: 'Надежда', color: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200', emoji: '🌟' },
  { name: 'Страх', color: 'bg-orange-50 text-orange-700 hover:bg-orange-100 border-orange-200', emoji: '😨' },
];

const mockStories: Story[] = [
  {
    id: 1,
    text: 'Сегодня впервые за долгое время почувствовал себя спокойно. Нашёл тихое место в парке и просто сидел, слушая пение птиц. Это помогло мне понять, что не всё так плохо...',
    category: 'Надежда',
    categoryColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    emoji: '🌟',
    timestamp: '2 часа назад'
  },
  {
    id: 2,
    text: 'Иногда кажется, что никто не понимает, через что я прохожу. Но я знаю, что здесь меня выслушают без осуждения. Спасибо всем, кто делится своими историями.',
    category: 'Одиночество',
    categoryColor: 'bg-violet-50 text-violet-700 border-violet-200',
    emoji: '🤍',
    timestamp: '5 часов назад'
  },
  {
    id: 3,
    text: 'Начал новый проект, который откладывал много лет. Чувствую волнение и радость одновременно! Жизнь продолжается, и это прекрасно.',
    category: 'Радость',
    categoryColor: 'bg-amber-50 text-amber-700 border-amber-200',
    emoji: '😊',
    timestamp: '1 день назад'
  },
  {
    id: 4,
    text: 'Ночами не сплю, постоянно думаю о завтрашнем дне. Хочу научиться отпускать тревогу и жить настоящим моментом.',
    category: 'Тревога',
    categoryColor: 'bg-rose-50 text-rose-700 border-rose-200',
    emoji: '😰',
    timestamp: '1 день назад'
  }
];

function HomePage({ onCreateStory }: { onCreateStory: () => void }) {
  const [stories] = useState<Story[]>(mockStories);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredStories = selectedCategory
    ? stories.filter(story => story.category === selectedCategory)
    : stories;

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-20 animate-fade-in max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
          <Icon name="ShieldCheck" size={18} className="text-primary" />
          <span className="text-sm font-medium text-primary">100% анонимно и безопасно</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent leading-tight">
          Поделись своей историей и найди поддержку
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Безопасное пространство, где тебя выслушают без осуждения. 
          Делись мыслями анонимно и получай поддержку от тех, кто понимает.
        </p>
        
        <Button 
          size="lg" 
          className="text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all animate-scale-in bg-gradient-to-r from-primary to-accent hover:scale-105" 
          onClick={onCreateStory}
        >
          <Icon name="PenLine" size={22} className="mr-2" />
          Создать историю
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <Card className="sticky top-24 shadow-md border-2">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-5 flex items-center gap-2">
                <Icon name="Sparkles" size={22} className="text-primary" />
                Категории
              </h3>
              <div className="space-y-2">
                <Button
                  variant={selectedCategory === null ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(null)}
                >
                  <Icon name="Layers" size={16} className="mr-2" />
                  Все истории
                </Button>
                {categories.map((cat) => (
                  <Button
                    key={cat.name}
                    variant={selectedCategory === cat.name ? "default" : "ghost"}
                    className={`w-full justify-start ${selectedCategory !== cat.name ? 'hover:bg-secondary' : ''}`}
                    onClick={() => setSelectedCategory(cat.name)}
                  >
                    <span className="mr-2">{cat.emoji}</span>
                    {cat.name}
                  </Button>
                ))}
              </div>

              <div className="mt-8 p-5 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                <div className="flex items-start gap-3">
                  <Icon name="Lock" size={22} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2 text-base">Гарантия безопасности</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Мы не собираем личные данные. Все истории публикуются полностью анонимно.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        <div className="lg:col-span-3 space-y-6">
          {filteredStories.map((story, index) => (
            <Card 
              key={story.id} 
              className="card-hover border-2 animate-fade-in shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-7">
                <div className="flex items-start gap-5">
                  <Avatar className="w-14 h-14 bg-gradient-to-br from-primary/30 to-accent/40 ring-2 ring-primary/20">
                    <AvatarFallback className="text-3xl">{story.emoji}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-semibold text-foreground">Аноним</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{story.timestamp}</span>
                    </div>
                    <p className="text-foreground/90 mb-5 leading-relaxed text-base">{story.text}</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge className={`${story.categoryColor} border px-3 py-1.5 text-sm font-medium`}>
                        <span className="mr-1.5">{story.emoji}</span>
                        {story.category}
                      </Badge>
                      <Button variant="ghost" size="sm" className="gap-2 hover:bg-rose-50 hover:text-rose-600">
                        <Icon name="Heart" size={18} />
                        <span className="hidden sm:inline">Поддержать</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2 hover:bg-sky-50 hover:text-sky-600">
                        <Icon name="MessageCircle" size={18} />
                        <span className="hidden sm:inline">Ответить</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

export default function Index() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newStory, setNewStory] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleSubmitStory = () => {
    if (newStory.trim() && newCategory) {
      setIsDialogOpen(false);
      setNewStory('');
      setNewCategory('');
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <Header 
        onNavigate={setCurrentPage} 
        currentPage={currentPage} 
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Поделись своей историей</DialogTitle>
            <DialogDescription>
              Твоя история останется полностью анонимной. Напиши всё, что на душе.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <Label htmlFor="story">Твоя история</Label>
              <Textarea
                id="story"
                placeholder="Расскажи, что у тебя на душе..."
                className="min-h-[150px] mt-2"
                value={newStory}
                onChange={(e) => setNewStory(e.target.value)}
              />
            </div>
            <div>
              <Label>Выбери категорию</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {categories.map((cat) => (
                  <Badge
                    key={cat.name}
                    className={`cursor-pointer ${cat.color} ${newCategory === cat.name ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => setNewCategory(cat.name)}
                  >
                    <span className="mr-1">{cat.emoji}</span>
                    {cat.name}
                  </Badge>
                ))}
              </div>
            </div>
            <Button 
              onClick={handleSubmitStory} 
              className="w-full"
              disabled={!newStory.trim() || !newCategory}
            >
              Опубликовать анонимно
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {currentPage === 'home' && <HomePage onCreateStory={() => setIsDialogOpen(true)} />}
      {currentPage === 'profile' && <Profile />}
      {currentPage === 'faq' && <FAQ />}
      {currentPage === 'how-to' && <HowTo />}
      {currentPage === 'community' && <Community />}

      <footer className="border-t mt-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Info" size={18} />
                О сервисе
              </h4>
              <p className="text-sm text-muted-foreground">
                Платформа создана для тех, кто хочет поделиться своими переживаниями 
                и получить поддержку в безопасной анонимной среде.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Lock" size={18} />
                Конфиденциальность
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Полная анонимность пользователей</li>
                <li>• Шифрование данных</li>
                <li>• Без отслеживания активности</li>
                <li>• Модерация контента</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="HelpCircle" size={18} />
                Помощь
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => setCurrentPage('how-to')} className="hover:text-foreground transition-colors">Как пользоваться</button></li>
                <li><button onClick={() => setCurrentPage('faq')} className="hover:text-foreground transition-colors">Правила сообщества</button></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Связаться с нами</a></li>
                <li><button onClick={() => setCurrentPage('faq')} className="hover:text-foreground transition-colors">FAQ</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Анонимная Поддержка. Создано с заботой о людях.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}