import {Note} from "https://deno.land/x/remapper@3.0.0/src/mod.ts"; // MAKE SURE TO USE THE LATEST REMAPPER VERSION HERE

export function SpookyNote(tStart: number, tEnd: number, NumberOfNote: number){
    for(let i = 0; i < NumberOfNote; i ++){
        const ScaryNote = new Note(tStart, tEnd)
        ScaryNote.type = 1
        ScaryNote.animate.definitePosition = [10, 10, 10]
        ScaryNote.push(true, true)
    }
}



