import {Wall, Vec3, rand} from "https://deno.land/x/remapper@3.0.0/src/mod.ts"; // MAKE SURE TO USE THE LATEST REMAPPER VERSION HERE

export function AnimatedStars(amountN: number, TimeStart: number, DurationWall: number, StarScale: Vec3, Rand1: number, Rand2: number,  StarColorR: number, StarColorG: number, StarColorB: number){
    for(let StarNum = 0; StarNum < amountN; StarNum++){
        const StarWall = new Wall(TimeStart, DurationWall, 1, 1, 1, 1);
        StarWall.scale = StarScale;
        StarWall.animate.definitePosition = [rand(Rand1, Rand2), rand(Rand1, Rand2), rand(Rand1, Rand2)]
        StarWall.rotation = [rand(-360, 360),rand(-360, 360),rand(-360, 360)]
        StarWall.color = [StarColorR / 255, StarColorG / 255, StarColorB / 255]
        StarWall.animate.dissolve = [[0, 0], [0.2, 0.2], [1, 0.4], [1, 0.6], [1, 0.8], [0, 1]]
       
        StarWall.push();
    }
    
}