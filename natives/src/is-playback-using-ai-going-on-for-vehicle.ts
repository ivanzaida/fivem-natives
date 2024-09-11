import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_PLAYBACK_USING_AI_GOING_ON_FOR_VEHICLE
 *
 * 0xD99C77F6466B9C48

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isPlaybackUsingAiGoingOnForVehicle(vehicle: VehicleIndex): boolean {
	const isPlaybackUsingAiGoingOnForVehicle_result = Citizen.invokeNative<boolean>('0xD99C77F6466B9C48', vehicle);
	return isPlaybackUsingAiGoingOnForVehicle_result;
}