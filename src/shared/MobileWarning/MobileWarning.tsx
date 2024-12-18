import { useEffect, useState } from "react";

const isMobileDevice = (): boolean => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  return (
    /android|iphone|ipad|ipod|blackberry|iemobile|mobile/i.test(userAgent) ||
    isTouchDevice
  );
};
const MobileWarningBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (isMobileDevice()) {
      setShowBanner(true);
    }
  }, []);

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay to block interactions */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-0 pointer-events-auto z-[9998]"
        style={{ zIndex: 9998 }}
      ></div>

      {/* Warning Banner */}
      <div
        className="fixed top-0 left-0 w-full h-auto bg-red-500 text-white flex items-center justify-center text-center text-sm font-semibold z-[9999] pointer-events-auto px-6 py-4"
        style={{ zIndex: 9999 }}
      >
        ⚠️ This site is optimized for desktop devices. Please use a desktop browser for the best experience.
      </div>
    </>
  );
};

export default MobileWarningBanner;