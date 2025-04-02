import { DeleteTwoTone } from "@ant-design/icons";
import { Button } from "antd";

function DeleteBanerlar() {
  return (
    <div className="pl-36">
      {" "}
      <Button danger>
        <DeleteTwoTone twoToneColor="#F01344" />
      </Button>
    </div>
  );
}

export default DeleteBanerlar;
