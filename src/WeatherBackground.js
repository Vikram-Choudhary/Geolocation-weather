import React from "react";

export const Background = (props) => {
  let weatherDesc = props.desc[0] && props.desc[0].main;
  const phase = () => {
    let hour = new Date().getHours();
    return hour > 5 && hour < 19 ? "d" : "n";
  };
  const images = {
    cloud1: {
      imgSrc: "./PNGImages/cloud1.png",
      desc: "cloud1",
    },
    cloud2: {
      imgSrc: "./PNGImages/cloud2.png",
      desc: "cloud2",
    },
    light: {
      imgSrc: "./PNGImages/light.png",
      desc: "light",
    },
    rain: {
      imgSrc: "./PNGImages/rain.png",
      desc: "rain",
    },
    mist: {
      imgSrc: "./PNGImages/mist.png",
      desc: "mist",
    },
    stars: {
      imgSrc: "./PNGImages/stars.png",
      desc: "stars",
    },
  };
  const weatherObject = {
    Thunderstorm: [images.cloud1, images.cloud2, images.light, images.rain],
    Drizzle: [images.cloud2, images.rain],
    Rain: [images.cloud1, images.rain],
    Clouds: [images.cloud1, images.cloud2, images.stars],
    Mist: [images.stars, images.mist],
    Fog: [images.stars, images.mist],
    Clear: [images.stars],
    Snow: [images.stars, images.cloud2, "Winter"],
  };
  const background = {
    d: {
      bg: "daySky",
      imgSrc: "./PNGImages/sun.png",
      imgAlt: "Sun",
    },
    n: {
      bg: "nightSky",
      imgSrc: "./PNGImages/moon.png",
      imgAlt: "Moon",
    },
  };
  let currentBackground = background[phase()];
  let weather = weatherObject[weatherDesc];
  return (
    <div className={`${currentBackground.bg} ${weatherDesc + phase()}`}>
      {weather &&
        weather.map((Weather, index) => {
          if (phase() === "d" && Weather.desc === "stars") return null;
          else if (Weather === "Winter") {
            return <Winter key={`background${index}`} />;
          } else
            return (
              <div
                key={`background${index}`}
                className={"background"}
                style={{
                  background: `url(${require(`${Weather.imgSrc}`)}) repeat top center`,
                }}
              />
            );
        })}
      <img
        className={"foreground"}
        src={require(`${currentBackground.imgSrc}`)}
        alt={currentBackground.imgAlt}
      />
    </div>
  );
};
export const Winter = () => {
  let element = [];
  for (let i = 0; i < 83; i++) element.push(<i key={`WinterSnow${i}`}></i>);
  return <div className={`snowflakes`}>{element}</div>;
};
