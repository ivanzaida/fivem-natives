import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_INVINCIBLE_2
 *
 * 0xF2E3912B

 * Unlike [GET_PLAYER_INVINCIBLE](#_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#_0x239528EACDC3E7DE) invincibility state.
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player The player id
 * @returns {boolean}  A boolean to tell if the player is invincible.
 */
export function getPlayerInvincible_2(player: PlayerIndex): boolean {
	const getPlayerInvincible_2_result = Citizen.invokeNative<boolean>('0xF2E3912B', player);
	return getPlayerInvincible_2_result;
}