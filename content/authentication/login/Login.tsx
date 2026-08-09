/* COMPONENTS */
import { SectionContainer } from "@/shared/components/sectionContainer/SectionContainer";

/* NAVIGATION */
import Link from "next/link";

export function Login() {
  return (
    <SectionContainer>
      <div className="p-6 flex flex-col items-center justify-center flex-1">
        <h1>
          Página de <span className="font-bold text-primary">Login</span>
        </h1>
        <Link href={"/home"}>Ir a Inicio</Link>
      </div>
    </SectionContainer>
  );
}
