import { useState, useEffect } from "react";
import { NoInternetAlert } from "./components/App/NoInternetAlert";
import { Loading } from "./components/App/Loading";
import { MainContent } from "./components/Home/Main";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
      clearTimeout(loadingTimeout);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setShowContent(true);
    }
  }, [isLoading]);

  return (
    <div className="bg-[url('https://wallpapercave.com/wp/wp5529802.jpg')] bg-cover min-h-screen">
      <div className="min-h-screen w-full bg-black/50">
        {isLoading ? (
          <Loading msg={"เซิฟเวอร์ของเรากำลังประมวลผลอย่างหนัก โปรดรอสักครู่"} />
        ) : (
          <>
            {!isOnline && (<NoInternetAlert title="โปรดตรวจสอบการเชื่อมต่อ" msg="เราได้ตรวจพบว่าคุณไม่ได้เชื่อมต่ออินเตอร์เน็ต" />)}

            {!!showContent && (<MainContent />)}
          </>
        )}
      </div>
    </div>
  );
};
