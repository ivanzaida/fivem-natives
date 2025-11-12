import { EAbilityIcon } from '@ivanzaida/structures'

/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_STATS
 *
 * 0x0AAAE599E05E67D2

 * 
 * List of picture names: https://pastebin.com/XdpJVbHz
 * Example result: https://i.imgur.com/SdEZ22m.png
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} titleString
 * @param {EAbilityIcon} icon
 * @param {number} totalLevel
 * @param {number} currentLevel
 * @param {boolean} isImportant
 * @param {string} contactTxD
 * @param {string} contactTxN
 * @returns {number}  
 */
export function endTextCommandThefeedPostStats(titleString: string, icon: EAbilityIcon | number, totalLevel: number, currentLevel: number, isImportant: boolean, contactTxD: string, contactTxN: string): number {
	const endTextCommandThefeedPostStats_result = Citizen.invokeNative<number>('0x0AAAE599E05E67D2', titleString, icon, totalLevel, currentLevel, isImportant, contactTxD, contactTxN);
	return endTextCommandThefeedPostStats_result;
}