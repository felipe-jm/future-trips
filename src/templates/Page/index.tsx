import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

export type PageTemplateProps = {
  heading: string;
  body: string;
};

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>{heading}</S.Heading>

    <S.Body dangerouslySetInnerHTML={{ __html: body }} />
  </S.Content>
);

export default PageTemplate;
