import { ModelNames, ESearchLocationFlags } from '@ivanzaida/structures'

/**
 * OBJECT:HAS_CLOSEST_OBJECT_OF_TYPE_BEEN_BROKEN
 *
 * 0xF6774B3027B150AC

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
export function hasClosestObjectOfTypeBeenBroken(scrVecCoorsX: number, scrVecCoorsY: number, scrVecCoorsZ: number, radius: number, model: ModelNames, searchFlags: ESearchLocationFlags | number): boolean {
	const hasClosestObjectOfTypeBeenBroken_result = Citizen.invokeNative<boolean>('0xF6774B3027B150AC', scrVecCoorsX, scrVecCoorsY, scrVecCoorsZ, radius, model, searchFlags);
	return hasClosestObjectOfTypeBeenBroken_result;
}