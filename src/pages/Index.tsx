import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const courses = [
  {
    id: 1,
    title: 'Оптомоторная реакция рыб',
    description: 'Основы визуального восприятия движения у рыб и их адаптивное поведение',
    progress: 65,
    lessons: 12,
    completed: 8,
    icon: 'Eye',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Стайное поведение',
    description: 'Механизмы координации и синхронизации движения в рыбьих стаях',
    progress: 40,
    lessons: 15,
    completed: 6,
    icon: 'Waves',
    color: 'bg-cyan-500'
  },
  {
    id: 3,
    title: 'Биология миграций',
    description: 'Навигационные способности и сезонные перемещения рыб',
    progress: 20,
    lessons: 10,
    completed: 2,
    icon: 'Navigation',
    color: 'bg-teal-500'
  }
];

const articles = [
  {
    id: 1,
    title: 'Роль оптомоторной реакции в стайном поведении',
    excerpt: 'Оптомоторная реакция — это визомоторный рефлекс, при котором рыба автоматически следует за движущимися объектами в поле зрения.',
    readTime: '8 мин',
    category: 'Поведение',
    featured: true
  },
  {
    id: 2,
    title: 'Синхронизация движения в школах рыб',
    excerpt: 'Координированное движение тысяч рыб в стае — результат простых правил взаимодействия между соседями.',
    readTime: '10 мин',
    category: 'Исследования'
  },
  {
    id: 3,
    title: 'Визуальное восприятие и латеральная линия',
    excerpt: 'Комбинация зрительного восприятия и механорецепции позволяет рыбам поддерживать структуру стаи.',
    readTime: '12 мин',
    category: 'Физиология'
  },
  {
    id: 4,
    title: 'Эволюционные преимущества стайного образа жизни',
    excerpt: 'Защита от хищников, эффективный поиск пищи и навигация — ключевые преимущества коллективного поведения.',
    readTime: '15 мин',
    category: 'Эволюция'
  }
];

export default function Index() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const totalProgress = Math.round(courses.reduce((acc, c) => acc + c.progress, 0) / courses.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/30">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Fish" className="text-primary" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">AquaBio Academy</h1>
                <p className="text-sm text-muted-foreground">Биология поведения рыб</p>
              </div>
            </div>
            <Button variant="default" className="gap-2">
              <Icon name="User" size={18} />
              Профиль
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 animate-fade-in">
          <div className="bg-gradient-to-r from-primary to-cyan-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Добро пожаловать в мир морской биологии! 🐠
              </h2>
              <p className="text-xl mb-6 text-white/90 max-w-2xl">
                Изучайте удивительное поведение рыб, их социальные взаимодействия и адаптивные механизмы
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-3xl font-bold">{totalProgress}%</div>
                  <div className="text-sm text-white/80">Общий прогресс</div>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div>
                  <div className="text-3xl font-bold">{courses.length}</div>
                  <div className="text-sm text-white/80">Активных курса</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Tabs defaultValue="courses" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="courses" className="gap-2">
              <Icon name="BookOpen" size={18} />
              Мои курсы
            </TabsTrigger>
            <TabsTrigger value="articles" className="gap-2">
              <Icon name="FileText" size={18} />
              Статьи
            </TabsTrigger>
            <TabsTrigger value="progress" className="gap-2">
              <Icon name="TrendingUp" size={18} />
              Прогресс
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6 animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Card 
                  key={course.id} 
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                  onClick={() => setSelectedCourse(course.id)}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-2xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon name={course.icon} className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Прогресс</span>
                          <span className="font-semibold text-primary">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="BookMarked" size={16} />
                          <span>{course.completed}/{course.lessons} уроков</span>
                        </div>
                        <Button size="sm" variant="ghost" className="gap-1">
                          Продолжить
                          <Icon name="ArrowRight" size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="articles" className="animate-fade-in">
            <div className="space-y-6">
              {articles.map((article, index) => (
                <Card 
                  key={article.id}
                  className={`hover:shadow-md transition-all duration-300 ${
                    article.featured ? 'border-primary/50 bg-gradient-to-r from-accent/30 to-transparent' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{article.category}</Badge>
                          {article.featured && (
                            <Badge className="bg-primary">
                              <Icon name="Star" size={12} className="mr-1" />
                              Рекомендуем
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-2xl mb-2">{article.title}</CardTitle>
                        <CardDescription className="text-base">{article.excerpt}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="gap-2">
                        Читать
                        <Icon name="ChevronRight" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Award" className="text-primary" />
                    Ваши достижения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-accent/50 rounded-2xl">
                      <div className="text-5xl font-bold text-primary mb-2">{totalProgress}%</div>
                      <div className="text-muted-foreground">Общий прогресс обучения</div>
                    </div>
                    <div className="space-y-3">
                      {courses.map((course) => (
                        <div key={course.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/30 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg ${course.color} flex items-center justify-center`}>
                              <Icon name={course.icon} className="text-white" size={16} />
                            </div>
                            <span className="font-medium">{course.title}</span>
                          </div>
                          <span className="text-sm font-semibold text-primary">{course.progress}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BarChart3" className="text-primary" />
                    Статистика обучения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200">
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          {courses.reduce((acc, c) => acc + c.completed, 0)}
                        </div>
                        <div className="text-sm text-blue-900/70">Уроков пройдено</div>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-cyan-50 to-cyan-100/50 rounded-xl border border-cyan-200">
                        <div className="text-3xl font-bold text-cyan-600 mb-1">
                          {courses.reduce((acc, c) => acc + c.lessons, 0)}
                        </div>
                        <div className="text-sm text-cyan-900/70">Всего уроков</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 pt-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2">
                          <Icon name="CheckCircle2" className="text-green-600" size={20} />
                          <span className="font-medium">Активность</span>
                        </div>
                        <Badge className="bg-green-600">7 дней подряд</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="flex items-center gap-2">
                          <Icon name="Trophy" className="text-purple-600" size={20} />
                          <span className="font-medium">Достижения</span>
                        </div>
                        <Badge className="bg-purple-600">5 из 12</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2">
                          <Icon name="Target" className="text-orange-600" size={20} />
                          <span className="font-medium">Цель недели</span>
                        </div>
                        <Badge className="bg-orange-600">85%</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t bg-card/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Icon name="Fish" size={20} />
              <span>© 2024 AquaBio Academy</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">О платформе</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
              <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
