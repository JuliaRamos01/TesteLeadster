import Image from "next/image";
import * as S from "./HeaderStyle";
import Logo from "../../../../public/images/logo.png"

export default function Header (){
    return(
        <S.HeaderMain>
            <Image src={Logo} alt="Logo"/>
        </S.HeaderMain>
    )
}