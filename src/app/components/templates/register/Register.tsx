"use client";
import React from "react";
import Stepper from "../../organisms/Stepper";
import { comforta } from "@/fonts/Fonts";
import Image from "next/image";
import france from "../../../../assets/france.png";
import { ArrowLeftIcon, ChevronRight } from "lucide-react";
import { AnimatePresence, motion as m } from "framer-motion";
import CountrySelect from "../../organisms/CountryItem";
import CountryItem from "../../organisms/CountryItem";
import { Wizard, useWizard } from "react-use-wizard";
import { Button } from "@/components/ui/button";
import ActivityItem from "../../organisms/ActivityItem";
import VerifyEmail from "../../organisms/VerifyEmail";
import gif from "../../../../assets/email-ezgif.com-loop-count.gif"
import VerifyCode from "../../organisms/VerifyCode";
const COUNTRIES = [
  {
    name: "paris",
    label: "Paris includes all cities",
  },
];
const ACTIVITY = [
  {
    name: "I am independent",
  },
  {
    name: "A company with 1 to 9 employees",
  },
  {
    name: "A company with more than 9 employees",
  },
  {
    name: "it's an association",
  },
];
const Register = () => {
  return (
    <div className=" w-screen flex flex-row">
      <div className="w-1/5  hidden md:block ">
        <Stepper />
      </div>
      <div className=" flex flex-col h-screen w-screen md:w-[80%]">
        <div className="headerMain h-[10%] w-full">header</div>
        <div className="RegisterMain h-full w-full flex flex-col gap-6 items-center justify-center ">
          <Wizard wrapper={<AnimatePresence mode="wait" />}>
            <m.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="md:w-[70%] p-5 md:p-0"
            >
              <div className="flex gap-2 flex-col">
                <h1
                  className={`md:text-[30px] text-md fontbase font-semibold `}
                >
                  Where is the activity based?
                </h1>
                <p
                  className={`text-sm md:text-sm  text-gray-700 fontbase leading-6 `}
                >
                  The information required to open an account depending on the
                  country in which the activity is domiciled , select your
                  country .
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-5">
                <CountryItem countries={COUNTRIES} />
              </div>
            </m.div>
            <m.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="md:w-[70%] p-5 md:p-0"
            >
              <div className="flex gap-2 flex-col">
                <h1
                  className={`md:text-[27px] text-md  fontbase font-semibold `}
                >
                  What type of activity is it ?
                </h1>
                <p
                  className={`text-sm md:text-sm text-gray-700 fontbase leading-6 `}
                >
                  This information will allow us to personalize your service and
                  recommend the most appropriate package.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-5">
                <ActivityItem acitivity={ACTIVITY} />
              </div>
            </m.div>
            <m.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="md:w-[70%] p-5 md:p-0"
            >
              <div className="flex gap-2 flex-col">
                <h1
                  className={`md:text-[27px] text-md   font-semibold fontbase `}
                >
                  Choose the way to register us at Qwinvo
                </h1>
                <p
                  className={`text-sm md:text-sm text-gray-700 fontbase leading-6 `}
                >
                  Verify yoour email to continue.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-5">
                <VerifyEmail />
              </div>
              {/* <Image src={gif} width={150} alt="email animation" className="bg-red6-600 left-[2%] absolute top-[40%] opacity-[0.3]" /> */}
            </m.div>
            <m.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="md:w-[70%] p-5 md:p-0"
            >
              <div className="flex gap-2 flex-col">
                <h1
                  className={`md:text-[27px] text-md   font-semibold fontbase `}
                >
                  Excellent ! you are doing great please enter the code
                </h1>
                <p
                  className={`text-sm md:text-sm text-gray-700 fontbase leading-6 `}
                >
                  Verify yoour email to continue.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-5">
                <VerifyCode />
              </div>
              {/* <Image src={gif} width={150} alt="email animation" className="bg-red6-600 left-[2%] absolute top-[40%] opacity-[0.3]" /> */}
            </m.div>
          </Wizard>
        </div>
      </div>
    </div>
  );
};

export default Register;
