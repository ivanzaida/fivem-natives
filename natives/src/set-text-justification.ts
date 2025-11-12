import { EETextJustification } from '@ivanzaida/structures'

/**
 * HUD:SET_TEXT_JUSTIFICATION
 *
 * 0x2873B596E322DCDA

 * 
 * Types -
 * 0: Center-Justify
 * 1: Left-Justify
 * 2: Right-Justify
 * 
 * Right-Justify requires SET_TEXT_WRAP, otherwise it will draw to the far right of the screen
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EETextJustification} justification
 */
export function setTextJustification(justification: EETextJustification | number): void {
	const setTextJustification_result = Citizen.invokeNative<void>('0x2873B596E322DCDA', justification);
	return setTextJustification_result;
}