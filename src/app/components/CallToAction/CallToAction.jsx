import Image from "next/image";
import CTAImage from "../../../../public/images/comparativo_img_CTA.png";
import SeloRD from "../../../../public/images/selo_RD.png";
import Rating from "../../../../public/images/rating.webp";
import NoCard from "../../../../public/images/no-card-dark.webp";
import * as S from "./CallToActionStyle";

export default function CallToAction(){
    return(
        <S.CallToActionMain>
            <Image src={CTAImage} 
            width={500}
            alt="CTAImage"/>
            <S.CallToActionText>
                <h1>Pronto para triplicar sua geração de Leads?</h1>
                <p>Criação e ativação em 4 minutos</p>
                <S.CallToActionButtonBox>
                    <button>Ver demonstração</button>
                    <Image src={SeloRD} alt="Selo RD"/>
                </S.CallToActionButtonBox>
                <S.CallToActionConditions>
                    <Image src={NoCard} alt ="No card image"/>
                    <p>Não é necessário cartão de crédito | </p>
                    <Image src={Rating} alt="Avaliação"/>
                    <p>4.9/5 média de satisfação</p>
                </S.CallToActionConditions>
            </S.CallToActionText>
        </S.CallToActionMain>
    )
}