import CamperOptions from "../components/CamperOptions/CamperOptions";
import CampersList from "../components/CampersList/CampersList";
import Section from "../shared/components/Section/Section";

const CatalogPage = () => {
  return (
    <main>
      <Section>
        <CamperOptions />
        <CampersList />
      </Section>
    </main>
  );
};

export default CatalogPage;
