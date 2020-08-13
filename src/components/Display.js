import React, { useState, useEffect } from "react";
import { getPosts } from "../services/ApiService";
import Entry from "./Entry";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Display() {
  const [entries, setEntries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
   loadData();
  }, []);

  function loadData() {
    getPosts(currentPage).then((r) => {
      setEntries(entries.concat(r));
      setCurrentPage(currentPage + 1);
    });
  }

  return (
    <>
      <p>Wykop Youtube Videos</p>
      <ul>
      <InfiniteScroll
          dataLength={entries.length}
          next={loadData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {entries.map((e, i) => {
          return (
            <li key={e.id}>
              <Entry entry={e}></Entry>
            </li>
          );
        })}
        </InfiniteScroll>
      </ul>
    </>
  );
}
