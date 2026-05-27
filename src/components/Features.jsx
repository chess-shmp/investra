import React from 'react';
import { Zap, Shield, Users, TrendingUp } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Flash Staking', desc: 'Stake and unstake in a single transaction with zero friction.' },
  { icon: Shield, title: 'Audit Security', desc: 'Fully audited by top blockchain security firms worldwide.' },
  { icon: Users, title: 'Community Governance', desc: 'Token holders decide the future of the protocol.' },
  { icon: TrendingUp, title: 'High APY', desc: 'Earn up to 150% APY with our optimized farming strategies.' },
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose <span className="gradient-text">Xoravest</span></h2>
          <p className="text-gray-400">Experience the next generation of DeFi</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-colors">
              <f.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
