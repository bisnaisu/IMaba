import styled from 'styled-components'

const Styles = styled.div`
    background-color: #FC9CD6;
    min-height: 100vh;

    .navbar-light{ background: #FF62D1 }
    .dropdown-item { background-color: #FC9CD6; border: none; }  

    .cardHeader {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;

        img {
            height: 125px;
            margin-right: 10px;
        }

        @media (max-width:576px) {
            img {
                height: 100px;
            }
        } 
    }

    .card { 
        a {
            font-weight: normal;
            color: #FF62D1; 
        }

        a:hover {
            color: #FC9CD6;
        }

        margin: .75rem 0;
        span img {
            height: 18px;
        }
        p { text-align: justify }
    }

    .card-columns {
        column-count: 1;

        .card:first-child {
            margin-top: 2rem;
        }

        .card:last-child {
            margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
            .card:nth-child(4) {
                margin-top: 2rem;
            }
        }
    }

    .card:hover{
        background: rgba( 255, 255, 255, .90);
        h2 { 
            opacity: .90;
        }
    }

    .cpgap {
        height: 10px;
    }

    @media (max-width:1024px) {
        .card {
            padding: .8rem;
        }
    } 
    
    @media (min-width: 768px) {
        .card-columns {
            column-count: 2;
        }
    }
`
export default Styles