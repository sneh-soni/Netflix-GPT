import React from "react";
import { useState } from "react";

const Question = ({ Ques, Answer, isVisible, setIsVisible }) => {
  return (
    <>
      <button
        className="bg-stone-700 w-3/4 py-6 text-start flex justify-between items-center px-4 text-lg md:text-2xl hover:bg-stone-600"
        onClick={() => {
          isVisible ? setIsVisible(false) : setIsVisible(true);
        }}
      >
        {Ques}
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1"
          data-name="Plus"
          alt=""
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      {isVisible ? (
        <div className="bg-stone-700 w-3/4 text-lg md:text-2xl px-4 py-6">
          {Answer}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

const FAQ = () => {
  const [visible, setVisible] = useState("");

  return (
    <div className="flex flex-col gap-4 items-center py-12 w-full bg-black text-white">
      <div className="text-3xl md:text-5xl font-bold w-3/4 flex justify-center my-4">
        Frequently Asked Questions
      </div>
      <Question
        Ques={"What is Netflix?"}
        Answer={
          "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        }
        isVisible={visible === "01"}
        setIsVisible={(isVisible) => {
          isVisible ? setVisible("01") : setVisible("");
        }}
      />
      <Question
        Ques={"How much does Netflix cost?"}
        Answer={
          "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
        }
        isVisible={visible === "02"}
        setIsVisible={(isVisible) => {
          isVisible ? setVisible("02") : setVisible("");
        }}
      />
      <Question
        Ques={"Where can I watch?"}
        Answer={
          "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        }
        isVisible={visible === "03"}
        setIsVisible={(isVisible) => {
          isVisible ? setVisible("03") : setVisible("");
        }}
      />
      <Question
        Ques={"How do I cancel?"}
        Answer={
          "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees start or stop your account anytime."
        }
        isVisible={visible === "04"}
        setIsVisible={(isVisible) => {
          isVisible ? setVisible("04") : setVisible("");
        }}
      />
      <Question
        Ques={"What can I watch on Netflix?"}
        Answer={
          "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        }
        isVisible={visible === "05"}
        setIsVisible={(isVisible) => {
          isVisible ? setVisible("05") : setVisible("");
        }}
      />
      <Question
        Ques={"Is Netflix good for kids?"}
        Answer={
          "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        }
        isVisible={visible === "06"}
        setIsVisible={(isVisible) => {
          isVisible ? setVisible("06") : setVisible("");
        }}
      />
      <button className="flex mt-4 gap-2 items-center text-lg md:text-2xl font-semibold bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md">
        Finish Sign Up
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-mirrorinrtl="true"
          class="default-ltr-cache-4z3qvp e1svuwfo1"
          data-name="ChevronRight"
          aria-hidden="true"
          className="pt-1"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default FAQ;
