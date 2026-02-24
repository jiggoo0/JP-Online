import { useState, useMemo } from "react";
import { ServiceCategory } from "@/config/services";
import { SERVICES } from "@/config/services";

export function useServiceFilter() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "All">("All");

  const filteredServices = useMemo(() => {
    if (selectedCategory === "All") return SERVICES;
    return SERVICES.filter((service) => service.category === selectedCategory);
  }, [selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredServices,
  };
}
