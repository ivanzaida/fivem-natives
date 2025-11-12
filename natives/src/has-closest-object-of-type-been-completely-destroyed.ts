import { ModelNames, ESearchLocationFlags } from '@ivanzaida/structures'

/**
 * OBJECT:HAS_CLOSEST_OBJECT_OF_TYPE_BEEN_COMPLETELY_DESTROYED
 *
 * 0xF701B83DA32F7F87

 * 
 * Does a world search and returns TRUE if the closest fraggable object with the specified model has had all breakable bits
 * broken off.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} scrVecCoorsX
 * @param {number} scrVecCoorsY
 * @param {number} scrVecCoorsZ
 * @param {number} radius
 * @param {ModelNames} model
 * @param {ESearchLocationFlags} searchFlags
 * @returns {boolean}  
 */
export function hasClosestObjectOfTypeBeenCompletelyDestroyed(scrVecCoorsX: number, scrVecCoorsY: number, scrVecCoorsZ: number, radius: number, model: ModelNames, searchFlags: ESearchLocationFlags | number): boolean {
	const hasClosestObjectOfTypeBeenCompletelyDestroyed_result = Citizen.invokeNative<boolean>('0xF701B83DA32F7F87', scrVecCoorsX, scrVecCoorsY, scrVecCoorsZ, radius, model, searchFlags);
	return hasClosestObjectOfTypeBeenCompletelyDestroyed_result;
}