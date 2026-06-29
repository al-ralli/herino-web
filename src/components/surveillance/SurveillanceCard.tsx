import { Link } from "react-router-dom";
import type { Surveillance } from "@/types/surveillance.types";

interface SurveillanceCardProps {
  surveillance: Surveillance;
}

const SLOT_LABELS: Record<string, string> = {
  MORNING: "Matin",
  AFTERNOON: "Après-midi",
  EVENING: "Soir",
  NIGHT: "Nuit",
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const isActive = (start: string, end: string) => {
  const now = new Date();
  return new Date(start) <= now && now <= new Date(end);
};

const SurveillanceCard = ({ surveillance }: SurveillanceCardProps) => {
  const active = isActive(surveillance.startDate, surveillance.endDate);

  return (
    <Link
      to={`/surveillances/${surveillance.id}`}
      className="bg-muted rounded-xl p-3 border hover:border-foreground/20 transition-colors"
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-sm font-medium">{surveillance.property.label}</p>
          <p className="text-xs text-muted-foreground">
            {formatDate(surveillance.startDate)} →{" "}
            {formatDate(surveillance.endDate)}
          </p>
        </div>
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${
            active
              ? "bg-green-100 text-green-700"
              : "bg-muted-foreground/10 text-muted-foreground"
          }`}
        >
          {active ? "Active" : "À venir"}
        </span>
      </div>
      <div className="flex gap-1 flex-wrap">
        {surveillance.slots.map((slot) => (
          <span
            key={slot}
            className="text-xs px-2 py-0.5 rounded-full border bg-background"
          >
            {SLOT_LABELS[slot]}
          </span>
        ))}
        {surveillance.cctOption && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
            Télésurveillance
          </span>
        )}
      </div>
    </Link>
  );
};

export { SurveillanceCard };
