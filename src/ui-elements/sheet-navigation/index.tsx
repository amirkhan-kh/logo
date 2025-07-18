"use client";

import { useRef, useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import NavigationLink from "../navigation-link";
import { useTranslations } from "next-intl";

export const SheetDemo = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("NavLink");

  const openDialog = () => {
    setIsOpen(true);
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    setIsOpen(false);
    setTimeout(() => dialogRef.current?.close(), 300);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

   

  }, []);

  return (
    <div>
      <button
        onClick={openDialog}
      >
        <RxHamburgerMenu />
      </button>

      <dialog
        ref={dialogRef}
        className="fixed inset-0 z-50 bg-black/30 p-0 m-0 backdrop:bg-black/30"
      >
        <div
          className={`fixed left-0 top-0 min-h-screen w-[80vw] p-5 bg-white shadow-xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-[32px]">Logo</h2>
            <button type="button" onClick={closeDialog}>
              <RxCross2 />
            </button>
          </div>

          <ul className="flex flex-col gap-2 py-20">
            <li onClick={closeDialog}>
              <NavigationLink  href="/">{t("navLink1")}</NavigationLink>
            </li>
            <li onClick={closeDialog}>
              <NavigationLink  href="/news">{t("navLink2")}</NavigationLink>
            </li>
            <li onClick={closeDialog}>
              <NavigationLink  href="/archive">{t("navLink3")}</NavigationLink>
            </li>
            <li onClick={closeDialog}>
              <NavigationLink  href="/samarkand">{t("navLink4")}</NavigationLink>
            </li>
            <li onClick={closeDialog}>
              <NavigationLink  href="/fair">{t("navLink5")}</NavigationLink>
            </li>
            <li onClick={closeDialog}>
              <NavigationLink  href="/forum">{t("navLink6")}</NavigationLink>
            </li>
          </ul>
        </div>
      </dialog>
    </div>
  );
};
