'use client'

import { Award, awards } from "@/data/awards";
import { Button, Modal, Table, Tag, Form, Input, Checkbox } from "antd";
import { SearchProps } from "antd/es/input";
import { useState } from "react";

export default function Awards() {
  const [visible, setVisible] = useState(false)
  const [search, setSearch] = useState(awards);
  const onSearch: SearchProps["onSearch"] = (value) => {
    console.log(value);
    const search = awards.filter((item) =>
      item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || item.subTitle.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setSearch(search);
  };

  return <div>
    <div>Awards</div>
    <div className="flex justify-between gap-2 p-3">
      <Input.Search placeholder="Basic usage" onSearch={onSearch} />
      <Button onClick={() => setVisible(true)}>Criar Premiação</Button>
    </div>
    <div>
      <Table
        dataSource={search}
        columns={[
          {
            dataIndex: 'title',
            title: 'Nome',
            sorter: (a, b) => a.title.localeCompare(b.title)
          },
          {
            dataIndex: 'subTitle',
            title: 'Subtitulo'
          },
          {
            dataIndex: 'createdAt',
            title: 'Data de criação'
          },
          {
            dataIndex: 'status',
            title: 'Status da Premiação',
            render: (status) => {
              return (
                <Tag color={status ? 'green' : 'red'}>{status ? 'Ativo' : 'Expirado'}</Tag>
              )
            }
          }
        ]}

      />
    </div>
    <Modal open={visible} onCancel={() => setVisible(false)} title={'Criar premiação'}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item<Award>
          label="Titulo"
          name="title"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<Award>
          label="Subtitulo"
          name="subTitle"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item<Award>
          label="Descrição"
          name="description"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input.TextArea rows={5}/>
        </Form.Item>
      </Form>
    </Modal>
  </div>;
}
