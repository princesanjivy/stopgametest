const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.SetAnim
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Sprite2: 0},
	{Touch: 0},
	{Sprite3: 0},
	{bcf3f5445887ace466f4c33d2a: 0},
	{Text: 0},
	{stop: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	bcf3f5445887ace466f4c33d2a: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {}
}