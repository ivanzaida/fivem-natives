import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_HEAD_BLEND_EYE_COLOR
 *
 * 0x348FF3E632DCB635

 * Used for freemode (online) characters.
 * For some reason, the scripts use a rounded float for the index.
 * Indexes:
 * 1. black
 * 2. very light blue/green
 * 3. dark blue
 * 4. brown
 * 5. darker brown
 * 6. light brown
 * 7. blue
 * 8. light blue
 * 9. pink
 * 10. yellow
 * 11. purple
 * 12. black
 * 13. dark green
 * 14. light brown
 * 15. yellow/black pattern
 * 16. light colored spiral pattern
 * 17. shiny red
 * 18. shiny half blue/half red
 * 19. half black/half light blue
 * 20. white/red perimter
 * 21. green snake
 * 22. red snake
 * 23. dark blue snake
 * 24. dark yellow
 * 25. bright yellow
 * 26. all black
 * 28. red small pupil
 * 29. devil blue/black
 * 30. white small pupil
 * 31. glossed over
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} color
 */
export function setHeadBlendEyeColor(ped: PedIndex, color: number): void {
	const setHeadBlendEyeColor_result = Citizen.invokeNative<void>('0x348FF3E632DCB635', ped, color);
	return setHeadBlendEyeColor_result;
}