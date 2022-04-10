import React from "react";
import { useState } from "react";
import { createForm } from "../Actions/Form";
import { useDispatch } from "react-redux";
import "./Form.css";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
} from "@material-ui/core";
import { Link } from "@material-ui/core";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

export default function Forms() {
  const [Form, setForm] = useState({
    fullname: "",
    phonenum: "",
    email: "",
    university: "",
    aboutyou: "",
    skills: "",
    intersted: [],
    others: "",
    resume: "",
  });
  const [temp1, setTemp1] = useState(true);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(Form);
    const formData = new FormData();
    formData.append("resume", Form.resume, Form.resume.name);
    formData.append("fullname", Form.fullname);
    formData.append("phonenum", Form.phonenum);
    formData.append("email", Form.email);

    formData.append("university", Form.university);
    formData.append("aboutyou", Form.aboutyou);
    formData.append("skills", Form.skills);
    formData.append("intersted", Form.intersted);
    formData.append("others", Form.others);

    console.log(formData, "ssssssrrrrrr");
    dispatch(createForm(Form));

    //  if(Form.fullname !== ""&&
    //  Form.phonenum !== "" &&
    //  Form.email !== ""&&
    //  Form.university !== ""&&
    //  Form.aboutyou !== " "&&
    //  Form.skills !== ""){
    //      dispatch(createForm(Form));
    //      alert("submitted successfully");
    //      setForm({fullname:"",phonenum:"",email:"",university:"", aboutyou:"",skills:"",intersted:"",others:""})
    //  }else{
    //          alert("enter all details")
    //  }
  };
  const options = [
    "Software Developer",

    "Front-end Developer",
    "Back-end Developer",
    "Full-Stack Developer",
    "Web Developer",
    "Business Analyst",
    "Digital Marketing",
    "Marketing and sales",
  ];
  const uploadResume = (e) => {
    setForm({ ...Form, resume: e.target.files[0] });
  };
  return (
    <>
      <div className="body">
        <div className="body--coresheet">
          <h1 className="body--coresheet--header">
            IEZAL Internship And Job Program
          </h1>
          <h3 className="sr">
            IEZAL is an educational platform which mission is to provide the
            best quality education in the world.
          </h3>
          <hr />
          <div className="body--coresheet--Email">
            <strong>
              sr@gmail.com{" "}
              <Link href="a" underline="none">
                {"Switch account"}
              </Link>
            </strong>
            <br />
            <div>
              <CloudDoneOutlinedIcon />
            </div>
          </div>
          <h3 className="sr1">
            The name and photo associated with your Google account will be
            recorded when you upload files and submit this form. Your email is
            not part of your response.
          </h3>
          <p color="error" id="body--coreSheet--Email--reqired">
            {" "}
            Required*
          </p>
        </div>
      </div>
      <br />
<form onSubmit={submitHandler} encType= "multipart/form-data">
      <Grid container spacing={2}>
        <Grid xs={12} item>
          <Card
            style={{
              maxWidth: 702,
              padding: "20px 5px",
              margin: "0 auto",
              borderRadius: "21px",
            }}
          >
            <CardContent>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="astrickstyle">
                  {" "}
                  <p>
                    Full Name <span className="body-coresheet2--imp"></span>
                  </p>
                  <p className="astricks1">*</p>
                </div>

                <TextField
                  req
                  id="standard-basic"
                  placeholder="Your answer"
                  variant="standard"
                  value={Form.fullname}
                  onChange={(e) =>
                    setForm({ ...Form, fullname: e.target.value })
                  }
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} item>
          <Card
            style={{
              maxWidth: 702,
              padding: "20px 5px",
              margin: "0 auto",
              borderRadius: "21px",
            }}
          >
            <CardContent>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="astrickstyle">
                  {" "}
                  <p>
                    Mobile & WhatsApp Number{" "}
                    <span className="body-coresheet2--imp"></span>
                  </p>
                  <p className="astricks1">*</p>
                </div>

                <TextField
                  id="standard-basic"
                  placeholder="Your answer"
                  variant="standard"
                  value={Form.phonenum}
                  onChange={(e) =>
                    setForm({ ...Form, phonenum: e.target.value })
                  }
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} item>
          <Card
            style={{
              maxWidth: 702,
              padding: "20px 5px",
              margin: "0 auto",
              borderRadius: "21px",
            }}
          >
            <CardContent>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="astrickstyle">
                  {" "}
                  <p>
                    Email Address <span className="body-coresheet2--imp"></span>
                  </p>
                  <p className="astricks1">*</p>
                </div>

                <TextField
                  id="standard-basic"
                  placeholder="Your answer"
                  variant="standard"
                  value={Form.email}
                  onChange={(e) => setForm({ ...Form, email: e.target.value })}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} item>
          <Card
            style={{
              maxWidth: 702,
              padding: "20px 5px",
              margin: "0 auto",
              borderRadius: "21px",
            }}
          >
            <CardContent>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="astrickstyle">
                  {" "}
                  <p>
                    University, or College name{" "}
                    <span className="body-coresheet2--imp"></span>
                  </p>
                  <p className="astricks1">*</p>
                </div>

                <TextField
                  id="standard-basic"
                  placeholder="Your answer"
                  variant="standard"
                  value={Form.university}
                  onChange={(e) =>
                    setForm({ ...Form, university: e.target.value })
                  }
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} item>
          <Card
            style={{
              maxWidth: 702,
              padding: "20px 5px",
              margin: "0 auto",
              borderRadius: "21px",
            }}
          >
            <CardContent>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="astrickstyle">
                  {" "}
                  <p>
                    About you?<span className="body-coresheet2--imp"></span>
                  </p>
                  <p className="astricks1">*</p>
                </div>

                <TextField
                  id="standard-basic"
                  placeholder="Your answer"
                  variant="standard"
                  value={Form.aboutyou}
                  onChange={(e) =>
                    setForm({ ...Form, aboutyou: e.target.value })
                  }
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} item>
          <Card
            style={{
              maxWidth: 702,
              padding: "20px 5px",
              margin: "0 auto",
              borderRadius: "21px",
            }}
          >
            <CardContent>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="astrickstyle">
                  {" "}
                  <p>
                    What skills do you have?
                    <span className="body-coresheet2--imp"></span>
                  </p>
                  <p className="astricks1">*</p>
                </div>

                <TextField
                  id="standard-basic"
                  placeholder="Your answer"
                  variant="standard"
                  value={Form.skills}
                  onChange={(e) => setForm({ ...Form, skills: e.target.value })}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} item>
          <Card
            style={{
              maxWidth: 702,
              padding: "20px 5px",
              margin: "0 auto",
              borderRadius: "21px",
            }}
          >
            <CardContent>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="astrickstyle">
                  {" "}
                  <p>
                    Which role you are interested?
                    <span className="body-coresheet2--imp"></span>
                  </p>
                  <p className="astricks1"> * </p>
                </div>

                {/* <div className="optionstyle"><CheckBoxOutlineBlankOutlinedIcon/><option value="Software Developer">Software Developer</option></div>
                <br />

                <option value="Front-end Developer">Front-end Developer</option>
                <br />
                <option value="Back-end Developer">Back-end Developer</option>
                <br />
                <option value="Full-Stack Developer">
                  Full-Stack Developer
                </option>
                <br />
                <option value="Web Developer">Web Developer</option>
                <br />
                <option value="Business Analyst">Business Analyst</option>
                <br />
                <option value="Digital Marketing">Digital Marketing</option>
                <br />
                <option value="Marketing and sales">Marketing and sales</option>
                <br />
                <option
                  value="Other:"
                  placeholder="Your answer"
                  variant="standerd"
                >
                  Other:
                </option> */}
                {options.map((o, k) => (
                  <>
                    <div className="optionstyle">
                      {Form.intersted[k] === o ? (
                        <>
                          <CheckBoxOutlinedIcon />
                        </>
                      ) : (
                        <>
                          <CheckBoxOutlineBlankOutlinedIcon
                            onClick={() => {
                              let temp = Form;

                              temp.intersted.push(options[k]);

                              setForm(temp);
                              setTemp1(!temp1);
                            }}
                          />
                        </>
                      )}

                      <option>{o}</option>
                    </div>
                  </>
                ))}

                <TextField
                  id="standard-basic"
                  placeholder="Others"
                  //  variant="standard"
                  // value={Form.intersted}
                  onChange={(e) =>
                    setForm({ ...Form, intersted: e.target.value })
                  }
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} item>
          <Card
            style={{
              maxWidth: 702,
              padding: "20px 5px",
              margin: "0 auto",
              borderRadius: "21px",
            }}
          >
            <CardContent>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="astrickstyle">
                  {" "}
                  <p>
                    Resume <label className="body-coresheet2--imp"></label>
                  </p>
                  <p className="astricks1">*</p>
                </div>
                {/* <label className="form-label">Resume<p className="astricks1">*</p></label> */}
                {/* <br /> */}
                <input
                  type="file"
                  className="form-control-file"
                  filename="resume"
                  name="resume"
                  onChange={uploadResume}
                />

                {/* <input
                  id="standard-basic"
                  // placeholder="Your answer"
                  type= "file"
                  variant="standard"
                  // value={Form.res}
                  onChange={(e) =>
                    {setForm({ ...Form, textImage: e.target.files[0] })
                    console.log(e.target.files[0],"sss")}
                  }
                /> */}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} item>
          <Card
            style={{
              maxWidth: 702,
              padding: "20px 5px",
              margin: "0 auto",
              borderRadius: "21px",
            }}
          >
            <CardContent>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="astrickstyle">
                  {" "}
                  <p>
                    Others<span className="body-coresheet2--imp"></span>
                  </p>
                  <p className="astricks1">*</p>
                </div>

                <TextField
                  id="standard-basic"
                  placeholder="Your answer"
                  variant="standard"
                  value={Form.others}
                  onChange={(e) => setForm({ ...Form, others: e.target.value })}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <div className="downrs">
          <Button
            id="button"
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            // onClick={(e) => submitHandler(e)}
          >
            Submit
          </Button>
          <div
            className="resetrs"
            onClick={() => window.location.reload(false)}
          >
            Clear form
          </div>
        </div>
      </Grid>
      </form>
    </>
  );
}
