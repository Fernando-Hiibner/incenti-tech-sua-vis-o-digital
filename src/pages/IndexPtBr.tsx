import caseStudies from "@/lib/cases.pt-BR";
import content from "@/lib/siteContent.pt-BR";
import Index from "@/pages/Index";

const IndexPtBr = () => (
  <Index locale="pt-BR" content={content} caseStudies={caseStudies} />
);

export default IndexPtBr;
