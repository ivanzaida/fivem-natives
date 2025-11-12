import { EHudColours } from '@ivanzaida/structures'

/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_VERSUS_TU
 *
 * 0x4B4E142A1E3653A4

 * 
 * This function can show pictures of every texture that can be requested by REQUEST_STREAMED_TEXTURE_DICT.
 * 
 * List of picNames: https://pastebin.com/XdpJVbHz
 * HUD colors and their values: https://pastebin.com/d9aHPbXN
 * 
 * Shows a deathmatch score above the minimap, example: https://i.imgur.com/YmoMklG.png
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} ch1TXD
 * @param {string} ch1TXN
 * @param {number} val1
 * @param {string} ch2TXD
 * @param {string} ch2TXN
 * @param {number} val2
 * @param {EHudColours} customColor1
 * @param {EHudColours} customColor2
 * @returns {number}  
 */
export function endTextCommandThefeedPostVersusTu(ch1TXD: string, ch1TXN: string, val1: number, ch2TXD: string, ch2TXN: string, val2: number, customColor1: EHudColours | number = 1, customColor2: EHudColours | number = 1): number {
	const endTextCommandThefeedPostVersusTu_result = Citizen.invokeNative<number>('0x4B4E142A1E3653A4', ch1TXD, ch1TXN, val1, ch2TXD, ch2TXN, val2, customColor1, customColor2);
	return endTextCommandThefeedPostVersusTu_result;
}