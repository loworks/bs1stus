"use client";
import { useRef, useState, useEffect } from "react";
import IconFullScreen from "./icon/IconFullscreen";
import ButtonVolume from "./ButtonVolume";
import IconRestart from "./icon/IconRestart";

export default function Video({
  className = "",
  src,
  title = "Video Title",
  description = "Description of the video content.",
  controller = false,
  publishAt = "",
  ...rest
}: {
  className?: string;
  src: string;
  title?: string;
  description?: string;
  controller?: boolean;
  publishAt?: string;
} & React.ComponentProps<"button">) {
  const videoRef = useRef<any>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [formattedDuration, setFormattedDuration] = useState<string>("");

  // 動画のメタデータが読み込まれたときにdurationを取得
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const videoDuration = videoRef.current.duration;
      setDuration(videoDuration); // duration を秒単位で取得
      //setFormattedDuration(formatDuration(videoDuration)); // 動的にdurationをISO 8601形式に変換
    }
  };
  const isValidJson = (str) => {
    try {
      JSON.parse(str);
      return true; // 有効なJSON
    } catch (e) {
      return false; // 無効なJSON
    }
  };
  let meta = null;
  if (isValidJson(description)) {
    // JSON形式の場合
    meta = JSON.parse(description);
  } else {
    meta = {};
  }

  const convertToISO8601 = (durationStr) => {
    const [minutes, seconds] = durationStr.split(":").map(Number);
    let isoDuration = "PT";

    if (minutes > 0) isoDuration += `${minutes}M`;
    if (seconds > 0) isoDuration += `${seconds}S`;

    return isoDuration;
  };

  // durationをISO 8601形式で設定
  const iso8601Duration = convertToISO8601(
    meta && meta.duration ? meta.duration : "00:15",
  );
  const formattedPublishAt = meta.uploadDate
    ? `${meta.uploadDate}T00:00:00+00:00`
    : "2024-12-21T00:00:00+00:00";

  console.log(meta); // 動画URLを取得
  console.log(iso8601Duration);
  return (
    <div className={`${className} relative`}>
      {controller ? (
        <>
          <div
            className="video-container fullscreen-btn pointer-events-auto absolute z-10 cursor-pointer mix-blend-difference max-md:bottom-[2.75vw] max-md:right-[3vw] md:bottom-[16px] md:right-[16px]"
            onClick={(e) => {
              const target: any = videoRef.current;
              if (target.webkitSupportsFullscreen) {
                target.webkitEnterFullscreen();
                return;
              }
              target.requestFullscreen();
            }}
          >
            <IconFullScreen className="fill-white max-md:w-[3vw] md:w-[13px]" />
          </div>
          <div className="volume-btn pointer-events-auto absolute z-[10000] mix-blend-difference max-md:bottom-[10px] max-md:right-[8.5vw] max-md:h-[3.7vw] max-md:w-[3.7vw] md:bottom-[14px] md:right-[42px] md:h-[17px] md:w-[17px] [&_svg]:fill-white max-md:[&_svg]:w-[3.7vw] md:[&_svg]:w-[17px]">
            <ButtonVolume
              clickHandler={(props) => {
                if (videoRef.current.muted) {
                  videoRef.current.muted = false;
                } else {
                  videoRef.current.muted = true;
                }
                return false;
              }}
            />
          </div>
          <button
            className="restart-btn absolute z-10 cursor-pointer fill-white mix-blend-difference max-md:bottom-[2.6vw] max-md:right-[15vw] max-md:w-[3vw] md:bottom-[16px] md:right-[74px]"
            onClick={(e) => {
              const target: any = videoRef.current;
              target.currentTime = 0;
              target.play();
            }}
          >
            <IconRestart className="md:w-[14px]" />
          </button>
        </>
      ) : (
        ""
      )}

      {/* 動画の構造化データ（Schema.org） */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "${title}",
            "thumbnailUrl": "${meta.thumbnail}",
            "description": "${meta.description}",
            "contentUrl": "${src}",
            "embedUrl": "${src}",
            "uploadDate": "${formattedPublishAt}",
            "duration": "${iso8601Duration}"
          }
        `}
      </script>

      <video
        ref={videoRef}
        loop
        muted
        autoPlay
        playsInline
        className="w-full max-w-none"
        onError={(event) => {
          console.log("imgLoadedList --- error ", event);
        }}
        onMouseDown={(props) => {
          videoRef.current.pause();
          return false;
        }}
        onTouchStart={(props) => {
          videoRef.current.pause();
          return false;
        }}
        onMouseUp={(props) => {
          videoRef.current.play();
          return false;
        }}
        onTouchEnd={(props) => {
          videoRef.current.play();
          return false;
        }}
        onLoadedMetadata={handleLoadedMetadata} // メタデータの読み込み時にdurationを取得
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
