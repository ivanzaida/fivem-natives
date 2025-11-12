import { ModelNames, SaveHouseIndex } from '@ivanzaida/structures'

/**
 * MISC:REGISTER_SAVE_HOUSE
 *
 * 0x869634E57B4F3343

 * 
 * returns savehouseHandle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} heading
 * @param {string} roomName
 * @param {number} mapAreaName
 * @param {ModelNames} playerModelNameHash
 * @returns {SaveHouseIndex}  
 */
export function registerSaveHouse(coorsX: number, coorsY: number, coorsZ: number, heading: number, roomName: string, mapAreaName: number, playerModelNameHash: ModelNames = 0): SaveHouseIndex {
	const registerSaveHouse_result = Citizen.invokeNative<SaveHouseIndex>('0x869634E57B4F3343', coorsX, coorsY, coorsZ, heading, roomName, mapAreaName, playerModelNameHash);
	return registerSaveHouse_result;
}