import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
 paragraph2: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph2.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph2.lineHeight};
  `,
titleXS: css`
   font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
   font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
   line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
 `,
}


const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
  ${propToStyle('marginTop')}
  /* ${function (props) {
    console.log('Props, funcao executou')
    return propToStyle('textAlign', props);
  }} */
  /* ${function(props) {
    return {
      textAlign: props.textAlign,
    }
    // return `
    //   text-align: ${props.textAlign};
    // `
  }} */
  /* ${(props) => TextStyleVariantsMap['paragraph1']} */
`;

export default function Text({ tag, variant, children, ...props }) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      // style
      // className
      // e ai vai
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};