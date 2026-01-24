import { useSelector, useDispatch } from "react-redux";
import {
  setStatusFilter,
  setPriorityFilter,
  setSortBy,
} from "../redux/filters/filtersSlice";
import { selectFilters } from "../redux/filters/filtersSelector";

export const useFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const updateStatus = (value) => dispatch(setStatusFilter(value));
  const updatePriority = (value) => dispatch(setPriorityFilter(value));
  const updateSort = (value) => dispatch(setSortBy(value));

  return {
    filters,
    updateStatus,
    updatePriority,
    updateSort,
  };
};
