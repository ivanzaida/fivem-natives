import { EPickupType, ModelNames, ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:CREATE_NON_NETWORKED_AMBIENT_PICKUP
 *
 * 0x192C5E68A3552FDC

 * 
 * ------------------------------------------------------------------
 * @param {EPickupType} type
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {number} placementFlags
 * @param {number} amount
 * @param {ModelNames} customModel
 * @param {boolean} createAsScriptObject
 * @param {boolean} scriptHostObject
 * @returns {ObjectIndex}  
 */
export function createNonNetworkedAmbientPickup(type: EPickupType | number, newCoorsX: number, newCoorsY: number, newCoorsZ: number, placementFlags: number = 0, amount: number = 1, customModel: ModelNames = 0, createAsScriptObject: boolean = false, scriptHostObject: boolean = true): ObjectIndex {
	const createNonNetworkedAmbientPickup_result = Citizen.invokeNative<ObjectIndex>('0x192C5E68A3552FDC', type, newCoorsX, newCoorsY, newCoorsZ, placementFlags, amount, customModel, createAsScriptObject, scriptHostObject);
	return createNonNetworkedAmbientPickup_result;
}