import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_PLAYBACK_SPEED
 *
 * 0x206AB1458FD9522F

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} playbackSpeed
 */
export function setPlaybackSpeed(vehicle: VehicleIndex, playbackSpeed: number): void {
	const setPlaybackSpeed_result = Citizen.invokeNative<void>('0x206AB1458FD9522F', vehicle, playbackSpeed);
	return setPlaybackSpeed_result;
}