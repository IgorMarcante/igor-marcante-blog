import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as S from "./styled"

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "igor-profile.png" }) {
                    childImageSharp {
                        gatsbyImageData(
                            width: 60
                            height: 60
                            placeholder: BLURRED
                            backgroundColor: "transparent"
                            layout: CONSTRAINED
                        )
                    }
                }
            }
        `
    );

    return (
        <S.AvatarWrapper
            image={avatarImage.childImageSharp.gatsbyImageData}

        />
    );
};

export default Avatar;