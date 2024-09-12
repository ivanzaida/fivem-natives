import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_ALLOW_HOMING_MISSLE_LOCKON
 *
 * 0xECB40F3CD8E09468

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} allowHomingMissileLockon
 * @param {boolean} ignoreMisisonVehCheck
 */
export function setVehicleAllowHomingMissleLockon(vehicle: VehicleIndex, allowHomingMissileLockon: boolean, ignoreMisisonVehCheck: boolean = false): void {
	const setVehicleAllowHomingMissleLockon_result = Citizen.invokeNative<void>('0xECB40F3CD8E09468', vehicle, allowHomingMissileLockon, ignoreMisisonVehCheck);
	return setVehicleAllowHomingMissleLockon_result;
}