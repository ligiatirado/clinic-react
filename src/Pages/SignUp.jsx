import "./signUp.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "../components/footer/footer";
import FormSignUp from "../components/form-signup/FormSignUp";


function SignUp() {
    return (
        <>
            <FormSignUp />
            <Footer />
        </>
    );
}

export default SignUp;