import { PedIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_PED_HAS_AI_BLIP_WITH_COLOUR
 *
 * 0xF42995E2FC0559E0

 * 
 * color: see SET_BLIP_COLOUR
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} onOff
 * @param {number} colour
 */
export function setPedHasAiBlipWithColour(ped: PedIndex, onOff: boolean, colour: number): void {
	const setPedHasAiBlipWithColour_result = Citizen.invokeNative<void>('0xF42995E2FC0559E0', ped, onOff, colour);
	return setPedHasAiBlipWithColour_result;
}