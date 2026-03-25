import { useMemo, useState } from "react";
import PageHeader from "../layout/PageHeader";
import SectionTitle from "../shared/SectionTitle";
import GalleryFilter from "../gallery/GalleryFilter";
import GalleryGrid from "../gallery/GalleryGrid";
import galleryData from "../data/galleryData";
import galleryHeader from "../../assets/images/hero/museum-hero.jpg";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return galleryData;
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageHeader
        title="Galereya"
        subtitle="Muzeyga oid suratlar, hujjatlar, eksponatlar va adabiy meros namunalarini bir joyda ko‘ring."
        bgImage={galleryHeader}
      />

      <section className="section" style={{ background: "#EFEFEF" }}>
        <div className="container">
          <SectionTitle
            title="Raqamli galereya"
            subtitle="Foydalanuvchilar materiallarni toifalar bo‘yicha ko‘rib chiqishlari mumkin."
          />

          <GalleryFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <GalleryGrid items={filteredItems} />
        </div>
      </section>
    </>
  );
}

export default Gallery;