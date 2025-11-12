import { EPickupType, ModelNames, ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:CREATE_AMBIENT_PICKUP
 *
 * 0xD0DDC0D0D8D33E57

 * 
 * Creates a pickup similar to those dropped by dead peds. These types of pickups are part of the ambient population and will get removed
 * if the player moves too far away from them. They cannot be referenced by the script and will remain if the script terminates.  UNLESS bCreateAsScriptObject is set!
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
 * @param {ModelNames} customModel If set this model will be used for the pickup instead of the default one
 * @param {boolean} createAsScriptObject If true, the pickup will be treated as a script object and persist until the script terminates, or it is marked as no longer needed.
 * @param {boolean} scriptHostObject
 * @returns {ObjectIndex}  
 */
export function createAmbientPickup(type: EPickupType | number, newCoorsX: number, newCoorsY: number, newCoorsZ: number, placementFlags: number = 0, amount: number = 1, customModel: ModelNames = 0, createAsScriptObject: boolean = false, scriptHostObject: boolean = true): ObjectIndex {
	const createAmbientPickup_result = Citizen.invokeNative<ObjectIndex>('0xD0DDC0D0D8D33E57', type, newCoorsX, newCoorsY, newCoorsZ, placementFlags, amount, customModel, createAsScriptObject, scriptHostObject);
	return createAmbientPickup_result;
}