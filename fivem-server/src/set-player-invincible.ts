import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PLAYER_INVINCIBLE
 *
 * 0xDFB9A2A2

 * 
 * Simply sets you as invincible (Health will not deplete).
 * 
 * Use 0x733A643B5B0C53C1 instead if you want Ragdoll enabled, which is equal to:
 * (DWORD )(playerPedAddress + 0x188) |= (1 << 9);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player The player index.
 * @param {boolean} bInvincible
 */
export function setPlayerInvincible(player: PlayerIndex, bInvincible: boolean): void {
	const setPlayerInvincible_result = Citizen.invokeNative<void>('0xDFB9A2A2', player, bInvincible);
	return setPlayerInvincible_result;
}