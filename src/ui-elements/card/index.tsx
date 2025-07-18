"use client";
import { card } from "@/db/card";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import TopButton from "../button";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

interface CardProductProps {
  activeTab: string;
}

const CardProduct: React.FC<CardProductProps> = ({ activeTab }) => {
  const t = useTranslations("Tab");
  const pathname = usePathname();
  const [selectedCard, setSelectedCard] = useState<(typeof card)[0] | null>(
    null
  );

  const lastSegment = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    return parts[1] || "";
  }, [pathname]);

  const tabKey = activeTab || lastSegment;

  const slicedCards = useMemo(() => {
    switch (tabKey) {
      case "fair":
        return card.slice(0, 8);
      case "forum":
        return card.slice(3, 15);
      case "news":
        return card.slice(5, 14);
      case "samrkand":
        return card.slice(2, 10);
      case "archive":
        return card.slice(7, 17);
      case "/":
        return card.slice(0, 6);
      default:
        return card.slice(0, 12);
    }
  }, [tabKey]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-3">
        {slicedCards.map((item) => (
          <div
            key={item.id}
            className="w-full cursor-pointer"
            onClick={() => setSelectedCard(item)}
          >
            <div className="w-full h-[202px] relative">
              <Image
                src={item.img}
                alt={item.author}
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-[12px]">
              <p className="text-[#FF9A50] text-[12px] mb-1.5">{item.title}</p>
              <p className="text-[#211F2E] text-[16px] mb-3">
                {t(item.description)}
              </p>
              <p className="text-[#919099] text-[14px]">{item.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000009b] backdrop-blur-[2px]"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative z-10 bg-white w-[78vw] max-w-5xl max-h-[90vh] h-auto rounded-xl overflow-auto p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[#211F2E] font-semibold text-2xl">
                {t("title")}
              </h3>
              <button
                className="text-xl font-bold"
                onClick={() => setSelectedCard(null)}
              >
                <IoCloseSharp size={24} />
              </button>
            </div>

            <div className="relative overflow-hidden rounded-[12px] w-full h-[270px] mb-4">
              {/* Blur background */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(/card10.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(20px)",
                  zIndex: 0,
                }}
              />

              {/* Tiniq original rasm */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="relative w-[80%] h-full">
                  <Image
                    src={selectedCard.img}
                    alt={selectedCard.author}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-3">
              {slicedCards.slice(0, 3).map((item) => (
                <Image
                  key={item.id}
                  src={item.img}
                  alt={item.author}
                  width={120}
                  height={100}
                  className="rounded-[4px]"
                />
              ))}
            </div>
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-3">
                <Image
                  src="/Ellipse 9.png"
                  alt="Antonio Banderes"
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                <h2 className="text-black text-lg font-semibold">{selectedCard.author}</h2>
              </div>
              <div className="flex gap-2.5">
                <TopButton
                className="w-10 h-10 border-[#919099] border rounded-4px p-2 focus:border-[#FF9A50]">
                  <CiHeart size={20}  className="font-semibold"/>
                </TopButton>
                <TopButton
                className="w-10 h-10 border-[#919099] border rounded-4px p-2 focus:border-[#FF9A50]">
                  <IoShareSocialOutline size={20} className="font-s"/>
                </TopButton>
              </div>
            </div>
            <p className="font-medium text-[16px] leading-[140%] mb-2 w-[70%]">{t("modalDescription")}</p>
            <div className="flex items-center gap-1.5">
              <TopButton className="p-2 rounded-[30px] font-medium text-sm">mood</TopButton>
              <TopButton className="p-2 rounded-[30px] font-medium text-sm">Emotion</TopButton>
              <TopButton className="p-2 rounded-[30px] font-medium text-sm">Feeling</TopButton>
              <TopButton className="p-2 rounded-[30px] font-medium text-sm">Confidence</TopButton>
              <TopButton className="p-2 rounded-[30px] font-medium text-sm">attitude</TopButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardProduct;
