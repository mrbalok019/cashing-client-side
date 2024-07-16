import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layouts/MainLayout'




const router = createBrowserRouter(
    
    [
        {
        
        
        path:'/',
        element: <MainLayout></MainLayout>,
        // errorElement: <ErrorPage/>,
        children:[
            {   
                path:'/',
                element: <Home></Home>,
                
            },
         
            // {
            //     path:'/login',
            //     element: <Login></Login>,
            // },
          
            // {
            //     path:'/registration',
            //     element: <PrivateRoutes2><Registration></Registration></PrivateRoutes2>,
            // },
                  

           


        ]
    },
    // {
    //     path: 'dashboard',
    //     element: <PrivateRoutes> <DashboardLayout/> </PrivateRoutes> ,
    //     children:[
    //         {
    //             path:'',
    //             element: <Profile></Profile>
    //         },
           
    //     ]
    // }
    ]);

    export default router;