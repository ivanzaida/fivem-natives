import { FrontendMenuVersion } from '@ivanzaida/structures'

/**
 * HUD:GET_CURRENT_FRONTEND_MENU_VERSION
 *
 * 0x470CC97DB37CB63B

 * 
 * if (HUD::GET_CURRENT_FRONTEND_MENU_VERSION() == joaat("fe_menu_version_empty_no_background"))
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {FrontendMenuVersion}  
 */
export function getCurrentFrontendMenuVersion(): FrontendMenuVersion {
	const getCurrentFrontendMenuVersion_result = Citizen.invokeNative<FrontendMenuVersion>('0x470CC97DB37CB63B', );
	return getCurrentFrontendMenuVersion_result;
}