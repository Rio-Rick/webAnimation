"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionOne from "../components/SectionOne";
import SecTwo from "../components/SecTwo";
import { useEffect } from "react";
import SecThree from "@/components/SecThree";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const organizations = [
    "Shelter of Victoria Bulbyna",
    "City of Faithful Hearts",
    "Shelter of Natalia Tymoshenko",
    "Shelter of Jeanne Sass",
    "Shelter of Victoria Bondarenko",
    "Sterilization Center",
    "Zoo Chance",
    "Save Lives",
    "City Center for the Treatment of Animals",
    "Society for the Protection of Animals in Sumy",
    "The Right to Life",
    "4 Paws",
    "The Kingdom of Cats",
    "Zvir",
    "Mercy",
    "Happy Dog",
    "Give Me a Paw, Friend",
    "Hope",
    "We Are for the Right to Life",
    "Planeta",
    "Second Life",
    "Happy Shore",
    "Retrieverteam",
    "Shelter of Irina Dobrolyubova",
    "Matilda",
    "Life",
    "Second Chance",
    "SOS",
    "Best Friends",
  ];

  useEffect(() => {
    let textRight = document.querySelector(".section1Text");
    let textToTop = document.querySelector(".text-to-top");
    let textToTopSec3 = document.querySelectorAll(".text-to-top-sec3");
    let leftToRight1 = document.querySelector(".left-to-right-1");

    //section 1 img
    const tlLoop = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });
    tlLoop
      .to(".slide-image:nth-of-type(1)", { y: 0, duration: 1, autoAlpha: 1})
      .to(".slide-image:nth-of-type(1)", { duration: 1, autoAlpha: 1})
      .to(".slide-image:nth-of-type(1)", { duration: 1, autoAlpha: 0})
      .to(".slide-image:nth-of-type(2)", { y: -200, duration: 1, autoAlpha: 0})
      .to(".slide-image:nth-of-type(2)", { y: 0, duration: 1,  autoAlpha: 1})
      .to(".slide-image:nth-of-type(2)", { duration: 1,delay:1, autoAlpha: 0});

    // Set initial visibility
    gsap.set(".slide-image:nth-of-type(1)", {y:-200, autoAlpha: 1 });
    gsap.set(".slide-image:nth-of-type(2)", { autoAlpha: 0 });

    //Section 1 text to top
    let tl = gsap.timeline();

    // tl.from(textToTop, 1.5, { y: "200%", ease: "power4.out"}, 0.15)
    gsap.fromTo(
      textToTop,
      { rotation: 0, y: 200, duration: 3, delay: 0.5 },
      { y: 0 }
    );
    gsap.fromTo(
      textToTop,
      { y: 0, opacity: 1 },
      {
        rotation: 0,
        y: 200,
        opacity: 0,
        duration: 2,
        delay: 0.5,

        scrollTrigger: {
          trigger: textToTop,
          start: "650% center",
          end: "50% bottom",
          scrub: 1,
          // markers: true,
          // toggleClass: "show-item",
        },
      }
    );

    //Section 1 text from right to left
    gsap.fromTo(
      textRight,
      { rotation: 0, x: 200, duration: 3, delay: 0.5 },
      { x: 0 }
    );
    gsap.fromTo(
      textRight,
      { x: 0, opacity: 1 },
      {
        rotation: 0,
        x: 200,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: textRight,
          start: "230% center",
          end: "50% bottom",
          scrub: 1,
          // markers: true,
        },
      }
    );
    //section 2
    tl.fromTo(
      leftToRight1,
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,

        scrollTrigger: {
          trigger: leftToRight1,
          start: "-100% center",
          end: "bottom bottom",
          // markers: true,
          scrub: 1,
        },
      }
    )
      .fromTo(
        ".left-to-right-2",
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".left-to-right-2",
            start: "-100% center",
            end: "bottom bottom",
            // markers: true,
            scrub: 1,
          },
        }
      )
      .fromTo(
        ".left-to-right-3",
        {
          x: -200,
          opacity: 0,
          ease: "power2.out",
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".left-to-right-3",
            start: "-100% center",
            end: "bottom bottom",
            // markers: true,
            scrub: 1,
          },
        }
      );

    //section 3
    tl.fromTo(
      textToTopSec3,
      { y: 200, opacity: 0, stagger: 1, delay: 2, duration: 2 },
      {
        rotation: 0,
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
        stagger: 3,
        scrollTrigger: {
          trigger: textToTopSec3,
          start: "-300% center",
          end: "top bottom",
          scrub: 1,

          // markers: true,
          // toggleClass: "show-item",
        },
      }
    );
  }, []);
  return (
    <>
      <div className="fixed right-0 m-10 z-40">
        <button className=" text-3xl border-4 p-2 bg-white border-black">
          donate
        </button>
      </div>
      {/* section 1 */}
      <SectionOne />
      {/* section 2 */}
      <SecTwo />
      {/* section 3 */}
      <section className="bg-[#fcf944] pt-20">
        <div className="mx-10 md:mx-20 lg:mx-36 pb-10">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
            We want to help
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-5xl text-white mt-10">
            homeless packs, volunteers, guardians, overstayers, shelters and
            other organisations
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-2 mx-36">
          {organizations.map((org, idx) => (
            <SecThree org={org} key={idx} />
          ))}
        </div>
        <div className="mx-10 md:mx-20 lg:mx-36  py-32">
          <button className=" flex gap-3 p-5 text-3xl border-4 bg-pink-300 border-black">
            <h1 className="text-3xl">apply for help</h1>
            <img
              className="img-arrow"
              width={50}
              src="https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/6273a272fe3407579aa3d6c9_PngItem_344959-p-500.png"
              alt=""
            />
          </button>
        </div>
      </section>
    </>
  );
}
