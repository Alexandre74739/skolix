import { BookOpen, TrendingUp, User } from "@deemlol/next-icons";
import { BadgeCard } from "@/src/components/ui/BadgeCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background text-foreground pt-[calc(48px+5rem)] pb-20 overflow-hidden">
      <div className="w-full max-w-2xl pl-20 pr-8">
        <h1 className="bg-gradient-to-br from-purple to-pink bg-clip-text text-transparent text-6xl tracking-tight mb-4">
          Skolix
        </h1>
        <h2 className="text-2xl leading-tight mb-8">
          La révision qui ressemble à un{" "}
          <span className="text-purple italic">jeu</span>
        </h2>

        <ul className="space-y-6 mb-10">
          <BadgeCard
            icon={BookOpen}
            keyword="Affronte"
            text="tes amis en duel"
            description="Défie n'importe qui en temps réel"
          />
          <BadgeCard
            icon={TrendingUp}
            keyword="Grimpe"
            text="les niveaux"
            description="Débloque des succès exclusifs"
          />
          <BadgeCard
            icon={User}
            keyword="Progresse"
            text="pour de vrai"
            description="Apprentissage personnalisé par IA"
          />
        </ul>
      </div>
    </section>
  );
}
