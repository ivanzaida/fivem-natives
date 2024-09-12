import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:ADD_TEXT_COMPONENT_SUBSTRING_BLIP_NAME
 *
 * 0x273F00982486DCC6

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 */
export function addTextComponentSubstringBlipName(blip: BlipIndex): void {
	const addTextComponentSubstringBlipName_result = Citizen.invokeNative<void>('0x273F00982486DCC6', blip);
	return addTextComponentSubstringBlipName_result;
}