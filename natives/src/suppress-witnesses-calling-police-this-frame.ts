import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SUPPRESS_WITNESSES_CALLING_POLICE_THIS_FRAME
 *
 * 0x4BD41CDB13AC8486

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function suppressWitnessesCallingPoliceThisFrame(player: PlayerIndex): void {
	const suppressWitnessesCallingPoliceThisFrame_result = Citizen.invokeNative<void>('0x4BD41CDB13AC8486', player);
	return suppressWitnessesCallingPoliceThisFrame_result;
}