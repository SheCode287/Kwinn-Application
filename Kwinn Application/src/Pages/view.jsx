import { Box, Typography, Grid2, Button } from "@mui/material"
import { useSelector } from "react-redux";
import Sidebars from "./Sidebars";

function View() {
    const {
        studentData
    } = useSelector((state) => state.posts)
    console.log('studentData', studentData.fullName)
    return (
            
        <Box sx={{display:'flex', gap:'10%'}}>
            <Sidebars/>
            <Box >
                <Grid2  padding={'10px'} borderRadius={'4px'} bgcolor={'#782CC3'} width={'100px'} color={'white'} marginLeft={'70%'}>Registered Students:{studentData.length}</Grid2>
                 {studentData.map((student)=>{
                    return(
                        <Box display={'flex'} alignItems={'center'}  flexDirection={'column'} gap={'4px'} margin={"1%"}  key={student.studentID}  >
                        <Typography>Details</Typography>
                        <Grid2 padding={'18px'} borderRadius={'4px'} bgcolor={'#0000001a'} width={'50vw'}>Student fULL NAME:{student.fullName}</Grid2>
                        <Grid2 padding={'20px'} borderRadius={'4px'} bgcolor={'#0000001a'} width={'50vw'}>studentID:{student.studentID}</Grid2>
                        <Grid2 padding={'20px'} borderRadius={'4px'} bgcolor={'#0000001a'} width={'50vw'}>courseOfStudy:{student.courseOfStudy}</Grid2>
                        <Grid2 padding={'20px'} borderRadius={'4px'} bgcolor={'#0000001a'} width={'50vw'}>level:{student.level}</Grid2>
                    </Box>)
            
            
                  })}
            </Box>
        </Box>
          
    )
}

export default View
