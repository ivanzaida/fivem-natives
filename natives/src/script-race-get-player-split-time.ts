import { IntRef } from '@ivanzaida/structures'

/**
 * MISC:SCRIPT_RACE_GET_PLAYER_SPLIT_TIME
 *
 * 0x53A5BC0515A038AB

 * 
 * Requests the split time for a player in an mp script race, and the position for that player in the race. SCRIPT_RACE_INIT needs to have been called first.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} ped
 * @param {IntRef} time [Ref]
 * @param {IntRef} position [Ref]
 * @returns {boolean}  
 */
export function scriptRaceGetPlayerSplitTime(ped: number, time: IntRef /* ptr */, position: IntRef /* ptr */): boolean {
	const scriptRaceGetPlayerSplitTime_result = Citizen.invokeNative<boolean>('0x53A5BC0515A038AB', ped, time.dataView, position.dataView);
	return scriptRaceGetPlayerSplitTime_result;
}