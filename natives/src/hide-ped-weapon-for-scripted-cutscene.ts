import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:HIDE_PED_WEAPON_FOR_SCRIPTED_CUTSCENE
 *
 * 0x4A46DAA87A4C235E

 * 
 * Hides the players weapon during a cutscene.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} hideWeaponFlag
 */
export function hidePedWeaponForScriptedCutscene(ped: PedIndex, hideWeaponFlag: boolean): void {
	const hidePedWeaponForScriptedCutscene_result = Citizen.invokeNative<void>('0x4A46DAA87A4C235E', ped, hideWeaponFlag);
	return hidePedWeaponForScriptedCutscene_result;
}