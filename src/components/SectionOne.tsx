export default function SectionOne() {
  return (
    <>
      {/* section 1 */}
      <section className="flex bg-[#FCF944] h-screen justify-center items-center flex-col gap-7">
        <div className="flex flex-row gap-10 ">
          <div className=" w-44 mt-10">
            <img
              width={200}
              className="slide-image absolute"
              src="https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg"
              alt="cat picture"
            />
            <img
              width={200}
              className="slide-image absolute"
              src="https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg"
              alt="dog picture"
            />
          </div>
          <div className="flex flex-col section1Text ">
            <h1 className=" text-7xl font-bold">Innovative</h1>
            <h1 className=" text-7xl font-bold">Solutions</h1>
            <h1 className=" text-7xl font-bold">for</h1>
            <h1 className=" text-7xl font-bold">Animals</h1>
          </div>
        </div>
        <div className=" flex flex-col justify-center gap-2  text-to-top">
          <div>
            <h1 className=" text-5xl">charity organization</h1>
          </div>
          <div className="flex gap-3 justify-center ">
            <img
              src="https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/6274433d06989d76edcff015_9055867_youtube_bxl.svg"
              width={50}
              alt="Youtube icon"
            />
            <img
              src="https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/6274449bf840c377311f2e08_9055851_instagram_bxl.svg"
              width={50}
              alt="Instagram icon"
            />
            <img
              src="https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg"
              width={50}
              alt="Facebook icon"
            />
            <img
              src="https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg"
              width={50}
              alt="Patreon icon"
            />
            <img
              src="https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg"
              width={50}
              alt="Telegram icon"
            />
          </div>
        </div>
      </section>
    </>
  );
}
