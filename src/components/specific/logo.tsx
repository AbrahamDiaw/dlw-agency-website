export function Logo(
	{
		className,
		invert = false,
		filled = false,
		fillOnHover = false,
		...props
	}: React.ComponentPropsWithoutRef<'svg'> & {
		invert?: boolean
		filled?: boolean
		fillOnHover?: boolean,
		className?: string
	}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={ 150 }
			height={ 100 }
			fill="none"
			className={ className }
			{ ...props }
		>
			<path
				fill="#059669"
				d="M66.171 33.796v25.198h13.013v6.302H57.559v-31.5h8.612Z"
			/>
			<mask
				id="a"
				width={ 14 }
				height={ 12 }
				x={ 72 }
				y={ 59 }
				maskUnits="userSpaceOnUse"
				style={ {
					maskType: "luminance",
				} }
			>
				<path fill="#fff" d="M72.4 59.883h13.15V70.84H72.4V59.883Z"/>
			</mask>
			<g mask="url(#a)">
				<mask
					id="b"
					width={ 14 }
					height={ 12 }
					x={ 72 }
					y={ 59 }
					maskUnits="userSpaceOnUse"
					style={ {
						maskType: "luminance",
					} }
				>
					<path
						fill="#fff"
						d="M78.975 59.883c-3.63 0-6.575 2.453-6.575 5.479 0 3.026 2.944 5.48 6.575 5.48 3.632 0 6.575-2.454 6.575-5.48 0-3.026-2.943-5.48-6.575-5.48Z"
					/>
				</mask>
				<g mask="url(#b)">
					<path fill={ invert ? "#00221C" : "#fff" } d="M72.4 59.883h13.15V70.84H72.4V59.883Z"/>
				</g>
			</g>
			<path
				fill="#059669"
				d="m100.012 64.954-6.05-17.677-6.05 17.677h-9.576l-10.775-31.5h9.575L83.6 55.068h.225l6.875-21.614h6.513l6.875 21.614h.225l6.462-21.614h9.538l-10.775 31.5h-9.525ZM29.713 35.153h10.95c5.256 0 9.75 1.498 13.475 4.49 3.731 2.987 5.6 6.737 5.6 11.25 0 4.529-1.86 8.289-5.575 11.281-3.71 2.995-8.21 4.49-13.5 4.49h-10.95v-31.51Zm8.612 25.094h1.338c3.14 0 5.712-.885 7.712-2.656 2.007-1.771 3.029-3.992 3.063-6.667 0-2.672-1.006-4.898-3.013-6.677-2-1.784-4.587-2.677-7.762-2.677h-1.338v18.677Z"
			/>
			<mask
				id="c"
				width={ 24 }
				height={ 21 }
				x={ 16 }
				y={ 20 }
				maskUnits="userSpaceOnUse"
				style={ {
					maskType: "luminance",
				} }
			>
				<path fill="#fff" d="M16.11 20.828h23.502v19.586H16.11V20.828Z"/>
			</mask>
			<g mask="url(#c)">
				<mask
					id="d"
					width={ 24 }
					height={ 21 }
					x={ 16 }
					y={ 20 }
					maskUnits="userSpaceOnUse"
					style={ {
						maskType: "luminance",
					} }
				>
					<path
						fill="#fff"
						d="M27.863 20.828c-6.491 0-11.754 4.383-11.754 9.792s5.263 9.794 11.753 9.794c6.488 0 11.75-4.385 11.75-9.794 0-5.41-5.262-9.792-11.75-9.792Z"
					/>
				</mask>
				<g mask="url(#d)">
					<path fill={ invert ? "#00221C" : "#fff" } d="M16.11 20.828h23.502v19.586H16.11V20.828Z"/>
				</g>
			</g>
			<mask
				id="e"
				width={ 24 }
				height={ 21 }
				x={ 110 }
				y={ 25 }
				maskUnits="userSpaceOnUse"
				style={ {
					maskType: "luminance",
				} }
			>
				<path fill="#fff" d="M110.396 25.456H133.9V45.04h-23.504V25.456Z"/>
			</mask>
			<g mask="url(#e)">
				<mask
					id="f"
					width={ 24 }
					height={ 21 }
					x={ 110 }
					y={ 25 }
					maskUnits="userSpaceOnUse"
					style={ {
						maskType: "luminance",
					} }
				>
					<path
						fill="#fff"
						d="M122.15 25.456c-6.491 0-11.754 4.385-11.754 9.791 0 5.41 5.263 9.794 11.754 9.794 6.487 0 11.75-4.385 11.75-9.794 0-5.406-5.263-9.791-11.75-9.791Z"
					/>
				</mask>
				<g mask="url(#f)">
					<path fill={ invert ? "#00221C" : "#fff" } d="M110.396 25.456H133.9V45.04h-23.504V25.456Z"/>
				</g>
			</g>
			<mask
				id="g"
				width={ 14 }
				height={ 12 }
				x={ 103 }
				y={ 59 }
				maskUnits="userSpaceOnUse"
				style={ {
					maskType: "luminance",
				} }
			>
				<path fill="#fff" d="M103.822 59.883h13.15V70.84h-13.15V59.883Z"/>
			</mask>
			<g mask="url(#g)">
				<mask
					id="h"
					width={ 14 }
					height={ 12 }
					x={ 103 }
					y={ 59 }
					maskUnits="userSpaceOnUse"
					style={ {
						maskType: "luminance",
					} }
				>
					<path
						fill="#fff"
						d="M110.397 59.883c-3.631 0-6.575 2.453-6.575 5.479 0 3.026 2.944 5.48 6.575 5.48 3.632 0 6.575-2.454 6.575-5.48 0-3.026-2.943-5.48-6.575-5.48Z"
					/>
				</mask>
				<g mask="url(#h)">
					<path fill={ invert ? "#00221C" : "#fff" } d="M103.822 59.883h13.15V70.84h-13.15V59.883Z"/>
				</g>
			</g>
			<mask
				id="i"
				width={ 7 }
				height={ 5 }
				x={ 107 }
				y={ 63 }
				maskUnits="userSpaceOnUse"
				style={ {
					maskType: "luminance",
				} }
			>
				<path fill="#fff" d="M107.622 63.047h5.553v4.63h-5.553v-4.63Z"/>
			</mask>
			<g mask="url(#i)">
				<mask
					id="j"
					width={ 7 }
					height={ 5 }
					x={ 107 }
					y={ 63 }
					maskUnits="userSpaceOnUse"
					style={ {
						maskType: "luminance",
					} }
				>
					<path
						fill="#fff"
						d="M110.397 63.047c-1.534 0-2.775 1.036-2.775 2.315s1.241 2.315 2.775 2.315c1.534 0 2.778-1.036 2.778-2.315s-1.244-2.315-2.778-2.315Z"
					/>
				</mask>
				<g mask="url(#j)">
					<path fill="#059669" d="M107.622 63.047h5.553v4.63h-5.553v-4.63Z"/>
				</g>
			</g>
			<mask
				id="k"
				width={ 7 }
				height={ 6 }
				x={ 27 }
				y={ 31 }
				maskUnits="userSpaceOnUse"
				style={ {
					maskType: "luminance",
				} }
			>
				<path fill="#fff" d="M27.862 31.412h5.553v4.627h-5.553v-4.627Z"/>
			</mask>
			<g mask="url(#k)">
				<mask
					id="l"
					width={ 7 }
					height={ 6 }
					x={ 27 }
					y={ 31 }
					maskUnits="userSpaceOnUse"
					style={ {
						maskType: "luminance",
					} }
				>
					<path
						fill="#fff"
						d="M30.637 31.412c-1.534 0-2.775 1.036-2.775 2.312 0 1.279 1.24 2.315 2.775 2.315s2.778-1.036 2.778-2.315c0-1.276-1.243-2.312-2.778-2.312Z"
					/>
				</mask>
				<g mask="url(#l)">
					<path fill="#059669" d="M27.862 31.412h5.553v4.627h-5.553v-4.627Z"/>
				</g>
			</g>
		</svg>
	)
}

