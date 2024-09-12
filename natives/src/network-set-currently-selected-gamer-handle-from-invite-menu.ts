import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_CURRENTLY_SELECTED_GAMER_HANDLE_FROM_INVITE_MENU
 *
 * 0xF49565F8EDB1A5AF

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkSetCurrentlySelectedGamerHandleFromInviteMenu(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkSetCurrentlySelectedGamerHandleFromInviteMenu_result = Citizen.invokeNative<boolean>('0xF49565F8EDB1A5AF', gamerHandle.dataView);
	return networkSetCurrentlySelectedGamerHandleFromInviteMenu_result;
}