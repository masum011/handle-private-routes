import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function DashboardLayout(props) {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
