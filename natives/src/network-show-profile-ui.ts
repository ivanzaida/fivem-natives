import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SHOW_PROFILE_UI
 *
 * 0xAD9DEC6201018EA3

 * 
 * Show the Platform profile UI represented by this gamer handle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 */
export function networkShowProfileUi(gamerHandle: GamerHandle /* ptr */): void {
	const networkShowProfileUi_result = Citizen.invokeNative<void>('0xAD9DEC6201018EA3', gamerHandle.dataView);
	return networkShowProfileUi_result;
}