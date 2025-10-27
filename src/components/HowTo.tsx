import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const steps = [
  {
    number: 1,
    title: 'Зарегистрируйся анонимно',
    description: 'Не нужно указывать реальное имя или email. Создай профиль за несколько секунд без личных данных.',
    icon: 'UserPlus',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    number: 2,
    title: 'Поделись своей историей',
    description: 'Напиши о том, что тебя беспокоит. Выбери категорию эмоции, которая лучше всего описывает твоё состояние.',
    icon: 'PenLine',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    number: 3,
    title: 'Получи поддержку',
    description: 'Другие участники сообщества прочитают твою историю и оставят слова поддержки. Ты не один.',
    icon: 'Heart',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    number: 4,
    title: 'Помогай другим',
    description: 'Читай истории других пользователей и поддерживай их. Твои слова могут очень помочь кому-то.',
    icon: 'Users',
    color: 'bg-green-100 text-green-600',
  },
];

const features = [
  {
    title: 'Полная анонимность',
    description: 'Никаких имён, email или личных данных. Только твои мысли и чувства.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Безопасное пространство',
    description: 'Строгая модерация и правила сообщества защищают от токсичности.',
    icon: 'Lock',
  },
  {
    title: 'Без осуждения',
    description: 'Здесь тебя выслушают и поддержат, что бы ни происходило.',
    icon: 'Smile',
  },
  {
    title: 'Круглосуточно',
    description: 'Платформа работает 24/7. Поддержка доступна в любое время.',
    icon: 'Clock',
  },
  {
    title: 'Разные категории',
    description: 'Фильтруй истории по эмоциям: радость, грусть, тревога, одиночество.',
    icon: 'Filter',
  },
  {
    title: 'Достижения',
    description: 'Получай награды за помощь другим и активность в сообществе.',
    icon: 'Award',
  },
];

export default function HowTo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Как пользоваться платформой</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простые шаги для получения и оказания поддержки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={step.number} 
              className="relative overflow-hidden hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={step.icon as any} size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-bold text-primary">{step.number}</span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Что делает нас особенными</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${400 + index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={28} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-purple-100/50 border-primary/20 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Важно помнить</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Платформа не заменяет профессиональную психологическую помощь</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Будь уважителен к другим участникам сообщества</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Не делись информацией, которая может тебя идентифицировать</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>В критических ситуациях звони на телефон доверия: 8-800-2000-122</span>
                  </li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-purple-300/50 flex items-center justify-center">
                  <span className="text-8xl">🤝</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
