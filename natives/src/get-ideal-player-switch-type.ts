import { ESwitchType } from '@ivanzaida/structures'

/**
 * STREAMING:GET_IDEAL_PLAYER_SWITCH_TYPE
 *
 * 0xE4B27F02458924A3

 * 
 * returns  the ideal type of player switch based on the distance from start to end positions.
 * 
 * x1, y1, z1 -- Coords of your ped model
 * x2, y2, z2 -- Coords of the ped you want to switch to
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} startPosX
 * @param {number} startPosY
 * @param {number} startPosZ
 * @param {number} endPosX
 * @param {number} endPosY
 * @param {number} endPosZ
 * @returns {ESwitchType}  
 */
export function getIdealPlayerSwitchType(startPosX: number, startPosY: number, startPosZ: number, endPosX: number, endPosY: number, endPosZ: number): ESwitchType {
	const getIdealPlayerSwitchType_result = Citizen.invokeNative<ESwitchType>('0xE4B27F02458924A3', startPosX, startPosY, startPosZ, endPosX, endPosY, endPosZ);
	return getIdealPlayerSwitchType_result;
}