import { Navigation } from "@/components/navigation";
import AIESEC_Landing from "@/components/aiesec-landing";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full bg-background">
      <Navigation />
      <AIESEC_Landing />
      <Footer />
    </div>
  );
}
