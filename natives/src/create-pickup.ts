import { EPickupType, ModelNames, PickupIndex } from '@ivanzaida/structures'

/**
 * OBJECT:CREATE_PICKUP
 *
 * 0x8D4CAF9A056EA9E4

 * 
 * Creates a pickup spawner which can be referenced by the script and will spawn a pickup whenever the player gets near. This spawner can also
 * regenerate the pickup after it is collected. The spawner is removed when the script terminates.
 * 
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EPickupType} type
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {number} placementFlags
 * @param {number} amount A variable amount that can be specified for some pickups (eg money)
 * @param {boolean} scriptHostObject
 * @param {ModelNames} customModel If set this model will be used for the pickup instead of the default one
 * @returns {PickupIndex}  
 */
export function createPickup(type: EPickupType | number, newCoorsX: number, newCoorsY: number, newCoorsZ: number, placementFlags: number = 0, amount: number = 1, scriptHostObject: boolean = true, customModel: ModelNames = 0): PickupIndex {
	const createPickup_result = Citizen.invokeNative<PickupIndex>('0x8D4CAF9A056EA9E4', type, newCoorsX, newCoorsY, newCoorsZ, placementFlags, amount, scriptHostObject, customModel);
	return createPickup_result;
}