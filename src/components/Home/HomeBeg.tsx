export default function HomeBeg(){
    return <div className="bg-violet-600 w-full h-screen">
        <div className="flex relative flex-col ">  <span className="text-9xl font-bold text-amber-500">Erxes</span>
  <span className="text-9xl text-gray-700 mt-4">Academy</span></div>
        <div className="flex justify-between items-center">
            <div className="flex justify-between flex-col ">
                <div><p>Өнөөдөр бид хийж буй хөрөнгө оруулалт бүр маргаашийн амжилт, <br /> үнэ цэнтэй холбоотой. Бүх алхам, бүх шийдвэр бол ирээдүйн өөрийнхөө <br /> төлөө хийж буй хөрөнгө юм.</p></div>
                <div><p>@{new Date().getFullYear()} Erxes Academy</p></div>
            </div>
            <div>
                <div>
                    <p>Мобайл хөгжүүлэгч</p>
                    <p>UI/UX дизайнер</p>
                    <p>Front-End хөгжүүлэгч</p>
                    <p>Back-End хөгжүүлэгч</p>
                </div>
                <div></div>
            </div>
        </div>
                  
     
    </div>
}