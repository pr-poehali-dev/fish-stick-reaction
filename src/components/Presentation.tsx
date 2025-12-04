import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
  bgGradient: string;
}

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Роль оптомоторной реакции в стайном поведении рыб',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-7xl mb-6 animate-float">🐠</div>
            <h2 className="text-5xl font-bold mb-4">Оптомоторная реакция</h2>
            <p className="text-2xl text-muted-foreground">
              Визомоторный механизм координации движения в стаях
            </p>
          </div>
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center p-6 bg-primary/10 rounded-2xl">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">особей в стае</div>
            </div>
            <div className="text-center p-6 bg-cyan-500/10 rounded-2xl">
              <div className="text-4xl font-bold text-cyan-600">99.9%</div>
              <div className="text-sm text-muted-foreground">синхронизация</div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      id: 2,
      title: 'Что такое оптомоторная реакция?',
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Определение</h3>
            <p className="text-lg leading-relaxed">
              <strong>Оптомоторная реакция</strong> — это автоматический рефлекс, при котором рыба 
              следует за движущимися объектами в своём поле зрения.
            </p>
            <div className="space-y-4">
              <Card className="p-4 bg-blue-50 border-blue-200">
                <div className="flex items-start gap-3">
                  <Icon name="Eye" className="text-blue-600 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Визуальный триггер</div>
                    <div className="text-sm text-muted-foreground">
                      Обнаружение движения соседних рыб
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-cyan-50 border-cyan-200">
                <div className="flex items-start gap-3">
                  <Icon name="Zap" className="text-cyan-600 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Мгновенная реакция</div>
                    <div className="text-sm text-muted-foreground">
                      Время ответа: 20-50 миллисекунд
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center justify-center gap-4">
                <div className="text-6xl animate-float" style={{ animationDelay: '0s' }}>🐟</div>
                <Icon name="ArrowRight" className="text-primary" size={32} />
                <div className="text-6xl animate-float" style={{ animationDelay: '0.3s' }}>🐟</div>
                <Icon name="ArrowRight" className="text-primary" size={32} />
                <div className="text-6xl animate-float" style={{ animationDelay: '0.6s' }}>🐟</div>
              </div>
              <p className="text-center mt-6 text-sm text-muted-foreground">
                Автоматическое следование за движением
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-white to-blue-50'
    },
    {
      id: 3,
      title: 'Механизм работы в стае',
      content: (
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">Три правила стайного поведения</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="Users" className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">1. Когезия</h4>
              <p className="text-sm text-muted-foreground">
                Стремление приближаться к центру группы соседних рыб
              </p>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <div className="text-xs text-muted-foreground">Дистанция</div>
                <div className="text-2xl font-bold text-green-600">2-3 длины тела</div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="Minimize2" className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">2. Разделение</h4>
              <p className="text-sm text-muted-foreground">
                Избегание столкновений при приближении других особей
              </p>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <div className="text-xs text-muted-foreground">Мин. дистанция</div>
                <div className="text-2xl font-bold text-yellow-600">0.5 длины тела</div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="Navigation" className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">3. Выравнивание</h4>
              <p className="text-sm text-muted-foreground">
                Синхронизация направления движения с соседями
              </p>
              <div className="mt-4 p-3 bg-white rounded-lg">
                <div className="text-xs text-muted-foreground">Точность</div>
                <div className="text-2xl font-bold text-blue-600">±5°</div>
              </div>
            </Card>
          </div>
          <div className="text-center p-6 bg-primary/10 rounded-2xl">
            <p className="text-lg">
              <strong>Оптомоторная реакция</strong> обеспечивает выполнение всех трёх правил одновременно
            </p>
          </div>
        </div>
      ),
      bgGradient: 'from-white to-green-50'
    },
    {
      id: 4,
      title: 'Физиология зрительного восприятия',
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Анатомия восприятия</h3>
            <div className="space-y-4">
              <Card className="p-5 bg-purple-50 border-purple-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Eye" className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-2">Широкое поле зрения</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      У большинства рыб поле зрения составляет около 300°
                    </p>
                    <Progress value={83} className="h-2" />
                    <div className="text-xs text-right mt-1 text-purple-600">83% от полного круга</div>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-cyan-50 border-cyan-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Gauge" className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-2">Детекторы движения</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Специализированные нейроны в оптическом тектуме
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <div className="p-2 bg-white rounded text-center">
                        <div className="text-xl font-bold text-cyan-600">4 типа</div>
                        <div className="text-xs text-muted-foreground">рецепторов</div>
                      </div>
                      <div className="p-2 bg-white rounded text-center">
                        <div className="text-xl font-bold text-cyan-600">20 мс</div>
                        <div className="text-xs text-muted-foreground">реакция</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-orange-50 border-orange-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Waves" className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-2">Латеральная линия</h4>
                    <p className="text-sm text-muted-foreground">
                      Дополняет зрение, детектируя колебания воды от соседей
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-3xl p-6">
              <h4 className="text-xl font-bold mb-4">Нейронная обработка</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Сетчатка</div>
                    <div className="text-xs text-muted-foreground">Детекция движения</div>
                  </div>
                </div>
                <Icon name="ArrowDown" className="text-primary ml-4" size={20} />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Оптический тектум</div>
                    <div className="text-xs text-muted-foreground">Анализ направления</div>
                  </div>
                </div>
                <Icon name="ArrowDown" className="text-primary ml-4" size={20} />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Мозжечок</div>
                    <div className="text-xs text-muted-foreground">Координация движений</div>
                  </div>
                </div>
                <Icon name="ArrowDown" className="text-primary ml-4" size={20} />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Моторные нейроны</div>
                    <div className="text-xs text-muted-foreground">Движение плавников</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-4 bg-yellow-50 border-yellow-200">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Lightbulb" className="text-yellow-600" size={20} />
                <span className="font-semibold">Интересный факт</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Весь процесс от визуального стимула до моторного ответа занимает всего 20-50 мс!
              </p>
            </Card>
          </div>
        </div>
      ),
      bgGradient: 'from-white to-purple-50'
    },
    {
      id: 5,
      title: 'Эволюционные преимущества',
      content: (
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">Почему это важно для выживания?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <Icon name="Shield" className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold">Защита от хищников</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Плотная координированная стая создаёт визуальную иллюзию для хищника
              </p>
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-red-50 rounded-lg">
                  <span className="text-sm">Эффект замешательства</span>
                  <span className="font-bold text-red-600">+80%</span>
                </div>
                <div className="flex justify-between p-3 bg-red-50 rounded-lg">
                  <span className="text-sm">Снижение риска атаки</span>
                  <span className="font-bold text-red-600">5× меньше</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Icon name="Utensils" className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold">Поиск пищи</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Коллективный поиск пищи эффективнее индивидуального
              </p>
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Охват территории</span>
                  <span className="font-bold text-green-600">10× больше</span>
                </div>
                <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Скорость обнаружения</span>
                  <span className="font-bold text-green-600">+300%</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Icon name="Compass" className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold">Навигация</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Коллективное принятие решений при миграциях
              </p>
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Точность маршрута</span>
                  <span className="font-bold text-blue-600">+95%</span>
                </div>
                <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Энергоэффективность</span>
                  <span className="font-bold text-blue-600">-40%</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Icon name="Droplets" className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold">Гидродинамика</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Синхронное движение снижает сопротивление воды
              </p>
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm">Экономия энергии</span>
                  <span className="font-bold text-purple-600">-30%</span>
                </div>
                <div className="flex justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm">Скорость движения</span>
                  <span className="font-bold text-purple-600">+20%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ),
      bgGradient: 'from-white to-orange-50'
    },
    {
      id: 6,
      title: 'Научные исследования',
      content: (
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">Ключевые открытия</h3>
          <div className="space-y-4">
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Microscope" className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">Iain Couzin (2002)</h4>
                  <p className="text-muted-foreground mb-3">
                    Компьютерное моделирование показало, что всего три простых правила (когезия, разделение, выравнивание) 
                    достаточны для возникновения сложного стайного поведения
                  </p>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">Модель SPP</div>
                    <div className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full">Self-organization</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Brain" className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">Partridge & Pitcher (1980)</h4>
                  <p className="text-muted-foreground mb-3">
                    Эксперименты с хищниками показали, что оптомоторная реакция обеспечивает мгновенную 
                    синхронизацию при угрозе — вся стая реагирует за 0.02 секунды
                  </p>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full">Поведенческая экология</div>
                    <div className="px-3 py-1 bg-pink-500 text-white text-xs rounded-full">Anti-predator</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">Herbert-Read et al. (2017)</h4>
                  <p className="text-muted-foreground mb-3">
                    Использование компьютерного зрения и машинного обучения для анализа движения тысяч рыб. 
                    Подтверждено: каждая рыба отслеживает только 6-7 ближайших соседей
                  </p>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">Computer Vision</div>
                    <div className="px-3 py-1 bg-emerald-500 text-white text-xs rounded-full">Топологическая связь</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl">
              <div className="text-4xl font-bold mb-2">6-7</div>
              <div className="text-sm opacity-90">соседей отслеживает каждая рыба</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl">
              <div className="text-4xl font-bold mb-2">20 мс</div>
              <div className="text-sm opacity-90">время реакции на движение</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-2xl">
              <div className="text-4xl font-bold mb-2">300°</div>
              <div className="text-sm opacity-90">поле зрения рыбы</div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-white to-indigo-50'
    },
    {
      id: 7,
      title: 'Выводы',
      content: (
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">Ключевые выводы</h3>
            <p className="text-xl text-muted-foreground">
              Оптомоторная реакция — основа коллективного интеллекта рыб
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Автоматический рефлекс</h4>
                  <p className="text-muted-foreground">
                    Оптомоторная реакция — это врождённый механизм, не требующий обучения. 
                    Рыба автоматически следует за движущимися объектами в поле зрения.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border-cyan-500/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Локальные правила → Глобальный паттерн</h4>
                  <p className="text-muted-foreground">
                    Каждая рыба взаимодействует только с ближайшими 6-7 соседями, но это создаёт 
                    координированное движение всей стаи из тысяч особей.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-green-500/10 to-green-500/5 border-green-500/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Эволюционное преимущество</h4>
                  <p className="text-muted-foreground">
                    Синхронизация через оптомоторную реакцию даёт защиту от хищников, эффективный поиск пищи 
                    и экономию энергии при движении.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-purple-500/10 to-purple-500/5 border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Применение в технологиях</h4>
                  <p className="text-muted-foreground">
                    Принципы стайного поведения используются в робототехнике, алгоритмах оптимизации 
                    и системах управления беспилотниками.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary to-cyan-500 rounded-3xl text-white text-center">
            <div className="text-6xl mb-4">🐠 🐟 🐡</div>
            <h4 className="text-2xl font-bold mb-3">Спасибо за внимание!</h4>
            <p className="text-lg opacity-90">
              Природа создала удивительно эффективный механизм коллективного поведения
            </p>
          </div>
        </div>
      ),
      bgGradient: 'from-white to-primary/5'
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 py-8">
        <div className={`bg-gradient-to-br ${slides[currentSlide].bgGradient} rounded-3xl shadow-2xl overflow-hidden animate-fade-in`}>
          <div className="p-8 md:p-12 min-h-[600px] flex flex-col">
            <div className="flex-1">
              {slides[currentSlide].content}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border-t px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <Button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Icon name="ChevronLeft" size={20} />
                Назад
              </Button>

              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                variant="default"
                size="lg"
                className="gap-2"
              >
                Далее
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Слайд {currentSlide + 1} из {slides.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg" onClick={() => goToSlide(0)} className="gap-2">
            <Icon name="RotateCcw" size={20} />
            Вернуться к началу
          </Button>
        </div>
      </div>
    </div>
  );
}
