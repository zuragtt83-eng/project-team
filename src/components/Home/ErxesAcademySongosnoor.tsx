import { Check } from "lucide-react";

export default function ErxesAcademySongosnoor() {
  return (
    <div className="flex flex-col p-6 md:p-10 bg-gray-200 text-gray-800 space-y-8 md:space-y-12 items-center">
      <h1 className="text-2xl md:text-4xl font-bold text-center max-w-3xl">
        Эрксис Академийн Инженерийн ангид элсэн суралцсанаар:
      </h1>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-6xl">
        <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
          <p className="font-bold mb-2 text-lg">Төлбөрийн уян хатан нөхцөл</p>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-start">
              <Check
                size={20}
                className="text-fuchsia-900 flex-shrink-0 mr-2 mt-1"
              />
              Төлбөрөө сар сардаа хуваан төлөх боломжтой.
            </li>
            <li className="flex items-start">
              <Check
                size={20}
                className="text-fuchsia-900 flex-shrink-0 mr-2 mt-1"
              />
              Амжилттай суралцагч нь Эрксис Инк ХХК-д цалинтай дадлага хийж
              төлбөрөөс суутгуулах боломжтой.
            </li>
          </ul>
        </div>

        <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
          <p className="font-bold mb-2 text-lg">
            Тогтмол орлоготой болох боломж
          </p>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-start">
              <Check
                size={20}
                className="text-fuchsia-900 flex-shrink-0 mr-2 mt-1"
              />
              Эрксис Инк ХХК-ийн бүтээгдэхүүн болох erxes XOS бизнесийн үйлдлийн
              систем дээр хэрэглэгчийн хэрэгцээ шаардлагыг хангасан модуль
              бүтээгдэхүүн зохион бүтээсэн бол борлуулалтаас тасралтгүй ашиг
              авах боломжтой. Түүнчлэн Эрксис Инк ХХК-ийн хувьцаа эзэмшигч болох
              боломжийг ч эдлэх боломжтой болно.
            </li>
          </ul>
        </div>

        <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
          <p className="font-bold mb-2 text-lg">
            Төгсөөд ажлын байраар хангагдах боломж
          </p>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-start">
              <Check
                size={20}
                className="text-fuchsia-900 flex-shrink-0 mr-2 mt-1"
              />
              Манай төгсөгчид технологийн салбарт манлайлагч Эрксис Инк компанид
              ажиллах боломжтой төдийгүй өөрсдийн 1000+ харилцагчдад төгсөгчдөө
              зуучлах, ажлын байртай болоход дэмжлэг үзүүлнэ.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
