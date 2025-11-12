import { EntityIndex } from '@ivanzaida/structures'

/**
 * MISC:IS_AREA_OCCUPIED_SLOW
 *
 * 0x7405FEB2AD8926AC

 * 
 * Only cosinder using this if IS_AREA_OCCUPIED is not working properly. This version is more expensive, but should be more accurate.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minCoorsX
 * @param {number} minCoorsY
 * @param {number} minCoorsZ
 * @param {number} maxCoorsX
 * @param {number} maxCoorsY
 * @param {number} maxCoorsZ
 * @param {boolean} buildingFlag
 * @param {boolean} vehicleFlag
 * @param {boolean} pedFlag
 * @param {boolean} objectFlag
 * @param {boolean} dummyFlag
 * @param {EntityIndex} excludeEntity
 * @param {boolean} checkAlive
 * @returns {boolean}  
 */
export function isAreaOccupiedSlow(minCoorsX: number, minCoorsY: number, minCoorsZ: number, maxCoorsX: number, maxCoorsY: number, maxCoorsZ: number, buildingFlag: boolean, vehicleFlag: boolean, pedFlag: boolean, objectFlag: boolean, dummyFlag: boolean, excludeEntity: EntityIndex = null!, checkAlive: boolean = false): boolean {
	const isAreaOccupiedSlow_result = Citizen.invokeNative<boolean>('0x7405FEB2AD8926AC', minCoorsX, minCoorsY, minCoorsZ, maxCoorsX, maxCoorsY, maxCoorsZ, buildingFlag, vehicleFlag, pedFlag, objectFlag, dummyFlag, excludeEntity, checkAlive);
	return isAreaOccupiedSlow_result;
}