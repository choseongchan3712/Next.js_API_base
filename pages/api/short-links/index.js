// req: Request 객체: 클라이언트가 서버에 요청한 내용이 담겨 있습니다. (예: 요청 URL, 파라미터, 본문(body), 헤더 등
// res: Response 객체: 서버가 클라이언트에게 응답할 때 사용하는 객체입니다. (예: 텍스트, JSON, 에러, 상태코드 등을 보낼 수 있습니다.

const handler = (req, res) => {
    res.send('Hello API!');
};

export default handler;