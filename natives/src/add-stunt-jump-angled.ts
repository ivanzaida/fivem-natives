import { StuntjumpId } from '@ivanzaida/structures'

/**
 * MISC:ADD_STUNT_JUMP_ANGLED
 *
 * 0x8CD9B5E60B98207A

 * 
 * Creates a new stunt jump.
 * 
 * The radius1 and radius2 might actually not be a radius at all, but that's what it seems to me testing them in-game. But they may be 'angle' floats instead, considering this native is named ADD_STUNT_JUMP_ANGLED.
 * 
 * Info about the specific 'parameter sections':
 * 
 * 
 * x1, y1, z1, x2, y2, z2 and radius1:
 * 
 * First coordinates are for the jump entry area, and the radius that will be checked around that area. So if you're not exactly within the coordinates, but you are within the outter radius limit then it will still register as entering the stunt jump. Note as mentioned above, the radius is just a guess, I'm not really sure about it's exact purpose.
 * 
 * 
 * x3, y3, z3, x4, y4, z4 and radius2:
 * 
 * Next part is the landing area, again starting with the left bottom (nearest to the stunt jump entry zone) coordinate, and the second one being the top right furthest away part of the landing area. Followed by another (most likely) radius float, this is usually slightly larger than the entry zone 'radius' float value, just because you have quite a lot of places where you can land (I'm guessing).
 * 
 * 
 * camX, camY and camZ:
 * 
 * The final coordinate in this native is the Camera position. Rotation and zoom/FOV is managed by the game itself, you just need to provide the camera location.
 * 
 * 
 * unk1, unk2 and unk3:
 * 
 * Not sure what these are for, but they're always `150, 0, 0` in decompiled scripts.
 * 
 * Here is a list of almost all of the stunt jumps from GTA V (taken from decompiled scripts): https://pastebin.com/EW1jBPkY
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} startMinX
 * @param {number} startMinY
 * @param {number} startMinZ
 * @param {number} startMaxX
 * @param {number} startMaxY
 * @param {number} startMaxZ
 * @param {number} startWidth
 * @param {number} endMinX
 * @param {number} endMinY
 * @param {number} endMinZ
 * @param {number} endMaxX
 * @param {number} endMaxY
 * @param {number} endMaxZ
 * @param {number} endWidth
 * @param {number} cameraPosX
 * @param {number} cameraPosY
 * @param {number} cameraPosZ
 * @param {number} reward
 * @param {number} set
 * @param {boolean} camOptional
 * @returns {StuntjumpId}  
 */
export function addStuntJumpAngled(startMinX: number, startMinY: number, startMinZ: number, startMaxX: number, startMaxY: number, startMaxZ: number, startWidth: number, endMinX: number, endMinY: number, endMinZ: number, endMaxX: number, endMaxY: number, endMaxZ: number, endWidth: number, cameraPosX: number, cameraPosY: number, cameraPosZ: number, reward: number, set: number = 0, camOptional: boolean = false): StuntjumpId {
	const addStuntJumpAngled_result = Citizen.invokeNative<StuntjumpId>('0x8CD9B5E60B98207A', startMinX, startMinY, startMinZ, startMaxX, startMaxY, startMaxZ, startWidth, endMinX, endMinY, endMinZ, endMaxX, endMaxY, endMaxZ, endWidth, cameraPosX, cameraPosY, cameraPosZ, reward, set, camOptional);
	return addStuntJumpAngled_result;
}