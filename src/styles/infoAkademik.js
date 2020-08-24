import styled from 'styled-components'

const Styles = styled.div`
    background-color: #20CB91;
    min-height: 100vh;
    .navbar-light{ background: #05AC72 }
    .dropdown-item { background-color: #20CB91; border: none; }
    .dropdown-item.active, .dropdown-item:active { background-color: #05AC72 }
    h2 { margin: 0 0 1.5rem 0; }

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

    #kurikulum {
        img {
            width: 90%;
            margin: 5%;
        }
        .btnwrapper button { margin: 5px }
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

    .btn-primary:not(:disabled):not(.disabled).active:focus,
    .btn-primary:not(:disabled):not(.disabled):active:focus {
        box-shadow:0 0 0 .2rem rgba(5, 172, 114, 0.5);
    }

    .carousel-control-next, .carousel-control-prev{
        width: 5%;
    }

    .carousel-control-next-icon, .carousel-control-prev-icon {
        width: 45px;
        height: 45px;

        @media (max-width:576px) {
            display: none;
        }
    }

    .carousel-control-next-icon {
        background-image: url(${require(`../assets/infoAkademik/carousel-next.png`)});
    }
    .carousel-control-prev-icon {
        background-image: url(${require(`../assets/infoAkademik/carousel-prev.png`)});
    }

    .carousel-indicators li {
        background-color: #05AC72;
    }

    ol {
        margin-bottom: -.5rem;
    }

    @media (min-width: 1200px) {
        ol {
            margin-bottom: -1rem;
        }
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

    #matkul {
        h3 { margin-bottom: 2px }
        p { text-align: justify }
        .badge { 
            width: 60px; 
            height: 25px; 
            border-radius: .5rem; 
            margin: 4px 3px 15px; 
            display: flex; 
            align-items: center;
            justify-content: center; 
        }
        .badge-primary { background-color:#48DFC4 }
        .badge-secondary { background-color:#13EBA2 }
        .badge-success { background-color:#05AC72 }
        .badgewrapper {
            display: flex;
            justify-content: center;
        }
        .carousel-xl, .carousel-lg {
            .card-deck  {
                width: 90%;
                margin: 0 5%;
                min-height: 300px;
            }
        }
        .carousel-xl {
            .card-deck { min-height: 355px; }
            // .term1 {
            //     width: 35%; 
            //     margin: 0 32.5%;
            // }
            .term1, .term2 {
                width: 70%; 
                margin: 0 15%;
            }
        }
        .carousel-md .card-deck,
        .carousel-sm .card {
            min-height: 340px;
        }
        // .carousel-lg .term1, 
        // .carousel-md .term1 {
        //     width: 50%;
        //     margin: 0 25%;             
        // }
        .carousel-xl, .carousel-lg, .carousel-md { display: none }
        .carousel-sm { 
            display: block;
            margin: 0 1rem;
            .card {
                margin-bottom: 1rem;
            }
        }
        .comingsoon { min-height: 340px }
        @media (min-width: 768px) {
            .carousel-xl, .carousel-lg, .carousel-sm { display: none }
            .carousel-md { display: block }
        }
        @media (min-width: 992px) {
            .carousel-xl, .carousel-md, .carousel-sm { display: none }
            .carousel-lg { display: block }
            .comingsoon { min-height: 300px }
        }
        @media (min-width: 1200px) {
            .carousel-lg, .carousel-md, .carousel-sm { display: none }
            .carousel-xl { display: block }
            .comingsoon { min-height: 300px }
        }
        @media (max-width:375px) {
            padding: 1rem 0;
            .comingsoon { margin: 1rem }
        }
    }

    #ilkomSI {
        img {
            width: 90%;
            margin: 0 5%;
        }
    }

    #scele {
        p { text-align: justify }
        .btn {
            margin: 10px; 
        }

        @media (max-width: 767px) {
            .row {
                flex-direction: column-reverse; 
            }
            .asset {
                margin-bottom: 1.5rem;
            }
        }
    }
`


export default Styles

