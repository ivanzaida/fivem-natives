/**
 * CUTSCENE:SET_CUTSCENE_ORIGIN_AND_ORIENTATION
 *
 * 0xB638C6C35B6CA9DF

 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} concatSection
 */
export function setCutsceneOriginAndOrientation(posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, concatSection: number): void {
	const setCutsceneOriginAndOrientation_result = Citizen.invokeNative<void>('0xB638C6C35B6CA9DF', posX, posY, posZ, rotX, rotY, rotZ, concatSection);
	return setCutsceneOriginAndOrientation_result;
}