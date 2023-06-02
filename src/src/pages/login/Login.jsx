import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import EastIcon from "@mui/icons-material/East";
import LoadingButton from "@mui/lab/LoadingButton";
import woppLogo from "@/assets/logo.svg";
import emailIcon from "@/assets/login/ic_login_mail.svg";
import keyIcon from "@/assets/login/ic_login_password.svg";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import photographer from "@/assets/login/photographer.png";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginPhotographer } from "../../store/auth";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { error } = useSelector((state) => state.auth);
  const dispath = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    textAlign: "center",
    display: "grid",
    borderRadius: 1,
    placeItems: "center",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 12,
    py: 4,
    px: 4,
  };

  // const CssTextField = styled(TextField)({
  //   "& MuiInputBase-root": {
  //     color: "#000000",
  //     background: "#000000",
  //   },
  //   "& label.Mui-focused": {
  //     color: "#727272",
  //     fontWeight: 200,
  //   },
  //   "& p.MuiFormHelperText-root": {
  //     color: "#727272",
  //     fontSize: 12,
  //     fontStyle: "normal",
  //   },
  //   "& .MuiInput-underline:after": {
  //     borderBottomColor: "#727272",
  //   },
  //   "& .MuiOutlinedInput-root": {
  //     "& fieldset": {
  //       borderColor: "#727272",
  //     },
  //     "&:hover fieldset": {
  //       borderColor: "#727272",
  //     },
  //     "&.Mui-focused fieldset": {
  //       borderColor: "#727272",
  //     },
  //   },
  // });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El correo no es válido")
        .required("Ingresa un correo electrónico"),
      password: Yup.string().required("La contraseña es necesaria"),
    }),
    validateOnMount: false,
    onSubmit: (photographer) => {
      if (formik.isValid && !loading) {
        setLoading(true);
        setTimeout(() => {
          dispath(loginPhotographer(photographer));
          setLoading(false);
        }, 1000);
      }
    },
  });

  return (
    <section className={styles.wrapper}>
      <aside>
        <img
          className="animate__animated animate__zoomInUp"
          src={woppLogo}
          alt="Logo Wopp"
        />
      </aside>
      <section>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <div className={styles.header}>
            <Typography
              variant="h3"
              component="h3"
              color="warning"
              style={{ fontWeight: "bold" }}
            >
              Inicio de sesión
            </Typography>
            <Typography variant="p" component="p" color="warning">
              {error}
            </Typography>
          </div>
          <div className={styles.body}>
            <FormControl>
              <label htmlFor="email">Correo electrónico</label>
              <TextField
                autoComplete="off"
                id="email"
                name="email"
                style={{ background: "white" }}
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                placeholder="Correo electrónico"
                helperText={formik.touched.email ? formik.errors.email : ""}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={emailIcon} alt="logo" />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl>
              <label htmlFor="password">Contraseña</label>
              <TextField
                id="password"
                type="password"
                name="password"
                autoComplete="off"
                onChange={formik.handleChange}
                style={{ background: "white" }}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                placeholder="Contraseña"
                helperText={
                  formik.touched.password ? formik.errors.password : ""
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={keyIcon} alt="logo" />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
          <div className={styles.actions}>
            <Button
              type="button"
              onClick={handleOpen}
              color="secondary"
              style={{ textTransform: "none", fontSize: 16, fontWeight: 200 }}
            >
              Olvidé mi contraseña
            </Button>
            <LoadingButton
              type="submit"
              loading={loading}
              disabled={!formik.isValid}
              style={{
                textTransform: "none",
                letterSpacing: 2,
                padding: "10px 40px",
              }}
              endIcon={<EastIcon style={{ marginLeft: 20 }} />}
              variant="outlined"
              color="warning"
            >
              Ingresar
            </LoadingButton>
          </div>
        </form>
        <img
          className="animate__animated animate__fadeInUpBig"
          src={photographer}
          alt="Foto de un fotógrafo"
        />
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseSharpIcon />
          </IconButton>
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 15,
              marginTop: 20,
            }}
          >
            <Typography variant="h6" component="h6" color="primary">
              Recuperar contraseña
            </Typography>
            <Typography
              variant="p"
              component="p"
              style={{ color: "var(--warning-color)" }}
            >
              Debe ser un correo válido
            </Typography>
            <Typography variant="p" component="p" color="secondary">
              Por favor digite su correo, enviaremos una nueva contraseña
            </Typography>
            <FormControl>
              <TextField
                autoComplete="off"
                id="recoveryEmail"
                type="recoveryEmail"
                placeholder="Correo electrónico"
                helperText="Ingresa un correo electrónico"
              />
            </FormControl>
            <LoadingButton
              loading={false}
              style={{
                textTransform: "none",
                letterSpacing: 2,
                padding: "10px 40px",
                width: 230,
                alignSelf: "flex-end",
              }}
              variant="outlined"
              color="warning"
            >
              Enviar
            </LoadingButton>
          </Container>
        </Box>
      </Modal>
    </section>
  );
};

export default Login;
