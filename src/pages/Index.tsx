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
  { name: 'Радость', color: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200', emoji: '😊' },
  { name: 'Грусть', color: 'bg-blue-100 text-blue-700 hover:bg-blue-200', emoji: '😢' },
  { name: 'Одиночество', color: 'bg-purple-100 text-purple-700 hover:bg-purple-200', emoji: '🤍' },
  { name: 'Тревога', color: 'bg-red-100 text-red-700 hover:bg-red-200', emoji: '😰' },
  { name: 'Надежда', color: 'bg-green-100 text-green-700 hover:bg-green-200', emoji: '🌟' },
  { name: 'Страх', color: 'bg-orange-100 text-orange-700 hover:bg-orange-200', emoji: '😨' },
];

const mockStories: Story[] = [
  {
    id: 1,
    text: 'Сегодня впервые за долгое время почувствовал себя спокойно. Нашёл тихое место в парке и просто сидел, слушая пение птиц. Это помогло мне понять, что не всё так плохо...',
    category: 'Надежда',
    categoryColor: 'bg-green-100 text-green-700',
    emoji: '🌟',
    timestamp: '2 часа назад'
  },
  {
    id: 2,
    text: 'Иногда кажется, что никто не понимает, через что я прохожу. Но я знаю, что здесь меня выслушают без осуждения. Спасибо всем, кто делится своими историями.',
    category: 'Одиночество',
    categoryColor: 'bg-purple-100 text-purple-700',
    emoji: '🤍',
    timestamp: '5 часов назад'
  },
  {
    id: 3,
    text: 'Начал новый проект, который откладывал много лет. Чувствую волнение и радость одновременно! Жизнь продолжается, и это прекрасно.',
    category: 'Радость',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    emoji: '😊',
    timestamp: '1 день назад'
  },
  {
    id: 4,
    text: 'Ночами не сплю, постоянно думаю о завтрашнем дне. Хочу научиться отпускать тревогу и жить настоящим моментом.',
    category: 'Тревога',
    categoryColor: 'bg-red-100 text-red-700',
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
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Поделись своей историей
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Безопасное пространство для анонимного обмена мыслями и получения поддержки. 
          Мы слушаем без осуждения.
        </p>
        
        <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all animate-scale-in" onClick={onCreateStory}>
          <Icon name="PenLine" size={20} className="mr-2" />
          Создать историю
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Icon name="Sparkles" size={20} />
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

              <div className="mt-8 p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Icon name="ShieldCheck" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">Гарантия безопасности</h4>
                    <p className="text-sm text-muted-foreground">
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
              className="hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-300">
                    <AvatarFallback className="text-2xl">{story.emoji}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-muted-foreground">Аноним</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{story.timestamp}</span>
                    </div>
                    <p className="text-foreground mb-4 leading-relaxed">{story.text}</p>
                    <div className="flex items-center gap-4">
                      <Badge className={story.categoryColor}>
                        <span className="mr-1">{story.emoji}</span>
                        {story.category}
                      </Badge>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Icon name="Heart" size={16} />
                        Поддержать
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Icon name="MessageCircle" size={16} />
                        Ответить
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
    <div className="min-h-screen bg-background">
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

      <footer className="border-t mt-20 bg-card/50">
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
