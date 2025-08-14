import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				gold: {
					DEFAULT: 'hsl(var(--gold))',
					light: 'hsl(var(--gold-light))',
					dark: 'hsl(var(--gold-dark))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-dark': 'var(--gradient-dark)',
			},
			boxShadow: {
				'gold': 'var(--shadow-gold)',
				'elegant': 'var(--shadow-elegant)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'matrix-enter': {
					'0%': {
						opacity: '0',
						transform: 'perspective(1000px) rotateX(90deg) rotateY(45deg) rotateZ(10deg) translateZ(-200px) scale(0.5)',
						filter: 'blur(10px) hue-rotate(180deg)',
					},
					'25%': {
						opacity: '0.3',
						transform: 'perspective(1000px) rotateX(45deg) rotateY(22deg) rotateZ(5deg) translateZ(-100px) scale(0.7)',
						filter: 'blur(5px) hue-rotate(90deg)',
					},
					'50%': {
						opacity: '0.6',
						transform: 'perspective(1000px) rotateX(22deg) rotateY(11deg) rotateZ(2deg) translateZ(-50px) scale(0.9)',
						filter: 'blur(2px) hue-rotate(45deg)',
					},
					'75%': {
						opacity: '0.8',
						transform: 'perspective(1000px) rotateX(11deg) rotateY(5deg) rotateZ(1deg) translateZ(-25px) scale(1.05)',
						filter: 'blur(1px) hue-rotate(20deg)',
					},
					'100%': {
						opacity: '1',
						transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px) scale(1)',
						filter: 'blur(0px) hue-rotate(0deg)',
					}
				},
				'glitch-crazy': {
					'0%, 100%': {
						transform: 'translate(0)',
						filter: 'hue-rotate(0deg)',
					},
					'10%': {
						transform: 'translate(-2px, 2px)',
						filter: 'hue-rotate(90deg)',
					},
					'20%': {
						transform: 'translate(-3px, 0px)',
						filter: 'hue-rotate(180deg)',
					},
					'30%': {
						transform: 'translate(3px, 2px)',
						filter: 'hue-rotate(270deg)',
					},
					'40%': {
						transform: 'translate(-1px, -1px)',
						filter: 'hue-rotate(360deg)',
					},
					'50%': {
						transform: 'translate(-3px, 2px)',
						filter: 'hue-rotate(180deg)',
					},
					'60%': {
						transform: 'translate(3px, 1px)',
						filter: 'hue-rotate(90deg)',
					},
					'70%': {
						transform: 'translate(-2px, 1px)',
						filter: 'hue-rotate(270deg)',
					},
					'80%': {
						transform: 'translate(-3px, -1px)',
						filter: 'hue-rotate(45deg)',
					},
					'90%': {
						transform: 'translate(2px, 2px)',
						filter: 'hue-rotate(315deg)',
					}
				},
				'morph-wild': {
					'0%': {
						transform: 'scale(0) rotate(0deg) skew(0deg, 0deg)',
						borderRadius: '50%',
						opacity: '0',
					},
					'25%': {
						transform: 'scale(0.5) rotate(90deg) skew(10deg, 5deg)',
						borderRadius: '30%',
						opacity: '0.4',
					},
					'50%': {
						transform: 'scale(1.2) rotate(180deg) skew(-5deg, 10deg)',
						borderRadius: '10%',
						opacity: '0.7',
					},
					'75%': {
						transform: 'scale(0.8) rotate(270deg) skew(5deg, -5deg)',
						borderRadius: '20%',
						opacity: '0.9',
					},
					'100%': {
						transform: 'scale(1) rotate(360deg) skew(0deg, 0deg)',
						borderRadius: 'var(--radius)',
						opacity: '1',
					}
				}
			}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'matrix-enter': 'matrix-enter 2.5s cubic-bezier(0.23, 1, 0.32, 1)',
				'glitch-crazy': 'glitch-crazy 0.5s ease-in-out',
				'morph-wild': 'morph-wild 2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
