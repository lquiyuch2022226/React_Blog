import { useEffect } from "react";
import { PublicationsCard } from "../../components/publications/PublicationsCard";
import { usePublications } from "../../shared/hooks";

import "./dashboardPage.css";

export const DashboardPage = () => {
  const { getPublications, allPublications } = usePublications();

  useEffect(() => {
    getPublications();
  }, []);

  return (
    <div className="auth-container">
      <PublicationsCard publicaciones={allPublications}/>
    </div>
  );
};