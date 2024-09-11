import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_PLAYER_A_PARTICIPANT_ON_SCRIPT
 *
 * 0xE39406DC2A852B0E

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} plr
 * @param {string} scriptName
 * @param {number} instanceId
 * @returns {boolean}  
 */
export function networkIsPlayerAParticipantOnScript(plr: PlayerIndex, scriptName: string, instanceId: number): boolean {
	const networkIsPlayerAParticipantOnScript_result = Citizen.invokeNative<boolean>('0xE39406DC2A852B0E', plr, scriptName, instanceId);
	return networkIsPlayerAParticipantOnScript_result;
}