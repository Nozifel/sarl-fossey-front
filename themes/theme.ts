import { definePreset, palette } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

// https://github.com/primefaces/primevue/blob/master/packages/themes/src/presets/aura/base/index.js

const MyPreset = definePreset(Aura, {
	semantic: {
		primary: palette("{#b1281f}"),
		secondary: palette("#46ee3b"),
		colorScheme: {
			light: {
				surface: palette("#b1281f"),
			},
			dark: {
				surface: palette("#b1281f"),
			},
		},
	},
	components: {
		button: {
			colorScheme: {
				light: {
					//color: "white",
				},
				dark: {
					primary: {
						color: "white",
						background: "{primary.500}",
					},
				},
			},
		},
		datepicker: {
			date: {
				selected: {
					color: "white",
					background: "{primary.500}",
				},
				range:{
					selected: {
						background: "{primary.300}",
						color: "white",
					},
				}
			}
		},
		paginator: {
			background: "transparent",
			colorScheme: {
				light: {
					nav: {
						button: {
							selected: {
								background: "{surface.400}",
								color: "white",
							}
						}
					}
				},
				dark: {
					nav: {
						button: {
							selected: {
								background: "{surface.900}",
								color: "white",
							}
						}
					}
				},
			},
		},
		toolbar: {
			background: "transparent",
		},
		datatable: {
			column: {
				title: {
					fontWeight: "inherit",
				}
			},
			colorScheme: {
				light: {
					sort: {
						icon: {
							color: "{surface:800}"
						}
					},
					header: {
						background: "transparent",
						cell: {
							background: "{surface.400} !important",
							color: "white !important",
						}
					},
					row: {
						background: "transparent",
						hover: {
							background: "{surface.400}",
							color: "white",
						}
					}
				},
				dark: {
					sort: {
						icon: {
							color: "{surface:500}"
						}
					},
					header: {
						background: "transparent",
						cell: {
							background: "{surface.900} !important",
							color: "white !important",
						}
					},
					row: {
						background: "transparent",
						hover: {
							background: "{surface.900}"
						}
					}
				},
			}
		}
	},
});

export default {
	preset: MyPreset,
	options: {
		darkModeSelector: ".dark",
		cssLayer: {
			name: "primevue",
			order: "theme, base, primevue",
		},
	},
};
