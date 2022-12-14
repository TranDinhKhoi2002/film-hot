import React, { FC, Fragment } from "react";
import TopSearches from "../components/Home/TopSearches";
import NavBar from "../components/NavBar";
import SearchBox from "../components/Search/SearchBox";
import SearchResult from "../components/Search/SearchResult";
import Title from "../components/Title";
import { useQueryParams } from "../hooks/useQueryParams";

const Search: FC = () => {
  const queryParams = useQueryParams();
  const query = queryParams.get("q");

  if (!query?.trim()) {
    return (
      <Fragment>
        <Title value="Search - FilmHot" />
        <div className="flex justify-center my-[100px] mx-6">
          <div className="w-full max-w-[400px] flex flex-col items-center gap-4">
            <div className="flex flex-col items-stretch gap-3">
              <h1 className="text-2xl">Search for your favorite movies</h1>
              <SearchBox autoFocus />
            </div>

            <div className="mt-8 w-full">
              <h1 className="text-lg mb-3">Popular Searches</h1>
              <TopSearches />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Title value={`Search for "${query}" - FilmHot`} />
      <div className="flex flex-col items-stretch mx-[7vw] mb-8">
        <NavBar />
        <div>
          <h1 className="text-3xl mb-6">Search result for "{query}"</h1>
        </div>
        <SearchResult query={query} />
      </div>
    </Fragment>
  );
};

export default Search;
