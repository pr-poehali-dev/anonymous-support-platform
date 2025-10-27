import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface TopUser {
  id: number;
  emoji: string;
  level: number;
  supportGiven: number;
  storiesShared: number;
}

const topUsers: TopUser[] = [
  { id: 1, emoji: '😊', level: 8, supportGiven: 156, storiesShared: 23 },
  { id: 2, emoji: '🌟', level: 7, supportGiven: 142, storiesShared: 19 },
  { id: 3, emoji: '🤗', level: 6, supportGiven: 128, storiesShared: 31 },
  { id: 4, emoji: '💙', level: 6, supportGiven: 115, storiesShared: 17 },
  { id: 5, emoji: '🌈', level: 5, supportGiven: 98, storiesShared: 22 },
  { id: 6, emoji: '✨', level: 5, supportGiven: 87, storiesShared: 15 },
];

const stats = [
  { label: 'Активных пользователей', value: '2,847', icon: 'Users', color: 'bg-blue-100 text-blue-600' },
  { label: 'Историй поделились', value: '15,234', icon: 'BookOpen', color: 'bg-purple-100 text-purple-600' },
  { label: 'Слов поддержки', value: '48,921', icon: 'Heart', color: 'bg-pink-100 text-pink-600' },
  { label: 'Дней работы', value: '365', icon: 'Calendar', color: 'bg-green-100 text-green-600' },
];

export default function Community() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Наше сообщество</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Тысячи людей объединились, чтобы поддерживать друг друга
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={stat.icon as any} size={28} />
                </div>
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Trophy" size={28} className="text-primary" />
              <h2 className="text-2xl font-bold">Самые активные участники</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topUsers.map((user, index) => (
                <div
                  key={user.id}
                  className="relative p-6 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-purple-100/30 hover:shadow-lg transition-all"
                >
                  {index < 3 && (
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  )}
                  
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-20 h-20 bg-gradient-to-br from-primary/40 to-purple-400 mb-4">
                      <AvatarFallback className="text-4xl">{user.emoji}</AvatarFallback>
                    </Avatar>
                    
                    <div className="mb-4">
                      <Badge className="mb-2">Уровень {user.level}</Badge>
                      <p className="text-sm text-muted-foreground">Аноним #{user.id * 1234}</p>
                    </div>

                    <div className="w-full space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Icon name="Heart" size={14} />
                          Поддержал
                        </span>
                        <span className="font-semibold">{user.supportGiven}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Icon name="BookOpen" size={14} />
                          Историй
                        </span>
                        <span className="font-semibold">{user.storiesShared}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <Icon name="Lightbulb" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Советы сообщества</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Будь искренним - люди чувствуют фальшь</li>
                    <li>• Не бойся показывать уязвимость</li>
                    <li>• Слушай внимательно, прежде чем отвечать</li>
                    <li>• Твоя история может помочь кому-то</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                  <Icon name="Quote" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Что говорят участники</h3>
                  <p className="text-sm text-muted-foreground italic mb-3">
                    "Здесь я впервые почувствовал, что меня действительно понимают. Спасибо всем за поддержку!"
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    "Помогая другим, я сам становлюсь сильнее. Это невероятное чувство."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-purple-200/30 border-primary/30 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Стань частью сообщества</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Каждый день новые люди присоединяются к нам, чтобы делиться своими историями и поддерживать других. 
              Ты можешь стать следующим, кто изменит чью-то жизнь к лучшему.
            </p>
            <div className="flex justify-center gap-4">
              <div className="flex -space-x-3">
                {['😊', '🌟', '💙', '🤗', '✨', '🌈'].map((emoji, i) => (
                  <Avatar key={i} className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-300 border-2 border-background">
                    <AvatarFallback>{emoji}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold">2,847+ участников</p>
                <p className="text-sm text-muted-foreground">Ждут твоей истории</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
