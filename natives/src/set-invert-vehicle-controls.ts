import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_INVERT_VEHICLE_CONTROLS
 *
 * 0x784F0E1BBD6301B6

 * 
 * Inverts vehicle's controls. So INPUT_VEH_ACCELERATE will be INPUT_VEH_BRAKE and vise versa (same for A/D controls)
 * Doesn't work for planes/helis.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} invertControls
 */
export function setInvertVehicleControls(vehicle: VehicleIndex, invertControls: boolean): void {
	const setInvertVehicleControls_result = Citizen.invokeNative<void>('0x784F0E1BBD6301B6', vehicle, invertControls);
	return setInvertVehicleControls_result;
}