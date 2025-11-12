import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:UPDATE_WANTED_POSITION_THIS_FRAME
 *
 * 0x489BA9F867E58A85

 * 
 * This sets a bool value in the wanted system of the player ped that will center the wanted position to the players position
 * This value gets reest every frame so this function must be called each frame.
 * 
 * This native is used in both singleplayer and multiplayer scripts.
 * 
 * Always used like this in scripts
 * PLAYER::UPDATE_WANTED_POSITION_THIS_FRAME(PLAYER::PLAYER_ID());
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function updateWantedPositionThisFrame(player: PlayerIndex): void {
	const updateWantedPositionThisFrame_result = Citizen.invokeNative<void>('0x489BA9F867E58A85', player);
	return updateWantedPositionThisFrame_result;
}