import { Checkbox, Input, Modal, Space, Table, Tag } from "antd";
import { useState } from "react";
const { Column, ColumnGroup } = Table;
const App = () => {
  const [data, setData] = useState([
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      status: "false",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      status: "false",
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      status: "true",
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ]);
  const [open, setOpen] = useState(false);
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [idx, setIdx] = useState("");

  const handleOk = (e) => {
    let user = {
      key: idx,
      firstName: editFirstName,
      lastName: editLastName,
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    };
    setData(
      data.map((e) => {
        if (e.key === idx) {
          e = user;
        }
        return e;
      })
    );

    console.log(e);
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const handleOpenModal = (e) => {
    console.log(e);
    setOpen(true);
    setEditFirstName(e.firstName);
    setEditLastName(e.lastName);
    setIdx(e.key);
  };
  const onChange = (e, id) => {
    setData(
      data.map((e) => {
        if (e.key === id) {
          e.status = e.status === "true" ? "false" : "true";
        }
        return e;
      })
    );
  };
  return (
    <div>
      <Table dataSource={data}>
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column title="Status" dataIndex="status" key="status" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? "geekblue" : "green";
                if (tag === "loser") {
                  color = "volcano";
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <button onClick={() => handleOpenModal(record)}>edit</button>
              <a>Delete</a>
              <Checkbox
                checked={record.status === "true" ? true : false}
                onChange={(e) => onChange(e, record.key)}
              >
                Checkbox
              </Checkbox>
            </Space>
          )}
        />
      </Table>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>
          <Input
            value={editFirstName}
            onChange={(e) => setEditFirstName(e.target.value)}
          />
          <Input
            value={editLastName}
            onChange={(e) => setEditLastName(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default App;
