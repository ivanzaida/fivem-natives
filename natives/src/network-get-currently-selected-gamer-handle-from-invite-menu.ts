import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_CURRENTLY_SELECTED_GAMER_HANDLE_FROM_INVITE_MENU
 *
 * 0xAF52AA4A49D4A9B4

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkGetCurrentlySelectedGamerHandleFromInviteMenu(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkGetCurrentlySelectedGamerHandleFromInviteMenu_result = Citizen.invokeNative<boolean>('0xAF52AA4A49D4A9B4', gamerHandle.dataView);
	return networkGetCurrentlySelectedGamerHandleFromInviteMenu_result;
}