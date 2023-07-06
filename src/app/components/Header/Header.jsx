import Image from "next/image";
import * as S from "./HeaderStyle";
import AssetHeader from "../../../../public/images/asset-header.png";

export default function Header(){
    return(
        <S.HeaderMain>
            <S.HeaderBox>
            <S.Button>Webnars exclusivos</S.Button>
            <h3>Menos conversinha,</h3>
            <S.H1>Mais conversão <Image src={AssetHeader} alt="Asset"/> </S.H1>
            <p>Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio</p>
            </S.HeaderBox>
        </S.HeaderMain>
    )
}