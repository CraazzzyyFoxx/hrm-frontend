import {useQuery} from "react-query";
import ResumeService from "@/services/ResumeService";


export const useGetResume = (resume_id: number) => {
    return useQuery({
        queryKey: ['create-resume', resume_id],
        queryFn: async () => await ResumeService.get(resume_id)
    })
}