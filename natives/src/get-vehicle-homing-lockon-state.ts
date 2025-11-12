import { VehicleIndex, EHomingLockonState } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_HOMING_LOCKON_STATE
 *
 * 0x3E3B4978082BB93C

 * 
 * Returns a value depending on the lock-on state of vehicle weapons.
 * 0: not locked on
 * 1: locking on
 * 2: locked on
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {EHomingLockonState}  
 */
export function getVehicleHomingLockonState(vehicle: VehicleIndex): EHomingLockonState {
	const getVehicleHomingLockonState_result = Citizen.invokeNative<EHomingLockonState>('0x3E3B4978082BB93C', vehicle);
	return getVehicleHomingLockonState_result;
}