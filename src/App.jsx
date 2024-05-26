import { useLocale } from "antd/es/locale";
import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dast from "./img/DastKatiQalama.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./App.css";

// import required modules
import { Pagination, Navigation  } from "swiper/modules";
const App = () => {
  const [cnt, setCnt] = useState(0);
  let api = "https://64f80aa0824680fd217f0e00.mockapi.io/api/card/ForBOTs";
  const [data, setData] = useState([]);
  const [switcher, setSwitcher] = useState(false);

  const getData = async () => {
    try {
      const { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (switcher) {
      getData();
    }
    return setSwitcher(true);
  }, [switcher]);

  return (
    <div>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-100 w-100">
            <img src={dast} alt="" />
          </div>{" "}
          Slide 1
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      {data.map((e) => {
        return (
          <div className="flex gap-5" key={e.id}>
            <p>{e.desc}</p>
            <p>{e.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
