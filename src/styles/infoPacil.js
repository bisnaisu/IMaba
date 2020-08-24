import styled from 'styled-components'

const Styles = styled.div`
    background-color: #66CCFF;
    min-height: 100vh;

    .navbar-light{ background: #6699FF }
    .dropdown-item { background-color: #66CCFF; border: none; }
    .dropdown-item.active, .dropdown-item:active { background-color: #6699FF }

    h2 {
        margin: 0 0 1.5rem 0;
    }

    .btn-primary {
        margin: 0 5px 10px 5px;
        background: #FFF;
        color: #6666FF;
        border-color: #6666FF;
        font-weight: bold;
    }

    .btn-primary:hover,
    .btn-secondary:hover {
        color: white;
        background-color: rgba(102, 102, 255, 0.5);
        border-color: rgba(102, 102, 255, 0.5);
    }

    .btn-primary:not(:disabled):not(.disabled).active,
    .btn-primary:not(:disabled):not(.disabled):active, 
    .btn-secondary {
        background: #6666FF;
        color: #FFF;
        border-color: #6666FF;
        font-weight: bold;
    }

    .btn-primary:not(:disabled):not(.disabled).active:focus,
    .btn-primary:not(:disabled):not(.disabled):active:focus,
    .btn-secondary:not(:disabled):not(.disabled):focus,
    .btn-secondary:not(:disabled):not(.disabled):focus {
        box-shadow:0 0 0 .2rem rgba(102, 102, 255, 0.5);
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
        background-image: url(${require(`../assets/infoPacil/carousel-next.png`)});
    }
    .carousel-control-prev-icon {
        background-image: url(${require(`../assets/infoPacil/carousel-prev.png`)});
    }

    .carousel-indicators li {
        background-color: #6633FF;
    }

    .subcard {
        background: #E0E6F5;
        border-radius: 10px;
        padding: 1rem;
        margin: 0 0 1.5rem 0;
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
    .card-columns {
        column-count: 1;
    }
    @media (min-width: 768px) {
        .card-columns { column-count: 2 }
        .subcard { padding: 1.5rem }
    }

    #budaya {
        text-align: justify;
    }

    #pacilLife {  
        .kiri, .kanan {
            .row { height: 130px }
            @media (max-width: 576px) {
                .row { 
                    height: fit-content;
                    flex-direction: row-reverse; 
                }
            }
        }     
        .kiri {
            text-align: right;
            @media (max-width:768px) { 
                text-align: left;               
                .row { 
                    flex-direction: row-reverse; 
                }
            }
            @media (max-width: 576px) {
                .row { flex-direction: row }
            }
        }        
        
        @media (min-width:768px) {
            padding: 2rem 5rem 2rem 5rem; 
        }
    }
    .asset {
        width: 100%;
        @media (max-width:768px) {
            width: 60%;
            margin: 0 20% 1rem 20%;
        }
    }
    #ngoding101 {        
        .tips {
            font-weight: 500;
            .circle {
                width: 60px; 
                height: 60px;
                border-radius: 50%;
                background: #6666FF;
                margin-right: 1rem;
                display: flex; 
                align-items: center;
                justify-content: center;
                color: white;
            }
        }
        .resource {
            font-weight: 500; 
            text-align: center;
            .headcard {
                width: 100%; 
                height: 2.5rem;
                border-radius: 10px;
                border: 1px solid #E0E6F5;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 0 1rem 0;
            }
            .subcard {
                padding: 0;
                margin: 0 15px 2rem 15px;
                img { margin: 0 }
                .card-footer { 
                    background-color: transparent; 
                    border-top: none;
                    padding-top: 0; 
                }
                @media (max-width:768px) {
                    .card-footer { padding: 0 0 1rem 0 }
                    margin: 0 5px 2rem 5px;
                }  
                a {
                    font-weight: medium;
                    color: #000; 
                }
        
                a:hover {
                    color: #66CCFF;
                }              
            }
        }
        @media (max-width:576px) {            
            .card-deck {
                width: 100%;
                .card { 
                    width: calc(50% - 1rem);
                    margin: .5rem;
                }
                display: flex;
                flex-flow: row wrap;
                margin: 0 0 1rem 0;
            }
            .ddp p { padding: 0 5% }
        }
        @media (min-width:768px) {
            padding: 2rem 5rem 2rem 5rem; 
            .ddp p { max-width: 80%; margin: 0 10% 20px 10%; }
        }
    }
    #denah {
        .subcard {
            padding: 0;
            .card-header {                
                background-color: #6699FF;
                border-bottom: 1px solid transparent;
                border-radius: 10px 10px 0 0;
                .nav-link {
                    color: #6666FF;
                    background-color: #A3BFFA;
                    border: 2px solid #6699FF;
                    border-bottom: 2px solid transparent;
                    border-radius: 10px 10px 0 0;
                }
                .nav-link.active {
                    background-color: #E0E6F5;
                }
            }
            .card-body { padding: 1rem; }
        }
        li {
            list-style: none;
            margin-left: -20px;
        }
        .navigasi {
            justify-content: center;
            span { cursor: pointer; }
            h3 { 
                text-align: center; 
                margin: 0 3rem;
            }
        }
        .row {
            @media (max-width:992px) {
                justify-content: center;
            }
        }
    }
    #yelyel {
        @media (max-width:576px) { padding: 1rem }
        .card-deck {            
            @media (max-width:768px) { 
                flex-direction: column;
                .card { margin: 10px 15px } 
            }    
            .card {
                margin: 0 15px 10px 15px;
                @media (max-width:576px) { margin: .5rem 0 } 
            }                   
        }
    }

    #badanOtonom, #kepanitiaan {
        p { text-align: justify }
        .card-columns {
            column-count: 1;

            @media (min-width: 768px) {
                column-count: 2;
            }
        }
        .cardHeader {
            h2 { margin: 0 }
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            @media (max-width: 374px) {
                flex-direction: column;
                justify-content: center;
                text-align: center;
            }
    
            img {
                height: 100px;
                width: auto;
                margin: 0 1rem 0 0;
                @media (max-width:992px) { 
                    height: 85px;
                    margin: 0 .5rem 0 0; 
                }
            }
        }        
        .subcard { 
            @media (max-width:768px) {
                padding: 0;
                margin-bottom: 1.5rem; 
            }
            @media (max-width: 576px) { margin-bottom: 1rem; }
        }        
        span img {
            height: 18px;
            width: auto;
            margin: 0;
        }
        a {
            font-weight: normal;
            color: #6699FF; 
        }

        a:hover {
            color: #66CCFF;
        }
    }
    #funfacts {
        ol { margin-bottom: -1rem }
        .asset {
            width: 100%; 
            margin-bottom: 0;
            @media (max-width:767px) { width: 60%; margin: 0 20% 0 20%; }
        }
        .fact {
            .funfacts {
                width: 80%;
                margin: 0 10%;
                display: flex;
                align-items: center;
                text-align: right;
                img { width: 100% }
                @media (max-width:768px) {
                    width: 100%; 
                    margin: 0;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    img { width: 70%; margin-left: 15%; margin-right: 15%; }
                }                
            }
        }              
    }
`
export default Styles