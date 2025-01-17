import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  selectNotices,
  selectTotalNotices,
} from "../redux/pet/selectors";
import { useEffect, useState } from "react";
import { AppDispatch } from "../redux/store";
import { fetchNotices } from "../redux/pet/operations";
import { FetchParams, INotice, ISearchQuery } from "../types";
import Pagination from "../components/Pagination";
import NoticeCard from "../components/NoticeCard";
import FilterForms from "../components/FilterForms";
import { useSearchParams } from "react-router-dom";

const NoticesPage = () => {
  const notices = useSelector(selectNotices);

  const filter = useSelector(selectFilter);

  const [sortedNotices, setSortedNotices] = useState<INotice[]>(notices);

  useEffect(() => {
    if (notices.length > 0) {
      let sortedNotices = [...notices];

      switch (filter) {
        case "Popular":
          sortedNotices.sort((a, b) => b.popularity - a.popularity);
          break;
        case "Unpopular":
          sortedNotices.sort((a, b) => a.popularity - b.popularity);
          break;
        case "Cheap":
          sortedNotices.sort((a, b) => (a.price || 0) - (b.price || 0));
          break;
        case "Expensive":
          sortedNotices.sort((a, b) => (b.price || 0) - (a.price || 0));
          break;
        default:
          sortedNotices = notices;
      }

      setSortedNotices(sortedNotices);
    }
  }, [notices, filter]);

  const limit = 6;

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("page")) {
      setSearchParams({ page: "1" });
    }
  }, [searchParams, setSearchParams]);

  const currentPage = Number(searchParams.get("page")) || 1;

  const totalNotices = useSelector(selectTotalNotices);

  const [searchQuery, setSearchQuery] = useState<ISearchQuery>({
    title: searchParams.get("title") || null,
    category: searchParams.get("category") || null,
    sex: searchParams.get("sex") || null,
    species: searchParams.get("species") || null,
  });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const queryParams: FetchParams = {
      page: currentPage,
      limit,
      title: searchQuery?.title ? searchQuery.title : null,
      category: searchQuery?.category ? searchQuery.category : null,
      sex: searchQuery?.sex ? searchQuery.sex : null,
      species: searchQuery?.species ? searchQuery.species : null,
    };
    dispatch(fetchNotices(queryParams));
  }, [currentPage, dispatch, searchQuery]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({
      page: String(newPage),
      ...(searchQuery.title && { title: String(searchQuery.title) }),
      ...(searchQuery.category && { category: String(searchQuery.category) }),
      ...(searchQuery.sex && { sex: String(searchQuery.sex) }),
      ...(searchQuery.species && { species: String(searchQuery.species) }),
    });
  };

  return (
    <div className="notices-container">
      <div className="notices-main-wrap">
        <h2 className="notices-main-title">Find your favorite pet</h2>
        <FilterForms setSearchQuery={setSearchQuery} />
      </div>
      <div className="news-cards notices-cards">
        {sortedNotices && sortedNotices.length > 0 ? (
          sortedNotices.map(
            ({
              name,
              title,
              imgURL,
              species,
              birthday,
              sex,
              category,
              comment,
              popularity,
              price,
            }) => (
              <NoticeCard
                key={title}
                name={name}
                title={title}
                imgURL={imgURL}
                species={species}
                birthday={birthday}
                sex={sex}
                category={category}
                comment={comment}
                popularity={popularity}
                price={price}
              />
            )
          )
        ) : (
          <p>There are news yet</p>
        )}
      </div>

      <Pagination
        totalItems={totalNotices}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default NoticesPage;
