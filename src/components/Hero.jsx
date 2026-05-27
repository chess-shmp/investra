import React from 'react';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-glass rounded-full px-4 py-2 border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Live on Mainnet</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              The Future of<br />
              <span className="gradient-text">Decentralized Finance</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl">Xoravest brings revolutionary yield farming and staking mechanisms to maximize your crypto returns.</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-white flex items-center space-x-2 glow-btn">
                <span>Launch App</span><ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 glass-card rounded-full font-semibold text-white">Read Docs</button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div><div className="text-3xl font-bold gradient-text">$500M+</div><div className="text-gray-400 text-sm">TVL</div></div>
              <div><div className="text-3xl font-bold gradient-text">50K+</div><div className="text-gray-400 text-sm">Holders</div></div>
              <div><div className="text-3xl font-bold gradient-text">150%</div><div className="text-gray-400 text-sm">APY</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 animate-float">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                    <div><div className="font-semibold">XOR Token</div><div className="text-gray-400 text-sm">Staking</div></div>
                  </div>
                  <div className="text-right"><div className="font-semibold">$2.45</div><div className="text-green-400 text-sm flex items-center"><TrendingUp className="w-4 h-4 mr-1" />+12.5%</div></div>
                </div>
                <div className="h-32 bg-gradient-to-t from-primary/20 to-transparent rounded-xl flex items-end justify-around pb-4">
                  {[40, 65, 45, 80, 55, 70, 90, 75, 60, 85, 95, 78].map((height, i) => (
                    <div key={i} className="w-4 bg-gradient-to-t from-primary to-secondary rounded-t" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm"><span className="text-gray-400">Staked XOR</span><span>125,000</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-400">Rewards</span><span className="text-green-400">+2,450 XOR</span></div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold">Claim Rewards</button>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass-card rounded-xl p-3"><Shield className="w-6 h-6 text-green-400" /></div>
            <div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-3"><Zap className="w-6 h-6 text-yellow-400" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
