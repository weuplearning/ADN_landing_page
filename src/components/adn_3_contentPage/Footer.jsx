import Button from '@mui/material/Button';
// import backgroundFooter from '../../assets/footer.png'
import '../../styles/footer.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
    },
  });

  const buttonStyle = {
    maxWidth: '150px',
    maxHeight: '60px',
    minWidth: '150px',
    minHeight: '60px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    borderRadius: "25px",
    margin: '1em',
    color:'#ff9900'
  };

function Footer({count, setCount}) {
	return <div className='adn-footer' style={{ backgroundImage: `url(${window.props.images.footer})` }}>
        {/* <div className='adn-footer' style={{ backgroundImage: `url(${backgroundFooter})` }}>*/}
                    <ThemeProvider theme={theme}>
                        <Button 
                        style={buttonStyle} 
                        className='adn-footerl-button' 
                        variant="contained" 
                        color="primary"
                        onClick={() => setCount(count + 9)}
                        >
                            Voir plus
                        </Button>
                    </ThemeProvider>
            </div>
}

export default Footer