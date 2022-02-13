//Import Images
import basketball1 from "./img/basketball-1.jpg";
import streetRacing1 from "./img/street-racing-1.jpg";
import nightTown1 from "./img/night-town-1.jpg";
import basketball2 from "./img/basketball-2.jpg";
import streetRacing2 from "./img/street-racing-2.jpg";
import nightTown2 from "./img/night-town-2.jpg";

export const MovieState = () => {
  return [
    {
      title: "Basketball",
      mainImg: basketball1,
      secondaryImg: basketball2,
      url: "/work/basketball",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },

    {
      title: "Street racing",
      mainImg: streetRacing1,
      url: "/work/street-racing",
      secondaryImg: streetRacing2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },

    {
      title: "Night Town",
      mainImg: nightTown1,
      url: "/work/night-town",
      secondaryImg: nightTown2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
