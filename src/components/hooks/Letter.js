import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Collapse,
  Typography,
} from "@mui/material";
// import '../css/Letter.css'

const Letter = ({ show, data, showLetter }) => {
  return (
    <Collapse in={!show & showLetter}>
      <div className="letter-container">
        <Card
          variant="outlined"
          sx={{
            width: "100%",
          }}
        >
          <CardContent
            sx={{ pt: 3, pb: 3 }}
          >
            <Typography variant="body1" sx={{ pl: 1, pr: 1, mb: 5, fontStyle: "italic" }}>
              Ngày {data.date.day} tháng {data.date.month} năm {data.date.year}
              <br />
              {data.date.hour} giờ {data.date.minute} phút.
              <br />
              <br />
              Gửi Nghĩa
              <br />
              <br />
              Qua những lần gặp gỡ, ít nhiều, hoặc là tớ chỉ mới quen cậu được vài hôm thui. Tớ chấm cậu được {data.handsome} điểm đó. Mà thôi, cảm nhận của tớ về cậu này:
              <br />
              {data.about}
              <br />
              <br />
              Còn hẳn 1 năm nữa là ra trường rồi, cũng còn sớm, thôi thì ngồi ôn lại những gì đã từng là kỉ niệm. Kỉ niệm của chúng ta là đây:
              <br />
              {data.memories}
              <br />
              <br />
              Chà, chúng thật đáng nhớ đúng không, mà thôi, không nhớ cũng được, keke. Dù gì cũng đã ra trường, tớ cũng muốn nhắn cậu rằng:
              <br />
              {data.message}
              <br />
              <br />
              Hết rùi nè, chắc tớ cũng k viết gì nữa, hi vọng là nó k lỗi để tớ còn gửi được =)))). Cố gắng ra trường nha ! Có thể đi làm freelance hoặc fulltime thì càng tốt 😺
              <br />
              <br />
              Kí tên
              <br />
              {data.name}.
            </Typography>
          </CardContent>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image="https://wallpapers.com/images/featured/vmdj9lfm2un8rji3.jpg"
              alt="Klee"
            />
          </CardActionArea>
        </Card>
      </div>
    </Collapse>
  );
};

export default Letter;
