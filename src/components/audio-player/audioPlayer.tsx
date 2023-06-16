import { useEffect, useState } from "react";

export default function AudioPlayer() {
  const [ayat, setAyat] = useState<string[]>([]);
  const [view, setView]: [view: boolean, setView: (a: boolean) => void] =
    useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const RANDOM_NUM = Math.floor(Math.random() * 6236) + 1;
    const quran: Response = await fetch(
      `http://api.alquran.cloud/v1/ayah/${RANDOM_NUM}/ar.alafasy`
    );
    const data = await quran.json();
    console.log(data.data);
    setAyat(data);
  };

  const handlePlay = (e: React.MouseEvent<HTMLAudioElement, MouseEvent>) => {
    e.preventDefault;
    const audios: HTMLCollectionOf<HTMLAudioElement> =
      document.getElementsByTagName("audio");
    for (let i = 0, len = audios.length; i < len; i++) {
      if (audios[i] !== e.target) {
        audios[i]?.pause();
        audios[i].currentTime = 0;
      }
    }
    if (view == false) {
      setView(true);
    }
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault;
    setView(false);
  };

  return (
    <div>
      {ayat?.data ? (
        <audio
          className="w-full"
          src={ayat?.data?.audio || ""}
          controls
          onPlay={handlePlay}
        />
      ) : (
        <></>
      )}
      <div className="py-2" />

      {view == true ? (
        <>
          <div className="flex flex-col items-end justify-between rounded-xl bg-white py-3  shadow-md">
            <div className="flex w-full items-end justify-end gap-2 rounded-t-xl bg-gray-100 pr-2 pt-2 pb-4">
              <button
                className="rounded-full bg-red-400 p-1 text-xs shadow-md"
                onClick={handleClose}
              />
              <button
                className="rounded-full bg-green-400 p-1 text-xs shadow-md"
                onClick={handleClose}
              />
              <button
                className="rounded-full bg-yellow-400 p-1 text-xs shadow-md"
                onClick={handleClose}
              />
            </div>
            <div className="py-2" />
            <div className="px-5 text-center text-xl font-medium">
              {ayat?.data?.text}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const quran = await fetch("http://api.alquran.cloud/v1/ayah/262/ar.alafasy");
  const res = quran.json();

  return {
    props: {
      res,
    },
  };
}
