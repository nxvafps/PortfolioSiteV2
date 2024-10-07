import styled from 'styled-components';

const EmbedContainer = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    z-index: 999;
`;

const YtEmbed = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    z-index: 999;
`;

export { EmbedContainer, YtEmbed };