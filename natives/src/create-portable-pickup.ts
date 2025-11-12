import { EPickupType, ModelNames, ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:CREATE_PORTABLE_PICKUP
 *
 * 0x29F49A5884D2FD3C

 * 
 * This creates a pickup object that persists and is carried when collected and can be attached to peds, etc. You can only call this for pickups that
 * are set up to be portable in the pickups.meta data file. The OBJECT_INDEX that is returned can be used like any other object.
 * 
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EPickupType} type
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {boolean} snapToGround When created the pickup will be placed on the ground correctly
 * @param {ModelNames} customModel
 * @returns {ObjectIndex}  
 */
export function createPortablePickup(type: EPickupType | number, newCoorsX: number, newCoorsY: number, newCoorsZ: number, snapToGround: boolean = true, customModel: ModelNames = 0): ObjectIndex {
	const createPortablePickup_result = Citizen.invokeNative<ObjectIndex>('0x29F49A5884D2FD3C', type, newCoorsX, newCoorsY, newCoorsZ, snapToGround, customModel);
	return createPortablePickup_result;
}