import woppLogo from "@/assets/logo.svg";
import photographer from "@/assets/login/photographer.png";
import styles from "./login.module.css";
import { FormControl, InputLabel } from "@mui/material";

const Login = () => {
  return (
    <section className={styles.wrapper}>
      <aside>
        <img src={woppLogo} alt="Logo Wopp" />
      </aside>
      <section>
        <form action="">
          <h1>Inicio de sesión</h1>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
              Bootstrap
            </InputLabel>
          </FormControl>
          <input type="password" />
        </form>
        <img src={photographer} alt="Foto de un fotógrafo" />
      </section>
    </section>
  );
};

export default Login;
