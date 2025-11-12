import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_USE_LOGARITHMIC_BLENDING_THIS_FRAME
 *
 * 0x6934C0E4AC296466

 * 
 * Flags the specified network entity to use logarithmic network blending for this frame only, this blending mode
 * prevents overshooting the target and can make things look smoother if the target object is not
 * behaving physically (i.e. being positioned by script each frame) at the expense of lagging behind.
 * IMPORTANT- This needs to be called every frame this behaviour is desired
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function networkUseLogarithmicBlendingThisFrame(entity: EntityIndex): void {
	const networkUseLogarithmicBlendingThisFrame_result = Citizen.invokeNative<void>('0x6934C0E4AC296466', entity);
	return networkUseLogarithmicBlendingThisFrame_result;
}