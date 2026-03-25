import PageHeader from "../layout/PageHeader";
import SectionTitle from "../shared/SectionTitle";
import TimelineItem from "../shared/TimelineItem";
import timelineData from "../data/timelineData";
import timelineHeader from "../../assets/images/hero/museum-hero.jpg";

function Timeline() {
  return (
    <>
      <PageHeader
        title="Vaqt chizig‘i"
        subtitle="Said Ahmad va Saida Zunnunova hayoti hamda ijodiga oid muhim bosqichlarni ketma-ketlikda kuzating."
        bgImage={timelineHeader}
      />

      <section className="section" style={{ background: "#EFEFEF" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <SectionTitle
            title="Asosiy tarixiy bosqichlar"
            subtitle="Ijodkorlar hayotidagi muhim voqealar va adabiy meros shakllangan davrlar."
            center
          />

          <div style={{ marginTop: "40px" }}>
            {timelineData.map((item) => (
              <TimelineItem
                key={item.id}
                year={item.year}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;