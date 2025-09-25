import OrchingiinZurag from "@/components/Home/AcademyOrchin";
import ErxesNuurHuudas from "@/components/Home/Erxes-NuurHuudas";
import ErxesAcademySongosnoor from "@/components/Home/ErxesAcademySongosnoor";

import SurgaltHotolbor from "@/components/Home/SurgaltiinHotolboruud";
import { TextAnimation } from "@/components/Home/TextAnimation";

export default function Erxes() {
  return (
    <div>
      <ErxesNuurHuudas />
      <TextAnimation />
      <SurgaltHotolbor />
      <OrchingiinZurag />
      <ErxesAcademySongosnoor />
    </div>
  );
}
