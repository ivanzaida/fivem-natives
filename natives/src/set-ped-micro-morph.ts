import { PedIndex, EMicroMorphType } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MICRO_MORPH
 *
 * 0xAAF9B08B469F707F

 * 
 * Sets the various freemode face features, e.g. nose length, chin shape. Scale ranges from -1.0 to 1.0.
 * 
 * 
 * 
 * 0 - Nose Width (Thin/Wide)
 * 
 * 1 - Nose Peak (Up/Down)
 * 
 * 2 - Nose Length (Long/Short)
 * 
 * 3 - Nose Bone Curveness (Crooked/Curved)
 * 
 * 4 - Nose Tip (Up/Down)
 * 
 * 5 - Nose Bone Twist (Left/Right)
 * 
 * 6 - Eyebrow (Up/Down)
 * 
 * 7 - Eyebrow (In/Out)
 * 
 * 8 - Cheek Bones (Up/Down)
 * 
 * 9 - Cheek Sideways Bone Size (In/Out)
 * 
 * 10 - Cheek Bones Width (Puffed/Gaunt)
 * 
 * 11 - Eye Opening (Both) (Wide/Squinted)
 * 
 * 12 - Lip Thickness (Both) (Fat/Thin)
 * 
 * 13 - Jaw Bone Width (Narrow/Wide)
 * 
 * 14 - Jaw Bone Shape (Round/Square)
 * 
 * 15 - Chin Bone (Up/Down)
 * 
 * 16 - Chin Bone Length (In/Out or Backward/Forward)
 * 
 * 17 - Chin Bone Shape (Pointed/Square)
 * 
 * 18 - Chin Hole (Chin Bum)
 * 
 * 19 - Neck Thickness (Thin/Thick)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EMicroMorphType} morphType
 * @param {number} blend
 */
export function setPedMicroMorph(ped: PedIndex, morphType: EMicroMorphType | number, blend: number): void {
	const setPedMicroMorph_result = Citizen.invokeNative<void>('0xAAF9B08B469F707F', ped, morphType, blend);
	return setPedMicroMorph_result;
}