import React from "react";
import img1 from "../assets/images/rectangle25.png";

type Props = {
  card: Card;
};

const Card = ({ card }: Props) => {
  return (
    <section className="max-w-sm">
      <a href="#">
        <img className="rounded-lg w-[370px] h-[248px]" src={card.imgUrl} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {card.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">
          {card.text}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-white border rounded-lg border-[#047267]"
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Card;
