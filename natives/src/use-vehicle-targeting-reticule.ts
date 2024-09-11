/**
 * HUD:USE_VEHICLE_TARGETING_RETICULE
 *
 * 0xEC214A1AB38E0C2B

 * 
 * ------------------------------------------------------------------
 * @param {boolean} useVehicleTargetingReticule
 */
export function useVehicleTargetingReticule(useVehicleTargetingReticule: boolean): void {
	const useVehicleTargetingReticule_result = Citizen.invokeNative<void>('0xEC214A1AB38E0C2B', useVehicleTargetingReticule);
	return useVehicleTargetingReticule_result;
}