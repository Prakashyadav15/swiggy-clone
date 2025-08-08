import {useParams} from "react-router-dom";

function ProjectDetails(){
    const {id}=useParams()


const Projects=[
            {
            id:1,
            project:"userprofile",
            description:"userprofile to creat a profile"
        },
        {
            id:2,
            project:"captial",
            description:"to find the country by captial"

        },
        {
            id:3,
            project:"comment",
            description:"to store comments"

        }
]
   const currentproject=Projects[id]
   return(
    <>
    <h1>{currentproject?.project}</h1>
    <p>{currentproject?.description}</p>
    </>
   )

}
export default ProjectDetails