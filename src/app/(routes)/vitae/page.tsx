import { Vitae } from "@/components/Vitae";
import { Transition } from "@/components/Transition/Transition";

export default function VitaePage() {
  return (
    <div className="min-h-screen">
      <Transition />
      <Vitae />
    </div>
  );
}
