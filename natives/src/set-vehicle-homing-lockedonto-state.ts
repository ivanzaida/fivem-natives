import { VehicleIndex, EHomingLockonState } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_HOMING_LOCKEDONTO_STATE
 *
 * 0xD501B0D4146A6A30

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EHomingLockonState} lockOnState
 */
export function setVehicleHomingLockedontoState(vehicle: VehicleIndex, lockOnState: EHomingLockonState | number): void {
	const setVehicleHomingLockedontoState_result = Citizen.invokeNative<void>('0xD501B0D4146A6A30', vehicle, lockOnState);
	return setVehicleHomingLockedontoState_result;
}