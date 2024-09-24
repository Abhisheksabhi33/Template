// import React from "react";
import Header from "../Header";
// images
import hero from "../assets/images/hero.svg";
import fertilityChart from "../assets/images/fertilityChart.svg";
import trackFertility from "../assets/images/trackFertility.svg";
import women from "../assets/images/women.svg";
import confirmed from "../assets/images/confirmed.svg";
import chart from "../assets/images/chart.svg";

import step1 from "../assets/images/step1.svg";
import step2 from "../assets/images/step2.svg";
import step3 from "../assets/images/step3.svg";
import step4 from "../assets/images/step4.svg";

// brands
import thisWeek from "../assets/brands/thisWeek.svg";
import entrepreneur from "../assets/brands/entrepreneur.svg";
import forbes from "../assets/brands/forbes.svg";
import bloomberg from "../assets/brands/bloomberg.svg";
import washington from "../assets/brands/washington.svg";

import FeedbackSlider from "../FeedbackSlider";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <Header />
      <div className=" grid lg:grid-flow-col grid-flow-row items-center">
        <img
          className=" absolute top-0 left-0 w-full h-full object-cover -z-10"
          src="https://res.cloudinary.com/dsxyzdqvo/image/upload/v1727149030/v2_main_hero_background_jrhxf4.png"
          alt="bg"
        />
        <div className=" relative lg:left-[350px] p-5 lg:text-start text-center ">
          <p className=" lg:text-5xl text-4xl text-[#112D35] lg:w-[493px] font-bold">
            Track your fertility hormones at home, <br />
            in 10 minutes
          </p>
          <p className=" mt-5 font-medium text-[#112D35] lg:w-[400px]">
            Get accurate results of Estrogen, LH, PdG (urine metabolite of
            progesterone) and FSH with Inito, the all-in-one fertility monitor.
          </p>

          <br />
          <button className="bg-cyan text-white font-medium text-base rounded-full w-[180px] h-[54px]">
            How does Inito work?
          </button>
        </div>
        <img
          className="w-[803px] h-[820px] lg:w-[803px] lg:h-[820px] mx-auto lg:mx-0"
          src="https://res.cloudinary.com/dsxyzdqvo/image/upload/v1727149025/v2_main_hero_desktop_bnjwhl.png"
          alt={hero}
        />
      </div>

      <div className="lg:mt-[120px] mt-[50px]">
        <p className="uppercase text-2xl text-[#c4c4c4] text-center">
          As Seen on
        </p>

        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-[150px] gap-10 my-10">
          {[thisWeek, entrepreneur, forbes, bloomberg, washington].map(
            (item) => (
              <img src={item} alt={item} />
            )
          )}
        </div>
      </div>

      <div className="lg:mt-0 mt-[50px] text-center p-5">
        <div className="flex justify-end items-center lg:w-[750px] m-auto"></div>

        <p className="lg:text-4xl text-3xl font-bold text-[#112D35]">
          The
          <span className="border-b-4 border-[#1F94AA]"> only </span>
          fertility kit you will ever need
        </p>

        <p className="lg:w-[568px] m-auto text-base text-[#3F555D] mt-[24px]">
          Most ovulation tests predict your fertile days by tracking Estrogen
          and Luteinizing Hormone (LH), but fail to measure the hormone that
          actually confirms your ovulation:
          <span className="font-bold">
            {" "}
            PdG (urine metabolite of progesterone).
          </span>
          .
        </p>
      </div>

      <div className="mt-[40px] text-center p-5">
        <div className="flex justify-end items-center lg:w-[750px] m-auto"></div>
        <p className="lg:text-4xl text-3xl font-bold text-[#112D35]">
          What makes <span className="border-b-4 border-[#1F94AA]">Inito</span>{" "}
          different?
        </p>

        <p className="lg:w-[532px] m-auto text-base text-[#3F555D] mt-[24px]">
          Inito is the only fertility monitor that measures all
          <span className="font-bold"> 4 hormones </span> on a{" "}
          <span className="font-bold"> single test strip</span>, showing you a
          full picture of your cycles with results unique to your body.
        </p>
      </div>

      {/* Predict & Confirm */}
      <div className=" lg:w-[1080px] lg:m-auto m-5 rounded-[40px] bg-[#E1F4FA]">
        <div className="p-7 flex lg:flex-row items-center flex-col justify-center">
          <img
            src="https://res.cloudinary.com/dsxyzdqvo/image/upload/v1727150985/ovulation_confirmed_mqcjqk.png"
            alt={fertilityChart}
            className="w-96 h-auto mx-0 max-w-[803px] lg:rounded-tr-[40px] rounded-[20px] lg:mx-0 bg-[#B4E4F2]"
          />
          <div className="text-start lg:p-20 p-7">
            <p className="lg:text-4xl text-3xl font-bold text-[##112D35] lg:w-[424px]">
              Predict and confirm your ovulation with{" "}
              <span className="border-b-4 border-[#1F94AA]">actual</span> data
            </p>
            <p className="lg:w-[427px] m-auto text-base text-[#3F555D] mt-[24px]">
              Unlike most ovulation tests that only give you "yes/no" results,
              Inito provides real numerical values of your fertility hormones.
            </p>
            <p className="lg:w-[427px] m-auto text-base text-[#3F555D] mt-[24px]">
              If you have irregular cycles, actual data is necessary to know
              exactly when you ovulate, and when is the best time to try to
              conceive.
            </p>
            <br />
            <button className="bg-cyan w-[202px] h-[50px] text-white font-medium rounded-full ">
              Get the inito kit
            </button>
          </div>
        </div>

        <div className="flex lg:flex-row items-center flex-col-reverse justify-center">
          <div className="text-start lg:p-12 p-7">
            <p className="lg:text-4xl text-3xl font-bold text-[##112D35] lg:w-[424px]">
              Never <span className="border-b-4 border-[#1F94AA]">miss</span> a
              day again with Inito
            </p>
            <p className="lg:w-[427px] m-auto text-base text-[#3F555D] mt-[24px]">
              Inito tracks up to{" "}
              <span className="font-bold">6 fertile days</span> and confirms
              ovulation by measuring all 3 hormones in just 5 minutes:
            </p>
            <p className="lg:w-[427px] m-auto text-base text-[#3F555D] mt-[24px]">
              Estrogen, which rises 3-4 days before ovulation
            </p>
            <p className="lg:w-[427px] m-auto text-base text-[#3F555D] ">
              LH, which surges 24-36 hours before ovulation
            </p>
            <p className="lg:w-[427px] m-auto text-base text-[#3F555D] ">
              Progesterone (PdG), which rises after ovulation
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dsxyzdqvo/image/upload/v1727152194/hormones_graph_desktop_v2_uxzuk6.png"
            alt={trackFertility}
            className="mr-12 w-1/2 p-7 h-auto max-w-[803px] lg:rounded-tr-[40px] rounded-[20px]"
          />
        </div>
      </div>
      <br />
      <br />

      <div className="lg:w-[1240px] lg:m-auto flex lg:flex-row flex-col items-center justify-between">
        <div className="lg:w-[600px] p-7">
          <p className="font-semibold text-[#112D35] text-3xl lg:w-[463px]">
            “Inito is all that you need to give you the{" "}
            <span className="border-b-4 border-[#1F94AA]">best</span> chance of
            conception."
          </p>

          <div className="flex items-center gap-5 mt-[32px]">
            <img
              src="https://picsum.photos/200"
              className="rounded-full w-[82px] h-[82px]"
              alt="avatar"
            />
            <div>
              <p className="text-sm text-[#112D35]">Dr. Rachel Green</p>
              <p className="text-xs text-[#3F555D]">MD</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7FE] rounded-[40px] p-10 lg:w-[600px] lg:m-0 m-5">
          <p className="lg:text-3xl text-2xl font-semibold text-[#112D35]">
            Why measure Progesterone?
          </p>
          <p className="text-base text-[#3F555D] mt-[23px]">
            <span className="font-bold">Anovulation</span> (having a menstrual
            cycle with no egg) is actually a common occurrence, affecting 1 in
            10 women*.
          </p>
          <p className="text-base text-[#3F555D] mt-[23px]">
            A sure way to confirm ovulation is a rise in{" "}
            <span className="font-bold">Progesterone level</span>
            after peak fertility. Progesterone also supports implantation and
            elevated levels of PdG during the 7-10 day window after ovulation
            correlates to higher chances of a successful pregnancy.
          </p>
          <p className="text-[#1F94AA] text-sm mt-[23px]">
            * Source: National Institutes of Health
          </p>
        </div>
      </div>

      <div className="lg:w-[1240px] m-auto">
        <p className="lg:text-4xl text-3xl font-bold text-[#112D35] lg:mt-[123px] p-5">
          Why Inito is the smarter way to get pregnant
        </p>

        <div className="flex lg:flex-row flex-col lg:m-0 m-5 items-center justify-between ">
          <img src={women} alt={women} />
          <br />

          <div>
            <p className="lg:text-4xl text-3xl font-bold text-[#112D35] lg:w-[480px]">
              Adapts to your{" "}
              <span className="border-b-4 border-[#1F94AA]">unique</span>{" "}
              irregular cycle
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Most ovulation kits have a set value or a threshold, making them
              likely to give a false read if your hormones fall outside the
              average range.
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Every woman is unique, especially with a condition like PCOS or
              Thyroid which can influence hormone levels. Inito measures real
              values of your hormones to personalize results to the unique you.
            </p>
            <button className="bg-cyan text-white font-medium text-base rounded-full w-[202px] h-[50px] mt-[30px]">
              Get the inito kit
            </button>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col-reverse lg:m-0 m-5 items-center justify-between lg:mt-[80px] mt-5">
          <div>
            <p className="lg:text-4xl text-3xl font-bold text-[#112D35] lg:w-[480px]">
              Inito <span className="border-b-4 border-[#1F94AA]">tracks</span>{" "}
              everything so you don’t have to
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              The Inito Fertility Monitor comes with a free easy-to-use App, so
              you can track your fertile days with ease and know exactly when
              you ovulate.
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Our App notifies you for everything:
            </p>
            <li className="text-base text-[#3F555D] list-disc">
              Your fertility levels
            </li>
            <li className="text-base text-[#3F555D] list-disc">
              When to test on the right days
            </li>
            <li className="text-base text-[#3F555D] list-disc">
              When you’ve successfully ovulated
            </li>
            <li className="text-base text-[#3F555D] list-disc">
              And when to roll into bed!
            </li>
            <button className="bg-cyan text-white font-medium text-base rounded-full w-[202px] h-[50px] mt-[30px]">
              Get the inito kit
            </button>
          </div>
          <img src={confirmed} alt={confirmed} />
        </div>

        <div className="flex lg:flex-row flex-col lg:m-0 m-5 items-center justify-between lg:mt-[80px] mt-5">
          <img src={chart} alt={chart} />
          <br />
          <div>
            <p className="lg:text-4xl text-3xl font-bold text-[#112D35] lg:w-[480px]">
              Get charts and actual values of your{" "}
              <span className="border-b-4 border-[#1F94AA]">hormones</span>{" "}
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Actual numerical values are necessary to know whether your PdG
              levels are sufficient enough to support a healthy pregnancy.
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Studies show that Pdg levels lower than 7.9ng/ml in serum (around
              10ug/ml PdG) 6-8 days after ovulation are associated with lower
              pregnancy outcomes.
            </p>
            <button className="bg-cyan text-white font-medium text-base rounded-full w-[202px] h-[50px] mt-[30px]">
              Get the inito kit
            </button>
          </div>
        </div>
        <br />
        <br />

        <div className="flex lg:flex-row flex-col lg:m-0 m-5 items-center justify-between">
          <div className="py-5">
            <p className="lg:text-4xl text-3xl font-bold text-[#112D35] lg:w-[441px]">
              Your own fertility lab at your{" "}
              <span className="border-b-4 border-[#1F94AA]">fingertips</span>
            </p>
            <p className="text-[#3F555D] text-base mt-[23px] lg:w-[441px]">
              Easy-to-read fertility diagnostic results directly on your iPhone,
              in just 5 minutes.
            </p>
            <br />
            <br />
            <button className="bg-cyan w-[202px] h-[50px] text-white font-medium rounded-full">
              Get the inito kit
            </button>
            <p className="lg:w-[381px] text-sm text-[#88969A] mt-[23px]">
              * The Inito Fertility Monitor currently supports iPhone 7 and up.
              Android phones are not supported at the moment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            {[step1, step2, step3, step4].map((step, index) => (
              <img key={index} src={step} alt={`step-${index}`} />
            ))}
          </div>
        </div>
      </div>
      <br />

      <FeedbackSlider />
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default Home;
