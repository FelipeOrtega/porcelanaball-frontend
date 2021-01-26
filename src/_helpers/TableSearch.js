import { useState, useEffect} from "react";

export const TableSearch = ({ searchVal, retrieve }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [origData, setOrigData] = useState([]);
  const [searchIndex, setSearchIndex] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(true);

  useEffect(() => {
    setLoadingSearch(true);
    const crawl = (element, allValues) => {
      if (!allValues) allValues = [];
      for (var key in element) {
        if (typeof element[key] === "object") crawl(element[key], allValues);
        else allValues.push(element[key] + " ");
      }
      return allValues;
    };
    const fetchData = async () => {
      const elements  = await retrieve;
      setOrigData(elements);
      setFilteredData(elements);
      const searchInd = elements.map(element => {
        const allValues = crawl(element);
        return { allValues: allValues.toString() };
      });
      setSearchIndex(searchInd);
      if (elements) setLoadingSearch(false);
    };
    fetchData();
  }, [retrieve]);

  useEffect(() => {
    if (searchVal) {
      const reqData = searchIndex.map((element, index) => {
        if (element.allValues.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0)
          return origData[index];
        return null;
      });
      setFilteredData(
        reqData.filter(element => {
          if (element) return true;
          return false;
        })
      );
    } else setFilteredData(origData);
  }, [searchVal, origData, searchIndex]);

  return { filteredData, loadingSearch };
};
