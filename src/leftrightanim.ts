import {Interpolation, notesBetween} from "https://deno.land/x/remapper@3.0.0/src/mod.ts"; // MAKE SURE TO USE THE LATEST REMAPPER VERSION HERE

/**
 * 
 * @param TimeStart Time the animation starts
 * @param TimeEnd Time the animation ends
 * @param NoteNJS The NJS value of the notes (APPLYS FOR BOTH LEFT AND RIGHT)
 * @param Easings The easing you'd like to be used! 
 * @param RX Right Lane X Value
 * @param RY Right Lane Y Value
 * @param RZ Right Lane Z Value
 * @param LX Left Lane X Value
 * @param LY Left Lane Y Value
 * @param LZ Left Lane Z Value
 */


export function LeftRightAnimPosition(TimeStart: number, TimeEnd: number, NoteNJS: number,  Easings: Interpolation, RX: number, RY: number, RZ: number,LX: number, LY: number, LZ: number){
  // FILLER
  notesBetween(TimeStart, TimeEnd, (note) => {
    //Right 2 lanes
    if(note.x == 3 && note.y == 2){
      note.animate.position = [[RX, RY, RZ, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 3 && note.y == 1){
      note.animate.position = [[RX, RY, RZ, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 3 && note.y == 0){
      note.animate.position = [[RX, RY, RZ, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 2 && note.y == 2){
      note.animate.position = [[RX, RY, RZ, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 2 && note.y == 1){
      note.animate.position = [[RX, RY, RZ, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 2 && note.y == 0){
      note.animate.position = [[RX, RY, RZ, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    //Left 2 lanes
    if(note.x == 0 && note.y == 2){
      note.animate.position = [[LX, LY, LZ, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 0 && note.y == 1){
      note.animate.position = [[LX, LY, LZ, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 0 && note.y == 0){
      note.animate.position = [[LX, LY, LZ, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 1 && note.y == 2){
      note.animate.position = [[LX, LY, LZ, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 1 && note.y == 1){
      note.animate.position = [[LX, LY, LZ, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 1 && note.y == 0){
      note.animate.position = [[LX, LY, LZ, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
  })



}


/*
 notesBetween(TimeStart, TimeEnd, (note) => {
    //Right 2 lanes
    if(note.x == 3 && note.y == 2){
      note.animate.position = [[0, -50, 0, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 3 && note.y == 1){
      note.animate.position = [[0, -50, 0, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 3 && note.y == 0){
      note.animate.position = [[0, -50, 0, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 2 && note.y == 2){
      note.animate.position = [[0, -50, 0, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 2 && note.y == 1){
      note.animate.position = [[0, -50, 0, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    if(note.x == 2 && note.y == 0){
      note.animate.position = [[0, -50, 0, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = NoteNJS
    }
    //Left 2 lanes
    if(note.x == 0 && note.y == 2){
      note.animate.position = [[0, 50, 0, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = 10
    }
    if(note.x == 0 && note.y == 1){
      note.animate.position = [[0, 50, 0, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = 10
    }
    if(note.x == 0 && note.y == 0){
      note.animate.position = [[0, 50, 0, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = 10
    }
    if(note.x == 1 && note.y == 2){
      note.animate.position = [[0, 50, 0, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = 10
    }
    if(note.x == 1 && note.y == 1){
      note.animate.position = [[0, 50, 0, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = 10
    }
    if(note.x == 1 && note.y == 0){
      note.animate.position = [[0, 50, 0, 0], [0, 0, 0, 0.3, Easings]]
      note.NJS = 10
    }
  })



}
*/