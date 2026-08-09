/* COMPONENTS */
import { SectionContainer } from "@/shared/components/sectionContainer/SectionContainer";

export function Profile() {
  return (
    <SectionContainer>
      <div className="p-6 flex flex-col">
        <h1>
          Página de <span className="font-bold text-primary">Perfil</span>
        </h1>
      </div>
    </SectionContainer>
  );
}