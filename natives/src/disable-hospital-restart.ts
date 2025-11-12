import { HospitalRestartIndex } from '@ivanzaida/structures'

/**
 * MISC:DISABLE_HOSPITAL_RESTART
 *
 * 0x281BDB37010064F5

 * 
 * The game by default has 5 hospital respawn points. Disabling them all will cause the player to respawn at the last position they were.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {HospitalRestartIndex} index
 * @param {boolean} disable
 */
export function disableHospitalRestart(index: HospitalRestartIndex, disable: boolean): void {
	const disableHospitalRestart_result = Citizen.invokeNative<void>('0x281BDB37010064F5', index, disable);
	return disableHospitalRestart_result;
}