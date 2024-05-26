import { useLocale } from "antd/es/locale";
import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

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
