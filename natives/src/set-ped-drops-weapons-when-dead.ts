import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_DROPS_WEAPONS_WHEN_DEAD
 *
 * 0x8CF553A05B97089A

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} dropsWeaponsFlag
 */
export function setPedDropsWeaponsWhenDead(ped: PedIndex, dropsWeaponsFlag: boolean): void {
	const setPedDropsWeaponsWhenDead_result = Citizen.invokeNative<void>('0x8CF553A05B97089A', ped, dropsWeaponsFlag);
	return setPedDropsWeaponsWhenDead_result;
}