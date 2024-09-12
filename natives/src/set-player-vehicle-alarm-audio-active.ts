import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_PLAYER_VEHICLE_ALARM_AUDIO_ACTIVE
 *
 * 0x27EC3EC3B245C5CC

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @param {boolean} active
 */
export function setPlayerVehicleAlarmAudioActive(veh: VehicleIndex, active: boolean): void {
	const setPlayerVehicleAlarmAudioActive_result = Citizen.invokeNative<void>('0x27EC3EC3B245C5CC', veh, active);
	return setPlayerVehicleAlarmAudioActive_result;
}