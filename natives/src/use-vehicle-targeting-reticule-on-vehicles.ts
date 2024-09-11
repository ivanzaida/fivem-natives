/**
 * HUD:_USE_VEHICLE_TARGETING_RETICULE_ON_VEHICLES
 *
 * 0x1BC0EA2912708625

 * 
 * ------------------------------------------------------------------
 */
export function useVehicleTargetingReticuleOnVehicles(): void {
	const useVehicleTargetingReticuleOnVehicles_result = Citizen.invokeNative<void>('0x1BC0EA2912708625', );
	return useVehicleTargetingReticuleOnVehicles_result;
}