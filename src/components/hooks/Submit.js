import { React, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  CardActionArea,
  Button,
  Typography,
  Collapse,
  Box,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import dc from "../lib/DataConfig";
import HCaptcha from "react-hcaptcha";
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Submit = ({
  setShowLetter,
  onDevelopmentEnv,
  setShow,
  setData,
  data,
  setAvailable,
  available,
}) => {
  const handleSubmit = () => {
    if (
      data.name.length >= 2 &&
      data.about.length >= 5 &&
      data.memories.length >= 5 &&
      data.message.length >= 5 &&
      authen
    ) {
      submitForm();
    } else {
      alert("Bạn chưa điền đủ thông tin hoặc chưa xác nhận captcha");
    }
  };
  const handleReset = () => {
    setData({
      name: "",
      about: "",
      memories: "",
      message: "",
      handsome: 0,
    });
    setAuthen(false);
  };
  const [authen, setAuthen] = useState(onDevelopmentEnv ? true : false);

  const submitForm = (event) => {
    //Ẩn form và hiện kết quả
    setShow(false);
    setShowLetter(true);
    setAvailable(false);
    //scroll to top, smooth
    window.scrollTo({ top: 0, behavior: "smooth" });
    //get date
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = String(date.getMinutes()).padStart(2, "0");
    const time = {
      day: day,
      month: month,
      year: year,
      hour: hour,
      minute: minute,
    };

    //set data mới vào data và local storage
    // setData({ ...data, date: time });
    // localStorage.setItem("data", JSON.stringify({ ...data, date: time }));

    //email về email
    if (!onDevelopmentEnv) {
      emailjs.send(
        "service_fvuz1jt",
        "template_n1g3h0i7a",
        {
          name: { data }.data.name,
          date_day: { time }.time.day,
          date_month: { time }.time.month,
          date_year: { time }.time.year,
          date_hour: { time }.time.hour,
          date_minute: { time }.time.minute,
          about_me: { data }.data.about,
          memories: { data }.data.memories,
          message: { data }.data.message,
          point: { data }.data.handsome,
        },
        "6AeXsVu6EEWu4pqPA"
      );
    }
    // button to reset data
    <Button variant="text" onClick={handleReset}>
      Reset Form
    </Button>;
  };
  return (
    <Collapse in={available && data.message !== "" && data.message !== undefined ? true : false}>
      <div className="submit-container">
        <Card variant="outlined">
          <CardHeader
            title={dc.submit.title}
            titleTypographyProps={{ variant: "h6" }}
            sx={{
              pl: 3,
              pr: 3,
              pt: 3,
            }}
            subheader={dc.submit.subheader}
            subheaderTypographyProps={{ variant: "subtitle2" }}
          />
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={dc.submit.image}
              alt="Klee"
            />
          </CardActionArea>
          <CardContent
            sx={{ borderBottom: 1, borderColor: "divider", pt: 3, pb: 3 }}
          >
            <Typography variant="body1" sx={{ pl: 1, pr: 1, mb: 3 }}>
              {dc.submit.content}
              <br />
              <br />
              {dc.submit.content2}
            </Typography>
            <Box sx={{ pl: 1, pr: 1 }}>
              {!onDevelopmentEnv && <HCaptcha
                sitekey="e43c287b-4d32-4a08-a3df-8afc2b9f6b24"
                onVerify={(token, ekey) => {
                  setAuthen(true);
                }}
              ></HCaptcha>}
            </Box>
          </CardContent>
          <CardActions sx={{ pl: 3, pr: 3, pb: 3, pt: 3 }}>
            <Button endIcon={<SendRoundedIcon />} variant="outlined" onClick={() => handleSubmit()}>
              {dc.submit.button}
            </Button>
            <Button variant="text" onClick={() => { window.scrollTo({ top: 750, behavior: "smooth" }) }}>
              Xem lại
            </Button>
          </CardActions>
        </Card>
      </div>
    </Collapse>
  );
};

export default Submit;
