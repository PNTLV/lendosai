"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Clock, 
  DollarSign, 
  Users, 
  TrendingDown, 
  AlertTriangle, 
  Target,
  Zap, 
  Shield, 
  Rocket, 
  Brain,
  BarChart3,
  CheckCircle,
  Crown,
  Sparkles,
  Star
} from "lucide-react";

// Hero Section Component
function HeroSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-purple-500/[0.08] blur-3xl" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/5 w-72 h-72 bg-primary/15 rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm mb-8 md:mb-12"
          >
            <div className="h-2 w-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            <span className="text-sm text-white/80 tracking-wide font-medium">
              ✨ AI-платформа для венчурных фондов
            </span>
          </motion.div>

          {/* Headlines */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-none">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                Автоматизируйте скрининг
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                питч-деков
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-12 leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
              AI-платформа для венчурных фондов, которая обрабатывает до 100+ питч-деков в день, 
              анализирует соответствие критериям и предоставляет готовую аналитику
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Начать бесплатно</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/[0.05] border border-white/[0.1] text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/[0.1] transition-all duration-300"
            >
              <span>Посмотреть демо</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Problem Section Component
function ProblemSection() {
  const problems = [
    {
      icon: <Clock className="w-6 h-6 text-red-400" />,
      title: "Огромные временные затраты",
      description: "Аналитики тратят часы на рутинную обработку каждого питч-дека. Крупные фонды получают до 100+ презентаций в день.",
      severity: 'high' as const
    },
    {
      icon: <DollarSign className="w-6 h-6 text-orange-400" />,
      title: "Низкая эффективность скрининга",
      description: "95-99% входящих питч-деков не соответствуют инвестиционным критериям, но требуют полной проверки.",
      severity: 'high' as const
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Высокие затраты на персонал",
      description: "Необходимо содержать большую команду аналитиков для обработки входящего потока заявок.",
      severity: 'medium' as const
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-red-400" />,
      title: "Риск пропуска выгодных сделок",
      description: "Из-за временных ограничений есть высокий риск пропустить потенциально интересную возможность.",
      severity: 'high' as const
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-yellow-400" />,
      title: "Дублирование работы",
      description: "Research рынков, фактчекинг и проверка критериев выполняются вручную для каждого стартапа.",
      severity: 'medium' as const
    },
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: "Отсутствие стандартизации",
      description: "Каждый питч-дек имеет уникальный стиль, что затрудняет потоковый формат скрининга.",
      severity: 'medium' as const
    }
  ];

  const severityColors = {
    high: 'text-red-400 bg-red-500/10',
    medium: 'text-orange-400 bg-orange-500/10',
    low: 'text-yellow-400 bg-yellow-500/10'
  };

  return (
    <section id="features" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Проблемы венчурных фондов
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ключевые болевые точки, с которыми сталкиваются аналитики и партнеры венчурных фондов ежедневно
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-muted/50">
                  {problem.icon}
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${severityColors[problem.severity]}`}>
                  {problem.severity === 'high' ? 'ВЫСОКИЙ' : problem.severity === 'medium' ? 'СРЕДНИЙ' : 'НИЗКИЙ'}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-full">
            <AlertTriangle className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-muted-foreground">
              Эти проблемы стоят вашему фонду времени, денег и упущенных возможностей
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Benefits Section Component
function BenefitsSection() {
  const benefits = [
    {
      icon: Brain,
      title: "Автоматическая сегментация",
      description: "Извлечение ключевых параметров: сегмент, размер раунда, стадия, команда, выручка. Автоматическая категоризация по отраслям и бизнес-моделям.",
      badge: "AI-анализ"
    },
    {
      icon: Target,
      title: "Интеллектуальный скоринг",
      description: "Настройка индивидуальных критериев фонда. AI-анализ соответствия каждого стартапа. Приоритизация наиболее релевантных возможностей.",
      badge: "Скоринг"
    },
    {
      icon: Shield,
      title: "Автоматический фактчекинг",
      description: "Верификация заявленных цифр по рынку и росту. Проверка финансовых показателей. Выявление потенциальных 'красных флагов'.",
      badge: "Верификация"
    },
    {
      icon: BarChart3,
      title: "Независимый анализ рынков",
      description: "Автоматическая генерация детальных отчетов по рынкам. Диаграммы, численные данные, прогнозы роста. Готовая аналитика для принятия решений.",
      badge: "Аналитика"
    },
    {
      icon: Zap,
      title: "Увеличение throughput в 10x",
      description: "Значительное сокращение времени на первичный анализ. Освобождение senior talent для high-value активностей: networking, due diligence, работа с портфелем.",
      badge: "Производительность"
    },
    {
      icon: Rocket,
      title: "Конкурентное преимущество",
      description: "Быстрее конкурентов отвечают на интересные предложения. Стандартизация процессов принятия решений. Снижение вероятности пропуска выгодных сделок.",
      badge: "Преимущество"
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Ключевые преимущества
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Почему выбирают нашу платформу
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Мощные возможности, которые трансформируют рабочий процесс венчурных фондов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium">
                    {benefit.badge}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-sm text-muted-foreground">
              Уже используют более 250+ венчурных фондов
            </span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            <Star className="h-4 w-4" />
            Попробовать бесплатно
          </motion.button>
          
          <p className="text-xs text-muted-foreground mt-3">
            Без кредитной карты • Пробный период 14 дней
          </p>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section Component
function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Александр Петров",
      role: "Управляющий партнер",
      company: "TechVentures Capital",
      content: "Платформа кардинально изменила наш подход к скринингу. Теперь мы обрабатываем в 15 раз больше питч-деков при том же качестве анализа. Экономия времени составляет 85%.",
      rating: 5,
      avatar: "/api/placeholder/150/150",
      verified: true,
      results: ["15x больше питч-деков", "85% экономия времени", "Высокое качество"]
    },
    {
      id: 2,
      name: "Мария Соколова",
      role: "Инвестиционный директор",
      company: "Growth Partners",
      content: "Автоматический фактчекинг и анализ рынка экономят нам минимум 20 часов в неделю на каждого аналитика. Качество insights значительно выше чем при ручном анализе.",
      rating: 5,
      avatar: "/api/placeholder/150/150",
      verified: true,
      results: ["20 часов экономии", "Лучшее качество", "Автоматизация"]
    },
    {
      id: 3,
      name: "Дмитрий Волков",
      role: "Венчурный партнер",
      company: "Innovation Fund",
      content: "Благодаря платформе мы не пропустили ни одной перспективной сделки за последние 6 месяцев. Система точно определяет потенциал стартапов и приоритизирует заявки.",
      rating: 5,
      avatar: "/api/placeholder/150/150",
      verified: true,
      results: ["0 пропущенных сделок", "Точная приоритизация", "6 месяцев успеха"]
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Отзывы клиентов
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Доверяют лидеры индустрии
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Присоединяйтесь к сотням венчурных фондов, которые уже трансформировали свои процессы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-sm text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="grid grid-cols-1 gap-2 mb-6">
                {testimonial.results.map((result, i) => (
                  <div key={i} className="bg-muted/50 rounded-lg p-2 text-xs text-muted-foreground font-medium">
                    {result}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
                {testimonial.verified && (
                  <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "250+", label: "Венчурных фондов" },
              { number: "98%", label: "Уровень удовлетворенности" },
              { number: "10x", label: "Увеличение throughput" },
              { number: "85%", label: "Экономия времени" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Pricing Section Component
function PricingSection() {
  const plans = [
    {
      id: "bootstrapped",
      name: "Bootstrapped",
      subtitle: "Для небольших фондов",
      description: "Основные возможности для начинающих венчурных фондов",
      price: { monthly: 199, yearly: 1990 },
      features: [
        "До 80 скринингов в месяц",
        "1 пользователь",
        "Базовая аналитика",
        "Email поддержка",
        "Стандартные отчеты"
      ],
      icon: Zap,
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-400 to-cyan-400",
      cta: "Начать",
      isPopular: false
    },
    {
      id: "business-angel",
      name: "Business Angel",
      subtitle: "Популярный выбор",
      description: "Расширенные возможности для бизнес-ангелов",
      price: { monthly: 499, yearly: 4990 },
      features: [
        "До 250 скринингов в месяц",
        "До 3 пользователей",
        "Базовый маркет-ресерч",
        "Приоритетная поддержка",
        "Расширенная аналитика",
        "API доступ"
      ],
      icon: Crown,
      gradient: "from-indigo-500/20 to-purple-500/20",
      borderGradient: "from-indigo-400 to-purple-400",
      cta: "Попробовать бесплатно",
      isPopular: true,
      badge: "Популярный"
    },
    {
      id: "vc",
      name: "VC",
      subtitle: "Для венчурных фондов",
      description: "Профессиональное решение для венчурных фондов",
      price: { monthly: 1899, yearly: 18990 },
      features: [
        "До 1000 скринингов в месяц",
        "До 10 пользователей", 
        "Глубокий маркет-ресерч",
        "24/7 поддержка",
        "Кастомные интеграции",
        "Расширенные отчеты",
        "Автоматизация workflow"
      ],
      icon: Rocket,
      gradient: "from-rose-500/20 to-pink-500/20",
      borderGradient: "from-rose-400 to-pink-400",
      cta: "Связаться с продажами",
      isHighlighted: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Тарифные планы
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Простые и прозрачные цены
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Выберите идеальный план для ваших потребностей. Все планы включают базовые функции без скрытых платежей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${
                plan.isPopular ? 'ring-2 ring-primary/50 scale-105' : ''
              } ${plan.isHighlighted ? 'bg-foreground text-background' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${plan.gradient}`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm">{plan.description}</p>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">${plan.price.monthly}</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                    plan.isHighlighted 
                      ? 'bg-background text-foreground hover:bg-background/90' 
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Нужно корпоративное решение?
            </h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нашей командой продаж для обсуждения корпоративных тарифов и функций, адаптированных под потребности вашей организации.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Star className="w-4 h-4" />
              Связаться с продажами
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Landing Page Component
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Готовы трансформировать свой фонд?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Начните использовать AI для автоматизации скрининга уже сегодня
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-semibold hover:bg-background/90 transition-colors"
            >
              Начать бесплатный период
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
