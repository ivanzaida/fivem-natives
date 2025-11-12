import { PoliceRestartIndex } from '@ivanzaida/structures'

/**
 * MISC:DISABLE_POLICE_RESTART
 *
 * 0xD9256F7FF1791115

 * 
 * Disables the spawn point at the police house on the specified index.
 * 
 * policeIndex: The police house index.
 * toggle: true to enable the spawn point, false to disable.
 * 
 * - Nacorpio
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PoliceRestartIndex} index
 * @param {boolean} disable
 */
export function disablePoliceRestart(index: PoliceRestartIndex, disable: boolean): void {
	const disablePoliceRestart_result = Citizen.invokeNative<void>('0xD9256F7FF1791115', index, disable);
	return disablePoliceRestart_result;
}