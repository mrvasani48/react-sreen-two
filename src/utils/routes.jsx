import { lazy } from 'react'

/*    Inquiry    */
const InquiryScreen = lazy(() => import('pages/InquiryScreen'))
const LoadingScreen = lazy(() => import('pages/LoadingScreen'))

/*    Study Material    */
const StudyMaterialScreen = lazy(() => import('pages/StudyMaterialScreen'))

/*    Study Material    */
const StaffDetailsScreen = lazy(() => import('pages/StaffDetailsScreen'))

export const routes = [
    
    {
        path: '/',
        children : [
            {
                index: true,
                element: <InquiryScreen />
            }
        ]
    },
    {
        path: '/study-material',
        children : [
            {
                index: true,
                element: <StudyMaterialScreen />
            }
        ]
    },
    {
        path: '/staff-details',
        children : [
            {
                index: true,
                element: <StaffDetailsScreen />
            }
        ]
    },

    {
        path: '/loading',
        children : [
            {
                index: true,
                element: <LoadingScreen />
            }
        ]
    },
        
]