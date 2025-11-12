/**
 * VEHICLE:SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME
 *
 * 0x40C1C94D5A5157C5

 * 
 * If the Denisty multiplier is set to 0.0 then parked vehicles will stop spawning.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} densityMultiplier
 */
export function setParkedVehicleDensityMultiplierThisFrame(densityMultiplier: number): void {
	const setParkedVehicleDensityMultiplierThisFrame_result = Citizen.invokeNative<void>('0x40C1C94D5A5157C5', densityMultiplier);
	return setParkedVehicleDensityMultiplierThisFrame_result;
}