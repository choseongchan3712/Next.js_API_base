// req: Request 객체: 클라이언트가 서버에 요청한 내용이 담겨 있습니다. (예: 요청 URL, 파라미터, 본문(body), 헤더 등
// res: Response 객체: 서버가 클라이언트에게 응답할 때 사용하는 객체입니다. (예: 텍스트, JSON, 에러, 상태코드 등을 보낼 수 있습니다.

import dbConnect from "@/db/dbConnect";
import mongoose from "mongoose";

const handler = async (req, res) => {
    await dbConnect();
    console.log(mongoose.connection.readyState);

  switch (req.method) {
    case "POST":
      res.status(201).send({
        title: "위키피디나 Next.js",
        url: "https://en.wikipedia.org/wiki/Next.js",
      });
      break;

    case "GET":
      res.send([
        {
          id: "abc",
          title: "위키피디나 Next.js",
          url: "https://en.wikipedia.org/wiki/Next.js",
        },
        {
          id: "def",
          title: "코드잇 자유게시판",
          url: "https://codeit.kr/community.general",
        },
        {
          id: "ghi",
          title: "코드잇 질문답변",
          url: "https://www.codeit.kr/community/questions",
        },
      ]);
      break;

      default:
        res.status(404).send();
  }
};

export default handler;
