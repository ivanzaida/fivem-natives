import { PlayerIndex, ECrimeType } from '@ivanzaida/structures'

/**
 * PLAYER:SUPPRESS_CRIME_THIS_FRAME
 *
 * 0xFE89392FAC7394F2

 * 
 * crimeType: see REPORT_CRIME
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {ECrimeType} crimeToReport
 */
export function suppressCrimeThisFrame(player: PlayerIndex, crimeToReport: ECrimeType | number): void {
	const suppressCrimeThisFrame_result = Citizen.invokeNative<void>('0xFE89392FAC7394F2', player, crimeToReport);
	return suppressCrimeThisFrame_result;
}