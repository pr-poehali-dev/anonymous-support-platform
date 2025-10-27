import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

const achievements: Achievement[] = [
  { id: 1, name: 'Первый шаг', description: 'Поделился первой историей', icon: '🌱', unlocked: true },
  { id: 2, name: 'Эмпат', description: 'Поддержал 10 человек', icon: '❤️', unlocked: true },
  { id: 3, name: 'Активный слушатель', description: 'Прочитал 50 историй', icon: '👂', unlocked: true },
  { id: 4, name: 'Душа компании', description: 'Получил 25 отзывов', icon: '⭐', unlocked: false },
  { id: 5, name: 'Опора', description: 'Помог 50 людям', icon: '🤝', unlocked: false },
  { id: 6, name: 'Постоянный участник', description: '30 дней на платформе', icon: '📅', unlocked: true },
];

export default function Profile() {
  const userStats = {
    storiesShared: 12,
    supportGiven: 34,
    supportReceived: 28,
    daysOnPlatform: 45,
    level: 3,
    nextLevelProgress: 65,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card className="animate-fade-in">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 bg-gradient-to-br from-primary/40 to-purple-400 mb-4">
                  <AvatarFallback className="text-4xl">😊</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-semibold mb-2">Аноним #{Math.floor(Math.random() * 10000)}</h2>
                <Badge className="mb-4">Уровень {userStats.level}</Badge>
                
                <div className="w-full space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>До следующего уровня</span>
                    <span>{userStats.nextLevelProgress}%</span>
                  </div>
                  <Progress value={userStats.nextLevelProgress} className="h-2" />
                </div>

                <div className="w-full mt-6 pt-6 border-t space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Calendar" size={18} />
                      <span className="text-sm">На платформе</span>
                    </div>
                    <span className="font-semibold">{userStats.daysOnPlatform} дней</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="BookOpen" size={18} />
                      <span className="text-sm">Историй</span>
                    </div>
                    <span className="font-semibold">{userStats.storiesShared}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Heart" size={18} />
                      <span className="text-sm">Поддержки дал</span>
                    </div>
                    <span className="font-semibold">{userStats.supportGiven}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Star" size={18} />
                      <span className="text-sm">Поддержки получил</span>
                    </div>
                    <span className="font-semibold">{userStats.supportReceived}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Trophy" size={24} />
                Достижения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      achievement.unlocked
                        ? 'border-primary bg-primary/5'
                        : 'border-muted bg-muted/30 opacity-60'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{achievement.name}</h4>
                          {achievement.unlocked && (
                            <Icon name="Check" size={16} className="text-primary" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Activity" size={24} />
                Активность
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Ты помог</p>
                    <p className="text-2xl font-bold">{userStats.supportGiven} людям</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Тебя поддержали</p>
                    <p className="text-2xl font-bold">{userStats.supportReceived} раз</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Icon name="PenLine" size={24} className="text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Историй поделился</p>
                    <p className="text-2xl font-bold">{userStats.storiesShared}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
