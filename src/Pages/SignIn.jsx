import "./signIn.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "../components/footer/footer";
import FormLogin from "../components/form-login/FormLogin";



function SigIn(props) {
    return (
        <>
        <FormLogin onLogin ={props.onLogin} />
        <Footer />
        </>
    );
}

export default SigIn;