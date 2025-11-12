import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:CLEAR_PED_PROP
 *
 * 0x2D23D743

 * 
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The ped handle.
 * @param {number} propId The prop id you want to clear from the ped. Refer to [SET_PED_PROP_INDEX](\_0x93376B65A266EB5F).
 */
export function clearPedProp(ped: PedIndex, propId: number): void {
	const clearPedProp_result = Citizen.invokeNative<void>('0x2D23D743', ped, propId);
	return clearPedProp_result;
}