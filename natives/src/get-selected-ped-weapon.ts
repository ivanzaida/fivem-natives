import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_SELECTED_PED_WEAPON
 *
 * 0xB0D77D90171EC35F

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
 * @param {PedIndex} ped
 * @returns {EWeaponType}  
 */
export function getSelectedPedWeapon(ped: PedIndex): EWeaponType {
	const getSelectedPedWeapon_result = Citizen.invokeNative<EWeaponType>('0xB0D77D90171EC35F', ped);
	return getSelectedPedWeapon_result;
}