import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_EQIPPED_WEAPON_START_SPINNING_AT_FULL_SPEED
 *
 * 0x2ED26DA87CD65433

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setEqippedWeaponStartSpinningAtFullSpeed(ped: PedIndex): void {
	const setEqippedWeaponStartSpinningAtFullSpeed_result = Citizen.invokeNative<void>('0x2ED26DA87CD65433', ped);
	return setEqippedWeaponStartSpinningAtFullSpeed_result;
}