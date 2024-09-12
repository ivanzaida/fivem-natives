import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_VEHICLE_MISSILE_WARNING_ENABLED
 *
 * 0x41F9D74D334CF57B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @param {boolean} enabled
 */
export function setVehicleMissileWarningEnabled(veh: VehicleIndex, enabled: boolean): void {
	const setVehicleMissileWarningEnabled_result = Citizen.invokeNative<void>('0x41F9D74D334CF57B', veh, enabled);
	return setVehicleMissileWarningEnabled_result;
}