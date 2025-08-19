import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

const HomePagee = () => {
  return (<div>

    <ProductList data={sampleData.products} title="Sample Products" limit={4} />
  </div>);
}

export default HomePagee;