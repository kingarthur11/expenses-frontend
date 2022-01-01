import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`
export const LeftView = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid red;
`
export const Top = styled.div`
    background: #fff;
    /* align-items: center;
    justify-content: center;
    display: flex; */
    > div {
        width: 100%;
    }
    h3 {
        left: 50px;
		top: 144px;
		position: absolute;
		overflow: visible;
		width: 115px;
		white-space: nowrap;
		text-align: left;
		font-family: Open Sans;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		color: rgba(38,38,38,1);
    }
    p {
        left: 50px;
		top: 188px;
		position: absolute;
		overflow: visible;
		width: 317px;
		height: 46px;
		line-height: 22px;
		margin-top: -4px;
		text-align: left;
		font-family: Open Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		color: rgba(89,98,106,1);
    }
    svg {
        fill: rgba(245,246,247,1);
        position: absolute;
		overflow: visible;
		width: 417px;
		height: 363px;
		left: 0px;
		top: 323px;
    }
    
`
export const Bottom = styled.div`
    background-color: rgba(245,246,247,1);
    align-items: center;
    justify-content: center;
    display: block;
    border: red solid 3px;

    .email {
        left: 64px;
		top: 397px;
		position: absolute;
		overflow: visible;
		width: 37px;
		white-space: nowrap;
		text-align: left;
		font-family: Open Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		color: rgba(149,152,154,1);
    }
    .password {
        left: 64px;
		top: 494px;
		position: absolute;
		overflow: visible;
		width: 64px;
		white-space: nowrap;
		text-align: left;
		font-family: Open Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		color: rgba(149,152,154,1);
    }

    .email-address {
        left: 64px;
		top: 397px;
		position: absolute;
		overflow: visible;
		width: 37px;
		white-space: nowrap;
		text-align: left;
		font-family: Open Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		color: rgba(149,152,154,1);
        filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.02));
		position: absolute;
		overflow: visible;
		width: 334px;
		height: 30px;
		left: 50px;
		top: 382px;
    }

    .sign-in {
        left: 183px;
		top: 560px;
		position: absolute;
		overflow: visible;
		width: 52px;
		white-space: nowrap;
		text-align: left;
		font-family: Open Sans;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		color: rgba(255,255,255,1);
        background: rgba(124,89,255,1);
        filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.02));
		position: absolute;
		overflow: visible;
		width: 334px;
		height: 66px;
		left: 50px;
		top: 479px;
    }

    .password-input {
        left: 64px;
		top: 397px;
		position: absolute;
		overflow: visible;
		width: 37px;
		white-space: nowrap;
		text-align: left;
		font-family: Open Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		color: rgba(149,152,154,1);
        filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.02));
		position: absolute;
		overflow: visible;
		width: 334px;
		height: 30px;
		left: 50px;
		top: 300px;
    }

    input {
        padding: 10px;
        margin: 9px;
    }
    
`

export const Image = styled.div`
    height: 100%;
    width: 100%;
    
    img {
        height: 100vh;
        background-image: cover;
        width: 700px;
    }
`