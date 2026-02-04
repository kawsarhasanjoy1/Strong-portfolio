"use client";
import Image from "next/image";
import { TSkill } from "@/types/global";

const Cart = ({ item }: { item: TSkill }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-blue-50 hover:-translate-y-2 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col items-center space-y-3">
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center p-2">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              width={60}
              height={60}
              className="object-contain group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 rounded-full animate-pulse" />
          )}
        </div>
        <span className="text-[11px] md:text-xs font-black text-gray-800 uppercase tracking-widest text-center">
          {item.name}
        </span>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-blue-600 w-0 group-hover:w-full transition-all duration-700 delay-100" />
      </div>
    </div>
  );
};

export default Cart;
