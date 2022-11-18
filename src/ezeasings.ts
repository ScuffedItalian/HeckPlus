
import {} from "https://deno.land/x/remapper@3.0.0/src/mod.ts"; // MAKE SURE TO USE THE LATEST REMAPPER VERSION HERE
/**
 * 
 * @author Swifter
 */
export function InQuad(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return amountOfChange * (elapsed / duration) * elapsed + initialValue;
}

export function OutQuad(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number {
	return -amountOfChange * (elapsed / duration) * (elapsed - 2) + initialValue;
}