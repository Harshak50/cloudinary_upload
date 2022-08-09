import { Button } from "@mui/material"


const OutlinedButton = (props)=>{
    return(
        <div>
            <Button varient="outlined" className="button"  sx={{color:"#fc4520", border:"0.1px solid", margin:"20px", borderRadius:"5px"}}
                onClick={props.onClick}  >
              </Button>
        </div>
    )
}
export default OutlinedButton;