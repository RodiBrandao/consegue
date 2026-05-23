"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Shield,
  TrendingUp,
  Users,
  Brain,
  FileText,
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Menu,
  X,
  ChevronDown,
  Briefcase,
  Clock,
  Award,
  Heart,
  BarChart,
  MessageCircle,
  Mail,
  MapPin,

} from "lucide-react";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </motion.a>

      {/* Navbar */}
      <motion.nav
        style={{ opacity }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              <span className="text-[#1D5C3A]">COSE</span>
              <span className="text-[#123524]">G</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["Início", "Serviços", "Diferenciais", "Depoimentos", "FAQ"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-[#1D5C3A] transition-colors duration-300"
                  >
                    {item}
                  </a>
                )
              )}
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.05 }}
                className="bg-[#1D5C3A] text-white px-6 py-2 rounded-full hover:bg-[#123524] transition-all duration-300"
              >
                Fale Conosco
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                {["Início", "Serviços", "Diferenciais", "Depoimentos", "FAQ"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-700 hover:text-[#1D5C3A] transition-colors py-2"
                    >
                      {item}
                    </a>
                  )
                )}
                <a
                  href="#contato"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-[#1D5C3A] text-white px-6 py-2 rounded-full text-center hover:bg-[#123524] transition-all"
                >
                  Fale Conosco
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="início"
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F4F4F4] to-white"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1D5C3A]/5 to-transparent transform -skew-x-12" />
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-[#7FAE42]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#1D5C3A]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#1D5C3A]/10 px-4 py-2 rounded-full mb-6"
              >
                <Shield className="w-4 h-4 text-[#1D5C3A]" />
                <span className="text-sm font-semibold text-[#1D5C3A]">
                  Especialistas em Segurança do Trabalho
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-[#123524] leading-tight mb-6"
              >
                Sua empresa preparada para as{" "}
                <span className="text-[#1D5C3A]">exigências da NR-01</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-8"
              >
                Gestão inteligente em Saúde e Segurança do Trabalho com
                tecnologia de ponta e equipe especializada.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="https://wa.me/5511999999999"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1D5C3A] text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-[#123524] transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                >
                  Fale com Especialista
                  <MessageCircle className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#serviços"
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-[#1D5C3A] text-[#1D5C3A] px-8 py-4 rounded-full font-semibold text-center hover:bg-[#1D5C3A]/5 transition-all inline-flex items-center justify-center gap-2"
                >
                  Conheça nossos serviços
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=800&fit=crop"
                  alt="Engenheiro de segurança"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123524]/30 to-transparent" />
              </div>
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-[#1D5C3A]" />
                  <div>
                    <p className="font-bold text-[#123524]">+500 empresas</p>
                    <p className="text-sm text-gray-600">clientes satisfeitos</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#123524] mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas em segurança do trabalho para sua empresa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Gerenciamento de Riscos Psicossociais",
                description:
                  "Identificação e gestão de fatores psicossociais no ambiente de trabalho.",
              },
              {
                icon: FileText,
                title: "GRO / PGR",
                description:
                  "Gerenciamento de Riscos Ocupacionais e Programa de Gerenciamento de Riscos completo.",
              },
              {
                icon: Heart,
                title: "Canal de Apoio Psicológico",
                description:
                  "Suporte emocional e psicológico para seus colaboradores.",
              },
              {
                icon: Briefcase,
                title: "Consultoria SST",
                description:
                  "Consultoria especializada em Saúde e Segurança do Trabalho.",
              },
              {
                icon: Shield,
                title: "Adequação NR-01",
                description:
                  "Adequação completa às exigências da Norma Regulamentadora NR-01.",
              },
              {
                icon: BarChart,
                title: "Gestão de Indicadores",
                description:
                  "Monitoramento e análise de indicadores de segurança do trabalho.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-[#1D5C3A]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1D5C3A] transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-[#1D5C3A] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#123524] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-[#1D5C3A] to-[#123524] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Benefícios para sua empresa
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Segurança e conformidade que geram resultados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Conformidade Legal",
                description:
                  "Sua empresa totalmente adequada às normas regulamentadoras",
              },
              {
                icon: Users,
                title: "Proteção dos Colaboradores",
                description: "Ambiente seguro e saudável para sua equipe",
              },
              {
                icon: TrendingUp,
                title: "Redução de Riscos",
                description: "Minimização de acidentes e doenças ocupacionais",
              },
              {
                icon: Brain,
                title: "Saúde Mental Ocupacional",
                description: "Programas focados no bem-estar psicológico",
              },
              {
                icon: Award,
                title: "Segurança Empresarial",
                description: "Proteção patrimonial e jurídica completa",
              },
              {
                icon: Clock,
                title: "Eficiência Operacional",
                description: "Processos otimizados com foco em resultados",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <benefit.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/80">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-24 bg-[#F4F4F4]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#123524] mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Por que escolher a COSEG para sua empresa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Atendimento Especializado",
                description:
                  "Equipe dedicada exclusivamente para sua empresa com suporte personalizado",
              },
              {
                icon: Award,
                title: "Equipe Qualificada",
                description:
                  "Profissionais altamente capacitados e certificados em segurança do trabalho",
              },
              {
                icon: Clock,
                title: "Implementação Rápida",
                description:
                  "Metodologia ágil que garante resultados em até 30 dias",
              },
              {
                icon: TrendingUp,
                title: "Suporte Contínuo",
                description:
                  "Acompanhamento 24/7 e atualizações constantes das normas",
              },
              {
                icon: Shield,
                title: "Conformidade Garantida",
                description:
                  "Garantia de adequação total às normas regulamentadoras",
              },
              {
                icon: Brain,
                title: "Tecnologia Avançada",
                description:
                  "Plataforma digital para gestão completa de SST",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D5C3A] to-[#7FAE42] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#123524] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#123524] mb-4">
              Nosso Processo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Metodologia comprovada para resultados excepcionais
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Análise completa da situação atual" },
              { step: "02", title: "Planejamento", desc: "Estratégia personalizada" },
              { step: "03", title: "Implementação", desc: "Execução com excelência" },
              { step: "04", title: "Acompanhamento", desc: "Monitoramento contínuo" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/3 left-full w-full h-0.5 bg-gradient-to-r from-[#1D5C3A] to-[#7FAE42] transform -translate-y-1/2" />
                )}
                <div className="w-24 h-24 bg-gradient-to-br from-[#1D5C3A] to-[#7FAE42] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#123524] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Intermediário */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1D5C3A] to-[#123524]" />
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#7FAE42]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pronto para transformar a segurança da sua empresa?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Fale com um especialista agora mesmo e descubra como podemos ajudar
            </p>
            <motion.a
              href="https://wa.me/5511999999999"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-[#1D5C3A] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              Quero falar com um especialista
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 bg-[#F4F4F4]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#123524] mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Depoimentos de empresas que transformaram sua gestão de SST
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "A COSEG revolucionou nossa gestão de segurança. Em 6 meses, reduzimos em 40% os acidentes de trabalho.",
                author: "Carlos Silva",
                role: "Diretor de Operações",
                company: "Indústria ABC",
                rating: 5,
              },
              {
                text: "Adequação completa às NRs com profissionalismo e excelência. Recomendo fortemente.",
                author: "Marina Santos",
                role: "Gerente de RH",
                company: "Grupo XYZ",
                rating: 5,
              },
              {
                text: "Suporte excepcional e equipe muito qualificada. Nosso ambiente de trabalho nunca foi tão seguro.",
                author: "Roberto Almeida",
                role: "CEO",
                company: "Tech Solutions",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#7FAE42] text-[#7FAE42]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-[#123524]">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#123524] mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Qual o prazo para implementação do PGR?",
                a: "O prazo médio de implementação é de 30 a 60 dias, dependendo do porte e complexidade da empresa.",
              },
              {
                q: "A COSEG atende empresas de todos os portes?",
                a: "Sim, atendemos desde pequenas empresas até grandes corporações, com soluções personalizadas para cada realidade.",
              },
              {
                q: "Como é feito o acompanhamento após a implementação?",
                a: "Oferecemos suporte contínuo com relatórios mensais, auditorias periódicas e atendimento dedicado.",
              },
              {
                q: "A COSEG está preparada para a nova NR-01?",
                a: "Sim, somos especialistas na nova redação da NR-01 e garantimos a adequação completa da sua empresa.",
              },
            ].map((faq, index) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#123524]">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#1D5C3A] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-4 text-gray-600"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contato" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#123524] to-[#1D5C3A]" />
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-black/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Proteja sua empresa e seus colaboradores com a COSEG
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como podemos transformar a segurança da sua empresa
            </p>
            <motion.a
              href="https://wa.me/5511999999999"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-[#1D5C3A] px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all"
            >
              <MessageCircle className="w-7 h-7" />
              Fale com um especialista agora
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#123524] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                COSE<span className="text-[#7FAE42]">G</span>
              </h3>
              <p className="text-white/70">
                Especialistas em segurança do trabalho e consultoria em SST.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-white/70">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> contato@coseg.com.br
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> (11) 99999-9999
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> São Paulo, SP
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                {["Início", "Serviços", "Diferenciais", "Depoimentos"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#7FAE42] transition-colors"
                >
                 
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#7FAE42] transition-colors"
                >
            
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#7FAE42] transition-colors"
                >
                 
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>&copy; 2024 COSEG. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}