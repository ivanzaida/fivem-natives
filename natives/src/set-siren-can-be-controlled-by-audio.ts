import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_SIREN_CAN_BE_CONTROLLED_BY_AUDIO
 *
 * 0x60D61C2E8F5D9601

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @param {boolean} controlled
 */
export function setSirenCanBeControlledByAudio(veh: VehicleIndex, controlled: boolean): void {
	const setSirenCanBeControlledByAudio_result = Citizen.invokeNative<void>('0x60D61C2E8F5D9601', veh, controlled);
	return setSirenCanBeControlledByAudio_result;
}