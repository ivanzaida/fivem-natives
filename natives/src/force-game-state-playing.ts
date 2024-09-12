/**
 * MISC:FORCE_GAME_STATE_PLAYING
 *
 * 0xDA91D9D96ED0EB8F

 * When abandoning a MP session suddenly to return to single player (e.g if the player signed out of their PSN profile)
 * this command force-abandons any active game state such as respawning after death etc, forces to normal play state.
 * Don't use this unless you know exactly why you are using it.
 * Sets the localplayer playerinfo state back to playing (State 0)
 * States are:
 * -1: "Invalid"
 * 0: "Playing"
 * 1: "Died"
 * 2: "Arrested"
 * 3: "Failed Mission"
 * 4: "Left Game"
 * 5: "Respawn"
 * 6: "In MP Cutscene"
 * 
 * ------------------------------------------------------------------
 */
export function forceGameStatePlaying(): void {
	const forceGameStatePlaying_result = Citizen.invokeNative<void>('0xDA91D9D96ED0EB8F', );
	return forceGameStatePlaying_result;
}