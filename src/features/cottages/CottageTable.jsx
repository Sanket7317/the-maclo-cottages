import Spinner from "../../ui/Spinner";
import CottageRow from "./CottageRow";
import { useCottages } from "./useCottages";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router";

function CottageTable() {
  const { isLoading, cottages } = useCottages();
  const [searchParams] = useSearchParams();
  // 1 Filter Data
  const filterValue = searchParams.get("discount") || "all";
  let filteredCottages;
  if (filterValue === "all") filteredCottages = cottages;
  if (filterValue === "no-discount")
    filteredCottages = cottages?.filter((cottage) => cottage.discount === 0);
  if (filterValue === "with-discount")
    filteredCottages = cottages?.filter((cottage) => cottage.discount > 0);
  // 2 Sort Data
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction == "asc" ? 1 : -1;
  const sortedCottages = filteredCottages?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cottage</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          // data={cottages}
          // data={filteredCottages}
          data={sortedCottages} //
          render={(cottage) => (
            <CottageRow cottage={cottage} key={cottage.id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default CottageTable;
