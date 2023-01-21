import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="500" src="/img/bck.png" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          GalaxyKedy Bot
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
       Galaxykedy Kullanımı Kolay Slash Komutlarını Destekleyen Bir Moderasyon ,Eğlence ,Optimizasyon, Koruma Ve Destek Botudur. 
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://bit.ly/3PHDjyC"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Botu Ekle
              </a>
            </Link>
  <div className="py-10"></div>
  <Link href={"https://bit.ly/3LYzaDe"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Bota Oy Ver</a>
  </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Galaxykedy Bot" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "Kendi duygularınızla kendinizi rahatlatabileceğiniz en iyi ortamı yaratmaya ne dersiniz?" }}/>
            <a href="https://bit.ly/3PHDjyC" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Sunucuna Ekle
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Optimizasyon</p>
                  <p className="text-gray-500 line-clamp-4">Galaxykedy sunucunuza özel hızlı ve özelleştirilebilir ayarlarla size rahatlık sunar..</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Evrensel</p>
                  <p className="text-gray-500 line-clamp-4">Birden Fazla Sunucuyu Tek Başına Koruyabilen Bir Bottur.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Güvenlik</p>
                  <p className="text-gray-500 line-clamp-4">Sunucunuza Yapılan Saldırıları Önleyen Bir Özelliktir (Komutla Açmanız Gerekir Aksi Takdirde Çalışmaz).</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Desteğe Dayalıyız</p>
                  <p className="text-gray-500 line-clamp-4">En iyi ekip arkadaşlarımızla yardıma ihtiyacı olan herkese en hızlı şekilde yanıt veriyoruz..</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://cdn.discordapp.com/attachments/1026869473766031378/1066422233444122634/yardm.PNG"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">En Mükemmel Yapılmış Botunuz</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">En iyi ve en güncel bot Astra ile en güzel partileri vermeye hazır mısınız?</p>
                </div>
                <img src="https://cdn.discordapp.com/attachments/1026869473766031378/1066422233444122634/yardm.PNG" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>

      </>
  )
}
