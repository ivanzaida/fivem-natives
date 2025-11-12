import { FrontendMenuVersion, EFrontendMenuScreen } from '@ivanzaida/structures'

/**
 * HUD:RESTART_FRONTEND_MENU
 *
 * 0x1E80216570AFBFC3

 * 
 * Before using this native click the native above and look at the decription.
 * 
 * Example:
 * int GetHash = Function.Call<int>(Hash.GET_HASH_KEY, "fe_menu_version_corona_lobby");
 * Function.Call(Hash.ACTIVATE_FRONTEND_MENU, GetHash, 0, -1);
 * Function.Call(Hash.RESTART_FRONTEND_MENU(GetHash, -1);
 * 
 * This native refreshes the frontend menu.
 * 
 * p1 = Hash of Menu
 * p2 = Unknown but always works with -1.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {FrontendMenuVersion} menuVersion
 * @param {EFrontendMenuScreen} highlightTab
 */
export function restartFrontendMenu(menuVersion: FrontendMenuVersion, highlightTab: EFrontendMenuScreen | number = 1): void {
	const restartFrontendMenu_result = Citizen.invokeNative<void>('0x1E80216570AFBFC3', menuVersion, highlightTab);
	return restartFrontendMenu_result;
}