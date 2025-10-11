import OrchingiinZurag from "@/components/Home/AcademyOrchin";

import ErxesNuurHuudas from "@/components/Home/Erxes-NuurHuudas";
import ErxesAcademySongosnoor from "@/components/Home/ErxesAcademySongosnoor";
import SOlution from "@/components/Home/Solution";

import SurgaltHotolbor from "@/components/Home/SurgaltiinHotolboruud";
import { TextAnimation } from "@/components/Home/TextAnimation";
import WhyLearnToCode from "@/components/Home/WhyLearnToCode";

export default function Erxes() {
  return (
    <div>
      <ErxesNuurHuudas />
      <WhyLearnToCode />
      <TextAnimation />
      <SOlution />
      <SurgaltHotolbor />
      <OrchingiinZurag />
      <ErxesAcademySongosnoor />
    </div>
  );
}
