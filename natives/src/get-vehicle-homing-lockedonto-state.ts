import { VehicleIndex, EHomingLockonState } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_HOMING_LOCKEDONTO_STATE
 *
 * 0x52C90C5E23EB961A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {EHomingLockonState}  
 */
export function getVehicleHomingLockedontoState(vehicle: VehicleIndex): EHomingLockonState {
	const getVehicleHomingLockedontoState_result = Citizen.invokeNative<EHomingLockonState>('0x52C90C5E23EB961A', vehicle);
	return getVehicleHomingLockedontoState_result;
}