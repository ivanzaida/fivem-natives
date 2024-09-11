import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:PLAY_STREAM_FROM_VEHICLE
 *
 * 0x40B0ADC3A86BF939

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 */
export function playStreamFromVehicle(veh: VehicleIndex): void {
	const playStreamFromVehicle_result = Citizen.invokeNative<void>('0x40B0ADC3A86BF939', veh);
	return playStreamFromVehicle_result;
}