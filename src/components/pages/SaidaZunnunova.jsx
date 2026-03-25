import PageHeader from "../layout/PageHeader";
import BiographySection from "../shared/BiographySection";
import WorksSection from "../shared/WorksSection";
import InfoStats from "../shared/InfoStats";
import saidaImg from "../../assets/images/writers/saida-zunnunova.jpg";
import saidaHeader from "../../assets/images/hero/museum-hero.jpg";

function SaidaZunnunova() {
  const works = [
    {
      name: "She’riy to‘plamlar",
      description: "Shoiraning samimiy va nafis ruhdagi she’rlari o‘quvchi qalbiga yaqinligi bilan ajralib turadi.",
      type: "She’riyat",
    },
    {
      name: "Lirik asarlar",
      description: "Insoniy tuyg‘ular, mehr, sog‘inch va hayotiy nozik kechinmalar badiiy ifoda topgan.",
      type: "Lirik ijod",
    },
    {
      name: "Adabiy meros",
      description: "Saida Zunnunova nomi o‘zbek she’riyatida o‘zining samimiy va ta’sirchan ovozi bilan qadrlanadi.",
      type: "Meros",
    },
  ];

  const stats = [
    { value: "Nafis", label: "She’riy uslub" },
    { value: "Samimiy", label: "Tuyg‘ular ifodasi" },
    { value: "Yorqin", label: "Adabiy iz qoldirgan" },
  ];

  return (
    <>
      <PageHeader
        title="Saida Zunnunova"
        subtitle="O‘zbek she’riyatida o‘ziga xos ovoz va nozik badiiy ruhga ega bo‘lgan shoira hayoti va ijodi."
        bgImage={saidaHeader}
      />

      <BiographySection
        title="Hayoti va adabiy merosi"
        image={saidaImg}
        reverse
        text="Saida Zunnunova o‘zbek she’riyatida samimiy, nafis va ruhiy kechinmalarga boy ijodi bilan tanilgan shoira hisoblanadi. Uning she’rlarida inson qalbi, mehr, sog‘inch, orzu va hayotning nozik jihatlari badiiy ifodasini topadi. Shoiraning adabiy merosi bugungi kunda ham o‘z qadrini saqlab kelmoqda. Uning ijodi yoshlar, tadqiqotchilar va adabiyot ixlosmandlari uchun qimmatli manba bo‘lib xizmat qiladi."
      />

      <WorksSection title="Ijodiy merosi" works={works} />

      <InfoStats items={stats} />
    </>
  );
}

export default SaidaZunnunova;