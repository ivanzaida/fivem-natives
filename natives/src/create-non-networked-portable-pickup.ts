import { EPickupType, ModelNames, ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:CREATE_NON_NETWORKED_PORTABLE_PICKUP
 *
 * 0x77573CD394E8C3B1

 * 
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EPickupType} type
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {boolean} snapToGround
 * @param {ModelNames} customModel
 * @returns {ObjectIndex}  
 */
export function createNonNetworkedPortablePickup(type: EPickupType | number, newCoorsX: number, newCoorsY: number, newCoorsZ: number, snapToGround: boolean = true, customModel: ModelNames = 0): ObjectIndex {
	const createNonNetworkedPortablePickup_result = Citizen.invokeNative<ObjectIndex>('0x77573CD394E8C3B1', type, newCoorsX, newCoorsY, newCoorsZ, snapToGround, customModel);
	return createNonNetworkedPortablePickup_result;
}