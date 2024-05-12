import { useEffect } from "react";
import { Content } from "../../components/dashboard/Content";
import { usePublications } from "../../shared/hooks";

import "./dashboardPage.css";

export const DashboardPage = () => {
  const { getPublications, allPublications } = usePublications();

  useEffect(() => {
    getPublications();
  }, []);

  console.log(allPublications)
  return (
    <div className="dashboard-container">
      <Content publications={allPublications || []} getPublications={getPublications} />
      <h1>hola</h1>
    </div>
  );
};