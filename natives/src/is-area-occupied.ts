import { EntityIndex } from '@ivanzaida/structures'

/**
 * MISC:IS_AREA_OCCUPIED
 *
 * 0xEBC91D4C68FF5260

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
export function isAreaOccupied(minCoorsX: number, minCoorsY: number, minCoorsZ: number, maxCoorsX: number, maxCoorsY: number, maxCoorsZ: number, buildingFlag: boolean, vehicleFlag: boolean, pedFlag: boolean, objectFlag: boolean, dummyFlag: boolean, excludeEntity: EntityIndex = null!, checkAlive: boolean = false): boolean {
	const isAreaOccupied_result = Citizen.invokeNative<boolean>('0xEBC91D4C68FF5260', minCoorsX, minCoorsY, minCoorsZ, maxCoorsX, maxCoorsY, maxCoorsZ, buildingFlag, vehicleFlag, pedFlag, objectFlag, dummyFlag, excludeEntity, checkAlive);
	return isAreaOccupied_result;
}