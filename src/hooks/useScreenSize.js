import { useSelector } from "react-redux";

export const useScreenSize = () => {
  return useSelector((state) => state.ui.screenSize);
};
