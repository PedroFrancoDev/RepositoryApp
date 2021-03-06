import styled from 'styled-components';

const Container = styled.header`
    background: #fff;
    max-width: 700px;
    margin: 80px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

    @media (max-width: 758px) {
        margin: 80px 20px;
    }

    h1 {
        font-size: 20px;
        display: flex;
        align-items: center;

        @media (max-width: 241px) {
            font-size: 14ypx;
        }

        svg {
            margin-right: 10px;
        }
    }
`;

export default Container;