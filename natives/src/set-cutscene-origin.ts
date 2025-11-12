/**
 * CUTSCENE:SET_CUTSCENE_ORIGIN
 *
 * 0x20D6C2B867DA2FCA

 * 
 * p3 could be heading. Needs more research.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} heading
 * @param {number} concatSection
 */
export function setCutsceneOrigin(posX: number, posY: number, posZ: number, heading: number, concatSection: number): void {
	const setCutsceneOrigin_result = Citizen.invokeNative<void>('0x20D6C2B867DA2FCA', posX, posY, posZ, heading, concatSection);
	return setCutsceneOrigin_result;
}