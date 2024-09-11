import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_SHOOTING_IN_AREA
 *
 * 0x6051CE9D47B0B904

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} minX
 * @param {number} minY
 * @param {number} minZ
 * @param {number} maxX
 * @param {number} maxY
 * @param {number} maxZ
 * @param {boolean} highlightArea
 * @param {boolean} do3DCheck
 * @returns {boolean}  
 */
export function isPedShootingInArea(ped: PedIndex, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, highlightArea: boolean, do3DCheck: boolean = true): boolean {
	const isPedShootingInArea_result = Citizen.invokeNative<boolean>('0x6051CE9D47B0B904', ped, minX, minY, minZ, maxX, maxY, maxZ, highlightArea, do3DCheck);
	return isPedShootingInArea_result;
}