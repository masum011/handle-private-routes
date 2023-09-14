import React from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import CardDataPhotos from "../../components/CardDataPhotos";
import './dashboard.css';
export default function DashboardView() {
  return (
    
      <DashboardLayout>
          <section className="card--section">
              <CardDataPhotos/>
              <CardDataPhotos/>
              <CardDataPhotos/>
              <CardDataPhotos/>
              <CardDataPhotos/>
              <CardDataPhotos/>
              <CardDataPhotos/>
              <CardDataPhotos/>
              <CardDataPhotos/>
              <CardDataPhotos/>
          </section>
      </DashboardLayout>
   
  );
}
