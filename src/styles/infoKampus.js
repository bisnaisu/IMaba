import styled from 'styled-components'

const Styles = styled.div`
    background-color: #FFDB00;
    min-height: 100vh;

    .navbar-light{ background: #FFB400 }
    .dropdown-item { background-color: #FFDB00; border: none }
    .dropdown-item.active, .dropdown-item:active { background-color: #FFB400 }

    h2 {
        margin: 0 0 1.5rem 0;
    }
    .subcard {
        background: #FAF5CB;
        border-radius: 10px;
        padding: 1rem;
        margin: 0 0 2rem 0;
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
        margin: 0 5px 10px 5px;
        background: #FFF;
        color: #FFB400;
        border-color: #FFB400;
        font-weight: bold;
    }

    .btn-primary:hover,
    .btn-secondary:hover {
        color: white;
        background-color: rgba(255, 180, 0, 0.5);
        border-color: rgba(255, 180, 0, 0.5);
    }

    .btn-primary:not(:disabled):not(.disabled).active,
    .btn-primary:not(:disabled):not(.disabled):active, 
    .btn-secondary {
        background: #FFB400;
        color: #FFF;
        border-color: #FFB400;
        font-weight: bold;
    }

    .btn-primary:not(:disabled):not(.disabled).active:focus,
    .btn-primary:not(:disabled):not(.disabled):active:focus,
    .btn-secondary:not(:disabled):not(.disabled).active:focus,
    .btn-secondary:not(:disabled):not(.disabled):active:focus {
        box-shadow:0 0 0 .2rem rgba(255, 180, 0, 0.5);
    }

    .carousel-control-next, .carousel-control-prev{
        width: 10%;
    }

    .carousel-control-next-icon, .carousel-control-prev-icon {
        width: 45px;
        height: 45px;

        @media (max-width:576px) {
            display: none;
        }
    }

    .carousel-control-next-icon {
        background-image: url(${require(`../assets/infoKampus/carousel-next.png`)});
    }
    .carousel-control-prev-icon {
        background-image: url(${require(`../assets/infoKampus/carousel-previous.png`)});
    }

    .carousel-indicators li {
        background-color: #FFB400;
    }

    ol {
        margin-bottom: 0;
    }

    @media (min-width: 1200px) {
        ol {
            margin-bottom: -1.5rem;
        }
    }

    #fakultas {
        .makara {
            position:relative;
            overflow:hidden;
            padding-bottom:100%;

            img {
                position: absolute;
                max-width: 100%;
                max-height: 100%;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
            }
        }
        
        @media (min-width:768px) {
            .col-md-2 {
                margin: 0 .5rem;
            }
        }
    }

    #petaUI {
        #petaBikun {
            width: 60%; 

            @media (max-width:767px) {
                width: 100%;
            }
        }
    }

    #landmark {
        @media (max-width: 768px) {
            .subcard {
                margin-top: 1rem!important;
            }
        }
    }

    #transportasi {
        @media (max-width: 768px) {
            h2 { 
                max-width: 90%;
                margin: 0 auto 1rem auto; 
            }
        }

        @media (max-width:990px) and (min-width:576px) {
            .card-deck {
                display: flex; 
                flex-direction: column;
            }
        }

        @media (max-width: 425px) {
            .subcard {
                margin: 1rem 0!important;
            }
        }
    }

    #infoKehidupan {
        #kostan {
            h2 { margin-bottom: .5rem!important }
            small { opacity: .5 }
            padding-right: 0!important;
            padding-left: 0!important;
            .carousel-lg, .carousel-md {
                .card-deck  {
                    width: 85%;
                    margin: 0 7.5%;
                }
            }
            .carousel-lg, .carousel-md { display: none }
            .carousel-sm { 
                display: block;
                margin: 0 1rem;
                .carousel-item { height: 320px }
            }
            @media (min-width: 768px) {
                .carousel-lg, .carousel-sm { display: none }
                .carousel-md { display: block }
            }
            @media (min-width: 992px) {
                .carousel-md, .carousel-sm { display: none }
                .carousel-lg { display: block }
            }
            .subcard { padding: 0; }
            .card-footer { 
                background: #FFB400;
                color: white;
                border: none;
                border-radius: 0 0 10px 10px;
                text-align: center;
            }
            .glue {
                background: transparent;
                box-shadow: none!important;
                padding:0;
                width: 100%;
                height: 300px;
                perspective: 1000px;
            }
            .flipcard {
                position: relative;
                width: 100%;
                height: 100%;
                transition: transform .8s;
                transform-style: preserve-3d;
            }
            .glue:hover .flipcard {
                transform: rotateY(180deg);
            }
            .flipcard-f, .flipcard-b {
                .card-body {
                    height: 250px;
                    display: flex; 
                    align-items: center;
                    img {
                        height: 210px;
                    }
                }
                position: absolute;
                width: 100%;
                height:100%;
                -webkit-backface-visibility: hidden; /* Safari */
                backface-visibility: hidden;
            }
            .flipcard-b{
                transform: rotateY(180deg);
            }
        }   
        #biaya {
            @media (min-width:768px) {
                .subcard { padding: 2rem }
            }
            .list-group-item {
                background: transparent;
                border: none;
            }
            .circle {
                font-weight: medium;
                width: 60px; 
                height: 60px;
                border-radius: 50%;
                background: #FFB400;
                margin-right: 1rem;
                display: flex; 
                align-items: center;
                justify-content: center;
                color: white;
            }     
            .biaya {
                @media (max-width:576px) { 
                    flex-direction: column; 
                    .circle { margin-bottom: 10px }
                }
            }
            @media (max-width:992px) {
                .row { flex-direction: column-reverse }
                img { max-width: 50%; margin: 10px 25%; }
            }
            @media (max-width:425px) {
                img { max-width: 70%; margin: 10px 15%; }
                .list-group-item { padding-left: 0; padding-right: 0; }
            }
        }
    }
    #beasiswa, #fitur {
        a {
            font-weight: bold;
            color: #FFB400; 
        }
    
        a:hover {
            color: #FFDB00;
        }
        @media (max-width:767px) {
            .subtitle {
                flex-direction: column-reverse;
            }
            .asset {
                margin-bottom: 1.5rem;
            }
        }
    }
    #fitur {
        a { font-weight: normal }
        .imgtopper {
            width: 30%;
            margin-top: -20%;
        }
        .card-columns {
            .card {
                margin-top: 0;
            }
            .card:not(:nth-child(odd)) {
                margin-top: 10%;
            }
        }
        @media (max-width:768px){
            .card-columns {
                column-count: 2;
                .subcard { margin-top: 10% }
                .subcard:nth-child(3n+1) {
                    margin-top: 0;
                }
            }            
        }
        @media (max-width:576px){
            .card-columns {
                column-count: 1;
                .subcard:not(:first-child) {
                    margin-top: 20%;
                }
            }
        }
    }
`
export default Styles