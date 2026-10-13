import React from 'react';
import { TEAM_MEMBERS, TESTIMONIALS, STUDIO_INFO } from '../data/studioData';
import { Mail, Phone, CheckCircle2, MessageSquare, Quote } from 'lucide-react';

interface LeadershipSectionProps {
  onContactLeader: (leaderName: string) => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onContactLeader }) => {
  return (
    <section id="leadership" className="py-20 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-2">
            <span>Studio Leadership</span>
            <span aria-hidden="true">·</span>
            <span>Direction & Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Steered by craft, managed with precision.
          </h2>
          <p className="text-neutral-400 mt-2 max-w-2xl text-sm sm:text-base">
            Vinci Studios is privately owned and directed by Mr. Muyanja Geofry, with day-to-day production, client management, and quality control led by Nanyonjo Fridaus.
          </p>
        </div>

        {/* 2-Column Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-semibold block uppercase tracking-wider">
                      {member.role}
                    </span>
                    <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                      {member.name}
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-400 font-medium px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700/60">
                    {idx === 0 ? 'Founder' : 'Operations Head'}
                  </span>
                </div>

                <div className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">
                  {member.title}
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Core Responsibilities */}
                <div className="space-y-2 mb-8 bg-neutral-950/50 p-4 rounded-xl border border-neutral-850">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Key Areas of Oversight
                  </div>
                  {member.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Lines */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs text-neutral-400">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-mono"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>{member.phone}</span>
                  </a>
                </div>

                <button
                  onClick={() => onContactLeader(member.name)}
                  className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct Inquiry</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Claim-to-Proof Adjacency: Client Testimonials */}
        <div className="pt-10 border-t border-neutral-900">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-6">
            <span>Verified Client Endorsements</span>
            <span aria-hidden="true">·</span>
            <span>Corporate Feedback</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-850 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-5 h-5 text-amber-400/60 mb-3" />
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-4">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-850 text-xs">
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-neutral-400">{t.role}, {t.company}</div>
                  <div className="text-[11px] text-amber-400/90 mt-1 font-mono">
                    Outcome: {t.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
