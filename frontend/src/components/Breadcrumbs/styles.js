import styled from "styled-components";

const Breadcrumbs = styled.div`
    padding: 16px;

    ul {
        display: flex;
        list-style: none;

        span {
            color: #999999;
            display: inline-block;
            padding: 0 10px;
        }

        a {
            text-decoration: none;
            color: #999999;
            transition: color 300ms;

            &:hover {
                color: #666666;
            }
        }

        & li:last-child {
            pointer-events: none;
        }
    }
`;

export default Breadcrumbs;
