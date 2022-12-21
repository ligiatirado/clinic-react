import styled from "styled-components";
import banner from "../../assets/images/banner.jpeg";

const Image = styled.img`
    max-width: 100%;
    height: 500px;
`


function Banner() {
    return(
        <Image src={banner} alt="gravida" />
    )
}

export default Banner;