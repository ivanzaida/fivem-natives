import { EEHudComponent } from '@ivanzaida/structures'

/**
 * HUD:IS_HUD_COMPONENT_ACTIVE
 *
 * 0x7B035E8A1D320F1B

 * 
 * Full list of components below
 * 
 * HUD = 0;
 * HUD_WANTED_STARS = 1;
 * HUD_WEAPON_ICON = 2;
 * HUD_CASH = 3;
 * HUD_MP_CASH = 4;
 * HUD_MP_MESSAGE = 5;
 * HUD_VEHICLE_NAME = 6;
 * HUD_AREA_NAME = 7;
 * HUD_VEHICLE_CLASS = 8;
 * HUD_STREET_NAME = 9;
 * HUD_HELP_TEXT = 10;
 * HUD_FLOATING_HELP_TEXT_1 = 11;
 * HUD_FLOATING_HELP_TEXT_2 = 12;
 * HUD_CASH_CHANGE = 13;
 * HUD_RETICLE = 14;
 * HUD_SUBTITLE_TEXT = 15;
 * HUD_RADIO_STATIONS = 16;
 * HUD_SAVING_GAME = 17;
 * HUD_GAME_STREAM = 18;
 * HUD_WEAPON_WHEEL = 19;
 * HUD_WEAPON_WHEEL_STATS = 20;
 * MAX_HUD_COMPONENTS = 21;
 * MAX_HUD_WEAPONS = 22;
 * MAX_SCRIPTED_HUD_COMPONENTS = 141;
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEHudComponent} hudComponent
 * @returns {boolean}  
 */
export function isHudComponentActive(hudComponent: EEHudComponent | number): boolean {
	const isHudComponentActive_result = Citizen.invokeNative<boolean>('0x7B035E8A1D320F1B', hudComponent);
	return isHudComponentActive_result;
}