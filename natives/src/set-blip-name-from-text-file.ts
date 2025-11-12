import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_NAME_FROM_TEXT_FILE
 *
 * 0x594D5D0D7071B0DE

 * 
 * Doesn't work if the label text of gxtEntry is >= 80.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {string} textLabel
 */
export function setBlipNameFromTextFile(blip: BlipIndex, textLabel: string): void {
	const setBlipNameFromTextFile_result = Citizen.invokeNative<void>('0x594D5D0D7071B0DE', blip, textLabel);
	return setBlipNameFromTextFile_result;
}