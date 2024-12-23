import OtherFooter from "../../components/footer/otherFooter";
import BestSeller from "./bestSeller";

export default function HomePage() {
  return (
    <div className={"homepage"}>
      <BestSeller />
      <OtherFooter />
    </div>
  );
}
