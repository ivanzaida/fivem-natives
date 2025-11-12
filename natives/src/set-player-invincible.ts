import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_INVINCIBLE
 *
 * 0x2B52F77101390E6F

 * 
 * Simply sets you as invincible (Health will not deplete).
 * 
 * Use 0x733A643B5B0C53C1 instead if you want Ragdoll enabled, which is equal to:
 * (DWORD )(playerPedAddress + 0x188) |= (1 << 9);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} invincible
 */
export function setPlayerInvincible(player: PlayerIndex, invincible: boolean): void {
	const setPlayerInvincible_result = Citizen.invokeNative<void>('0x2B52F77101390E6F', player, invincible);
	return setPlayerInvincible_result;
}