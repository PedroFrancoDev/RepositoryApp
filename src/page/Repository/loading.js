import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Loading = styled.div`
    color: white;
    font-size: 25px;
    font-weight: bold;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    svg {
        margin-top: 15px;
        animation: ${rotate} 1s linear infinite;
    }
`;

export const Owner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: spa;

    img {
        width: 120px;
        object-fit: cover;
        border-radius: 50%;
    }

    h1 {
        font-size: 24px;
        margin-top: 5px;
    }

    p {
        margin-top: 5px;
        color: #666;
        max-width: 400px;
        font-size: 14px;
        line-height: 1.4;
        text-align: center;
    }

    svg {
        color: #7159c1;
        font-size: 40px;
        box-shadow: 2px 2px 1px 2px rgba(71,90,59, 0.2);
        border-radius: 50%;
    }

    small {
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }
`;

export const IssueList = styled.ul`
padding-top: 30px;
margin-top: 30px;
list-style: none;

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }
    }

    img {
        height: 36px;
        width: 36px;
        border-radius: 50%;
        border: 2px solid #eee;
    }

    div {
        flex: 1;
        margin-left: 15px;

        strong {
            font-size: 16px;

            a {
                text-decoration: none;
                

                &:hover {
                    color: #7159c1;
                }
            }

            span {
                background: #eee;
                color: #333;
                border-radius: 2px;
                font-size: 12px;
                font-weight: 600;
                line-height: 15px;
                padding: 3px 4px;
                margin-left: 10px;
            }
        }

        p {
            margin-top: 5px;
            font-size: 12px;
            color: #999;
        }
    }
`;
