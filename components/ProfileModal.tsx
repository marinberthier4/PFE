
import React from 'react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  persona: string;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, userName, persona }) => {
  if (!isOpen) return null;

  const badges = [
    { icon: 'fa-seedling', label: 'Eco-Pionnier', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
    { icon: 'fa-user-shield', label: 'Privacy First', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
    { icon: 'fa-bolt', label: 'Apprenant Rapide', color: 'bg-amber-50 text-amber-600 border-amber-100' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 animate-in fade-in duration-500">
      <div className="bg-[#F8FAFC] w-full max-w-2xl rounded-[3rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] overflow-hidden animate-in zoom-in-95 duration-400 border-slate-100">
        
        {/* Upper Profile Section with Mesh Gradient */}
        <div className="relative bg-slate-900 p-10 overflow-hidden">
          {/* Decorative Mesh Gradient Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[120%] bg-indigo-600 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] bg-emerald-500 rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-emerald-400 rounded-[2.5rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`} 
                className="relative w-32 h-32 rounded-[2.2rem] bg-white p-1 shadow-2xl" 
              />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center border-4 border-slate-900 text-white shadow-lg">
                <i className="fa-solid fa-crown text-[10px]"></i>
              </div>
            </div>

            <div className="text-center md:text-left space-y-3">
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <h2 className="text-4xl font-black text-white tracking-tight leading-none">{userName}</h2>
                <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full border border-slate-100 text-[9px] font-black text-indigo-300 uppercase tracking-widest">
                  Membre Pro
                </span>
              </div>
              <p className="text-slate-400 text-lg font-medium italic">
                {persona}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                {badges.map((badge, idx) => (
                  <span key={idx} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[9px] font-black uppercase tracking-tighter ${badge.color}`}>
                    <i className={`fa-solid ${badge.icon}`}></i> {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <button onClick={onClose} className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-white border-slate-100 group active:scale-90">
            <i className="fa-solid fa-xmark group-hover:rotate-90 transition-transform"></i>
          </button>
        </div>

        {/* Content Section - Bento Grid */}
        <div className="p-8 md:p-10 space-y-8">
          
          {/* Main Stats Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Grade Impact</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-emerald-600">A+</span>
                <span className="text-[10px] font-bold text-slate-400">Excellent</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Souveraineté</p>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-indigo-600">94%</span>
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between group">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Maturité Numérique</p>
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-black text-slate-900 leading-none">Nv. 12</span>
                  <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest">740/1000 xp</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-900 group-hover:bg-indigo-500 transition-all duration-1000" style={{ width: '74%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Skills Section */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center text-[10px]">
                <i className="fa-solid fa-microchip"></i>
              </span>
              Savoir-faire Stratégiques
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Green Coding', 'Cloud Ethique', 'Audit RGPD', 'IA Souveraine'].map((skill, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
                  <p className="text-[10px] font-black text-slate-900 mb-1 group-hover:text-indigo-600">{skill}</p>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(star => (
                      <div key={star} className={`w-1 h-1 rounded-full ${star <= 4 ? 'bg-indigo-400' : 'bg-slate-200'}`}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-5 bg-slate-900 hover:bg-indigo-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3 active:scale-95">
              <i className="fa-solid fa-sliders"></i> Configurer le profil
            </button>
            <button className="px-8 py-5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
              Exporter CV Responsable <i className="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
