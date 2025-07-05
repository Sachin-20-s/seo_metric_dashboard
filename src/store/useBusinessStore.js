import {create} from 'zustand';

const useBusinessStore=create((set)=>({
    name:'',
    location:'',
    rating:'',
    reviews:'',
    headline:'',
    checkName:false,
    checkLocation:false,
    setName:(name)=>set({name}),
    setLocation:(location)=>set({location}),
    setCheckName:(checkName)=>set({checkName}),
    setCheckLocation:(checkLocation)=>set({checkLocation}),
    updateBusinessData:({rating,reviews,headline})=>set({rating,reviews,headline}),
    updateHeadline:(headline)=>set({headline}),
}));

export default useBusinessStore