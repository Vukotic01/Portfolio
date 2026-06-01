'use client';

import { motion } from 'framer-motion';
import { getSkillsByCategory } from '@/lib/data/skills';
import { Badge } from '@/components/ui/Badge';

const categoryIcons: Record<string, string> = {
  Frontend: '⚡',
  Backend: '⚙️',
  Databases: '🗄️',
  'DevOps/Tools': '🛠️',
};

export function SkillBadges() {
  const categories = getSkillsByCategory();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((group, gi) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: gi * 0.1 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">{categoryIcons[group.category]}</span>
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">
              {group.category}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill, si) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.04 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="outline">{skill.name}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
