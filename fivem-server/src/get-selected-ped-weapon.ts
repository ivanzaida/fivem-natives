import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * CFX:GET_SELECTED_PED_WEAPON
 *
 * 0xD240123E

 * 
 * Returns the hash of the weapon.
 * 
 *             var num7 = WEAPON::GET_SELECTED_PED_WEAPON(num4);
 *             sub_27D3(num7);
 *             switch (num7)
 *             {
 *                 case 0x24B17070:
 * 
 * Also see WEAPON::GET_CURRENT_PED_WEAPON. Difference?
 * 
 * -------------------------------------------------------------------------
 * 
 * The difference is that GET_SELECTED_PED_WEAPON simply returns the ped's current weapon hash but GET_CURRENT_PED_WEAPON also checks the weapon object and returns true if the hash of the weapon object equals the weapon hash
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped.
 * @returns {EWeaponType}  
 */
export function getSelectedPedWeapon(ped: PedIndex): EWeaponType {
	const getSelectedPedWeapon_result = Citizen.invokeNative<EWeaponType>('0xD240123E', ped);
	return getSelectedPedWeapon_result;
}