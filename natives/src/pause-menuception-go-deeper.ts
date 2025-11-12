import { EFrontendMenuScreen } from '@ivanzaida/structures'

/**
 * HUD:PAUSE_MENUCEPTION_GO_DEEPER
 *
 * 0xB749E51D216834D8

 * 
 * This has the SAME effect as if you specified a MenuUniqueId of MENU_UNIQUE_ID_INCEPT_TRIGGER in pauseMenu.xml
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EFrontendMenuScreen} whichScreen
 */
export function pauseMenuceptionGoDeeper(whichScreen: EFrontendMenuScreen | number): void {
	const pauseMenuceptionGoDeeper_result = Citizen.invokeNative<void>('0xB749E51D216834D8', whichScreen);
	return pauseMenuceptionGoDeeper_result;
}