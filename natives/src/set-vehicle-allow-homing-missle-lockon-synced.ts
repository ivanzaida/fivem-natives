import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_ALLOW_HOMING_MISSLE_LOCKON_SYNCED
 *
 * 0xF5706A3E4A060916

 * 
 * Allow a MISSION vehicle to disable homing missle targetting (synced over network).
 * This is a different flag to "SET_VEHICLE_ALLOW_HOMING_MISSLE_LOCKON", please ensure it's set/cleared accordingly!
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} allowHomingMissileLockon
 * @param {boolean} ignoreMisisonVehCheck
 */
export function setVehicleAllowHomingMissleLockonSynced(vehicle: VehicleIndex, allowHomingMissileLockon: boolean, ignoreMisisonVehCheck: boolean = false): void {
	const setVehicleAllowHomingMissleLockonSynced_result = Citizen.invokeNative<void>('0xF5706A3E4A060916', vehicle, allowHomingMissileLockon, ignoreMisisonVehCheck);
	return setVehicleAllowHomingMissleLockonSynced_result;
}