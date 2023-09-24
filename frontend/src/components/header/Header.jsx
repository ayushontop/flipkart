
import {AppBar, Toolbar, styled, Box,Typography} from '@mui/material';

const StyledHeader = styled(AppBar)`
    height: 55px;
    background: #ffffff;
    
    `
const Comp= styled(Box)`
    margin-left:12%;
    `
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})


    

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL= 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar>
            <Toolbar>
                <Comp>
                    <img src={logoURL} style={{ width: 75 }} />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
                </Comp>
                    
                
            </Toolbar>
        </AppBar>
    )
}
export default Header;