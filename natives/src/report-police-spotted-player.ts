import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:REPORT_POLICE_SPOTTED_PLAYER
 *
 * 0x873D736C20070A10

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function reportPoliceSpottedPlayer(player: PlayerIndex): void {
	const reportPoliceSpottedPlayer_result = Citizen.invokeNative<void>('0x873D736C20070A10', player);
	return reportPoliceSpottedPlayer_result;
}