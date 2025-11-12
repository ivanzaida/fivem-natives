import { EPickupType, EEulerRotOrder, ModelNames, PickupIndex } from '@ivanzaida/structures'

/**
 * OBJECT:CREATE_PICKUP_ROTATE
 *
 * 0x6FCBED6282FF5DA5

 * 
 * Creates a pickup spawner which can be referenced by the script and will spawn a pickup whenever the player gets near. This spawner can also
 * regenerate the pickup after it is collected. The spawner is removed when the script terminates.
 * 
 * flags:
 * 8 (1 << 3): place on ground
 * 512 (1 << 9): spin around
 * 
 * Full list of pickup types by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pickupTypes.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EPickupType} type
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} orientationX
 * @param {number} orientationY
 * @param {number} orientationZ
 * @param {number} placementFlags
 * @param {number} amount A variable amount that can be specified for some pickups (eg money)
 * @param {EEulerRotOrder} rotOrder
 * @param {boolean} scriptHostObject
 * @param {ModelNames} customModel If set this model will be used for the pickup instead of the default one
 * @returns {PickupIndex}  
 */
export function createPickupRotate(type: EPickupType | number, coorsX: number, coorsY: number, coorsZ: number, orientationX: number, orientationY: number, orientationZ: number, placementFlags: number = 0, amount: number = 1, rotOrder: EEulerRotOrder | number = 2, scriptHostObject: boolean = true, customModel: ModelNames = 0): PickupIndex {
	const createPickupRotate_result = Citizen.invokeNative<PickupIndex>('0x6FCBED6282FF5DA5', type, coorsX, coorsY, coorsZ, orientationX, orientationY, orientationZ, placementFlags, amount, rotOrder, scriptHostObject, customModel);
	return createPickupRotate_result;
}