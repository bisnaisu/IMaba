import styled from 'styled-components'

const Styles = styled.div`
    background-color: #20CB91;
    min-height: 100vh;

    .card img {
        width: 100%;
    }

    .navbar-light{
        background: #05AC72;
    }

    h2 {
        margin: 0 0 1.5rem 0;
    }

    .subcard {
        background: #C8ECE0;
        border-radius: 10px;
        padding: 1rem;
        box-shadow: none;

        p {
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
        }

        img {
            margin: 1rem 0;
            width: 100%;
        }
    }

    .btn-primary {
        margin: 0 .5rem;
        background: #FFF;
        color: #05AC72;
        border-color: #05AC72;
        font-weight: bold;
    }

    .btn-primary:hover {
        color: white;
        background-color: rgba(5, 172, 114, 0.5);
        border-color: rgba(5, 172, 114, 0.5);
    }

    .btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active {
        background: #05AC72;
        color: #FFF;
        border-color: #05AC72;
    }
`


export default Styles

