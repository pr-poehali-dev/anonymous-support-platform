import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const faqItems = [
  {
    question: 'Как работает анонимность на платформе?',
    answer: 'Мы не собираем и не храним личные данные пользователей. Вам не нужно указывать имя, email или другую идентифицирующую информацию. Каждому пользователю присваивается случайный идентификатор, который виден только вам в личном кабинете.',
  },
  {
    question: 'Могу ли я удалить свою историю?',
    answer: 'Да, вы можете удалить свою историю в любой момент через меню истории. Удаление происходит мгновенно и безвозвратно. Однако помните, что комментарии других пользователей к вашей истории останутся видимыми (но без связи с удалённой историей).',
  },
  {
    question: 'Что делать, если я увидел неприемлемый контент?',
    answer: 'Нажмите кнопку "Пожаловаться" под любой историей или комментарием. Наша команда модераторов рассматривает все жалобы в течение 24 часов. Мы строго следим за соблюдением правил сообщества и блокируем нарушителей.',
  },
  {
    question: 'Как получить поддержку от других пользователей?',
    answer: 'Поделитесь своей историей, выбрав подходящую категорию эмоций. Другие пользователи смогут прочитать вашу историю, оставить слова поддержки в комментариях или просто отметить сердечком. Будьте открыты и искренни - это помогает найти отклик.',
  },
  {
    question: 'Зачем нужны достижения и уровни?',
    answer: 'Система достижений мотивирует пользователей быть активными и помогать другим. Уровни показывают ваш опыт на платформе, но не влияют на функционал. Это просто способ отметить ваш вклад в поддержку сообщества.',
  },
  {
    question: 'Безопасно ли делиться личными переживаниями?',
    answer: 'Мы используем шифрование данных и не храним информацию, которая может вас идентифицировать. Однако будьте осторожны: не указывайте в историях конкретные имена, адреса или другие детали, по которым вас можно узнать.',
  },
  {
    question: 'Могу ли я общаться с конкретным пользователем?',
    answer: 'Нет, личные сообщения недоступны для сохранения анонимности. Вся коммуникация происходит только через публичные комментарии к историям. Это защищает всех участников от нежелательных контактов.',
  },
  {
    question: 'Что делать, если мне нужна профессиональная помощь?',
    answer: 'Наша платформа предназначена для взаимной поддержки, но не заменяет профессиональную психологическую помощь. В разделе "Полезные контакты" вы найдёте номера горячих линий и сервисов психологической помощи.',
  },
  {
    question: 'Как выбрать категорию для своей истории?',
    answer: 'Выберите эмоцию, которая лучше всего описывает ваше текущее состояние. Не переживайте, если сложно определиться - можно выбрать несколько категорий или изменить их позже.',
  },
  {
    question: 'Есть ли возрастные ограничения?',
    answer: 'Платформа рекомендована для пользователей старше 16 лет. Если вам меньше 18 лет и вы испытываете серьёзные трудности, пожалуйста, обратитесь к взрослым или на телефон доверия.',
  },
];

const rules = [
  'Уважайте других участников и их переживания',
  'Не публикуйте оскорбительный или дискриминационный контент',
  'Не делитесь личными данными других людей',
  'Не используйте платформу для рекламы или спама',
  'Не давайте медицинских советов - только эмоциональную поддержку',
  'Соблюдайте конфиденциальность - не копируйте истории других',
];

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Вопросы и ответы</h1>
          <p className="text-xl text-muted-foreground">
            Всё, что нужно знать о платформе
          </p>
        </div>

        <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Shield" size={24} />
              Правила сообщества
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="HelpCircle" size={24} />
              Частые вопросы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="animate-fade-in" style={{ animationDelay: '300ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Phone" size={24} />
              Полезные контакты
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-secondary/30 rounded-lg">
              <h4 className="font-semibold mb-2">Телефон доверия для детей и подростков</h4>
              <p className="text-2xl font-bold text-primary">8-800-2000-122</p>
              <p className="text-sm text-muted-foreground mt-1">Бесплатно, круглосуточно, анонимно</p>
            </div>
            
            <div className="p-4 bg-secondary/30 rounded-lg">
              <h4 className="font-semibold mb-2">Психологическая помощь МЧС</h4>
              <p className="text-2xl font-bold text-primary">8-495-989-50-50</p>
              <p className="text-sm text-muted-foreground mt-1">Поддержка в кризисных ситуациях</p>
            </div>

            <div className="p-4 bg-secondary/30 rounded-lg">
              <h4 className="font-semibold mb-2">Онлайн-чат психологической помощи</h4>
              <a href="#" className="text-primary hover:underline">pomogatel.ru</a>
              <p className="text-sm text-muted-foreground mt-1">Бесплатные консультации с психологами</p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center p-6 bg-primary/5 rounded-lg animate-fade-in" style={{ animationDelay: '400ms' }}>
          <Icon name="Mail" size={32} className="mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Не нашли ответ на свой вопрос?</h3>
          <p className="text-muted-foreground mb-4">
            Свяжитесь с нами, и мы обязательно поможем
          </p>
          <a href="#" className="text-primary hover:underline font-medium">
            support@anonymous-support.ru
          </a>
        </div>
      </div>
    </div>
  );
}
