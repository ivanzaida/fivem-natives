/**
 * VEHICLE:SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME
 *
 * 0xA0265306DFF63938

 * 
 * If the Denisty multiplier is set to 0.0 then ambients cars will stop spawning.
 * 
 * Use this native inside a looped function.
 * Values:
 * - `0.0` = no vehicles on streets
 * - `1.0` = normal vehicles on streets
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} densityMultiplier
 */
export function setVehicleDensityMultiplierThisFrame(densityMultiplier: number): void {
	const setVehicleDensityMultiplierThisFrame_result = Citizen.invokeNative<void>('0xA0265306DFF63938', densityMultiplier);
	return setVehicleDensityMultiplierThisFrame_result;
}