import { VehicleIndex, EHomingLockonState } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_HOMING_LOCKON_STATE
 *
 * 0xFBDE9FD8

 * 
 * Returns a value depending on the lock-on state of vehicle weapons.
 * 0: not locked on
 * 1: locking on
 * 2: locked on
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to check.
 * @returns {EHomingLockonState}  
 */
export function getVehicleHomingLockonState(vehicle: VehicleIndex): EHomingLockonState {
	const getVehicleHomingLockonState_result = Citizen.invokeNative<EHomingLockonState>('0xFBDE9FD8', vehicle);
	return getVehicleHomingLockonState_result;
}