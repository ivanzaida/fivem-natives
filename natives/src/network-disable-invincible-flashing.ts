import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_DISABLE_INVINCIBLE_FLASHING
 *
 * 0x65EEAD281B3DD2AD

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} plr
 * @param {boolean} disable
 */
export function networkDisableInvincibleFlashing(plr: PlayerIndex, disable: boolean): void {
	const networkDisableInvincibleFlashing_result = Citizen.invokeNative<void>('0x65EEAD281B3DD2AD', plr, disable);
	return networkDisableInvincibleFlashing_result;
}