import { Link } from "react-router-dom";
import type { Property } from "@/types/property.types";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link
      to={`/properties/${property.id}`}
      className="bg-muted rounded-xl p-3 border flex flex-col gap-1 hover:border-foreground/20 transition-colors"
    >
      <span className="text-lg">🏠</span>
      <p className="text-xs font-medium">{property.label}</p>
      <p className="text-xs text-muted-foreground">{property.city}</p>
    </Link>
  );
};

export { PropertyCard };
