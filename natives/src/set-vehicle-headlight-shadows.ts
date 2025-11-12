import { VehicleIndex, EVehicleHeadlightShadowFlags } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_HEADLIGHT_SHADOWS
 *
 * 0xAA2BF5C4E3F250C0

 * 
 * p1 can be either 0, 1 or 2.
 * 
 * Determines how vehicle lights behave when toggled.
 * 
 * 0 = Default (Lights can be toggled between off, normal and high beams)
 * 1 = Lights Disabled (Lights are fully disabled, cannot be toggled)
 * 2 = Always On (Lights can be toggled between normal and high beams)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EVehicleHeadlightShadowFlags} flags
 */
export function setVehicleHeadlightShadows(vehicle: VehicleIndex, flags: EVehicleHeadlightShadowFlags | number): void {
	const setVehicleHeadlightShadows_result = Citizen.invokeNative<void>('0xAA2BF5C4E3F250C0', vehicle, flags);
	return setVehicleHeadlightShadows_result;
}