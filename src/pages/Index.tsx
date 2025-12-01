import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSections((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.timeline-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const lifePeriods = [
    {
      title: 'Ранние годы',
      years: '1799-1811',
      icon: 'Baby',
      description: 'Рождение в Москве. Детство в аристократической семье. Первое знакомство с литературой через няню Арину Родионовну.',
      color: 'from-amber-500/20 to-orange-500/20',
      facts: [
        'Родился 6 июня 1799 года в Москве',
        'Воспитывался французскими гувернерами',
        'Няня Арина Родионовна рассказывала русские сказки',
        'Рано проявил интерес к поэзии'
      ]
    },
    {
      title: 'Лицейский период',
      years: '1811-1817',
      icon: 'GraduationCap',
      description: 'Обучение в Царскосельском лицее. Первые публикации. Дружба с будущими декабристами.',
      color: 'from-blue-500/20 to-cyan-500/20',
      facts: [
        'Поступил в Царскосельский лицей в 12 лет',
        'Первая публикация в журнале "Вестник Европы"',
        'Познакомился с Дельвигом и Кюхельбекером',
        'Написал "Воспоминания в Царском Селе"'
      ]
    },
    {
      title: 'Петербургский период',
      years: '1817-1820',
      icon: 'Building2',
      description: 'Служба в Коллегии иностранных дел. Знакомство с литературными кругами. Первые политические стихи.',
      color: 'from-purple-500/20 to-pink-500/20',
      facts: [
        'Служил в Коллегии иностранных дел',
        'Вступил в литературное общество "Арзамас"',
        'Написал оду "Вольность"',
        'Закончил поэму "Руслан и Людмила"'
      ]
    },
    {
      title: 'Южная ссылка',
      years: '1820-1824',
      icon: 'Palmtree',
      description: 'Ссылка на юг России за вольнодумство. Путешествия по Кавказу и Крыму. Романтические поэмы.',
      color: 'from-rose-500/20 to-red-500/20',
      facts: [
        'Сослан за политические стихи',
        'Посетил Кавказ, Крым, Кишинев, Одессу',
        'Написал "Кавказский пленник"',
        'Начал работу над "Евгением Онегиным"'
      ]
    },
    {
      title: 'Михайловское. Болдино',
      years: '1824-1830',
      icon: 'Home',
      description: 'Ссылка в родовое имение. Творческий расцвет. Болдинская осень - самый плодотворный период.',
      color: 'from-green-500/20 to-emerald-500/20',
      facts: [
        'Провел 2 года в селе Михайловское',
        'Болдинская осень 1830 - 50+ произведений',
        'Написал "Бориса Годунова"',
        'Завершил "Евгения Онегина"'
      ]
    },
    {
      title: 'Последние годы',
      years: '1831-1837',
      icon: 'Crown',
      description: 'Женитьба на Наталье Гончаровой. Служба при дворе. Трагическая дуэль и смерть.',
      color: 'from-indigo-500/20 to-violet-500/20',
      facts: [
        'Женился на Наталье Гончаровой',
        'Получил звание камер-юнкера',
        'Написал "Капитанскую дочку"',
        'Погиб на дуэли 10 февраля 1837 года'
      ]
    }
  ];

  const majorWorks = [
    {
      title: 'Евгений Онегин',
      year: '1823-1831',
      genre: 'Роман в стихах',
      description: 'Энциклопедия русской жизни. История любви Онегина и Татьяны.',
      quote: 'Мой дядя самых честных правил...'
    },
    {
      title: 'Капитанская дочка',
      year: '1836',
      genre: 'Исторический роман',
      description: 'Повесть о пугачевском восстании и судьбе молодого офицера.',
      quote: 'Береги честь смолоду'
    },
    {
      title: 'Борис Годунов',
      year: '1825',
      genre: 'Трагедия',
      description: 'Драма о власти, совести и народе в эпоху Смутного времени.',
      quote: 'Народ безмолвствует'
    },
    {
      title: 'Медный всадник',
      year: '1833',
      genre: 'Поэма',
      description: 'Петербургская повесть о маленьком человеке и величии империи.',
      quote: 'Люблю тебя, Петра творенье!'
    },
    {
      title: 'Руслан и Людмила',
      year: '1820',
      genre: 'Поэма',
      description: 'Сказочная поэма о подвигах русского богатыря.',
      quote: 'У лукоморья дуб зелёный...'
    },
    {
      title: 'Повести Белкина',
      year: '1830',
      genre: 'Прозаические повести',
      description: 'Цикл из пяти повестей о русской жизни.',
      quote: 'Смиренное кладбище'
    }
  ];

  const interestingFacts = [
    {
      title: 'Африканские корни',
      text: 'Прадед Пушкина - Абрам Ганнибал, привезённый в Россию из Африки, стал генералом и другом Петра I.',
      icon: 'Globe'
    },
    {
      title: 'Феноменальная память',
      text: 'Пушкин помнил наизусть тысячи стихотворных строк и мог цитировать целые произведения.',
      icon: 'Brain'
    },
    {
      title: 'Болдинская осень',
      text: 'За три месяца карантина в Болдино Пушкин написал более 50 произведений - невероятная продуктивность.',
      icon: 'Leaf'
    },
    {
      title: 'Дуэли',
      text: 'Пушкин участвовал в 29 дуэлях, последняя из которых стала для него роковой.',
      icon: 'Swords'
    },
    {
      title: 'Многоязычие',
      text: 'Свободно владел французским, читал на английском, немецком, итальянском, испанском, латыни и греческом.',
      icon: 'Languages'
    },
    {
      title: 'Библиотека',
      text: 'Личная библиотека поэта насчитывала более 4000 томов на разных языках.',
      icon: 'BookOpen'
    }
  ];

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/c3bc8112-f505-4034-93fc-2f338a3e3cbb/files/50bed629-fdad-4599-9ea3-f0b715464518.jpg',
      title: 'Портрет А.С. Пушкина',
      description: 'Классический портрет поэта, 1827 год',
      category: 'Портреты'
    },
    {
      url: 'https://cdn.poehali.dev/projects/c3bc8112-f505-4034-93fc-2f338a3e3cbb/files/b313e09a-24b3-4083-82ba-7a8e10cb5e35.jpg',
      title: 'Книги и рукописи',
      description: 'Произведения Пушкина',
      category: 'Документы'
    },
    {
      url: 'https://cdn.poehali.dev/projects/c3bc8112-f505-4034-93fc-2f338a3e3cbb/files/41113984-925f-4a3d-8fa5-cb17895295df.jpg',
      title: 'Царскосельский лицей',
      description: 'Где учился юный Пушкин',
      category: 'Места'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-amber-400 to-primary bg-clip-text text-transparent">
              Александр Сергеевич Пушкин
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
              1799 - 1837
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Величайший русский поэт, прозаик и драматург. Создатель современного русского литературного языка.
            </p>
          </div>

          <Tabs defaultValue="biography" className="w-full mb-16">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="biography">Биография</TabsTrigger>
              <TabsTrigger value="works">Произведения</TabsTrigger>
              <TabsTrigger value="facts">Факты</TabsTrigger>
            </TabsList>

            <TabsContent value="biography" className="space-y-8">
              <div className="grid gap-8">
                {lifePeriods.map((period, index) => (
                  <div
                    key={index}
                    data-index={index}
                    className={`timeline-section transition-all duration-700 ${
                      visibleSections.includes(index)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <Card className={`relative overflow-hidden bg-gradient-to-br ${period.color} border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/20 rounded-lg">
                            <Icon name={period.icon as any} size={32} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <CardTitle className="text-3xl">{period.title}</CardTitle>
                              <Badge variant="secondary" className="text-sm">
                                {period.years}
                              </Badge>
                            </div>
                            <CardDescription className="text-base">
                              {period.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {period.facts.map((fact, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Icon name="Sparkles" size={16} className="text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm">{fact}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="works" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">Основные произведения</h2>
                <p className="text-muted-foreground">Шедевры русской литературы</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {majorWorks.map((work, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-secondary/20"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {work.year}
                        </Badge>
                        <Icon name="BookOpen" size={20} className="text-primary" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {work.title}
                      </CardTitle>
                      <CardDescription>{work.genre}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm">{work.description}</p>
                      <blockquote className="border-l-4 border-primary pl-4 italic text-sm text-muted-foreground">
                        "{work.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="facts" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">Интересные факты</h2>
                <p className="text-muted-foreground">Удивительные истории из жизни поэта</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {interestingFacts.map((fact, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-br from-card to-primary/5"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/20 rounded-lg">
                          <Icon name={fact.icon as any} size={24} className="text-primary" />
                        </div>
                        <CardTitle className="text-xl">{fact.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed">{fact.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <section className="mb-16 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Галерея</h2>
              <p className="text-muted-foreground">Портреты, иллюстрации и исторические документы</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer group overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">
                          {image.category}
                        </Badge>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {image.title}
                        </CardTitle>
                        <CardDescription>{image.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{image.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full rounded-lg"
                      />
                      <p className="text-muted-foreground">{image.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>

          <footer className="text-center py-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Сайт посвящён великому русскому поэту Александру Сергеевичу Пушкину
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Icon name="Feather" size={16} className="text-primary animate-glow" />
              <span className="text-xs text-muted-foreground">
                "Я памятник себе воздвиг нерукотворный..."
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
