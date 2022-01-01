import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`