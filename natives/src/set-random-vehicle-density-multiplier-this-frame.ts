/**
 * VEHICLE:SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME
 *
 * 0x23D563236A543309

 * 
 * If the Denisty multiplier is set to 0.0 then ambients traffic will stop spawning.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} densityMultiplier
 */
export function setRandomVehicleDensityMultiplierThisFrame(densityMultiplier: number): void {
	const setRandomVehicleDensityMultiplierThisFrame_result = Citizen.invokeNative<void>('0x23D563236A543309', densityMultiplier);
	return setRandomVehicleDensityMultiplierThisFrame_result;
}