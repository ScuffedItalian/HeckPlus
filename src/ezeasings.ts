import { easeInQuad, easeOutQuad } from "https://deno.land/x/remapper@3.0.0/src/easings.ts";
import {} from "https://deno.land/x/remapper@3.0.0/src/mod.ts"; // MAKE SURE TO USE THE LATEST REMAPPER VERSION HERE

export function InQuad(){
    return easeInQuad
}

export function OutQuad(){
    return easeOutQuad
}