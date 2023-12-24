'use client'

import { Award, awards } from "@/data/awards";
import { Button, Modal, Table, Tag, Form, Input, Checkbox } from "antd";
import { useState } from "react";

export default function Awards() {
  const [visible, setVisible] = useState(false)

  return <div>
    <div>Awards</div>
    <div>
      <Button onClick={() => setVisible(true)}>Criar Premiação</Button>
    </div>
    <div>
      <Table
        dataSource={awards}
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
    <Modal open={visible} onCancel={() => setVisible(false)}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
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
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  </div>;
}
