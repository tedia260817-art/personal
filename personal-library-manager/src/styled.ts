import { Box, Card } from '@mui/material';
import Container from '@mui/material/Container';
import { lightGreen, purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export const LibContainer = styled(Container)`
    border: 1px solid ${purple[600]};
    border-radius: 8px;
    background-color: ${lightGreen[100]};
`;

export const LibCard = styled(Card)`
    width: auto;
    ${props=>props.theme.breakpoints.down('md')}{
        width: 100%;
    }
`;

export const FooterBox = styled(Box)`
    padding: 20px;
    margin-top: auto;
    text-align: center;
    background-color: ${props => props.theme.palette.background.paper};
`;