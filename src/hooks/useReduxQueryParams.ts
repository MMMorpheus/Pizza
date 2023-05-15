import { useActions, useAppSelector } from ".";
import { categories, options } from "../components";
import { optionsSelector } from "../redux/options/selectors";
import { useSearchParams } from "react-router-dom";
import qs from "qs";

export const useReduxQueryParams = () => {
  // Redux action
  const { setFilters, setDefaultOptions } = useActions();

  // Redux data and dependencies
  const { category, sortOption, currentPage, order } =
    useAppSelector(optionsSelector);

  // Url search params
  const [searchParams, setSearchParams] = useSearchParams();

  // Transform redux options data into search params
  const setQueryParams = () =>
    setSearchParams({
      // page: currentPage.toString(),
      // limim: String(10),
      category: String(category.option === 0 ? "" : category.option),
      sortBy: sortOption.query,
      order,
    });

  // Reset search params
  const resetQueryParams = () => {
    setDefaultOptions();
    searchParams.forEach((value, key) => searchParams.delete(key));
    setSearchParams(searchParams);
  };

  // Update redux option by parsing search params (usecase: after page reload)
  const updateReduxOptions = (search: string) => {
    const params = qs.parse(search, { ignoreQueryPrefix: true });
    const optionsData = {
      category: categories.find((i) => i.option === Number(params.category)),
      sortOption: options.find((i) => i.query === params.sortBy),
      order,
    };
    setFilters(optionsData);
  };

  return { setQueryParams, resetQueryParams, updateReduxOptions };
};


// Need to do:
// 1. Fix reset sp function: it works uncorrectly