import { EQuickfixElement } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_QUICKFIX_TOOL
 *
 * 0x93270A4C77D1DCB1

 * 
 * ------------------------------------------------------------------
 * @param {EQuickfixElement} anElement
 * @param {string} itemName
 */
export function playstatsQuickfixTool(anElement: EQuickfixElement | number, itemName: string): void {
	const playstatsQuickfixTool_result = Citizen.invokeNative<void>('0x93270A4C77D1DCB1', anElement, itemName);
	return playstatsQuickfixTool_result;
}