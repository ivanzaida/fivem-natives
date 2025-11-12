import { PedIndex, EPedComponent } from '@ivanzaida/structures'

/**
 * PED:SET_PED_COMPONENT_VARIATION
 *
 * 0xD1C578C204015E1F

 * 
 * This command sets the drawable and texture for one component of the ped's model. Each ped model can have several drawables for each component.
 * Each drawable can have several textures. You should check that the new drawable index is within range for the component (body part) for the ped's model (using GET_NUMBER_OF_CHAR_DRAWABLE_VARIATIONS.
 * 
 * paletteId: 0 to 3.
 * 
 * componentId:
 * enum ePedVarComp
 * {
 * 	PV_COMP_INVALID = -1,
 * 	PV_COMP_HEAD,
 * 	PV_COMP_BERD,
 * 	PV_COMP_HAIR,
 * 	PV_COMP_UPPR,
 * 	PV_COMP_LOWR,
 * 	PV_COMP_HAND,
 * 	PV_COMP_FEET,
 * 	PV_COMP_TEEF,
 * 	PV_COMP_ACCS,
 * 	PV_COMP_TASK,
 * 	PV_COMP_DECL,
 * 	PV_COMP_JBIB,
 * 	PV_COMP_MAX
 * };
 * 
 * Examples: https://gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedComponent} componentNumber
 * @param {number} newDrawableNumber
 * @param {number} newTextureNumber
 * @param {number} newPaletteNumber
 */
export function setPedComponentVariation(ped: PedIndex, componentNumber: EPedComponent | number, newDrawableNumber: number, newTextureNumber: number, newPaletteNumber: number = 0): void {
	const setPedComponentVariation_result = Citizen.invokeNative<void>('0xD1C578C204015E1F', ped, componentNumber, newDrawableNumber, newTextureNumber, newPaletteNumber);
	return setPedComponentVariation_result;
}