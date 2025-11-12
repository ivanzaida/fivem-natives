import { ETargetingModeType } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_TARGETING_MODE
 *
 * 0x1DBA5F84560D5943

 * 
 * Sets your targeting mode.
 * 0 = Assisted Aim - Full
 * 1 = Assisted Aim - Partial
 * 2 = Free Aim - Assisted
 * 3 = Free Aim
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ETargetingModeType} targetMode
 */
export function setPlayerTargetingMode(targetMode: ETargetingModeType | number): void {
	const setPlayerTargetingMode_result = Citizen.invokeNative<void>('0x1DBA5F84560D5943', targetMode);
	return setPlayerTargetingMode_result;
}