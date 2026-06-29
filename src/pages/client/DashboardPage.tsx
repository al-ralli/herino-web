import { Link } from "react-router-dom";
import { useMe } from "@/hooks/queries/useMe";
import { useSurveillancesQuery } from "@/hooks/queries/useSurveillancesQuery";
import { usePropertiesQuery } from "@/hooks/queries/usePropertiesQuery";
import { SurveillanceCard } from "@/components/surveillance/SurveillanceCard";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  const { data: user } = useMe();
  const { data: surveillances, isLoading: loadingSurveillances } =
    useSurveillancesQuery();
  const { data: properties, isLoading: loadingProperties } =
    usePropertiesQuery();

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <span className="font-semibold">HERINO</span>
      </div>

      <div className="p-4 flex flex-col gap-6">
        {/* Bonjour */}
        <div>
          <p className="text-sm text-muted-foreground">Bonjour,</p>
          <h1 className="text-xl font-semibold">{user?.firstName}</h1>
        </div>

        {/* Bouton urgence */}
        <div className="border-2 border-destructive rounded-xl p-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
            <span className="text-destructive text-lg">🚨</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Passage d'urgence</p>
            <p className="text-xs text-muted-foreground">
              Un agent se déplace immédiatement
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-destructive border-destructive shrink-0"
          >
            SOS →
          </Button>
        </div>

        {/* Surveillances */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm font-semibold">Surveillances à venir</h2>
            <Button variant="outline" size="sm" asChild>
              <Link to="/surveillances/new">+ Nouvelle</Link>
            </Button>
          </div>

          {loadingSurveillances ? (
            <p className="text-sm text-muted-foreground">Chargement...</p>
          ) : surveillances?.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Aucune surveillance à venir.
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              {surveillances?.map((s) => (
                <SurveillanceCard key={s.id} surveillance={s} />
              ))}
            </div>
          )}
        </div>

        {/* Logements */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm font-semibold">Mes logements</h2>
            <Button variant="outline" size="sm" asChild>
              <Link to="/properties/new">+ Ajouter</Link>
            </Button>
          </div>

          {loadingProperties ? (
            <p className="text-sm text-muted-foreground">Chargement...</p>
          ) : properties?.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Aucun logement ajouté.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {properties?.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-background flex justify-around p-2">
        <Link
          to="/dashboard"
          className="flex flex-col items-center gap-1 text-primary"
        >
          <span className="text-lg">🏠</span>
          <span className="text-xs">Accueil</span>
        </Link>
        <Link
          to="/properties"
          className="flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className="text-lg">🏢</span>
          <span className="text-xs">Logements</span>
        </Link>
        <Link
          to="/surveillances"
          className="flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className="text-lg">🛡️</span>
          <span className="text-xs">Surveillances</span>
        </Link>
        <Link
          to="/profile"
          className="flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className="text-lg">👤</span>
          <span className="text-xs">Profil</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
