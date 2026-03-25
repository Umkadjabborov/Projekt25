import PageHeader from "../layout/PageHeader";
import BiographySection from "../shared/BiographySection";
import WorksSection from "../shared/WorksSection";
import InfoStats from "../shared/InfoStats";
import saidAhmadImg from "../../assets/images/writers/said-ahmad.jpg";
import saidAhmadHeader from "../../assets/images/hero/museum-hero.jpg";

function SaidAhmad() {
  const works = [
    {
      name: "Ufq",
      description: "Adibning mashhur asarlaridan biri bo‘lib, insoniy kechinmalar va hayotiy qarashlarni ifodalaydi.",
      type: "Roman",
    },
    {
      name: "Jimjitlik",
      description: "Badiiy tasvir va ruhiy holatlarni chuqur ochib berishga xizmat qiluvchi asarlardan biri.",
      type: "Qissa / Badiiy asar",
    },
    {
      name: "Kelinlar qo‘zg‘oloni",
      description: "Sahnada ham mashhurlikka erishgan, xalqona ruh va ijtimoiy mazmunga ega asar.",
      type: "Dramatik asar",
    },
  ];

  const stats = [
    { value: "XX asr", label: "Faol ijod davri" },
    { value: "Ko‘plab", label: "Hikoya va qissalar" },
    { value: "Yuqori", label: "Adabiy ta’sir kuchi" },
  ];

  return (
    <>
      <PageHeader
        title="Said Ahmad"
        subtitle="O‘zbek adabiyotining yirik vakillaridan biri bo‘lgan Said Ahmadning hayoti, ijodi va adabiy merosi."
        bgImage={saidAhmadHeader}
      />

      <BiographySection
        title="Hayoti va ijodiy yo‘li"
        image={saidAhmadImg}
        text="Said Ahmad o‘zbek adabiyotida o‘zining serqirra ijodi, hayotiy kuzatuvlari va badiiy mahorati bilan alohida o‘rin egallagan ijodkorlardan biridir. U hikoya, qissa, roman va dramaturgiya yo‘nalishlarida samarali faoliyat yuritgan. Uning asarlarida xalq hayoti, inson ruhiyati, samimiylik va badiiy teranlik muhim o‘rin tutadi. Said Ahmad ijodi o‘zbek adabiyotining boy va mazmunli qatlamini tashkil etadi."
      />

      <WorksSection title="Asarlari" works={works} />

      <InfoStats items={stats} />
    </>
  );
}

export default SaidAhmad;