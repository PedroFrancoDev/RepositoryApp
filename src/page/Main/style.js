import styled from 'styled-components';
import { keyframes, css } from 'styled-components';

export const Form = styled.form `
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    @media (max-width: 454px) {
        display: flex;
        flex-direction: column;

        input {
            width: 100%;
        }

        button {
            margin-left: 0;
            height: 30px;
            margin-top: 10px;
        }
    }



    input {
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        font-size: 16px;
        border-radius:4px;

        @media (max-width: 277px) {
            font-size: 12px;
        }

        @media (max-width: 241px) {
            font-size: 10px;
        }
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg) ;
    } to {
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading
})) `
    background: #7159c1;
    padding: 0 15px;
    border-radius: 4px;
    border: 0;
    margin-left: 10px;

    display: flex; 
    align-items: center;
    justify-content: center;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }

    svg {
        font-size: 14px;
        color: #fff;
    }

    ${props => props.loading && css`
        svg {
            animation: ${rotate} 1s linear infinite ;
        }
    `}
`;

export const List = styled.ul `
    list-style: none;
    margin-top: 15px;

    li {
        padding: 15px 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & + li {
            border-top: 1px solid #eee;
        }

        a {
            text-decoration: none;
            color: #7159c1;
            font-size: 14px;
        }

        button {
            color: #fff;
            border: none;
            margin-left: 10px;

            svg {
                color: #7159c1;
                font-size: 15px;

                &:hover {
                    color: #CE2646;
                }
            }
        } 
    }
`;