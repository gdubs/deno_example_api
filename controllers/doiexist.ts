import { Exist } from "../domain/types.ts";

// /api/doiexist

const getExistMessage = ({ response }: { response: any }) => {
  response.body = {
    data: {
      message: "I do exist!",
    },
  };
};

export { getExistMessage };
