import { VehicleIndex, EWheelHydraulicScriptState } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HYDRAULIC_VEHICLE_STATE
 *
 * 0xA15CBF61198EE519

 * 
 * States:
 * 4 = raise
 * 5 = lower
 * 6 = jump
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EWheelHydraulicScriptState} state
 */
export function setHydraulicVehicleState(vehicle: VehicleIndex, state: EWheelHydraulicScriptState | number): void {
	const setHydraulicVehicleState_result = Citizen.invokeNative<void>('0xA15CBF61198EE519', vehicle, state);
	return setHydraulicVehicleState_result;
}