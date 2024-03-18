import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { setDecreaseItemQty, setIncreaseItemQty, setRemoveItemFromCart } from "../../app/CartSlice";

const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
const dispatch = useDispatch()
  const onRemoveItem = () => {
dispatch(setRemoveItemFromCart({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  const onIncreaseItemQTY = () => {
    dispatch(setIncreaseItemQty({ id, title, text, img, color, shadow, price, cartQuantity }))
  }
  const onDecreaseItemQTY = () => {
    dispatch(setDecreaseItemQty({ id, title, text, img, color, shadow, price, cartQuantity }))
  }
  return (
    <>
      <div className="flex items-center justify-between w-full p-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} rounded-lg
          relative p-3 hover:scale-105 transition-all ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className="w-36 h-auto object-fill lg:w-28"
            />
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1
                className="font-medium text-lg text-slate-900
               lg:text-sm"
              >
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                className="bg-theme-cart rounded w-6 h-6
               lg:w-5 lg:h-5 flex items-center active:scale-90"
               onClick={onDecreaseItemQTY}
              >
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div
                className="bg-theme-cart rounded text-white font-medium lg:text-xs
               w-7 h-7 lg:h-5 lg:w-6 flex items-center justify-center"
              >
                {cartQuantity}
              </div>
              <button
                type="button"
                className="bg-theme-cart rounded w-6 h-6
               lg:w-5 lg:h-5 flex items-center active:scale-90"
               onClick={onIncreaseItemQTY}
              >
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">
              ${price * cartQuantity}
            </h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              type="button"
              className="bg-theme-cart p-1 lg:p-0.5 grid
             items-center cursor-pointer justify-item-center rounded"
             onClick={onRemoveItem}
            >
              <TrashIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
