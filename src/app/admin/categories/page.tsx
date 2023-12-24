"use client";
import { awards } from "@/data/awards";
import { Table } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import { useState } from "react";

export default function Categories() {
  const [search, setSearch] = useState(awards);
  const onSearch: SearchProps["onSearch"] = (value) => {
    console.log(value);
    const search = awards.filter((item) =>
      item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setSearch(search);
  };

  return (
    <div className=" flex flex-col p-3 w-full gap-2">
      <Search className="w-full" placeholder="Pesquise" onSearch={onSearch} />
      <Table
        dataSource={search}
        columns={[
          {
            dataIndex: "title",
            title: "Nome",
            sorter: (a, b) => a.title.localeCompare(b.title),
          },
          {
            dataIndex: "subTitle",
            title: "Descrição",
          },
        ]}
      />
    </div>
  );
}
