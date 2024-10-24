import { createSlice } from "@reduxjs/toolkit";



const initialState = [
    {
      title: 'Group LeaderBoard',
      Leaderboard: [
        {
          Company: 'Houston Facility',
          Points: '52 Points / User - 97% Correct',
          Num: '1',
          icon: 'public/Leaderboard%20Arrow%20(1).svg',
        },
        {
          Company: 'Test Group',
          Points: '52 Points / User - 95% Correct',
          Num: '2',
          icon: 'public/Leaderboard Arrow.svg',
        },
        {
          Company: 'Sales Leadership',
          Points: '52 Points / User - 87% Correct',
          Num: '3',
          icon: 'public/Leaderboard%20Arrow%20(1).svg',
        },
        {
          Company: 'Northeast Region',
          Points: '52 Points / User - 87% Correct',
          Num: '4',
          icon: 'public/Leaderboard%20Arrow%20(1).svg',
        },
      ],
      Userboard: [
        {
          img: 'public/Thomas.svg',
          Name: 'Jesse Thomas',
          points: '637 Points - 98% Correct',
          Num: '1',
          icon: 'public/Leaderboard%20Arrow%20(1).svg',
        },
        {
          img: 'public/Thomas3.svg',
          Name: 'Thisal Mathiyazhagan',
          points: '637 Points - 89% Correct',
          Num: '2',
          icon: 'public/Leaderboard Arrow.svg',
        },
        {
          img: 'public/Thomas2.svg',
          Name: 'Helen Chuang',
          points: '637 Points - 88% Correct',
          Num: '3',
          icon: 'public/Leaderboard%20Arrow%20(1).svg',
        },
        {
          img: 'public/Thomas1.svg',
          Name: 'Lura Silverman',
          points: '637 Points',
          Num: '4',
          icon: 'public/Leaderboard%20Arrow%20(1).svg',
        },
      ],
    },
  ];
  



export const CustomersSlice = createSlice({
    name:'customers',
    initialState,
    reducers:{
       
    }
})


// export const {updateUser}=ListSlice.actions
export default CustomersSlice.reducer;