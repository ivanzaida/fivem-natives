/**
 * MISC:SCRIPT_RACE_INIT
 *
 * 0xE971F2F7312DC1FB

 * 
 * Initializes an mp script race and the helpet split time system
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} numCheckpoints
 * @param {number} numLaps
 * @param {number} numPlayers
 * @param {number} localPlayer
 */
export function scriptRaceInit(numCheckpoints: number, numLaps: number, numPlayers: number, localPlayer: number): void {
	const scriptRaceInit_result = Citizen.invokeNative<void>('0xE971F2F7312DC1FB', numCheckpoints, numLaps, numPlayers, localPlayer);
	return scriptRaceInit_result;
}