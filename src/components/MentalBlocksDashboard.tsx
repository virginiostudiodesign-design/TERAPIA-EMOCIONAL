import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  MessageSquare, 
  Heart, 
  Activity, 
  Baby, 
  Target, 
  Scale, 
  Clipboard,
  BarChart3,
  Brain
} from 'lucide-react';

interface Emotion {
  nome: string;
  valor: number;
}

export default function MentalBlocksDashboard() {
  // --- State for emotions used in result section and sliders ---
  const [emocional, setEmocional] = useState<Emotion[]>([
    { nome: 'Medo', valor: 0 },
    { nome: 'Ansiedade', valor: 0 },
    { nome: 'Rejeição', valor: 0 },
    { nome: 'Baixa autoestima', valor: 0 },
    { nome: 'Tristeza', valor: 0 },
    { nome: 'Raiva', valor: 0 },
    { nome: 'Angústia', valor: 0 },
    { nome: 'Culpa', valor: 0 },
    { nome: 'Solidão', valor: 0 },
    { nome: 'Abandono', valor: 0 },
    { nome: 'Vergonha', valor: 0 },
    { nome: 'Insegurança', valor: 0 },
    { nome: 'Frustração', valor: 0 },
    { nome: 'Desvalorização', valor: 0 },
    { nome: 'Sensação de vazio', valor: 0 },
  ]);

  // --- State for Client Data ---
  const [paciente, setPaciente] = useState({
    nome: '',
    idade: '',
    dataNascimento: '',
    telefone: ''
  });

  // --- State for Anamnese Text Fields ---
  const [anamnese, setAnamnese] = useState({
    queixaPrincipal: '',
    vidaPessoal_familiar: '',
    vidaPessoal_frustracoes: '',
    vidaPessoal_felicidade: '',
    saudeEmocional_medos: '',
    saudeEmocional_sentimentos: '',
    saudeEmocional_sintomas: '',
    infancia_relacaoPais: '',
    infancia_traumas: '',
    infancia_magoas: '',
    infancia_adolescencia: '',
    infancia_fatoMarcante: '',
    crencas_autoimagem: '',
    crencas_negativos: '',
    crencas_fortes: '',
    observacoes: ''
  });

  const topEmocoes = useMemo(() => {
    return [...emocional]
      .sort((a, b) => b.valor - a.valor)
      .slice(0, 5);
  }, [emocional]);

  const updateAnamnese = (field: keyof typeof anamnese, value: string) => {
    setAnamnese(prev => ({ ...prev, [field]: value }));
  };

  const atualizarEmocao = (index: number, valor: string | number) => {
    const novas = [...emocional];
    novas[index].valor = Number(valor);
    setEmocional(novas);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-4 md:p-8 font-sans selection:bg-purple-100">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header content with Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] shadow-xl shadow-purple-200/50 p-8 md:p-10 flex flex-col items-center gap-6"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Logo placeholder - User should upload logo.png to the root of the project */}
            <div className="relative group cursor-pointer">
              <img 
                src="/logo.png" 
                alt="Miss. Daiane - Terapeuta Emocional" 
                className="h-80 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  // Fallback if logo is missing
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.fallback-logo')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-logo bg-purple-600 p-4 rounded-2xl text-white flex items-center justify-center';
                    fallback.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.12 3 3 0 1 0 5.168-3.015L12 11.5l2.835 4.498a3 3 0 1 0 5.168 3.015 4 4 0 0 0 .52-8.12 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5z"/><path d="M9 14.5a3 3 0 0 1-5.997.125"/><path d="M15 14.5a3 3 0 0 0 5.997.125"/><path d="M12 9v2.5"/></svg>';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
                Painel <span className="text-purple-600">Emocional</span>
              </h1>
              <p className="text-slate-500 text-lg font-medium max-w-md mx-auto">
                Anamnese emocional e diagnóstico terapêutico TRG
              </p>
            </div>
          </div>
          
          <div className="w-full h-px bg-slate-100 hidden md:block" />

          <div className="flex items-center gap-6 w-full justify-center md:justify-between px-4">
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 flex-1 justify-center md:justify-start">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Status da Sessão</p>
                <p className="text-sm font-bold text-green-600">Em Avaliação Individual</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 shrink-0">
                <Activity />
              </div>
            </div>
            
            <div className="hidden lg:flex flex-col text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Especialista</p>
              <p className="text-sm font-bold text-slate-700 italic">Miss. Daiane</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar / Top Section (Basic Data) */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Dados do Cliente */}
            <motion.div 
              id="cliente-dados"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[2rem] shadow-lg shadow-purple-100/50 p-8 border border-white/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <User className="text-purple-600" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Dados do Cliente</h2>
              </div>

              <div className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Nome Completo</label>
                  <input
                    type="text"
                    value={paciente.nome}
                    onChange={(e) => setPaciente({...paciente, nome: e.target.value})}
                    placeholder="Nome do cliente"
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-700 font-medium focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Idade</label>
                  <input
                    type="number"
                    value={paciente.idade}
                    onChange={(e) => setPaciente({...paciente, idade: e.target.value})}
                    placeholder="Ex: 34"
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-slate-700 font-medium focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content (Anamnese) */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] shadow-xl shadow-purple-100/30 p-8 md:p-12 border border-white/50"
            >
              <div className="flex items-center justify-between mb-10 border-b border-slate-50 pb-6">
                <h2 className="text-3xl font-black text-slate-800 tracking-tighter uppercase">Anamnese Terapêutica TRG</h2>
                <div className="hidden sm:block text-[10px] font-black text-purple-400 uppercase tracking-widest bg-purple-50 px-4 py-2 rounded-full">Protocolo 2026.04</div>
              </div>

              {/* Resultado Emocional / Gráfico */}
              <section id="resultado-emocional" className="mb-16 space-y-8">
                <div className="flex items-center gap-3">
                  <BarChart3 className="text-purple-600" size={32} />
                  <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Resultado Emocional</h2>
                </div>

                <div className="space-y-6 bg-slate-50/50 p-8 rounded-[2.5rem] border border-slate-100">
                  {topEmocoes.map((emocao, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-end px-1">
                        <span className="font-bold text-slate-700">{emocao.nome}</span>
                        <span className="text-purple-600 font-black">{emocao.valor}/10</span>
                      </div>
                      <div className="h-5 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${emocao.valor * 10}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 * index }}
                          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 text-center">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Gráfico de Intensidade Emocional</p>
                  </div>
                </div>
              </section>

              <div className="space-y-12">
                {/* Dados Pessoais Expandido */}
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    <h3 className="text-xl font-bold text-purple-700">Dados Pessoais</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Nome completo" 
                      value={paciente.nome}
                      onChange={(e) => setPaciente({...paciente, nome: e.target.value})}
                      className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-purple-200 outline-none transition-all" 
                    />
                    <input 
                      type="number" 
                      placeholder="Idade" 
                      value={paciente.idade}
                      onChange={(e) => setPaciente({...paciente, idade: e.target.value})}
                      className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-purple-200 outline-none transition-all" 
                    />
                    <input 
                      type="date" 
                      value={paciente.dataNascimento}
                      onChange={(e) => setPaciente({...paciente, dataNascimento: e.target.value})}
                      className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-purple-200 outline-none transition-all text-slate-500" 
                    />
                    <input 
                      type="text" 
                      placeholder="Telefone / WhatsApp" 
                      value={paciente.telefone}
                      onChange={(e) => setPaciente({...paciente, telefone: e.target.value})}
                      className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-purple-200 outline-none transition-all" 
                    />
                  </div>
                </section>

                {/* Queixa Principal */}
                <section id="queixa-principal" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    <h3 className="text-xl font-bold text-purple-700">Queixa Principal</h3>
                  </div>
                  <textarea
                    placeholder="O que trouxe você para terapia? Descreva os principais incômodos..."
                    value={anamnese.queixaPrincipal}
                    onChange={(e) => updateAnamnese('queixaPrincipal', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] p-6 min-h-[160px] text-slate-700 font-medium focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                  />
                </section>

                {/* Vida Pessoal */}
                <section id="vida-pessoal" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    <h3 className="text-xl font-bold text-purple-700">Vida Pessoal</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">Dinâmica Familiar</label>
                      <textarea 
                        placeholder="Como você se sente dentro da sua casa e no contexto familiar?" 
                        value={anamnese.vidaPessoal_familiar}
                        onChange={(e) => updateAnamnese('vidaPessoal_familiar', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 min-h-[100px] text-sm font-medium focus:ring-2 focus:ring-purple-200 outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">Frustrações e Padrões</label>
                      <textarea 
                        placeholder="Existe alguma frustração em relação aos pais, casamento, filhos ou profissão?" 
                        value={anamnese.vidaPessoal_frustracoes}
                        onChange={(e) => updateAnamnese('vidaPessoal_frustracoes', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 min-h-[100px] text-sm font-medium focus:ring-2 focus:ring-purple-200 outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">Felicidade e Identidade</label>
                      <textarea 
                        placeholder="Você se considera feliz? O que gostaria de mudar em você hoje?" 
                        value={anamnese.vidaPessoal_felicidade}
                        onChange={(e) => updateAnamnese('vidaPessoal_felicidade', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 min-h-[100px] text-sm font-medium focus:ring-2 focus:ring-purple-200 outline-none transition-all" 
                      />
                    </div>
                  </div>
                </section>

                {/* Saúde Emocional */}
                <section id="saude-emocional" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-pink-500 rounded-full" />
                    <h3 className="text-xl font-bold text-pink-600">Saúde Emocional</h3>
                  </div>
                  <div className="space-y-4">
                    <textarea 
                      placeholder="Quais são seus maiores medos hoje?" 
                      value={anamnese.saudeEmocional_medos}
                      onChange={(e) => updateAnamnese('saudeEmocional_medos', e.target.value)}
                      className="w-full bg-slate-50 border border-pink-50 rounded-2xl p-5 min-h-[100px] text-sm font-medium focus:ring-2 focus:ring-pink-100 outline-none transition-all" 
                    />
                    <textarea 
                      placeholder="Você sofre com ansiedade, tristeza, culpa, raiva ou angústia?" 
                      value={anamnese.saudeEmocional_sentimentos}
                      onChange={(e) => updateAnamnese('saudeEmocional_sentimentos', e.target.value)}
                      className="w-full bg-slate-50 border border-pink-50 rounded-2xl p-5 min-h-[100px] text-sm font-medium focus:ring-2 focus:ring-pink-100 outline-none transition-all" 
                    />
                    <textarea 
                      placeholder="Existe insônia, dores no corpo, tensão, compulsões ou crises emocionais?" 
                      value={anamnese.saudeEmocional_sintomas}
                      onChange={(e) => updateAnamnese('saudeEmocional_sintomas', e.target.value)}
                      className="w-full bg-slate-50 border border-pink-50 rounded-2xl p-5 min-h-[100px] text-sm font-medium focus:ring-2 focus:ring-pink-100 outline-none transition-all" 
                    />
                  </div>
                </section>

                {/* Infância e Adolescência */}
                <section id="infancia-adolescencia" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                    <h3 className="text-xl font-bold text-indigo-700">Infância e Adolescência</h3>
                  </div>
                  <div className="space-y-4">
                    <textarea 
                      placeholder="Como era sua relação com pai e mãe? (Diálogo, afeto, distância...)" 
                      value={anamnese.infancia_relacaoPais}
                      onChange={(e) => updateAnamnese('infancia_relacaoPais', e.target.value)}
                      className="w-full bg-slate-50 border border-indigo-50 rounded-2xl p-5 min-h-[120px] text-sm font-medium focus:ring-2 focus:ring-indigo-100 outline-none transition-all" 
                    />
                    <textarea 
                      placeholder="Existiu humilhação, abandono, agressão ou abuso na infância?" 
                      value={anamnese.infancia_traumas}
                      onChange={(e) => updateAnamnese('infancia_traumas', e.target.value)}
                      className="w-full bg-slate-50 border border-indigo-50 rounded-2xl p-5 min-h-[120px] text-sm font-medium focus:ring-2 focus:ring-indigo-100 outline-none transition-all" 
                    />
                    <textarea 
                      placeholder="O que mais te machucou emocionalmente na infância?" 
                      value={anamnese.infancia_magoas}
                      onChange={(e) => updateAnamnese('infancia_magoas', e.target.value)}
                      className="w-full bg-slate-50 border border-indigo-50 rounded-2xl p-5 min-h-[120px] text-sm font-medium focus:ring-2 focus:ring-indigo-100 outline-none transition-all" 
                    />
                    <textarea 
                      placeholder="Como foi sua adolescência? Existiu tristeza, isolamento ou baixa autoestima?" 
                      value={anamnese.infancia_adolescencia}
                      onChange={(e) => updateAnamnese('infancia_adolescencia', e.target.value)}
                      className="w-full bg-slate-50 border border-indigo-50 rounded-2xl p-5 min-h-[120px] text-sm font-medium focus:ring-2 focus:ring-indigo-100 outline-none transition-all" 
                    />
                    <textarea 
                      placeholder="Relate um fato marcante da infância." 
                      value={anamnese.infancia_fatoMarcante}
                      onChange={(e) => updateAnamnese('infancia_fatoMarcante', e.target.value)}
                      className="w-full bg-slate-50 border border-indigo-50 rounded-2xl p-5 min-h-[120px] text-sm font-medium focus:ring-2 focus:ring-indigo-100 outline-none transition-all" 
                    />
                  </div>
                </section>

                {/* Autoimagem e Crenças */}
                <section id="autoimagem-crencas" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    <h3 className="text-xl font-bold text-purple-700">Autoimagem e Crenças</h3>
                  </div>
                  <div className="space-y-4">
                    <textarea 
                      placeholder="O que você pensa sobre você mesma? (Valor pessoal)" 
                      value={anamnese.crencas_autoimagem}
                      onChange={(e) => updateAnamnese('crencas_autoimagem', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 min-h-[100px] text-sm font-medium focus:ring-2 focus:ring-purple-100 outline-none transition-all" 
                    />
                    <textarea 
                      placeholder="Quais pensamentos negativos mais se repetem?" 
                      value={anamnese.crencas_negativos}
                      onChange={(e) => updateAnamnese('crencas_negativos', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 min-h-[100px] text-sm font-medium focus:ring-2 focus:ring-purple-100 outline-none transition-all" 
                    />
                    <textarea 
                      placeholder="Qual a crença mais forte que você carrega sobre amor, dinheiro e relacionamentos?" 
                      value={anamnese.crencas_fortes}
                      onChange={(e) => updateAnamnese('crencas_fortes', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 min-h-[100px] text-sm font-medium focus:ring-2 focus:ring-purple-100 outline-none transition-all" 
                    />
                  </div>
                </section>

                {/* Escala Emocional (Interactive Sliders) */}
                <section id="escala-emocional" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-purple-600 rounded-full" />
                    <h3 className="text-xl font-bold text-purple-700">Escala Emocional</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    {emocional.map((emocao, index) => (
                      <div key={index} className="bg-slate-50 rounded-2xl p-5 flex flex-col gap-3 group transition-all hover:bg-white hover:shadow-md border border-transparent hover:border-purple-100">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-700">{emocao.nome}</span>
                          <span className="text-purple-600 font-black text-lg">{emocao.valor}/10</span>
                        </div>
                        <input 
                          type="range" 
                          min="0" 
                          max="10" 
                          step="1"
                          value={emocao.valor}
                          onChange={(e) => atualizarEmocao(index, e.target.value)}
                          className="w-full accent-purple-600 cursor-pointer" 
                        />
                        <div className="flex justify-between text-[8px] font-black uppercase text-slate-400 tracking-widest px-1">
                          <span>Neutro</span>
                          <span>Intenso</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Observações Terapêuticas */}
                <section className="space-y-4 pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <Clipboard className="text-purple-600" size={24} />
                    <h3 className="text-2xl font-black text-slate-800 tracking-tighter uppercase">Observações Terapêuticas</h3>
                  </div>
                  <textarea
                    placeholder="Percepções clínicas, padrões emocionais, comportamentos repetitivos e observações da sessão..."
                    value={anamnese.observacoes}
                    onChange={(e) => updateAnamnese('observacoes', e.target.value)}
                    className="w-full bg-slate-900 border-none rounded-[2rem] p-8 min-h-[250px] text-purple-100 font-medium focus:ring-4 focus:ring-purple-900/10 outline-none transition-all resize-none shadow-2xl placeholder:text-slate-600"
                  />
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="max-w-6xl mx-auto mt-12 pb-12 text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
        NeuroInsight Diagnostics • Protocolo de Anamnese TRG • v4.2
      </footer>

      <style>{`
        input[type='range'] {
          -webkit-appearance: none;
          background: transparent;
        }
        input[type='range']::-webkit-slider-runnable-track {
          width: 100%;
          height: 6px;
          cursor: pointer;
          background: #f1f5f9;
          border-radius: 10px;
        }
        input[type='range']:focus::-webkit-slider-runnable-track {
          background: #e2e8f0;
        }
        input[type='range']::-webkit-slider-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #9333ea;
          cursor: pointer;
          -webkit-appearance: none;
          margin-top: -7px;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
      `}</style>
    </div>
  );
}
