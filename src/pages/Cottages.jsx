import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CottageTable from "../features/cottages/CottageTable";
import AddCottage from "../features/cottages/AddCottage";
import CottageTableOprations from "../features/cottages/CottageTableOprations";

function Cottages() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cottages</Heading>
        <CottageTableOprations />
      </Row>
      <Row>
        <CottageTable />
        <AddCottage />
      </Row>
    </>
  );
}

export default Cottages;
