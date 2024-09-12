import { EEHudComponent } from '@ivanzaida/structures'

/**
 * HUD:HIDE_HUD_COMPONENT_THIS_FRAME
 *
 * 0x4EB223432F8FA0A0

 * This function hides various HUD (Heads-up Display) components.
 * Listed below are the integers and the corresponding HUD component.
 * - 1 : WANTED_STARS
 * - 2 : WEAPON_ICON
 * - 3 : CASH
 * - 4 : MP_CASH
 * - 5 : MP_MESSAGE
 * - 6 : VEHICLE_NAME
 * - 7 : AREA_NAME
 * - 8 : VEHICLE_CLASS
 * - 9 : STREET_NAME
 * - 10 : HELP_TEXT
 * - 11 : FLOATING_HELP_TEXT_1
 * - 12 : FLOATING_HELP_TEXT_2
 * - 13 : CASH_CHANGE
 * - 14 : RETICLE
 * - 15 : SUBTITLE_TEXT
 * - 16 : RADIO_STATIONS
 * - 17 : SAVING_GAME
 * - 18 : GAME_STREAM
 * - 19 : WEAPON_WHEEL
 * - 20 : WEAPON_WHEEL_STATS
 * - 21 : HUD_COMPONENTS
 * - 22 : HUD_WEAPONS
 * These integers also work for the `SHOW_HUD_COMPONENT_THIS_FRAME` native, but instead shows the HUD Component.
 * 
 * ------------------------------------------------------------------
 * @param {EEHudComponent} hudComponent
 */
export function hideHudComponentThisFrame(hudComponent: EEHudComponent | number): void {
	const hideHudComponentThisFrame_result = Citizen.invokeNative<void>('0x4EB223432F8FA0A0', hudComponent);
	return hideHudComponentThisFrame_result;
}