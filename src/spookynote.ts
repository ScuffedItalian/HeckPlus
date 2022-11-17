import {Vec3, Note} from "https://deno.land/x/remapper@3.0.0/src/mod.ts"; // MAKE SURE TO USE THE LATEST REMAPPER VERSION HERE

export function SpookyNote(tStart: number, tEnd: number, NumberOfNote: number, colorOfNote: Vec3){
    for(let i = 0; i < NumberOfNote; i ++){
        const ScaryNote = new Note(tStart, tEnd)
        ScaryNote.animate.definitePosition = [10, 10, 10]
        ScaryNote.color = [0.26666666666666666,0.25882352941176473,0.27450980392156865]
    }
}


