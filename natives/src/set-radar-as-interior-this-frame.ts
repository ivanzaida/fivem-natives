/**
 * HUD:SET_RADAR_AS_INTERIOR_THIS_FRAME
 *
 * 0xF42A811582CF3AE1

 * 
 * List of interior hashes: https://pastebin.com/1FUyXNqY
 * Not for every interior zoom > 0 available.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} interiorHash
 * @param {number} posX
 * @param {number} posY
 * @param {number} interiorRotation
 * @param {number} interiorLevel
 */
export function setRadarAsInteriorThisFrame(interiorHash: number = 0, posX: number = 0, posY: number = 0, interiorRotation: number = 0, interiorLevel: number = 0): void {
	const setRadarAsInteriorThisFrame_result = Citizen.invokeNative<void>('0xF42A811582CF3AE1', interiorHash, posX, posY, interiorRotation, interiorLevel);
	return setRadarAsInteriorThisFrame_result;
}