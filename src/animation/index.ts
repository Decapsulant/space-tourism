export const elementAnimation = {
    hiden:{
        opacity:0
    },
    visible:(custom:number)=>({
        opacity:1,
        transition:{delay: custom * 0.2 }
    })
}
export const elementTopAnimation = {
    hiden:{
        opacity:0,
        y:-50
    },
    visible:(custom:number)=>({
        opacity:1,
        y:0,
        transition:{delay: custom * 0.2 }
    })
}