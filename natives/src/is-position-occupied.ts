import { EntityIndex } from '@ivanzaida/structures'

/**
 * MISC:IS_POSITION_OCCUPIED
 *
 * 0x5A3D7606D599F99A

 * 
 * `range`: The range, seems to not be very accurate during testing.
 * `p4`: Unknown, when set to true it seems to always return true no matter what I try.
 * `checkVehicle`: Check for any vehicles in that area.
 * `checkPeds`: Check for any peds in that area.
 * `ignoreEntity`: This entity will be ignored if it's in the area. Set to 0 if you don't want to exclude any entities.
 * The BOOL parameters that are documented have not been confirmed. They are just documented from what I've found during testing. They may not work as expected in all cases.
 * 
 * Returns true if there is anything in that location matching the provided parameters.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centerCoorsX
 * @param {number} centerCoorsY
 * @param {number} centerCoorsZ
 * @param {number} radius
 * @param {boolean} buildingFlag
 * @param {boolean} vehicleFlag
 * @param {boolean} pedFlag
 * @param {boolean} objectFlag
 * @param {boolean} dummyFlag
 * @param {EntityIndex} excludeEntity
 * @param {boolean} checkAlive
 * @returns {boolean}  
 */
export function isPositionOccupied(centerCoorsX: number, centerCoorsY: number, centerCoorsZ: number, radius: number, buildingFlag: boolean, vehicleFlag: boolean, pedFlag: boolean, objectFlag: boolean, dummyFlag: boolean, excludeEntity: EntityIndex = null!, checkAlive: boolean = false): boolean {
	const isPositionOccupied_result = Citizen.invokeNative<boolean>('0x5A3D7606D599F99A', centerCoorsX, centerCoorsY, centerCoorsZ, radius, buildingFlag, vehicleFlag, pedFlag, objectFlag, dummyFlag, excludeEntity, checkAlive);
	return isPositionOccupied_result;
}