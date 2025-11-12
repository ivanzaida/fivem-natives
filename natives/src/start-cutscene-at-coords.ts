import { ECutsceneOptionFlags } from '@ivanzaida/structures'

/**
 * CUTSCENE:START_CUTSCENE_AT_COORDS
 *
 * 0x9B3A50426C952520

 * 
 * The given coords will act as the scene origin, round which all animations are authored.
 * 
 * flags: Usually 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {ECutsceneOptionFlags} flags
 */
export function startCutsceneAtCoords(posX: number, posY: number, posZ: number, flags: ECutsceneOptionFlags | number = 0): void {
	const startCutsceneAtCoords_result = Citizen.invokeNative<void>('0x9B3A50426C952520', posX, posY, posZ, flags);
	return startCutsceneAtCoords_result;
}