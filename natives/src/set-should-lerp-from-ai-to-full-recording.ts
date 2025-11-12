import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_SHOULD_LERP_FROM_AI_TO_FULL_RECORDING
 *
 * 0x5D18C448B64290DB

 * 
 * A vehicle recording playback flag only used in jewelry_heist
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} interpolate
 */
export function setShouldLerpFromAiToFullRecording(vehicle: VehicleIndex, interpolate: boolean): void {
	const setShouldLerpFromAiToFullRecording_result = Citizen.invokeNative<void>('0x5D18C448B64290DB', vehicle, interpolate);
	return setShouldLerpFromAiToFullRecording_result;
}