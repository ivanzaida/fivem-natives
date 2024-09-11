export enum EMicroMorphType {
	MmtNoseWidth, // pairs of morphs, expect a blend value in range [-1.0, 1.0]
	MmtNoseHeight,
	MmtNoseLength,
	MmtNoseProfile,
	MmtNoseTip,
	MmtNoseBroke,
	MmtBrowHeight,
	MmtBrowDepth,
	MmtCheekHeight,
	MmtCheekDepth,
	MmtCheekPuffed,
	MmtEyesSize,
	MmtLipsSize,
	MmtJawWidth,
	MmtJawRound,
	MmtChinHeight,
	MmtChinDepth,
	MmtChinPointed,
	MmtChinBum, // single morphs, expect a value in range [0.0, 1.0]
	MmtNeckMale,
}