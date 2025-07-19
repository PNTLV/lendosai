"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight, 
  Clock, 
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
  Star,
  Calendar,
  Building2,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github
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
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950/90 to-slate-800 pt-16">
      {/* Stylish layered backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/8 via-purple-500/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-400/5 via-transparent to-transparent" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-24 left-16 w-32 h-32 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/12 to-cyan-500/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-500/8 to-blue-500/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}} />
      
      {/* Geometric patterns */}
      <div className="absolute top-20 right-1/4 w-20 h-20 border border-blue-400/20 rounded-xl rotate-12 animate-pulse" style={{animationDelay: '2.5s'}} />
      <div className="absolute bottom-24 left-1/3 w-16 h-16 border border-purple-400/15 rounded-lg -rotate-12 animate-pulse" style={{animationDelay: '1.5s'}} />
      <div className="absolute top-1/4 left-16 w-12 h-12 border border-cyan-400/20 rounded-full animate-pulse" style={{animationDelay: '3.5s'}} />
      
      {/* Complex floating shapes with smooth motion */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/5 w-72 h-72 bg-gradient-to-br from-blue-500/8 to-purple-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-br from-purple-500/6 to-cyan-500/6 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-60 h-60 bg-gradient-to-br from-indigo-500/7 to-blue-500/7 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
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
          
          {/* Free trial info */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-2 mt-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>Первые 5 питч-деков анализируем бесплатно</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Problem Section Component - Static Timeline
function ProblemSection() {
  const daySchedule = [
    {
      time: "9:00",
      action: "Первые питч-деки",
      description: "15 слайдов о \"революционном решении в logistics\"",
      outcome: "Pre-seed, $50K, не подходят (мин. $1M)",
      timeSpent: 48,
      icon: <Clock className="w-5 h-5" />,
      type: "waste",
      pitchDecks: 4
    },
    {
      time: "10:00",
      action: "Продолжаем просмотр",
      description: "\"Захватим рынок $500B\", типичные завышения",
      outcome: "Реальные рынки $5-10B, завышения в 50-100x",
      timeSpent: 60,
      icon: <TrendingDown className="w-5 h-5" />,
      type: "waste",
      pitchDecks: 10
    },
    {
      time: "12:00",
      action: "Поиск данных по рынкам",
      description: "Проверка market size вручную для перспективных",
      outcome: "Большинство данных неточные или устаревшие",
      timeSpent: 90,
      icon: <Target className="w-5 h-5" />,
      type: "manual",
      pitchDecks: 20
    },
    {
      time: "15:00",
      action: "20 питч-деков просмотрено",
      description: "Ни один пока не подходит критериям фонда",
      outcome: "40 питч-деков еще остается",
      timeSpent: 0,
      icon: <AlertTriangle className="w-5 h-5" />,
      type: "status",
      pitchDecks: 20
    },
    {
      time: "18:00",
      action: "Переработка - конец дня",
      description: "50 питч-деков просмотрено за день",
      outcome: "3 отправлено партнерам, 10 на завтра",
      timeSpent: 0,
      icon: <Users className="w-5 h-5" />,
      type: "result",
      pitchDecks: 50
    }
  ];

  const stats = [
    {
      value: "60",
      label: "питч-деков в очереди",
      color: "text-red-500",
      icon: <AlertTriangle className="w-4 h-4" />
    },
    {
      value: "95%",
      label: "не подходят критериям",
      color: "text-orange-500",
      icon: <TrendingDown className="w-4 h-4" />
    },
    {
      value: "12 мин",
      label: "на каждый питч-дек",
      color: "text-yellow-500",
      icon: <Clock className="w-4 h-4" />
    },
    {
      value: "7 часов",
      label: "потрачено впустую",
      color: "text-red-500",
      icon: <Clock className="w-4 h-4" />
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-red-50/15 to-orange-50/10 dark:from-red-950/10 dark:to-orange-950/8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-950/30 text-red-500 dark:text-red-400 text-sm font-medium mb-6"
          >
            <AlertTriangle className="w-4 h-4" />
            Узнайте себя
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Каждый день вы тонете в{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              океане питч-деков
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Если вы аналитик венчурного фонда, то эта ситуация вам знакома до боли.
          </p>
          
          {/* Акцентный блок с ключевой информацией */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-r from-red-50/50 to-orange-50/50 dark:from-red-950/20 dark:to-orange-950/20 border border-red-200/40 dark:border-red-800/40 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <span className="text-lg font-semibold text-red-500 dark:text-red-400">
                  Утро понедельника
                </span>
                <Clock className="w-5 h-5 text-red-500" />
              </div>
              
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                В почте:{" "}
                <span className="text-orange-600 dark:text-orange-400">40 новых</span>
                {" "}+{" "}
                <span className="text-red-600 dark:text-red-400">20 с пятницы</span>
              </div>
              
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 border border-red-200/50 dark:border-red-700/50 px-6 py-3 rounded-lg text-xl font-bold text-foreground">
                <span>=</span>
                <span className="text-red-600 dark:text-red-400">60 презентаций</span>
                <span className="text-muted-foreground">на сегодня</span>
              </div>
              
              <div className="mt-4 text-sm text-muted-foreground italic">
                И это только понедельник...
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left flex items-center justify-center lg:justify-start gap-3">
              <Calendar className="w-6 h-6 text-blue-500" />
              Обычный день аналитика
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200/60 to-orange-200/60 dark:from-red-800/60 dark:to-orange-800/60" />
              
                             {daySchedule.map((item, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: index * 0.2 }}
                   className="relative flex items-start gap-4 pb-8"
                 >
                   {/* Timeline dot */}
                   <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${
                                   item.type === 'waste' ? 'bg-red-50 text-red-500 border border-red-200/50 dark:bg-red-950/50 dark:text-red-400 dark:border-red-800/50' :
              item.type === 'manual' ? 'bg-yellow-50 text-yellow-600 border border-yellow-200/50 dark:bg-yellow-950/50 dark:text-yellow-400 dark:border-yellow-800/50' :
              item.type === 'status' ? 'bg-orange-50 text-orange-500 border border-orange-200/50 dark:bg-orange-950/50 dark:text-orange-400 dark:border-orange-800/50' :
                     'bg-gray-100 text-gray-600 border-2 border-gray-200 dark:bg-gray-950 dark:text-gray-400 dark:border-gray-800'
                   } transition-all duration-300`}>
                     {item.icon}
                   </div>
                   
                   {/* Content */}
                   <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-bold text-primary">{item.time}</span>
                      <span className="text-sm bg-secondary/50 px-2 py-1 rounded">
                        {item.pitchDecks} питч-деков
                      </span>
                    </div>
                    
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.action}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-destructive">
                        {item.outcome}
                      </span>
                      {item.timeSpent > 0 && (
                        <span className="text-xs bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400 px-2 py-1 rounded">
                          {item.timeSpent} мин потрачено
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Dashboard */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left flex items-center justify-center lg:justify-start gap-3">
              <BarChart3 className="w-6 h-6 text-blue-500" />
              Статистика дня
            </h3>
            
            {/* Pain Points Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className={`flex items-center justify-center gap-2 ${stat.color} mb-2`}>
                    {stat.icon}
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Daily Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-r from-red-500/5 to-orange-500/5 border border-red-200/50 dark:border-red-800/50 rounded-lg p-6"
            >
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Результат дня
              </h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Просмотрено питч-деков:</span>
                  <span className="font-semibold">50 из 60</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Отправлено партнерам:</span>
                  <span className="font-semibold text-green-600">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Перенесено на завтра:</span>
                  <span className="font-semibold text-red-500">10</span>
                </div>
                <div className="border-t border-border pt-3 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Страх фонда:</span>
                    <span className="font-bold text-red-500">Пропустить следующий единорог</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-center bg-card border border-border rounded-lg p-6"
            >
              <h4 className="text-lg font-bold text-foreground mb-4">
                Знакомо? 🤔
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Если да, то продолжайте читать. У нас есть решение.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Посмотреть решение
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Benefits Section Component with Interface Mockups
function BenefitsSection() {
  return (
    <section id="benefits" className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-100/50 dark:from-blue-950/50 dark:via-indigo-950/50 dark:to-purple-950/50 overflow-hidden">
      {/* Большой mesh градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-purple-500/[0.05] to-pink-500/[0.03] dark:from-blue-400/[0.08] dark:via-purple-400/[0.12] dark:to-pink-400/[0.08]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-transparent via-blue-100/20 to-transparent dark:via-blue-900/30" />
      
      {/* Декоративные floating элементы */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-cyan-400/25 to-blue-400/25 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-10 right-1/4 w-60 h-60 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}} />
      
      {/* Геометрические паттерны */}
      <div className="absolute top-32 left-1/3 w-24 h-24 border-2 border-blue-200/30 dark:border-blue-700/30 rounded-lg rotate-45 animate-pulse" style={{animationDelay: '1.5s'}} />
      <div className="absolute bottom-32 right-1/3 w-16 h-16 border border-purple-200/40 dark:border-purple-700/40 rounded-full animate-pulse" style={{animationDelay: '2.5s'}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Ключевые преимущества
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Посмотрите, как это работает
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Реальные скриншоты платформы и мощные функции, которые трансформируют ваш рабочий процесс
          </p>
        </div>

        <div className="space-y-24">
          {/* 1. Автоматическая сегментация */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                <Brain className="w-4 h-4" />
                AI-анализ
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Автоматическая сегментация
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                AI извлекает ключевые параметры из каждого питч-дека: сегмент, размер раунда, стадию, команду, выручку. 
                Автоматически категоризирует стартапы по отраслям и бизнес-моделям.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Извлечение данных за 2 секунды</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">15+ категорий автоматической сегментации</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Структурированное представление данных</span>
                </div>
              </div>
            </div>
            
            {/* Mockup Dashboard */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-500 ml-2">VentureAI Dashboard</span>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Сегментация по отраслям</h4>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">23</div>
                    <div className="text-xs text-green-700 dark:text-green-300">FinTech</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">18</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">HealthTech</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400">15</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300">EdTech</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">B2B SaaS</span>
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">34 стартапа</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Consumer Apps</span>
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">12 стартапов</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Marketplace</span>
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">8 стартапов</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Интеллектуальный скоринг */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Mockup Scoring */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-500 ml-2">Smart Scoring</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-gray-100">FinTech Startup A</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">Score: 92</span>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Series A • $2M раунд • B2B Payments</div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-gray-100">HealthTech Startup B</span>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-bold">Score: 87</span>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Seed • $800K раунд • Digital Health</div>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-gray-100">EdTech Startup C</span>
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm font-bold">Score: 74</span>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Pre-Seed • $300K раунд • Online Learning</div>
                </div>
              </div>
            </div>

            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
                <Target className="w-4 h-4" />
                Скоринг
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Интеллектуальный скоринг
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                AI анализирует каждый стартап на соответствие вашим инвестиционным критериям и присваивает скор релевантности. 
                Карточки ранжируются по приоритету – самые перспективные возможности показываются первыми.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Настройка индивидуальных критериев фонда</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Автоматическая приоритизация сделок</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Скоринг за секунды вместо часов</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Автоматический фактчекинг */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium mb-4">
                <Shield className="w-4 h-4" />
                Верификация
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Автоматический фактчекинг
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Одним кликом запускается верификация всех заявленных данных: размер рынка, 
                финансовые показатели, конкурентное окружение. Система выявляет несоответствия и потенциальные &quot;красные флаги&quot;.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Проверка размера рынка и роста</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Верификация финансовых метрик</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Выявление &quot;красных флагов&quot;</span>
                </div>
              </div>
            </div>
            
            {/* Mockup Fact-checking */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-500 ml-2">Fact Check Results</span>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Результаты проверки</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-red-900 dark:text-red-100">Размер рынка завышен в 10 раз</div>
                      <div className="text-xs text-red-700 dark:text-red-300">Заявлено $50B, реальный TAM $5B</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-green-900 dark:text-green-100">Финансовые показатели подтверждены</div>
                      <div className="text-xs text-green-700 dark:text-green-300">MRR $50K соответствует заявленному</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-yellow-900 dark:text-yellow-100">Проверка конкурентов в процессе</div>
                      <div className="text-xs text-yellow-700 dark:text-yellow-300">Анализ 15 основных игроков рынка</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Анализ рынков */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Mockup Market Analysis */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-500 ml-2">Market Analytics</span>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Анализ рынка FinTech</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">$127B</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">Total TAM</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                    <div className="text-xl font-bold text-green-600 dark:text-green-400">+23%</div>
                    <div className="text-xs text-green-700 dark:text-green-300">CAGR</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Основные игроки</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">Stripe</span>
                      <span className="text-gray-500">$95B оценка</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">Klarna</span>
                      <span className="text-gray-500">$46B оценка</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">Plaid</span>
                      <span className="text-gray-500">$13B оценка</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <div className="text-xs text-gray-500">Рост рынка: 75% за последние 3 года</div>
              </div>
            </div>

            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
                <BarChart3 className="w-4 h-4" />
                Аналитика
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Независимый анализ рынков
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Автоматическая генерация детальных отчетов по рынкам с диаграммами, численными данными и прогнозами роста. 
                Готовая аналитика для быстрого принятия инвестиционных решений.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Актуальные данные по размеру рынка</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Анализ конкурентного ландшафта</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground">Прогнозы и тренды развития</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="text-center mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10x", label: "Увеличение throughput" },
              { number: "85%", label: "Экономия времени" },
              { number: "250+", label: "Венчурных фондов" },
              { number: "98%", label: "Точность анализа" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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

// Company Logo Components
const TechVenturesLogo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="url(#tech-gradient)"/>
    <path d="M14 16H34V20H30V32H26V20H22V32H18V20H14V16Z" fill="white"/>
    <circle cx="36" cy="12" r="4" fill="#0EA5E9"/>
    <defs>
      <linearGradient id="tech-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1E40AF"/>
        <stop offset="1" stopColor="#0EA5E9"/>
      </linearGradient>
    </defs>
  </svg>
);

const GrowthPartnersLogo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="url(#growth-gradient)"/>
    <path d="M16 32L20 24L26 28L32 16L34 18L26 32L20 28L16 32Z" fill="white" strokeWidth="2"/>
    <circle cx="32" cy="16" r="2" fill="white"/>
    <defs>
      <linearGradient id="growth-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#059669"/>
        <stop offset="1" stopColor="#10B981"/>
      </linearGradient>
    </defs>
  </svg>
);

const InnovationFundLogo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="url(#innovation-gradient)"/>
    <path d="M24 12L30 22H18L24 12Z" fill="white"/>
    <circle cx="24" cy="28" r="4" fill="white"/>
    <path d="M20 34H28V36H20V34Z" fill="white"/>
    <defs>
      <linearGradient id="innovation-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7C3AED"/>
        <stop offset="1" stopColor="#A855F7"/>
      </linearGradient>
    </defs>
  </svg>
);

// Interactive Testimonials Section Component
function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Александр Петров",
      role: "Управляющий партнер", 
      company: "TechVentures Capital",
      content: "Платформа кардинально изменила наш подход к скринингу. Теперь мы обрабатываем в 15 раз больше питч-деков при том же качестве анализа. Экономия времени составляет 85%.",
      rating: 5,
      verified: true,
      companyLogo: <TechVenturesLogo />,
      companySize: "Mid-size fund",
      timeUsing: "12 месяцев",
      mainBenefit: "15x производительность",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      id: 2,
      name: "Мария Соколова",
      role: "Инвестиционный директор",
      company: "Growth Partners",
      content: "Автоматический фактчекинг и анализ рынка экономят нам минимум 20 часов в неделю на каждого аналитика. Качество insights значительно выше чем при ручном анализе.",
      rating: 5,
      verified: true,
      companyLogo: <GrowthPartnersLogo />,
      companySize: "Large fund",
      timeUsing: "8 месяцев",
      mainBenefit: "20 часов экономии",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      id: 3,
      name: "Дмитрий Волков",
      role: "Венчурный партнер",
      company: "Innovation Fund",
      content: "Благодаря платформе мы не пропустили ни одной перспективной сделки за последние 6 месяцев. Система точно определяет потенциал стартапов и приоритизирует заявки.",
      rating: 5,
      verified: true,
      companyLogo: <InnovationFundLogo />,
      companySize: "Boutique fund",
      timeUsing: "6 месяцев",
      mainBenefit: "0 пропущенных сделок",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-br from-purple-50/70 via-pink-50/40 to-blue-50/70 dark:from-purple-950/70 dark:via-pink-950/40 dark:to-blue-950/70 overflow-hidden">
      {/* Множественные декоративные слои */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.06] via-pink-500/[0.04] to-blue-500/[0.06] dark:from-purple-400/[0.15] dark:via-pink-400/[0.08] dark:to-blue-400/[0.15]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-purple-100/25 to-transparent dark:via-purple-900/35" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,purple-200/15,transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,purple-800/25,transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,pink-200/15,transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,pink-800/25,transparent_50%)]" />
      
      {/* Floating декорации */}
      <div className="absolute top-16 left-8 w-28 h-28 bg-gradient-to-br from-purple-300/25 to-pink-300/25 dark:from-purple-700/35 dark:to-pink-700/35 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-16 right-8 w-36 h-36 bg-gradient-to-br from-blue-300/25 to-purple-300/25 dark:from-blue-700/35 dark:to-purple-700/35 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/3 right-16 w-20 h-20 bg-gradient-to-br from-pink-300/30 to-rose-300/30 dark:from-pink-700/40 dark:to-rose-700/40 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4" />
            Отзывы клиентов
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Доверяют лидеры индустрии
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Присоединяйтесь к сотням венчурных фондов, которые уже трансформировали свои процессы
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Company logo and info */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden">
                      {testimonial.companyLogo}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.company}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.companySize}</div>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed font-medium">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                
                {/* Key metric highlight */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-3 mb-6 border border-blue-200/50 dark:border-blue-800/50">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {testimonial.mainBenefit}
                    </div>
                    <div className="text-xs text-muted-foreground">Ключевой результат</div>
                  </div>
                </div>
                
                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <Image 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Использует {testimonial.timeUsing}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-6 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <span className="font-medium text-foreground">250+ фондов</span>
            </div>
            <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <span className="font-medium text-foreground">4.9/5 рейтинг</span>
            </div>
            <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-500" />
              </div>
              <span className="font-medium text-foreground">Безопасность SOC2</span>
            </div>
          </div>
        </motion.div>
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
    },
    {
      id: "enterprise",
      name: "Enterprise",
      subtitle: "Корпоративное решение",
      description: "Индивидуальные возможности для крупных организаций",
      price: { monthly: "По запросу", yearly: "По запросу" },
      features: [
        "Неограниченные скриnings",
        "Неограниченное количество пользователей",
        "Полный маркет-ресерч и аналитика",
        "Персональный менеджер",
        "Кастомные интеграции и API",
        "Белая маркировка (White-label)",
        "SLA соглашение",
        "Обучение команды"
      ],
      icon: Building2,
      gradient: "from-gray-500/20 to-slate-500/20",
      borderGradient: "from-gray-400 to-slate-400",
      cta: "Обсудить решение",
      isEnterprise: true
    }
  ];

  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50/60 to-purple-50/60 dark:from-gray-900 dark:via-blue-950/60 dark:to-purple-950/60 overflow-hidden">
      {/* Яркий mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-purple-500/[0.08] to-pink-500/[0.05] dark:from-blue-400/[0.12] dark:via-purple-400/[0.18] dark:to-pink-400/[0.12]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-transparent via-purple-100/30 to-transparent dark:via-purple-900/40" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,blue-500/5_120deg,purple-500/8_240deg,transparent_360deg)] dark:bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,blue-400/10_120deg,purple-400/15_240deg,transparent_360deg)]" />
      
      {/* Декоративные geometric элементы */}
      <div className="absolute top-10 right-20 w-24 h-24 border-2 border-blue-300/40 dark:border-blue-600/40 rounded-xl rotate-12 animate-pulse" />
      <div className="absolute bottom-20 left-16 w-32 h-32 border-2 border-purple-300/40 dark:border-purple-600/40 rounded-2xl -rotate-12 animate-pulse" style={{animationDelay: '1.5s'}} />
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-800/40 dark:to-purple-800/40 rounded-lg rotate-45 animate-pulse" style={{animationDelay: '0.5s'}} />
      <div className="absolute top-20 left-1/4 w-48 h-48 bg-gradient-to-br from-indigo-200/20 to-cyan-200/20 dark:from-indigo-800/30 dark:to-cyan-800/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute bottom-10 right-1/4 w-36 h-36 bg-gradient-to-br from-rose-200/20 to-pink-200/20 dark:from-rose-800/30 dark:to-pink-800/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}} />
      
      <div className="container mx-auto px-4 relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${
                plan.isPopular ? 'ring-2 ring-primary/50 scale-105' : ''
              } ${plan.isHighlighted ? 'bg-foreground text-background' : ''} ${
                plan.isEnterprise ? 'border-gray-400 dark:border-gray-600' : ''
              }`}
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
                    {typeof plan.price.monthly === 'string' ? (
                      <span className="text-2xl font-bold text-muted-foreground">{plan.price.monthly}</span>
                    ) : (
                      <>
                        <span className="text-3xl font-bold">${plan.price.monthly}</span>
                        <span className="text-muted-foreground">/месяц</span>
                      </>
                    )}
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


      </div>
    </section>
  );
}

// Main Landing Page Component
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/60 via-purple-50/30 to-pink-50/40 dark:from-blue-950/60 dark:via-purple-950/30 dark:to-pink-950/40 relative overflow-hidden">
      {/* Глобальный декоративный слой */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/[0.02] via-purple-500/[0.03] to-pink-500/[0.02] dark:from-blue-400/[0.06] dark:via-purple-400/[0.08] dark:to-pink-400/[0.06] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-blue-100/10 to-transparent dark:via-blue-900/20 pointer-events-none" />
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      
      {/* Final CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-800 overflow-hidden">
        {/* Stylish background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-500/6 to-blue-500/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
        
        {/* Geometric patterns */}
        <div className="absolute top-16 right-1/4 w-20 h-20 border border-blue-400/20 rounded-xl rotate-12 animate-pulse" style={{animationDelay: '3s'}} />
        <div className="absolute bottom-24 left-1/4 w-16 h-16 border border-purple-400/15 rounded-lg -rotate-12 animate-pulse" style={{animationDelay: '1.5s'}} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left: Main Content - takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3 space-y-8"
            >
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                <Shield className="w-4 h-4" />
                Доверие 250+ венчурных фондов
              </div>
              
              {/* Main heading - no line breaks */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Время принять <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">решение</span>
              </h2>
              
              {/* Description */}
              <p className="text-xl text-gray-300 leading-relaxed">
                Трансформируйте свой фонд с помощью AI и увеличьте эффективность скрининга в 15 раз
              </p>

              {/* CTA Section */}
              <div className="flex flex-col items-center gap-6 pt-4">
                
                {/* Main CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50"
                >
                  <Rocket className="w-7 h-7" />
                  Проанализировать 5 питч-деков бесплатно
                </motion.button>

                {/* Trust indicators - теперь связаны с кнопкой */}
                <div className="flex items-center gap-8 text-sm text-gray-400 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Внедрение за 24 часа</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Персональная поддержка</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual Element - takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative">
                {/* Main visual card */}
                <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-slate-700/30 rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                          <Brain className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">VentureAI</div>
                          <div className="text-xs text-gray-400">AI-Powered</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-green-400 text-xs">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Live
                      </div>
                    </div>
                    
                    {/* Key metric */}
                    <div className="text-center py-4">
                      <div className="text-3xl font-bold text-white mb-2">15x</div>
                      <div className="text-sm text-gray-400">Faster Screening</div>
                      <div className="text-xs text-blue-400">vs Manual Process</div>
                    </div>

                    {/* Progress indicator */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Efficiency</span>
                        <span>98.7%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-1.5 rounded-full" style={{width: '98.7%'}} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating accent */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg rotate-12 animate-pulse" style={{animationDelay: '2s'}} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-gray-900" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  VentureAI
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Революционная AI-платформа для автоматизации скрининга питч-деков венчурных фондов.
              </p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Продукт</h4>
              <nav className="space-y-3">
                <a href="#features" className="block text-gray-400 hover:text-white transition-colors">
                  Возможности
                </a>
                <a href="#benefits" className="block text-gray-400 hover:text-white transition-colors">
                  Преимущества
                </a>
                <a href="#pricing" className="block text-gray-400 hover:text-white transition-colors">
                  Тарифы
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  API Документация
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Интеграции
                </a>
              </nav>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Компания</h4>
              <nav className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  О нас
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Команда
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Карьера
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Пресс-центр
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Блог
                </a>
              </nav>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Поддержка</h4>
              <nav className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Помощь
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Документация
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Статус системы
                </a>
              </nav>
              
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@venture-ai.ru</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Москва, Россия</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 VentureAI. Все права защищены.
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Условия использования
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
