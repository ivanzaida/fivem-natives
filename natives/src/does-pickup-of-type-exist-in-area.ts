import { EPickupType } from '@ivanzaida/structures'

/**
 * OBJECT:DOES_PICKUP_OF_TYPE_EXIST_IN_AREA
 *
 * 0x6AA6E814FE2A18C2

 * 
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EPickupType} pickupType
 * @param {number} coordsX
 * @param {number} coordsY
 * @param {number} coordsZ
 * @param {number} radius
 * @returns {boolean}  
 */
export function doesPickupOfTypeExistInArea(pickupType: EPickupType | number, coordsX: number, coordsY: number, coordsZ: number, radius: number): boolean {
	const doesPickupOfTypeExistInArea_result = Citizen.invokeNative<boolean>('0x6AA6E814FE2A18C2', pickupType, coordsX, coordsY, coordsZ, radius);
	return doesPickupOfTypeExistInArea_result;
}