import { EEHelpTextFloatingId } from '@ivanzaida/structures'

/**
 * HUD:CLEAR_FLOATING_HELP
 *
 * 0x665A7E873A6664BC

 * 
 * ------------------------------------------------------------------
 * @param {EEHelpTextFloatingId} id
 * @param {boolean} clearNow
 */
export function clearFloatingHelp(id: EEHelpTextFloatingId | number, clearNow: boolean = true): void {
	const clearFloatingHelp_result = Citizen.invokeNative<void>('0x665A7E873A6664BC', id, clearNow);
	return clearFloatingHelp_result;
}