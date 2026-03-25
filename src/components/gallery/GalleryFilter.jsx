function GalleryFilter({ activeCategory, setActiveCategory }) {
  const filters = [
    { label: "Barchasi", value: "all" },
    { label: "Muzey", value: "museum" },
    { label: "Said Ahmad", value: "said-ahmad" },
    { label: "Saida Zunnunova", value: "saida-zunnunova" },
    { label: "Hujjatlar", value: "documents" },
    { label: "Suratlar", value: "photos" },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        marginBottom: "30px",
      }}
    >
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => setActiveCategory(filter.value)}
          style={{
            padding: "12px 18px",
            borderRadius: "999px",
            background: activeCategory === filter.value ? "#890726" : "#fff",
            color: activeCategory === filter.value ? "#fff" : "#4A3036",
            border: "1px solid #d8d8d8",
            fontWeight: "600",
            transition: "0.3s ease",
          }}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default GalleryFilter;