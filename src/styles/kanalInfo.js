import styled from 'styled-components'

const Styles = styled.div`
    background-color: #FC9CD6;
    min-height: 100vh;

    .navbar-light{
        background: #FF62D1;
    }
    
    span img {
        height: 18px;
    }

    .cardHeader {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .cardheader img {
        width: 125px;
    }

    .card-columns {
        column-count: 1;
    }

    .card:hover{
        background: rgba( 255, 255, 255, .50);
        h2 { 
            opacity: .75;
        }
    }
    
    @media (min-width: 768px) {
        .card-columns {
            column-count: 2;
        }
    }
`
export default Styles