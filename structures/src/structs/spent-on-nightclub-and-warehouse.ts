export class SpentOnNightclubAndWarehouse {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(368))) {
		if (dataView.byteLength !== 368) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get location(): number {
		return this.dataView.getInt32(0, true)
	}

	public get location_amount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get dj(): number {
		return this.dataView.getInt32(16, true)
	}

	public get dj_amount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get style(): number {
		return this.dataView.getInt32(32, true)
	}

	public get style_amount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get tint(): number {
		return this.dataView.getInt32(48, true)
	}

	public get tint_amount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get lighting(): number {
		return this.dataView.getInt32(64, true)
	}

	public get lighting_amount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get staff(): number {
		return this.dataView.getInt32(80, true)
	}

	public get staff_amount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get security(): number {
		return this.dataView.getInt32(96, true)
	}

	public get security_amount(): number {
		return this.dataView.getInt32(104, true)
	}

	public get equipment(): number {
		return this.dataView.getInt32(112, true)
	}

	public get equipment_amount(): number {
		return this.dataView.getInt32(120, true)
	}

	public get whGarage2(): number {
		return this.dataView.getInt32(128, true)
	}

	public get whGarage2_amount(): number {
		return this.dataView.getInt32(136, true)
	}

	public get whGarage3(): number {
		return this.dataView.getInt32(144, true)
	}

	public get whGarage3_amount(): number {
		return this.dataView.getInt32(152, true)
	}

	public get whGarage4(): number {
		return this.dataView.getInt32(160, true)
	}

	public get whGarage4_amount(): number {
		return this.dataView.getInt32(168, true)
	}

	public get whGarage5(): number {
		return this.dataView.getInt32(176, true)
	}

	public get whGarage5_amount(): number {
		return this.dataView.getInt32(184, true)
	}

	public get whBasement2(): number {
		return this.dataView.getInt32(192, true)
	}

	public get whBasement2_amount(): number {
		return this.dataView.getInt32(200, true)
	}

	public get whBasement3(): number {
		return this.dataView.getInt32(208, true)
	}

	public get whBasement3_amount(): number {
		return this.dataView.getInt32(216, true)
	}

	public get whBasement4(): number {
		return this.dataView.getInt32(224, true)
	}

	public get whBasement4_amount(): number {
		return this.dataView.getInt32(232, true)
	}

	public get whBasement5(): number {
		return this.dataView.getInt32(240, true)
	}

	public get whBasement5_amount(): number {
		return this.dataView.getInt32(248, true)
	}

	public get whTechnician2(): number {
		return this.dataView.getInt32(256, true)
	}

	public get whTechnician2_amount(): number {
		return this.dataView.getInt32(264, true)
	}

	public get whTechnician3(): number {
		return this.dataView.getInt32(272, true)
	}

	public get whTechnician3_amount(): number {
		return this.dataView.getInt32(280, true)
	}

	public get whTechnician4(): number {
		return this.dataView.getInt32(288, true)
	}

	public get whTechnician4_amount(): number {
		return this.dataView.getInt32(296, true)
	}

	public get whTechnician5(): number {
		return this.dataView.getInt32(304, true)
	}

	public get whTechnician5_amount(): number {
		return this.dataView.getInt32(312, true)
	}

	public get name(): number {
		return this.dataView.getInt32(320, true)
	}

	public get name_amount(): number {
		return this.dataView.getInt32(328, true)
	}

	public get podium(): number {
		return this.dataView.getInt32(336, true)
	}

	public get podium_amount(): number {
		return this.dataView.getInt32(344, true)
	}

	public get dryice(): number {
		return this.dataView.getInt32(352, true)
	}

	public get dryice_amount(): number {
		return this.dataView.getInt32(360, true)
	}
}