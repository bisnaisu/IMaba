import styled from 'styled-components'

const Styles = styled.div`
    background-color: #20CB91;
    min-height: 100vh;

    .card{ 
        img {
            width: 100%;
        }

        a {
            color: #05AC72;
        }

        a:hover {
            color: #20CB91;
        }
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

        ul {
            margin: 0;
        }
    }

    #kurikulum img {
        width: 90%;
        margin: 5%;
    }

    .btn-primary {
        margin: 0 .5rem;
        background: #FFF;
        color: #05AC72;
        border-color: #05AC72;
        font-weight: bold;
    }

    .btn-primary:hover,
    .btn-secondary:hover {
        color: white;
        background-color: rgba(5, 172, 114, 0.5);
        border-color: rgba(5, 172, 114, 0.5);
    }

    .btn-primary:not(:disabled):not(.disabled).active,
    .btn-primary:not(:disabled):not(.disabled):active, 
    .btn-secondary {
        background: #05AC72;
        color: #FFF;
        border-color: #05AC72;
        font-weight: bold;
    }

    @media (max-width:990px) and (min-width:576px) {
        #belajarApa {        

            .card-deck {
                display: flex; 
                flex-direction: column;

                .subcard {
                    margin-top: 1rem;
                }
            }

            .content {
                display: flex; 
                align-items: center;
                text-align: left;

                img {
                    width: 200px;
                    margin: 0 .5rem 0 0;
                }
            }
        }        
    }

    #ilkomSI {
        img {
            width: 90%;
            margin: 0 5%;
        }
    }

    #scele {

        .btn {
            margin: 10px; 
        }

        @media (max-width: 767px) {
            .row {
                flex-direction: column-reverse; 
            }
        }
    }
`


export default Styles

