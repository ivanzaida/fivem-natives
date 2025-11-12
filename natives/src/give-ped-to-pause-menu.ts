import { PedIndex } from '@ivanzaida/structures'

/**
 * HUD:GIVE_PED_TO_PAUSE_MENU
 *
 * 0x1D16BFDD94C0AE8F

 * 
 * Hands off a script created ped to code.
 * param: column: 0=LEFT, 1=MIDDLE, 2=RIGHT
 * 
 * p1 is either 1 or 2 in the PC scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} column
 */
export function givePedToPauseMenu(ped: PedIndex, column: number = 1): void {
	const givePedToPauseMenu_result = Citizen.invokeNative<void>('0x1D16BFDD94C0AE8F', ped, column);
	return givePedToPauseMenu_result;
}