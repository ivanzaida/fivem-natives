import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:REMOVE_FAKE_CONE_DATA
 *
 * 0xA187381CF52D87A8

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 */
export function removeFakeConeData(blip: BlipIndex): void {
	const removeFakeConeData_result = Citizen.invokeNative<void>('0xA187381CF52D87A8', blip);
	return removeFakeConeData_result;
}