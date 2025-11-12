import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SPECIAL_FUNCTION_DO_NOT_USE
 *
 * 0x4EBA48817E0C608D

 * 
 * This fn is only to be used in very specific situations where the ped needs to be inside the car still but not attached
 * Only use if you've chatted to Chi-Wai or Ben L.
 * 
 * p1 was always 1 (true).
 * 
 * Kicks the ped from the current vehicle and keeps the rendering-focus on this ped (also disables its collision). If doing this for your player ped, you'll still be able to drive the vehicle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} noCollisionUntilClear
 */
export function specialFunctionDoNotUse(ped: PedIndex, noCollisionUntilClear: boolean = true): void {
	const specialFunctionDoNotUse_result = Citizen.invokeNative<void>('0x4EBA48817E0C608D', ped, noCollisionUntilClear);
	return specialFunctionDoNotUse_result;
}